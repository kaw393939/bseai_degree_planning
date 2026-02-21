# QA: Implementation Plan (Draft)

**Page:** `src/content/docs/curriculum/implementation-plan.md`
**Status:** Issues found

---

## Issue 1: Stale Action Items — "2–3 Weeks" Language (HIGH)

Phase 0 says "Lock the operating model (2–3 weeks)" and reads as an active to-do list. This was presumably written early in the planning process. On a published site reviewed by accreditors or administrators, this reads as unfinished work, not a plan.

**Fix options:**
1. Rewrite in past/completed tense where applicable: "Phase 0 (completed): Operating model locked"
2. Add dates showing when each phase was completed or is expected
3. Convert to a forward-looking timeline: "Phase 0: Spring 2026, Phase 1: Fall 2026 launch..."

---

## Issue 2: Phase 1 Lists Only 5 Studios — Missing IS 118, IS 219, IS 425 (MEDIUM)

Phase 1 target (Fall 2026) lists: IS 117, IS 265, IS 218, IS 331, IS 390. But the program operates sequentially — only IS 117 runs in Fall 2026 (the first cohort). Either this list means "courses that will be ready for when they're needed" (reasonable) or it implies all 5 run simultaneously in Fall 2026 (incorrect).

Also missing: IS 118, IS 219, IS 425. Are these deferred to later phases?

**Fix:** Clarify timing: "For Fall 2026 launch, IS 117 runs first. IS 118 readiness needed by Spring 2027. All 8 studios ready by Spring 2030."

---

## Issue 3: Demo Day Grading Split Doesn't Match Any Syllabus (MEDIUM)

Phase 4 recommends: 25% external judging, 25% faculty rubric, 25–35% technical deliverables, 15–25% individual contribution. No syllabus follows this breakdown. IS 118 gives Demo Day 15% total; IS 218 gives it 15% total. The Phase 4 breakdown seems to propose Demo Day as 100% of the grade, which contradicts the syllabi where it's one component.

**Fix:** Clarify that Phase 4's breakdown is *within* the Demo Day portion (e.g., "Of the 15% Demo Day weight: 25% external judging, 25% faculty rubric...").

---

## Issue 4: References Internal `incoming_info/` Folder (LOW)

"This plan is derived from the planning notes in `incoming_info/`" — same issue as course-catalog-current.md. External readers can't access this.

**Fix:** Remove internal file references or replace with a general note.
