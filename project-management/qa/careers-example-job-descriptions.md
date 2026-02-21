# QA: Example Job Descriptions + Salaries

**Page:** `src/content/docs/careers/example-job-descriptions.md`
**Status:** Issues found

---

## Issue 1: References Internal File Paths and API Research Tools (MEDIUM)

Multiple references to internal infrastructure:
- "`incoming_info/jobs.md` (kept untracked)"
- "Current web research using `eai search` (saved under `incoming_info/eai_research/`, gitignored)"

These expose internal tooling and file structure to readers. Not harmful, but unprofessional for an external-facing site.

**Fix:** Remove all `incoming_info/` references and `eai search` mentions. Replace with general sourcing notes: "Based on analysis of public job postings and salary databases as of February 2026."

---

## Issue 2: BLS "May 2024" Data — Aging Concern (LOW)

"BLS Occupational Outlook Handbook medians (May 2024)" — this is the most recent available data as of the site's creation. However, BLS publishes annual updates. The site should include a "last verified" date so future readers know to check for updates.

**Fix:** Add: "BLS data current as of May 2024 OEWS survey. Next update expected ~March 2026."

---

## Issue 3: Salary Ranges Consistent with Other Pages (PASS)

The granular per-role ranges ($110K–$150K entry AI Product Engineer, etc.) are internally consistent and plausibly source the aggregated ranges on job-market.md and stakeholder pages. The main gap is that job-market.md says entry is "$100K–$130K" while these role descriptions show entry ranges going up to $150K+. This confirms the cross-cutting salary range issue originates from different source methodologies.
