import type { APIRoute } from 'astro';

// No production domain is attached yet (Vercel Preview-only — see
// docs/DECISIONS.md ADR-010), so every non-production build disallows
// crawling. VERCEL_ENV is Vercel's own build-time signal, set to
// "production" only for the actual Production deployment — once this
// branch is merged and promoted, this flips with no code change needed.
export const GET: APIRoute = ({ site }) => {
  const isProduction = process.env.VERCEL_ENV === 'production';
  const lines = isProduction ? ['User-agent: *', 'Allow: /'] : ['User-agent: *', 'Disallow: /'];

  if (site) {
    lines.push('', `Sitemap: ${site.toString().replace(/\/$/, '')}/sitemap.xml`);
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
