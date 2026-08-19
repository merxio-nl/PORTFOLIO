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

## ADR-008: V2 typography refinement — Golos Text display font + role-based type system

**Date:** 2026-08-18
**Status:** Accepted

Following an owner review flagging inconsistent, ad hoc font sizing
(especially in the Creator and Studio sections, where several unrelated
sizes/weights sat next to each other) and a request for a more editorial,
less generic-SaaS display font, two changes were made:

1. **Display font swap.** Manrope (adopted in ADR-007) was replaced with
   Golos Text for all heading/display roles. Three candidates — Manrope,
   Onest, Golos Text — were compared directly: each was verified for full
   Cyrillic (`cyrillic` + `cyrillic-ext`) coverage via the live Google
   Fonts API response, then rendered side by side using the real Russian
   manifesto copy at production weight/size. Manrope read as generic SaaS
   at this point in the project; Onest read as too neutral/UI-like to
   carry a manifesto statement. Golos Text has more editorial character
   while staying restrained. Inter is unchanged for body/UI copy.
2. **Role-based typography system.** Nine reusable Tailwind v4 theme
   tokens were added in `v2/src/styles/global.css`
   (`--text-display`, `-h1`, `-h2`, `-h3`, `-lead`, `-body`, `-small`,
   `-eyebrow`, `-nav`, each with paired line-height/letter-spacing/weight),
   replacing one-off arbitrary sizes (`text-xl font-semibold`,
   `text-xs tracking-[0.12em]`, etc.) across every component. Display is
   reserved for exactly two places — the hero statement and the JOMO
   manifesto line — so it keeps its impact rather than becoming a generic
   "big text" utility.

**Why:** The owner does not want the site redesigned, only made
typographically coherent: one recognizable system instead of many
individually styled components, with a clear label → heading → supporting
info → body hierarchy everywhere text appears.

**How to apply:** New components should use the existing role classes
(`text-{role} font-display` for heading roles) instead of arbitrary
Tailwind text utilities. Reserve `text-display` for statement-level
copy only — it is not a generic "make it bigger" option.

---

## ADR-009: EN/NL localization — Russian as editorial source, three-way language switcher

**Date:** 2026-08-18
**Status:** Accepted

Following owner approval of the Russian copy, English was brought up to
date and Dutch was fully localized and activated as a third live locale
(routing for `nl` was already declared in `astro.config.mjs` per ADR-006
but had no content or UI dictionary until now):

1. **Russian as editorial source, not literal translation.** English and
   Dutch each got an independently natural localization of the same
   facts/philosophy/process, not a sentence-by-sentence translation.
   Concretely: the JOMO philosophy line, Process steps 1/2/4, and the
   Creator job title were each given their own EN and NL wording rather
   than one forced translation reused for both — see the PR description
   for the three-language comparison.
2. **NL content architecture mirrors EN/RU exactly.** `src/i18n/ui.ts`
   gained a full `nl` dictionary; `src/content/projects/nl/*.json` was
   added for all four projects with the same schema and field-presence
   pattern as `en/`/`ru/` (e.g. RugFlag has no `problem`/`solution`/
   `outcome` in any of the three languages — that's a deliberate,
   consistent honesty choice, not a gap); routing got
   `src/pages/nl/index.astro`, `nl/work/index.astro`, and
   `nl/work/[slug].astro`, mirroring the existing `ru/` pages exactly.
3. **Three-way language switcher.** `Nav.astro`'s two-language toggle
   (a single link showing the "other" language code) was replaced with a
   small pill listing all three codes, generated from `languages` in
   `i18n/ui.ts` so a future fourth locale doesn't need another rewrite.
   The now-unused `nav.langSwitch` tooltip string was removed from the EN
   and RU dictionaries (dead code from the old toggle; no visible RU copy
   changed).
4. **Desktop-nav breakpoint moved from `md` (768px) to `lg` (1024px).**
   With three language codes plus two divider borders, the header (nav
   links + switcher + CTA) no longer fit at 768px in any language —
   confirmed by visible wrapping of the CTA button and RU nav labels
   before this change. The full desktop nav now appears from 1024px;
   768–1023px uses the pre-existing hamburger menu, which already scales
   to arbitrary label lengths.

**Why:** The owner asked for two independently natural localizations, not
a translation pass, and asked that RU stay untouched except where a
technical/architecture change genuinely required it. The breakpoint move
is that kind of change: a direct, unavoidable side effect of adding a
third language code to the switcher, fixed at the responsive-layout level
rather than by shortening any language's copy.

**How to apply:** A future fourth locale needs a matching
`src/i18n/ui.ts` dictionary block, `src/content/projects/<lang>/*.json`
set, and `src/pages/<lang>/...` route tree — the switcher and
`pathForLang` prefix-stripping logic in `Nav.astro` need no changes.

---

## ADR-010: Production readiness audit — Wave 1 (SEO, sitemap/robots, safe technical fixes)

**Date:** 2026-08-19
**Status:** Accepted

A technical production-readiness pass added the SEO/metadata foundation
that was entirely missing (no canonical, no Open Graph, no hreflang, no
sitemap, no robots.txt), plus a handful of low-risk, objective fixes
found during the audit. No copy, layout, or brand direction changed.

1. **`site` is derived from Vercel's own build-time env vars, never a
   guessed domain.** `astro.config.mjs` now sets `site` to
   `VERCEL_PROJECT_PRODUCTION_URL` (falls back to `VERCEL_URL`, then
   `localhost:4321`). No production domain is attached to this project
   yet — it's Preview-only — so this resolves correctly today and will
   resolve correctly with zero code changes once a real domain is
   attached. `Astro.site` drives canonical URLs, hreflang alternates,
   Open Graph `url`, and the sitemap.
2. **hreflang/canonical implementation.** `Base.astro` now emits a
   canonical link, `hreflang` alternates for all three locales plus
   `x-default` (pointing at the English/default version), Open Graph
   (title/description/url/locale + locale:alternate/site_name/type), and
   a `summary` Twitter Card (no image yet — see below). The prefix-strip
   logic this needs was factored out of `Nav.astro` into
   `alternateLangPath`/`stripLangPrefix` in `src/i18n/utils.ts`, shared
   by both.
3. **Every non-production build is `noindex`.** Since no real domain
   exists yet, indexing a Vercel Preview URL would be actively harmful
   (transient URLs, duplicate-content risk once a real domain ships).
   `Base.astro` emits `<meta name="robots" content="noindex, nofollow">`
   whenever `process.env.VERCEL_ENV !== 'production'` — true for local
   builds and every Preview deploy today. `robots.txt` (see below) uses
   the same signal. The day this branch is merged and Vercel promotes an
   actual Production deployment, both flip to indexable with no code
   change.
4. **Sitemap and robots.txt are hand-rolled endpoints, not the
   `@astrojs/sitemap` integration.** `src/pages/sitemap.xml.ts` and
   `robots.txt.ts` are small `APIRoute` handlers rather than a new
   dependency — the route list is already fully enumerable from the same
   `getCollection('projects')` every page uses, so a new project
   automatically appears in the sitemap with zero maintenance (same
   extensibility guarantee as ADR-004), and the alternative would add a
   dependency for something ~30 lines already cover correctly.
5. **Safe fixes made during the audit** (each independently low-risk,
   see the PR description for detail): `--color-paper-faint` was
   3.65:1 on `--color-ink` at the small/eyebrow sizes it's actually used
   at — below WCAG AA's 4.5:1 for normal text — lightened to `#7b7e84`
   (4.65:1), same hue, not a redesign; the unused `--color-brass-soft`
   token was removed; `favicon.svg` still referenced the pre-ADR-008
   `Manrope` font (silently falling back to a generic sans-serif) and
   now references `Golos Text`; PNG favicon/apple-touch-icon rasters
   were generated from that corrected SVG; the Google Fonts stylesheet
   was made non-render-blocking (preload + media-swap pattern), which
   measured ~800ms of blocking time via Lighthouse; oversized PNG
   screenshots (up to 1.4MB) were converted to WebP at quality 85
   (85–93% smaller, visually equivalent) with all three locales'
   content files updated to match; a handful of already-orphaned gallery
   images (referenced nowhere) were deleted; a single shared `404.astro`
   was added (one static 404 works for any locale prefix — most static
   hosts, Vercel included, serve one `404.html` site-wide, so per-locale
   404s would need custom host routing config for no real benefit).

**Why:** These are exactly the class of fix the owner scoped as
in-bounds for an audit pass — "fix objective problems when the solution
is clear and low-risk," not subjective design changes.

**Deferred, needs an owner-provided asset — not a code gap:** there is no
Open Graph share image. `Base.astro` does not emit `og:image` at all
(better than pointing at a non-existent file). Recommended spec: 1200×630
PNG/JPG, JOMO wordmark + tagline, works in both light and dark link-
preview UIs. Once provided, wiring it into `Base.astro` is a one-line
addition (an `image` prop already fits the existing pattern).

**How to apply:** New pages automatically get correct canonical/hreflang
metadata through `Base.astro` — no per-page work needed. New projects
automatically appear in the sitemap through the existing content
collection — no sitemap work needed.

---

## ADR-011: Brand kit — outlined-path wordmark/mark, one neutral OG card

**Date:** 2026-08-19
**Status:** Accepted

Formalized the existing (not new) JOMO visual identity into `brand/` —
see `brand/README.md` for the full asset list and usage rules. Two
decisions here are persistent enough to record:

1. **The wordmark and mark are true vector paths, not live text.** The
   "JOMO" and "J" glyphs were extracted from the actual Golos Text font
   files (SemiBold/600 and Bold/700, matching exactly what the site
   loads) and converted to SVG path outlines — not re-drawn by eye, not
   left as `<text font-family="Golos Text">`. This makes the brand
   assets font-independent: they render identically in any tool, at any
   size, with zero risk of silently falling back to a generic system
   font if the real font isn't installed or hasn't loaded yet. Golos
   Text is OFL-licensed, which permits this.
2. **`v2/public/favicon.svg` was consolidated onto the same path
   geometry as `brand/logo/jomo-mark.svg`.** It previously rendered its
   "J" as live text — meaning the actual site favicon depended on the
   Golos Text web font loading, for an asset requested as early as any
   resource on the page. Same visual output (verified via a rendered
   side-by-side comparison), now with that fragility removed. The PNG
   favicon/apple-touch-icon rasters were regenerated from the corrected
   source for consistency.
3. **One neutral English OG image across all three locales**
   (`v2/public/og-image.png`, sourced from `brand/social/`), not three
   localized cards. `Base.astro` now emits `og:image` (+ width/height/
   type) and upgrades `twitter:card` to `summary_large_image` with
   `twitter:image`, using the same `Astro.site`-derived absolute-URL
   pattern as the existing canonical/hreflang metadata (ADR-010) — no
   hardcoded preview URL. A three-language card system is deferred:
   the composition (wordmark + "Websites from idea to launch." +
   location) barely changes per language, so three near-identical
   images would be maintenance overhead without a real payoff yet.

**Why:** The owner explicitly scoped this as *extracting* the existing
brand, not designing a new one — outlining the real glyphs from the real
font file is the literal form of that (as opposed to approximating the
letterforms by hand), and reusing the exact same geometry for the
favicon closes a real (if minor) fragility gap discovered while doing
the extraction, not scope creep.

**How to apply:** Any future JOMO brand asset (business card, a fourth
locale's OG card if ever needed) should start from `brand/logo/*.svg` or
`brand/social/jomo-og-1200x630.svg` as source material — they're already
outlined and portable. If the wordmark or colors ever change on the
live site, `brand/` needs a matching re-export; it does not update
itself.
