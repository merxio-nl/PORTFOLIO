# DECISIONS.md

Lightweight architecture decision log. Only decisions already established are
recorded. No technology or design choices are invented here.

---

## ADR-001: Roles and source of truth

**Date:** 2026-08-16
**Status:** Accepted

Repository owner makes final product decisions. ChatGPT acts as
product/technical architect, planning partner, and independent reviewer.
Claude Code acts as the primary implementation agent working directly in the
repository. GitHub is the shared source of truth between ChatGPT and Claude
Code.

---

## ADR-002: Existing site is reference, not final

**Date:** 2026-08-16
**Status:** Accepted

The current portfolio implementation (`index.html`, `assets/`, `favicon/`,
etc.) is retained as a source of useful content and assets. A new V2 design
is planned. Until V2 work is explicitly scoped, the existing implementation
must not be modified.

---

## ADR-003: Future positioning

**Date:** 2026-08-16
**Status:** Accepted

Future positioning is a personal-brand digital studio focused on website
design/development, rather than a single-project CV-style portfolio.

---

## ADR-004: Extensible project listing

**Date:** 2026-08-16
**Status:** Accepted

The portfolio must support adding future projects/case studies going
forward. This is a requirement on the eventual V2 structure, not an
implementation decision yet — no data model, CMS, or templating approach has
been chosen.

---

## ADR-005: Conservative Git workflow

**Date:** 2026-08-16
**Status:** Accepted

Feature-branch workflow with small, reviewable commits. No direct commits to
`main`, no push/merge/deploy/destructive Git operations, without explicit
instruction from the repository owner. See `WORKFLOW.md`.

---

## ADR-006: V2 technical stack — Astro (static output) + build-time Tailwind + Content Collections

**Date:** 2026-08-16
**Status:** Accepted

For the JOMO Studio Portfolio V2 prototype, the implementation moves from
V1's single static `index.html` (Tailwind via CDN, inline JS, no build
step) to an **Astro** project with static output, Tailwind CSS integrated
at build time (via `@astrojs/tailwind`/Vite, not CDN), and Astro **Content
Collections** for project/case-study data.

**Why:** V1's structure cannot cleanly satisfy V2's stated requirements —
reusable case-study page templates, easy addition of future projects,
maintained EN/RU/NL content, and consistent shared components. Astro was
selected because:
- It is static-first and ships close to zero client-side JavaScript by
  default (islands architecture), matching the "subtle, purposeful
  motion" / "no interaction that harms readability" requirement without
  extra effort.
- Content Collections provide schema-validated project data (via Zod),
  so optional/unknown case-study fields stay explicitly optional instead
  of being silently invented.
- It has first-class, built-in i18n routing (`defaultLocale`/`locales`
  config), which lets the V2 prototype ship English-only now while
  leaving the routing structure ready for Russian and Dutch later.
- It has official Tailwind integration and compiles to plain static
  output, which still deploys to GitHub Pages like V1 does.

This was not chosen because it is fashionable — simpler options (e.g.
keeping hand-written static HTML, or a plain template-based generator)
were considered and rejected because they do not provide validated,
reusable content structures for a growing multi-language case-study
catalog.

**How to apply:** V2 prototype code lives in `v2/` alongside the untouched
V1 root files. V1 remains the deployed production version until the owner
explicitly approves a V2 replacement. First implementation pass tracked on
branch `feat/jomo-v2-foundation`.

---

## ADR-007: V2 correction round #1 — two-level work IA, typography, EN/RU content structure

**Date:** 2026-08-16
**Status:** Accepted

Following owner review of the first V2 prototype, three structural changes
were made, all on the same `feat/jomo-v2-foundation` branch (no new
technical stack — Astro/Tailwind/Content Collections from ADR-006 stand):

1. **Two-level work architecture.** A dedicated `/work/` (and `/ru/work/`)
   overview page was added as the fast-scan "Level 1" browsing surface,
   built from a reusable, scalable card grid (`WorkCard.astro`) so it
   keeps working as more projects are added later. Case-study pages
   ("Level 2") are reached only by an explicit "View case study" click,
   and were shortened/restructured so browsing between projects doesn't
   require scrolling through a full case study first.
2. **Typography.** Fraunces (an ornate/classical display serif) was
   replaced with Manrope for headings, paired with Inter for body copy —
   a more contemporary, restrained system matching a digital-studio
   identity rather than an editorial one. Manrope was confirmed to include
   full Cyrillic coverage before adoption, since it is now shared across
   English and Russian.
3. **EN/RU content structure.** Project content collections were split
   into `src/content/projects/en/` and `src/content/projects/ru/`
   (entry id = `<lang>/<slug>`), and static UI copy (nav, buttons, section
   labels) moved into a dictionary at `v2/src/i18n/ui.ts` with
   `getLangFromUrl`/`useTranslations` helpers, following Astro's
   documented i18n recipe. English stays the default, unprefixed locale;
   Russian is served under `/ru/`. Dutch is not yet populated but requires
   no structural change to add later — only a new `nl/` content folder and
   dictionary entries.

**Why:** The owner's review found the first prototype too
case-study-first (no fast way to browse projects), too visually stretched,
too editorial in typography, and missing the Russian version they
specifically wanted. Each change above addresses one of those points
directly rather than being a speculative redesign.

**How to apply:** Any new project needs matching `en/<slug>.json` and
`ru/<slug>.json` content entries (RU narrative fields may stay unset if
translation hasn't been reviewed yet — see the project's own commit/PR
notes for what still needs owner/ChatGPT copy review). New UI strings go
through `ui.ts`, not hardcoded into components.
