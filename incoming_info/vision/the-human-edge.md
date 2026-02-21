# The Human Edge: A First-Principles Vision for the BS in Enterprise AI

## Status
Internal planning document. Author: Program Director (Keith Williams) + AI planning assistant.
Date: February 2026

---

## The Premise

AI will automate everything that can be reduced to a procedure. Code generation, data
analysis, system administration, testing, documentation, routine design, report writing,
translation — all of these are already being displaced or will be within the working
lifetime of every student who enrolls in this program.

What AI cannot automate:

1. **Asking which question matters.** AI answers questions. It does not originate them.
   The ability to look at a messy situation and figure out what to investigate is
   irreplaceable.

2. **Judging when the machine is wrong.** AI produces confident, plausible output.
   Distinguishing correct from wrong requires domain knowledge, critical thinking, and
   the willingness to override the machine.

3. **Taking responsibility.** AI cannot be held accountable. Someone must own the
   outcome when the system fails, when the data is biased, when the recommendation
   causes harm.

4. **Navigating ambiguity in human organizations.** Requirements are never clean.
   Stakeholders contradict each other. Politics shapes decisions. Understanding this
   requires empathy, experience, and the ability to listen.

5. **Exercising moral reasoning.** "Can we?" is engineering. "Should we?" is judgment.
   AI systems that affect people's lives, credit, health, freedom, and opportunity
   demand people who can think ethically under pressure.

6. **Creating meaning.** AI generates content. Humans create meaning — through vision,
   context, culture, and the ability to decide what matters.

7. **Inspiring trust and action.** Leadership, persuasion, credibility — these require
   a human on the other end. The ability to present evidence, defend decisions, and
   build coalitions is not automatable.

8. **Connecting dots across domains.** The most valuable insights come from combining
   knowledge across fields. AI is trained within distributions; humans can reason
   outside of them.

## The Inversion

Most technical programs treat human capabilities as "soft skills" — a seminar here, a
communication course there, a note about teamwork in the syllabus. The technical content
is the real curriculum; the human stuff is garnish.

This program inverts that priority.

**Human capabilities are the primary outcome. Technical fluency is the necessary
substrate that makes those capabilities credible and actionable.**

We are not training coders. We are training the people who will decide what gets built,
whether it should be built, how to know if it's working, and what to do when it fails.
They must be technically fluent enough to build, debug, and evaluate AI systems — but
their lasting value will be in judgment, inquiry, ethics, and leadership.

This is the "CEO of agents" thesis: you don't write every line of code your agents
produce, but you must know enough to hire well, evaluate work, diagnose failures, and
take responsibility for outcomes.

## The Eight Human Capabilities

Each studio course in the spine foregrounds one human capability while reinforcing all
prior ones. These are not afterthoughts — they are graded, assessed, and accumulated
across the degree.

### 1. Disciplined Inquiry (IS 117)
The ability to ask structured, productive questions. Not just "any questions?" but
the McKinsey-style discipline of issue trees, hypothesis-first thinking, the Five
Whys, and Warren Berger's "beautiful questions." Students who can ask better
questions will always outperform those who can only answer them.

### 2. Translation (IS 118)
The ability to make complex ideas tangible and accessible. This is not just
"communication" — it's the cognitive skill of taking something invisible (data, logic,
a system's behavior) and turning it into something a human can see, interact with, and
understand. Every great AI product is an act of translation.

### 3. Professional Judgment (IS 218)
The ability to evaluate work — your own, your team's, your AI's. When GitHub Copilot
generates 50 lines of code, is it correct? Is it secure? Is it maintainable? This is
the core skill gap: anyone can produce code now, but knowing whether it's right
requires judgment that only comes from building, breaking, and debugging real systems.

### 4. Problem Finding (IS 265)
The ability to identify the real problem in a complex situation. Organizations don't
hand you clean problem statements. They hand you symptoms, complaints, contradictions,
and politics. The most expensive mistake in AI is solving the wrong problem perfectly.

### 5. Resilience Thinking (IS 219)
The ability to design for failure, respond to incidents, and own recovery. Systems
break. Data pipelines fail. Models drift. The engineer who can diagnose, recover, and
prevent recurrence is worth ten who can only build happy-path features.

### 6. Epistemic Humility (IS 331)
The ability to understand that data is not truth — it's a model of truth, and models
have assumptions, biases, and blind spots. Students who work with databases, knowledge
graphs, and vector embeddings must understand what these representations capture and
what they distort.

### 7. Systems Thinking (IS 390)
The ability to decompose complex systems, understand interdependencies, and design
for the whole — not just the parts. AI systems have probabilistic components, emergent
behavior, and failure modes that only become visible at the system level. Someone
must see the whole picture. Ethics and governance are handled by IS 350.

### 8. Accountable Leadership (IS 425)
The ability to ship a system, present it to stakeholders, defend its design, own
its failures, and plan its improvement. In IS 425 this means a production AI system
built on knowledge graphs with human-in-the-loop workflows — the integration of
everything, presented at Demo Day, accountable to real clients.

## The Renamed Spine

Each course title signals both its technical domain and its human capability:

| Sem | Course | Title | Technical Domain | Human Edge |
|-----|--------|-------|-----------------|------------|
| 1 | IS 117 | Inquiry & Web Craft | Terminal, Git, HTML/CSS, deployment | Disciplined Inquiry |
| 2 | IS 118 | Interactive Computing | JavaScript, APIs, debugging, data handling | Translation |
| 3 | IS 218 | Software Engineering | Full-stack apps, testing, CI/CD, AI-assisted dev | Professional Judgment |
| 4 | IS 265 | Problems & Persuasion | Business process, stakeholders, workflow prototyping | Problem Finding |
| 5 | IS 219 | Systems & Resilience | Linux, containers, networking, security, observability | Resilience Thinking |
| 6 | IS 331 | Data & Knowledge | SQL, graph, vector, pipelines, data quality | Epistemic Humility |
| 7 | IS 390 | Systems Analysis & Design | Requirements, architecture, tradeoffs, evaluation plans | Systems Thinking |
| 8 | IS 425 | Applied AI Systems | Knowledge graphs, HITL, vector+graph retrieval, agents, evals | Accountable Leadership |

### Sequencing rationale

**Year 1 (117→118):** Build the inquiry habit and digital literacy. Students learn to
ask good questions, use professional tools, and make ideas tangible through interactive
web products. AI is a tool they *use* (carefully, with attribution).

**Year 2 (218→265):** Build real software, then learn to understand the organizational
context it exists in. The order matters: you need technical credibility before you can
reason about business problems. After 218, students can build things; after 265, they
know *what's worth building*.

**Year 3 (219→331):** Go deep on infrastructure and data. Linux, cloud, containers,
then databases, knowledge graphs, vector stores. These are the foundations AI actually
runs on. By the end of year 3, students understand the full stack from terminal to
retrieval.

**Year 4 (390→425):** Integrate everything. IS 390 is where AI systems are first built
with strategic intent — not "build a chatbot" but "solve this organization's information
retrieval problem with RAG, graph context, evals, and a deployment plan." IS 425 is the
capstone: a production-grade system built for a real client, presented at Demo Day,
owned by the student.

## Why This Ordering Is Different

The current/traditional ordering at NJIT has IS 265 (Intro to IS) early — as a
sophomore survey course. I'm proposing it come *after* IS 218 (Software Engineering),
at the start of Year 2 Spring.

Reason: Students need to have built something real before they can reason meaningfully
about organizational problems. A 19-year-old who has never shipped software cannot do
useful requirements analysis or stakeholder mapping. But a 19-year-old who just finished
building and deploying a tested application in IS 218 can look at a business problem
and say, "OK, I know what's possible and what's hard — now what does the user actually
need?"

Similarly, IS 219 (Systems/Infrastructure) comes after IS 265 (Organizations/Problems).
Reason: understanding *why* systems need to be resilient and observable is motivation
for learning *how*. After spending a semester in organizational contexts where systems
fail and data is messy (IS 265), students arrive in IS 219 motivated to learn Linux,
containers, and monitoring — not as abstract skills but as practical necessities.

## The Complete Degree (Summary)

### Core Studio Spine (24 credits)
8 studio courses, one per semester, cohort cap 20-25.

### Technical Foundation (~18 credits)
- MATH 111 or equivalent: Calculus I
- MATH 211 or DS 110: Linear Algebra
- CS 100: Intro to Computer Science (Python)
- CS 114: Data Structures & Algorithms
- MATH 226: Discrete Analysis
- DS 100: Probability & Statistics

### Applied AI Courses (~15 credits)
- IS 350: AI Ethics, Governance & Society (Year 2, required)
- IS 247: Designing the User Experience (Year 2, required)
- IS 392: Applied AI & Language Systems (Year 3, required)
- IS 465: Machine Learning for Enterprise AI (Year 3/4, required)
- IS 480: AI Quality & Reliability Engineering (Year 4, required)

### Enterprise & Professional (~9 credits)
- IS 375: Service Learning Clinic (Center for Enterprise AI)
- IS 491: Industry Practicum
- IS 448: Advanced Topics in Enterprise AI (elective)

### General Education (~30 credits)
Standard NJIT gen-ed requirements, with recommended choices:
- Philosophy / Ethics (reinforces moral reasoning)
- Psychology / Cognitive Science (reinforces UX + inquiry)
- Technical Writing / Communication (reinforces translation)
- History / Political Science (reinforces context + critical thinking)

## The Student Profile: From Remediation to Leadership

The typical entering student:
- 18 years old, public school graduate
- Possibly on academic probation, warning, or OARS
- Cannot afford paid software subscriptions
- Has never used a terminal, Git, or a code editor
- Has been told they should "learn to code" but has limited clear sense of what that means
- Smart, motivated, but undersupported

The graduating student:
- Can navigate Linux environments, build and deploy software, and debug production issues
- Can build AI-powered systems with evaluation evidence and safe failure modes
- Can frame problems, write requirements, design architecture, and present tradeoffs
- Can reason about ethics, risk, and governance in AI contexts
- Has a portfolio of 8 shipped projects — one per semester — that demonstrate progressive mastery
- Can walk into a company and operate as a junior AI product engineer or AI software engineer
- Has practiced leadership: presenting at Demo Day, defending decisions, writing postmortems
- Knows enough to be the "CEO of agents" — not writing every line, but directing, evaluating,
  and taking responsibility for AI-powered work

This is a four-year transformation from digital illiteracy to technical leadership.
It is not easy. It is not inflated. It is realistic, grounded, and designed for
students who need the most support to achieve the most growth.

## The Center for Enterprise AI

The Center is the bridge between the classroom and the world. Its functions:

1. **Public AI Training:** Advanced students (juniors/seniors) teach introductory AI
   workshops to the public, local businesses, and community organizations. Teaching
   is the highest form of learning.

2. **Industry Projects:** Real companies bring real problems. Student teams (supervised)
   build real solutions. This is not make-believe — it's scoped, contracted, and
   delivered.

3. **Demo Day:** Every semester, every capstone team presents to industry judges using
   a structured rubric (not "best demo wins" but evidence-based evaluation of
   engineering quality, product thinking, and responsible AI).

4. **Research Incubation:** Faculty research (including Neural Fabric — local LLM +
   graph + vector + observability for mission-critical AI) feeds directly into
   curriculum and student projects.

5. **Community Partnerships:** Local nonprofits and government agencies get AI
   capability they couldn't otherwise afford; students get real-world experience
   with messy data and real stakeholders.

## What Makes This Different

1. **Human capabilities are not optional.** They are explicitly named, taught, assessed,
   and accumulated. Every course has a Human Edge component that carries real grade weight.

2. **Studio, not lecture.** 20-25 students, building real things, every semester. This is
   how professionals actually learn.

3. **Portfolio, not transcript.** Employers see 8 shipped projects with increasing
   sophistication, not a GPA and a list of course names.

4. **Remediation as a feature.** We take students from wherever they are. The freshman
   year is explicitly designed to build from zero. This is not a weakness — it's the
   proof that the program works.

5. **AI-native but AI-skeptical.** Students use AI tools from Day 1, but they also learn
   to verify, evaluate, and override AI. They learn *how* AI works well enough to know
   when it doesn't.

6. **Enterprise-grounded.** Not academic ML papers. Not toy datasets. Enterprise data is
   messy, enterprise systems are legacy, enterprise stakeholders are political. We train
   for that reality.
