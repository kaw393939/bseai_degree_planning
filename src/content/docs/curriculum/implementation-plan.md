---
title: Implementation Plan (Draft)
description: Prioritized next steps to deliver studio-based core courses and the Center for Enterprise AI.
---

# Implementation Plan (Draft)

This plan is derived from the planning notes in `incoming_info/` and is intended to be *operational*: what to build, in what order, with what evidence.

## Phase 0 — Lock the operating model (2–3 weeks)

**Studio constraints (non-negotiables)**

- Core courses run as studios with **real feedback cycles**
- Section cap: **20–25 students**
- “Terminal + Linux” is required for a meaningful portion of coursework (target: **30–40%** of tasks)

**Deliverables**

- Studio rubric used across courses (quality, evaluation, reliability, responsible AI, documentation)
- Shared repo templates: service skeleton, eval harness skeleton, runbook template

## Phase 1 — Near-term course readiness (target: Fall 2026)

From the near-term plan:

- IS117 (studio)
- IS265 (studio)
- IS218 (studio)
- IS331 (studio)
- IS390 (studio)

**What to standardize across all of them**

- Git workflow + CI checks
- A minimum testing expectation
- Logging/observability expectation
- A “handoff artifact” requirement (README + runbook + evaluation note)

## Phase 2 — Add the 3XX service learning clinic (Center on-ramp)

Add a 300-level service learning course as the Center’s on-ramp.

**Purpose**

- Public AI training delivery (teach-by-building modules)
- Partner projects scoped for real delivery (not research-only)

**Required artifacts**

- Training module(s) + hands-on lab(s)
- Partner-facing deliverable + documentation
- Reflection and postmortem (what worked, what failed, what to change)

## Phase 3 — The Enterprise AI “spine” (junior/senior studios)

The spine should explicitly cover what your job signals emphasize:

- LLM application engineering (RAG + tool use + agentic orchestration)
- Evaluation and AI QA (offline + online eval, regression gates)
- Data competence (SQL, pipelines, quality)
- Systems/reliability (deployment, monitoring, rollbacks)
- Responsible AI + governance artifacts

**Where graph + vector belong**

- IS331: introduce graph and vector as data structures for real corpora (entities/relationships + retrieval)
- IS425: require a production-style system that combines graph + vector + orchestration + evals + HITL

## Phase 4 — Demo Day as a grading component (each semester)

Demo Day can work well if it’s rubric-driven and not purely “best demo wins.”

**Recommended grading split**

- 25% external judging (value + clarity + evidence)
- 25% faculty rubric (engineering depth + eval + reliability + responsible AI)
- 25–35% technical deliverables (tests, CI, docs, reproducibility)
- 15–25% individual contribution (peer + commit evidence)

## Phase 5 — Industry coalition + project intake

To sustain the Center, you need a predictable intake pipeline.

**Minimum viable intake process**

- One-page project proposal template (data access, success metrics, risks)
- Two-week scoping window at semester start
- Named stakeholder and weekly check-in

## What to do next (this week)

1. Write the one-page studio rubric and apply it to IS117/265/218/331/390.
2. Define the “Linux + security + cloud” baseline as a checklist students must pass.
3. Draft the 3XX service learning clinic proposal (learning outcomes + deliverables).
