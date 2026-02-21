---
title: "The Student Journey"
description: "A realistic progression from public school graduate to AI product engineer — and the human transformation that makes it last."
---

# The Student Journey

This is the honest version. Not the admissions brochure. Not the aspirational marketing copy. The actual transformation that a student goes through from enrollment to graduation — including the hard parts.

---

## Who walks in the door

**Jaylen, 18.** Newark public school graduate. Got decent grades but was never challenged. Has a phone, a Chromebook from school, maybe a gaming laptop. Has never opened a terminal, used Git, or heard of an API. Was told "you should do something with computers" and picked this because it sounded like the future. Might be on academic warning. Definitely can't afford paid software subscriptions.

Jaylen represents about a third of the incoming class. The other two-thirds are slightly more prepared but not by much. A few have dabbled in Python from YouTube tutorials. Almost none have shipped anything.

**The program's job:** Take Jaylen from here to a functioning AI product engineer in four years. Not the top 5% — *Jaylen*. The average student. The one who needs the most support and has the most to gain.

---

## Year 1: "I can make things."

### Fall — IS 117: Web Development & Inquiry

**Where Jaylen starts:** Can't navigate a filesystem. Doesn't know what a terminal is. Has never committed code. Doesn't understand what a website actually is beneath the surface.

**What happens:**
- Week 1: Opens a terminal for the first time. Types `ls`, `cd`, `mkdir`. The filesystem reveals itself.
- Week 3: Pushes to GitHub. Sees their work live on the internet. A small magic moment.
- Week 5: Reads Warren Berger. Starts asking "Why?" and "What if?" — not just "How?"
- Week 10: Publishes a museum-style website about the history of encryption. It's rough, but it's real and it's theirs.
- Week 15: Portfolio v1 is live. It's basic but professional. Git history shows iteration.

**Human Edge gained: Disciplined Inquiry.** Jaylen can now articulate a question, investigate it, and document what they found. They don't just accept the first answer — they ask "What would have to be true?"

**Technical confidence:** Terminal basics, Git, HTML/CSS, static deployment. The digital floor is laid.

### Spring — IS 118: Interactive Web Development

**Where Jaylen starts:** Can publish static pages. Can't make anything interactive. Doesn't know JavaScript.

**What happens:**
- Week 2: "Hello, {name}!" — the DOM responds to input. The page is *alive*.
- Week 6: Builds a tool that fetches weather data from an API and displays it. First encounter with async, promises, JSON.
- Week 10: Hits their first real bug. Spends 3 hours. Learns to read a stack trace and use breakpoints. Painful but unforgettable.
- Week 15: Ships an interactive data story — a web app that takes a dataset and lets users explore it visually. Not beautiful, but functional.

**Human Edge gained: Translation.** Jaylen can take invisible data and make it tangible. Their "translation brief" explains *what* the app reveals and *why* they chose this representation.

**Technical confidence:** JavaScript, API integration, basic debugging, form handling. Jaylen can now *make things happen* on a screen.

---

## Year 2: "I can build real software — and I understand why it matters."

### Fall — IS 218: Web Application Engineering

**Where Jaylen starts:** Can write JS, fetch APIs, publish sites. Has never built anything with a backend, written a test, or used CI.

**What happens:**
- Week 3: First full-stack app. Front-end talking to an API talking to a database. Mind = expanded.
- Week 6: Writes their first automated test. Then breaks something and the test catches it. "Oh. *That's* why."
- Week 8: Uses GitHub Copilot heavily for a feature. Then reviews its output and finds a security issue (hardcoded secret). Writes it up in the AI audit log. *This is judgment.*
- Week 12: CI pipeline is green. App is deployed. Monitoring dashboard shows uptime. Professional.
- Week 15: Ships a complete web application. Tests pass. CI runs. Deployed. Documented.

**Human Edge gained: Professional Judgment.** Jaylen doesn't just accept AI output anymore. They evaluate it. The AI audit log shows 14 instances where they modified or rejected Copilot suggestions — with reasoning.

**Technical confidence:** Full-stack development, testing, CI/CD, deployment, monitoring basics. Jaylen is now a functioning software engineer, not a script kiddie.

### Spring — IS 265: Problem Analysis in Information Systems

**Where Jaylen starts:** Can build software. Has no idea what a stakeholder is or why requirements are hard.

**What happens:**
- Week 2: Gets assigned to interview a local business owner about their "AI problem." Discovers the stated problem ("we need a chatbot") is not the real problem (their onboarding documentation is incomprehensible).
- Week 6: Builds an issue tree mapping the real problem. Presents it to the class. Gets pushback. Defends it with evidence.
- Week 10: Learns persuasion frameworks (Cialdini, from IS 117 vocabulary). Presents their recommendation to a panel of "skeptical stakeholders" (faculty + peers role-playing executives). Gets grilled.
- Week 15: Delivers a problem framing memo that a real organization could act on. Includes assumptions log showing what they originally believed vs. what investigation revealed.

**Human Edge gained: Problem Finding.** Jaylen can now walk into a messy situation and find the real problem. They don't just build what's asked for — they ask whether it's the right thing to build.

**Turning point:** After this semester, Jaylen understands that engineering without context is just expensive typing.

---

## Year 3: "I understand the machine — and what it can't tell me."

### Fall — IS 219: Web Systems & Infrastructure

**Where Jaylen starts:** Can build and deploy web apps. Doesn't understand what happens below the application layer.

**What happens:**
- Week 2: SSH into a Linux server. Navigate processes, check permissions, read logs. "So *this* is what's running my app."
- Week 5: Containerizes their IS 218 project with Docker. Debugs networking between containers. Frustrating. Valuable.
- Week 8: Runs an incident drill. Something breaks in production. They have 30 minutes to diagnose, fix, and write a postmortem. The adrenaline is educational.
- Week 12: Builds a monitoring dashboard. Learns what an alert should actually look like (not "everything is on fire" but "disk is 85% full, you have 3 days").
- Week 15: Ships a containerized service with observability, a runbook, and a failure mode analysis.

**Human Edge gained: Resilience Thinking.** Jaylen can now look at a system and tell you how it's going to break. More importantly, they can tell you what they'll do when it does.

**Technical confidence:** Linux, containers, networking, secrets management, monitoring, incident response. Jaylen can operate in a production environment, not just a code editor.

### Spring — IS 331: Data & Knowledge Systems

**Where Jaylen starts:** Can build and deploy systems. Doesn't understand data modeling, databases at depth, or how AI "knows" things.

**What happens:**
- Week 3: SQL becomes real. Not just SELECT * — actual joins, aggregations, data modeling decisions that shape what questions you can and can't answer.
- Week 6: Builds a knowledge graph from a messy corpus of documents. Discovers that modeling choices are *editorial decisions* — what you connect determines what you can find.
- Week 9: Creates vector embeddings. Searches semantically. Finds things keyword search missed. Also finds things that are plausible but wrong. "Huh. The embedding space has edges."
- Week 13: Builds a hybrid retrieval system. Metadata + semantic + optionally graph-enhanced. Documents what each method finds that the others miss.
- Week 15: Writes a "data assumptions document" — what their data captures, what it distorts, and what that means for any system built on it.

**Human Edge gained: Epistemic Humility.** Jaylen now understands, concretely, that data is not truth. They can articulate what a dataset represents and what it can't.

**Critical realization:** Jaylen now sees that every AI system has a worldview baked in through its data, and someone needs to understand and document that worldview. That someone is them.

---

## Year 4: "I can analyze systems and lead AI projects."

### Fall — IS 390: Systems Analysis & Design

**Where Jaylen starts:** Can build software, manage infrastructure, work with data. Has not yet designed a full system from requirements through architecture, or analyzed how AI components change the systems design problem.

**What happens:**
- Week 2: Gets a messy project brief from a real stakeholder (via Center for Enterprise AI). The "requirements" are three sentences and a spreadsheet. Jaylen starts decomposing.
- Week 4: Maps the system — not just the software, but the data flows, the human touchpoints, the failure modes, the cost drivers. Draws the architecture. Realizes the easy design has a catastrophic failure mode.
- Week 7: Writes requirements with acceptance tests. But these aren't just feature tests — they include non-functional requirements: latency, reliability, what happens when the AI component returns garbage.
- Week 10: Prototypes the hard parts. Presents the architecture to a review panel. Gets hard questions about tradeoffs. Defends choices with evidence. Changes two decisions based on feedback.
- Week 15: Delivers a complete systems analysis package: requirements, architecture, evaluation plan, prototype evidence. This is the blueprint that IS 425 will build on.

**Human Edge gained: Systems Thinking.** Jaylen can now look at a complex system and see how the parts interact — where complexity hides, what emergent behavior to watch for, how to design for the whole and not just the pieces.

**The shift:** Jaylen stops thinking like a developer ("what should I build?") and starts thinking like an analyst ("what does this system need to be, and how do all the parts work together?").

### Spring — IS 425: Applied Enterprise AI

**Where Jaylen starts:** Has all eight semesters of skills and capabilities, plus a complete systems analysis package from IS 390. Has never built a production AI system with knowledge graphs and human-in-the-loop workflows.

**What happens:**
- Week 1: Meets the client (real company, through the Center for Enterprise AI). Takes the systems analysis from IS 390 and scopes the implementation. Requirements are real. Deadlines are real.
- Week 3: Builds the knowledge graph. Entities, relationships, domain structure. Discovers that modeling the domain as a graph reveals connections that flat data hid. "*This* is why the spreadsheet approach kept failing."
- Week 5: Integrates vector retrieval with graph context. Semantic search finds relevant documents; the knowledge graph tells the system *why* they're relevant and what's connected. The combination is dramatically better than either alone.
- Week 8: Implements HITL workflows. The system flags low-confidence outputs for human review. Escalation paths are designed. Override capability works. The evaluation harness includes regression gates — quality can't silently degrade.
- Week 10: Something breaks. A data source changes format, the knowledge graph gets stale, retrieval quality drops. Jaylen runs incident response (IS 219 skills), updates the pipeline (IS 331 skills), writes the postmortem, and presents it to the client. Professional.
- Week 12: The system is monitored. Observability traces every decision: what was retrieved, what the graph contributed, where the human intervened, what the model generated.
- Week 15: **Demo Day.** Jaylen presents to industry judges. Shows the knowledge graph, the HITL workflow, the evaluation evidence. Walks through a real failure case and how the system handled it. Answers hard questions. Doesn't bluff.

**Human Edge gained: Accountable Leadership.** Jaylen stood up in front of industry professionals, presented a production AI system built on knowledge graphs with human-in-the-loop safeguards, defended their decisions, and took responsibility for the outcomes.

---

## What Jaylen has at graduation

**Portfolio:** 8 shipped projects, each more sophisticated than the last, publicly visible on GitHub and their portfolio site (which has evolved every semester since IS 117).

**Human Edge artifacts:** 8 documents demonstrating inquiry, translation, judgment, problem finding, resilience, epistemic humility, systems thinking, and leadership.

**Technical skills:** Linux, Git, web development, full-stack apps, containers, monitoring, databases, knowledge graphs, vector stores, RAG, HITL workflows, agents, evaluation, CI/CD.

**Professional experience:** Service Learning Clinic or Industry Practicum. Demo Day presentations. Client engagement.

**What Jaylen can do on day one at a job:**
- Navigate a company's Linux environment, read logs, debug issues
- Use Git professionally and follow CI/CD workflows
- Build and deploy a service with monitoring and rollback capability
- Build an LLM-backed feature with evaluation evidence and safe failure modes
- Frame a problem, write requirements, and present tradeoffs to non-technical audiences
- Ask the question nobody else is asking — and know how to find the answer

**What makes Jaylen irreplaceable:**
- Jaylen doesn't just use AI — Jaylen *judges* AI
- Jaylen doesn't just build what's asked for — Jaylen finds the right problem
- Jaylen doesn't just ship features — Jaylen takes responsibility for outcomes
- Jaylen doesn't just generate code — Jaylen evaluates whether it's right
- Jaylen doesn't just follow instructions — Jaylen leads

---

## Why this is realistic

- Each semester produces a concrete artifact, not just exams
- Skills are repeated with higher expectations every semester (terminal, Git, deployment, documentation, evaluation)
- Students learn foundational tools without depending on AI — then learn to use AI correctly once they can verify
- The Human Edge capabilities are not theoretical — they're practiced, evidenced, and accumulated
- The program is designed for Jaylen — not for the student who arrives prepared, but for the one who arrives determined

This is what it means to graduate from the BS in Enterprise AI: you are not just technically competent. You are humanly irreplaceable.
