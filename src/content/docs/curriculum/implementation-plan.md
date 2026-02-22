---
title: Implementation Plan
description: Phased timeline for launching the BS in Enterprise AI studio spine and supporting infrastructure.
---

# Implementation Plan

This plan outlines the phased rollout of the BS in Enterprise AI, from curriculum design through full-cohort operation. The program launches with its first cohort in **Fall 2026**; all 8 studio courses are operational by **Spring 2030**.

## Phase 0 — Curriculum Design & Approval (Spring 2025 – Spring 2026)

**Objective:** Finalize the operating model, secure MSCHE approval, and prepare the first course for launch.

**Operating model (non-negotiables)**

- All spine courses run as studios with real feedback cycles and shipped artifacts
- Section cap: **20–25 students**
- Terminal + Linux required for a meaningful portion of coursework (target: **30–40%** of tasks)
- [40/60 policy](/bseai_degree_planning/program/forty-sixty-policy/): every course balances 40% foundational skill-building with 60% AI-augmented professional practice

**Deliverables**

- Studio rubric framework used across all 8 spine courses (quality, evaluation, reliability, responsible AI, documentation)
- Shared repo templates: service skeleton, eval harness skeleton, runbook template
- IS 118 and IS 482 new-course proposals submitted (the only courses requiring new catalog numbers)
- MSCHE substantive-change notification filed

## Phase 1 — First Cohort Launch (Fall 2026 – Spring 2027)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2026 | **IS 117** — Web Development & Inquiry | Disciplined Inquiry |
| Spring 2027 | **IS 118** — Full-Stack Web Applications | Professional Judgment |

**Standardizations across all studios (implemented before Fall 2026)**

- Git workflow + CI checks
- Minimum testing expectation (unit tests from IS 117; integration tests from IS 218 onward)
- Logging/observability expectation
- Handoff artifact requirement (README + runbook + evaluation note)
- [Context Pack](/bseai_degree_planning/program/context-pack/) as a recurring deliverable

## Phase 2 — Sophomore Studios (Fall 2027 – Spring 2028)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2027 | **IS 218** — Infrastructure & Resilience | Resilience Thinking |
| Spring 2028 | **IS 265** — Enterprise AI Midpoint Capstone | Problem Finding |

Technical coverage expands: Linux, containers, CI/CD, observability, incident response, enterprise stakeholder analysis, and governance. Demo Day begins in IS 118 and continues every semester from this point forward.

## Phase 3 — Junior Studios (Fall 2028 – Spring 2029)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2028 | **IS 331** — Data & Knowledge Systems | Epistemic Humility |
| Spring 2029 | **IS 390** — Systems Analysis & Design | Systems Thinking |

**Technical spine coverage at this stage:**

- LLM application engineering (RAG + tool use + agentic orchestration)
- Evaluation and AI QA (offline + online eval, regression gates)
- Data competence (SQL, graph + vector stores, pipeline quality)
- Systems/reliability (deployment, monitoring, rollbacks)
- IS 331 introduces graph and vector as data structures for real corpora (entities/relationships + retrieval)

**Center for Enterprise AI on-ramp:** The Center’s project intake pipeline feeds industry-sourced problems into IS 390 and IS 425, while IS 482 provides the community-facing service learning arm.

## Phase 4 — Senior Studios & Community Impact (Fall 2029 – Spring 2030)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2029 | **IS 425** — Applied Enterprise AI | Accountable Leadership |
| Spring 2030 | **IS 482** — Community AI Training | Translation |

IS 425 requires a production-style system combining graph + vector + orchestration + evaluation + HITL workflows. IS 482 closes the loop: students take everything they’ve built and teach it to the community. The IS 425 Demo Day serves as the program’s signature technical assessment, evaluated by industry judges.

## Demo Day Assessment Model

Demo Day operates as a **grading component within each course** (typically 15% of the course grade, starting in IS 118). The Demo Day portion is itself rubric-driven:

| Component | Weight (within Demo Day) |
|-----------|------------------------|
| External judging (value + clarity + evidence) | 25% |
| Faculty rubric (engineering depth + eval + reliability + responsible AI) | 25% |
| Technical deliverables (tests, CI, docs, reproducibility) | 25–35% |
| Individual contribution (peer + commit evidence) | 15–25% |

See the [Assessment Plan](/bseai_degree_planning/accreditation/assessment-plan/) for the full continuous-improvement framework.

## Resource Requirements

| Resource | Requirement | Timeline | Status |
|----------|------------|----------|--------|
| **Faculty** | 1 FTE lead + 2 adjuncts (practitioner-instructors) | Hire by Spring 2026 | Studio cap of 20–25 means small sections; adjuncts with deployment experience preferred |
| **Lab infrastructure** | Linux terminal environment, CI/CD servers, GPU access for IS 392/465/480 | Ready by Fall 2026 | Leverage NJIT HPC + cloud credits (AWS/Azure academic programs) |
| **Industry partnerships** | 3–5 committed organizations for senior project intake | By Fall 2028 (Phase 3) | NJ AI Hub ($72M+), NYC metro (5,201+ AI openings) provides pipeline |
| **Assessment infrastructure** | Portfolio platform, Demo Day logistics, rubric calibration | By Spring 2027 (IS 118 launch) | Existing GitHub + deployment platforms; Demo Day adds venue + judge coordination |
| **MSCHE filing** | Substantive change notification (IS 118 and IS 482 are new courses) | Filed Spring 2026 | 2 of 8 spine courses are new; rest are modifications of existing catalog numbers |

## Instructor Preparation: The Primary Execution Variable

The studio model's quality ceiling is set by instructor quality. This is not a lecture program where content can be delivered from prepared slides — studio instructors must model the 40/60 workflow live, evaluate AI-generated output in real time, calibrate rubrics with colleagues, coach students through ambiguity, and accumulate the Spell Book vocabulary alongside their students.

The research is clear: inter-rater reliability in portfolio-based assessment requires structured calibration (Jonsson and Svingby, 2007), and situated learning environments depend on instructor authenticity (Lave and Wenger, 1991). Instructor preparation is therefore treated as a **first-class program requirement**, not a staffing afterthought.

### Structured Onboarding Protocol

| Phase | Activity | Timeline | Responsible |
|-------|----------|----------|-------------|
| **Pre-hire** | Candidate teaches a sample studio session (not a lecture) as part of interview | During hiring | Search committee |
| **Orientation** | 1-day workshop: studio pedagogy, CCR loop, 40/60 split, Spell Book philosophy, Context Pack assessment, rubric walkthrough | 4 weeks before first semester | Program director |
| **Shadow** | Observe an experienced studio instructor for 1–2 class sessions (or review recorded sessions) | 2 weeks before first semester | Assigned mentor |
| **Rubric calibration** | Score 3 sample artifacts using the standard rubric with faculty committee; discuss discrepancies and establish shared anchors | 1 week before first semester | Faculty committee |
| **AI tool proficiency** | Hands-on session with AI tools students will use (Copilot, Claude, ChatGPT); demonstrate 40/60 workflow; practice evaluating AI-generated output | During orientation | Program director |

### Ongoing Calibration

| Activity | Frequency | Purpose |
|----------|-----------|----------|
| Mid-semester artifact exchange | Every semester | 2 anonymized artifacts exchanged with a colleague in a different studio; scores compared |
| Cross-course coordination meeting | Term-start + mid-term | Align Spell Book progression, Context Pack expectations, share what's working |
| Annual norming workshop | Every August | Review exemplar artifacts from each rubric level (1–4); update anchor descriptions based on observed student work |
| Peer observation | Annual | Each instructor observes one colleague's studio session; structured feedback form |

This protocol ensures that the program's quality is not dependent on finding "unicorn" instructors. It creates a system where good instructors become great studio instructors through deliberate preparation and ongoing calibration.

## Risk Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Instructor quality variance** | **High** | **High** | **Primary execution risk.** Structured onboarding protocol (see above), pre-semester rubric calibration, mid-semester artifact exchange, annual norming workshop, peer observation. Studio teaching is a skill that must be developed — the onboarding protocol converts good instructors into effective studio instructors through deliberate practice. |
| Low initial enrollment | Medium | High | Market as AI career accelerator, not traditional CS; leverage $110K–$150K starting salary data; target students who self-select for building, not theory |
| Faculty recruitment | Medium | High | Practitioner-instructors (not PhD researchers); competitive adjunct rates justified by small sections; industry network for guest judges |
| AI capability outpaces curriculum | High | Medium | 40/60 policy ensures 60% of each course uses current AI tools; syllabi are frameworks, not frozen content; annual curriculum review built into assessment plan |
| Accreditation delay | Low | High | IS 118 and IS 482 are the only new courses; MSCHE substantive change (not new program) has shorter timeline; ABET CAC self-study planned for Year 3 |
| Industry partner churn | Medium | Medium | Diversify across sectors (finance, healthcare, logistics, government); maintain 3–5 active partners; IS 390 can use instructor-sourced projects as fallback |
| Student underprepration more severe than expected | Medium | Medium | Studio model is already designed for NAEP/ACT reality; IS 117 starts from zero; AI Audit Log scaffolds judgment progressively; cohort structure provides peer support |

## Decision Points

| Date | Decision | Depends On | Go/No-Go Criteria |
|------|----------|-----------|-------------------|
| **Spring 2026** | File MSCHE substantive change | Curriculum committee approval | IS 118 and IS 482 syllabi finalized, PEOs mapped to outcomes |
| **Summer 2026** | Finalize IS 117 studio format | Rubric framework complete | Pilot rubric tested with sample artifacts |
| **Fall 2026** | Launch first cohort | MSCHE approval, faculty hired, infrastructure ready | Minimum 15 enrolled students, 1 FTE + 1 adjunct confirmed |
| **Spring 2027** | Launch IS 118 | IS 117 cohort data collected | IS 117 completion rate >80%, student feedback incorporated |
| **Fall 2028** | Activate Center for Enterprise AI | Industry partners committed | 3+ signed MOUs, project intake process tested |
| **Spring 2030** | First cohort graduates | Full spine operational | All 8 studios have run at least once; Demo Day executed with industry judges |

## Industry Coalition & Project Intake

To sustain the Center for Enterprise AI and provide authentic senior projects, the program establishes a predictable intake pipeline:

**Minimum viable intake process**

- One-page project proposal template (data access, success metrics, risks)
- Two-week scoping window at semester start
- Named stakeholder and weekly check-in
- IS 390 and IS 425 students work on industry-sourced projects as their studio deliverables
