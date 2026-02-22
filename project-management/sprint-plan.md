# BSEAI Site Improvement Sprint Plan

> **Created:** February 2026
> **Goal:** Transform the BSEAI proposal site from a good first draft into a masterpiece — every page data-grounded, every claim sourced, every argument airtight under PhD-level scrutiny.
> **Research basis:** Files 01–10 in `docs/research/`, QA report (`project-management/qa/00-cross-cutting-issues.md`), full 43-page site review.

---

## Sprint Overview

| Sprint | Theme | Pages Touched | Est. Scope |
|--------|-------|---------------|------------|
| **0** | Research Foundation | 0 site pages | ✅ DONE — files 09 + 10 committed |
| **1** | Critical & High QA Fixes | ~15 pages | Consistency fixes across site |
| **2** | The Macro Argument (New Pages) | 3 new + 2 updated | Societal context + student profile evidence |
| **3** | The Human Story (Student-Facing) | 3 pages | Data-grounded student narrative |
| **4** | Philosophy & Vision Strengthening | 4 pages | Deepen the intellectual argument |
| **5** | Legacy Page Quality Parity | 6–8 pages | Upgrade thin/empty/stale pages |
| **6** | Syllabus Alignment | 8 syllabi + 2 design pages | Assessment, grading, terminology |
| **7** | Medium/Low QA + Polish | 8–10 pages | Remaining issues, cross-references |
| **8** | Final Verification | Full site | Build, link-check, consistency audit |

---

## Sprint 0: Research Foundation ✅ COMPLETE

**Status:** Done. Committed as `c98d340` (student profile) + societal-context research pending commit.

**Deliverables:**
- [x] `docs/research/09-student-profile.md` — Incoming student portrait (NAEP, ACT, Gen Z, design implications)
- [x] `docs/research/10-societal-context.md` — Macro-economic argument (debt, inflation, productivity, AI, government policy, capital deployment)
- [x] `docs/research/societal-context/` — 6 source research files
- [x] `docs/research/00-research-index.md` — Updated with files 09, 10, and 11 new "Key Numbers to Defend"

---

## Sprint 1: Critical & High QA Fixes

**Goal:** Fix every issue a careful reader would catch by comparing two pages. These are credibility killers.

### 1.1 — Salary Consistency (CRITICAL)

**Problem:** Five pages quote different salary ranges. A dean comparing pages catches this instantly.

**Action:** Enforce `06-salary-data.md` canonical ranges everywhere:
- Entry: **$110K–$150K**
- Mid: **$150K–$220K**
- Senior: **$180K–$350K+ TC**

**Pages to update:**
| Page | Current | Change To |
|------|---------|-----------|
| `evidence/job-market.md` | $100K–$130K entry | $110K–$150K |
| `stakeholders/for-students.md` | $100K–$150K / $150K–$250K | $110K–$150K / $150K–$220K |
| `stakeholders/for-administrators.md` | $100K–$150K / $150K–$350K | $110K–$150K / $150K–$220K mid, $180K–$350K senior |
| `philosophy/executive-summary.md` | $137K–$350K role range | Align to canonical tiers |
| `careers/example-job-descriptions.md` | $110K–$160K varies | Align per-role to canonical tiers |

### 1.2 — Catalog Numbers: 7 of 8 (CRITICAL)

**Problem:** `executive-summary.md` says "6 of 8" existing catalog numbers. It's actually 7 of 8 (IS 425 exists).

**Pages to update:**
- `philosophy/executive-summary.md` — Change to "7 of 8 courses use existing NJIT catalog numbers. Only IS 118 requires a new course proposal."
- Grep for "6 of 8" or "six of eight" across all pages and fix any other instances.

### 1.3 — 8 Capabilities → 5 HE Outcomes Bridging (CRITICAL)

**Problem:** The program markets 8 Human Edge capabilities but formally defines only 5 HE outcomes. An accreditor will ask where the other 3 went.

**Action:** Add an explicit bridging table to `program/student-outcomes.md` showing how 8 capabilities map to 5 HE outcomes. The argument: some capabilities naturally cluster. For example:
- Disciplined Inquiry + Problem Finding → HE-1 (Directed AI Orchestration — you need both to direct AI well)
- Translation + Epistemic Humility → HE-4 (Epistemic Responsibility — knowing what to communicate and what you don't know)
- Resilience Thinking + Systems Thinking → HE-5 (Adaptive Re-Tooling — systems-level resilience)
- Professional Judgment → HE-2 (Judgment Under Uncertainty)
- Accountable Leadership → HE-3 (Failure Ownership)

**Also consider:** Expanding to 8 HE outcomes (1:1 mapping). This would be cleaner for accreditation but requires updating outcomes mapping across the whole site. Decide based on ABET precedent.

### 1.4 — Demo Day Timing (HIGH)

**Problem:** "Demo Day starting Year 2" but IS 118 (Year 1 Spring) has Demo Day 15%.

**Action:** Change operating constraint to "Demo Day starting Semester 2 (IS 118)." IS 117 has "Final Presentation" (not Demo Day) — this is correct and should stay. Update:
- `curriculum/core-studio-spine.md` — "Demo Day beginning in IS 118"
- `curriculum/overview.md` — same
- `accreditation/msche-alignment.md` — same
- `accreditation/assessment-plan.md` — same

### 1.5 — METR Doubling Time (HIGH)

**Problem:** Summary pages say "3–5 months" but the data shows ~2.9 months most recently.

**Action:** Use "approximately 3 months and accelerating" in summary pages. Update:
- `philosophy/executive-summary.md`
- `program/forty-sixty-policy.md`
- Any other page using "3–5 months"

### 1.6 — Assessment Plan vs Syllabi (HIGH)

**Problem:** `assessment-plan.md` defines a standard percentage template that no syllabus follows. No syllabus includes Context Pack as a graded line.

**Action:**
- Reframe `assessment-plan.md` template as an "assessment framework" with **required components** (not percentage targets): every course must include (a) a deployed artifact, (b) a Human Edge artifact, (c) a Context Pack component, (d) studio checkoffs, (e) documentation/reflection.
- Add a note: "Individual courses adapt percentages to their learning objectives. See syllabi for course-specific breakdowns."
- Add Context Pack as a visible graded component in each syllabus (can be embedded in existing categories, e.g., "Documentation & Context Pack: 10%").

---

## Sprint 2: The Macro Argument (New Evidence Pages)

**Goal:** Add the societal-context argument to the site — the chain from national debt → inflation → productivity → AI → this program. Plus the student profile as evidence.

### 2.1 — NEW PAGE: "The Productivity Imperative" (`evidence/productivity-imperative.mdx`)

**Position:** Evidence section, between "Why Now" and "Job Market Data"

**Content structure:**
1. **The Fiscal Reality** — $38.5T debt, ~100% GDP, $1T/yr interest, CBO "unsustainable"
2. **Three Exits, Only One That Works** — Tax (regressive), Inflate (regressive), Grow (the only path that doesn't punish the working class)
3. **Why Productivity Is the Answer** — Debt arithmetic, post-WWII precedent, 1990s IT boom
4. **AI as the Productivity Tool** — Goldman (+1.4 pp/yr), McKinsey (+0.5–3.4 pp/yr), micro-evidence (MIT: 40% faster, Stanford: +30–35% for novices)
5. **The Critical Conditional** — AI productivity requires competent deployment; every major study conditions gains on adoption and training
6. **The Government Bet** — AI Action Plan (90+ actions), Education EO, Stargate, $600B+ Big Tech capex
7. **The Capital Demanding People** — $600B/yr from Big 4 alone; infrastructure without trained operators is wasted infrastructure
8. **The Connection to This Program** — BSEAI trains the professionals who make this investment productive

**Tone:** Data-dense but narrative-driven. Every paragraph has a citation. The argument is simple enough for a busy dean but rigorous enough for an economist.

**Source:** `docs/research/10-societal-context.md` (all numbers pre-verified)

### 2.2 — NEW PAGE: "Who Walks in the Door" (`evidence/student-profile.mdx`)

**Position:** Evidence section, after "Higher Ed Landscape"

**Content structure:**
1. **The National Academic Profile** — NAEP: 35% reading-proficient (lowest ever), 67% below proficient in math; ACT: 20% meeting all 4 benchmarks, 29% math-ready; ICILS: 2% digitally "proficient"
2. **The Emotional Profile** — 46% diagnosed mental health condition, 42% persistent sadness/hopelessness (YRBS), "most anxious generation in history"
3. **The Unfinished Business of K–12** — Not a character flaw; a structural inheritance from a system that measures compliance, not capability
4. **What This Means for Program Design** — Why the studio model starts with structure (IS 117) and scaffolds independence; why the Context Pack exists; why resilience is a curriculum goal not a prerequisite
5. **The Opportunity** — MIT/Stanford evidence: AI productivity gains are LARGEST for the least-experienced. These students are exactly who benefits most from AI-augmented work with proper training.

**Source:** `docs/research/09-student-profile.md`

### 2.3 — UPDATE: "Why Now" with Capital Deployment Data

**Current state:** `evidence/why-now.md` covers AI capability acceleration. 

**Add:** A new section on the scale of capital being deployed:
- $600B+ Big Tech capex in 2026 alone
- Stargate $500B target
- Government alignment (AI Action Plan, Education EO)
- "The infrastructure is being built. The question is whether we produce people who can use it."

### 2.4 — Sidebar Update

Add new pages to `astro.config.mjs`:
```javascript
{
  label: 'Evidence',
  items: [
    { label: 'Why Now', slug: 'evidence/why-now' },
    { label: 'The Productivity Imperative', slug: 'evidence/productivity-imperative' },
    { label: 'Job Market Data', slug: 'evidence/job-market' },
    { label: 'Industry Voices', slug: 'evidence/industry-voices' },
    { label: 'Higher Ed Landscape', slug: 'evidence/higher-ed-landscape' },
    { label: 'Who Walks in the Door', slug: 'evidence/student-profile' },
  ]
}
```

---

## Sprint 3: The Human Story (Student-Facing Rewrites)

**Goal:** Ground the student narrative in the actual data. Replace generic inspirational language with specificity that respects the real student.

### 3.1 — Rewrite: Student Journey Opening

**Page:** `curriculum/student-journey.md`

**Current:** Opens with "Jaylen arrives..." — a narrative character, but generic.

**Rewrite:** Ground Jaylen in the actual data:
> "Jaylen arrives at NJIT from a Newark public school where 73% of students scored below proficient on the state math assessment. He got a 19 on the ACT — above the national average for his school, but below the college-readiness benchmark of 22. He has never used a command line, never written a line of code, and never submitted anything he'd call a portfolio. He scrolls TikTok four hours a day and has a diagnostic anxiety label from his school counselor.
>
> Jaylen is not an edge case. He is the median incoming student. This program is designed for him."

Continue the journey with the same data-grounded specificity — what changes semester by semester, and why the studio model works for this student specifically.

### 3.2 — Rewrite: For Students Opening

**Page:** `stakeholders/for-students.md`

**Current:** Inspirational framing about what the program offers.

**Add honest opening:**
> "You might feel like you're not ready for this. You might look at a page full of code and think that's not for you. Here's what the data says: 80% of incoming freshmen at universities like NJIT need at least one developmental course. The average ACT math score for the class of 2024 was 19.4 — below the college-readiness benchmark. If you feel behind, it's because the system you came from wasn't designed to get you here.
>
> This program is designed for exactly where you are. Not where some admissions brochure pretends you are."

Then transition into what the program offers, with the studio scaffolding as the mechanism.

### 3.3 — Add: Student Readiness Section in For Administrators

**Page:** `stakeholders/for-administrators.md`

**Add new section: "We Know Who Walks in the Door"**

Content:
- Present the student profile data (NAEP, ACT, Gen Z characteristics)
- Argue that the studio model is an *evidence-based response* to this population
- Show that the scaffolding progression (IS 117 → 118 → 218) mirrors best practices for under-prepared students
- Connect to the productivity imperative: "These students are the workforce. If we pretend they arrive ready for traditional CS coursework, we lose them. If we meet them where they are and scaffold systematically, we produce the professionals the economy needs."
- Cite MIT/Stanford: AI tools produce largest gains for least-experienced workers

---

## Sprint 4: Philosophy & Vision Strengthening

**Goal:** Deepen the intellectual argument. Make the philosophy pages the kind of writing that impresses a PhD committee.

### 4.1 — Executive Summary: Student + Societal Context

**Page:** `philosophy/executive-summary.md`

**Add two elements:**

**A) One paragraph on the student (after the AI disruption framing):**
> "The students who will enter this program scored, on average, below the ACT college-readiness benchmark in mathematics. Thirty-five percent of their high-school cohort reads at a proficient level. Nearly half carry a diagnosed mental health condition. These are not deficiencies to be lamented — they are the design constraints of an honest curriculum. Any program that assumes students arrive ready for unsupported independent work is building on fiction. The studio model begins with the student who actually walks in the door."

**B) One paragraph connecting to the societal context (near the end):**
> "This program responds to a moment when the United States faces a $38.5 trillion national debt, when the only non-regressive path to fiscal stability is productivity growth, when AI is the only tool capable of delivering that growth at scale, and when the government has declared AI education a national priority. The BS in Enterprise AI doesn't just train good employees — it produces the human capital that makes $600 billion in annual AI infrastructure investment productive."

### 4.2 — Stripping Thesis: "The Double Stripping"

**Page:** `philosophy/stripping-thesis.md`

**Add new section after the AI stripping argument:**

**"The Double Stripping"**
> AI is stripping tasks from the human side of knowledge work. That's the thesis of this page. But there's a second stripping happening simultaneously, less discussed but equally consequential:
>
> **The K–12 system is stripping preparation from incoming students.**
>
> NAEP 12th-grade reading proficiency hit its lowest recorded level in 2024 (35%). ACT math readiness: 29%. Only 20% of the Class of 2024 met all four ACT college-readiness benchmarks. The percentage of 8th graders rated "proficient" in digital information literacy by the international ICILS assessment: 2%.
>
> AI is stripping from above (automating tasks graduates used to do). K–12 decline is stripping from below (reducing the preparation graduates arrive with). The professional is being squeezed from both directions.
>
> This program is the response to both forces. The studio model doesn't assume readiness — it builds readiness. The 8 Human Edge capabilities aren't what we hope students have; they're what we systematically develop because we know students arrive without them.
>
> The double stripping makes the program more necessary, not less. It makes the curriculum design more deliberate, not more hopeful.

### 4.3 — Program Vision: "Remediation as Evidence"

**Page:** `curriculum/overview.md`

**Expand the existing curriculum design rationale with a paragraph:**
> "Industry would call the studio model's scaffolding approach 'onboarding.' Traditional education calls it 'remediation' — a word that implies deficit. We call it *evidence-based curriculum design*. The data says 65% of high-school seniors read below proficiency. The data says 71% fall below the ACT math readiness benchmark. A curriculum designed for the student who doesn't exist isn't aspirational; it's negligent. The studio model's progressive structure — from guided discovery (IS 117) through managed complexity (IS 218) to autonomous leadership (IS 425) — reflects the actual development trajectory of the actual student."

### 4.4 — New Paradigm: Productivity Connection

**Page:** `philosophy/new-paradigm.md`

**Add a section connecting the new paradigm to the productivity imperative:**
> "The new paradigm isn't just pedagogically sound — it's economically necessary. Goldman Sachs estimates AI could boost labor productivity by 1.4–1.5 percentage points annually for a decade. But every major projection conditions those gains on 'widespread adoption' and 'complementary human capital.' The infrastructure is being built ($600B in 2026 from Big Tech alone). The government is aligned (90+ actions in the AI Action Plan, a dedicated Education EO). The missing piece is not compute — it's people who can deploy AI effectively, evaluate its output, and take accountability for the results. The new paradigm of education produces those people. The old paradigm — lecture, memorize, regurgitate — produces people whose tasks AI already performs better."

---

## Sprint 5: Legacy Page Quality Parity

**Goal:** Upgrade thin/empty/stale pages to match the quality standard of the rest of the site. A visitor shouldn't feel a quality cliff.

### 5.1 — Peer Programs Page (CRITICAL — Currently Empty Template)

**Page:** `research/peer-programs.md`

**Action:** Populate with data from `docs/research/05-peer-programs.md`:
- CMU: AI major structure, strengths, what it lacks (no studio, no Human Edge)
- Stanford: HAI approach, strengths, what it lacks
- Georgia Tech: Computing & Intelligence, strengths, gaps
- Purdue: AI major, strengths, gaps
- ASU: AI programs, strengths, gaps
- **NJIT Differentiator Table:** For each peer, show what BSEAI adds that they don't (studio model, Human Edge, portfolio, shipped artifacts every semester)

### 5.2 — Implementation Plan Modernization

**Page:** `curriculum/implementation-plan.md`

**Current:** Stale "Draft" with "what to do this week" action items.

**Rewrite as a proper implementation timeline:**
- Phase 1 (Spring 2026): Curriculum committee approval, MSCHE notification
- Phase 2 (Summer 2026): Faculty hiring/reassignment, infrastructure setup
- Phase 3 (Fall 2026): Program launch, first cohort IS 117
- Phase 4 (Spring 2027): IS 118 (new course), first Demo Day
- Key milestones, decision points, risk mitigations
- Resource requirements: faculty (how many), rooms (studio space), technology (GitHub, AI tools), industry partnerships

### 5.3 — Careers Pages Upgrade

**Pages:** `careers/job-signals-summary.md`, `careers/skills-map.md`, `careers/example-job-descriptions.md`

**Current:** Reference untracked files, somewhat thin.

**Action:**
- `job-signals-summary.md`: Integrate the latest job market signals from `02-labor-market.md` + productivity imperative data
- `skills-map.md`: Connect 8 Human Edge capabilities to specific employer-sought skills (with evidence from `08-program-design.md` skills framework)
- `example-job-descriptions.md`: Align salary ranges to `06-salary-data.md` canonical set. Add forward-deployed AI engineer roles (Palantir-style). Show how each studio maps to specific JD requirements.

### 5.4 — Course Catalog Pages Enhancement

**Pages:** `curriculum/course-catalog-current.md`, `curriculum/course-catalog-proposed.md`

**Action:** Ensure these are complete, properly formatted, and show the clear delta between current and proposed (especially highlighting IS 118 as the one new course and the Human Edge additions to existing courses).

---

## Sprint 6: Syllabus Alignment

**Goal:** Make all 8 syllabi internally consistent and aligned with the assessment plan.

### 6.1 — Context Pack Integration

**All 8 syllabi:** Add Context Pack as a visible graded component. Options:
- Separate 10% line: "Context Pack: 10%" (simplest)
- Folded into Documentation: "Documentation & Context Pack: 15%"
- The key requirement: every syllabus must *name* the Context Pack as a deliverable

### 6.2 — Demo Day Terminology

- IS 117: Keep as "Final Presentation" (not Demo Day — this is pre-Demo Day)
- IS 118–IS 425: Use "Demo Day" consistently
- Update any discrepancies

### 6.3 — Fix HIGH Issues in Individual Syllabi

From QA report:
- **IS 117** (5 issues, 2 HIGH): Check for missing Human Edge artifact requirement, prerequisite clarity
- **IS 118** (3 issues, 2 HIGH): Align Demo Day language, assessment components
- **IS 390** (2 issues, 1 HIGH): Fix studio label ("Systems Architecture" vs "Systems Analysis & Design")

### 6.4 — Assessment Plan Reframe

**Page:** `accreditation/assessment-plan.md`

Rewrite template as framework (per Sprint 1.6 description). Ensure it references the actual syllabus breakdowns rather than prescribing percentages that nothing follows.

---

## Sprint 7: Medium/Low QA Fixes + Cross-Cutting Polish

**Goal:** Clean up all remaining QA issues. Make the site bulletproof under cross-reference.

### 7.1 — IS 390 Studio Label

Pick one label. Recommendation: **"Systems Architecture"** in sidebar/headers, with "Systems Analysis & Design" as the formal course name in body text. Update all instances.

### 7.2 — Neural Fabric Explanation

Add a 2-sentence inline explanation on pages that reference it:
> "The program's capstone employs what we call the Neural Fabric architecture — a local-first AI stack combining LLMs, graph databases, vector search, and observability tooling to build mission-critical enterprise systems that run on the organization's own infrastructure."

### 7.3 — Named Individual

Remove "Keith Williams" by name from public-facing pages. Replace with "the program director" or "the lead faculty member." (Keep name in internal docs.)

### 7.4 — Homepage: All 8 Capabilities

Update `index.md` "The Thesis" section to list all 8 Human Edge capabilities (currently lists 6, missing Translation and Systems Thinking).

### 7.5 — CS 100 Prerequisite

Add CS 100 as a co-prerequisite in the course sequence diagram in `curriculum/course-sequence.md`.

### 7.6 — Other Medium/Low Issues

Work through remaining individual page QA issues from `project-management/qa/`:
- `index-homepage.md` (2 issues)
- `philosophy-acceleration-thesis.md` (3 issues)
- `program-curriculum-map.md` (2 issues)
- `program-forty-sixty-policy.md` (2 issues)
- `program-context-pack.md` (2 issues, 1 HIGH)
- `accreditation-msche-alignment.md` (2 issues)
- `evidence-job-market.md` (2 issues, 1 HIGH)
- Individual syllabus issues not covered in Sprint 6

---

## Sprint 8: Final Verification

**Goal:** Zero broken links, zero build errors, zero inconsistencies.

### 8.1 — Full Build Test
```bash
npm run build
```
Verify all 45+ pages build without errors (43 existing + 2 new).

### 8.2 — Cross-Reference Audit

Manually verify:
- All salary numbers match `06-salary-data.md`
- All capability counts say 8
- All catalog number claims say 7 of 8 existing
- All METR references use consistent language
- All Demo Day references are consistent
- No broken internal links

### 8.3 — QA Report Update

Update `project-management/qa/00-cross-cutting-issues.md`:
- Mark resolved issues
- Add QA docs for new pages
- Update page count and issue counts

### 8.4 — New Research Pages QA

Create QA documents for new pages:
- `evidence-productivity-imperative.md`
- `evidence-student-profile.md`

### 8.5 — Final Commit + Deploy

- Commit with descriptive message
- Push to main
- Verify GitHub Pages deployment
- Spot-check live site

---

## Dependencies and Ordering

```
Sprint 0 ──→ Sprint 1 ──→ Sprint 2 ──→ Sprint 3 ──→ Sprint 4
  (done)    (consistency)  (new pages)  (student)    (philosophy)
                                 │
                                 ├──→ Sprint 5 (legacy pages)
                                 │
                                 └──→ Sprint 6 (syllabi)
                                           │
                                           └──→ Sprint 7 (polish) ──→ Sprint 8 (verify)
```

- Sprint 1 must be first (consistency fixes affect what other sprints reference)
- Sprints 2–6 can be parallelized but are ordered by impact
- Sprint 7 depends on all content sprints being done
- Sprint 8 is always last

---

## New Pages Summary

| Page | Section | Slug | Type |
|------|---------|------|------|
| The Productivity Imperative | Evidence | `evidence/productivity-imperative` | NEW |
| Who Walks in the Door | Evidence | `evidence/student-profile` | NEW |

## Pages Requiring Major Rewrites

| Page | Sprint | Nature of Change |
|------|--------|-----------------|
| `curriculum/student-journey.md` | 3 | Rewrite opening with data-grounded Jaylen |
| `stakeholders/for-students.md` | 3 | Add honest opening, restructure |
| `research/peer-programs.md` | 5 | Populate from empty template |
| `curriculum/implementation-plan.md` | 5 | Full rewrite from stale draft |

## Pages Requiring Significant Additions

| Page | Sprint | What's Added |
|------|--------|-------------|
| `philosophy/executive-summary.md` | 1, 4 | Salary fix + student paragraph + societal context |
| `philosophy/stripping-thesis.md` | 4 | "The Double Stripping" section |
| `curriculum/overview.md` | 4 | "Remediation as Evidence" expansion |
| `philosophy/new-paradigm.md` | 4 | Productivity imperative connection |
| `stakeholders/for-administrators.md` | 1, 3 | Salary fix + "Who Walks in the Door" section |
| `evidence/why-now.md` | 2 | Capital deployment and government alignment data |
| `program/student-outcomes.md` | 1 | 8-capabilities → 5-HE bridging table |
| `accreditation/assessment-plan.md` | 1, 6 | Framework reframe + syllabus alignment |

## Pages Requiring Minor Fixes

~15 pages need salary number fixes, METR language updates, Demo Day timing corrections, or other consistency patches (handled in Sprints 1 and 7).

---

## Success Criteria

When all sprints are complete, the site should satisfy:

1. **Any two pages picked at random agree** on salary numbers, capability counts, catalog number claims, Demo Day timing, and METR doubling time.
2. **Every data claim has a source** traceable to the research corpus (files 01–10).
3. **The macro argument is complete:** Debt → inflation → productivity → AI → this program. A dean reads it and says "they did their homework."
4. **The student story is honest:** Grounded in NAEP/ACT data, not aspirational fiction. A faculty member reads it and says "yes, that's who I teach."
5. **The philosophy is deep:** The stripping thesis accounts for both AI stripping and K–12 decline. A PhD reviewer reads it and says "this is a serious intellectual argument."
6. **No quality cliff:** Every page, including legacy/reference pages, meets the same standard.
7. **The build is clean:** `npm run build` produces zero errors and zero broken links.
8. **The QA report shows all issues resolved.**
