// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// No production domain has been assigned yet (still Vercel Preview-only —
// see docs/DECISIONS.md ADR-010). `site` drives canonical/hreflang/OG URLs
// and the sitemap, so it's derived from Vercel's own build-time env vars
// instead of a guessed/hardcoded domain: VERCEL_PROJECT_PRODUCTION_URL is
// the assigned production URL (works even on preview builds),
// VERCEL_URL is the current deployment's own URL as a fallback, and
// localhost covers local dev/build. Once a real domain is attached, this
// resolves correctly with no code change.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  // All three locales are populated — see docs/DECISIONS.md ADR-009.
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