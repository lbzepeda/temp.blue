import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.tempblue.com.ni',
  output: 'static',
  server: {
    host: true,
  },
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
  integrations: [
    sitemap(),
    tailwind({
      config: { path: './tailwind.config.mjs' },
      applyBaseStyles: true,
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
