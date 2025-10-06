import bcrypt from 'bcrypt';

export type UserDoc = {
  id: string; email: string; passwordHash: string;
  name?: string; role: 'user'|'admin';
  createdAt: Date; updatedAt: Date;
};
export type PostDoc = {
  id: string; ownerId: string; title?: string; body?: string;
  tags: string[]; createdAt: Date; updatedAt: Date;
};
export type FileAssetDoc = {
  id: string; ownerId: string; key: string; bucket?: string;
  size: number; mime: string;
  visibility: 'public'|'private';
  title?: string; tags?: string[];
  createdAt: Date; updatedAt: Date;
};

// In-memory stores
const users = new Map<string, UserDoc>();
const posts = new Map<string, PostDoc>();
const files = new Map<string, FileAssetDoc>();
type EventStatus = 'draft'|'published'|'cancelled';
export type EventDoc = {
  id: string; ownerId: string; title: string;
  startsAt: Date; endsAt: Date;
  venueName?: string; venueAddress?: string; city?: string; country?: string;
  coverFileId?: string; tags: string[];
  status: EventStatus;
  createdAt: Date; updatedAt: Date;
};
export type TicketTypeDoc = {
  id: string; eventId: string; name: string;
  priceCents: number; currency: string;
  quantityTotal: number; quantitySold: number;
  salesStart?: Date; salesEnd?: Date;
  createdAt: Date; updatedAt: Date;
};
export type TicketDoc = {
  id: string; eventId: string; ticketTypeId: string; ownerUserId: string;
  serial: string; qrDataKey: string;
  status: 'active'|'used'|'refunded';
  createdAt: Date; usedAt?: Date;
};

// Dev object storage (S3 stand-in): key -> { bytes, mime }
const blobs = new Map<string, { bytes: Buffer; mime: string }>();
const events = new Map<string, EventDoc>();
const ticketTypes = new Map<string, TicketTypeDoc>();
const tickets = new Map<string, TicketDoc>();

function id() { return crypto.randomUUID(); }
function now() { return new Date(); }

// USERS
export const UserRepo = {
  async create({ email, password, name }:{
    email: string; password: string; name?: string;
  }) {
    if ([...users.values()].some(u => u.email === email))
      throw new Error('Email exists');
    const passwordHash = await bcrypt.hash(password, 12);
    const role: 'user'|'admin' = users.size === 0 ? 'admin' : 'user';
    const doc: UserDoc = { id: id(), email, passwordHash, name, role, createdAt: now(), updatedAt: now() };
    users.set(doc.id, doc);
    return doc;
  },
  async findByEmail(email: string) {
    return [...users.values()].find(u => u.email === email) ?? null;
  },
  async findById(uid: string) { return users.get(uid) ?? null; }
};

// POSTS
export const PostRepo = {
  async list({ q, tag, page, pageSize }:{
    q?: string; tag?: string; page: number; pageSize: number;
  }) {
    let arr = [...posts.values()];
    if (q) {
      const needle = q.toLowerCase();
      arr = arr.filter(p => (p.title ?? '').toLowerCase().includes(needle) || (p.body ?? '').toLowerCase().includes(needle));
    }
    if (tag) arr = arr.filter(p => p.tags.includes(tag));
    const total = arr.length;
    arr.sort((a,b)=> b.createdAt.getTime()-a.createdAt.getTime());
    const items = arr.slice((page-1)*pageSize, page*pageSize);
    return { items, total, page, pageSize };
  },
  async get(id: string) { return posts.get(id) ?? null; },
  async create({ ownerId, title, body, tags }:{
    ownerId: string; title: string; body?: string; tags: string[];
  }) {
    const doc: PostDoc = { id: id(), ownerId, title, body, tags: tags ?? [], createdAt: now(), updatedAt: now() };
    posts.set(doc.id, doc);
    return doc;
  },
  async update(id: string, ownerId: string, patch: Partial<Omit<PostDoc, 'id'|'ownerId'|'createdAt'>>) {
    const cur = posts.get(id);
    if (!cur || cur.ownerId !== ownerId) return null;
    const next = { ...cur, ...patch, updatedAt: now() };
    posts.set(id, next);
    return next;
  },
  async delete(id: string, ownerId: string) {
    const cur = posts.get(id);
    if (!cur || cur.ownerId !== ownerId) return false;
    posts.delete(id);
    return true;
  }
};

// FILES
export const FileRepo = {
  async finalize(data: Omit<FileAssetDoc,'id'|'createdAt'|'updatedAt'>) {
    const doc: FileAssetDoc = { id: id(), createdAt: now(), updatedAt: now(), ...data };
    files.set(doc.id, doc);
    return doc;
  },
  async list(ownerId: string, page: number, pageSize: number) {
    const arr = [...files.values()].filter(f => f.ownerId === ownerId)
      .sort((a,b)=> b.createdAt.getTime()-a.createdAt.getTime());
    const items = arr.slice((page-1)*pageSize, page*pageSize);
    return { items, page, pageSize };
  },
  async getById(id: string) { return files.get(id) ?? null; },
  async deleteById(id: string, ownerId: string) {
    const cur = files.get(id);
    if (!cur || cur.ownerId !== ownerId) return false;
    files.delete(id);
    blobs.delete(cur.key);
    return true;
  },
  // Dev object store ops
  putBlob(key: string, mime: string, bytes: Buffer) { blobs.set(key, { mime, bytes }); },
  getBlob(key: string) { return blobs.get(key) ?? null; },
  deleteBlob(key: string) { blobs.delete(key); }
};

export const EventRepo = {
  async create(data: Omit<EventDoc,'id'|'createdAt'|'updatedAt'>) {
    const doc: EventDoc = { id: id(), createdAt: now(), updatedAt: now(), ...data };
    events.set(doc.id, doc);
    return doc;
  },
  async listPublished({ page, pageSize }:{ page: number; pageSize: number; }) {
    const arr = [...events.values()].filter(e => e.status === 'published')
      .sort((a,b)=> a.startsAt.getTime()-b.startsAt.getTime());
    const items = arr.slice((page-1)*pageSize, page*pageSize);
    return { items, page, pageSize };
  },
  async get(id: string) { return events.get(id) ?? null; }
};

export const TicketingRepo = {
  async addTicketType(data: Omit<TicketTypeDoc,'id'|'createdAt'|'updatedAt'|'quantitySold'>) {
    const doc: TicketTypeDoc = { id: id(), createdAt: now(), updatedAt: now(), quantitySold: 0, ...data };
    ticketTypes.set(doc.id, doc);
    return doc;
  },
  async listTicketTypes(eventId: string) {
    return [...ticketTypes.values()].filter(t => t.eventId === eventId);
  },
  async purchase({ eventId, ticketTypeId, ownerUserId }:{ eventId: string; ticketTypeId: string; ownerUserId: string; }) {
    const tt = ticketTypes.get(ticketTypeId);
    if (!tt || tt.eventId !== eventId) throw new Error('Invalid ticket type');
    if (tt.quantitySold >= tt.quantityTotal) throw new Error('Sold out');
    tt.quantitySold += 1; tt.updatedAt = now();
    const serial = `${eventId.slice(0,8)}-${tt.id.slice(0,6)}-${(tt.quantitySold).toString().padStart(5,'0')}`;
    const qrDataKey = crypto.randomUUID();
    const doc: TicketDoc = { id: id(), eventId, ticketTypeId, ownerUserId, serial, qrDataKey, status: 'active', createdAt: now() };
    tickets.set(doc.id, doc);
    return doc;
  },
  async listMyTickets(ownerUserId: string) {
    return [...tickets.values()].filter(t => t.ownerUserId === ownerUserId);
  },
  async validate(qrDataKey: string) {
    const ticket = [...tickets.values()].find(t => t.qrDataKey === qrDataKey);
    if (!ticket) return { ok: false as const, reason: 'not_found' };
    if (ticket.status !== 'active') return { ok: false as const, reason: ticket.status };
    ticket.status = 'used';
    ticket.usedAt = now();
    tickets.set(ticket.id, ticket);
    return { ok: true as const, ticket };
  }
};


