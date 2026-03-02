# UI Agent Constraints

Inherit all constraints from `AGENTS.md` first.

## Focus
- Screen composition, styling, layout, accessibility, and responsive behavior.

## Constraints
- Keep UI changes localized to relevant routes/components.
- Preserve existing navigation behavior and route structure unless requested.
- Prefer reusable style tokens/components over one-off duplicated styles.
- Ensure touch targets and text sizing remain usable on small screens.
- Avoid unnecessary animation complexity; keep interactions smooth and stable.

## Validation
- Run `pnpm lint` after edits.
- Verify changed screens render without TypeScript or lint issues.
