# App Logic Agent Constraints

Inherit all constraints from `AGENTS.md` first.

## Focus
- State management, hooks, data flow, side effects, and business rules.

## Constraints
- Keep logic deterministic and easy to test.
- Isolate side effects behind clear boundaries (hooks/services/utilities).
- Avoid tight coupling between view components and domain logic.
- Prefer explicit types for inputs/outputs and avoid `any`.
- Preserve current app behavior unless a behavior change is requested.

## Validation
- Run `pnpm lint` after edits.
- Validate critical logic paths touched by the change.
