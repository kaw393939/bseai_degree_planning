---
title: Skills Map (from job signals)
description: A curriculum-aligned view of the skills that appear repeatedly across AI Product Engineer and AI Software Engineer roles.
---

# Skills Map (from job signals)

This page distills recurring requirements from the job signals captured in `incoming_info/jobs.md` (kept untracked) into a curriculum-friendly skills map.

## 1) Product-minded AI engineering (prototype → production)

Students should be able to:

- Turn ambiguous product ideas into **working prototypes** quickly
- Convert prototypes into **production-ready** services with tests, docs, and monitoring
- Create clear **handoff artifacts**: design notes, limitations, evaluation results, and runbooks

Signals seen in roles:

- “Forward-deployed” / embedded engineering (PM + UX + research)
- Rapid iteration with user feedback
- Documentation that enables downstream engineering teams

## 2) LLM application engineering

Students should be able to:

- Build LLM-backed features with clear boundaries: input contracts, structured outputs, and failure handling
- Implement common patterns:
  - Retrieval-Augmented Generation (RAG)
  - Tool / function calling
  - Agentic workflows (multi-step plans with tools)
- Measure quality with **evaluation harnesses** and regression tests

Typical technical surface area:

- Python, API integration, prompt design, embeddings/vector search
- Latency/cost tradeoffs, caching, rate limits

### RAG + eval rubric (practical)

Students should be able to design and measure:

- **Retrieval quality**: Recall@k, MRR, nDCG, and “context hit rate” (did the retrieved text actually support the answer?)
- **Generation quality**: groundedness/faithfulness, attribution correctness, refusal quality for unanswerables
- **System quality**: p50/p95 latency, $/query, timeout rate, cache hit rate

Common interview/take-home style expectations for this role family:

- Implement end-to-end RAG over a corpus, plus a repeatable eval suite.
- Instrument cost/latency and prevent regressions with CI gating.

## 3) Data integration and data competence

Students should be able to:

- Use SQL and data modeling basics to integrate product data with AI features
- Build and validate datasets (quality checks, leakage prevention, sampling bias awareness)
- Work with unstructured enterprise data (documents, tickets, PDFs, etc.)

## 4) Software engineering fundamentals (non-negotiables)

Students should be able to:

- Build services with: version control, code review habits, testing, and CI
- Write and consume APIs; reason about performance and reliability
- Debug effectively and communicate implementation tradeoffs

## 5) Systems + performance

Students should be able to:

- Deploy AI/LLM features safely in real systems (staging → rollout)
- Improve performance and quality using instrumentation and measurement
- Understand common infrastructure constraints (queues, async workers, caching, observability)

## 6) Responsible AI, security, and governance basics

Students should be able to:

- Identify risks and define controls (privacy, security, misuse, compliance)
- Document limitations and intended use
- Communicate stakeholder-appropriate risk summaries

## Skill-to-curriculum mapping (starter)

Use this table when shaping course outcomes and capstone expectations.

| Skill area | Evidence artifact students can produce |
|---|---|
| LLM app engineering | RAG app with eval suite + cost/latency report |
| Data integration | Pipeline with validation + lineage notes |
| Production readiness | Service with tests + CI + monitoring plan |
| Product engineering | Prototype → iteration log + acceptance tests |
| Responsible AI | system card (risks, mitigations, limitations) |
