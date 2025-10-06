import jwt from 'jsonwebtoken';
import type { Cookies } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';

type Claims = { uid: string; role: 'user' | 'admin' };

export const signToken = (c: Claims) => jwt.sign(c, JWT_SECRET, { expiresIn: '7d' });

export const verifyToken = (t: string) => jwt.verify(t, JWT_SECRET) as Claims;

export function getUserFromCookies(cookies: Cookies): Claims | null {
  const token = cookies.get('auth');
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

export function setAuthCookie(cookies: Cookies, token: string) {
  cookies.set('auth', token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    secure: true
  });
}

export function clearAuthCookie(cookies: Cookies) {
  cookies.delete('auth', { path: '/' });
}


