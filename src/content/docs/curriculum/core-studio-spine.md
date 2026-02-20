---
title: Core Studio Spine (IS117→IS425)
description: A coherent sequence of studio courses that progressively builds students into AI product engineers and AI software engineers.
---

# Core Studio Spine (IS117→IS425)

This spine is designed as a **studio every semester** that progressively builds the “CEO of agents” skillset: problem framing, product thinking, and enterprise-grade engineering (Linux, security, cloud, evaluation, and observability).

Design intent:

- Cohort cap: **20–25**
- Every course produces **portfolio-grade artifacts**
- Every course reinforces the same professional habits: terminal, Git, deployment, documentation, and evidence

## The throughline (what accumulates each semester)

Every studio adds one new “layer,” while keeping prior layers in active use.

- **Layer 0**: Workflow discipline (terminal, files, VS Code, Git, deploy)
- **Layer 1**: Web product basics (HTML/CSS/JS + information architecture)
- **Layer 2**: Software engineering habits (tests, debugging, CI, API thinking)
- **Layer 3**: Systems + cloud basics (containers, networking, observability, secrets)
- **Layer 4**: Data competence (SQL, modeling, pipelines, quality)
- **Layer 5**: Requirements + product engineering (acceptance tests, tradeoffs, docs)
- **Layer 6**: Enterprise AI systems (graph + vector + orchestration + evals + HITL)

## Course-by-course build

### IS117 — Foundations of Web Product Development (Studio)

**Adds:** Layer 0 + Layer 1 + vocabulary (design/usability/persuasion) + “asking better questions.”

**Signature deliverables**

- Museum-style website (theme: design/psychology/technology)
- Portfolio website v1
- Studio checkoffs: terminal basics, Git, deploy

### IS118 (Proposed) — Web Systems + JavaScript Foundations (Studio)

**Purpose:** make IS117 broad and vocabulary-heavy, then make IS118 the first “serious build” course.

**Adds:** Layer 2 (beginning) + deeper Layer 1.

**Key topics (starter depth, not advanced)**

- JavaScript fundamentals: data types, control flow, functions, DOM, events
- Debugging workflow (breakpoints, console, reading stack traces)
- Data handling basics: JSON, fetch, forms, validation
- Intro to security hygiene: secrets, basic threat awareness for web apps

**Signature deliverables**

- Interactive web app (single-page or multi-page) with form + API call + client-side state
- Testing starter: a small set of automated checks (or structured manual test checklist if needed)
- Documentation: README + “how to run” + “what I verified”

### IS218 — Building Web Applications (Studio)

**Adds:** Layer 2 (real) + production workflow.

**Signature deliverables**

- Full-stack app (front-end + API) with persistence
- CI pipeline + automated tests (minimum bar)
- Deployment + logging + basic monitoring plan

### IS219 — Cloud & Systems for Product Engineers (Studio)

**Adds:** Layer 3 (systems + cloud).

**Key topics**

- Linux operations: processes, permissions, networking basics
- Containers, environment configuration, basic networking concepts
- Secrets management, auth basics, least privilege as a habit
- Observability: logs/metrics/traces at a conceptual and practical level

**Signature deliverables**

- Deploy an API/service with containers
- Observability checklist + runbook
- Incident drill (tiny) + postmortem template practice

### IS265 — Introduction to Information Systems (Studio)

**Adds:** business workflow thinking + stakeholder language.

**Signature deliverables**

- Problem framing memo (stakeholders, constraints, success metrics)
- Simple workflow prototype (wireframe + minimal implementation)
- “Ask better questions” artifact: issue tree / 5-Whys / assumptions log

### IS331 — Database Design, Data Modeling, and Modern Retrieval (Studio)

**Adds:** Layer 4 (data competence), plus the bridge to vector/graph.

**Key topics**

- SQL fluency + relational modeling
- Data quality checks and reproducibility habits
- Intro to **vector embeddings** and **graph** as data structures (why/when)

**Signature deliverables**

- Data-backed app feature + documented schema
- Data pipeline with validation
- Retrieval mini-project (starter): metadata + search (optionally hybrid)

### IS390 — Requirements Analysis & Systems Design (Studio)

**Adds:** Layer 5 (product engineering in enterprise form).

**Signature deliverables**

- Requirements + acceptance tests
- Architecture/design doc (tradeoffs, risks, non-functional requirements)
- Evaluation plan (what “good” means, how measured)

### IS425 — Enterprise AI Applications & Infrastructure (Studio)

**Adds:** Layer 6 (enterprise AI systems).

**System scope expectation**

- Graph + vector retrieval (at least one used meaningfully)
- Agent/tool orchestration with safe boundaries
- Human-in-the-loop review points
- Evaluation harness + regression gates
- Observability: trace key decisions and failures

**Signature deliverables**

- Production-style “AI orchestrator” project: RAG/tool-use workflow with evals + runbook
- Demo Day presentation + judge rubric score
- Postmortem and improvement plan

## Recommended program-level checkoffs (the minimum bar)

By the end of the spine, every student should be able to:

- Operate in Linux/terminal, manage files, and debug basic environment issues
- Use Git professionally (branching, commits, PRs, code review habits)
- Deploy a service and maintain it (logs, monitoring, rollback)
- Build an AI workflow with evaluation evidence and safe failure modes
