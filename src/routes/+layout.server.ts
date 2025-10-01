import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	// Define protected routes
	const protectedRoutes = ['/feed', '/tickets', '/profile'];
	const currentPath = url.pathname;

	// Check if current route is protected
	const isProtectedRoute = protectedRoutes.some(route => currentPath.startsWith(route));

	// If accessing protected route without authentication, redirect to login
	// Temporarily disabled for testing
	// if (isProtectedRoute && !locals.user) {
	// 	throw redirect(303, '/');
	// }

	return {
		user: locals.user
	};
};
