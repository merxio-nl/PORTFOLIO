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
- Planned languages for V2: English (canonical), Russian, Dutch. English is
  the only populated locale in the first V2 prototype.

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
