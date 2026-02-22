# Search Results: MATH benchmark AIME AMC IOI competition AI performance 2022 2023 2024 2025 2026 GPT o1 o3 o4 Claude mathematical reasoning scores gold medal

**Date:** 2026-02-21 20:00:35

## Answer

Here’s the current, sourced state of play on math/contest-style reasoning for GPT o1/o3/o4 and Anthropic Claude (through Feb 22, 2026). Tell me if you want this expanded into a year‑by‑year table for 2022–2026 or focused on AMC specifically.

- AIME (competition math)
  - o1 (Dec 2024 snapshot): AIME 2024 pass@1 ≈ 79% on the updated o1 release; earlier o1 results averaged 74% pass@1 on AIME 2024 and could reach 93% with large-sample reranking (above the USAMO cutoff). ([openai.com](https://openai.com/index/o1-and-new-tools-for-developers/?utm_source=openai))
  - o3 and o4‑mini (May 2025): With Python tool use, o3 hits 98.4% pass@1 on AIME 2025 (100% at consensus@8); o4‑mini reaches 99.5% pass@1 (100% at consensus@8). OpenAI also shows both as SOTA on AIME 2024/2025 on its model page. Note: these rely on tool use. ([openai.com](https://openai.com/index/introducing-o3-and-o4-mini/?utm_source=openai))
  - Context: pre‑o1 models did much worse—GPT‑4o averaged only ~12% on AIME 2024—so the step from 2023→2024 was large. ([openai.com](https://openai.com/index/learning-to-reason-with-llms/?utm_source=openai))

- MATH benchmark (12.5k competition‑style problems)
  - o1 (Dec 17, 2024): MATH pass@1 ≈ 96.4% on the shipped o1‑2024‑12‑17 snapshot. (Earlier o1 report showed ≈94.8%.) ([openai.com](https://openai.com/index/o1-and-new-tools-for-developers/?utm_source=openai))
  - Anthropic/Claude: Anthropic’s public launch posts for Sonnet/Opus 4.x emphasize coding and agent benchmarks; they note AIME evaluation methodology but don’t publish a single definitive MATH percentage in text on those pages. If you want Claude MATH numbers, I can pull them from the relevant Claude 4.x system cards or papers. ([anthropic.com](https://www.anthropic.com/news/claude-sonnet-4-5))

- IOI (International Olympiad in Informatics) “gold medal” level
  - OpenAI’s competitive‑programming paper reports: o1‑ioi placed around the 49th percentile live at IOI 2024 (under standard constraints) but achieved gold under relaxed constraints; later, o3 achieved IOI‑gold performance under standard competition constraints (no hand‑engineered strategies). ([arxiv.org](https://arxiv.org/abs/2502.06807))

- AMC (AMC 10/12)
  - Public, audited AMC‑10/12 scores are sparse from labs; most official reporting uses AIME rather than AMC. If you need AMC by year/model, I can compile what exists (often third‑party harnesses) with caveats, or run fresh evaluations on specific AMC sets you name.

Would you like:
- a compact table (2022–2026) covering AIME, MATH, and IOI gold thresholds for GPT o1/o3/o4 and Claude, with notes on tool use; or
- deeper AMC coverage (specify AMC 10 vs 12 and years)?
