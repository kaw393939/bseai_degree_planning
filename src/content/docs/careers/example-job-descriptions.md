---
title: Example Job Descriptions + Salaries
description: Original example roles (AI Product Engineer / AI Software Engineer) with salary ranges for program communication.
---

# Example Job Descriptions + Salaries

These are **original** example job descriptions you can use when asked: “What can students do after this degree?”

Salary ranges are **estimates** based on:

- The salary ranges captured in your job signals file (`incoming_info/jobs.md`, kept untracked)
- Current web research using `eai search` (saved under `incoming_info/eai_research/`, gitignored)
- BLS Occupational Outlook Handbook medians (May 2024) as baseline reference:
  - Software Developers: https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm
  - Data Scientists: https://www.bls.gov/ooh/math/data-scientists.htm
  - Information Security Analysts: https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm

Actual pay varies by location, seniority, company type, and total-comp structure.

## Quick salary bands (US, Feb 2026 snapshot)

- **AI Product Engineer**: entry base ~$110k–$150k; mid–senior base ~$140k–$260k (sources include Built In + Y Combinator company postings)
- **Forward-Deployed AI/ML Engineer**: mid base ~$140k–$220k; TC often ~$200k–$350k (sources include Glassdoor + Scale)
- **AI Deployment / MLOps / Inference Engineer**: entry base ~$115k–$140k; mid base ~$130k–$170k; senior base ~$160k–$220k (sources include Salary.com + Levels)
- **LLM Application Engineer**: entry base ~$110k–$160k; mid base ~$150k–$200k; senior/staff base ~$180k–$250k+ (sources include Levels + H1B/filings aggregators)

---

## 1) AI Product Engineer (LLM features)

**What you do**

- Ship user-facing, LLM-backed product features (web + API)
- Build RAG/tool-use flows and iterate using product metrics + qualitative feedback
- Define and maintain evaluation sets (golden answers, scenarios) to prevent regressions
- Collaborate daily with PM + design; translate requirements into acceptance tests

**Must-have skills**

- Python (or TypeScript) + web APIs
- LLM APIs, prompt design, structured outputs
- RAG fundamentals (chunking, embeddings, retrieval, reranking)
- Testing, CI, logging/observability basics

**Nice-to-have**

- Basic data engineering (SQL, ETL concepts)
- Front-end proficiency (React or equivalent)
- Security/privacy awareness for data used in prompts

**Estimated salary (US)**

- Entry (0–2 yrs): base roughly **$110k–$150k**
- Mid–senior: base roughly **$140k–$260k**
- TC can be substantially higher with equity, especially in top markets/companies

Example source set: https://builtin.com/salaries/us/ai-engineer, https://www.ycombinator.com/companies/gem/jobs/4Uathaz-ai-product-engineer-san-francisco

---

## 2) Forward-Deployed AI Engineer (prototype → handoff)

**What you do**

- Rapidly prototype AI workflows inside real user contexts
- Test feasibility, performance, and UX fit; document learnings
- Produce handoff packages that production teams can operationalize

**Must-have skills**

- Fast prototyping with Python + LLM frameworks
- Strong communication + technical writing
- Comfort working in cross-functional discovery teams

**Estimated salary (US)**

- Often hired at **mid-level+** (varies by company)
- Mid base roughly **$140k–$220k**; TC often **$200k–$350k**

Example source set: https://scale.com/careers/4602177005, https://www.glassdoor.com/Salary/Palantir-Technologies-Forward-Deployed-Software-Engineer-Salaries-EJI_IE236375.0%2C21_KO22%2C56_IM615.htm

---

## 3) AI Deployment Engineer (enterprise / regulated)

**What you do**

- Deploy generative AI applications safely into enterprise environments
- Integrate AI services with identity, audit, logging, and compliance controls
- Build rollout plans, monitoring, incident response, and stakeholder reporting

**Must-have skills**

- Systems thinking: environments, deployment, reliability, incident response
- Secure integration patterns (authn/authz, secrets, audit logging)
- Ability to communicate risk and operational readiness to stakeholders

**Estimated salary (US)**

- Entry (0–2 yrs): base roughly **$115k–$140k**
- Mid (3–5 yrs): base roughly **$130k–$170k**
- Senior (5–8 yrs): base roughly **$160k–$220k**
- Postings can be wide (example captured band: **$137k–$250k**)

Example source set: https://www.salary.com/research/salary/hiring/mlops-engineer-salary, https://www.levels.fyi/blog/ai-engineer-compensation-trends-q3-2025.html

---

## 4) LLM Application Engineer (RAG + eval)

**What you do**

- Build reliable RAG features (search/retrieval + generation) that meet latency/cost targets
- Add reranking, caching, and guardrails; handle unanswerable queries well
- Build evaluation harnesses (offline + online) and run error analysis loops

**Must-have skills**

- Retrieval basics (hybrid search, reranking) + vector stores
- Evaluation metrics (Recall@k / nDCG + groundedness/attribution)
- Solid software engineering: tests, CI, observability, API design

**Estimated salary (US)**

- Entry (0–2 yrs): base roughly **$110k–$160k**
- Mid (3–5 yrs): base roughly **$150k–$200k**
- Senior/staff: base roughly **$180k–$250k+** (TC can be much higher with equity)

Example source set: https://www.levels.fyi, https://www.h1b-connect.com

---

## 5) AI Software Engineer (platform + quality)

**What you do**

- Build internal tooling and platform capabilities for AI development
- Maintain evaluation infrastructure: test data, metrics, dashboards, gating checks
- Improve reliability: timeouts, fallbacks, caching, and safe degradation

**Must-have skills**

- Strong software engineering fundamentals (design, testing, debugging)
- Observability (logs/metrics/traces) and performance tuning
- Comfortable integrating multiple services and data sources

**Estimated salary (US)**

- Baseline reference: BLS Software Developers median is **$133,080** (May 2024)
- Platform-oriented AI roles commonly overlap with higher-paying software bands in major markets
