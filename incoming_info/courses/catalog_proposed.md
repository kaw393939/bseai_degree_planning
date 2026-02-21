# BS in Enterprise AI — Proposed IS Course Catalog (2026)

Compiled: 2026-02-20
Companion to: `catalog_all_is_current.md` (current state) and `catalog_changes.md` (delta analysis)

---

## How to Read This Document

Each course entry shows the **proposed EAI identity** — what it becomes inside the BS in Enterprise AI degree. Courses fall into four categories:

| Category | Meaning |
|----------|---------|
| 🟢 **Minor change** | Title tweak, studio delivery, content evolution — easy catalog update |
| 🟡 **Moderate change** | Significant content modernization — defensible as natural evolution |
| 🔴 **Major change** | Substantial repurposing — needs curriculum committee attention |
| 🆕 **New course** | Does not exist yet — full proposal required |
| ⚠️ **HCI territory** | Owned by HCI program — cannot modify without negotiation |

---

## Program-Level Delivery Changes (all spine courses)

Across IS 117/118/218/219/265/331/390/425:

- Studio sections capped to 20–25
- Required Linux/terminal workflow used meaningfully across courses
- Consistent evidence artifacts: README, runbook, evaluation note, and revision log
- Demo Day–style critique/feedback in multiple courses
- Each studio develops one Human Edge capability alongside its technical domain
- Portfolio artifact every semester

---

## Layer 1: The Studio Spine (24 credits, 8 courses)

### IS 117 — Introduction to Website Development 🟢
- **Current title:** Introduction to Website Development
- **EAI studio label (subtitle):** Inquiry & Web Craft
- **Credits:** 3 | **Prerequisites:** None (unchanged)
- **Human Edge:** Disciplined Inquiry
- **Proposed content:** Terminal, filesystem, VS Code, Git/GitHub, HTML/CSS, static site deployment, information architecture. Warren Berger's questioning framework as pedagogical spine. Studio delivery: cohort cap 20–25, portfolio artifact, question log.
- **What changes:** Studio delivery model + Human Edge overlay. Content largely overlaps — the new version still teaches HTML/CSS + site building but adds professional tooling (Git, terminal, deploy) and structured inquiry.

### IS 118 — Interactive Web Development 🆕
- **Current title:** Does not exist
- **EAI studio label (subtitle):** Interactive Computing
- **Credits:** 3 | **Prerequisites:** IS 117
- **Human Edge:** Translation
- **Proposed content:** JavaScript fundamentals, DOM manipulation, API integration, debugging, data handling (JSON, forms, validation), security hygiene basics. First "build and ship" studio.
- **What's needed:** Full new-course proposal. Justification: the gap between IS 117 (static sites) and IS 218 (full-stack apps) is too large. IS 118 bridges it with client-side interactivity and professional debugging workflow.

### IS 218 — Building Web Applications 🟡
- **Current title:** Building Web Applications
- **EAI studio label (subtitle):** Software Engineering
- **Credits:** 3 | **Prerequisites:** IS 117 or IT 202; and CS 100/113/115 (update to: IS 118 + CS 100)
- **Human Edge:** Professional Judgment
- **Proposed content:** Full-stack development (front-end + API + persistence), testing, CI/CD, deployment, monitoring, AI-assisted development workflow. Students build, break, debug, test, and critically evaluate AI-generated code.
- **What changes:** Expand scope from "web apps with CMS" to full-stack engineering with CI/CD and AI-assisted development. Studio delivery. Prerequisite chain updated to include IS 118.

### IS 265 — Introduction to Information Systems 🔴
- **Current title:** Introduction to Information Systems
- **EAI studio label (subtitle):** Problems & Persuasion
- **Credits:** 3 | **Prerequisites:** IS 218 (was: none)
- **Human Edge:** Problem Finding
- **Proposed content:** Business process modeling, stakeholder analysis, workflow prototyping, requirements elicitation, communication and persuasion frameworks. Applied problem-finding in complex human systems.
- **What changes:** MAJOR shift from introductory IS survey to applied problem-finding studio. Content, prerequisites, and delivery change. Defensible because: (a) the current "intro IS" role is absorbed into the studio spine experience itself, (b) the new content fills a gap no other course covers — translating messy human problems into actionable requirements.

### IS 219 — Adv Website Development 🔴
- **Current title:** Adv Website Development
- **EAI studio label (subtitle):** Systems & Resilience
- **Credits:** 3 | **Prerequisites:** IS 265 (was: IS 117 + CS 100)
- **Human Edge:** Resilience Thinking
- **Proposed content:** Linux operations (processes, permissions, networking), containers, orchestration, secrets management, auth, observability (logs/metrics/traces). Designing for failure and owning recovery.
- **What changes:** MAJOR pivot from client-side JS/jQuery/AJAX to Linux/containers/observability. Defensible because: (a) "advanced website development" in 2026 IS containers + deployment + observability, (b) the client-side JS content moves to IS 118, (c) the industry needs infrastructure fluency more than jQuery. Prerequisite chain updated for Year 3 placement.

### IS 331 — Database Design, Management and Applications 🟡
- **Current title:** Database Design, Management and Applications
- **EAI studio label (subtitle):** Data & Knowledge
- **Credits:** 3 | **Prerequisites:** IS 218 or IT 202 (update to: IS 219)
- **Human Edge:** Epistemic Humility
- **Proposed content:** SQL fluency, relational modeling, data quality, reproducibility, graph databases, vector embeddings, hybrid retrieval, data pipelines and validation. Epistemology for practitioners.
- **What changes:** Expand from SQL/relational-only to include graph databases, vector embeddings, and hybrid retrieval. Studio delivery. Defensible because: (a) the relational core remains, (b) graph + vector are the storage technologies of AI systems, (c) "database management" in 2026 inherently includes these.

### IS 390 — Requirements Analysis and Systems Design 🟢
- **Current title:** Requirements Analysis and Systems Design
- **EAI studio label (subtitle):** Systems Analysis & Design
- **Credits:** 3 | **Prerequisites:** CS 103/113/115 and IS 218 (update to: IS 331)
- **Human Edge:** Systems Thinking
- **Proposed content:** Requirements analysis, systems design, SDLC (updated for AI systems), architecture documents, acceptance testing, prototyping, tradeoff analysis, non-functional requirements. Classic SA&D modernized for systems with AI components.
- **What changes:** Studio delivery. Content updated to account for AI components with probabilistic behavior. Prerequisite chain updated for Year 4 placement. Ethics/governance deferred to IS 350.

### IS 425 — Enterprise AI Applications & Infrastructure 🟢
- **Current title:** Enterprise AI Applications & Infrastructure
- **EAI studio label (subtitle):** Applied AI Systems
- **Credits:** 3 | **Prerequisites:** IS 331 or CS 331 (update to: IS 390)
- **Human Edge:** Accountable Leadership
- **Proposed content:** Knowledge graphs, human-in-the-loop workflows, vector + graph retrieval, agent/tool orchestration, evaluation harnesses, regression gates, observability, client engagement. Capstone: real client, real problem, Demo Day.
- **What changes:** Studio delivery formalized. Content sharpened around KG + HITL + full integration. Already close to proposed identity.

---

## Layer 2: Applied AI & Domain (15 credits, 5 courses)

### IS 350 — Computers, Society & Ethics ✅ NO CHANGE
- **Credits:** 3 | **Prerequisites:** Unchanged
- **Role in EAI:** The dedicated ethics course. AI regulation, bias auditing, system cards, privacy, societal impact. Taken early (Fall Year 2) so ethical reasoning is established before students build AI systems.
- **What changes:** Nothing. Used as-is.

### IS 247 — Designing the User Experience ⚠️ NO CHANGE (HCI)
- **Credits:** 3 | **Prerequisites:** Unchanged
- **Role in EAI:** Human-centered design thinking. AI products that humans can't use are worthless. Taken alongside IS 265 to reinforce problem-finding with design methodology.
- **What changes:** Nothing. Used as-is. HCI program owns this course.

### IS 392 — AI-Driven Text Analytics 🟡
- **EAI label (subtitle):** Applied AI & Language Systems
- **Credits:** 3 | **Prerequisites:** CS 100 or DS 100; and IS 331 or CS 331 (unchanged)
- **Proposed content:** NLP, prompt engineering, RAG architecture, chunking, embeddings, reranking. The technical depth needed for IS 390 and IS 425.
- **What changes:** Content evolves to include RAG/embeddings/prompt engineering — already partially covered in current version (which mentions LLMs and prompt engineering). Defensible as natural evolution.

### IS 465 — Data Analytics for Business Information Systems 🟡
- **EAI label (subtitle):** Machine Learning for Enterprise AI
- **Credits:** 3 | **Prerequisites:** CS/DS 100 + stats + IS/CS 331 (unchanged)
- **Proposed content:** Practical ML — problem framing (classification/regression/ranking), baselines, evaluation discipline, overfitting, interpretability. Not theory-heavy; focused on "when to use what and how to know if it's working."
- **What changes:** Content shifts from broad business analytics survey to focused ML practice. Defensible because: (a) "data analytics" was already evolving toward ML, (b) the business analytics survey content is addressed across IS 265 + IS 331.

### IS 480 — Data-Centric AI 🟡
- **EAI label (subtitle):** AI Quality & Reliability Engineering
- **Credits:** 3 | **Prerequisites:** DS/CS 100 + stats + IS/CS 331 + IS 465/CS 375 (unchanged)
- **Proposed content:** Evaluation harnesses, red teaming, regression testing, hallucination measurement, online/offline eval, cost/quality tradeoffs. The QA course for AI systems.
- **What changes:** Content evolves from "improving data quality" to "evaluating and ensuring AI system quality." Defensible because: (a) data quality IS a quality/reliability concern, (b) data-centric AI principles (annotation, monitoring, quality assessment) are prerequisites for reliability engineering.

---

## Layer 3: Enterprise & Professional (9 credits, 3 courses)

### IS 385 — Special Topics in IS (Service Learning Clinic) 🟢
- **Current title:** Special Topics in IS
- **Credits:** 3 | **Prerequisites:** Varies (by section)
- **Role in EAI:** Center for Enterprise AI on-ramp. Students deliver AI training and build solutions for real community or industry clients.
- **What changes:** None to HCI-owned courses. For 2026, run the clinic as a Special Topics offering to avoid repurposing IS 375 (which is qualitative UX and likely HCI territory).

### IS 491 — Senior Project – IS 🟡
- **EAI label (subtitle):** Industry Practicum
- **Credits:** 3 | **Prerequisites:** IS/CS 331 + senior standing (unchanged)
- **Proposed content:** Co-op / internship with an industry partner. Applied experience in a real company environment.
- **What changes:** Shift from individual academic capstone to industry placement. Defensible because: (a) IS 425 now serves as the academic capstone, (b) "senior project" can encompass industry placement, (c) many IS programs have made this transition.

### IS 485 — Special Topics in IS (Advanced Topics in Enterprise AI) 🟢
- **Current title:** Special Topics in Information Systems
- **Credits:** 3 | **Prerequisites:** Varies (by section)
- **Role in EAI:** Advanced agent systems, Neural Fabric concepts, research-grade AI engineering. For students going to graduate school or deep technical roles.
- **What changes:** None to HCI-owned courses. For 2026, run Advanced Topics as Special Topics to avoid repurposing IS 448 (which is quantitative UX and likely HCI territory).

---

## Summary Table

| Course | Official (Catalog) Title | EAI Label (subtitle) | Change Level | Layer |
|--------|--------------|-------------------|-------------|-------|
| IS 117 | Introduction to Website Development | Inquiry & Web Craft | 🟢 Minor | Spine |
| IS 118 | Interactive Web Development *(new)* | Interactive Computing | 🆕 New | Spine |
| IS 218 | Building Web Applications | Software Engineering | 🟡 Moderate | Spine |
| IS 265 | Introduction to Information Systems | Problems & Persuasion | 🔴 Major | Spine |
| IS 219 | Adv Website Development | Systems & Resilience | 🔴 Major | Spine |
| IS 331 | Database Design, Management and Applications | Data & Knowledge | 🟡 Moderate | Spine |
| IS 390 | Requirements Analysis and Systems Design | Systems Analysis & Design | 🟢 Minor | Spine |
| IS 425 | Enterprise AI Applications & Infrastructure | Applied AI Systems | 🟢 Minor | Spine |
| IS 350 | Computers, Society and Ethics | *(unchanged)* | ✅ None | Applied |
| IS 247 | Designing the User Experience | *(unchanged, HCI)* | ⚠️ None | Applied |
| IS 392 | AI-Driven Text Analytics | Applied AI & Language Systems | 🟡 Moderate | Applied |
| IS 465 | Data Analytics for Business Information Systems | Machine Learning for Enterprise AI | 🟡 Moderate | Applied |
| IS 480 | Data-Centric AI | AI Quality & Reliability Engineering | 🟡 Moderate | Applied |
| IS 385 | Special Topics in IS | Service Learning Clinic | 🟢 Minor | Enterprise |
| IS 491 | Senior Project – IS | Industry Practicum | 🟡 Moderate | Enterprise |
| IS 485 | Special Topics in IS | Advanced Topics in Enterprise AI | 🟢 Minor | Enterprise |
