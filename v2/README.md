# JOMO Studio — Portfolio V2

Astro-based rebuild of the portfolio, alongside the current production
site at the repository root. See `docs/PROJECT.md` and
`docs/DECISIONS.md` (ADR-006, ADR-007) at the repo root for background
and architecture rationale.

## Project structure

```text
v2/
├── public/               static assets, served as-is (images, favicon)
├── src/
│   ├── components/       shared UI components
│   │   └── views/        full-page views, parameterized by lang (en/ru)
│   ├── content/projects/ project data, one folder per locale (en/, ru/)
│   ├── i18n/              UI copy dictionary + locale helpers
│   ├── layouts/           Base.astro (document shell, fonts)
│   ├── pages/             EN routes (RU routes live under pages/ru/)
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

Add matching `src/content/projects/en/<slug>.json` and
`src/content/projects/ru/<slug>.json` entries (see `src/content.config.ts`
for the schema). Narrative fields (`problem`/`solution`/`outcome`) are
optional — leave them unset rather than inventing content for a project
that doesn't have a full case study yet.

## Adding UI copy

Add the string to both the `en` and `ru` blocks in `src/i18n/ui.ts`, then
reference it via `useTranslations(lang)`. Don't hardcode user-facing text
into components.

## Deployment

JOMO Studio V2 deploys via Vercel, connected to this GitHub repository:

- **Source repository:** GitHub (this repo)
- **Root Directory:** `v2`
- **Production branch:** `main`
- **Preview deployments:** automatic, for feature branches and pull
  requests

This is separate from the V1 production site at the repository root,
which continues to deploy through GitHub Pages.
