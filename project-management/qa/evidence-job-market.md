# QA: Job Market Data

**Page:** `src/content/docs/evidence/job-market.md`
**Status:** Issues found

---

## Issue 1: Entry Salary Range Discrepancy (HIGH)

This page states:
- "Entry Level (0-2 years): $100K–$130K"

But other pages cite:
- `for-students.md`: "$100K–$150K at graduation"
- `for-administrators.md`: Entry-level AI salary range "$100K–$150K"
- `example-job-descriptions.md`: Entry base ranges vary ($110K–$150K for AI Product Engineer, $115K–$140K for AI Deployment Engineer)

The $100K–$130K range on this page is the most conservative. The $100K–$150K on stakeholder pages is the most aggressive.

**Fix:** Standardize to one entry range everywhere. $100K–$150K is defensible based on the job descriptions page but the job market data page should match. Either expand this to $100K–$150K or tighten the stakeholder pages to $100K–$130K.

---

## Issue 2: Traditional IS Graduate Salary Comparison (MEDIUM)

"Traditional IS Graduate" entry salary is cited as "$65K–$80K" here. This shows up identically in `for-students.md` ("Traditional IS graduates: $65K–$80K"). Consistent within the site, but the source for this specific range isn't cited. An accreditor or dean might challenge: "Where do you get $65K–$80K for your current IS graduates?"

**Fix:** Add a source: BLS data for "Computer and Information Systems" bachelor's entry, or NJIT's own career outcomes data.
