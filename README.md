# BS Enterprise AI Degree Planning

<!-- portfolio-curation -->
## Portfolio Overview
Planning hub for a proposed BS in Enterprise AI curriculum centered on durable human capabilities.

**Live site:** https://kaw393939.github.io/bseai-degree-planning/

## What This Demonstrates
- Curriculum design
- AI education strategy
- degree planning

## Stack
MDX, documentation

## Portfolio Status
This repository is part of Keith Williams' curated public portfolio. The README has been updated to explain the project purpose, technical focus, and why the work is worth reviewing.
<!-- /portfolio-curation -->

---

## Original Notes

# BS in Enterprise AI — The Human Edge

Planning hub for NJIT's proposed **BS in Enterprise AI**, a degree that trains the human capabilities AI cannot replicate. Target launch: **Fall 2026**.

**Live site:** https://kaw393939.github.io/bseai_degree_planning

---

## What This Repo Contains

| Directory | Purpose |
|-----------|---------|
| `src/content/docs/` | 43 `.mdx` pages — the presentation site (Astro + Starlight) |
| `docs/research/` | **Consolidated research corpus** (9 numbered files, 00–08) — single source of truth for all evidence |
| `incoming_info/` | Raw source materials (syllabi, catalog data, job postings, vision docs) — read-only reference |
| `project-management/qa/` | QA reports for all 43 pages (~75 issues tracked, 4 CRITICAL) |
| `.github/copilot-instructions.md` | Persistent AI assistant instructions for VS Code Copilot |
| `astro.config.mjs` | Sidebar structure and site configuration |

## Research Corpus (`docs/research/`)

All evidence consolidated into 9 files. Every stat has author, date, and URL.

| # | File | What's In It |
|---|------|-------------|
| 00 | `00-research-index.md` | Master index, citation standards, reliability tiers, key numbers to defend |
| 01 | `01-ai-capability-trajectory.md` | SWE-bench, MMLU, HLE, Math, ARC-AGI, METR, GAIA, frontier models |
| 02 | `02-labor-market.md` | CS unemployment 6.1%, layoffs, BLS projections, NJIT regional data |
| 03 | `03-economic-impact-enterprise.md` | McKinsey/Goldman/IMF projections, adoption rates, $225.8B investment |
| 04 | `04-industry-voices.md` | CEO quotes (Amodei, Altman, Pichai, Huang), Shumer "Something Big" |
| 05 | `05-peer-programs.md` | CMU, Stanford, GT, Purdue, ASU — comparison + NJIT differentiators |
| 06 | `06-salary-data.md` | **Canonical salary ranges** — all site salary claims must match this |
| 07 | `07-accreditation-policy.md` | ABET CAC, MSCHE, NJIT policies, administrative roadmap |
| 08 | `08-program-design.md` | Human Edge vision, 8 studios, curriculum, skills framework |

## The Program at a Glance

- **8-course studio spine:** IS 117 → 118 → 218 → 265 → 331 → 390 → 425 → 482
- **8 Human Edge capabilities:** Disciplined Inquiry, Professional Judgment, Resilience Thinking, Problem Finding, Epistemic Humility, Systems Thinking, Accountable Leadership, Translation
- **Every semester ships an artifact.** Graduates leave with a portfolio of 8 projects.
- **Signature assessments:** AI Audit Log (IS 118), Failure Mode Analysis + Incident Drill (IS 218), Demo Day (IS 425), Translation Brief (IS 482)
- **Department:** Informatics (IS prefix), Ying Wu College of Computing
- **Accreditation path:** IS 118 and IS 482 are new courses; 6 of 8 spine courses already exist

## Quick Start

```bash
npm install
npm run dev        # Local dev server at localhost:4321
npm run build      # Production build → dist/
```

Deployment is automatic via GitHub Actions → GitHub Pages on push to `main`.

## Key Rules

1. **All salary claims must match `docs/research/06-salary-data.md`** — no ad-hoc numbers
2. **8 capabilities, 8 courses, 8 studios** — the number is always 8
3. **Citations required** — every stat needs author/org, date, and URL (see `00-research-index.md`)
4. **Don't edit `incoming_info/`** — those are source documents; edit `docs/research/` or `src/content/docs/`
5. **Build before committing** — `npm run build` catches broken links and Astro errors

## QA Status

See `project-management/qa/00-cross-cutting-issues.md` for the full status index. 4 CRITICAL issues remain.

## AI Assistant Setup

This repo includes `.github/copilot-instructions.md` with full project context for VS Code Copilot. New conversations automatically load these instructions — no manual context needed.


