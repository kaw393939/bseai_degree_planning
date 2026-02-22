# BSEAI Site Improvement Sprint Plan

> **Version:** 2.0 (granular task breakdown)
> **Updated:** February 21, 2026
> **Goal:** Transform the BSEAI proposal site into a masterpiece — every page data-grounded, every claim sourced, every argument airtight under PhD-level scrutiny.
> **Research basis:** Files 01–10 in `docs/research/`, 16 fresh source files in subdirectories (benchmarks/, labor-market/, economic-impact/, enterprise-adoption/, models/, industry-commentary/, peer-programs/), QA report, full 43-page site review.

---

## Sprint Map

| Sprint | Theme | Tasks | Commit Gate |
|--------|-------|-------|-------------|
| **0** | Research Foundation | ✅ DONE | `c98d340`, `281c7c3` |
| **0b** | Research Refresh | 4 tasks | Commit + push |
| **1** | Critical Consistency Fixes | 6 tasks | Commit + push + build |
| **2** | New Evidence Pages | 4 tasks | Commit + push + build |
| **3** | Evidence & Data Refresh | 4 tasks | Commit + push + build |
| **4** | Student-Facing Rewrites | 3 tasks | Commit + push + build |
| **5** | Philosophy Deepening | 4 tasks | Commit + push + build |
| **6** | Legacy Page Upgrades | 6 tasks | Commit + push + build |
| **7** | Syllabus Alignment | 4 tasks | Commit + push + build |
| **8** | Medium/Low QA Polish | 6 tasks | Commit + push + build |
| **9** | Final Verification | 4 tasks | Final push + deploy |

**Total: ~45 atomic tasks across 11 sprints.**

---

## Sprint 0: Research Foundation ✅ DONE

Commits: `c98d340` (student profile), `281c7c3` (societal context + sprint plan v1)

- [x] `09-student-profile.md` compiled from 2 source files
- [x] `10-societal-context.md` compiled from 6 source files
- [x] `00-research-index.md` updated with files 09–10 + key numbers

---

## Sprint 0b: Research Refresh (Commit the New Data)

**Goal:** Commit the 16 new research source files and update the master research files (01–05) with current 2026 data. Every downstream sprint depends on accurate numbers here.

### Task 0b-1: Commit raw research files
- `git add` all 7 subdirectories (benchmarks/, labor-market/, economic-impact/, enterprise-adoption/, models/, industry-commentary/, peer-programs/)
- Commit with descriptive message
- **Done when:** `git status` shows clean

### Task 0b-2: Refresh `01-ai-capability-trajectory.md`
- Integrate data from: `benchmarks/swe-bench.md`, `benchmarks/reasoning-mmlu-gpqa.md`, `benchmarks/humanitys-last-exam.md`, `benchmarks/math-competition.md`, `benchmarks/autonomous-agents-rebench-gaia.md`, `benchmarks/benchmark-saturation-timeline.md`, `models/claude-4.5-4.6-benchmarks.md`, `models/gpt5-series-benchmarks.md`
- Key updates: SWE-bench now ~81% (Opus 4.6), GPQA-Diamond frontier ~85–91%, HLE best model 37.5% (Gemini 3 Pro), AIME o4-mini 99.5%, METR TH1.1 89-day doubling, benchmark saturation timeline (MMLU 4yr → GPQA 2yr → SWE-bench 18mo)
- **Done when:** File contains all current benchmark data with sourced citations

### Task 0b-3: Refresh `02-labor-market.md`
- Integrate: `labor-market/cs-unemployment.md`, `labor-market/njit-regional-market.md`
- Key updates: CS recent-grad unemployment 6.1% (NY Fed 2023 data), BLS computer-math 3.6% (Jan 2026), programmer jobs down >25% in 2 years, postings at multi-year low, ~25K tech layoffs Jan 2026, BUT BLS projects software devs +15.8% through 2034. NYC #1 metro for AI postings, NJ AI Hub launched 2025, CoreWeave HQ in Livingston
- **Done when:** File has current labor stats + NJIT regional section

### Task 0b-4: Refresh `03-economic-impact-enterprise.md` + `04-industry-voices.md` + `05-peer-programs.md`
- `03`: Integrate `economic-impact/ai-labor-displacement.md`, `enterprise-adoption/enterprise-ai-adoption.md`, `enterprise-adoption/ai-investment-trends.md`
  - Key: McKinsey 30% of hours by 2030, Goldman 25% of labor tasks, IMF 60% in advanced economies. Gartner 29% deployed GenAI (2024), only 48% of AI projects reach production. $225.8B private AI investment 2025
- `04`: Integrate `industry-commentary/ceo-statements-2026.md`
  - Key: Amodei Davos Jan 2026 "6–12 months from full SE automation", Altman Feb 2026 "real displacement palpable in next few years", Huang "largest infrastructure buildout in human history", Pichai "people who learn the tools will do better"
- `05`: Integrate `peer-programs/peer-program-comparison.md`
  - Key: CMU standalone BS AI (2018), Stanford AI track in CS, GT Intelligence thread, Purdue standalone BS AI + university-wide AI competency Fall 2026, ASU AI in Business
- **Done when:** All three files updated with 2026 data and sourced citations

---

## Sprint 1: Critical Consistency Fixes

**Goal:** Fix every inconsistency a cross-reading dean would catch. These are credibility killers.

### Task 1-1: Salary range alignment
- Read `06-salary-data.md` for canonical numbers: Entry $110K–$150K, Mid $150K–$220K, Senior $180K–$350K+ TC
- Grep site for all salary mentions: `\$1[0-5][0-9]K`, `salary`, `compensation`
- Fix each page to match canonical ranges
- **Pages:** `evidence/job-market.md`, `stakeholders/for-students.md`, `stakeholders/for-administrators.md`, `philosophy/executive-summary.md`, `careers/example-job-descriptions.md`
- **Done when:** Every salary reference matches `06-salary-data.md`

### Task 1-2: Fix "6 of 8" → "7 of 8" catalog numbers
- Grep for "6 of 8", "six of eight", "6 of the 8" across all .md/.mdx files
- Change to "7 of 8 courses use existing NJIT catalog numbers. Only IS 118 requires a new course proposal."
- **Done when:** Zero grep hits for incorrect count

### Task 1-3: Add 8-capabilities → 5-HE bridging table
- Read `program/student-outcomes.md` current content
- Add explicit mapping table: 8 capabilities → 5 HE outcomes with rationale for clustering
- Add 1-paragraph explanation of why 8 capabilities map to 5 assessable outcomes
- **Done when:** `student-outcomes.md` has the bridging table

### Task 1-4: Fix Demo Day timing language
- Grep for "Year 2" or "starting Year 2" in context of Demo Day
- Change to "beginning in IS 118 (Semester 2)" across: `core-studio-spine.md`, `overview.md`, `msche-alignment.md`, `assessment-plan.md`
- Verify IS 117 says "Final Presentation" (not Demo Day) and IS 118+ say "Demo Day"
- **Done when:** Demo Day language is consistent

### Task 1-5: Fix METR doubling time
- Grep for "3–5 months", "3-5 months", "three to five"
- Replace with "approximately 3 months and accelerating" (since 2024: 89 days per METR TH1.1)
- **Pages likely:** `executive-summary.md`, `forty-sixty-policy.md`
- **Done when:** Consistent METR language site-wide

### Task 1-6: Commit + build + push
- `git add -A && git commit`
- `npm run build` — verify zero errors
- `git push`
- **Done when:** Clean build, pushed to origin

---

## Sprint 2: New Evidence Pages

**Goal:** Create the two highest-impact new pages and register them in the sidebar.

### Task 2-1: Create "The Productivity Imperative" page
- File: `src/content/docs/evidence/productivity-imperative.mdx`
- Source: `docs/research/10-societal-context.md`
- Sections: (1) Fiscal Reality ($38.5T debt, $1T/yr interest), (2) Three Exits (tax/inflate/grow), (3) Productivity Is the Answer (debt arithmetic, post-WWII), (4) AI as the Tool (Goldman +1.4pp, McKinsey +0.5–3.4pp, MIT 40% faster), (5) The Conditional (requires trained people), (6) Government Bet (90+ actions, Education EO), (7) Capital Demanding People ($600B), (8) Connection to Program
- **Done when:** Page builds without errors, every data point has inline citation

### Task 2-2: Create "Who Walks in the Door" page
- File: `src/content/docs/evidence/student-profile.mdx`
- Source: `docs/research/09-student-profile.md`
- Sections: (1) Academic Profile (NAEP/ACT), (2) Emotional Profile (mental health), (3) K-12's Unfinished Business, (4) Design Implications (studio scaffolding), (5) The Opportunity (MIT/Stanford: AI helps novices most)
- **Done when:** Page builds, all stats sourced

### Task 2-3: Update sidebar in `astro.config.mjs`
- Add `productivity-imperative` and `student-profile` to Evidence section
- **Done when:** Both pages appear in navigation

### Task 2-4: Commit + build + push
- Commit new pages + config change
- `npm run build` — verify 45+ pages build
- Push
- **Done when:** Clean build, new pages live

---

## Sprint 3: Evidence & Data Refresh

**Goal:** Update existing evidence pages with the freshest 2026 data from the new research files.

### Task 3-1: Refresh "Why Now" with benchmark saturation + capital data
- Read current `evidence/why-now.md`
- Add: Benchmark saturation timeline (MMLU→GPQA→SWE-bench shrinking), $600B+ Big Tech capex 2026, Stargate $500B, government AI Action Plan
- Update any stale benchmark numbers with current data
- **Done when:** Why Now has saturation story + infrastructure story

### Task 3-2: Refresh "Industry Voices" with Jan/Feb 2026 quotes
- Read current `evidence/industry-voices.md`
- Add/update: Amodei (Davos Jan 2026: "6–12 months"), Altman (Feb 2026: "real displacement"), Huang (Davos Jan 2026: "largest infrastructure buildout"), Pichai (Dec 2025: "learn the tools")
- Each quote: exact words, date, source URL
- **Done when:** All CEO quotes are current to Jan/Feb 2026

### Task 3-3: Refresh "Job Market" with paradox framing + regional data
- Read current `evidence/job-market.md`
- Add: Programmer jobs down >25%, postings at multi-year low, BUT BLS +15.8% for devs through 2034 — frame as "the wrong jobs are dying, the right jobs are growing"
- Add NJIT regional section: NYC #1 AI metro, NJ AI Hub, CoreWeave in Livingston, BLS $134K avg for metro
- **Done when:** Job market page has paradox story + regional NJIT angle

### Task 3-4: Commit + build + push
- **Done when:** Clean build, pushed

---

## Sprint 4: Student-Facing Rewrites

**Goal:** Ground the student narrative in real data. Replace generic inspiration with honest specificity.

### Task 4-1: Rewrite Student Journey opening
- Read current `curriculum/student-journey.md`
- Rewrite Jaylen intro with data-grounded specifics (ACT 19, Newark math proficiency, no code experience, diagnostic anxiety label)
- Add: "Jaylen is not an edge case. He is the median incoming student."
- Continue journey with semester-by-semester specificity
- **Done when:** Opening paragraph uses real data, rest of journey is data-informed

### Task 4-2: Add honest opening to For Students
- Read current `stakeholders/for-students.md`
- Add opening section: "You might feel like you're not ready..." with ACT/NAEP data
- Frame the program as designed for where students actually are
- Transition smoothly into existing content
- **Done when:** Page opens with honesty, then delivers the program pitch

### Task 4-3: Add "We Know Who Walks in the Door" to For Administrators
- Read current `stakeholders/for-administrators.md`
- Add new section with student profile data (NAEP, ACT, Gen Z characteristics)
- Argument: studio model is evidence-based response to this population
- Include MIT/Stanford evidence (AI helps novices most)
- Add NJIT regional market data (NYC #1 AI metro, NJ AI Hub)
- **Done when:** Section present with data and argument

### Task 4-4: Commit + build + push
- **Done when:** Clean build, pushed

---

## Sprint 5: Philosophy Deepening

**Goal:** Make the philosophy pages PhD-committee caliber. Add the macro-economic and student-profile evidence.

### Task 5-1: Add student + societal paragraphs to Executive Summary
- Read current `philosophy/executive-summary.md`
- Add after AI disruption framing: 1 paragraph on the actual student (ACT, NAEP, mental health)
- Add near end: 1 paragraph on societal context ($38.5T debt, productivity imperative, $600B capex, AI education as national priority)
- **Done when:** Both paragraphs added, tone matches existing page

### Task 5-2: Add "The Double Stripping" to Stripping Thesis
- Read current `philosophy/stripping-thesis.md`
- Add new section: AI strips from above (tasks), K-12 strips from below (preparation)
- Include: NAEP 35%, ACT 29% math, ICILS 2%, "squeezed from both directions"
- Conclude: program responds to both forces
- **Done when:** Section present, data sourced

### Task 5-3: Add "Remediation as Evidence" to Program Vision
- Read current `curriculum/overview.md`
- Add paragraph reframing scaffolding as evidence-based design, not remediation
- Include data: 65% read below proficiency, 71% below math readiness
- **Done when:** Paragraph added

### Task 5-4: Add productivity connection to New Paradigm
- Read current `philosophy/new-paradigm.md`
- Add section: Goldman productivity estimates, $600B capex, AI Action Plan, "missing piece is people"
- **Done when:** Section added with sourced data

### Task 5-5: Commit + build + push
- **Done when:** Clean build, pushed

---

## Sprint 6: Legacy Page Upgrades

**Goal:** Eliminate the quality cliff. Thin/empty/stale pages get brought to par.

### Task 6-1: Populate Peer Programs page (CRITICAL)
- Read current `research/peer-programs.md` (empty template)
- Write full page using `docs/research/05-peer-programs.md` + `peer-programs/peer-program-comparison.md`
- Include: CMU, Stanford, GT, Purdue, ASU — degree type, curriculum shape, distinctives
- Add differentiator table showing what BSEAI has that none of them do (studio spine, Human Edge, shipped artifacts, portfolio, enterprise deployment focus, AI Audit Log)
- **Done when:** No longer an empty template; full comparison with differentiation

### Task 6-2: Rewrite Implementation Plan
- Read current `curriculum/implementation-plan.md` (stale draft)
- Rewrite as proper timeline: Phase 1 (Spring 2026: approval), Phase 2 (Summer 2026: infrastructure), Phase 3 (Fall 2026: launch), Phase 4 (Spring 2027: IS 118 + Demo Day)
- Include resource requirements, risk mitigations, decision points
- **Done when:** Professional implementation timeline, not a to-do list

### Task 6-3: Upgrade Job Signals Summary
- Read current `careers/job-signals-summary.md`
- Integrate: labor market paradox (coding jobs down, deployment jobs up), $225.8B investment 2025, BLS +15.8% software devs, deployment gap (only 48% of AI projects reach production)
- **Done when:** Page makes a coherent market-signal argument

### Task 6-4: Upgrade Skills Map
- Read current `careers/skills-map.md`
- Map 8 Human Edge capabilities → specific employer-sought skills with evidence
- Reference skills framework from `08-program-design.md`
- **Done when:** Each capability has 2-3 mapped employer skills

### Task 6-5: Upgrade Example Job Descriptions
- Read current `careers/example-job-descriptions.md`
- Align all salary ranges to `06-salary-data.md` canonical set
- Add forward-deployed AI engineer roles
- Show which studios map to which JD requirements
- **Done when:** Salaries match canonical, studio mapping present

### Task 6-6: Commit + build + push
- **Done when:** Clean build, pushed

---

## Sprint 7: Syllabus Alignment

**Goal:** All 8 syllabi consistent with each other and with the assessment plan.

### Task 7-1: Add Context Pack as graded component to all 8 syllabi
- Read each syllabus assessment breakdown
- Add "Context Pack" as a named deliverable (either own line at 10% or folded into Documentation)
- Ensure consistent approach across all 8
- **Done when:** Every syllabus names Context Pack as a graded component

### Task 7-2: Fix Demo Day terminology in syllabi
- IS 117: verify says "Final Presentation" (not Demo Day)
- IS 118 through IS 425: verify all say "Demo Day" consistently
- Fix any discrepancies
- **Done when:** Terminology consistent across all 8

### Task 7-3: Reframe Assessment Plan as framework
- Read current `accreditation/assessment-plan.md`
- Change from prescriptive percentages to required component categories
- Add note: "Individual courses adapt percentages to their learning objectives"
- Reference actual syllabus breakdowns
- **Done when:** Assessment plan describes a framework, not a template

### Task 7-4: Commit + build + push
- **Done when:** Clean build, pushed

---

## Sprint 8: Medium/Low QA Polish

**Goal:** Clear all remaining QA issues. Bulletproof under cross-reference.

### Task 8-1: Fix IS 390 studio label
- Pick "Systems Architecture" for headers/sidebar, "Systems Analysis & Design" as formal course name
- Grep and update all instances
- **Done when:** Consistent across site

### Task 8-2: Add Neural Fabric explanation
- Add 2-sentence inline definition on pages referencing it (IS 425, core-studio-spine)
- **Done when:** No unexplained jargon

### Task 8-3: Remove named individual from public pages
- Replace "Keith Williams" with "the program director" on public-facing pages
- Keep in internal docs
- **Done when:** No personal names on public pages

### Task 8-4: Fix homepage — list all 8 capabilities
- Read current `index.md`
- Add missing Translation and Systems Thinking to The Thesis section
- **Done when:** All 8 listed

### Task 8-5: Fix CS 100 prerequisite in course sequence
- Add CS 100 as co-prerequisite in `curriculum/course-sequence.md` diagram
- **Done when:** Diagram shows CS 100

### Task 8-6: Clear remaining individual page QA issues
- Work through: `index-homepage.md`, `philosophy-acceleration-thesis.md`, `program-curriculum-map.md`, `program-forty-sixty-policy.md`, `program-context-pack.md`, `accreditation-msche-alignment.md`, `evidence-job-market.md`
- Read each QA file, apply fixes
- **Done when:** All QA issues addressed

### Task 8-7: Commit + build + push
- **Done when:** Clean build, pushed

---

## Sprint 9: Final Verification

**Goal:** Zero errors. Ship-quality site.

### Task 9-1: Full build test
- `npm run build`
- Verify all 45+ pages build without errors
- **Done when:** Build succeeds with zero warnings

### Task 9-2: Cross-reference audit
- Grep-verify: all salaries match canonical, all capability counts = 8, all catalog claims = 7 of 8, METR language consistent, Demo Day language consistent
- Check for broken internal links
- **Done when:** All spot-checks pass

### Task 9-3: Update QA report
- Update `project-management/qa/00-cross-cutting-issues.md`
- Mark all resolved issues
- Add QA notes for 2 new pages
- Update page count and issue summary
- **Done when:** QA report reflects current state

### Task 9-4: Final commit + push + verify deploy
- Commit any final changes
- Push to main
- Verify GitHub Pages deployment at https://kaw393939.github.io/bseai_degree_planning
- Spot-check 5 pages on live site
- **Done when:** Live site reflects all changes

---

## Execution Rules

1. **One task at a time.** Mark in-progress, complete it, mark done, move on.
2. **Commit at every sprint gate.** Never carry uncommitted changes across sprints.
3. **Build at every sprint gate.** If it doesn't build, fix it before moving on.
4. **Read before writing.** Every task starts by reading the current page content.
5. **Cite from research files.** Never invent a number — pull from docs/research/.
6. **Use canonical numbers.** Salary from 06, capabilities = 8, courses = 8, catalog existing = 7 of 8.

## Success Criteria

1. Any two random pages agree on salary, capability count, catalog numbers, Demo Day timing, METR rate
2. Every data claim traces to a research file with source + date + URL
3. The macro argument is complete: debt → inflation → productivity → AI → this program
4. The student story is honest: data-grounded, not aspirational fiction
5. The philosophy is deep enough to impress a PhD committee
6. No quality cliff between polished and legacy pages
7. `npm run build` = zero errors
8. QA report shows all issues resolved
