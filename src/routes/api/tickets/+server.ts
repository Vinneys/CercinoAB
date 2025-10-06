import { json } from '@sveltejs/kit';
import { requireAuth } from '$lib/server/auth/guards';
import { TicketingRepo, EventRepo } from '$lib/server/repos/memory';
import { PurchaseTicket } from '$lib/server/validation/events';
import { sendEmail } from '$lib/server/email';

export async function GET(event) {
  const user = requireAuth(event);
  const items = await TicketingRepo.listMyTickets(user.uid);
  // attach event info minimal for UI
  const enriched = await Promise.all(items.map(async t => {
    const ev = await EventRepo.get(t.eventId);
    return { ...t, event: ev ? { id: ev.id, title: ev.title, startsAt: ev.startsAt, venueAddress: ev.venueAddress, city: ev.city, country: ev.country } : null };
  }));
  return json({ items: enriched });
}

export async function POST(event) {
  const user = requireAuth(event);
  const data = PurchaseTicket.parse(await event.request.json());
  const t = await TicketingRepo.purchase({ ...data, ownerUserId: user.uid });
  const ev = await EventRepo.get(t.eventId);
  // Best-effort email
  const mapsQuery = encodeURIComponent([ev?.venueAddress, ev?.city, ev?.country].filter(Boolean).join(', '));
  const mapsUrl = `https://maps.google.com/?q=${mapsQuery}`;
  await sendEmail({
    to: 'dev-null@example.com',
    subject: `Your ticket for ${ev?.title ?? 'Event'}`,
    text: `Serial: ${t.serial}\nWhen: ${ev?.startsAt?.toISOString()}\nMaps: ${mapsUrl}`,
    html: `<p>Serial: <b>${t.serial}</b></p><p>When: ${ev?.startsAt?.toISOString()}</p><p><a href="${mapsUrl}">Open in Google Maps</a></p>`
  }).catch(()=>({ ok:false }));
  return json(t, { status: 201 });
}


