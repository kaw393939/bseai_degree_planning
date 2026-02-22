---
title: "Why This Program — and Why Me"
description: "Keith Williams: 23 years at NJIT, 10,000+ students, 8 courses created, and a career spent at the intersection of technology and education. This is who's building the BS in Enterprise AI — and the evidence it can be delivered."
---

# Why This Program — and Why Me

This page exists because a degree proposal is only as credible as the person proposing it. If you're evaluating this program, you deserve to know who's behind it, what they've actually done, and why you should believe this isn't just a slide deck.

---

## Who I Am

I'm Keith Williams. I've been at NJIT since 2002 — 23 years and counting. I founded the Web Systems (WIS) program in the Department of Informatics. Over those years, I've created 8 regularly offered undergraduate and graduate courses, taught more than 10,000 students across 15 sections per year, and built curricula that Fortune 100 companies recruited from.

My students work at Amazon, Google, JPMorgan, Goldman Sachs, and hundreds of other companies. Some are CTOs. Some are senior engineers. Some are building companies in Newark.

Before NJIT, I was an AmeriCorps member at an urban after-school youth center in Pittsburgh, teaching computers to children. I've been CTO of a startup that was acquired by Anthem Ventures. I did software engineering consulting for the government of Zambia, implementing an e-government system and introducing UX design practices. I built one of the first MEAN stack frameworks, which became Showedme.net — a SaaS learning management system. I created the iOS collaboration app Wrkbench.

I started programming in 1983 on a Tandy TRS-80 Color Computer 2 that my father — a mainframe systems lead operator for Alcoa — gave me for Christmas. I grew up in a data center. Technology isn't my career. It's my life.

---

## Why I'm Building This Degree

When ChatGPT launched in late 2022, I started using it within days. Not casually — intensively. I immediately recognized that the skills I'd been teaching for two decades were about to be fundamentally restructured by AI.

Since then, I've spent over two years building research projects through NJIT capstone courses that implement advanced ETL pipelines combining LLM and machine learning techniques for NLP and knowledge graph construction to support RAG workflows. I've become an early adopter of what's now called "vibe coding" — using AI agents in VS Code and similar environments to build production software. I've combined my enterprise software engineering background with generative AI to develop new approaches to AI-augmented QA, code review, and product development.

The BS in Enterprise AI is not a response to a trend. It's the natural evolution of the Web Systems program I created 23 years ago — updated for a world where the technology landscape has fundamentally shifted. I'm not theorizing about what AI can do in education. I'm doing it, every day, and this degree formalizes what I've learned.

---

## The Evidence: Five Projects That Prove the Pedagogy

Talk is cheap. Here are five working projects — real codebases, real teaching materials — that demonstrate every pedagogical pattern this degree uses. These aren't concepts. They're things students have used or will use in the first semester.

### 1. IS 117 Lesson 1: Web Tech Fundamentals
**[View on GitHub](https://github.com/kaw393939/is117_lesson_1_webtech)**

The very first lesson for absolute beginners. Students create a tiny website (1 HTML file, 1 CSS file, 1 JS file) while learning VS Code, the terminal, and Git.

**What it demonstrates:**
- **Emotional scaffolding** — the FAQ directly addresses terminal anxiety: "I'm afraid of the terminal. Is that normal?" Answer: "Yes. It is normal."
- **"Type everything, no copy-paste"** — explicit enforcement to build muscle memory
- **A bus metaphor** for the development environment (VS Code = bus, terminal = clutch) that makes the unfamiliar approachable
- **WSL2 as the Windows standard** — normalizing Linux for all students from day one
- **Platform-specific setup guides** (macOS, Windows, WSL2) so every student converges on the same environment
- **12 micro-lessons** in strict order, each ending with one tiny verifiable action

**Why this matters for the degree:** This is what "Disciplined Inquiry" looks like in practice at the very beginning. Students aren't just learning HTML — they're learning to ask questions, follow processes, and verify their own work. The skills-first, anxiety-aware design comes from watching thousands of students freeze in front of a blank terminal. No curriculum committee produces this. Only accumulated teaching experience does.

### 2. Professional Python Calculator (Code Quality)
**[View on GitHub](https://github.com/kaw393939/code_quality_calc)**

A deliberately boring calculator project that teaches the entire professional Python development workflow: project structure, CI/CD, testing, linting, type checking, and security scanning.

**What it demonstrates:**
- **The domain is intentionally trivial** — so students can't hide behind "the project is too complex to test." The tooling is the curriculum.
- **100% test coverage is the floor**, enforced in configuration. CI fails on any lint, type, or security issue.
- **15-chapter textbook** progressing from developer mindset → setup → structure → testing → CI/CD → security
- **Cross-language awareness** — every chapter maps Python tools to equivalents in JavaScript, Go, and Java
- **Pre-commit hooks and GitHub Actions** as non-negotiable quality gates

**Why this matters for the degree:** This is "Professional Judgment" (IS 118) in action. Students learn that code quality isn't about writing beautiful code — it's about building systems that *catch your mistakes automatically*. The same principle applies to AI output: you need verification pipelines, not just prompts.

### 3. Design Curator Cards (Prompt Engineering Workflow)
**[View on GitHub](https://github.com/kaw393939/design_prompt_engineer_lesson)**

A small assignment (3 museum-quality web cards about design history) that teaches the *complete AI workflow* students will use all semester.

**What it demonstrates:**
- **AGENTS.md** — a reusable constraint file that tells the AI what it must and must not do. Students write this once and reference it in every subsequent prompt.
- **CLAIMS.md** — every factual claim generated by AI must be verified against primary sources, with confidence levels.
- **PROMPT_LOG.md** — an audit trail of every AI interaction, so students can trace how output was produced.
- **Banned word lists** — forcing precise domain vocabulary instead of vague superlatives
- **"VERIFY" flag convention** — when the AI is uncertain, it writes VERIFY instead of hallucinating
- **Named Expert Critique** — using a historical figure as a critique lens (with explicit disclaimer that it's a technique, not a history simulation)

**Why this matters for the degree:** This is the most explicit implementation of the 40/60 split in any educational context I'm aware of. The four workflow files (AGENTS.md, PROMPT_LOG.md, CLAIMS.md, CURATOR_NOTES.md) are the operational foundation for the AI Audit Log — the signature artifact in IS 118. They're also the ancestor of the Context Pack. This project proves the workflow isn't theoretical — it's a structured, teachable, repeatable process.

### 4. Agentic Orchestration Toolkit
**[View on GitHub](https://github.com/kaw393939/agentic_orchestration_toolkit)**

A Node.js CLI tool that wraps OpenAI and Google Gemini APIs into repeatable commands for research, feedback, and image generation. Students build the entire system from scratch.

**What it demonstrates:**
- **AI as a workforce to manage** — the README explicitly says: "You are managing a workforce of experts"
- **SOLID design principles in practice** (Command pattern, dependency injection, interface segregation) applied to AI orchestration
- **10 core orchestration principles** with actionable checklists (dogfood, expert-lens, adversarial, constraint inversion, artifact-first)
- **Structured output management** — everything saves to organized folders with timestamped, prompt-derived filenames
- **The capstone task** requires adding an entirely new command from scratch, proving system-level understanding

**Why this matters for the degree:** This is the "CEO of agents" concept made concrete. Students don't just use AI tools — they build the infrastructure that orchestrates them. The Command pattern + DI container architecture mirrors how production AI systems work: modular, testable, auditable. This is what Studios 3-6 build toward.

### 5. Single-Server Hosting Platform
**[View on GitHub](https://github.com/kaw393939/hosting_llm_demo)**

A production-grade hosting platform on Linode with Terraform, Ansible, Docker Compose, Traefik, and automated security scanning. Currently hosts a live Next.js application with Google OAuth and RBAC.

**What it demonstrates:**
- **Spec-driven AI development** — the entire system was built from an `initial_spec.md` written as a "letter to a coding agent." This is a specification format that works for both human and AI readers simultaneously.
- **AGENT_HANDOFF.md** — documentation for *when a different AI agent needs to continue your work*. This is a professional skill that doesn't have a name yet.
- **Defense-in-depth at every layer** — cloud firewall → host firewall → edge rate limiting → application controls
- **Operational cadence** prescribed as daily/weekly/monthly/quarterly checklists

**Why this matters for the degree:** This demonstrates that the infrastructure taught in IS 218 (Resilience Thinking) isn't academic — it's production reality. Students who complete the spine can build, deploy, and operate systems at this level. The spec-driven AI development pattern is itself a teaching tool: writing specifications that both humans and AI agents can execute is a core competency of the program.

---

## The Progression These Projects Reveal

These five projects aren't random examples. They form a skill ladder that mirrors the studio spine:

| Project | Human Effort | AI Role | Maps to |
|---------|-------------|---------|---------|
| IS 117 Lesson 1 | ~90% | Help/explain tool | IS 117 — Disciplined Inquiry |
| Code Quality Calculator | ~50% | Quality verifier (CI pipeline) | IS 118 — Professional Judgment |
| Design Curator Cards | ~40% | Constrained executor | IS 118–218 bridge — AI Audit workflow |
| Orchestration Toolkit | ~40% | Workforce to manage | IS 218–265 — Resilience + Problem Finding |
| Hosting Platform | ~30% | Implementation agent from spec | IS 218–390 — Infrastructure through Systems |

Notice the sliding scale: beginners do almost everything manually. As competence grows, the human shifts from implementor to strategist/evaluator. By the end, the human writes specs and evaluates output — the AI executes. This is the actual trajectory of professional AI work, and it's embedded in the curriculum because it's how I work every day.

---

## Why This Isn't Pie in the Sky

I understand the skepticism. A new degree program, heavy on AI, with claims about "the Human Edge" and a "Center for Enterprise AI" — it could easily be vapor.

Here's why it isn't:

**The courses mostly exist already.** 6 of the 8 spine courses use existing NJIT catalog numbers. IS 117, IS 218, IS 265, IS 331, IS 390, and IS 425 are courses in the current IS curriculum. We're updating their content and connecting them with a shared pedagogical framework — not inventing 8 courses from scratch. Only IS 118 and IS 482 require new course proposals.

**The teaching materials exist.** The five projects above are real, working codebases with documentation, tests, and deployment pipelines. They're not mockups. Clone them and run them.

**I've done this before.** I created the Web Systems program from nothing and grew it into a pipeline that Fortune 100 companies recruited from. This isn't my first time building a degree.

**The technology is real.** Every technical concept in the curriculum — knowledge graphs, RAG workflows, evaluation harnesses, CI/CD pipelines, containerized deployment — I've built with my own hands (and with AI agents) in the projects above. I'm not assigning work I can't do myself.

**The community engagement model comes from experience, not theory.** I've done workforce development in Pittsburgh (AmeriCorps), in Zambia (international consulting), and at NJIT (23 years of student career placement). The IS 482 community training concept is formalized from real work, not invented from a curriculum guide.

**This site is proof of concept.** You're reading 49 pages of consistent, cross-referenced, citation-backed content that was produced through the exact human-AI collaboration model the program teaches. The process of building this site — directing AI agents, catching errors, maintaining quality, making strategic decisions — is the process students will learn. If I can use it to produce a coherent degree proposal, students can use it to produce shipped software, evaluated AI systems, and honest impact assessments.

---

## What I'm Asking For

I'm asking you to look at the evidence, not just the words.

Look at the projects. Clone them. Read the READMEs. Look at the test coverage. Look at the CI pipelines. Look at the documentation. Then look at the syllabi and ask: "Could the person who built these actually teach these courses?"

The answer should be obvious. I've been teaching courses like these for 23 years. The AI component is new — but my approach to it (build quality gates, verify everything, learn the hard way first) is the same approach I've used for every technology shift I've navigated since 1983.

This degree will work because I've already been doing it. The proposal is just the documentation.

---

*Keith Williams*
*Department of Informatics, Ying Wu College of Computing*
*New Jersey Institute of Technology*
