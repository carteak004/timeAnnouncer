# Agent Operating Guide

## Global Constraints

All agents must follow these constraints for every task.

### 1) Core Objective

- Deliver the smallest correct change that satisfies the request.
- Prefer reliability and maintainability over cleverness.

### 2) Scope Discipline

- Only change files required for the task.
- Do not refactor unrelated code.
- If you notice unrelated issues, report them but do not fix them unless asked.

### 3) Project Context

- Stack: Expo + React Native + TypeScript + expo-router.
- Package manager: pnpm.
- Linting: ESLint (`expo lint`).
- Keep compatibility with existing project conventions.

### 4) Safety Rules

- Never expose, log, or commit secrets.
- Never run destructive commands unless explicitly requested.
- Do not modify CI, release, or environment config unless the task requires it.

### 5) Code Quality Bar

- Write clear, typed, production-ready code.
- Prefer simple functions and explicit naming.
- Add comments only where logic is non-obvious.
- Preserve existing APIs unless change is explicitly requested.

### 6) Validation

- Run the narrowest useful checks first, then broader checks if needed.
- Minimum expected verification after code edits: `pnpm lint` (or explain why it could not run).
- If tests exist for touched logic, run them; otherwise state the test gap clearly.

### 7) Collaboration Contract

- State assumptions explicitly.
- If blocked by missing requirements, ask concise, concrete questions.
- Report:
  1. What changed
  2. Why it changed
  3. How it was verified
  4. Any risks or follow-ups

### 8) Output Format

Always respond in this order:

1. Summary
2. Changes Made
3. Verification
4. Risks / Follow-ups

## Agent Files

Use one of the following specialized agents for task-specific constraints. Every file below inherits all Global Constraints above.

- UI Agent: `docs/agents/ui-agent.md`
- App Logic Agent: `docs/agents/app-logic-agent.md`
- Testing Agent: `docs/agents/testing-agent.md`
- Tooling Agent: `docs/agents/tooling-agent.md`
- Documentation Agent: `docs/agents/documentation-agent.md`

## Prompt Template Mapping

Prompt templates live in `docs/prompt-templates/`.
For every run, apply:
- `global-constraints.prompt.txt` first
- then one primary agent template below

- UI Agent -> `code-generator.system.prompt.txt`
- App Logic Agent -> `architecture.system.prompt.txt` (design), then `code-generator.system.prompt.txt` (implementation)
- Testing Agent -> `qa-reviewer.system.prompt.txt`
- Tooling Agent -> `task-planner.system.prompt.txt`
- Documentation Agent -> `task-planner.system.prompt.txt`

## Agent Selection

- Use the narrowest agent that matches the task.
- If a task spans multiple domains, pick one primary agent and list secondary constraints from others.
