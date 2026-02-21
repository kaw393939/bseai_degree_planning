# QA: The Complete Degree (Course Sequence)

**Page:** `src/content/docs/curriculum/course-sequence.md`
**Status:** Issues found

---

## Issue 1: CS 100 Missing from Prerequisite Chain Diagram (MEDIUM)

The prerequisite chain shows:
```
IS 117 → IS 118 → IS 218 → IS 265
                                  ↓
                   IS 219 → IS 331 → IS 390 → IS 425
```

But IS 218 also requires CS 100 per its syllabus. The chain diagram doesn't show this. A student reading only this diagram might not realize CS 100 is a co/prerequisite for IS 218.

**Fix:** Add CS 100 to the diagram or add a note: "IS 218 also requires CS 100."

---

## Issue 2: IS 390 Label — "Systems Analysis & Design" vs "Systems Architecture" (LOW)

The Layer 1 table says "Requirements Analysis and Systems Design (Systems Analysis & Design)" — matches core-studio-spine.md but not the sidebar or IS 390 frontmatter. See cross-cutting label issue.

---

## Issue 3: Layer 4 Courses Not in Executive Summary (LOW)

Layer 4 includes IS 385, IS 491, and IS 485. The executive summary's "Supported by" list mentions IS 480 and IS 465 but omits these Layer 4 courses. Minor omission — the exec summary focuses on the spine and Layer 3.

**Fix:** Consider adding IS 385 and IS 491 to the exec summary's supported courses list, or note that Layer 4 is optional/elective.

---

## Issue 4: IS 485 "Neural Fabric" Reference (LOW)

Layer 4 describes IS 485 as covering "Advanced agent systems, Neural Fabric concepts, research-grade AI engineering." Same undefined "Neural Fabric" term. See IS 425 QA.
