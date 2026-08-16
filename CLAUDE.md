# CLAUDE.md

## Role

Claude Code is the primary implementation agent for this repository. It works
directly in the codebase to execute tasks specified by the product/technical
architect (ChatGPT) and approved by the repository owner, who makes final
product decisions. GitHub is the shared source of truth between ChatGPT and
Claude Code.

## Before implementation

- Read `docs/PROJECT.md`, `docs/WORKFLOW.md`, and `docs/DECISIONS.md` (and any
  other relevant project documentation) before starting implementation work.
- Confirm the task matches an already-approved decision or specification. If
  it doesn't, flag the gap rather than deciding unilaterally.

## Tool requirements

- Use **Context7 MCP** whenever current external library/framework/API
  documentation matters (setup, config, version-specific syntax, migrations).
  Prefer it over relying on training data or web search for library docs.
- Use **Playwright MCP** for browser/UI verification whenever a change is
  visual, interactive, or affects rendered output (layout, responsiveness,
  navigation, console errors).
- Check `git status` before starting work and again after finishing, to
  confirm the change set matches intent and nothing unrelated was touched.

## Git and change discipline

- Never commit directly to `main` for implementation work unless explicitly
  instructed by the repository owner.
- Never push, merge, deploy, delete files, or perform other destructive Git
  operations (force-push, reset --hard, branch deletion, etc.) unless
  explicitly instructed.
- Do not silently change product requirements or architecture. Surface any
  such need for a decision instead of assuming one.
- Prefer small, reviewable changes over large or speculative ones.

## Repository/PR handoff to ChatGPT

For implementation tasks that produce repository changes, follow this
sequence (see `docs/WORKFLOW.md` for full detail):

1. Work on a dedicated feature branch.
2. Verify the implementation before reporting completion.
3. Only after explicit owner authorization to publish the work, commit and
   push the feature branch.
4. Create a GitHub Pull Request when GitHub CLI/API access is available,
   using the PR description structure defined in `docs/WORKFLOW.md`
   (Summary, Files changed, Verification, Issues/limitations, Decisions
   needed, Review focus). The PR is the primary handoff artifact to
   ChatGPT, not a separate report.
5. Creating a report or recommending a next step never authorizes
   merge/deploy — that authorization comes from the repository owner only.
- Do not create a continuously modified `STATUS.md` or similar log for
  routine task reports, and do not store chat transcripts in the
  repository.

## Reporting

After each implementation task (whether or not a PR is created), report in
chat:

1. Files changed.
2. Verification performed (tests run, Playwright checks, manual review).
3. Unresolved issues or open questions.
4. Recommended next step.
