import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    tailwind({
      config: { path: './tailwind.config.mjs' },
      applyBaseStyles: true,
    }),
  ],
});