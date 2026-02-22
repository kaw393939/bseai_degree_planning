# Search Results: SWE-bench Verified benchmark AI coding results 2023 2024 2025 2026 progression scores Claude Sonnet GPT o3 Devin autonomous software engineering resolved percentage

**Date:** 2026-02-21 19:52:40

## Answer

Here’s the clearest year-by-year picture I can give for SWE-bench Verified “% resolved” (notes where a model was tested on a different split or non-comparable setup).

Context
- SWE-bench Verified didn’t exist in 2023; it launched August 13, 2024. On the original 2023 SWE-bench, the baseline was ~1.96% resolved. ([swebench.com](https://www.swebench.com/SWE-bench/?utm_source=openai))

2024
- Aug 13, 2024 — GPT‑4o: 33.2% resolved on SWE‑bench Verified (OpenAI’s own runs). ([openai.com](https://openai.com/index/introducing-swe-bench-verified//?utm_source=openai))
- Oct 22, 2024 — Claude 3.5 Sonnet: 49.0% on SWE‑bench Verified (Anthropic). ([anthropic.com](https://www.anthropic.com/news/3-5-models-and-computer-use/?utm_source=openai))
- Dec 17, 2024 — OpenAI o1 snapshot: 48.9% on SWE‑bench Verified (OpenAI). ([openai.com](https://openai.com/index/o1-and-new-tools-for-developers/?utm_source=openai))
- Note on Devin (Cognition): their widely cited 13.86% result was on SWE‑bench Full, not Verified, and on a 25% subset (79/570 issues). No official Devin score on Verified was published at that time. ([aibusiness.com](https://aibusiness.com/automation/ai-software-engineer-devin-codes-entire-projects-from-single-prompt?utm_source=openai))

2025
- Sep–Oct 2025 — Claude Sonnet 4.5: 77.2% on SWE‑bench Verified (Anthropic system card/announcement). ([anthropic.com](https://www.anthropic.com/news/claude-sonnet-4-5?utm_source=openai))
- Late 2024–2025 — OpenAI o3‑mini: OpenAI reports 39% with the open‑source Agentless scaffold and 61% with an internal tools scaffold, both on a fixed n=477 subset of the Verified tasks (not the full 500), so not directly comparable to leaderboard runs. ([openai.com](https://openai.com/research/openai-o3-mini/?utm_source=openai))
- Jul 2025 (agent baseline) — mini‑SWE‑agent reported 65% on SWE‑bench Verified (bash‑only leaderboard news item). ([swebench.com](https://www.swebench.com/))

2026
- Feb 19, 2026 — Sonar Foundation Agent (SonarSource): 79.2% on SWE‑bench Verified and 52.62% on SWE‑bench Full (company press release; check the official leaderboard to confirm current placement). ([sonarsource.com](https://www.sonarsource.com/company/press-releases/sonar-claims-top-spot-on-swe-bench-leaderboard/?utm_source=openai))
- Feb 2026 — Claude Sonnet 4.6: Anthropic notes its Verified score was averaged over 10 trials and that a prompt tweak pushed results to 80.2% (they also say “thinking off” for the reported score; the exact baseline value isn’t stated in text, but the 80.2% with the prompt mod is). ([anthropic.com](https://www.anthropic.com/news/claude-sonnet-4-6))

Quick takeaways
- From the first Verified release (Aug 2024) to early 2026, top “% resolved” claims moved from ~33% (GPT‑4o) → ~49% (Claude 3.5 Sonnet) → 77.2% (Claude Sonnet 4.5) → ~80% range (Sonnet 4.6 with prompt tweak; some agents also claim ~79%). Methodology and scaffolds matter a lot. ([openai.com](https://openai.com/index/introducing-swe-bench-verified//?utm_source=openai))

Important comparability notes
- “% resolved” depends on the scaffold/agent, cost/step budgets, “thinking” settings, and sometimes even the subset evaluated (e.g., OpenAI’s o3‑mini numbers use a 477‑task subset). Always check methodology lines before comparing headline percentages. ([openai.com](https://openai.com/research/openai-o3-mini/?utm_source=openai))
- Devin’s 13.86% figure is for SWE‑bench Full on a 25% subset and predates Verified; it shouldn’t be compared 1:1 with Verified scores. ([aibusiness.com](https://aibusiness.com/automation/ai-software-engineer-devin-codes-entire-projects-from-single-prompt?utm_source=openai))
- For the current official standings, the SWE‑bench site hosts the authoritative leaderboards (Verified split shows “% resolved” out of 500). ([swebench.com](https://www.swebench.com/))

If you want, I can turn this into a compact table with dates, model names, split, scaffold notes, and “% resolved,” or pull the latest entries directly from the public leaderboard for a live snapshot.
