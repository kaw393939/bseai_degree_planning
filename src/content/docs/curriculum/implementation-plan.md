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
- IS 118 new-course proposal submitted (the only course requiring a new catalog number)
- MSCHE substantive-change notification filed

## Phase 1 — First Cohort Launch (Fall 2026 – Spring 2027)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2026 | **IS 117** — Computational Thinking | Disciplined Inquiry |
| Spring 2027 | **IS 118** — Interactive Computing | Translation |

**Standardizations across all studios (implemented before Fall 2026)**

- Git workflow + CI checks
- Minimum testing expectation (unit tests from IS 117; integration tests from IS 218 onward)
- Logging/observability expectation
- Handoff artifact requirement (README + runbook + evaluation note)
- [Context Pack](/bseai_degree_planning/program/context-pack/) as a recurring deliverable

## Phase 2 — Sophomore Studios (Fall 2027 – Spring 2028)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2027 | **IS 218** — Software Engineering | Professional Judgment |
| Spring 2028 | **IS 265** — Data & AI Fundamentals | Problem Finding |

Technical coverage expands: containerized deployment, API design, data pipelines, SQL, and introductory ML evaluation. Demo Day begins in IS 118 and continues every semester from this point forward.

## Phase 3 — Junior Studios + Service Learning (Fall 2028 – Spring 2029)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2028 | **IS 219** — AI-Augmented Development | Resilience Thinking |
| Spring 2029 | **IS 331** — AI Data Systems | Epistemic Humility |

**Technical spine coverage at this stage:**

- LLM application engineering (RAG + tool use + agentic orchestration)
- Evaluation and AI QA (offline + online eval, regression gates)
- Data competence (SQL, graph + vector stores, pipeline quality)
- Systems/reliability (deployment, monitoring, rollbacks)
- IS 331 introduces graph and vector as data structures for real corpora (entities/relationships + retrieval)

**Center for Enterprise AI on-ramp:** A 300-level service learning clinic may be added as the Center’s intake point, scoping partner projects for real delivery with training modules, partner-facing deliverables, and reflection postmortems.

## Phase 4 — Senior Studios & Capstone (Fall 2029 – Spring 2030)

| Semester | Studio Course | Capability Focus |
|----------|--------------|------------------|
| Fall 2029 | **IS 390** — AI Product Studio | Systems Thinking |
| Spring 2030 | **IS 425** — Enterprise AI Capstone | Accountable Leadership |

IS 425 requires a production-style system combining graph + vector + orchestration + evaluation + HITL workflows. The capstone Demo Day serves as the program’s signature assessment, evaluated by industry judges.

## Demo Day Assessment Model

Demo Day operates as a **grading component within each course** (typically 15% of the course grade, starting in IS 118). The Demo Day portion is itself rubric-driven:

| Component | Weight (within Demo Day) |
|-----------|------------------------|
| External judging (value + clarity + evidence) | 25% |
| Faculty rubric (engineering depth + eval + reliability + responsible AI) | 25% |
| Technical deliverables (tests, CI, docs, reproducibility) | 25–35% |
| Individual contribution (peer + commit evidence) | 15–25% |

See the [Assessment Plan](/bseai_degree_planning/accreditation/assessment-plan/) for the full continuous-improvement framework.

## Industry Coalition & Project Intake

To sustain the Center for Enterprise AI and provide authentic senior projects, the program establishes a predictable intake pipeline:

**Minimum viable intake process**

- One-page project proposal template (data access, success metrics, risks)
- Two-week scoping window at semester start
- Named stakeholder and weekly check-in
- IS 390 and IS 425 students work on industry-sourced projects as their studio deliverables
