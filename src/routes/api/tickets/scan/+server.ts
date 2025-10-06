import { json } from '@sveltejs/kit';
import { TicketingRepo } from '$lib/server/repos/memory';

export async function POST({ request }) {
  const { qrDataKey } = await request.json();
  if (!qrDataKey) return new Response('Bad Request', { status: 400 });
  const res = await TicketingRepo.validate(qrDataKey);
  if (!res.ok) return json({ ok: false, reason: res.reason }, { status: 400 });
  return json({ ok: true, ticket: res.ticket });
}


