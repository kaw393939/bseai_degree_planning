# Search Results: GPT-5 o3 o4-mini OpenAI benchmarks SWE-bench MMLU GPQA performance 2025 2026 Codex coding results

**Date:** 2026-02-21 20:26:09

## Answer

Here are the latest official OpenAI-published numbers (as of February 22, 2026):

SWE-bench (Verified; Python, real repo bug-fixes)
- August 7, 2025: GPT-5 74.9% (subset 477/500 used); o3 69.1%; o4‑mini 68.1%. ([openai.com](https://openai.com/index/introducing-gpt-5-for-developers?utm_source=openai))
- November 13, 2025 (all 500 problems, unified harness): GPT‑5.1 76.3%; GPT‑5 72.8%. ([openai.com](https://openai.com/index/gpt-5-1-for-developers/))

MMLU (general knowledge)
- o3: 93.4; o4‑mini: 93.0. Note: OpenAI hasn’t published an MMLU score for GPT‑5; they emphasize other evals. ([openai.com](https://openai.com/open-models/?utm_source=openai))

GPQA (Diamond, no tools)
- GPT‑5: 85.7%; o3: 83.3%; o4‑mini: 81.4%. ([openai.com](https://openai.com/index/introducing-gpt-5-for-developers?utm_source=openai))
- GPT‑5 pro (extended reasoning): 88.4% (state of the art at announcement on August 2025). ([openai.com](https://openai.com/index/introducing-gpt-5/?utm_source=openai))

Codex agentic coding results (2026)
- February 5, 2026 — GPT‑5.3‑Codex (xhigh reasoning):
  - SWE‑Bench Pro (Public; multi‑language): 56.8%
  - Terminal‑Bench 2.0: 77.3%
  - OSWorld‑Verified: 64.7%
  - Cybersecurity CTF: 77.6%
  - SWE‑Lancer IC Diamond: 81.4%
  - GDPval (wins or ties): 70.9%
  These improve on GPT‑5.2/5.2‑Codex and target long‑running, tool‑using coding agents. ([openai.com](https://openai.com/index/introducing-gpt-5-3-codex/))

Notes and comparability
- “High/xhigh reasoning” indicates elevated test‑time compute; results can vary with harnesses and tool access. SWE‑bench Verified vs SWE‑Bench Pro differ (language coverage, contamination resistance, evaluation setup). Refer to each post’s methodology footnotes when comparing. ([openai.com](https://openai.com/index/introducing-o3-and-o4-mini/))

Want this as a compact CSV or table?
