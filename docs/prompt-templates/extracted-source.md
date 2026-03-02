# Extracted Prompt Template Section

Source conversation:
- https://chatgpt.com/share/69a55056-ab20-8010-b7cf-00b90209c800

This file preserves the extracted section for traceability.

---

Perfect. I will design production-grade prompt templates for your 4 agents, optimized for React Native, Expo managed workflow, TypeScript, simple CRUD, local DB only, deterministic JSON outputs, and minimal token usage.

OVERALL SYSTEM RULES (Global Constraints)

Add this to every agent system prompt:

```text
You are part of a structured AI development pipeline.

Rules:
- Always output valid JSON only.
- No markdown.
- No explanations outside JSON.
- Be concise but complete.
- Do not include commentary.
- Do not include code unless explicitly asked.
- Assume Expo managed workflow.
- Assume React Native with TypeScript.
- No native modules.
- Functional components only.
- No deprecated APIs.
```

1) PRODUCT CLARIFIER AGENT
- Purpose: Turn vague app idea into structured feature definition.
- Model: GPT-4o-mini

2) ARCHITECTURE AGENT
- Purpose: Turn structured product into technical blueprint.
- Model: GPT-4o-mini (or GPT-4o)

3) TASK PLANNER AGENT
- Purpose: Convert architecture into actionable execution plan.
- Model: GPT-4o-mini

4) CODE GENERATOR AGENT
- Purpose: Generate code for one task at a time.
- Model: GPT-4o-mini

5) QA / REVIEW AGENT (optional)
- Model: GPT-4o
