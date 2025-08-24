import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.CUSTOM_DOMAIN || 'https://ainglese-dev.github.io',
  base: process.env.CUSTOM_DOMAIN ? '' : (process.env.NODE_ENV === 'production' ? '/moveo-demo-landing' : '/'),
  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    assets: 'assets'
  }
});