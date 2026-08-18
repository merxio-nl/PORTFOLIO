# PROJECT.md

Verified facts about this repository only. No speculative architecture or
design decisions are recorded here.

## What this repository is

- This is the existing portfolio repository for Yaroslav Redka
  (`merxio-nl/PORTFOLIO` on GitHub).
- The current production portfolio is published through GitHub Pages at
  `https://merxio-nl.github.io/PORTFOLIO/`.
- No custom domain (`CNAME`) file or `.github/workflows` deploy config is
  present in the repository. Exact GitHub Pages source configuration
  (branch vs. Actions) has not been confirmed via GitHub settings.

## Direction

- The existing implementation (markup, styles, copy, assets) will serve as a
  source of useful content and assets, but a new V2 design is planned. The
  current implementation is not being redesigned as part of this task.
- Future positioning: a founder-led digital studio brand, "JOMO Studio",
  focused on website strategy, design and development — rather than a
  single-developer CV-style page. Founder-led but not a personal CV: the
  creator (Yaroslav Redka) has a dedicated, smaller "Creator" presence
  alongside the studio brand.
- The portfolio must support adding future projects/case studies (i.e. the
  structure should not assume a fixed, small project count).
- Languages for V2: English (default, unprefixed route), Russian (`/ru/`),
  Dutch (`/nl/`) — all three are populated. Russian was the editorial
  source of truth for the EN/NL localization pass (see `docs/DECISIONS.md`
  ADR-009); English remains the architectural default locale.

## ALLROUND4YOU (fourth verified project)

- A real, delivered client project not currently listed on the V1 page.
  Repository: `merxio-nl/allround4you` (public). Production domain (via
  repo `CNAME`): `allround4you.com` — also reachable at
  `merxio-nl.github.io/allround4you/`. As of this check, HTTPS on the
  custom domain returns a certificate error; HTTP resolves and serves the
  site.
- Client: ALLROUND4YOU Bouw & Service, a Dutch construction/renovation
  business, single tradesperson, 20+ years experience, no prior website.
- Static HTML/CSS/JS one-page site, same category of implementation as V1.
- Full case-study facts (challenge, approach, solution, outcome, timeline,
  revisions) are recorded in the V2 prototype content at
  `v2/src/content/projects/allround4you.json`, sourced from the repo,
  the live site, and details the repository owner provided directly —
  not from V1.

## Current implementation (as found in the repository)

- Static site: single `index.html`, styled with Tailwind CSS loaded via CDN
  (`cdn.tailwindcss.com`) plus a small block of inline custom CSS, and
  vanilla JavaScript (inline `<script>`, no framework). No `package.json`,
  no build tooling.
- Top-level structure: `index.html`, `robots.txt`, `sitemap.xml`, `assets/img/`,
  `favicon/` (`favicon.ico`, `favicon.svg`, `site.webmanifest`).
- `README.md` states: "Portfolio (no contact form). Upload to GitHub Pages.
  Replace thumbnails in assets/img/ if needed."
- Page is in Russian. Title: "Yaroslav Redka — Портфолио". Sections: hero,
  "Избранные проекты" (Featured projects), "Обо мне" (About me), "Контакты"
  (Contacts).
- Three projects currently listed: RugFlag (rug studio landing, NL),
  Universal Plug (accessories catalog), ApaxiC Towing (towing company
  landing, US, live at `apaxictowing.com`). The live towing site's own
  title casing is "Apaxic LLC Towing" (not "ApaxiC"); V2 uses "Apaxic
  Towing" to match the live site.
- Universal Plug (`merxio-nl/universal-plug`, live at
  `merxio-nl.github.io/universal-plug`) is a heat-resistant cap accessory
  for DIY bottle hookahs (a smoking accessory) sold in NL/EU via
  Telegram/WhatsApp — not an electrical/plug product. Confirmed by
  inspecting the live site directly (Russian-language product page:
  "термостойкий колпак для стандартных бутылок").
- Contact info listed: email, Instagram, Telegram (two handles), WhatsApp.
- Location stated on page: Tilburg, Netherlands.

## V2 prototype

- Lives in `v2/` alongside the untouched V1 root files; V1 remains the
  deployed production version. Built with Astro (static output) + Tailwind
  CSS (build-time) + Astro Content Collections — see `docs/DECISIONS.md`
  ADR-006 for why.
- Correction round #1 (owner review of the first prototype) restructured
  the IA into two levels — a fast-scan `/work/` overview (Level 1) and
  individual case-study pages (Level 2) — replaced the display typeface
  (Manrope replaces Fraunces) with a more restrained contemporary system,
  and added a working Russian translation alongside English (content
  collections split into `en/`/`ru/` locale folders, UI strings in
  `src/i18n/ui.ts`). See `docs/DECISIONS.md` ADR-007.
- Project order in the Work overview: ALLROUND4YOU, Apaxic Towing,
  RugFlag, Universal Plug.
- Correction round #2 (polish pass, no architecture change) rewrote the
  JOMO philosophy copy to be positive rather than a "what we leave out"
  contrast (owner felt the original sounded sarcastic/mocking), repositioned
  the Creator section (dropped repeated "founder-led"/"Founder" language;
  Russian uses "Директор JOMO Studio" per owner preference, not
  "Основатель"), did a full Russian editorial pass to remove literal-feeling
  translations, removed the visible "prototype" footer line and the
  default Astro favicon, and fixed minor accessibility gaps. Confirmed
  public contact details (email, WhatsApp, Telegram, Tilburg location)
  unchanged and correct.
- Correction round #3 (UX compression + copy pass, no architecture change):
  reordered the homepage to Hero → Services → Selected Work → Studio →
  Creator → Process → Contact (Services and Work now appear in/near the
  first viewport at 1440×900, versus much further down before); rewrote
  the hero to be direct and commercial (dropped the eyebrow line and the
  bottom metadata strip); fixed a real device-mockup bug (the mobile
  frame used a percentage `border-radius`, which resolves to different
  horizontal/vertical pixel values on a tall narrow box and produced
  visibly stretched corners — replaced with a fixed-pixel nested-radius
  bezel); reduced section padding/heading sizes throughout; did another
  Russian editorial pass (nav "Автор" → "Обо мне", tightened Studio and
  Services copy). Confirmed via `gh api repos/.../pages`: the live V1 site
  is served GitHub Pages "legacy" build from `main`/root — so no safe way
  exists to give V2 a public preview URL without either pushing to `main`
  (not authorized this round) or changing that Pages source (an
  architecture decision requiring owner approval, not made). Recommended
  in the PR instead: connect a separate static host (e.g. Vercel/Netlify)
  to this repo with root directory `v2/`, which needs zero changes to the
  existing Pages config and gives automatic preview URLs per branch/PR.
- Typography refinement round: replaced Manrope with Golos Text for
  display/heading roles and introduced a shared role-based typography
  system (Display/H1/H2/H3/Lead/Body/Small/Eyebrow/Nav). See
  `docs/DECISIONS.md` ADR-008.
- EN/NL localization round (no architecture/design change beyond what's
  needed for a third locale): Russian was frozen as the approved editorial
  source and used to bring English up to date (revised philosophy line,
  Process steps 1/2/4, Creator title) and to write a full, independently
  natural Dutch localization — UI dictionary (`src/i18n/ui.ts`) and all
  four project case studies (`src/content/projects/nl/`). The two-language
  (`EN`/`RU`) nav switcher was replaced with a three-way switcher, which
  required moving the desktop-nav breakpoint from `md` (768px) to `lg`
  (1024px) to avoid header crowding at tablet widths — the tablet range
  now uses the existing hamburger menu. See `docs/DECISIONS.md` ADR-009.
- Production readiness audit, Wave 1 (technical only — no copy/layout
  change): added the SEO/metadata foundation that didn't exist yet
  (canonical, hreflang, Open Graph, Twitter Card, sitemap.xml, robots.txt
  — every non-production build is `noindex` since no domain is attached
  yet), plus safe fixes found during the audit: a real WCAG AA contrast
  failure in `--color-paper-faint` (3.65:1 → 4.65:1, same hue), a stale
  `Manrope` reference in `favicon.svg` left over from ADR-008 (plus
  generated PNG/apple-touch-icon rasters), a render-blocking Google Fonts
  stylesheet (~800ms per Lighthouse, now preloaded + swapped), oversized
  PNG screenshots converted to WebP (85–93% smaller), a few already-
  orphaned gallery images removed, and a shared `404.astro`. Full
  Lighthouse (Chromium): Performance 96, Accessibility 100, Best
  Practices 100, SEO 69 (the only deduction is the intentional
  `noindex`, which is correct for a domain-less Preview deployment).
  Deferred, needs an owner asset: no Open Graph share image exists yet
  (spec and one-line wiring documented, not invented). See
  `docs/DECISIONS.md` ADR-010.
