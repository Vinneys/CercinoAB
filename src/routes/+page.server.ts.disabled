import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// Simple validation
		if (!username || !password) {
			return fail(400, { error: 'Username and password are required' });
		}

		// Check credentials
		if (username === 'admin' && password === '123') {
			// Set session cookie
			cookies.set('session', 'authenticated', {
				httpOnly: true,
				sameSite: 'lax',
				path: '/',
				maxAge: 60 * 60 * 24 * 7 // 7 days
			});

			// Redirect to app
			throw redirect(303, '/app');
		} else {
			return fail(400, { error: 'Invalid credentials' });
		}
	}
};