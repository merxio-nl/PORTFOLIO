# JOMO Studio — Brand Kit

This directory formalizes the visual identity already approved and live on
the JOMO Studio V2 website (`v2/`). It does not introduce anything new —
every asset here is extracted directly from the current implementation
(`v2/src/components/Nav.astro`, `Footer.astro`, `v2/public/favicon.svg`,
`v2/src/styles/global.css`).

## 1. Brand name

**JOMO Studio** — a small, founder-led independent web studio
(Yaroslav Redka, Tilburg, Netherlands). See `docs/PROJECT.md` for the
full positioning.

## 2. Wordmark

"JOMO" followed by a brass-colored period — exactly as it appears in the
site's nav and footer. Two color variants:

| File | Use | Text color | Dot color |
| --- | --- | --- | --- |
| `logo/jomo-wordmark-dark.svg` | on dark backgrounds (the site's own background, `#0f1113`) | `#f4f2ed` (paper) | `#c9a15a` (brass) |
| `logo/jomo-wordmark-light.svg` | on light backgrounds | `#0f1113` (ink) | `#c9a15a` (brass) |

Both are true vector paths — the "JOMO" glyphs were extracted directly
from the actual Golos Text SemiBold (600) font file and converted to
outlines, not live text. This means the file renders identically
everywhere (design tools, print, browsers) with zero dependency on the
font being installed or loaded. The letter-spacing (1% of the em, same
as the site's `tracking-[0.01em]`) is baked into the glyph positions.

## 3. Mark

`logo/jomo-mark.svg` — the compact single-letter mark used as the site's
favicon: a rounded square (`#0f1113`, corner radius 14 of 64) with a
paper-colored "J" (Golos Text Bold/700, also outlined to a path) and the
same brass dot, positioned as a stand-in for the full "JOMO." wordmark
where there isn't room for it. This is the *only* standalone mark that
exists in the approved identity — there is no separate abstract icon or
symbol.

`v2/public/favicon.svg` now shares this exact path geometry (see
`docs/DECISIONS.md` ADR-011) — it previously rendered the "J" as live
text dependent on the Golos Text web font being loaded, which is fragile
for an asset requested as early as a favicon.

## 4. Raster exports (PNG)

`logo/png/` — transparent-background PNG exports at 512 / 1024 / 2048px
wide, for both wordmark variants and the mark:

```
jomo-wordmark-dark-{512,1024,2048}.png
jomo-wordmark-light-{512,1024,2048}.png
jomo-mark-{512,1024,2048}.png
```

Generated directly from the SVG sources above — same geometry, same
colors, anti-aliased, no re-drawing.

## 5. Fonts

| Role | Family | Weights actually used | Fallback |
| --- | --- | --- | --- |
| Display / headings (`--font-display`) | **Golos Text** | 600 (all headings, the wordmark), 700 (the mark's "J", the hero/manifesto Display role) | `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| Body / UI (`--font-sans`) | **Inter** | 400 (body/lead text), 500 (nav/eyebrow labels), 600 (one specific emphasis case — the Process step's revision-count callout) | `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |

Both are open-source (SIL Open Font License) and served via Google
Fonts — see `v2/src/layouts/Base.astro` for the exact loading setup.
Source: [fonts.google.com/specimen/Golos+Text](https://fonts.google.com/specimen/Golos+Text),
[fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter).
Both were confirmed to have full Cyrillic + Cyrillic-ext coverage
(needed for the Russian site) and standard Latin coverage (needed for
Dutch) before adoption — see `docs/DECISIONS.md` ADR-008.

**No font binaries are stored in this repository.** Use the official
Google Fonts source above. The wordmark/mark SVGs already exist as
outlined paths specifically so a font file is never required to
reproduce the logo itself.

## 6. Colors

Exact values from `v2/src/styles/global.css`, not re-derived or
approximated:

| Token | Hex / value | Use |
| --- | --- | --- |
| `--color-ink` | `#0f1113` | Main background |
| `--color-surface` | `#16181b` | Card/surface background |
| `--color-surface-raised` | `#1d2024` | Slightly raised surface (e.g. device-mockup chrome bar) |
| `--color-hairline` | `rgba(244, 243, 239, 0.09)` | Subtle dividers |
| `--color-hairline-strong` | `rgba(244, 243, 239, 0.16)` | Borders, stronger dividers |
| `--color-paper` | `#f4f2ed` | Primary text (on dark) |
| `--color-paper-muted` | `#a8a9ad` | Secondary/muted text |
| `--color-paper-faint` | `#7b7e84` | Metadata, eyebrows, de-emphasized text (WCAG AA-checked — see ADR-010) |
| `--color-brass` | `#c9a15a` | The one accent color — used sparingly (the wordmark's period, eyebrow labels, focus rings) |

No CMYK/Pantone values exist yet — print color conversion is deferred
until an actual print piece (business card, etc.) is designed. Do not
guess print values from these hex codes.

## 7. Usage rules

- Keep clear space around the wordmark/mark roughly equal to the height
  of the "J" — don't crowd it against other elements or the canvas edge.
- Don't stretch, skew, or distort either asset — scale proportionally.
- Don't recolor arbitrarily — use the dark or light variant as provided;
  if a genuinely new context needs a third color, that's a design
  decision for the owner, not a default to reach for.
- Don't add effects — no drop shadows, glows, gradients, or outlines
  beyond what's already in the files.
- Don't place the wordmark on a busy or low-contrast background. Use the
  dark variant on the site's own dark backgrounds (or similarly dark,
  near-black surfaces) and the light variant on light/white surfaces.

## 8. Positioning

JOMO is currently a small, one-person, founder-led web studio (not an
agency, not a startup) — see `docs/PROJECT.md` and `docs/DECISIONS.md`
for the full approved positioning. This brand kit doesn't add or imply
anything beyond that.

## 9. Social preview

`social/jomo-og-1200x630.svg` (editable vector source, text as outlined
paths — same technique as the wordmark) and `social/jomo-og-1200x630.png`
(the rendered export, also copied to `v2/public/og-image.png` and wired
into the site's Open Graph/Twitter Card metadata — see
`docs/DECISIONS.md` ADR-011).

Composition: the wordmark, "STUDIO" as an eyebrow-style label beneath it
(reusing the site's existing eyebrow role, not a new lockup), the exact
approved English tagline ("Websites from idea to launch."), and the
location ("Tilburg · Netherlands"). One neutral English card is used
across all three site locales for now — see ADR-011 for why a
three-language card system wasn't built in this pass.

## 10. Print / business card readiness

Not designed yet. The wordmark and mark SVGs are vector, font-independent
(outlined paths), and scale cleanly to any size, so they're ready to
import into a print/design tool when that work starts. CMYK conversion,
bleed/safe-area setup, and the actual business-card layout are a
separate, later task.

## 11. Asset list

```
v2/brand/
  README.md
  logo/
    jomo-wordmark-dark.svg
    jomo-wordmark-light.svg
    jomo-mark.svg
    png/
      jomo-wordmark-dark-512.png
      jomo-wordmark-dark-1024.png
      jomo-wordmark-dark-2048.png
      jomo-wordmark-light-512.png
      jomo-wordmark-light-1024.png
      jomo-wordmark-light-2048.png
      jomo-mark-512.png
      jomo-mark-1024.png
      jomo-mark-2048.png
  social/
    jomo-og-1200x630.svg
    jomo-og-1200x630.png
```
