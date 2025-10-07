import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // SPA fallback to index.html to work on static hosting
        adapter: adapter({ fallback: 'index.html' }),
        prerender: {
            handleHttpError: 'warn'
        }
    }
};

export default config;
