import { json } from '@sveltejs/kit';
import { EventRepo, TicketingRepo } from '$lib/server/repos/memory';
import { requireAuth } from '$lib/server/auth/guards';
import { CreateEvent, CreateTicketType } from '$lib/server/validation/events';

export async function GET({ url }) {
  const page = Number(url.searchParams.get('page') ?? 1);
  const pageSize = 20;
  const out = await EventRepo.listPublished({ page, pageSize });
  return json(out);
}

export async function POST(event) {
  const user = requireAuth(event);
  const data = CreateEvent.parse(await event.request.json());
  const doc = await EventRepo.create({ ...data, ownerId: user.uid });
  return json(doc, { status: 201 });
}

export async function PUT(event) {
  const user = requireAuth(event);
  const body = await event.request.json();
  if (body.kind === 'ticketType') {
    const tt = CreateTicketType.parse(body.data);
    // no explicit ownership checks in memory version; add when DB exists
    const doc = await TicketingRepo.addTicketType(tt);
    return json(doc, { status: 201 });
  }
  return new Response('Bad Request', { status: 400 });
}


