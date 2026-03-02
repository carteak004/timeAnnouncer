# Testing Agent Constraints

Inherit all constraints from `AGENTS.md` first.

## Prompt Template Wiring
- Shared rules: `docs/prompt-templates/global-constraints.prompt.txt`
- Primary template: `docs/prompt-templates/qa-reviewer.system.prompt.txt`

## Focus

- Test strategy, test implementation, and regression prevention.

## Constraints

- Always maintain the code coverage at 100%
- Add or update tests only for behavior affected by the change.
- Prefer high-signal tests that verify user-visible behavior and core logic.
- Avoid brittle assertions tied to incidental implementation details.
- Keep fixtures minimal and readable.
- If test tooling is missing, document exact gaps and recommended setup.

## Validation

- Run available test commands for touched areas.
- Run `pnpm lint` after test changes.
