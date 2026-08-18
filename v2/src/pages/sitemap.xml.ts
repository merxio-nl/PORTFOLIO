import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { languages } from '../i18n/ui';
import { localizedPath, type Lang } from '../i18n/utils';

// Hand-rolled rather than a sitemap integration: the route list is small
// and already enumerable from the same content collection every page uses
// (getCollection), so a new project automatically appears here with zero
// maintenance — see docs/DECISIONS.md ADR-010.
export const GET: APIRoute = async ({ site }) => {
  const langCodes = Object.keys(languages) as Lang[];
  const urls: string[] = [];

  for (const lang of langCodes) {
    const projects = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
    urls.push(localizedPath('/', lang));
    urls.push(localizedPath('/work/', lang));
    for (const project of projects) {
      const slug = project.id.split('/').slice(1).join('/');
      urls.push(localizedPath(`/work/${slug}/`, lang));
    }
  }

  const base = site ? site.toString().replace(/\/$/, '') : '';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${base}${url}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
