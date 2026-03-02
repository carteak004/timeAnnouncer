# Testing Agent Constraints

Inherit all constraints from `AGENTS.md` first.

## Focus
- Test strategy, test implementation, and regression prevention.

## Constraints
- Add or update tests only for behavior affected by the change.
- Prefer high-signal tests that verify user-visible behavior and core logic.
- Avoid brittle assertions tied to incidental implementation details.
- Keep fixtures minimal and readable.
- If test tooling is missing, document exact gaps and recommended setup.

## Validation
- Run available test commands for touched areas.
- Run `pnpm lint` after test changes.
