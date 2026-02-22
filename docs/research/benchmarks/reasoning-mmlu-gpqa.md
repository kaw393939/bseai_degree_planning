# Search Results: MMLU MMLU-Pro GPQA Diamond benchmark progression scores 2022 2023 2024 2025 2026 GPT-4 Claude Gemini saturation

**Date:** 2026-02-21 19:57:12

## Answer

Here’s a compact, sourced snapshot of how GPT‑4 (and successors), Claude, and Gemini have progressed on MMLU, MMLU‑Pro, and GPQA‑Diamond from 2022–2026, plus what “saturation” looks like.

Context on 2022
- GPT‑4, Claude 3/3.5, and Gemini were not yet released, so comparable official scores for these models don’t exist in 2022.

MMLU (original, 57 subjects)
- 2023
  - GPT‑4: 86.4% (OpenAI technical report). ([arxiv.gg](https://arxiv.gg/abs/2303.08774?utm_source=openai))
  - Gemini Ultra 1.0: 90.0% (Google’s launch blog; first to exceed “human‑expert” in their setup). ([blog.google](https://blog.google/innovation-and-ai/technology/ai/google-gemini-ai/?utm_source=openai))
- 2024
  - Claude 3 Opus: 86.8% (reported by Anthropic; covered in InfoQ’s release report). ([infoq.com](https://www.infoq.com/news/2024/03/anthropic-claude-ai/?utm_source=openai))
  - Note: two lines of work highlighted limits/contamination in classic MMLU and introduced fixes (see “Saturation” below). ([arxiv.org](https://arxiv.org/abs/2406.04127?utm_source=openai))
- 2025–2026 (indicative)
  - OpenAI’s o3 reports 93.4% on MMLU (OpenAI “open models” page). Frontier models cluster in the low‑to‑mid 90s, leaving little headroom on the original set. ([openai.com](https://openai.com/open-models/?utm_source=openai))

MMLU‑Pro (harder, 10‑option, NeurIPS 2024)
- 2024 (initial public results)
  - Claude 3.5 Sonnet: 76.1%; GPT‑4o: 72.6%; Gemini 1.5 Pro: 69.0% (authors’ GitHub mini‑leaderboard). ([github.com](https://github.com/TIGER-AI-Lab/MMLU-Pro?utm_source=openai))
  - Paper motivation and properties (drop of ≈16–33 pts vs MMLU; more robust to prompting) documented in the NeurIPS paper. ([arxiv.org](https://arxiv.org/abs/2406.01574?utm_source=openai))
- 2025–2026 (indicative)
  - Independent leaderboards report top scores around ~90% (e.g., late‑2025 Gemini 3 Pro ≈90.1%), suggesting MMLU‑Pro is now differentiating frontier models but already nearing a ceiling. Treat these as “reported” rather than uniformly standardized. ([llmdb.com](https://llmdb.com/benchmarks/mmlu-pro?utm_source=openai))

GPQA‑Diamond (graduate‑level STEM)
- Late 2023 baseline
  - GPT‑4: 39% when GPQA was released (paper’s OpenReview page). ([openreview.net](https://openreview.net/forum?id=Ti67584b98))
- 2024
  - Claude 3 Opus: ~60% (noted by GPQA authors on OpenReview, March 2024). ([openreview.net](https://openreview.net/forum?id=Ti67584b98))
  - OpenAI o1 (Dec 17, 2024 snapshot): 75.7% (OpenAI post). ([openai.com](https://openai.com/index/o1-and-new-tools-for-developers/?utm_source=openai))
- 2025
  - OpenAI o3: 83.3% (OpenAI “open models” page). ([openai.com](https://openai.com/open-models/?utm_source=openai))
  - Several labs subsequently report mid‑80s to ~90%+ on independent leaderboards; these are not all standardized but illustrate the rapid rise through 2025–early 2026. Use with caution. ([llmdb.com](https://llmdb.com/benchmarks/gpqa?utm_source=openai))
- 2026 (indicative)
  - Frontier models commonly cluster in the mid‑80s to low‑90s on GPQA‑Diamond in public reports, with some claims above that; verification standards differ across sources. ([epoch.ai](https://epoch.ai/data-insights/self-reported-gpqa?utm_source=openai))

Saturation: what changed and why new variants appeared
- Classic MMLU is widely considered “saturated” at the frontier:
  - “Are We Done with MMLU?” documents label errors and shows that cleaning/re‑annotation (MMLU‑Redux) shifts scores/rankings, underscoring limits of the original set. ([arxiv.org](https://arxiv.org/abs/2406.04127?utm_source=openai))
  - MMLU‑CF (Contamination‑Free) shows much lower scores for strong models (e.g., GPT‑4o ≈71.9% 0‑shot; 73.4% 5‑shot on the closed test), indicating that leakage and benchmark aging inflated classic MMLU numbers. ([arxiv.org](https://arxiv.org/abs/2412.15194?utm_source=openai))
  - MMLU‑Pro (NeurIPS 2024) increased difficulty (10 choices; more reasoning) and initially produced mid‑60s to mid‑70s for frontier models, restoring headroom. ([arxiv.org](https://arxiv.org/abs/2406.01574?utm_source=openai))
- GPQA‑Diamond started truly hard (GPT‑4 at 39% in Nov 2023) but saw extremely fast gains (Opus ~60% Mar 2024; OpenAI o1 ≈75.7% Dec 2024; o3 83.3% in 2025), with multiple labs later reporting ~85–92% by late‑2025/2026. This clustering suggests GPQA‑Diamond itself is approaching a ceiling for the newest models. ([openreview.net](https://openreview.net/forum?id=Ti67584b98))

Quick takeaways by year
- 2023: Step change on MMLU (GPT‑4 86.4; Gemini Ultra 90.0). GPQA‑Diamond exposes large frontier gap (GPT‑4 39%). ([arxiv.gg](https://arxiv.gg/abs/2303.08774?utm_source=openai))
- 2024: Claude 3 Opus reaches ~60% on GPQA‑Diamond; MMLU‑Pro launches to counter MMLU saturation. ([openreview.net](https://openreview.net/forum?id=Ti67584b98))
- 2025: Reasoning‑focused models push GPQA‑Diamond into the 75–85% range on official posts (o1/o3), with independent claims near/above 90%; MMLU‑Pro leaders reported around ~90%. ([openai.com](https://openai.com/index/o1-and-new-tools-for-developers/?utm_source=openai))
- 2026: On all three, the frontier is tightly clustered at high scores; new, harder and decontaminated evaluations (MMLU‑CF/MMLU‑Redux; new STEM/agent benchmarks) are increasingly necessary to distinguish models. ([arxiv.org](https://arxiv.org/abs/2412.15194?utm_source=openai))

If you want, I can turn this into a simple CSV by benchmark × year × model with only officially published numbers (and a separate column for “reported/independent” scores).
