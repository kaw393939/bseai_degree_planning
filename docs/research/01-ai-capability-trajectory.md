# AI Capability Trajectory: Benchmarks 2020–2026

> All benchmark data consolidated. Every number has a source link. Where vendor self-reports differ from independent evaluation, that is noted.

---

## 1. SWE-bench (Software Engineering)

Measures AI ability to resolve real GitHub issues in Python repos. "Verified" = 500 curated tasks (gold standard). "Pro" = 1,865 multi-language tasks (harder, newer).

### SWE-bench Verified — Year-by-Year Progression

| Year | Model / System | Score | Source |
|------|---------------|-------|--------|
| 2023 | Claude 2 (best baseline) | 1.96% | [openreview.net](https://openreview.net/pdf?id=VTF8yNQM66) |
| 2024 | SWE-agent (GPT-4) | 12.47% (Full) | [swebench.com](https://www.swebench.com/) |
| 2024 | GPT-4o + best scaffold | 33.2% (Verified) | [openai.com](https://openai.com/index/introducing-swe-bench-verified/) |
| 2025 | Claude Sonnet 4.5 | 77.2% (Verified) | [anthropic.com](https://www.anthropic.com/news/claude-sonnet-4-5) |
| 2025 | Claude Opus 4.5 | 80.9% (Verified) | [itpro.com](https://www.itpro.com/technology/artificial-intelligence/anthropic-announces-claude-opus-4-5-the-new-ai-coding-frontrunner) |
| 2025 | GPT-5 | 74.9% (Verified) | [openai.com](https://openai.com/index/introducing-gpt-5-for-developers) |
| 2025 | GPT-5.2 | 80.0% (Verified) | [openai.com](https://openai.com/index/introducing-gpt-5-2/) |
| 2026 | Claude Opus 4.6 | 81.42% (Verified) | [anthropic.com](https://www.anthropic.com/news/claude-opus-4-6) |
| 2026 | Gemini 3.1 Pro | 80.6% (Verified) | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |
| 2026 | Sonar Foundation Agent | 79.2% (Verified) | [sonarsource.com](https://www.sonarsource.com/company/press-releases/sonar-claims-top-spot-on-swe-bench-leaderboard/) |

**Trajectory:** 1.96% → 33% → 80%+ in approximately 3 years. The benchmark is approaching saturation on the Verified split.

### SWE-bench Pro (harder, multi-language)

| Model | Score | Source |
|-------|-------|--------|
| GPT-5.2 | 55.6% | [openai.com](https://openai.com/index/introducing-gpt-5-2/) |
| GPT-5.3-Codex | 56.8% | [openai.com](https://openai.com/index/introducing-gpt-5-3-codex/) |
| Gemini 3.1 Pro | 54.2% | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |

**Caveat:** All SWE-bench scores are scaffold-sensitive. Different agent harnesses produce different results with the same model. Prefer official leaderboard entries over press claims. ([swebench.com](https://www.swebench.com/))

---

## 2. Reasoning Benchmarks (MMLU, MMLU-Pro, GPQA Diamond)

### MMLU (57-subject, 4-choice — largely saturated)

| Year | Model | Score | Source |
|------|-------|-------|--------|
| 2022 | Chinchilla | 67.5% | [arxiv.org](https://arxiv.org/abs/2203.15556) |
| 2023 | GPT-4 | 86.4% | [ar5iv.org](https://ar5iv.org/pdf/2303.08774.pdf) |
| 2025 | o1 | 90.8% | [openai.com](https://openai.com/index/o1-and-new-tools-for-developers/) |
| 2025 | o3 | ~92–93% | [openai.com](https://openai.com/open-models/) |

**Status:** Saturated. Scores cluster high-80s to low-90s. Known issues: ~6.5% label errors, contamination, format sensitivity. ([arxiv.org](https://arxiv.org/abs/2406.04127)) MMLU-Pro (10-choice, harder) still discriminative through early 2026. ([crfm.stanford.edu](https://crfm.stanford.edu/2025/03/20/helm-capabilities.html))

### GPQA Diamond (PhD-level STEM, hardest split)

| Year | Model | Score | Source |
|------|-------|-------|--------|
| 2023 | GPT-4 baseline | ~39% | [arxiv.org](https://arxiv.org/abs/2311.12022) |
| 2023 | Human PhD experts | ~65% | [arxiv.org](https://arxiv.org/abs/2311.12022) |
| 2024 | o1 | 77.3% | [openai.com](https://openai.com/index/learning-to-reason-with-llms/) |
| 2025 | o3 | 83.3% | [openai.com](https://openai.com/open-models/) |
| 2025 | GPT-5.1 | 88.1% | [openai.com](https://openai.com/index/gpt-5-1-for-developers/) |
| 2025 | GPT-5.2 | 92.4% | [openai.com](https://openai.com/index/introducing-gpt-5-2/) |
| 2025 | Gemini 3 Pro | 91.9% | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |
| 2026 | Gemini 3.1 Pro | 94.3% | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |

**Status:** Approaching saturation (scores near or above expert-human). 39% → 94% in ~2.5 years.

---

## 3. Humanity's Last Exam (HLE)

Published in *Nature*, January 28, 2026. 2,500 questions designed to remain hard for frontier LLMs. ([nature.com](https://www.nature.com/articles/s41586-025-09962-4))

| Model | Score | Source |
|-------|-------|--------|
| GPT-4o | 2.7% | [lastexam.ai](https://lastexam.ai/) |
| o1 | 8.0% | [lastexam.ai](https://lastexam.ai/) |
| GPT-5 | 25.3% | [lastexam.ai](https://lastexam.ai/) |
| Grok 4 | 24.5% | [lastexam.ai](https://lastexam.ai/) |
| Gemini 3 Pro | 38.3% | [lastexam.ai](https://lastexam.ai/) |
| Gemini 3.1 Pro | 44.4% (no tools) | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |
| Ensembles + tools | >50% | [prnewswire.com](https://www.prnewswire.com/news-releases/sup-ai-sets-new-benchmark-record-with-52-15-on-humanitys-last-exam-302637675.html) |

**Trajectory:** 2.7% → 44.4% in roughly one year. Ensembles already >50%.

---

## 4. Math Competition (MATH, AIME, IOI)

| Year | Benchmark | Model | Score | Source |
|------|-----------|-------|-------|--------|
| 2022 | MATH | Minerva | 50.3% | [research.google](https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/) |
| 2024 | MATH | o1 | 94.8% | [openai.com](https://openai.com/index/learning-to-reason-with-llms/) |
| 2024 | AIME 2024 | GPT-4o | ~12% (1.8/15) | [openai.com](https://openai.com/index/learning-to-reason-with-llms/) |
| 2024 | AIME 2024 | o1 | 74% (pass@1) | [openai.com](https://openai.com/index/learning-to-reason-with-llms/) |
| 2025 | AIME 2025 | o4-mini (w/ tools) | 99.5% | [openai.com](https://openai.com/index/introducing-o3-and-o4-mini/) |
| 2025 | AIME 2025 | GPT-5.2 (no tools) | 100% | [openai.com](https://openai.com/index/introducing-gpt-5-2/) |
| 2025 | IOI 2024 | o3 | Gold medal | [arxiv.org](https://arxiv.org/abs/2502.06807) |

---

## 5. ARC-AGI (Abstract Reasoning)

Measures novel reasoning / skill acquisition efficiency. Humans >95% at ~$5/task. ([arcprize.org](https://arcprize.org/))

### ARC-AGI-1

| Year | Model | Score | Cost/Task | Source |
|------|-------|-------|-----------|--------|
| 2020 | GPT-3 | 0% | — | [arcprize.org](https://arcprize.org/blog/oai-o3-pub-breakthrough) |
| 2024 | GPT-4o | 5% | — | [arcprize.org](https://arcprize.org/blog/oai-o3-pub-breakthrough) |
| 2024 | o3 (high compute) | 87.5% | $4,560 | [arcprize.org](https://arcprize.org/blog/oai-o3-pub-breakthrough) |

**Key insight:** 4 years of 0–5%, then a step-function jump to 87.5%. Architecture matters more than scale.

### ARC-AGI-2 (harder, launched 2025)

| Model | Score | Source |
|-------|-------|--------|
| o3 | <30% | [arcprize.org](https://arcprize.org/) |
| GPT-5.2 | 52.9% | [openai.com](https://openai.com/index/introducing-gpt-5-2/) |
| Gemini 3 Pro | 31.1% | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |
| Gemini 3.1 Pro | 77.1% | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |

**Gemini 3.1 Pro jumped +46 percentage points** over 3 Pro on ARC-AGI-2. Humans still >95%.

---

## 6. METR: Autonomous Task Duration (The Acceleration Thesis)

**Source:** Kwa et al., "Measuring AI Ability to Complete Long Tasks," arXiv:2503.14499. ([metr.org](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/))

The length of tasks AI can complete autonomously with 50% reliability has been **doubling at an accelerating rate:**

| Period | Doubling Time | Source |
|--------|--------------|--------|
| 2019–2025 (full dataset) | ~7 months (196 days) | metr.org |
| Since 2023 (TH 1.1) | ~4.3 months (131 days) | metr.org (Jan 29, 2026) |
| Since 2024 (TH 1.1) | ~2.9 months (89 days) | metr.org (Jan 29, 2026) |

### 50% Success Time Horizon by Model

| Model | Year | Approximate Horizon |
|-------|------|-------------------|
| GPT-2 | 2019 | ~4 seconds |
| GPT-3 | 2020 | ~36 seconds |
| GPT-3.5 | 2022 | ~6 minutes |
| GPT-4 | 2023 | ~1 hour |
| GPT-5 + Opus 4.6 | 2025–2026 | (in trend) |

**Extrapolation:** If the 6-year trend continues → month-long autonomous AI by ~2029. If the accelerated 2024–2025 trend continues → ~2027.

> "Even if absolute measurements are off by 10x, that only changes arrival time by ~2 years." — METR

### CRITICAL COUNTERPOINT: METR Developer Productivity Study (July 2025)

**Finding:** Experienced open-source developers using AI tools took **19% longer** than without AI.

**Why this matters for the program:** AI capability ≠ human productivity. Knowing *when and how* to use AI is the skill gap. This directly validates the "Human Edge" thesis.

---

## 7. Agent Benchmarks (GAIA, τ-bench, Real-World)

### GAIA (Multi-tool assistant tasks)

| Year | System | Score | Source |
|------|--------|-------|--------|
| 2024 | GPT-4 + tools | ~15% | [arxiv.org](https://arxiv.org/abs/2311.12983) |
| 2025 | Claude Sonnet 4.5 (best) | 74.6% | [hal.cs.princeton.edu](https://hal.cs.princeton.edu/gaia) |
| — | Humans | ~92% | [arxiv.org](https://arxiv.org/abs/2311.12983) |

### τ-bench Airline (Policy-constrained tool use)

| Year | Best pass^1 | Source |
|------|------------|--------|
| 2024 | <50% | [arxiv.org](https://arxiv.org/abs/2406.12045) |
| 2025 | ~56% (HAL verified) | [hal.cs.princeton.edu](https://hal.cs.princeton.edu/taubench_airline) |
| 2026 | ~73% (τ²-bench, RL-trained) | [arxiv.org](https://arxiv.org/abs/2601.22607) |

### Real-World Reality Check

- **Remote Labor Index:** Top agents automated only **2.5% of real Upwork tasks** (≤3% earnings). ([arxiv.org](https://arxiv.org/abs/2510.26787))
- **HCAST:** 70–80% success on <1-hour tasks, **<20% on >4-hour tasks**. ([arxiv.org](https://arxiv.org/abs/2503.17354))

**Bottom line:** Benchmarks show rapid improvement; real-world automation remains far behind. The gap between benchmark and production is exactly what Enterprise AI graduates must learn to bridge.

---

## 8. Benchmark Saturation Timeline

How fast are the hardest benchmarks being "solved"?

| Benchmark | Released | Time to Practical Saturation | Status (Feb 2026) |
|-----------|----------|------------------------------|-------------------|
| MMLU | 2020 | ~4–5 years | Saturated (~90%+) |
| GPQA Diamond | Nov 2023 | ~2 years | Near-saturated (~94%) |
| SWE-bench Verified | Aug 2024 | ~18 months (not yet ceiling) | ~80%, still climbing |
| HLE | Jan 2026 | TBD | 44% (single model), active |
| ARC-AGI-2 | 2025 | TBD | 77% (best), humans >95% |

**Pattern:** Each successive benchmark is beaten faster. MMLU took ~5 years. GPQA took ~2 years. SWE-bench Verified is at ~80% in 18 months. The benchmark treadmill is accelerating.

---

## 9. Frontier Model Comparison (February 2026)

### SWE-bench Verified (the coding benchmark that matters most)

| Model | Provider | Date | Score | Source |
|-------|----------|------|-------|--------|
| Claude Opus 4.6 | Anthropic | Feb 5, 2026 | 81.42% | [anthropic.com](https://www.anthropic.com/news/claude-opus-4-6) |
| Gemini 3.1 Pro | Google | Feb 2026 | 80.6% | [deepmind.google](https://deepmind.google/models/model-cards/gemini-3-1-pro) |
| GPT-5.2 | OpenAI | Dec 2025 | 80.0% | [openai.com](https://openai.com/index/introducing-gpt-5-2/) |
| Claude Opus 4.5 | Anthropic | Nov 2025 | 80.9% | [itpro.com](https://www.itpro.com/technology/artificial-intelligence/anthropic-announces-claude-opus-4-5-the-new-ai-coding-frontrunner) |
| Claude Sonnet 4.5 | Anthropic | Sep 2025 | 77.2% | [anthropic.com](https://www.anthropic.com/news/claude-sonnet-4-5) |
| GPT-5.1 | OpenAI | Nov 2025 | 76.3% | [openai.com](https://openai.com/index/gpt-5-1-for-developers/) |
| GPT-5 | OpenAI | Aug 2025 | 74.9% | [openai.com](https://openai.com/index/introducing-gpt-5-for-developers) |

### Cross-Benchmark Snapshot (Latest Models)

| Benchmark | Claude Opus 4.6 | GPT-5.3-Codex | Gemini 3.1 Pro |
|-----------|-----------------|---------------|----------------|
| SWE-bench Verified | 81.42% | — | 80.6% |
| SWE-bench Pro | — | 56.8% | 54.2% |
| Terminal-Bench 2.0 | 65.4% | 77.3 | 68.5% |
| GPQA Diamond | — | — | 94.3% |
| ARC-AGI-2 | — | — | 77.1% |
| HLE (no tools) | — | — | 44.4% |
| OSWorld | 72.7% | 64.7 | — |

**Note:** Not all benchmarks are reported for all models. Anthropic's Opus 4.6 launch emphasized Terminal-Bench and OSWorld. OpenAI's GPT-5.3-Codex emphasized SWE-bench Pro and Terminal-Bench. Google's Gemini 3.1 Pro had the broadest benchmark coverage.

### GPT-5.3-Codex: Self-Improvement Milestone

OpenAI's February 2026 technical documentation stated: *"GPT-5.3-Codex is our first model that was instrumental in creating itself. The Codex team used early versions to debug its own training, manage its own deployment, and diagnose test results and evaluations."* ([openai.com](https://openai.com/index/introducing-gpt-5-3-codex/))

This is the first publicly acknowledged instance of a production AI model contributing to its own development cycle.
