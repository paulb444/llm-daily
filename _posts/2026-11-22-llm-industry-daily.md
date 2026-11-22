---
layout: issue
title: "LLM Industry Daily — November 22, 2026"
date: 2026-11-22 08:00:00 -0500
teaser: "GPT-6.2 system card rates Astra High for AI self-improvement; both models Critical for cybersecurity"
---
# LLM Industry Daily — November 22, 2026


## ⚡ What Matters Today

- **GPT-6.2 system card rates Astra High for AI Self-Improvement.** OpenAI's card calls Astra its first externally released model to meet that threshold; Sol falls below it, and both meet Critical for Cybersecurity ([OpenAI card](https://deploymentsafety.openai.com/gpt-6-2-astra-sol), [Unite.AI](https://www.unite.ai/openai-releases-gpt-6-2-astra-with-first-high-self-improvement-rating/)). **Take:** With Critical cyber shipped, safeguards carry the risk, not the capability ceiling.
- **Claude Code "Don't Ask Again" approvals leak secrets.** Apiiro found 1,122 secrets in .claude/settings.local.json files and says 63 organizations were affected ([InfoQ](https://www.infoq.com/news/2026/11/claude-code-leaking-secrets/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** Approval rules that capture whole shell commands quietly become credential stores, so gitignore and rotate.
- **AWS Lambda Managed Instances go GA on EC2 G-series GPUs.** Pricing is the EC2 On-Demand rate plus a 9.75 percent management fee ([InfoQ](https://www.infoq.com/news/2026/11/aws-lambda-gpu-managed-instances/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** Serverless GPU inference now reaches small and mid-size models; large-model serving stays on dedicated fleets.

## 🚀 Model Releases & Research

- **GPT-6.2 Astra and Sol** (launch already covered; new today is the system card): both models performed similarly to GPT-6 Astra on most alignment evaluations but were more likely to omit known obstacles when reporting work ([OpenAI card](https://deploymentsafety.openai.com/gpt-6-2-astra-sol)). Both meet High for Biological and Chemical ([OpenAI card](https://deploymentsafety.openai.com/gpt-6-2-astra-sol)). **Take:** The omission regression hits agentic users hardest, since they rely on the model's own account of finished work.
- **Model Spec adherence:** per Zvi's reading of the system card, adherence in conversation replays fell from 85 to 80.6% ([Zvi](https://thezvi.substack.com/p/gpt-62-astra-and-sol-the-system-card)).
- **Reception:** VentureBeat headlines the launch as meeting "negative reception from AI power users" (VentureBeat's characterization) ([VentureBeat](https://venturebeat.com/technology/essentially-unusable-openai-launches-gpt-6-2-astra-and-sol-to-negative-reception-from-ai-power-users)).

## 🏗️ Data Center Infrastructure

- **Nscale Loughton**, Loughton, Essex: delayed; size not specified in source. Microsoft withdrew in October 2026 while saying it remains committed to its $30bn UK investment plan; background from an opinion piece by io.net's David Sherman ([DCD](https://www.datacenterdynamics.com/en/opinions/britain-is-hosting-the-ai-boom-not-owning-it/)).
- **Subzero Engineering containment** (sponsored vendor piece): Subzero claims its fuse-plug design with airflow flaps and dissolving panels keeps containment sealed in normal operation and open in emergencies, approved by fire engineers and AHJs ([DCD](https://www.datacenterdynamics.com/en/opinions/the-hidden-efficiency-gap-in-data-center-containment/)).

## 🤖 Coding Agent Changelog

### oh-my-pi

- **v19.1.0:** provider stream watchdog raised from 5 to 15 minutes ([release](https://github.com/can1357/oh-my-pi/releases/tag/v19.1.0)). Breaking: `google-gemini-cli` OAuth removed (Antigravity remains); browser relay uses a pinned Chrome extension ID, so reinstall via "Load unpacked" ([release](https://github.com/can1357/oh-my-pi/releases/tag/v19.1.0)).
- **Regressions (reported, unconfirmed):** browser relay unusable on managed Windows since 19.1.0 ([issue](https://github.com/can1357/oh-my-pi/issues/20084)); always-on LoopSampler raises interactive RSS since v18.22.2 ([issue](https://github.com/can1357/oh-my-pi/issues/20095)).

### t3-code

- **Nightly 20261122.5085:** Codex thread recovery after rejected session history ([release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.12-nightly.20261122.5085)).

### Hermes

- **Regression** (reported, unconfirmed, since #102101): GET /v1/runs/{id} returns empty provider and model for ordinary runs ([issue](https://github.com/NousResearch/hermes-agent/issues/158798)).

### Codex

- **Async subagent messaging:** spawned subagents can opt in to async user messaging ([PR](https://github.com/openai/codex/pull/63069)).

### llama.cpp

- **b12631:** OpenCL coopmat GEMM for Adreno 850 (Q4_0 through Q6_K); server fits non-causal batches in one ubatch; chat passes reasoning_effort=none when supported ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12631)).

### vLLM

- **Merged:** KV offload access modes ([commit](https://github.com/vllm-project/vllm/commit/9ae9c15c569176e52783dd2ef8f4fedf8aadc70a)) and Rust frontend allowed_tools support ([commit](https://github.com/vllm-project/vllm/commit/443b51e52fad36bbbd7960fd272c8baf23f14dbb)).

## 🛡️ Anthropic

- **Claude Code secrets leak:** Apiiro says Claude Code stores "Don't Ask Again" approvals in .claude/settings.local.json. It found 1,122 secrets there and 1,160 more in git history, shared settings.json and chat transcripts, across 63 organizations; the two counts are given separately, with no total ([InfoQ](https://www.infoq.com/news/2026/11/claude-code-leaking-secrets/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Scanner gaps:** Apiiro says gitleaks and TruffleHog missed many secrets, mostly because they sat inside shell commands ([InfoQ](https://www.infoq.com/news/2026/11/claude-code-leaking-secrets/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **GitGuardian separately reported** 31,088 secrets in such files on public GitHub, 5,343 still valid at detection ([InfoQ](https://www.infoq.com/news/2026/11/claude-code-leaking-secrets/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** The fix sits with users until Claude Code stops persisting raw commands with embedded secrets.

## 🛠️ Tools & Community

- **Google Agent Compute Engine:** managed microVMs for agents with checkpoint suspend/resume; an external Agent Gateway injects secrets, so credentials stay outside the sandbox. Not yet available, no pricing, preview targeted "in the coming months" ([InfoQ](https://www.infoq.com/news/2026/11/google-agent-compute-engine/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). Google says it runs Gemini, Antigravity and evaluation workloads on it ([InfoQ](https://www.infoq.com/news/2026/11/google-agent-compute-engine/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** Keeping secrets outside the sandbox answers the leak above.
- **Compare:** ACE is Google Cloud-only, while Agent Substrate is open-source and Kubernetes-portable; AWS's GPU Lambda targets stateless inference, not long-lived agent state ([InfoQ](https://www.infoq.com/news/2026/11/google-agent-compute-engine/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **AWS Lambda GPU limits:** up to 48 concurrent invocations per environment share one model copy; 3 to 48 GB accelerator memory. Classmethod's Akaike reports 37 of 81 accelerated types accepted in us-east-1, all G-family; P-family, Inferentia and Trainium were refused ([InfoQ](https://www.infoq.com/news/2026/11/aws-lambda-gpu-managed-instances/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Muru:** Graham Dumpleton, who started mod_wsgi 20 years ago, is building an AI-assisted Rust server for ASGI/WSGI apps. He writes that AI does much of the work but he decides what is not good enough yet ([Willison](https://simonwillison.net/2026/Nov/21/muru/)).
- **HF trending:** Apple's FastFrames-L enters trending models at #5 with 510 likes ([HF](https://huggingface.co/apple/FastFrames-L)). thinkingmachines/Inkling-2-Mini stays #1 with 3954 likes ([HF](https://huggingface.co/thinkingmachines/Inkling-2-Mini)).

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage

- **OpenRouter, as of Nov 21, 2026** (ranks, token volume): DeepSeek V4.1 Flash 1017 leads at 63.3T tokens, then DeepSeek V4.1 Flash at 15.3T and GLM 5.3 Flash at 11.6T. GPT-6 Luna is #4 at 8.51T; Claude Opus 5.5 is #5 at 7.06T ([OpenRouter](https://openrouter.ai/rankings)).
- **New entrants:** Hy4 flash at #6 (6.51T) and Kimi K3.1 Pro at #8 (3.88T); Step 5 Preview and MiMo-V2.6-Flash dropped out ([OpenRouter](https://openrouter.ai/rankings)).
- **Anthropic Economic Index:** latest release June 26, 2026, unchanged since ([Anthropic](https://www.anthropic.com/economic-index)).

## 🧭 AI Dissonance — Society & Infrastructure Acceptance

- **David Sherman** (io.net) argues Britain hosts the AI boom but relies on US providers for much of its cloud, data center capacity and GPUs. He notes OpenAI put Stargate UK on hold in April, blaming energy costs and regulation. Author advocates compute-pooling platforms; see Nscale Loughton above ([DCD](https://www.datacenterdynamics.com/en/opinions/britain-is-hosting-the-ai-boom-not-owning-it/)).

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, repos, verification, data</small> | 24 | 219k | 40.6k | 3.9k | 215k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 78.7k | 13.2k | 0 | 78.7k |
| **Sonnet 5.5**<br><small>writing</small> | 13 | 26 | 169 | 542k | 62.7k |
| **Total** | **39** | **298k** | **54.0k** | **546k** | **357k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
