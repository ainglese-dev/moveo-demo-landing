import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ainglese-dev.github.io',
  base: '/moveo-demo-landing',
  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    assets: 'assets'
  }
});