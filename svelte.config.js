import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapterStatic({
		// 	fallback: "index.html",
        //     pages: "docs",
        //     assets: "docs"
		//  }),
		appDir: 'app',
		adapter: adapter({
			fallback: "404.html",
			pages: "docs",
			assets: "docs"
		}),
		 paths: {
            // change below to your repo name
            base: process.env.NODE_ENV === "production" ? "/sveltekit-treasure-hunt" : "",
        },
		prerender: {
			entries: [
				'*',
				'/hunt/1',
				'/hunt/2',
				'/hunt/3',
				'/hunt/4',
				'/hunt/5',
				'/hunt/6',
				'/hunt/7',
			]
		}
	}
};

export default config;
