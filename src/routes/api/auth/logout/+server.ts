import { clearAuthCookie } from '$lib/server/auth/jwt';
export async function POST({ cookies }) {
  clearAuthCookie(cookies);
  return new Response(null, { status: 204 });
}


