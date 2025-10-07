import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // Use default adapter-static output directory "build" for clarity
        adapter: adapter({
            fallback: '404.html'
        }),
        prerender: {
            handleHttpError: 'warn'
        }
    }
};

export default config;
