---
title: "Assessment Plan"
description: "How the BS in Enterprise AI measures student learning outcomes at course, program, and post-graduation levels."
---

# Assessment Plan

This document describes the multi-level assessment architecture for the BS in Enterprise AI, designed to satisfy ABET CAC continuous improvement requirements and MSCHE Standard V (Educational Effectiveness Assessment).

## Theoretical Foundation

The assessment architecture is grounded in established instructional design theory:

- **Cognitive Load Theory (Sweller, 1988):** Assessment tasks are designed to manage intrinsic load — each artifact isolates one Human Edge capability so students can demonstrate mastery without competing cognitive demands. The 40/60 split ensures the hard-way component builds schemas before the agentic component adds complexity.
- **Reflective Practice (Schon, 1983):** Every Human Edge artifact is a reflection artifact — the AI Audit Log, the Failure Mode Analysis, the Data Assumptions Document each require students to articulate *why* they made decisions, not just *what* they built. This converts tacit knowledge into assessable evidence.
- **Zone of Proximal Development (Vygotsky, 1978):** The studio spine sequences capability demands within each student's expanding zone. IS 117 asks students to document inquiry; IS 425 asks them to lead under ambiguity. The scaffolding is deliberate, and assessment expectations scale accordingly.
- **Situated Learning (Lave and Wenger, 1991):** Assessment happens through authentic practice — real deployments, real stakeholders, real incident drills — not decontextualized exams. Students demonstrate capability in the same contexts where they will exercise it professionally.

---

## Three-Level Assessment Architecture

```
Course Level          →  Program Level        →  Post-Graduation
(every semester)         (annual cohort)          (1-year, 3-year)
                                                    
Learning objectives      Student outcomes         Program educational
assessed via             assessed via             objectives assessed
portfolio artifacts,     cumulative portfolio,    via graduate surveys,
Human Edge artifacts,    capstone (IS 425),       employer feedback,
studio checkoffs         Demo Day rubrics         placement data
```

---

## Level 1: Course-Level Assessment

Each studio course assesses both technical competence and Human Edge capability development.

### Standard Assessment Components (All Studios)

Each studio course allocates grade weight across these categories. Exact percentages vary by course — the ranges below are guidelines that each syllabus adapts to its specific context:

| Component | Typical Range | What It Measures |
|---|---|---|
| **Deployed artifact** | 25–40% | Technical competence — does the system work, is it tested, is it deployed? |
| **Human Edge artifact** | 15–25% | Capability development — does the student demonstrate the course's human capability? |
| **Studio checkoffs** | 10–20% | Baseline skills — terminal, Git, deploy verified in person |
| **Context Pack** | Embedded in project grade | AI management skill — can the student construct effective context for agents? |
| **Documentation & presentation** | 10–15% | Professional communication — README, runbook, design decisions, Demo Day |

*Note: The Context Pack is assessed as part of the overall project grade, not as a separate line item. Each syllabus maps its specific grade components to these categories — for example, in IS 117, the Museum Website (35%) serves as the Deployed Artifact and the Portfolio (25%) embeds Human Edge and documentation work. See individual syllabi for exact breakdowns.*

### Human Edge Artifacts by Course

| Course | Artifact | What It Assesses |
|---|---|---|
| IS 117 | **Inquiry Log** | Quality, evolution, and depth of questions. Do questions improve over the semester? |
| IS 118 | **AI Audit Log** | Does the student exercise informed judgment over AI output? What was accepted/rejected/modified and why? |
| IS 218 | **Failure Mode Analysis** | Can the student anticipate failure, design for it, and own recovery? |
| IS 265 | **Assumptions Log + Issue Tree** | Can the student find the real problem, not just the stated one? |
| IS 331 | **Data Assumptions Document** | Does the student understand epistemic limitations of their data representations? |
| IS 390 | **Systems Decomposition** | Can the student see the whole system and identify where complexity hides? |
| IS 425 | **Leadership Reflection** | Does the student take genuine accountability for outcomes? |
| IS 482 | **Translation Brief** | Can the student make complex AI concepts accessible and actionable for non-technical audiences? |

### Rubric Structure

Each Human Edge artifact is scored on a 4-point rubric:

| Level | Description |
|---|---|
| **4 — Exemplary** | Demonstrates sophisticated understanding. Could be used as teaching example. Insight goes beyond requirements. |
| **3 — Proficient** | Meets all expectations. Demonstrates the capability clearly and with evidence. |
| **2 — Developing** | Shows awareness of the capability but application is incomplete or surface-level. |
| **1 — Beginning** | Minimal evidence of the capability. Artifact is perfunctory or missing key elements. |

### Vocabulary Mastery as Assessment Dimension

Every studio course builds a **Spell Book** — a curated vocabulary of named concepts, patterns, and frameworks that students accumulate across the spine (v1 in IS 117 through v8 in IS 482). The Spell Book is not assessed as a separate artifact but is embedded in every assessment through a concrete signal: **the precision and compression of student communication.**

This is grounded in information theory (Shannon, 1948): named concepts function as compressed protocols. A student who writes "I applied the 12-Factor methodology to externalize configuration" has indexed a shared knowledge structure that would otherwise require paragraphs of explanation. A student who writes "I put the settings in a separate file" has not.

Across the spine, assessors look for increasing vocabulary density in:
- Context Packs (can the student construct precise instructions for AI agents?)
- Human Edge artifacts (can the student name the framework they applied?)
- Demo Day presentations (can the student communicate technical decisions efficiently to expert audiences?)
- Postmortems and reflections (can the student diagnose problems using professional terminology?)

This provides a **measurable proxy for cognitive development**: prompt quality and vocabulary precision improve as students internalize more compressed protocols. The trajectory from IS 117 (where students are learning to name what they see) to IS 482 (where students must translate professional vocabulary into accessible explanations) is itself assessment evidence.

### Rubric Calibration Protocol

To ensure inter-rater reliability across sections and semesters:

1. **Pre-semester calibration session** (2 hours): All studio instructors score the same 3 sample artifacts using the standard rubric. Scores are compared, discrepancies discussed, and shared anchors established.
2. **Mid-semester check**: Instructors exchange 2 anonymized artifacts per course with a colleague teaching a different studio. Scoring agreement is documented.
3. **Annual norming workshop**: Faculty committee reviews exemplar artifacts from each rubric level (1–4) and updates anchor descriptions based on observed student work.
4. **Calibration documentation**: All calibration results are archived as part of the continuous improvement evidence for ABET and MSCHE.

---

## Level 2: Program-Level Assessment

### Annual Cohort Portfolio Review

Each year, a faculty committee reviews a stratified sample of student portfolios (top/middle/bottom performers) to assess:

- **Progression:** Are Human Edge artifacts improving across semesters?
- **Technical growth:** Are deployed projects increasing in sophistication?
- **AI judgment:** Are AI Audit Logs showing increasingly nuanced evaluation?
- **Context Packs:** Are students constructing more sophisticated context over time?
- **Vocabulary density:** Are students using more precise, compressed professional language in later semesters? (Measured by comparing Spell Book growth and terminology usage in Context Packs and reflections across the spine.)

The portfolio review trains *both neural networks* simultaneously: the biological network (the student's growing professional vocabulary and judgment) and the artificial network (the AI agents whose output quality depends on how precisely students can direct them through Context Packs). Portfolio evidence should show improvement in both — better human reasoning *and* better AI-directed output.

### Demo Day Assessment (Starting Semester 2)

Demo Day begins with IS 118 (Year 1, Spring) and continues through IS 425. IS 117 concludes with a final presentation rather than a formal Demo Day. The format and audience scale up each year:

| Dimension | Weight | Evaluated By |
|---|---|---|
| Technical depth & correctness | 25% | Faculty rubric |
| Communication & presentation | 25% | External judges |
| Evidence of evaluation & testing | 25% | Faculty rubric |
| Impact & user value | 25% | External judges |

### Production Project Assessment (IS 425)

IS 425 is the summative technical assessment. It requires:

- Production-quality AI system (knowledge graph + HITL + evaluation harness)
- Demo Day presentation to industry judges
- Written postmortem and improvement plan
- Leadership reflection (Human Edge artifact)
- Team peer evaluation and individual contribution evidence

---

## Level 3: Post-Graduation Assessment

### Program Educational Objectives (PEOs)

PEOs describe what graduates are expected to achieve 3–5 years after graduation:

1. **Employ AI systems responsibly** to deliver business value while maintaining ethical standards
2. **Exercise professional judgment** when directing AI agents, evaluating their output, and overriding when necessary
3. **Lead cross-functional teams** through ambiguous problems, communicating effectively with technical and non-technical stakeholders
4. **Adapt continuously** to new technologies, tools, and workflows without losing effectiveness
5. **Take accountability** for the systems they build, deploy, and maintain

### Post-Graduation Measurement

| Mechanism | Timing | What It Measures |
|---|---|---|
| **Graduate survey** | 1 year post-graduation | Employment status, role, salary, self-assessment of preparedness |
| **Graduate survey** | 3 years post-graduation | Career progression, PEO attainment, program value retrospective |
| **Employer survey** | Annual (starting Year 5) | Hiring satisfaction, skill gaps, preparedness rating |
| **Job placement data** | Annual | Employment rate, median salary, role types, time to employment |
| **Alumni portfolio updates** | Voluntary, ongoing | Continuing professional development evidence |

---

## Continuous Improvement Process

### The Loop

```
1. Collect evidence (artifacts, surveys, rubrics, placement data)
       ↓
2. Analyze at course and program level (faculty committee)
       ↓
3. Identify strengths and gaps
       ↓
4. Implement changes (curriculum, pedagogy, assessment tools)
       ↓
5. Document changes and rationale
       ↓
6. Re-assess in next cycle
```

### Frequency

| Activity | Frequency | Responsible |
|---|---|---|
| Human Edge artifact review | Every semester | Course instructor |
| Portfolio progression review | Annual | Faculty committee (3+) |
| Demo Day analysis | Every semester (Semester 2+) | Faculty + external judges |
| Industry Advisory Board | Annual | Program director + 5–7 industry members |
| PEO assessment | Every 3 years | Program director + faculty |
| ABET self-study | Per accreditation cycle | Department-level |

> **Data availability note:** The program launches Fall 2026. Initial assessment data for outcomes primarily assessed in upper-division studios (IS 331, IS 390, IS 425, IS 482) will not be available until AY 2028–2029, when the first cohort reaches those courses. Early assessment cycles will focus on SO-1, SO-2, SO-5, HE-1, and HE-2 data from IS 117 and IS 118.

### Decision Rules

- If <70% of students score Proficient (3) or higher on a Human Edge artifact → review the teaching approach and exemplars for that capability
- If capstone teams consistently struggle with the same component → reinforce that skill earlier in the spine
- If employer surveys identify a gap → consider curriculum adjustment at next available course refresh
- If 40/60 split needs adjustment due to AI capability changes → recalibrate with faculty committee input

---

## Further Reading

- [ABET CAC Alignment](/bseai_degree_planning/accreditation/abet-alignment/) — How the program meets ABET criteria
- [MSCHE Alignment](/bseai_degree_planning/accreditation/msche-alignment/) — Middle States compliance
- [Outcomes Mapping](/bseai_degree_planning/accreditation/outcomes-mapping/) — Human Edge × ABET matrix
- [The Human Edge Framework](/bseai_degree_planning/curriculum/outcomes/) — Capability definitions
