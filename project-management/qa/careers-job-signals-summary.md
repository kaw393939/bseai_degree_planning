# QA: Job Signals Summary

**Page:** `src/content/docs/careers/job-signals-summary.md`
**Status:** Issues found

---

## Issue 1: References Untracked File `incoming_info/jobs.md` (MEDIUM)

"A non-verbatim summary of the roles captured in `incoming_info/jobs.md` (kept untracked)." External readers can't access this. Same issue as other existing pages.

**Fix:** Remove internal file reference. Change to: "Based on job market research conducted February 2026."

---

## Issue 2: Salary Data Slightly Different from Evidence Pages (LOW)

The salary ranges here ($145K–$183K for Forward-Deployed, $180K–$220K for Product Engineer, etc.) are specific posting snapshots, not ranges. These are used in the executive summary's salary table. They're consistent there but differ from the aggregated ranges in job-market.md ($100K–$130K entry). This is because these are specific postings while job-market.md provides ranges.

Not a real inconsistency, but could confuse someone comparing the two pages.

**Fix:** Add a note: "These are specific posting examples. For aggregated salary ranges, see [Job Market Data](/bseai_degree_planning/evidence/job-market/)."
