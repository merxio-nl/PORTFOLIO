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
8. **Approval** — ChatGPT may review changes and recommend approval, but
   final product approval and authorization to merge/deploy remain with the
   repository owner, unless the owner explicitly delegates a specific
   action. The branch is merged/deployed only once approved, and only as
   explicitly instructed.

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

## Repository/PR as the async handoff layer

For implementation tasks that produce repository changes, the repository and
GitHub Pull Requests are the asynchronous communication layer between Claude
Code and ChatGPT:

1. Work on a dedicated feature branch.
2. Verify the implementation before reporting completion.
3. Only after explicit owner authorization to publish the work, commit and
   push the feature branch.
4. Create a GitHub Pull Request when GitHub CLI/API access is available.
5. The PR is the primary handoff artifact from Claude Code to ChatGPT —
   ChatGPT reviews the PR itself, not a separate report.

### PR description structure

Every PR description contains this structured handoff, in this order:

- `## Summary` — what changed and why.
- `## Files changed` — important files/components affected.
- `## Verification` — tests, build, Playwright/browser checks, Context7
  verification when relevant.
- `## Issues / limitations` — unresolved problems, known limitations, or
  `None`.
- `## Decisions needed` — decisions requiring product owner/architect input,
  or `None`.
- `## Review focus` — what ChatGPT should pay particular attention to.

### Authority rules

- Creating a report or recommending a next step does not authorize
  merge/deploy.
- ChatGPT reviews the PR and may recommend approval or corrections.
- Final product decisions and merge/deploy authorization remain with the
  repository owner, unless a specific action is explicitly delegated.

### What does not belong in the repository

- No continuously modified `STATUS.md` or similar running log for routine
  task reports — the PR description is the report.
- No chat transcripts stored in the repository.
- Git history stays focused on actual project work and durable
  documentation, not process narration.
