# Search Results: GAIA benchmark tau-bench autonomous AI agent tasks 2024 2025 2026 METR task horizon doubling time RE-Bench

**Date:** 2026-02-21 20:04:36

## Answer

Here’s a concise crosswalk of the agent benchmarks you mentioned and the most recent status as of February 22, 2026.

- GAIA (General AI Assistants)
  - What it measures: end-to-end “real-world” assistant skills that require multi‑step reasoning, web browsing, tool use, and some multimodality. Initial paper reported humans ~92% vs GPT‑4 (with plugins) ~15%. Dataset and official leaderboard are hosted by the GAIA team on Hugging Face. ([arxiv.org](https://arxiv.org/abs/2311.12983?utm_source=openai))
  - Recent results: Multiple labs have public claims of 60–75% on GAIA; for example H2O.ai announced 65% in Dec 2024 and later blogged 75% in Mar 2025. Check the HF leaderboard for the current canonical standings, as they change frequently. ([h2o.ai](https://h2o.ai/company/press-releases/ai-is-only-30-away-from-matching-human-level-generalintelligence-on-gaia-benchmark/?utm_source=openai))

- τ‑bench (TAU‑bench: Tool‑Agent‑User)
  - What it measures: multi‑turn, tool‑calling agents completing realistic tasks in deterministic backends (initially “Airline” and “Retail” domains). Scores are Pass@k with database‑state checks; public leaderboards show model+scaffold combinations. ([tau-bench.com](https://www.tau-bench.com/?utm_source=openai))
  - Notable updates: The maintainers removed a “Few‑Shot” agent leaderboard on Dec 8, 2025 due to demo‑file leakage; only the valid tool‑calling scaffold remains. An expanded τ²‑bench adds more domains (e.g., telecom) and user‑simulation support. ([hal.cs.princeton.edu](https://hal.cs.princeton.edu/taubench_airline?utm_source=openai))

- METR “task‑completion time horizon”
  - What it measures: the longest task duration (by expert human time) at which an AI agent hits a target reliability (e.g., 50% success), across >200 realistic software/engineering tasks. ([metr.org](https://metr.org/time-horizons?utm_source=openai))
  - Latest trend (Time Horizon 1.1, published Jan 29, 2026; dashboard updated Feb 6, 2026):
    - Overall 2019–2025 frontier doubling time ≈ 196 days.
    - Since 2023: ≈ 131 days.
    - Since 2024: ≈ 89 days (faster recent growth).
    - TH1.1 expanded the suite to 228 tasks (31 are 8h+), and switched infra from Vivaria to Inspect. ([metr.org](https://metr.org/blog/2026-1-29-time-horizon-1-1/?utm_source=openai))

- RE‑Bench (Research Engineering Benchmark, “R&D agents vs humans”)
  - What it measures: 7 open‑ended ML research‑engineering environments with 61 human experts (71×8‑hour attempts) as baseline. Findings: best agents score ~4× humans at 2‑hour budgets, humans narrowly exceed top agents at 8 hours, and at 32 hours humans are ~2× top agent scores. Full environments and human data are open‑sourced. ([arxiv.org](https://arxiv.org/abs/2411.15114?utm_source=openai))

- AgentRE‑Bench (Reverse Engineering)
  - What it measures: long‑horizon reverse‑engineering of synthetic ELF x86‑64 binaries using Linux tooling; fully deterministic scoring for chains of 10–25 tool calls. Distinct from RE‑Bench above. ([agentre-bench.ai](https://www.agentre-bench.ai/?utm_source=openai))

How to choose
- If you want “can an assistant actually do my complicated task end‑to‑end?” look at GAIA.
- If you care about multi‑turn tool use with strict state verification in real domains, use τ‑bench/τ²‑bench.
- If you want a single progress number tied to task duration and reliability (and a growth rate), use METR’s time horizon.
- If you’re evaluating autonomous R&D capability (human‑competitive over hours), use RE‑Bench; for software reverse‑engineering agents, use AgentRE‑Bench. ([arxiv.org](https://arxiv.org/abs/2311.12983?utm_source=openai))

Want me to fetch the current GAIA or τ‑bench leaderboards, or compare two specific models on these?
