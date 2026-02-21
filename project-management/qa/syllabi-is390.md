# QA: IS 390 — Systems Architecture

**Page:** `src/content/docs/syllabi/is390.md`
**Status:** Issues found

---

## Issue 1: Studio Label Mismatch (HIGH)

Three different labels for this course's studio focus:

| Source | Label |
|---|---|
| Sidebar (astro.config.mjs) | Systems Architecture |
| is390.md frontmatter description | Studio 7: Systems Architecture |
| is390.md body text ("Studio label:") | Systems Analysis & Design |
| core-studio-spine.md | Systems Analysis & Design |
| for-students.md | Systems Architecture |

"Systems Architecture" and "Systems Analysis & Design" are different disciplines. A reviewer comparing the syllabus body to the sidebar will notice immediately.

**Fix:** Pick one and standardize everywhere. "Systems Architecture" better matches the syllabus content (multi-service deployment, infrastructure design). "Systems Analysis & Design" is the traditional IS label but doesn't match the actual studio work.

---

## Issue 2: No Context Pack in Grade Breakdown (MEDIUM)

Same as all other syllabi. See cross-cutting issue.
