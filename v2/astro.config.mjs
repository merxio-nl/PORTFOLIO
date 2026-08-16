// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // English is the only populated locale for this prototype. Russian and
  // Dutch are declared so routing/content structure is ready for them
  // later without a routing rework — see docs/DECISIONS.md ADR-006.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});