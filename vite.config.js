import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

export default defineConfig({
  server: {
    host: true,
    port: 12000,
    https: true,
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        preserve: ['ld+json'],
      }),
      /* plugin options */
    }),
  ],
});
