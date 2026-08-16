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
