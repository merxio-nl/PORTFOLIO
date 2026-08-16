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
- Future positioning: a personal-brand digital studio focused on website
  design/development, rather than a single-developer CV-style page.
- The portfolio must support adding future projects/case studies (i.e. the
  structure should not assume a fixed, small project count).

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
  landing, US, live at `apaxictowing.com`).
- Contact info listed: email, Instagram, Telegram (two handles), WhatsApp.
- Location stated on page: Tilburg, Netherlands.
