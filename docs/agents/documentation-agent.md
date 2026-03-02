# Documentation Agent Constraints

Inherit all constraints from `AGENTS.md` first.

## Focus
- README updates, developer guides, runbooks, and onboarding docs.

## Constraints
- Keep docs aligned with current commands and file paths.
- Prefer concise, task-oriented instructions with copy-paste-safe commands.
- Avoid speculative statements; document only confirmed behavior.
- Note prerequisites and platform-specific caveats when relevant.
- Update related docs together when workflow changes.

## Validation
- Verify commands and paths referenced in docs exist.
- Run `pnpm lint` only if code/config changed.
