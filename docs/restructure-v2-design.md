# Restructure v2: Final Program Design

> This document captures all decisions made on 2026-02-21 regarding the
> spine restructure, Center for Enterprise AI, and site tone shift.
> Use as the single reference when updating all site pages.

---

## Status: APPROVED & LAUNCHING

- The BS in Enterprise AI has been **approved by NJIT**.
- **Fall 2026** is the inaugural semester.
- Half the Honors College class is enrolled for the first cohort.
- The Dean has informally committed to fundraising for community training.
- Site tone: **declarative, confident, present tense**. Not "we propose" — "we do."

---

## People

| Role | Person | Notes |
|------|--------|-------|
| Program Founder & Director | **Keith Williams** | 25-year NJIT Senior University Lecturer, SME and visionary |
| Center Director | Keith Williams | Center for Enterprise AI, Dept. of Informatics |
| IS Degree Director | Partner (co-lead) | 25-year NJIT professor, IS degree director |
| Hosting Department | Department of Informatics | Ying Wu College of Computing |

---

## New 8-Course Studio Spine

| Sem | Year | Course | Title | Content Source | Human Edge | Catalog Status |
|-----|------|--------|-------|---------------|------------|---------------|
| 1 | Fresh Fall | IS 117 | Web Development & Inquiry | Same | Disciplined Inquiry | Exists, modified |
| 2 | Fresh Spring | IS 118 | Full-Stack Web Applications | Adapted from old IS 218 | Professional Judgment | **NEW** |
| 3 | Soph Fall | IS 218 | Infrastructure & Resilience | Adapted from old IS 219 | Resilience Thinking | Exists, major revision |
| 4 | Soph Spring | IS 265 | Enterprise AI Capstone (Midpoint) | **New design** | Problem Finding | Exists, major revision |
| 5 | Junior Fall | IS 331 | Data & Knowledge | Same | Epistemic Humility | Exists, modified |
| 6 | Junior Spring | IS 390 | Systems Analysis & Design | Same | Systems Thinking | Exists, modified |
| 7 | Senior Fall | IS 425 | Applied AI Systems + Demo Day | Same | Accountable Leadership | Exists, modified |
| 8 | Senior Spring | IS 4XX | Service Learning: Community AI Training | **New design** | Translation | **NEW** |

### Key changes from prior spine (117→118→218→265→219→331→390→425):

1. **IS 218 content → IS 118.** The full-stack web app engineering course moves to
   freshman spring as IS 118 (new catalog number). Scoped for Semester 2 students
   with AI-assisted development (40/60 model). Human Edge = Professional Judgment
   (judging AI-generated code, deciding whether to ship).

2. **IS 219 content → IS 218.** Infrastructure & resilience moves to sophomore fall
   under the IS 218 catalog number (major revision, not new course). Human Edge =
   Resilience Thinking. IS 219 is simply unused — no administrative action needed.

3. **IS 265 redesigned** as midpoint capstone. Internship-ready by end of sophomore
   spring. Enterprise AI domain knowledge + problem analysis + working prototype +
   pitch. Human Edge = Problem Finding. Informed by is265_sucks.txt enterprise
   systems content but much more hands-on. Assessment includes Demo Day.

4. **IS 4XX (new)** fills Senior Spring (Semester 8). Service learning course:
   students organize and run a public Newark community AI training event.
   Human Edge = Translation (teaching = the ultimate translation exercise).
   Annual event, once per year. Separate from IS 425 Demo Day.

5. **IS 219 dropped from spine.** Not used in this program.

### Catalog summary:
- **2 new catalog numbers:** IS 118, IS 4XX
- **6 modified existing:** IS 117, IS 218, IS 265, IS 331, IS 390, IS 425
- **1 unused:** IS 219 (stays in catalog for other programs)

### Level numbering is now clean:
- 1XX = Freshman (IS 117, IS 118)
- 2XX = Sophomore (IS 218, IS 265)
- 3XX = Junior (IS 331, IS 390)
- 4XX = Senior (IS 425, IS 4XX)

---

## 8 Human Edge Capabilities (Updated)

| # | Capability | Course | Semester |
|---|-----------|--------|----------|
| HE-1 | Disciplined Inquiry | IS 117 | 1 |
| HE-2 | Professional Judgment | IS 118 | 2 |
| HE-3 | Resilience Thinking | IS 218 | 3 |
| HE-4 | Problem Finding | IS 265 | 4 |
| HE-5 | Epistemic Humility | IS 331 | 5 |
| HE-6 | Systems Thinking | IS 390 | 6 |
| HE-7 | Accountable Leadership | IS 425 | 7 |
| HE-8 | Translation | IS 4XX | 8 |

### Changes from prior mapping:
- Translation moves from IS 118 (old) to IS 4XX (new) — the capstone position
- Professional Judgment moves from IS 218 (old) to IS 118 (new) — follows the content
- Resilience Thinking moves from IS 219 (old) to IS 218 (new) — follows the content
- All others unchanged

### The bookend:
- Opens with Disciplined Inquiry (learning to ask the right questions)
- Closes with Translation (teaching AI to people who didn't sign up for a CS degree)
- Arc: Ask → Build → Operate → Analyze → Know your limits → Architect → Lead → Teach

---

## Center for Enterprise AI (CEAI)

### Status: Established
- Under the **Department of Informatics**, Ying Wu College of Computing, NJIT
- Director: **Keith Williams**
- Not a proposal — this is how it is

### Functions

**1. Operations Hub**
- Manages Demo Day (IS 425, Senior Fall) — venue, industry evaluators, A/V, streaming
- Manages Community AI Training (IS 4XX, Senior Spring) — Newark partnerships, outreach, materials archive
- Manages Project Pipeline (IS 265 + IS 425) — solicits real enterprise problems from industry, nonprofits, NJIT internal ops
- Maintains continuity across cohorts — each year's students inherit what the previous cohort built

**2. Open Knowledge Platform**
- Published course materials (syllabi, Context Pack templates, assessment rubrics, 40/60 framework)
- The Human Edge framework as a reusable curriculum design tool
- Research and position papers (benchmark tracking, labor market analysis, program design rationale)
- Educator transition guides — practical resources for faculty integrating AI into existing courses
- Goal: if 20 universities adapt the framework, NJIT is the origin point

**3. Industry Bridge**
- Single point of contact for employers wanting to:
  - Submit capstone project problems
  - Attend Demo Day and recruit
  - Sponsor community training events
  - Partner on applied research

**4. Community Engagement**
- Annual Newark community AI training event (run by IS 4XX students)
- Dean has committed to fundraising support
- NJIT's anchor institution mission in Newark
- Creates public visibility, press, community goodwill

---

## IS 265 Midpoint Capstone — Design Notes

### Strategic position
- End of sophomore year (Semester 4)
- Students arrive having: built a portfolio site (117), a full-stack app (118), operated infrastructure (218)
- Students leave internship-ready for summer between sophomore and junior year

### Content synthesis
- Enterprise domain knowledge from is265_sucks.txt (enterprise architecture, ERP/CRM/SCM, GenAI patterns, governance) — the CONTEXT
- Problem Finding from current version (stakeholder analysis, requirements, persuasion) — the METHOD
- A shipped artifact (working prototype + architecture + governance plan) — the PROOF

### Capstone deliverable
"Enterprise AI Implementation Proposal + Working Prototype"
- Pick an enterprise problem domain (sourced via CEAI project pipeline)
- Map current system landscape
- Identify where AI adds value
- Build a working proof-of-concept
- Document governance/risk
- Present at Demo Day as if pitching to a hiring manager

### Human Edge artifact
- Assumptions Log + Issue Tree (same as current — Problem Finding)
- But now validated against a real prototype, not just a paper analysis

---

## IS 4XX Service Learning — Design Notes

### Course shape (3 phases)

**Weeks 1-5: Design**
- Research audience (Newark community — small businesses, nonprofits, schools, residents)
- Identify what they need to know about AI
- Design workshop curricula (pedagogical design)
- What order, what examples, what hands-on exercises, what misconceptions to preempt

**Weeks 6-10: Build & Rehearse**
- Build training materials
- Practice-teach to cohort peers (brutal peer critique)
- Iterate based on feedback
- Handle logistics (venue, outreach, registration, accessibility)

**Weeks 11-15: Execute & Reflect**
- Run the public event
- Post-event analysis: what worked, what didn't, what they'd change
- Translation Brief: what it took to make AI concepts accessible to non-technical audience
- Community impact report with participant feedback

### Key deliverables
- Workshop curriculum (lesson plans, materials, hands-on exercises)
- Event logistics plan (venue, outreach, registration, accessibility, contingency)
- The actual public event (assessed live)
- Translation Brief (Human Edge artifact)
- Community impact report

---

## Site-Wide Update Checklist

Every page that mentions any of the following needs updating:

- [ ] Spine sequence (117→118→218→265→219→331→390→425 → new sequence)
- [ ] "7 of 8 existing, 1 new course" → "6 of 8 existing, 2 new courses"
- [ ] IS 118 description (was interactive web dev → now full-stack from old 218)
- [ ] IS 218 description (was web app engineering → now infrastructure from old 219)
- [ ] IS 219 references (remove from spine, note unused)
- [ ] IS 265 description (was problem analysis → now midpoint capstone)
- [ ] IS 4XX (add everywhere spine is listed)
- [ ] Human Edge capability mapping (updated order)
- [ ] Demo Day references (IS 425 keeps its own; IS 4XX has community event)
- [ ] "Proposed" / "proposal" language → declarative/present tense
- [ ] Center for Enterprise AI (add new section or references)
- [ ] Prerequisite chains (117→118→218→265→331→390→425→4XX)
- [ ] Curriculum map (HE capability assignments)
- [ ] astro.config.mjs sidebar (new pages: IS 4XX syllabus, Center section)

### Files requiring changes (estimated):
- All 8 syllabi (rewrite IS 118, IS 218, IS 265; create IS 4XX; update prereqs in others)
- astro.config.mjs (sidebar)
- program/overview.md, student-journey.md, course-sequence.md, curriculum-map.md
- program/program-objectives.md
- philosophy/executive-summary.md, stripping-thesis.md, new-paradigm.md
- accreditation/abet-alignment.md, msche-alignment.md, outcomes-mapping.md, assessment-plan.md
- evidence/why-now.md, higher-ed-landscape.md
- stakeholders/for-administrators.md, for-faculty.md, for-students.md, for-industry.md
- careers/job-signals-summary.md, skills-map.md, example-job-descriptions.md
- reference/implementation-plan.md, course-catalog-current.md, course-catalog-proposed.md
- research/peer-programs.md
- docs/research/07-accreditation-policy.md, 08-program-design.md
- New: center/ section pages
