# PORTFOLIO

This repository contains two projects. Read this before touching anything.

## Portfolio V1 (legacy, live)

`index.html`, `assets/`, `favicon/`, `robots.txt`, `sitemap.xml` at the
repository root. A static, no-build-step Russian-language portfolio page.
This is the **current live production site**, served by GitHub Pages
directly from `main`/root — see `docs/DECISIONS.md` ADR-002. It is
frozen: kept as-is for history and as a fallback, not actively developed.
Don't move or rename these files; GitHub Pages and the page's own
relative links depend on this exact layout. To update it: replace
thumbnails in `assets/img/` if needed, then re-upload.

## JOMO Studio V2 (active)

`v2/` — the actively developed project. Astro + Tailwind, EN/RU/NL,
deployed as a Vercel Preview (project Root Directory = `v2`) while V1
stays live on GitHub Pages. All JOMO-specific code, content, and brand
assets (`v2/brand/`) live inside `v2/` — nothing JOMO-related belongs at
the repository root. See `v2/README.md` (if present) and
`docs/PROJECT.md` for the current state, and `docs/DECISIONS.md` for why
things are built the way they are.

## Workflow docs

`CLAUDE.md` and `docs/` (`PROJECT.md`, `WORKFLOW.md`, `DECISIONS.md`)
govern how work happens across this whole repository — owner/architect/
implementer roles, git discipline, and the running architecture decision
log. Read them before starting implementation work.
