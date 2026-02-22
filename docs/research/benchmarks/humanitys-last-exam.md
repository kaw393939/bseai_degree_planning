# Search Results: Humanity Last Exam HLE benchmark AI results 2025 2026 hardest questions frontier models GPT Claude Gemini o3 o4 scores percentage

**Date:** 2026-02-21 19:59:03

## Answer

Here are the latest, verifiable HLE (Humanity’s Last Exam) results I can find as of today (February 22, 2026), plus context.

What HLE is and status
- HLE is a 2,500‑question, multi‑domain, partially multimodal benchmark (about 14% visual; ~24% multiple‑choice), built by CAIS + Scale AI. The finalized 2,500‑question set was posted April 3, 2025, and the paper was published in Nature on January 28, 2026. ([scale.com](https://scale.com/leaderboard/humanitys_last_exam))

Official leaderboard (single models, no tools; temp=0; o3‑mini‑2025‑01‑31 used as judge)
- Top models (Scale SEAL HLE leaderboard; last updated December 17, 2025):
  - Gemini 3 Pro Preview — 37.52% ±1.90 (Calibration Error 57).
  - Claude Opus 4.6 (Thinking Max) — 34.44% ±1.86 (CE 46).
  - GPT‑5 Pro (2025‑10‑06) — 31.64% ±1.82 (CE 49).
  - GPT‑5.2 (2025‑12‑11) — 27.80% ±1.76 (CE 45).
  - GPT‑5 (2025‑08‑07) — 25.32% ±1.70 (CE 50). ([scale.com](https://scale.com/leaderboard/humanitys_last_exam))
- Other frequently asked models:
  - o3 (high, Apr 2025) — 20.32% ±1.58 (CE 34); o3 (medium) — 19.20% ±1.54 (CE 39).
  - o4‑mini (high, Apr 2025) — 18.08% ±1.51 (CE 57); o4‑mini (medium) — 14.28% ±1.37 (CE 59).
  - Gemini 2.5 Pro (Jun 5, 2025) — 21.64% ±1.61 (CE 72).
  - Claude 4.5 Sonnet (Thinking, Sep 29, 2025) — 13.72% ±1.35 (CE 65).
  - o1 (Dec 2024) — 7.96% ±1.06 (CE 83).
  - GPT‑4o (Nov 2024) — 2.72% ±0.64 (CE 89). ([scale.com](https://scale.com/leaderboard/humanitys_last_exam))

Progress from 2025 to 2026 (what the “hardest questions” look like in practice)
- Early 2025 frontier models were mostly in single digits; by late 2025, best single models are in the mid‑30%s—still missing the majority of questions and showing non‑trivial overconfidence. The HLE site notes these remain “low accuracies” with calibration issues, and uses o3‑mini as the judge for auto‑grading; the benchmark’s scope/details above are the current official reference. ([lastexam.ai](https://lastexam.ai/))

Notes on 2026 updates and ensembles
- Verification/clean‑up: a Feb 15, 2026 preprint (“HLE‑Verified”) proposes a systematic verification and revision pass; useful to watch if you need auditability across items, but it doesn’t change the official Scale leaderboard yet. ([arxiv.org](https://arxiv.org/abs/2602.13964?utm_source=openai))
- Ensembles with tools: third‑party orchestrations in late 2025–early 2026 report >50% with tools/ensembling (e.g., Sup AI ~52.15%; Poetiq ~53% depending on mix). These are not the single‑model, no‑tools settings used on the official leaderboard and are self‑reported; treat them as separate settings. ([prnewswire.com](https://www.prnewswire.com/news-releases/sup-ai-sets-new-benchmark-record-with-52-15-on-humanitys-last-exam-302637675.html?utm_source=openai))

Want the full dump (all rows) or a CSV? I can extract the entire Scale SEAL table or filter to specific families (GPT/o‑series, Claude, Gemini) if you tell me which. ([scale.com](https://scale.com/leaderboard/humanitys_last_exam))
