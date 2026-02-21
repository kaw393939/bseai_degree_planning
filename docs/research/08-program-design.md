# Program Design: Human Edge Vision, Curriculum, & Skills Framework

> Consolidates the program vision, curriculum structure, course catalog, and the LLM App Engineer skills framework that defines what graduates must know.

---

## 1. The Human Edge Thesis

**Source:** [incoming_info/vision/the-human-edge.md](../../incoming_info/vision/the-human-edge.md) — Internal planning document, Keith Williams, February 2026.

### The Premise

AI will automate everything that can be reduced to a procedure. What AI cannot (yet) automate:

1. **Asking which question matters** — AI answers questions; it does not originate them
2. **Judging when the machine is wrong** — distinguishing correct from incorrect requires domain knowledge, critical thinking, and willingness to override
3. **Taking responsibility** — AI cannot be held accountable for outcomes
4. **Navigating ambiguity in human organizations** — politics, contradictions, empathy
5. **Exercising moral reasoning** — "Can we?" is engineering; "Should we?" is judgment
6. **Creating meaning** — through vision, context, culture, and deciding what matters
7. **Inspiring trust and action** — leadership, persuasion, credibility
8. **Connecting dots across domains** — reasoning outside trained distributions

### The Inversion

Most technical programs treat human capabilities as "soft skills" — a seminar here, a communication course there. **This program inverts that priority.** Human capabilities are the primary outcome. Technical fluency is the necessary substrate.

> "We are not training coders. We are training the people who will decide what gets built, whether it should be built, how to know if it's working, and what to do when it fails."

This is the **"CEO of agents" thesis:** you don't write every line of code your agents produce, but you must know enough to hire well, evaluate work, diagnose failures, and take responsibility for outcomes.

---

## 2. The Eight Human Capabilities (Studio Spine)

| Semester | Course | Human Edge | Technical Domain |
|----------|--------|-----------|-----------------|
| 1 | IS 117 — Inquiry & Web Craft | **Disciplined Inquiry** | Terminal, Git, HTML/CSS, deployment |
| 2 | IS 118 — Interactive Computing (NEW) | **Translation** | JavaScript, APIs, debugging, data handling |
| 3 | IS 218 — Software Engineering | **Professional Judgment** | Full-stack apps, testing, CI/CD, AI-assisted dev |
| 4 | IS 265 — Problems & Persuasion | **Problem Finding** | Business process, stakeholders, workflow prototyping |
| 5 | IS 219 — Systems & Resilience | **Resilience Thinking** | Linux, containers, networking, observability |
| 6 | IS 331 — Data & Knowledge | **Epistemic Humility** | SQL, graph DB, vector embeddings, data quality |
| 7 | IS 390 — Systems Analysis & Design | **Systems Thinking** | Requirements, architecture, tradeoffs, AI eval plans |
| 8 | IS 425 — Applied AI Systems | **Accountable Leadership** | Knowledge graphs, HITL, agents, evals, Demo Day |

### Signature Assessments

| Course | Assessment | What It Proves |
|--------|-----------|---------------|
| IS 117 | Question Log | Students develop disciplined inquiry habits |
| IS 218 | **AI Audit Log** | Students evaluate/override AI output with documented reasoning |
| IS 219 | **Failure Mode Analysis** + Incident Drill | Students design for failure, recover in real time, write blameless postmortems |
| IS 425 | **Demo Day** | Students ship a production system, present to industry judges, defend design |

---

## 3. Complete Degree Structure

### Layer 1 — Studio Spine (24 credits, 8 courses)
IS 117 → 118 → 218 → 265 → 219 → 331 → 390 → 425
Cohort cap: 20–25. Portfolio artifact every semester.

### Layer 2 — Applied AI & Domain (15 credits, 5 courses)
- IS 350 — AI Ethics, Governance & Society (Year 2)
- IS 247 — Designing the User Experience (Year 2, HCI-owned)
- IS 392 — Applied AI & Language Systems (Year 3) — NLP, RAG, embeddings, prompt engineering
- IS 465 — ML for Enterprise AI (Year 3/4) — practical ML: framing, baselines, evaluation
- IS 480 — AI Quality & Reliability Engineering (Year 4) — eval harnesses, red teaming, hallucination measurement

### Layer 3 — Enterprise & Professional (9 credits, 3 courses)
- IS 385 (Special Topics) — Service Learning Clinic (real client AI delivery)
- IS 491 — Industry Practicum (industry placement)
- IS 485 (Special Topics) — Advanced Topics in Enterprise AI (agent systems, Neural Fabric)

### Technical Foundation (~18 credits)
MATH 111 (Calculus I), MATH 211 or DS 110 (Linear Algebra), CS 100 (Intro to CS/Python), CS 114 (Data Structures & Algorithms), MATH 226 (Discrete Analysis), DS 100 (Probability & Statistics)

### General Education (~30 credits)
Standard NJIT gen-ed with recommended choices: Philosophy/Ethics, Psychology/Cognitive Science, Technical Writing, History/Political Science.

**Total:** ~96 credits of structured content + gen-ed.

---

## 4. Student Profile: Entry → Exit

**Entering student (typical):**
- 18 years old, public school graduate
- Possibly on academic probation/warning/OARS
- Never used a terminal, Git, or a code editor
- Smart, motivated, but undersupported

**Graduating student:**
- Navigates Linux environments, builds/deploys software, debugs production issues
- Builds AI-powered systems with evaluation evidence and safe failure modes
- Frames problems, writes requirements, designs architecture, presents tradeoffs
- Reasons about ethics, risk, and governance in AI contexts
- Portfolio of **8 shipped projects** demonstrating progressive mastery
- Can operate as a junior AI product engineer or AI software engineer
- Has practiced leadership: Demo Day presentations, blameless postmortems, decision defense

---

## 5. The 8 Program-Level Capabilities

Students who complete this program will be able to:

1. **Software engineering for AI systems** — Build production-quality services (APIs, data pipelines, model/LLM-backed endpoints), not just notebooks
2. **Data competence** — SQL fluency, graph databases, ETL/ELT, data quality, unstructured enterprise data
3. **Core ML foundations** — Frame problems, choose baselines, evaluate properly, explain tradeoffs
4. **Generative AI / LLM application engineering** — RAG, tool-using LLM apps, prompt design, when to use RAG vs fine-tuning vs classical ML
5. **Evaluation, reliability, and "AI QA"** — Build evaluation harnesses, measure/reduce hallucinations, human-in-the-loop review
6. **Responsible AI + governance** — Risk-based thinking, model cards, data documentation, compliance
7. **Business + product ability** — Translate stakeholder needs, estimate cost/latency/benefit, communicate to non-technical audiences
8. **Collaboration and communication** — Technical docs, presentations, team execution, ownership

---

## 6. LLM Application Engineer Skills Framework

**Source:** [incoming_info/eai_research/llm-app-engineer-skills.md](../../incoming_info/eai_research/llm-app-engineer-skills.md) — Hiring rubric and RAG evaluation framework.

This defines what industry hires for. The curriculum maps to every section.

### Core Competency Areas

| Area | Key Skills | Maps to Course(s) |
|------|-----------|-------------------|
| IR/NLP fundamentals | Tokenization, chunking, BM25 vs dense retrieval, vector stores, reranking | IS 392, IS 331 |
| Prompting & orchestration | System prompts, tool/function calling, agents/workflows | IS 392, IS 425 |
| RAG system design | Ingestion pipelines, metadata/schema, chunking strategies, embeddings, guardrails | IS 392, IS 425 |
| Evaluation | Retrieval metrics (Recall@k, nDCG, MRR), generation metrics (faithfulness, attribution) | IS 480, IS 425 |
| Software engineering | Python/TypeScript, API design, tests, CI/CD, containers, observability | IS 218, IS 219 |
| Data/ML ops | Experiment tracking, A/B testing, drift detection, feedback loops | IS 465, IS 480 |
| Security/compliance | PII handling, data residency, prompt injection defenses, output filters | IS 350, IS 219 |
| Product sense | Success metrics, trade-offs, UX for citations and failure modes | IS 265, IS 390 |

### Industry Performance Targets (what employers measure)

| Category | Metric | Target |
|----------|--------|--------|
| Retrieval | Recall@10 | ≥ 0.85 |
| Retrieval | nDCG@10 | ≥ 0.75 |
| Generation | Groundedness | ≥ 0.9 |
| Generation | Hallucination rate | ≤ 5% |
| Generation | Attribution | ≥ 0.9 |
| System | p95 latency | ≤ 700–900 ms |
| System | Cost per query | ≤ $0.02–$0.05 |
| System | Failure recall (unanswerables) | ≥ 0.9 |

---

## 7. Center for Enterprise AI

The bridge between classroom and industry:

1. **Public AI Training** — Advanced students teach AI workshops to public, businesses, community organizations
2. **Industry Projects** — Real companies bring real problems; student teams build real solutions
3. **Demo Day** — Every semester; structured rubric (evidence-based, not "best demo wins")
4. **Research Incubation** — Faculty research (Neural Fabric) feeds into curriculum and projects
5. **Community Partnerships** — Local nonprofits/government get AI capability; students get real-world experience
