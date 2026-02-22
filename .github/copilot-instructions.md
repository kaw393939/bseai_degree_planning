# Copilot Instructions — BS in Enterprise AI Planning Repo

## Project Overview

This repository contains **all planning materials** for NJIT's proposed **BS in Enterprise AI** degree program, housed in the Ying Wu College of Computing, Department of Informatics (IS prefix). Target launch: **Fall 2026**.

- **Live site:** https://kaw393939.github.io/bseai_degree_planning
- **Repo:** https://github.com/kaw393939/bseai_degree_planning
- **Branch:** `main`
- **Owner:** Keith Williams (kaw393939)

The site is built with **Astro + Starlight** and deployed via GitHub Pages. The site contains 43 pages across 10 sidebar sections presenting the degree proposal to NJIT administrators, faculty, students, and industry partners.

---

## Critical Context

### Audience

The primary audience is **PhD-level administrators at NJIT** who will evaluate this proposal. Every claim must be:
- Sourced with author/org, date, and URL
- Defensible under expert scrutiny
- Current (2024–2026 data preferred)

**Any factual error will damage credibility.** Treat citations like a peer-reviewed paper.

### The Program in One Sentence

> The BS in Enterprise AI trains students in the human capabilities that AI cannot replicate — inquiry, judgment, resilience, accountability — through an 8-course studio spine where every semester produces a shipped artifact and every technical skill is learned alongside the human skill that makes it valuable.

### Key Branding

- **"The Human Edge"** — the program's central thesis and brand
- **8 Human Edge Capabilities:** Disciplined Inquiry, Translation, Professional Judgment, Problem Finding, Resilience Thinking, Epistemic Humility, Systems Thinking, Accountable Leadership
- **Studio model** — cohort-based, project-every-semester, portfolio on graduation
- **Signature assessments:** AI Audit Log (IS 118), Failure Mode Analysis + Incident Drill (IS 218), Demo Day (IS 425), Translation Brief (IS 482)

---

## Directory Structure

```
src/content/docs/       # Astro/Starlight site content (43 .mdx pages)
astro.config.mjs        # Site config with full sidebar structure
docs/research/          # ★ CONSOLIDATED RESEARCH CORPUS (files 00–08)
incoming_info/          # Raw source materials (syllabi, job postings, catalog data, vision docs)
project-management/qa/  # QA reports for all 43 pages (~75 issues, 4 CRITICAL)
public/                 # Static assets
dist/                   # Build output (gitignored)
```

### Research Corpus (`docs/research/`)

This is the **single source of truth** for all evidence and data. Every file is numbered and self-contained:

| File | Contents |
|------|----------|
| `00-research-index.md` | Master index, citation standards, source reliability tiers, key numbers to defend |
| `01-ai-capability-trajectory.md` | All benchmark data (SWE-bench, MMLU, HLE, Math, ARC-AGI, METR, GAIA, frontier models) |
| `02-labor-market.md` | CS unemployment, tech layoffs, BLS projections, AI job growth, NJIT regional data |
| `03-economic-impact-enterprise.md` | McKinsey/Goldman/IMF projections, enterprise adoption rates, AI investment figures |
| `04-industry-voices.md` | CEO quotes (Amodei, Altman, Pichai, Huang), Shumer "Something Big" article |
| `05-peer-programs.md` | CMU, Stanford, GT, Purdue, ASU comparison + NJIT differentiators |
| `06-salary-data.md` | ★ Canonical salary ranges — ALL salary claims on the site must match this file |
| `07-accreditation-policy.md` | ABET CAC, MSCHE substantive change, NJIT syllabus requirements, admin roadmap |
| `08-program-design.md` | Human Edge vision, 8 capabilities, curriculum structure, skills framework |

**When updating the site, always check the relevant research file first to ensure consistency.**

### Source Materials (`incoming_info/`)

Raw inputs that were consolidated into `docs/research/`. Keep for reference but do not use directly — use the consolidated files instead.

- `vision/the-human-edge.md` — Original Human Edge thesis document
- `courses/` — Full catalog data (current, proposed, change analysis, draft syllabi)
- `eai_research/` — ABET criteria, salary research, BLS data, METR, skills framework
- `njit_course_research/` — NJIT 2025-2026 catalog extracts for IS courses
- `jobs.md` — Morningstar + other job postings
- `something_big.md` — Matt Shumer's viral article (original text)

### QA Reports (`project-management/qa/`)

- `00-cross-cutting-issues.md` — Master QA summary with page status index
- 43 individual page QA files
- 4 CRITICAL issues identified (salary inconsistencies, capability count gaps, empty peer programs page)
- ~75 total issues across 31 pages

---

## Canonical Numbers (Must Be Consistent Across All Pages)

| Claim | Value | Source |
|-------|-------|--------|
| Entry-level AI salary range | $110K–$150K | See `06-salary-data.md` |
| Mid-level AI salary range | $150K–$220K | See `06-salary-data.md` |
| Senior AI salary range | $180K–$350K+ TC | See `06-salary-data.md` |
| CS new-grad unemployment | 6.1% | NY Fed, Dec 2024 |
| Studio spine courses | 8 courses (IS 117→118→218→265→331→390→425→482) | See `08-program-design.md` |
| Human Edge capabilities | 8 (not 5, not 6) | See `08-program-design.md` |
| SWE-bench best score | 81.42% (Sonnet 4, Jun 2025) | See `01-ai-capability-trajectory.md` |
| Catalog numbers in spine | 6 of 8 exist (IS 118 and IS 482 are NEW) | See `07-accreditation-policy.md` |
| METR task doubling | ~7 months (full), ~3 months (recent) | See `01-ai-capability-trajectory.md` |
| AI private investment 2025 | $225.8B | Stanford HAI, Apr 2025 |

---

## Site Architecture

The Astro/Starlight site has 10 sidebar sections defined in `astro.config.mjs`:

1. **The Program** (5 pages) — Vision, studios, outcomes, degree, student journey
2. **Philosophy** (4 pages) — Executive summary, stripping thesis, acceleration thesis, new paradigm
3. **Program Design** (6 pages) — PEOs, outcomes, learning objectives, curriculum map, 40/60 policy, context pack
4. **Syllabi** (8 pages) — One per spine course (IS 117–425)
5. **Accreditation** (4 pages) — ABET, MSCHE, outcomes mapping, assessment plan
6. **Evidence** (4 pages) — Why now, job market, industry voices, higher ed landscape
7. **Stakeholders** (4 pages) — Administrators, faculty, students, industry partners
8. **Reference** (3 pages) — Current catalog, proposed catalog, implementation plan
9. **Careers** (3 pages) — Job signals, skills map, example JDs + salaries
10. **Research** (1 page) — Peer program benchmarks

Content files are `.mdx` in `src/content/docs/` with subdirectories matching section names.

---

## Shell Environment Notes

The user's shell has an `eai` tool hook that intercepts `cat`, `ls`, and `wc`. When running terminal commands:
- Use `/bin/cat` instead of `cat`
- Use `/bin/ls` instead of `ls`
- Use `/usr/bin/wc` instead of `wc`
- Or prefix with `SHELL=/bin/sh /bin/sh -c '...'`
- The `eai` tool itself is at `/Users/kwilliams/.local/bin/eai` and can do `eai search "query" --output path` for AI-powered web research

---

## Working Guidelines

1. **Citations first.** Before adding any data point to a page, verify it exists in the research corpus with a proper source.
2. **Salary claims must match `06-salary-data.md`.** This is the canonical source. No ad-hoc salary numbers.
3. **8 capabilities, 8 courses, 8 studios.** The number is 8. Not 5, not 6. Check `08-program-design.md`.
4. **IS 118 is NEW.** All other spine courses are modifications of existing catalog numbers. This matters for accreditation (MSCHE substantive change).
5. **QA issues are tracked.** Check `project-management/qa/00-cross-cutting-issues.md` for known issues before making changes.
6. **Read the research index first.** `docs/research/00-research-index.md` has citation standards, reliability tiers, and the key numbers most likely to be challenged.
7. **Don't modify `incoming_info/`.** These are source documents. Make changes in `docs/research/` or `src/content/docs/`.
8. **Build before committing.** Run `npm run build` to verify no broken links or Astro errors.
