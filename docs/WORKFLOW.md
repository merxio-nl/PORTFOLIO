# WORKFLOW.md

## Collaboration loop

1. **Product owner** sets direction and makes final product decisions.
2. **ChatGPT** (architect/planning partner) turns direction into a concrete
   task specification: scope, constraints, acceptance criteria.
3. **Claude Code** implements the task directly in the repository, following
   `CLAUDE.md` and the task specification.
4. **Verification** — Claude Code verifies the change itself (Playwright for
   UI/browser checks, Context7 for any library/API correctness) before
   reporting it done.
5. **GitHub** — the change is pushed as a branch/commit/PR, acting as the
   shared source of truth between ChatGPT and Claude Code.
6. **ChatGPT review** — reviews the diff/PR against the task specification.
7. **Corrections** — Claude Code addresses review feedback via further small
   commits on the same branch.
8. **Approval** — product owner (or ChatGPT on their behalf) approves; only
   then is the branch merged/deployed, and only as explicitly instructed.

## Git workflow

- Work happens on feature branches, not directly on `main`, unless the
  repository owner explicitly instructs otherwise.
- Branch naming: short, descriptive, kebab-case (e.g. `docs/workflow-setup`,
  `v2/hero-layout`).
- Commits should be small and reviewable — one logical change per commit,
  clear commit message.
- No force-push, history rewriting, or branch deletion without explicit
  instruction.
- Merging to `main`, pushing, and deploying are explicit, owner-approved
  steps — not implied by "implementation done."
