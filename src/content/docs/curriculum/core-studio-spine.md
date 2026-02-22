---
title: "The Studio Spine"
description: "Detailed walkthrough of all eight studio courses that form the backbone of the BS in Enterprise AI."
---

# The Studio Spine: Eight Courses, Eight Capabilities

The studio spine is the backbone of the BS in Enterprise AI — eight sequential courses, each teaching one **Human Edge** capability alongside progressively sophisticated technical skills. Every course produces a shipped artifact. By graduation, students have built eight projects, developed eight irreplaceable human capabilities, and accumulated a professional portfolio.

---

## Year 1: Foundations

### IS 117 — Web Development & Inquiry

**Human Edge: Disciplined Inquiry** — learning to ask questions that matter.

**Technical domain:** HTML/CSS fundamentals, static site generators, terminal fluency, Git version control, deployment to production, portfolio construction.

The most important technical skill is not coding — it's knowing what to build and why. IS 117 teaches digital literacy from zero while developing the questioning discipline that underlies every subsequent course.

Before you can build anything worth building, you must learn to ask what's worth building. Warren Berger's *A More Beautiful Question*, issue trees, hypothesis-first thinking, the Five Whys — while building digital literacy from zero.

**Deliverables:**
- Museum-style website (design/psychology/technology theme)
- Portfolio website v1
- Studio checkoffs: terminal, Git, deploy
- **Human Edge artifact:** Inquiry log — questions asked, assumptions tested, what changed


---

### IS 118 — Full-Stack Web Applications

**Human Edge: Professional Judgment** — evaluating work and knowing when to override the machine.

**Technical domain:** Full-stack development (front-end + API + persistence), automated testing (unit + integration), CI/CD pipelines, deployment, monitoring, AI-assisted development workflow.

Copilot can generate 50 lines of code. Is it correct? Secure? Maintainable? The skill gap is *knowing whether it's right.* Judgment comes from building, breaking, debugging, testing, and deploying — then critically evaluating AI-generated contributions. This is the course where AI Audit Logs begin.

**Deliverables:**
- Full-stack deployed app with automated tests and CI pipeline
- Deployment with logging and basic monitoring
- **Human Edge artifact:** AI Audit Log — what the student accepted, rejected, and modified from AI, with reasoning

---

## Year 2: Construction & Context

### IS 218 — Infrastructure & Resilience

**Human Edge: Resilience Thinking** — designing for failure and owning recovery.

**Technical domain:** Linux operations (processes, permissions, networking), containers, orchestration, secrets management, auth, observability (logs/metrics/traces).

Systems break. Pipelines fail. Models drift. The engineer who can diagnose, recover, and prevent recurrence is worth ten who only build happy paths. After IS 118, students can build full-stack apps; here they learn what happens beneath the application layer and how to keep things running when they break.

**Deliverables:**
- Deployed API/service with containers
- Observability checklist + runbook
- Incident drill + postmortem
- **Human Edge artifact:** Failure Mode Analysis — "how my system breaks, how I'd know, what I'd do"


---

### IS 265 — Enterprise AI Midpoint Capstone

**Human Edge: Problem Finding** — identifying the real problem in complex human systems.

**Technical domain:** Business process modeling, stakeholder analysis, enterprise governance, workflow prototyping, requirements elicitation, communication and persuasion frameworks.

Organizations don't hand you clean problem statements. They hand you symptoms, complaints, contradictions, and politics. The most expensive mistake in AI is solving the wrong problem perfectly. Placed after IS 218: you need to have shipped resilient software before you can reason about what enterprise problems are worth solving.

**Deliverables:**
- Problem framing memo (stakeholders, constraints, success metrics)
- Workflow prototype (wireframe + minimal implementation)
- Persuasion exercise: presenting to skeptical enterprise stakeholders
- **Human Edge artifact:** Assumptions log + issue tree — what was assumed, investigated, and changed

---

## Year 3: Knowledge & Analysis

### IS 331 — Data & Knowledge Systems

**Human Edge: Epistemic Humility** — understanding that data is not truth; it's a model of truth.

**Technical domain:** SQL fluency, relational modeling, data quality, reproducibility, graph databases, vector embeddings, hybrid retrieval, data pipelines and validation.

Every AI system is only as good as its data, and every dataset is an imperfect representation of reality. Knowledge graphs capture *some* relationships. Embeddings map *some* semantic space. This is epistemology for practitioners.

**Deliverables:**
- Data-backed feature with documented schema
- Data pipeline with validation and quality checks
- Retrieval project: hybrid search (metadata + semantic + optionally graph)
- **Human Edge artifact:** Data assumptions document — "what this captures, what it distorts, what's missing"

---

### IS 390 — Systems Analysis & Design

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

## Year 4: Leadership & Service

### IS 425 — Applied Enterprise AI

**Human Edge: Accountable Leadership** — shipping a system, defending its design, owning its failures.

**Technical domain:** Knowledge graphs, human-in-the-loop workflows, vector + graph retrieval, agent/tool orchestration, evaluation harnesses, regression gates, observability, client engagement — the integration of everything.

A real client. A real problem. A production-grade AI system where **knowledge graphs** structure domain understanding, **HITL workflows** keep humans in control of critical decisions, and the full stack of skills from every prior course comes together. Students build, evaluate, deploy, present at Demo Day, and write an honest postmortem.

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

### IS 482 — Community AI Training

**Human Edge: Translation** — making the invisible visible for audiences who need it most.

**Technical domain:** Curriculum design for non-technical audiences, AI literacy pedagogy, event planning and facilitation, audience analysis, accessibility, impact measurement.

The ultimate test of mastery is teaching. Students take everything they've learned across seven studios and translate it into a live community AI training event. They design curriculum, build materials, facilitate sessions, and measure impact. If you can teach it to someone who's never used AI, you truly understand it.

**Deliverables:**
- Community AI training curriculum and materials
- Live training event delivered to a real community audience
- Participant feedback analysis and impact assessment
- **Human Edge artifact:** Translation brief — making complex AI concepts accessible and actionable for non-technical people

---

## The Accumulation

| Sem | New capability | Running total |
|-----|---------------|--------------|
| 1 | Disciplined Inquiry | Inquiry |
| 2 | Professional Judgment | + Judgment |
| 3 | Resilience Thinking | + Resilience |
| 4 | Problem Finding | + Problem Finding |
| 5 | Epistemic Humility | + Epistemic Humility |
| 6 | Systems Thinking | + Systems Thinking |
| 7 | Accountable Leadership | + Leadership |
| 8 | Translation | **All eight — the "Human Edge" graduate** |
