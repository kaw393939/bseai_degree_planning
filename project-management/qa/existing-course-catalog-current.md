# QA: Course Catalog — Current

**Page:** `src/content/docs/curriculum/course-catalog-current.md`
**Status:** Issues found

---

## Issue 1: References Untracked `incoming_info/` Folder (MEDIUM)

"For records and raw research outputs (not committed), see `incoming_info/njit_course_research/`." This folder is gitignored and not available to site readers. For a published documentation site, referencing untracked internal files looks sloppy.

**Fix:** Remove the reference to internal folders, or convert to: "Based on NJIT catalog research conducted [date]. See [NJIT Catalog](https://catalog.njit.edu/) for current official descriptions."

---

## Issue 2: Minimal Content — Quality Gap (LOW)

Each course gets 1–2 lines of paraphrased description. Compared to the richly detailed new pages (syllabi, philosophy), this page feels like a placeholder. It's not technically wrong, but the quality cliff between this page and the rest of the site is noticeable.

**Fix:** Either expand each description to 3–4 lines with key topics, or clearly label this as "Administrative reference — see [full syllabi](/bseai_degree_planning/syllabi/is117/) for detailed course descriptions."

---

## Issue 3: IS 425 Description May Not Match Current Catalog (LOW)

The description says "enterprise AI systems; ingestion + ETL; vector DBs; HITL workflows" — but this is the *proposed* content. If this page captures *current* catalog text, this should reflect what IS 425 currently says, not what the EAI program plans to teach. Unless IS 425 was recently updated in the NJIT catalog.

**Fix:** Verify the IS 425 description against the actual NJIT catalog. If they differ, label this as "proposed."
