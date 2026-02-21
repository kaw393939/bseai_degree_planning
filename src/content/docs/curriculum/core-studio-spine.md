---
title: "The Eight Studios"
description: "Eight studio courses pairing a technical domain with an irreplaceable human capability."
---

# The Eight Studios

Every studio has two co-equal pillars: a **technical domain** and a **Human Edge** capability. Both are graded. Both produce portfolio-grade artifacts. Neither is optional.

**Operating constraints:** Cohort cap 20–25 · Portfolio artifact every semester · Terminal + Git + deploy every semester · Demo Day starting Semester 2 (IS 118 onward; IS 117 ends with a final presentation)

---

## Year 1: Craft

### IS 117 — Introduction to Website Development

**Studio label:** Inquiry & Web Craft

**Human Edge: Disciplined Inquiry** — asking structured, productive questions.

**Technical domain:** Terminal, filesystem, VS Code, Git/GitHub, HTML/CSS, static site deployment, information architecture.

Before you can build anything worth building, you must learn to ask what's worth building. Warren Berger's *A More Beautiful Question*, issue trees, hypothesis-first thinking, the Five Whys — while building digital literacy from zero.

**Deliverables:**
- Museum-style website (design/psychology/technology theme)
- Portfolio website v1
- Studio checkoffs: terminal, Git, deploy
- **Human Edge artifact:** Inquiry log — questions asked, assumptions tested, what changed


---

### IS 118 — Interactive Web Development *(proposed)*

**Studio label:** Interactive Computing

**Human Edge: Translation** — making the invisible visible.

**Technical domain:** JavaScript fundamentals, DOM manipulation, API integration, debugging, data handling (JSON, forms, validation), security hygiene basics.

The gap between a page and an application is the gap between displaying information and enabling thinking. Every great AI product is an act of translation — taking data, logic, or a model's reasoning and making it something humans can interact with.

**Deliverables:**
- Interactive web app with form + API call + client-side state
- Testing starter (automated checks or structured manual test checklist)
- Documentation: README + "how to run" + "what I verified"
- **Human Edge artifact:** Translation brief — what invisible thing the app makes visible, and how

---

## Year 2: Construction

### IS 218 — Building Web Applications

**Studio label:** Software Engineering

**Human Edge: Professional Judgment** — evaluating work and knowing when to override the machine.

**Technical domain:** Full-stack development (front-end + API + persistence), testing, CI/CD, deployment, monitoring, AI-assisted development workflow.

Copilot can generate 50 lines of code. Is it correct? Secure? Maintainable? The skill gap is *knowing whether it's right.* Judgment comes from building, breaking, debugging, testing, and deploying — then critically evaluating AI-generated contributions.

**Deliverables:**
- Full-stack deployed app with automated tests and CI pipeline
- Deployment with logging and basic monitoring
- **Human Edge artifact:** AI audit log — what the student accepted, rejected, and modified from AI, with reasoning


---

### IS 265 — Introduction to Information Systems

**Studio label:** Problems & Persuasion

**Human Edge: Problem Finding** — identifying the real problem in complex human systems.

**Technical domain:** Business process modeling, stakeholder analysis, workflow prototyping, requirements elicitation, communication and persuasion frameworks.

Organizations don't hand you clean problem statements. They hand you symptoms, complaints, contradictions, and politics. The most expensive mistake in AI is solving the wrong problem perfectly. Placed *after* IS 218: you need to have shipped software before you can reason about what's worth building.

**Deliverables:**
- Problem framing memo (stakeholders, constraints, success metrics)
- Workflow prototype (wireframe + minimal implementation)
- Persuasion exercise: presenting to skeptical stakeholders
- **Human Edge artifact:** Assumptions log + issue tree — what was assumed, investigated, and changed

---

## Year 3: Infrastructure & Knowledge

### IS 219 — Adv Website Development

**Studio label:** Systems & Resilience

**Human Edge: Resilience Thinking** — designing for failure and owning recovery.

**Technical domain:** Linux operations (processes, permissions, networking), containers, orchestration, secrets management, auth, observability (logs/metrics/traces).

Systems break. Pipelines fail. Models drift. The engineer who can diagnose, recover, and prevent recurrence is worth ten who only build happy paths. After IS 265, students understand *why* systems must be resilient; here they learn *how*.

**Deliverables:**
- Deployed API/service with containers
- Observability checklist + runbook
- Incident drill + postmortem
- **Human Edge artifact:** Failure mode analysis — "how my system breaks, how I'd know, what I'd do"


---

### IS 331 — Database Design, Management and Applications

**Studio label:** Data & Knowledge

**Human Edge: Epistemic Humility** — understanding that data is not truth; it's a model of truth.

**Technical domain:** SQL fluency, relational modeling, data quality, reproducibility, graph databases, vector embeddings, hybrid retrieval, data pipelines and validation.

Every AI system is only as good as its data, and every dataset is an imperfect representation of reality. Knowledge graphs capture *some* relationships. Embeddings map *some* semantic space. This is epistemology for practitioners.

**Deliverables:**
- Data-backed feature with documented schema
- Data pipeline with validation and quality checks
- Retrieval project: hybrid search (metadata + semantic + optionally graph)
- **Human Edge artifact:** Data assumptions document — "what this captures, what it distorts, what's missing"

---

## Year 4: Analysis & Integration

### IS 390 — Requirements Analysis and Systems Design

**Studio label:** Systems Analysis & Design

**Human Edge: Systems Thinking** — decomposing complexity and designing for the whole system, not just the parts.

**Technical domain:** Requirements analysis, systems design, SDLC (updated for AI systems), architecture documents, acceptance testing, prototyping, tradeoff analysis, non-functional requirements, evaluation plans.

This is the classic systems analysis course, modernized. Students learn to decompose complex systems — including AI-powered ones — into actionable requirements, design architectures that account for the *whole* picture (performance, reliability, cost, user impact, failure modes), and produce the specifications that IS 425 will implement. The difference from the traditional version: the systems being analyzed now include AI components with probabilistic behavior, and the analysis must account for that uncertainty.

Ethics and governance are handled by IS 350 (Computers, Society & Ethics). IS 390 focuses on *analytical rigor* — understanding interdependencies, tradeoffs, and emergent behavior in complex systems.

**Deliverables:**
- Requirements document + acceptance tests for a system with AI components
- Architecture/design document (tradeoffs, risks, non-functional requirements)
- Evaluation plan (what "good" means, how it's measured, what can go wrong)
- Prototype demonstrating key architectural decisions
- **Human Edge artifact:** Systems decomposition — mapping how components interact, where complexity hides, what emerges from the whole that isn't visible in the parts


---

### IS 425 — Enterprise AI Applications & Infrastructure

**Studio label:** Applied AI Systems

**Human Edge: Accountable Leadership** — shipping a system, defending its design, owning its failures.

**Technical domain:** Knowledge graphs, human-in-the-loop workflows, vector + graph retrieval, agent/tool orchestration, evaluation harnesses, regression gates, observability, client engagement — the integration of everything.

This is the capstone. A real client. A real problem. A production-grade AI system where **knowledge graphs** structure domain understanding, **HITL workflows** keep humans in control of critical decisions, and the full stack of skills from every prior course comes together. Students build, evaluate, deploy, present at Demo Day, and write an honest postmortem. This is where Neural Fabric concepts — local LLM + graph + vector + observability for mission-critical AI — come to life in student hands.

**System scope (non-negotiable):**
- Knowledge graph: entities, relationships, and reasoning over domain structure
- Human-in-the-loop: review points, escalation paths, override capability
- Vector retrieval integrated with graph context
- Evaluation harness with regression gates
- Observability: trace decisions, failures, and human overrides

**Deliverables:**
- Production-style AI system with knowledge graph + HITL + eval suite + runbook
- Demo Day presentation to industry judges (rubric-scored)
- Postmortem and improvement plan
- **Human Edge artifact:** Leadership reflection — "what I decided, what I learned, what I'd do differently, what I'm accountable for"

---

## The Accumulation

| Sem | New capability | Running total |
|-----|---------------|--------------|
| 1 | Disciplined Inquiry | Inquiry |
| 2 | Translation | + Translation |
| 3 | Professional Judgment | + Judgment |
| 4 | Problem Finding | + Problem Finding |
| 5 | Resilience Thinking | + Resilience |
| 6 | Epistemic Humility | + Epistemic Humility |
| 7 | Systems Thinking | + Systems Thinking |
| 8 | Accountable Leadership | **All eight — the "CEO of agents"** |
