# BS in Enterprise AI — Change Analysis & Administrative Roadmap

Compiled: 2026-02-20
Purpose: Map exactly what catalog/administrative changes are required for a Fall 2026 launch.

---

## Executive Summary

The BS in Enterprise AI degree requires **16 IS courses** (15 existing + 1 new). Of these:

| Category | Count | Courses |
|----------|-------|---------|
| ✅ No change needed | 2 | IS 350, IS 247 |
| 🟢 Minor (title + delivery) | 3 | IS 117, IS 390, IS 425 |
| 🟡 Moderate (title + content evolution) | 6 | IS 218, IS 331, IS 392, IS 465, IS 480, IS 491 |
| 🔴 Major (significant repurposing) | 2 | IS 265, IS 219 |
| 🆕 New course | 1 | IS 118 |
| ⚠️ Territory conflict (need new numbers) | 2 | IS 375 → new number, IS 448 → new number |

**Net administrative actions:**
- 1 new course proposal (IS 118)
- 2 new course numbers needed (replacing IS 375 and IS 448 slots)
- 11 course modification requests (title/description/prerequisite updates)
- 2 courses unchanged (IS 350, IS 247)

---

## Phase 1: Quick Wins (Submit immediately for Fall 2026)

These changes are small enough to go through a single catalog update cycle.

### 1.1 Title + Delivery Updates (3 courses)

| Course | Current Title | Proposed Title | What Changes | Risk |
|--------|--------------|---------------|-------------|------|
| IS 117 | Introduction to Website Development | Inquiry & Web Craft | Title, cap to 20–25, add Git/terminal/deploy | Low — content still teaches web dev |
| IS 390 | Requirements Analysis and Systems Design | Systems Analysis & Design | Minor title change, add AI systems context | Very low — title is shorter/cleaner |
| IS 425 | Enterprise AI Applications & Infrastructure | Applied AI Systems | Title shortened, studio delivery formalized, KG+HITL focus | Very low — course already close to target |

### 1.2 Content Evolution Updates (6 courses)

| Course | Current → Proposed | Key Content Delta | Administrative Argument |
|--------|-------------------|------------------|----------------------|
| IS 218 | Building Web Applications → Software Engineering | Add CI/CD, testing, AI-assisted dev; drop CMS emphasis | "Web applications" in 2026 IS full-stack engineering. Natural evolution. |
| IS 331 | Database Design → Data & Knowledge | Add graph DB, vector embeddings, hybrid retrieval; keep SQL core | Modern database practice includes graph + vector. SQL foundation preserved. |
| IS 392 | AI-Driven Text Analytics → Applied AI & Language Systems | Add RAG, embeddings, reranking; keep NLP core | Course already mentions LLMs + prompt engineering. Expanding to cover architecture. |
| IS 465 | Data Analytics for Business IS → Machine Learning for Enterprise AI | Shift from broad survey to focused ML practice | "Data analytics" was heading here anyway. ML is the applied form. |
| IS 480 | Data-Centric AI → AI Quality & Reliability Engineering | Shift from data quality to system quality/eval | Data quality is a subset of reliability. Monitoring already covered. |
| IS 491 | Senior Project – IS → Industry Practicum | From academic capstone to industry placement | IS 425 serves as capstone. Industry practicum provides applied experience. |

---

## Phase 2: Major Changes (Need curriculum committee, start process now)

### 2.1 IS 265: Introduction to Information Systems → Problems & Persuasion 🔴

**Current:** Survey of IS role in organizations, evolving IT, computer tools for analysis/presentation.

**Proposed:** Business process modeling, stakeholder analysis, workflow prototyping, requirements elicitation, communication/persuasion frameworks.

**Why this is defensible:**
- The current "intro IS" content is diffuse and dated — students get more IS exposure through the studio spine itself
- "Stakeholder analysis" and "requirements elicitation" are already IS topics
- The ability to identify problems and communicate solutions is a core IS competency
- No other course in the catalog covers applied problem-finding

**Administrative steps:**
1. Submit course modification with new title, description, and prerequisites (IS 218)
2. Frame as "modernizing the IS foundations course to focus on applied skills"
3. Ensure no other programs depend on IS 265 as a prerequisite (check cross-listings with MIS 245)

**Prerequisite impact:** Currently has no prerequisites. Proposed: IS 218. This places it in Spring Year 2 instead of available anytime. Programs that use IS 265 as an early course need notification.

### 2.2 IS 219: Adv Website Development → Systems & Resilience 🔴

**Current:** Advanced interactive websites: JS/DOM/jQuery, validation, cookies, AJAX, cross-browser.

**Proposed:** Linux operations, containers, orchestration, secrets management, observability (logs/metrics/traces).

**Why this is defensible:**
- jQuery/AJAX is no longer "advanced web development" — it's basic
- Client-side JS content moves to IS 118 (new course), so nothing is lost
- Modern web development requires deployment, containers, and monitoring
- "Advanced website development" in 2026 IS infrastructure — you can't ship without it

**Administrative steps:**
1. Submit course modification with new title, description, and prerequisites (IS 265)
2. Frame as "updating advanced web development to reflect current industry practice"
3. This is the hardest sell — the content pivot is significant. Pair with IS 118 proposal to show JS content is relocated, not removed.

**Prerequisite impact:** Currently requires IS 117 + CS 100. Proposed: IS 265. Moves to Fall Year 3 in the EAI sequence. Check if other programs use IS 219 as a prerequisite.

### 2.3 IS 118: Interactive Computing 🆕

**Proposed:** JavaScript fundamentals, DOM, API integration, debugging, security hygiene basics.

**Why it's needed:**
- IS 117 → IS 218 gap is too large (static HTML → full-stack apps)
- JS content currently in IS 219 needs a home after IS 219 pivots to infrastructure
- Every competing program introduces programming interactivity by semester 2

**Administrative steps:**
1. Full new-course proposal: title, description, credits, prerequisites, learning outcomes
2. Justify the credit hour addition to the program (fits within 120–127 total)
3. Show how it bridges IS 117 → IS 218 and absorbs content from IS 219 pivot

---

## Phase 3: Territory Resolution (Requires negotiation)

### 3.1 IS 375 & IS 448: HCI Program Courses

**Problem:** The current degree plan uses IS 375 (Service Learning Clinic) and IS 448 (Advanced Topics in Enterprise AI) with content that has nothing to do with their current catalog identities:

| Number | Current (HCI) | Proposed (EAI) | Overlap |
|--------|--------------|---------------|---------|
| IS 375 | Discovering User Needs for UX | Service Learning Clinic | Zero |
| IS 448 | Usability & Measuring UX | Advanced Topics in Enterprise AI | Zero |

**Options (in order of recommendation):**

#### Option A: Create New Course Numbers (Recommended)
- Propose **IS 3XX** for Service Learning Clinic (e.g., IS 376 or IS 385 as permanent special topics)
- Propose **IS 4XX** for Advanced Topics in Enterprise AI (e.g., IS 486 or a new number)
- Leave IS 375 and IS 448 in the HCI catalog untouched
- **Pros:** No territorial conflict, clean separation, easy approval
- **Cons:** Two more new-course proposals

#### Option B: Negotiate Transfer
- Ask HCI to release IS 375 and IS 448 for EAI repurposing
- **Pros:** Fewer new course numbers
- **Cons:** Political risk, unlikely to succeed, delays launch

#### Option C: Use Existing Flexible Numbers
- IS 385 (Special Topics in IS) and IS 485 (Special Topics in IS) already exist for rotating content
- Run "Service Learning Clinic" under IS 385 and "Advanced Topics" under IS 485 initially
- Convert to permanent numbers after the courses prove themselves
- **Pros:** No approval delay, test the content before committing
- **Cons:** "Special topics" doesn't look permanent on a degree sheet

#### Recommendation: Option C for 2026 launch, Option A for 2027+
Use IS 385 and IS 485 as special topics for the first year. This avoids all territorial conflicts and approval delays. Once the courses run successfully, file for permanent numbers.

---

## Prerequisite Chain: Current vs. Proposed

### Current Catalog Prerequisites
```
IS 117 (no prereqs)
  └→ IS 218 (IS 117 + CS 100)
  └→ IS 219 (IS 117 + CS 100)
IS 265 (no prereqs)
IS 331 (IS 218)
IS 390 (CS 103 + IS 218)
IS 425 (IS 331)
IS 392 (CS 100 + IS 331)
IS 465 (CS 100 + stats + IS 331)
IS 480 (CS 100 + stats + IS 331 + IS 465)
IS 491 (IS 331 + senior)
```

### Proposed EAI Prerequisites
```
IS 117 (no prereqs) ─ Fall 1
  └→ IS 118 (IS 117) ─ Spring 1
     └→ IS 218 (IS 118 + CS 100) ─ Fall 2
        └→ IS 265 (IS 218) ─ Spring 2
           └→ IS 219 (IS 265) ─ Fall 3
              └→ IS 331 (IS 219) ─ Spring 3
                 └→ IS 390 (IS 331) ─ Fall 4
                    └→ IS 425 (IS 390) ─ Spring 4

Applied (parallel track):
IS 350 (CS intro + humanities + ENGL 101) ─ Fall 2
IS 247 (none) ─ Spring 2
IS 392 (CS 100 + IS 331) ─ Fall 3
IS 465 (CS 100 + stats + IS 331) ─ Spring 3 or Fall 4
IS 480 (IS 465) ─ Fall 4
IS 491 (IS 331 + senior) ─ Summer or Fall 4
```

**Key change:** The spine becomes a strict linear chain (IS 117→118→218→265→219→331→390→425). This is intentional — the accumulation model requires sequential progression.

---

## Risk Assessment

### Low Risk
| Item | Why |
|------|-----|
| IS 117, 390, 425 title changes | Minimal delta, same course number, existing content overlaps |
| IS 350, IS 247 unchanged | Nothing to approve |
| Studio delivery model | Internal pedagogy decision, doesn't require catalog change |
| IS 392, IS 480 evolution | Content already heading this direction |

### Medium Risk
| Item | Why | Mitigation |
|------|-----|-----------|
| IS 218 scope expansion | "Building Web Applications" → "Software Engineering" is a bigger jump | Frame as reflecting 2026 industry reality; CI/CD + testing IS web app development now |
| IS 331 adding graph/vector | Expands beyond traditional SQL | Keep SQL as 60%+ of content; graph/vector as forward-looking addition |
| IS 465 ML pivot | "Business analytics" → "ML" sounds like a bigger shift than it is | Show that ML IS the applied form of data analytics; statistics foundation stays |
| IS 491 practicum shift | Academic capstone → industry placement changes assessment structure | IS 425 is the academic capstone; IS 491 provides complementary industry experience |
| IS 118 new course | New courses require more paperwork | Start with IS 117 sections running IS 118 content as pilot; formalize for 2027 |

### High Risk
| Item | Why | Mitigation |
|------|-----|-----------|
| IS 265 major repurposing | "Intro IS" → "Problems & Persuasion" is a significant identity change | Check if other programs depend on IS 265. Frame as "applied IS fundamentals." |
| IS 219 major pivot | JS/jQuery → Linux/containers is undeniable content swap | Pair with IS 118 proposal showing JS content is relocated. Frame as "modern web infrastructure." |
| IS 375/448 territory | HCI courses being used for non-HCI content | Use IS 385/485 special topics numbers for 2026; avoid the conflict entirely |

---

## 2026 Launch Strategy: The Pragmatic Path

### What to do RIGHT NOW (Feb–Mar 2026)

1. **Submit Phase 1 changes** (IS 117, 218, 331, 390, 392, 425, 465, 480, 491) — title and description updates
2. **Submit IS 118 new course proposal** — critical for the spine
3. **Submit IS 265 modification** — start the committee process early
4. **Submit IS 219 modification** — start the committee process early
5. **Run "Service Learning" as IS 385 special topics** — no approval needed
6. **Run "Advanced Topics" as IS 485 special topics** — no approval needed

### What can wait for 2027

- Permanent course numbers for Service Learning Clinic and Advanced Topics
- Full prerequisite chain enforcement (can use overrides in Year 1–2)
- IS 219 content pivot (if approval is delayed, run the old content with studio delivery overlay)

### Fallback Positions

| If blocked on... | Fallback |
|-----------------|----------|
| IS 265 rename | Run IS 265 with current title but studio delivery + modernized content. File rename for 2027. |
| IS 219 pivot | Run IS 219 with hybrid content (some JS, some infrastructure). Full pivot in 2027. |
| IS 118 approval | Run IS 117 as 2-semester sequence (117A/117B) or use IS 385 special topics for the JS content. |
| IS 375/448 territory | Already handled — use IS 385/485 special topics. |

---

## Cross-Reference: Where Current Content Goes

For anyone asking "what happened to the jQuery/AJAX content?" or "where did the business analytics survey go?"

| Displaced Content | Where It Goes |
|------------------|--------------|
| IS 117 HTML/CSS | Still in IS 117 (just + Git/terminal) |
| IS 219 JS/DOM/jQuery/AJAX | → IS 118 (new course) |
| IS 219 client-side security | → IS 118 (security hygiene basics) |
| IS 265 "role of IS in organizations" | → absorbed across spine experience |
| IS 265 "computer tools for analysis" | → IS 331 (data tools), IS 465 (analytics) |
| IS 331 relational SQL | Still in IS 331 (+ graph/vector) |
| IS 392 text analytics core | Still in IS 392 (+ RAG/embeddings) |
| IS 465 data warehousing/viz | Reduced; ML practice takes priority. Viz in IS 392 context. |
| IS 480 data quality/annotation | Still in IS 480 (reframed as quality engineering) |
| IS 491 academic capstone | → IS 425 (becomes the academic capstone) |
