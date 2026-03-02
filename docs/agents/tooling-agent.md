# Tooling Agent Constraints

Inherit all constraints from `AGENTS.md` first.

## Prompt Template Wiring
- Shared rules: `docs/prompt-templates/global-constraints.prompt.txt`
- Primary template: `docs/prompt-templates/task-planner.system.prompt.txt`

## Focus
- Build tooling, linting, scripts, dependency management, and configuration.

## Constraints
- Make minimal config changes with clear rationale.
- Do not broaden lint/build scope without explicit need.
- Pin or constrain dependency changes intentionally; avoid unnecessary upgrades.
- Keep scripts cross-platform where practical.
- Prefer reversible, low-risk tooling adjustments.

## Validation
- Run `pnpm lint` after changes.
- Run the specific script/tool command affected by the update when possible.
