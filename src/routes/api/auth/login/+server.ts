import { json } from '@sveltejs/kit';
import { UserRepo } from '$lib/server/repos/memory';
import { setAuthCookie, signToken } from '$lib/server/auth/jwt';
import bcrypt from 'bcrypt';

export async function POST({ request, cookies }) {
  const { email, password } = await request.json();
  const user = await UserRepo.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.passwordHash)))
    return new Response('Invalid credentials', { status: 401 });
  setAuthCookie(cookies, signToken({ uid: user.id, role: user.role }));
  return json({ id: user.id, email: user.email, name: user.name, role: user.role });
}


