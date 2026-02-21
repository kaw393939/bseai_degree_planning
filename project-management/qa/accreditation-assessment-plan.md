# QA: Assessment Plan

**Page:** `src/content/docs/accreditation/assessment-plan.md`
**Status:** Issues found

---

## Issue 1: Standard Assessment Weights Match No Syllabus (CRITICAL)

The assessment plan defines this standard breakdown:

| Component | Weight |
|---|---|
| Deployed Artifact | 30–40% |
| Human Edge Artifact | 20–25% |
| Studio Checkoffs | 15–20% |
| Context Pack | 10–15% |
| Documentation & Reflection | 10% |

**Not a single syllabus follows this template.** Examples:

- **IS 117:** Checkoffs 15%, Vocabulary 10%, Labs 15%, Portfolio 25%, Museum 35% — no "Human Edge Artifact" line, no "Context Pack" line, no "Documentation" line
- **IS 118:** Checkoffs 15%, Labs 15%, Midterm 15%, Final 25%, Translation Brief 15%, Demo Day 15% — different structure entirely
- **IS 218:** Checkoffs 10%, Labs 15%, Midterm 15%, Final 30%, AI Audit Log 15%, Demo Day 15% — "AI Audit Log" is the Human Edge artifact but at 15%, not 20–25%

This is the most actionable QA finding. An accreditor reviewing the assessment plan against the syllabi will see immediate misalignment.

**Fix options:**
1. Update each syllabus to align with the standard breakdown (significant rework)
2. Rewrite the assessment plan to say "approximate ranges vary by studio" and provide a mapping showing which syllabus components correspond to which standard categories
3. Add a reconciliation table: "In IS 117, the Museum Website (35%) serves as the Deployed Artifact; the Portfolio Website (25%) and Inquiry Journal embed Human Edge and Context Pack work"

Option 2 or 3 is probably most practical.

---

## Issue 2: "Demo Day Assessment (Starting Year 2)" (MEDIUM)

Same Demo Day timing issue — IS 118 has Demo Day but it's Year 1 Spring. See cross-cutting issue.

---

## Issue 3: Assessment Cycle Table References "Year 1–2" Collection (LOW)

The 3-year assessment cycle table shows data collection starting "Year 1–2" for most outcomes. Since the program launches Fall 2026, Year 1 has only IS 117 and IS 118. The table should clarify that meaningful assessment data for many outcomes won't be available until the first cohort reaches Year 2–3 studios (2027–2028).

**Fix:** Add a note: "Initial assessment data for outcomes primarily assessed in upper-division studios will not be available until AY 2028–2029."
