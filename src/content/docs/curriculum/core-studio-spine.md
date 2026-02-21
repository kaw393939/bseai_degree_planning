---
title: "The Eight Studios"
description: "Eight renamed studio courses, each pairing a technical domain with an irreplaceable human capability."
---

# The Eight Studios

Every studio course has two co-equal pillars: a **technical domain** that builds engineering fluency, and a **Human Edge** capability that develops what AI cannot replace. Both are graded. Both are portfolio-grade. Neither is optional.

**Operating constraints:** Cohort cap 20–25 · Portfolio artifact every semester · Terminal + Git + deploy every semester · Demo Day presentations starting Year 2

---

## Year 1: Foundations of Inquiry & Digital Craft

### IS 117 — Inquiry & Digital Craft

**Human Edge: Disciplined Inquiry** — the ability to ask structured, productive questions.

**Technical domain:** Terminal, filesystem, VS Code, Git/GitHub, HTML/CSS, static site deployment, information architecture.

**Why this matters:** Before you can build anything worth building, you must learn to ask what's worth building. This course teaches the Warren Berger framework (*A More Beautiful Question*), issue trees, hypothesis-first thinking, and the Five Whys — while simultaneously building digital literacy from zero.

**Signature deliverables:**
- Museum-style website (design/psychology/technology theme)
- Portfolio website v1
- Studio checkoffs: terminal, Git, deploy
- **Human Edge artifact:** Structured inquiry log — documenting questions asked, assumptions tested, and what changed as a result

---

### IS 118 — Interaction Design & Computational Thinking *(proposed)*

**Human Edge: Translation** — the ability to make complex ideas tangible and accessible.

**Technical domain:** JavaScript fundamentals, DOM manipulation, API integration, debugging workflow, data handling (JSON, forms, validation), intro to security hygiene.

**Why this matters:** The gap between a "page" and an "application" is the gap between displaying information and enabling thinking. Every great AI product is an act of translation — taking something invisible (data, logic, a model's reasoning) and making it something a human can see, interact with, and understand.

**Signature deliverables:**
- Interactive web application with form + API call + client-side state
- Testing starter (automated checks or structured manual test checklist)
- Documentation: README + "how to run" + "what I verified"
- **Human Edge artifact:** "Translation brief" — a short document explaining what invisible thing the application makes visible, and how

---

## Year 2: Building & Understanding Organizations

### IS 218 — Software Engineering & Professional Judgment

**Human Edge: Professional Judgment** — the ability to evaluate work and know when to override the machine.

**Technical domain:** Full-stack application development (front-end + API + persistence), testing, CI/CD, deployment, monitoring, AI-assisted development workflow.

**Why this matters:** GitHub Copilot can generate 50 lines of code. Is it correct? Is it secure? Is it maintainable? Anyone can produce code now. The skill gap is *knowing whether it's right.* This course builds judgment through the discipline of building, breaking, debugging, testing, and deploying real software — then critically evaluating AI-generated contributions.

**Signature deliverables:**
- Full-stack deployed application with automated tests and CI pipeline
- Deployment with logging and basic monitoring
- **Human Edge artifact:** AI audit log — documenting every AI-assisted contribution, what the student accepted, rejected, and modified, with reasoning

---

### IS 265 — Organizations, Problems & Persuasion

**Human Edge: Problem Finding** — the ability to identify the real problem in complex human systems.

**Technical domain:** Business process modeling, stakeholder analysis, workflow prototyping, requirements elicitation basics, communication and persuasion frameworks.

**Why this matters:** Organizations don't hand you clean problem statements. They hand you symptoms, complaints, contradictions, and politics. The most expensive mistake in AI is solving the wrong problem perfectly. This course — placed *after* IS 218 deliberately — gives students who have already built real software the frameworks to understand *what's worth building* in organizational contexts.

**Sequencing rationale:** A 19-year-old who has never shipped software cannot do meaningful stakeholder mapping. But a 19-year-old who just deployed a tested application in IS 218 can look at a business problem and say, "I know what's possible and what's hard — now what does the user actually need?"

**Signature deliverables:**
- Problem framing memo (stakeholders, constraints, success metrics)
- Workflow prototype (wireframe + minimal implementation)
- Persuasion exercise: presenting a recommendation to skeptical stakeholders
- **Human Edge artifact:** Assumptions log + issue tree — documenting what was assumed, what was investigated, and what changed

---

## Year 3: Infrastructure & Knowledge

### IS 219 — Systems Architecture & Resilience

**Human Edge: Resilience Thinking** — the ability to design for failure and own recovery.

**Technical domain:** Linux operations (processes, permissions, networking), containers, orchestration, environment configuration, secrets management, auth basics, observability (logs/metrics/traces).

**Why this matters:** Systems break. Data pipelines fail. Models drift. Servers go down at 2 AM. The engineer who can diagnose, recover, and prevent recurrence is worth ten who can only build happy-path features. After spending a semester in organizational contexts (IS 265) where students saw how messy real systems are, they arrive here motivated to learn infrastructure not as abstract skill but as practical necessity.

**Signature deliverables:**
- Deployed API/service with containers
- Observability checklist + runbook
- Incident drill + postmortem
- **Human Edge artifact:** Failure mode analysis — "here's how my system can break, here's how I'd know, here's what I'd do"

---

### IS 331 — Data, Knowledge & Representation

**Human Edge: Epistemic Humility** — understanding that data is not truth; it's a model of truth.

**Technical domain:** SQL fluency, relational data modeling, data quality checks, reproducibility, graph databases and graph analysis, vector embeddings, hybrid retrieval, data pipelines and validation.

**Why this matters:** Every AI system is only as good as its data, and every dataset is an imperfect representation of reality. Students who build knowledge graphs must understand what relationships they're capturing and what they're missing. Students who create vector embeddings must understand what semantic space they're mapping and what falls between the cracks. This is not just data engineering — it's epistemology for practitioners.

**Signature deliverables:**
- Data-backed application feature with documented schema
- Data pipeline with validation and quality checks
- Retrieval project: hybrid search (metadata + semantic + optionally graph)
- **Human Edge artifact:** Data assumptions document — "what this data captures, what it distorts, what's missing, and what that means for any system built on it"

---

## Year 4: AI Strategy & Enterprise Leadership

### IS 390 — AI Strategy, Ethics & Requirements

**Human Edge: Moral Reasoning** — the ability to balance "can we?" with "should we?"

**Technical domain:** LLM application engineering (RAG, tool use, agents), requirements analysis, acceptance testing, architecture documents, evaluation plans, responsible AI frameworks, risk assessment, governance artifacts.

**Why this matters:** This is where students first build AI systems with *strategic intent* — not "build a chatbot" but "solve this organization's information retrieval problem with RAG, graph context, evaluation evidence, and a deployment plan." And alongside every technical decision, the ethical question: Who is affected? What could go wrong? What controls exist? How do we know it's working?

**Signature deliverables:**
- Requirements document + acceptance tests for an AI system
- Architecture/design document (tradeoffs, risks, non-functional requirements)
- Working AI prototype (RAG or agent-based) with evaluation harness
- **Human Edge artifact:** Ethics impact assessment — stakeholder harm analysis, controls, limitations, and "what we decided not to build and why"

---

### IS 425 — Enterprise AI & Accountable Leadership

**Human Edge: Accountable Leadership** — shipping a system, defending its design, owning its failures.

**Technical domain:** Production AI system integrating graph + vector retrieval, agent/tool orchestration, human-in-the-loop review, evaluation harness with regression gates, observability, client engagement.

**Why this matters:** This is the integration of everything. A real client. A real problem. A production-grade system. A Demo Day presentation to industry judges. A postmortem that honestly assesses what worked and what didn't. The student who completes IS 425 has demonstrated not just that they can build AI systems, but that they can *lead* AI initiatives — scoping, building, evaluating, presenting, and taking responsibility.

**System scope expectation:**
- Graph + vector retrieval (at least one used meaningfully)
- Agent/tool orchestration with safe boundaries
- Human-in-the-loop review points
- Evaluation harness + regression gates
- Observability: trace key decisions and failures

**Signature deliverables:**
- Production-style AI orchestrator project with eval suite + runbook
- Demo Day presentation + judge rubric score
- Postmortem and improvement plan
- **Human Edge artifact:** Leadership reflection — "what I decided, what I learned, what I'd do differently, and what I'm accountable for"

---

## The Accumulation Model

Each semester adds one new capability while all prior ones remain active:

| Semester | New capability | Cumulative |
|---|---|---|
| 1 | Disciplined Inquiry | Inquiry |
| 2 | Translation | Inquiry, Translation |
| 3 | Professional Judgment | + Judgment |
| 4 | Problem Finding | + Problem Finding |
| 5 | Resilience Thinking | + Resilience |
| 6 | Epistemic Humility | + Epistemic Humility |
| 7 | Moral Reasoning | + Moral Reasoning |
| 8 | Accountable Leadership | **All eight — the complete "CEO of agents"** |

By graduation, students don't just have technical skills. They have a practiced, evidence-based capacity for every human capability that AI cannot replace.
