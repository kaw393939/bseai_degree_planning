# Search Results: AI benchmark saturation timeline MMLU saturated GPQA ceiling SWE-bench trajectory years to beat how fast benchmarks solved progression 2023 2024 2025

**Date:** 2026-02-21 20:06:49

## Answer

Below is a compact “how fast did they get solved?” timeline for three widely used reasoning/coding benchmarks. I’ve put concrete dates and the best-available public numbers to show when each benchmark went from “hard” to “mostly solved/ceilinged,” plus what replaced or extended it.

MMLU (Massive Multitask Language Understanding)
- 2023: GPT‑4 reports ~86.4% on MMLU (5‑shot), a jump from prior SOTA and the point many began to call the benchmark “nearly done.” ([automation.jp](https://automation.jp/research-report/2023-03-15-gpt-4-technical-report?utm_source=openai))
- 2024: Researchers document dataset noise and argue classic MMLU is plateauing; MMLU‑Pro (harder, 10‑choice, more reasoning‑focused) is released in June 2024 explicitly because MMLU was no longer discriminative for frontier models. Error audits estimate ~6.49% question errors in MMLU, implying a practical score ceiling well below 100%. ([arxiv.org](https://arxiv.org/abs/2406.04127?utm_source=openai))
- 2025: Evaluation suites (e.g., Stanford HELM) pivot to MMLU‑Pro; top models cluster tightly and the field treats “plain MMLU” as saturated/near‑ceiling, using MMLU‑Pro instead. ([crfm.stanford.edu](https://crfm.stanford.edu/2025/03/20/helm-capabilities.html?utm_source=openai))
- Time to “near‑saturation”: ~3–4 years from MMLU’s 2020 release to late‑2023/2024 plateau; ceiling pressure quantified by the 6.49% error rate. ([arxiv.org](https://arxiv.org/abs/2406.04127?utm_source=openai))

GPQA / GPQA‑Diamond (graduate‑level, “Google‑proof” STEM Q&A)
- Nov 2023 (release): PhD candidates score ~65% (74% when correcting clear mistakes). GPT‑4 baseline is 39%—well below experts. ([arxiv.org](https://arxiv.org/abs/2311.12022?utm_source=openai))
- Dec 2024: OpenAI’s o3 reports ~87–88% on GPQA‑Diamond—an enormous jump within ~13 months of the benchmark’s debut. ([theverge.com](https://www.theverge.com/2024/12/20/24326036/openai-o1-o2-o3-reasoning-model-testing?utm_source=openai))
- 2025: Multiple labs self‑report mid‑80s to high‑80s on GPQA‑Diamond; independent spot‑checks by Epoch AI find those self‑reports consistent with their evaluations (no significant inflation). By this point, GPQA is widely seen as “human‑level surpassed” and increasingly less separating among frontier models. ([epoch.ai](https://epoch.ai/data-insights/self-reported-gpqa?utm_source=openai))
- Time to “near‑saturation”: ~1–2 years (late‑2023 → late‑2024/2025), much faster than MMLU. ([arxiv.org](https://arxiv.org/abs/2311.12022?utm_source=openai))

SWE‑bench (real‑repo software engineering; execution‑verified)
- 2023 → early 2024: Original paper (ICLR 2024) shows best model solves just 1.96% of Full split—genuinely “unsolved.” In March 2024, the first open agent (SWE‑agent) hits ~12.47% on Full. ([openreview.net](https://openreview.net/pdf?id=VTF8yNQM66))
- Aug 13, 2024: “SWE‑bench Verified” (a curated, more reliable 500‑task subset) launches; OpenAI reports GPT‑4o at 33.2% Verified. As of Aug 5, 2024, top agents were ~20% on Full and ~43% on Lite—showing rapid progress but plenty of headroom. ([openai.com](https://openai.com/index/introducing-swe-bench-verified/))
- Feb–Jul 2025: Third‑party and official updates show a steep climb: mini‑SWE‑agent news notes 65% Verified (July 2025). A February 2025 “Bash‑only” sweep reported top models in the mid‑70s% on Verified under a uniform scaffold. ([swebench.com](https://www.swebench.com/))
- Ongoing 2024–2025 hardening/extensions: Multimodal (Oct 2024), Live (rolling monthly additions in 2025), and “Verified/Bash‑only” harnesses are adopted to slow saturation and reduce contamination. ([swebench.com](https://www.swebench.com/))
- Time to “near‑saturation” (on easier/curated splits): ~1–2 years from 2% (early 2024) to 60–75% (mid‑/late‑2025) on Verified; the harder Full/Pro/Live tracks remain less saturated and continue to evolve. ([openreview.net](https://openreview.net/pdf?id=VTF8yNQM66))

What this says about “benchmark saturation speed” (2023 → 2025)
- Pace accelerated: Several marquee benchmarks went from “hard” to “mostly solved” in roughly 12–24 months (GPQA‑Diamond, SWE‑bench Verified), compared with ~3–4 years for classic MMLU. This is one reason the community now rolls benchmarks forward faster (Pro/Verified/Live variants) or automates refreshes. ([arxiv.org](https://arxiv.org/abs/2406.01574?utm_source=openai))
- Ceilings and noise matter: Once frontier scores approach the dataset’s noise/ambiguity rate, further separation becomes meaningless; audits and redesigns (MMLU‑Redux; MMLU‑Pro; adversarial re‑encoding) are used to “unsaturate” tests. ([arxiv.org](https://arxiv.org/abs/2406.04127?utm_source=openai))
- The treadmill is real: Media and research over 2024–2025 note that many static leaderboards became non‑discriminative; labs increasingly cite newer, private, or continuously updated evals. ([vox.com](https://www.vox.com/future-perfect/394336/artificial-intelligence-openai-o3-benchmarks-agi?utm_source=openai))

Quick reference (years to beat/ceiling, with dates)
- MMLU: 2020 → late‑2023/2024 near‑ceiling; replaced in practice by MMLU‑Pro from mid‑2024 onward. ([arxiv.org](https://arxiv.org/abs/2406.01574?utm_source=openai))
- GPQA‑Diamond: Nov 2023 → late‑2024/2025 at ~85–88%+; effectively “human‑level surpassed” within ~1–2 years. ([arxiv.org](https://arxiv.org/abs/2311.12022?utm_source=openai))
- SWE‑bench (Verified split): 1.96% (ICLR 2024 paper) → 33% (Aug 2024, GPT‑4o) → ~65–75% (mid‑/late‑2025), i.e., ~18 months to go from “barely works” to “strong.” Harder/updated splits keep it from fully saturating. ([openreview.net](https://openreview.net/pdf?id=VTF8yNQM66))

If you want, I can turn this into a small tracker (CSV/Google Sheet) with the exact dates/scores per benchmark split and keep it current as new “Pro/Live” variants land.
