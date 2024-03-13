import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// @ts-expect-error library types issue
import delegateEvents from 'svelte-preprocess-delegate-events/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), delegateEvents()],
	kit: {
		adapter: adapter(),
		alias: {
			'$docs/*': './src/docs/*'
		}
	}
};

export default config;
