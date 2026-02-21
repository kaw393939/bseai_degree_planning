# QA: IS 425 — Capstone: CEO of Agents

**Page:** `src/content/docs/syllabi/is425.md`
**Status:** Issues found

---

## Issue 1: "Neural Fabric" Reference Unexplained (MEDIUM)

The syllabus mentions "Neural Fabric concepts" in the context of the capstone project. `core-studio-spine.md` elaborates: "Neural Fabric concepts (local LLM + graph + vector + observability for mission-critical AI)."

But no page on the site introduces or defines "Neural Fabric" as a formal concept. An accreditor or outside reviewer encountering this term will ask: "What is Neural Fabric? Where is it taught before the capstone?"

**Fix:** Either:
1. Add a brief definition in the IS 425 syllabus: "Neural Fabric — the program's term for local-LLM + knowledge-graph + vector-store + observability architectures, introduced in IS 331 and IS 390 and integrated here"
2. Or remove the term and use the descriptive expansion directly

---

## Issue 2: No Context Pack in Grade Breakdown (MEDIUM)

Same as all other syllabi. Context Pack v8 is the capstone's full portfolio — presumably the most complete version. Its absence from the grade breakdown is especially notable here where the cumulative artifact should have maximum weight.

**Fix:** See cross-cutting issue. Consider making Context Pack v8 (the complete portfolio) an explicit graded deliverable worth 10–15%.

---

## Issue 3: "Keith Williams" Attribution Gap (LOW)

`core-studio-spine.md` says IS 425 is "Keith Williams's class" and `outcomes.md` references him by name. But the IS 425 _syllabus itself_ doesn't name an instructor. This creates an odd split: the planning docs name a specific person, but the syllabus is generic.

Not necessarily a problem (syllabi often don't name instructors until scheduled), but the reader who sees "Keith Williams's class" elsewhere may wonder why it's not in the syllabus.

**Fix:** No action needed for the syllabus. Consider removing the named reference from core-studio-spine.md and outcomes.md, or leaving it as-is since those are internal planning docs.
