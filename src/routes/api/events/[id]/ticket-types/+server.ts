import { json } from '@sveltejs/kit';
import { TicketingRepo } from '$lib/server/repos/memory';

export async function GET({ params }) {
  const items = await TicketingRepo.listTicketTypes(params.id);
  return json({ items });
}


