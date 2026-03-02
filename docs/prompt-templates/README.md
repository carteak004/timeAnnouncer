# Prompt Templates

These prompt templates were extracted from the shared conversation:
- https://chatgpt.com/share/69a55056-ab20-8010-b7cf-00b90209c800

They are organized so you can use them in a local orchestrator pipeline:
- `global-constraints.prompt.txt`
- `product-clarifier.system.prompt.txt`
- `architecture.system.prompt.txt`
- `task-planner.system.prompt.txt`
- `code-generator.system.prompt.txt`
- `qa-reviewer.system.prompt.txt`

## Suggested flow
1. Product Clarifier
2. Architecture
3. Task Planner
4. Code Generator (per task)
5. QA Reviewer (optional)

## Usage
- Send `global-constraints.prompt.txt` first as shared system rules.
- Then append exactly one agent-specific system prompt.
- Pass only the minimal relevant JSON from the previous step.
