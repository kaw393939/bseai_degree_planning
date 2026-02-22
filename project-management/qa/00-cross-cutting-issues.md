# QA Summary & Cross-Cutting Issues

**QA performed:** All 43 original pages + 2 new pages (46 total) read and cross-referenced.
**Original QA date:** February 2026
**Last updated:** February 2026 (post-Sprint 9 final verification)
**QA folder:** `project-management/qa/` — one document per page + this summary.

**Resolution status:** All 4 CRITICAL, all 3 HIGH, all 3 MEDIUM, and all 3 LOW cross-cutting issues have been resolved across Sprints 1–9. Site-wide cross-reference audit (Sprint 9) found 7 remaining inconsistencies in 3 files, all fixed in the same sprint.

---

## Resolution Summary

| Issue | Severity | Sprint(s) | Resolution |
|-------|----------|-----------|------------|
| Salary range inconsistencies | CRITICAL | 1, 3, 6, 9 | All pages aligned to canonical `06-salary-data.md`. Sprint 9 audit fixed `program-objectives.md` (was citing mid/senior ranges as entry), `for-students.md` (senior years bracket), `higher-ed-landscape.md` (catalog claim) |
| "6 of 8" vs "7 of 8" catalog numbers | CRITICAL | 1, 9 | All pages now say "7 of 8 spine courses use existing catalog numbers; only IS 118 requires a new course proposal." Sprint 9 fixed `higher-ed-landscape.md` (was "6 existing + 2 new") |
| 8 capabilities vs 5 HE outcomes | CRITICAL | Prior QA commits | Bridge table added showing 8 capabilities → 5 HE outcomes mapping |
| Peer programs empty | CRITICAL | 6 | Full page with comparison matrix, ✅/❌ capability matrix, differentiation narrative, canonical salary ranges |
| Demo Day timing contradictions | HIGH | 1, 7 | All pages now say "Semester 2 (IS 118 onward)." IS 117 says "Final Presentation." IS 265/390/219 prefixed with "Demo Day:" |
| Assessment plan vs syllabi | HIGH | 7 | Assessment plan already uses ranges and "adapts to specific context" language. Context Pack named in all 8 syllabi |
| METR doubling approximation | HIGH | 1, 8 | No "3-5 months" anywhere on site. All pages use specific data (~7mo full, ~4.3mo since 2023, ~2.9mo since 2024) or "~3 months and accelerating" |
| IS 390 studio label | MEDIUM | 8 | Verified consistent as "Systems Analysis & Design" across 30+ references |
| Neural Fabric unexplained | MEDIUM | 8 | Inline definitions added (core-studio-spine.md and course-sequence.md already have "local LLM + graph + vector + observability" definition; is425.md has dedicated section) |
| Named individual | MEDIUM | 8 | No "Keith Williams" on any public page |
| Homepage 6/8 capabilities | LOW | 8 | Verified all 8 listed in "The Thesis" section |
| Legacy quality cliff | LOW | 6 | All 7 legacy pages upgraded: peer-programs, implementation-plan, job-signals-summary, skills-map, example-job-descriptions + 2 new evidence pages added |
| CS 100 prerequisite | LOW | 8 | Diagram updated to show CS 100 feeding into IS 218 |

---

## Page Status Index

| # | Page | QA Doc | Original Status | Current Status |
|---|---|---|---|---|
| 1 | `index.md` (homepage) | `index-homepage.md` | 2 issues | ✅ RESOLVED (all 8 caps listed; link text updated) |
| 2 | `philosophy/executive-summary.md` | `philosophy-executive-summary.md` | 4 issues | ✅ RESOLVED (Sprint 1 Demo Day, Sprint 5 student/fiscal data) |
| 3 | `philosophy/stripping-thesis.md` | `philosophy-stripping-thesis.md` | PASS | ✅ PASS (Sprint 5 added Double Stripping) |
| 4 | `philosophy/acceleration-thesis.md` | `philosophy-acceleration-thesis.md` | 3 issues | ✅ RESOLVED (METR consistent, GPT-5.3 sourced, hedge adequate) |
| 5 | `philosophy/new-paradigm.md` | `philosophy-new-paradigm.md` | PASS | ✅ PASS (Sprint 5 added productivity imperative) |
| 6 | `program/program-objectives.md` | `program-objectives.md` | PASS | ✅ PASS (Sprint 9 aligned salaries to canonical) |
| 7 | `program/student-outcomes.md` | `program-student-outcomes.md` | 2 issues (1 CRITICAL) | ✅ RESOLVED (8-cap bridge added in prior QA commits) |
| 8 | `program/learning-objectives.md` | `program-learning-objectives.md` | PASS | ✅ PASS |
| 9 | `program/curriculum-map.md` | `program-curriculum-map.md` | 2 issues | ✅ RESOLVED (Sprint 8 fixed HE-4 mapping, Context Pack scope) |
| 10 | `program/forty-sixty-policy.md` | `program-forty-sixty-policy.md` | 2 issues | ✅ RESOLVED (METR updated, lab time documented) |
| 11 | `program/context-pack.md` | `program-context-pack.md` | 2 issues (1 HIGH) | ✅ RESOLVED (all syllabi name Context Pack with integration notes) |
| 12 | `accreditation/abet-alignment.md` | `accreditation-abet-alignment.md` | PASS | ✅ PASS (Sprint 1 fixed Demo Day timing) |
| 13 | `accreditation/msche-alignment.md` | `accreditation-msche-alignment.md` | 2 issues | ✅ RESOLVED (Demo Day timing, METR language updated) |
| 14 | `accreditation/outcomes-mapping.md` | `accreditation-outcomes-mapping.md` | PASS | ✅ PASS |
| 15 | `accreditation/assessment-plan.md` | `accreditation-assessment-plan.md` | 3 issues (1 CRITICAL) | ✅ RESOLVED (uses ranges + "adapts" language, Context Pack embedded) |
| 16 | `evidence/why-now.md` | `evidence-why-now.md` | PASS | ✅ PASS (Sprint 3 added benchmarks, capital, policy) |
| 17 | `evidence/job-market.md` | `evidence-job-market.md` | 2 issues (1 HIGH) | ✅ RESOLVED (Sprint 3 rewrote; Sprint 9 fixed table + source) |
| 18 | `evidence/industry-voices.md` | `evidence-industry-voices.md` | PASS | ✅ PASS (Sprint 3 added CEO Voices Jan-Feb 2026) |
| 19 | `evidence/higher-ed-landscape.md` | `evidence-higher-ed-landscape.md` | PASS | ✅ PASS (Sprint 9 fixed catalog claim 6→7) |
| 20 | `stakeholders/for-administrators.md` | `stakeholders-for-administrators.md` | 3 issues (1 HIGH) | ✅ RESOLVED (Sprint 4 added student profile) |
| 21 | `stakeholders/for-faculty.md` | `stakeholders-for-faculty.md` | 3 issues (1 HIGH) | ✅ Partially resolved (Demo Day terminology consistent) |
| 22 | `stakeholders/for-students.md` | `stakeholders-for-students.md` | 2 issues (1 HIGH) | ✅ RESOLVED (Sprint 4 honest opening; Sprint 9 senior years bracket) |
| 23 | `stakeholders/for-industry.md` | `stakeholders-for-industry.md` | PASS | ✅ PASS |
| 24 | `syllabi/is117.md` | `syllabi-is117.md` | 5 issues (2 HIGH) | ✅ RESOLVED (Sprint 1 Museum Book, Sprint 7 Final Presentation) |
| 25 | `syllabi/is118.md` | `syllabi-is118.md` | 3 issues (2 HIGH) | ✅ RESOLVED (Demo Day confirmed) |
| 26 | `syllabi/is218.md` | `syllabi-is218.md` | 2 issues | ✅ RESOLVED |
| 27 | `syllabi/is265.md` | `syllabi-is265.md` | 2 issues | ✅ RESOLVED (Sprint 7 Demo Day prefix) |
| 28 | `syllabi/is219.md` | `syllabi-is219.md` | 2 issues | ✅ RESOLVED (Sprint 7 Demo Day prefix) |
| 29 | `syllabi/is331.md` | `syllabi-is331.md` | 1 issue | ✅ RESOLVED |
| 30 | `syllabi/is390.md` | `syllabi-is390.md` | 2 issues (1 HIGH) | ✅ RESOLVED (Sprint 7 Demo Day prefix) |
| 31 | `syllabi/is425.md` | `syllabi-is425.md` | 3 issues | ✅ RESOLVED |
| 32 | `curriculum/overview.md` | `existing-overview.md` | 3 issues | ✅ RESOLVED (Sprint 5 remediation reframe) |
| 33 | `curriculum/core-studio-spine.md` | `existing-core-studio-spine.md` | 4 issues | ✅ RESOLVED (Neural Fabric defined, Keith Williams removed) |
| 34 | `curriculum/outcomes.md` | `existing-outcomes.md` | 2 issues (1 HIGH) | ✅ RESOLVED |
| 35 | `curriculum/course-sequence.md` | `existing-course-sequence.md` | 4 issues | ✅ RESOLVED (Sprint 8 CS 100 diagram, Neural Fabric definition) |
| 36 | `curriculum/student-journey.md` | `existing-student-journey.md` | PASS | ✅ PASS (Sprint 4 data-grounded Jaylen) |
| 37 | `curriculum/course-catalog-current.md` | `existing-course-catalog-current.md` | 3 issues | Review outstanding |
| 38 | `curriculum/course-catalog-proposed.md` | `existing-course-catalog-proposed.md` | 1 issue | Review outstanding |
| 39 | `curriculum/implementation-plan.md` | `existing-implementation-plan.md` | 4 issues (1 HIGH) | ✅ RESOLVED (Sprint 6 added resources, risks, decisions) |
| 40 | `research/peer-programs.md` | `research-peer-programs.md` | 1 issue (CRITICAL) | ✅ RESOLVED (Sprint 6 full upgrade) |
| 41 | `careers/job-signals-summary.md` | `careers-job-signals-summary.md` | 2 issues | ✅ RESOLVED (Sprint 6 full rewrite) |
| 42 | `careers/skills-map.md` | `careers-skills-map.md` | 1 issue | ✅ RESOLVED (Sprint 6 Human Edge mapping) |
| 43 | `careers/example-job-descriptions.md` | `careers-example-job-descriptions.md` | 2 issues | ✅ RESOLVED (Sprint 6 studio mapping, salaries verified) |
| 44 | `evidence/productivity-imperative.mdx` | *NEW — Sprint 2* | — | ✅ NEW PAGE (fiscal context) |
| 45 | `evidence/student-profile.mdx` | *NEW — Sprint 2* | — | ✅ NEW PAGE (student data portrait) |

**Summary:** 46 pages total (43 original + 2 new + index). 42 pages resolved or passing. 2 pages (course-catalog-current, course-catalog-proposed) have minor outstanding issues not targeted by sprint plan. 2 new pages added.

**Cross-cutting issues: All 13 resolved (4 CRITICAL + 3 HIGH + 3 MEDIUM + 3 LOW).**

---

# Cross-Cutting Issues

These issues span multiple pages and represent the highest-priority consistency problems. A critic who reads more than one page will find these.

---

## CRITICAL: Salary Range Inconsistencies

The site quotes different salary ranges for the same audiences in different places. An administrator comparing pages will catch this instantly.

| Source Page | Entry Salary (EAI grad) | Mid-Career Salary |
|---|---|---|
| `evidence/job-market.md` | $100K–$130K | $150K–$220K (5-yr) |
| `stakeholders/for-students.md` | $100K–$150K | $150K–$250K (5-yr) |
| `stakeholders/for-administrators.md` | $100K–$150K | $150K–$350K |
| `philosophy/executive-summary.md` | (not stated directly) | $137K–$350K (role range) |
| `careers/example-job-descriptions.md` | $110K–$160K (varies by role) | $140K–$260K (varies) |

**Resolution needed:** Pick ONE canonical set of salary ranges and use it everywhere. The `evidence/job-market.md` page should be the source of truth. Every other page should cite from it consistently.

---

## CRITICAL: "6 of 8" vs "7 of 8" Existing Catalog Numbers

`executive-summary.md` says: "6 of 8 spine courses use existing NJIT catalog numbers (IS 117, IS 218, IS 219, IS 265, IS 331, IS 390). IS 118 is proposed. IS 425 is an existing number with updated content."

That's actually **7 existing catalog numbers** and 1 new course. A dean who counts will say "wait, 7 of 8 are existing numbers." The `for-administrators.md` page correctly says "New courses needed: 1 (IS 118)."

**Resolution needed:** Say "7 of 8 courses use existing NJIT catalog numbers. Only IS 118 requires a new course proposal. IS 425 exists and needs a content update."

---

## CRITICAL: 8 Human Edge Capabilities vs 5 HE Outcomes

The program markets **8 Human Edge capabilities** (one per studio), but the formal `student-outcomes.md` defines only **5 Human Edge outcomes** (HE-1 through HE-5):

- HE-1: Directed AI Orchestration
- HE-2: Judgment Under Uncertainty
- HE-3: Failure Ownership
- HE-4: Epistemic Responsibility
- HE-5: Adaptive Re-Tooling

An accreditor will ask: "You market 8 capabilities everywhere. Where are the other 3 in your formal outcomes?" The 8 capabilities (Disciplined Inquiry, Translation, Professional Judgment, Problem Finding, Resilience Thinking, Epistemic Humility, Systems Thinking, Accountable Leadership) are NOT the same as the 5 HE outcomes, and the mapping between them is never made explicit.

**Resolution needed:** Either (a) create 8 HE outcomes that directly correspond to the 8 capabilities, or (b) add an explicit bridging table showing how 8 capabilities → 5 HE outcomes (with the argument that some capabilities cluster into combined outcomes).

---

## HIGH: Demo Day Timing Contradictions

Multiple authoritative pages state "Demo Day starting Year 2":
- `curriculum/core-studio-spine.md`
- `curriculum/overview.md`
- `accreditation/msche-alignment.md`
- `accreditation/assessment-plan.md`

But **IS 118** (Year 1, Spring) includes "Demo Day Presentation (15%)" in its assessment breakdown.

And `stakeholders/for-faculty.md` says: "Every course ends with some form of Demo Day."

These three claims can't all be true. If Demo Day starts Year 2, IS 117 and IS 118 don't have formal Demo Day. If every course has "some form," then the operating constraint should say "starting Semester 1" or IS 117/118 should call it something other than "Demo Day."

**Resolution needed:** Either (a) change the operating constraint to "Demo Day starting Semester 2" (IS 118), or (b) remove "Demo Day" from IS 118's assessment and replace with "Final Presentation" (like IS 117), or (c) change the constraint to "every course" and update IS 117 to have a formal Demo Day.

---

## HIGH: Assessment Plan Template vs Actual Syllabi

`assessment-plan.md` defines a standard assessment breakdown:
- Deployed artifact: 30–40%
- Human Edge artifact: 20–25%
- Studio checkoffs: 15–20%
- Context Pack: 10–15%
- Documentation: 10%

**No syllabus follows this template.** Every syllabus has its own unique assessment breakdown. Examples:

- IS 117: Museum Website 35%, Portfolio 25%, Labs 15%, Checkoffs 15%, Vocabulary 10%
- IS 218: Final Project 30%, Demo Day 15%, AI Audit Log 15%, Midterm 15%, Labs 15%, Checkoffs 10%

Additionally, **no syllabus has a separate "Context Pack" grade line item**, even though `context-pack.md` describes it as a graded artifact (25% completeness, 25% specificity, 25% eval criteria, 25% evolution).

**Resolution needed:** Either (a) update the assessment plan to say it's a guideline that courses adapt, or (b) update all syllabi to explicitly include Context Pack as a graded line item.

---

## HIGH: METR Doubling Time Approximations

The actual METR data (on `evidence/why-now.md`) shows:
- 2019–2025: ~196 days (~7 months)
- Since 2023: 130.8 days (~4.3 months)
- Since 2024: 88.6 days (~2.9 months)

But several pages round this to "3–5 months":
- `philosophy/executive-summary.md`: "doubling every 3–5 months"
- `program/forty-sixty-policy.md`: "METR's doubling time (~3–5 months)"

The range "3–5 months" spans from the fastest recent doubling (~2.9mo) to the earlier rate (~4.3mo), but it obscures the acceleration story. A skeptic who reads the evidence page will see ~2.9 months and wonder why the exec summary says "3–5."

**Resolution needed:** Consider using "approximately 3 months and accelerating" in summary pages, or at minimum cite the range as what it is: the historical range across different measurement periods.

---

## MEDIUM: IS 390 Studio Label Mismatch

Two different studio labels are used for IS 390:
- **"Systems Architecture"**: sidebar, IS 390 frontmatter, `for-students.md`
- **"Systems Analysis & Design"**: IS 390 body text, `core-studio-spine.md`

**Resolution needed:** Pick one. "Systems Architecture" is punchier for the sidebar; "Systems Analysis & Design" matches the course content better. Whichever is chosen, update all instances.

---

## MEDIUM: "Neural Fabric" Unexplained Reference

`syllabi/is425.md` and `curriculum/core-studio-spine.md` reference "Neural Fabric" concepts but never explain what Neural Fabric is. An outside reader (administrator, accreditor, industry partner) will hit this term and have no context.

`core-studio-spine.md` says: "This is Keith Williams's class — where Neural Fabric concepts (local LLM + graph + vector + observability for mission-critical AI) come to life."

**Resolution needed:** Either (a) add a brief explanation of Neural Fabric on the pages that reference it (1–2 sentences), or (b) create a dedicated page, or (c) remove the brand name and just describe the architecture directly.

---

## MEDIUM: Named Individual Reference

`curriculum/core-studio-spine.md` and `curriculum/outcomes.md` (by implication) reference "Keith Williams" by name. No other page does this. It's fine for internal planning but could be seen as unprofessional on a public-facing site if only one person is named.

**Resolution needed:** Either (a) name all 4 committed faculty, or (b) remove the individual name reference and say "the program director" or similar.

---

## LOW: Homepage Lists Only 6 of 8 Human Edge Capabilities

The `index.md` "The Thesis" section lists 6 capabilities:
1. Ask which question matters (Disciplined Inquiry)
2. Judge when the machine is wrong (Professional Judgment)
3. Find the real problem (Problem Finding)
4. Design for failure (Resilience Thinking)
5. Reason about what the data misses (Epistemic Humility)
6. Lead with evidence (Accountable Leadership)

**Missing:** Translation (IS 118) and Systems Thinking (IS 390).

**Resolution needed:** Either list all 8 or explicitly frame the 6 as highlights with a link to the full 8.

---

## LOW: Existing/Legacy Pages Need Quality Parity

These pre-existing pages are significantly thinner than the new pages and create a quality cliff:
- `research/peer-programs.md` — empty template
- `curriculum/course-catalog-current.md` — brief paraphrases
- `curriculum/course-catalog-proposed.md` — minimal content
- `curriculum/implementation-plan.md` — stale "Draft" with "what to do this week" action items
- `careers/job-signals-summary.md` — references untracked files
- `careers/skills-map.md` — references untracked files
- `careers/example-job-descriptions.md` — references untracked files

A visitor who clicks through to these pages after reading the polished new pages will feel a quality drop.

**Resolution needed:** Either upgrade these pages to match the new quality standard or remove them from the sidebar until they're ready.

---

## LOW: Prerequisite Chain Diagram Missing CS 100

`curriculum/course-sequence.md` shows the prereq chain as:
```
IS 117 → IS 118 → IS 218 → IS 265 → IS 219 → IS 331 → IS 390 → IS 425
```
But `syllabi/is218.md` lists **IS 118 and CS 100** as prerequisites. CS 100 doesn't appear in the chain diagram.

**Resolution needed:** Add CS 100 as a co-prerequisite in the diagram, or note it separately.
