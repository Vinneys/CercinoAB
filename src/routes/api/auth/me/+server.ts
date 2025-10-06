import { json } from '@sveltejs/kit';
export async function GET({ locals }) {
  if (!locals.user) return new Response('Unauthorized', { status: 401 });
  return json(locals.user);
}


