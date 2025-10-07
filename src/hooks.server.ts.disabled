import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const sessionHandle: Handle = async ({ event, resolve }) => {
	// Read session cookie
	const session = event.cookies.get('session');
	
	// Set user in locals if session exists
	if (session) {
		event.locals.user = { username: 'admin' };
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};

export const handle: Handle = sequence(sessionHandle);
