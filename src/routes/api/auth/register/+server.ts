import { json } from '@sveltejs/kit';
import { UserRepo } from '$lib/server/repos/memory';
import { setAuthCookie, signToken } from '$lib/server/auth/jwt';

export async function POST({ request, cookies }) {
  const { email, password, name } = await request.json();
  const user = await UserRepo.create({ email, password, name });
  setAuthCookie(cookies, signToken({ uid: user.id, role: user.role }));
  return json({ id: user.id, email: user.email, name: user.name, role: user.role }, { status: 201 });
}


