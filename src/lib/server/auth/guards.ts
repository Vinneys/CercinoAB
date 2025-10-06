import type { RequestEvent } from '@sveltejs/kit';
import { getUserFromCookies } from './jwt';

export function requireAuth(event: RequestEvent) {
  const user = getUserFromCookies(event.cookies);
  if (!user) throw new Response('Unauthorized', { status: 401 });
  return user;
}


