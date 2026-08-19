# JOMO Studio — Portfolio V2

Astro-based rebuild of the portfolio, alongside the current production
site at the repository root. See `docs/PROJECT.md` and
`docs/DECISIONS.md` at the repo root for background and architecture
rationale (ADR-006/007 for the original stack/IA, ADR-009 for the
three-locale setup, ADR-010 for the SEO/production-readiness pass,
ADR-011 for the brand kit).

Everything JOMO-specific — code, content, and brand assets — lives
inside this directory. Nothing JOMO-related belongs at the repository
root; see the root `README.md` and `CLAUDE.md` for the full V1/V2
boundary.

## Project structure

```text
v2/
├── brand/                logo/wordmark/OG-card source assets — see brand/README.md
├── public/               static assets, served as-is (images, favicon, og-image.png)
├── src/
│   ├── components/       shared UI components
│   │   └── views/        full-page views, parameterized by lang (en/ru/nl)
│   ├── content/projects/ project data, one folder per locale (en/, ru/, nl/)
│   ├── i18n/              UI copy dictionary + locale helpers
│   ├── layouts/           Base.astro (document shell, fonts, metadata)
│   ├── pages/             EN routes; RU/NL routes live under pages/ru/, pages/nl/;
│   │                      also sitemap.xml.ts, robots.txt.ts, 404.astro
│   └── styles/            global.css (design tokens, base styles)
└── astro.config.mjs
```

## Commands

All commands run from `v2/`:

| Command             | Action                                      |
| :------------------ | :------------------------------------------- |
| `npm install`        | Install dependencies                         |
| `npm run dev`         | Start local dev server at `localhost:4321`   |
| `npm run build`       | Build the production site to `./dist/`       |
| `npm run preview`     | Preview the build locally                    |
| `npx astro check`     | Type-check the project                       |

## Adding a project

Add matching `src/content/projects/en/<slug>.json`,
`src/content/projects/ru/<slug>.json`, and
`src/content/projects/nl/<slug>.json` entries (see `src/content.config.ts`
for the schema). Narrative fields (`problem`/`solution`/`outcome`) are
optional — leave them unset rather than inventing content for a project
that doesn't have a full case study yet. New projects automatically
appear in `sitemap.xml` — no extra step needed.

## Adding UI copy

Add the string to the `en`, `ru`, and `nl` blocks in `src/i18n/ui.ts`,
then reference it via `useTranslations(lang)`. Don't hardcode user-facing
text into components.

## Deployment

JOMO Studio V2 deploys via Vercel, connected to this GitHub repository:

- **Source repository:** GitHub (this repo)
- **Root Directory:** `v2`
- **Production branch:** `main`
- **Preview deployments:** automatic, for feature branches and pull
  requests

This is separate from the V1 production site at the repository root,
which continues to deploy through GitHub Pages.

The Vercel Root Directory is confirmed set to `v2`, and preview
deployments trigger automatically on every push to a feature branch.
