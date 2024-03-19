import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterStatic({
			fallback: "index.html",
            pages: "docs",
            assets: "docs"
		 }),
		 paths: {
            // change below to your repo name
            base: dev ? "" : "/sveltekit-treasure-hunt",
        }
	}
};

export default config;
