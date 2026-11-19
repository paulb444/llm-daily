---
layout: issue
title: "LLM Industry Daily — November 19, 2026"
date: 2026-11-19 08:00:00 -0500
teaser: "Anthropic prices IPO at 83 dollars a share; ANT begins trading on Nasdaq today"
---
# LLM Industry Daily — November 19, 2026


## ⚡ What Matters Today

- **Anthropic prices IPO at $83.00 a share; ANT trades on Nasdaq today.** Anthropic sold 980,000,000 Class A shares (956,351,354 from the company, 23,648,646 from selling stockholders); the deal closes November 20 ([Anthropic](https://www.anthropic.com/news/anthropic-prices-initial-public-offering)). NPR reports more than $100 billion raised, about $107 billion including private placements ([NPR](https://www.cfpublic.org/2026-11-19/ai-giant-anthropic-raises-more-than-100-billion-in-record-setting-ipo)).
  **Take:** Amazon (14.7%) and Google (13.7%) will be its largest holders and also suppliers, so public investors are underwriting supplier-linked compute demand ([TechCrunch](https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/)).
- **Google ships Gemini 4 Neon at $3/$15 per million tokens with 1M-token context.** Google says it ranks #1 on the Artificial Analysis Coding Agent Index (58.6) and #3 on the Intelligence Index (61) ([DeepMind](https://deepmind.google/blog/introducing-gemini-4-neon/)). Willison notes Gemini 4 Carbon doubles to $4/$20 on December 1 ([Willison](https://simonwillison.net/2026/Nov/18/llm-gemini/)).
  **Take:** The scheduled Carbon increase suggests Google is ending mid-tier discounts while Neon prices below Astra's $8/$40 list ([OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)).
- **OpenAI says its models improved AMD GPU and CPU designs.** OpenAI reports up to 14% PPA improvement over heavily optimized baselines on AMD's flagship GPU IP, and says AMD put some model-generated RTL into a design sent for manufacturing ([OpenAI](https://openai.com/index/advancing-chip-design-with-our-models), [Unite.AI](https://www.unite.ai/openai-reports-model-driven-gains-in-amd-flagship-chip-designs/)).
  **Take:** These are OpenAI's claims with no AMD statement; if they hold, chip design cycles become a compute problem and the challenger gains most.
- **OpenAI says it paces releases, pausing internal training and holding back GPT-6.1 Astra.** It says it has strengthened safeguards since the July Hugging Face incident ([OpenAI](https://openai.com/index/managing-frontier-ai-risk), [BBC](https://www.bbc.com/news/articles/c6wy4xv2mxglo)). Bloomberg reports the prior Astra update was scrapped nearly two months before GPT-6.2 Astra launched ([Bloomberg](https://www.bloomberg.com/news/articles/2026-11-17/openai-unveils-new-astra-ai-model-after-scrapping-prior-release)).
  **Take:** Safety policy now shows up as visible release delays, raising the bar for Anthropic on its IPO day.
- **Huang's exit puts four Nvidia startup deals in doubt, including the $12.9bn Hugging Face acquisition.** The FT says Nvidia was expected to join or lead Thinking Machines Lab and Groq investments, a Reflection AI partnership and the Hugging Face deal ([FT](https://www.ft.com/content/418ca885-fbcf-4b9f-a8b9-2bd60b543fc5), [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/jensen-exit-great-anthropic-says-075013719.html)). Dealroom describes the Groq deal as already struck ([Dealroom](https://dealroom.co/news/173133-nvidia-s-12-9b-hugging-face-deal-in-doubt-as-huang-exit-hits-open-ai/)).
  **Take:** The FT reads this as tilting the balance toward closed labs, with Nvidia also in Anthropic's private placement ([TechCrunch](https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/)).

## 💰 Business & Money

- **Epoch AI:** Anthropic spent nearly $10 billion on compute in Q3 2026, close to $40 billion annualized, up from $433 million in 2023, growing about 4x per year versus OpenAI's roughly 3x ([Epoch AI](https://epoch.ai/data-insights/anthropic-openai-compute-spend-growth)).
- **OpenAI compute plans:** per Epoch AI, citing media reports, OpenAI plans around $750 billion through 2030 ([Epoch AI](https://epoch.ai/data-insights/anthropic-openai-compute-spend-growth)). **Take:** Epoch reports about $5 billion of Anthropic's Q3 spend went to SpaceX, roughly half, making it a frontier compute supplier alongside the clouds.
- **Anthropic S-1 commitments:** $447.5 billion, substantially all for compute and infrastructure, September 2026 through end of 2030, per Epoch's reading of the filing ([Epoch AI](https://epoch.ai/data-insights/anthropic-openai-compute-spend-growth)).
- **Anthropic private placement:** $26 billion of non-voting stock, comprising Google $10 billion and Nvidia $10 billion; amounts for AMD, Broadcom, Micron, Microsoft and TSMC not given ([TechCrunch](https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/)).
- **Nvidia portfolio moves:** per an SEC filing, it sold 93.53 million Nokia shares between July and September, cut Intel by 25% and Synopsys by roughly 10%, and added 7.7 million SpaceX shares, taking its SpaceX stake to $19.68 bn ([DCD](https://www.datacenterdynamics.com/en/news/nvidia-sells-more-than-half-of-nokia-stake/)). Jensen Huang's resignation was announced November 12; CFO Colette Kress is interim CEO ([NVIDIA](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition)).
- **OpenAI** is reportedly in the final stages of a $20bn fundraise, per the FT ([FT](https://www.ft.com/content/418ca885-fbcf-4b9f-a8b9-2bd60b543fc5)).
- **Phononic** raised $100m in debt from Trinity Capital to scale manufacturing of thermoelectric cooling; DCD says it is not yet efficient enough to cool a whole data center and targets components such as lasers and memory ([DCD](https://www.datacenterdynamics.com/en/news/phononic-raises-100m-debt-facility-to-fund-solid-state-cooling-system/)).
- **Racks Central:** Heptamax to acquire it for S$500M (US$387.6M) via reverse takeover; see Data Center Infrastructure.

## 🚀 Model Releases & Research

- **Genie 4** is rolling out to eligible Google AI Ultra subscribers, with mid-session environment edits and real-time native audio ([DeepMind](https://deepmind.google/blog/genie-4-is-now-available/)).
- **Claude protein result:** blog authors Xinming Tu and Leo Tianlai Chen report Claude Fable 5.2 predicts the next amino acid 54% of the time on real proteins versus 9% on shuffled; GPT, Gemini and seven open-weight models stay near zero ([Tu and Chen](http://xinmingtu.cn/blog/2026/claude-opus-5-5-protein-sequences/)).
- **RadixArk DaisyRose-27B:** RadixArk claims Terminal-Bench 4.1 pass@1 rose from 5.6% to 12.0% after RL post-training of Qwen3.8-27B, Apache 2.0 ([HF Blog](https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin)).
- **Reson8 Rumble-2-Flash:** 0.5B-parameter ASR for 40+ languages, Apache 2.0; Reson8 claims a 6.96% average error rate on Open ASR multilingual ([HF Blog](https://huggingface.co/blog/rumble-2-flash)). **Take:** DaisyRose and Rumble-2-Flash both build on Qwen bases, competing on post-training and distillation rather than pretraining ([RadixArk](https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin), [Reson8](https://huggingface.co/blog/rumble-2-flash)).
- **Dharma-AI** previews a paper: a CatBoost regressor predicts SFT time with R² 0.98 on 272 H200 jobs, versus R² 0.31 for a FLOP-based estimate; SFT and H200 only ([HF Blog](https://huggingface.co/blog/Dharma-AI/predicting-fine-tuning-time)).
- **PTP,** a July preprint: authors claim black-box prompt reconstruction by training an inverse model on target-LLM outputs ([arXiv](https://arxiv.org/abs/2607.29378)).
- **HF Daily Papers** (new): LightTAR, 15 upvotes ([HF](https://huggingface.co/papers/2611.17600)); StrideWorld, a world-model benchmark, 9 upvotes ([HF](https://huggingface.co/papers/2611.24408)).

## 🏗️ Data Center Infrastructure

- **Racks Central Singapore**, 23 Tai Seng Drive, about 8MW IT, operational; to be acquired by Heptamax for S$500M (US$387.6M). Its Pasir Gudang, Johor campus could reach 510MW; the first 70MW RCJM1 is fully committed for Q1 2027 ([DCD](https://www.datacenterdynamics.com/en/news/singapores-racks-central-to-be-acquired-in-reverse-merger/)).
- **ChronoScale and STN Odessa campus**, Odessa, Texas, planned; 50/50 JV for an unnamed frontier AI lab, $7.5 billion six-year contract, first phase H1 2027. Campus size not specified in source; an initial 2MW module with 1,024 B300 GPUs deployed summer 2026 ([DCD](https://www.datacenterdynamics.com/en/news/chronoscale-and-stn-form-jv-to-develop-data-center-campus-in-odessa-texas/)).
- **ChronoScale financing:** $750m, of which $250m is equity; DCD does not say whether the up-to-$500m convertible preferred is inside that ([DCD](https://www.datacenterdynamics.com/en/news/chronoscale-and-stn-form-jv-to-develop-data-center-campus-in-odessa-texas/)).
- **PDG TY1**, Saitama, Tokyo, 96MW, under construction; additional $210m green financing from BNP Paribas, ING, OCBC and Société Générale. DCD states $327m total raised for the campus ([DCD](https://www.datacenterdynamics.com/en/news/pdg-secures-additional-210m-for-its-ty1-tokyo-campus/)).
- **NexGen Cloud EU2**, Oulu, Finland, 8MW, operational with GleSYS; NexGen hired Nscale's Dan Thomas as chief infrastructure officer ([DCD](https://www.datacenterdynamics.com/en/news/nexgen-cloud-hires-nscales-dan-thomas-as-chief-infrastructure-officer/)).
- **Microsoft Westgate**, Auckland, New Zealand, under construction since September 2026, accessed from Kakano Road per Microsoft's project page; capacity not specified in source ([DCD](https://www.datacenterdynamics.com/en/news/microsoft-begins-work-on-westgate-data-center-in-new-zealand/)).
- **Mitsubishi Heavy Industries and Sakura Internet** signed a non-binding MoU for modular sovereign AI data centers in Japan; site and size not specified in source ([DCD](https://www.datacenterdynamics.com/en/news/mitsubishi-heavy-industries-and-sakura-internet-sign-mou-to-establish-sovereign-ai-infrastructure-in-japan/)).
- **Viridis Data** launched an off-grid renewable modular model for the UK and Europe; no sites or funding disclosed ([DCD](https://www.datacenterdynamics.com/en/news/viridis-data-launches-touting-offgrid-renewable-powered-data-center-solution/)).
- **Tesla Powercore:** Tesla claims a solid-state transformer system up to 7.4MW at 34.5kV AC, outputting 800VDC to servers, with units operating next year ([DCD](https://www.datacenterdynamics.com/en/news/tesla-unveils-powercore-solid-state-transformer-platform-aimed-at-data-centers/)).
- **California permitting:** DLA Piper's Andrew Brady writes the CEC projects statewide demand rising from roughly 1GW to approximately 4.5GW by 2040, and that a Mitigated Negative Declaration typically takes twelve to eighteen months ([DCD](https://www.datacenterdynamics.com/en/opinions/navigating-ceqa-what-data-center-developers-need-to-know-before-investing-in-california/)).
- Phononic cooling financing: see Business & Money. Nscale Vera Rubin NVL72 rack: see Hardware & Chips.

## ⚙️ Hardware & Chips

- **Anthropic on AMD:** Anthropic told IPO investors Claude Mythos Preview onboarded AMD MI355X GPUs in about three days versus six to 12 months historically, limited to prompt processing for one model; decode not stated ([Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-says-claude-mythos-slashed-software-work-to-onboard-amd-gpus-from-up-to-12-months-to-around-three-days-writing-almost-100-percent-of-kernels-autonomously-chips-away-at-nvidias-cuda-moat)). **Take:** With OpenAI's claimed AMD RTL work ([OpenAI](https://openai.com/index/advancing-chip-design-with-our-models)), models now attack AMD's design and software bring-up, both of which benefit AMD.
- **Epoch AI:** agentic inference capacity of chips sold grew 4.6× from Q2 2025 to Q2 2026 versus 2.6× for peak compute; Blackwell accounts for 74% of the added capacity ([Epoch AI](https://epoch.ai/data-insights/agentic-inference-capacity-growth)). **Take:** Modelled per-GPU gains shrink from 8× (H200 to GB300) to 2.2× (GB300 to VR200), so growth leans on volume.
- **Nscale** brought online its first Nvidia Vera Rubin NVL72 rack on a Dell PowerEdge XE9812; site undisclosed. Nvidia claims Rubin delivers 5x inference and 3.5x training performance versus Blackwell ([DCD](https://www.datacenterdynamics.com/en/news/nscale-brings-nvidia-vera-rubin-nvl72-rack-online/)).
- **Intel** signed an unnamed first external customer for 18A-P, which entered risk production in June ([DCD](https://www.datacenterdynamics.com/en/news/intel-secures-first-external-customer-for-18a-p-process-node/)).
- **RTX Spark desktops** from ASUS, Dell and MSI are on sale: 20-core Grace, Blackwell RTX GPU with 6,144 CUDA cores, up to 128GB unified memory; Nvidia claims up to 1 petaflop of AI performance ([Nvidia](https://blogs.nvidia.com/blog/rtx-spark-desktop-local-ai-available-now/)).
- **Bull Sequana XH31600** blades showed Intel Diamond Rapids packages at SC26, with 16-channel memory and liquid cooling; ServeTheHome's Patrick Kennedy guesses a Q2 2027 launch ([STH](https://www.servethehome.com/bull-shows-intel-xeon-diamond-rapids-package-at-sc26/)).

## 🤖 Coding Agent Changelog

### Claude Code
- **v2.1.328:** auto mode for Opus 4.6 and Sonnet 4.6 on Bedrock, Agent Platform and Foundry; compaction rebuilds the system prompt like /compact; Esc less often lost at permission prompts ([release](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)).
- **Regression** (confirmed, since 2.1.327): subagent effort turned off when Bedrock, Agent Platform or Foundry refused the progress summary's effort setting ([release](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)).

### pi
- **Node 26 or newer** is now required everywhere, decided and merged ([commit](https://github.com/earendil-works/pi/commit/f94add25e898620aef47a67a9660f904aac4ee3e)).
- **Owner-defined project groups** merged ([commit](https://github.com/earendil-works/pi/commit/5a14e69c067d40dfbff4f2fff7d3b34c897e2dc9)).

### oh-my-pi
- **v19.0.0:** built-in MCP transforms; Claude failover recovers once a shared weekly usage limit clears. Breaking: artifact:// links replaced by local://N.log files ([release](https://github.com/can1357/oh-my-pi/releases/tag/v19.0.0)).
- **Regression** (reported, unconfirmed, since v19.0.0): Windows mcp.json fails to parse ([issue](https://github.com/can1357/oh-my-pi/issues/19775)).

### t3-code
- **Nightly 20261119.4928:** agents merge a GitHub PR stack in one go, avoiding repeated CI runs; Claude messages sent mid-turn no longer get lost; other environments' localhost previews open locally in desktop ([release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.11-nightly.20261119.4928)).

### Hermes
- **Canary 20261119:** cache-expiry compaction now summarises on the warm prefix ([release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261119T064637Z)).
- **Merged:** Astra and Sol now listed in OpenRouter and Nous Portal model pickers ([PR](https://github.com/NousResearch/hermes-agent/pull/157769)).

### Codex
- **Merged:** connector results now reach Responses ([PR](https://github.com/openai/codex/pull/62392)); per-sample model overrides for thread/sample, with the 4,000-byte prompt limit removed ([PR](https://github.com/openai/codex/pull/62419), [PR](https://github.com/openai/codex/pull/62378)); Daybreak shown in model discovery ([PR](https://github.com/openai/codex/pull/62499)).

### llama.cpp
- **b12535:** Vulkan stream-k MUL_MAT for coopmat2 splits work across SMs for faster matrix multiplication ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12535)).
- **b12531:** mtmd adds VoxCPM2 audio model support ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12531)).
- **b12530:** WASM relaxed SIMD kernels fixed, q3_K and q6_K added ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12530)).
- **b12529:** fixes sticky NaN values in recurrent model state ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12529)).
- **b12528:** server sleep state fixed for v1/realtime; hardening rejects malformed GGUF configs that index past a fixed array ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12528)).

### vLLM
- **Merged:** online requantization from block-FP8 to MXFP4, reducing memory ([commit](https://github.com/vllm-project/vllm/commit/fd2b7ac40fba94906ad44c84b6a51e77c9fae8a8)).
- **Regression** (reported, unconfirmed, since 11.18 nightly): DSV4.1 per-GPU weight memory up from about 47 GiB to about 60 GiB ([issue](https://github.com/vllm-project/vllm/issues/68647)).
- **Regression** (reported, unconfirmed, since PR #65466): the waiting-requests metric counts unseen requests with TP>1 ([issue](https://github.com/vllm-project/vllm/issues/68610)).

**Take:** Claude Code (system prompt rebuilt on compaction) and Hermes (summarising on the warm prefix) are both making compaction cache-aware; Claude Code and t3-code both fixed lost user input mid-turn ([Claude Code](https://github.com/anthropics/claude-code/releases/tag/v2.1.328), [t3-code](https://github.com/pingdotgg/t3code/releases/tag/v0.1.11-nightly.20261119.4928)).

## 🏢 OpenAI

- **Control Room:** NeoTeo, relaying Cointelegraph, reports it blocks research-job output with up to 35 seconds of delay from cached authorization; the program may keep running ([NeoTeo](https://www.neoteo.com/en/openais-reported-control-room-blocks-research-output)). **Take:** The figure is a reported upper bound on output blocking, not a guaranteed stop time.
- Fundraise: see Business & Money. Risk-management post and chip design: see What Matters Today.

## 🛠️ Tools & Community

- **TrnRT** is an open LLM inference engine for AWS Trainium serving GLM-5.3-Flash at 1M context on one trn2.48xlarge; its repo lists 28.9 requests per minute and $0.040 per million tokens at spot price at decode batch 12 ([GitHub](https://github.com/RunanywhereAI/trnrt)).
- **Transformers MoE expert streaming:** PR #50717 adds an experts_offload option; Ziadé reports 13.9 tok/s on a 32 GB M5 Mac versus 14.8 tok/s for Strata ([HF Blog](https://huggingface.co/blog/moe-expert-streaming)). **Take:** TrnRT and expert streaming both push inference onto non-Nvidia or memory-constrained hardware ([TrnRT](https://github.com/RunanywhereAI/trnrt)).
- **Symposium:** Matsakis says the Rust Foundation toolchain feeds Rust guidance to agents such as Claude Code or Codex, after observing Claude using Rust 2021 and an older Toasty version ([InfoQ](https://www.infoq.com/presentations/rust-ai-symposium-agent-client-protocol/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **HF trending models** (new): Tencent's Hy4-flash ([HF](https://huggingface.co/tencent/Hy4-flash)), Apple's FastFrames-L ([HF](https://huggingface.co/apple/FastFrames-L)) and LongCat-Video-Avatar-1.6 ([HF](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)).

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage
- **OpenRouter, week as of Nov 18, 2026** (rank unchanged for all top eight): DeepSeek V4.1 Flash 1017 at 62.1T tokens, Hy4 flash 46.6T, DeepSeek V4.1 Flash 16T, Hy4 13T, GLM 5.3 Flash 10.9T, GPT-6 Luna 8.62T, Claude Opus 5.5 7.63T, Step 5 Preview 6.39T ([OpenRouter](https://openrouter.ai/rankings)).
- **Anthropic Economic Index:** latest release June 26, 2026, unchanged since ([Anthropic](https://www.anthropic.com/economic-index)).
- **OpenAI research staff:** estimated zero-intervention success on two-to-four-hour tasks rose from 23% in March to 46% in October 2026 ([OpenAI](https://openai.com/index/research-acceleration-jagged-frontier)).
- **OpenAI research staff spend:** median researcher's daily agentic usage at API list prices reached $2,400 in October, up 62% from September ([OpenAI](https://openai.com/index/research-acceleration-jagged-frontier)). **Take:** In an OpenAI survey of 101 research staff, the median would give up 30% of team compute or 40% of headcount to keep frontier coding agents for three months.

## 🎭 Drama & Notable Discourse

- **CAIS** joined the MisAnthropic Statement coalition ahead of the IPO; CAIS alleges Anthropic weakened its Responsible Scaling Policy in February and dropped its unilateral pause commitment, not yet reported by major outlets. Dan Hendrycks: "You cannot credibly claim to be safe while weakening your own previous safety commitments and asking the public for tens of billions of dollars." ([CAIS](https://safe.ai/news/anthropic-is-not-a-safe-ai-company))
- **FLI** argues Anthropic walked back its RSP in 2026 and says the S-1 discloses Claude writing over 90% of its own code ([FLI](https://futureoflife.org/statement/leaders-condemn-anthropic-for-race-to-rsi/)).
- **Kevin Bass** alleges, in an X thread, that METR depends financially on Anthropic via the Good Ventures stake; the thread is unverified ([X thread](https://nitter.cf/kevinnbass/status/2099621874279817638)). **Take:** CAIS and FLI say Anthropic weakened its safety stance ([CAIS](https://safe.ai/news/anthropic-is-not-a-safe-ai-company), [FLI](https://futureoflife.org/statement/leaders-condemn-anthropic-for-race-to-rsi/)), while Bass attacks the safety network itself; the IPO draws fire from both directions.
- **Daniel Stenberg** says agents converted 185,000 lines of C into 340,000 lines of Rust, but curl's 200+ bugfixes over the same three-plus weeks are missing from the rewrites ([Willison](https://simonwillison.net/2026/Nov/18/daniel-stenberg/)).

## ⚖️ Legislation & Regulation

### Executive & Agency
- **Anthropic lobbying:** reportedly paid Continental Strategy, run by Rubio's former Senate chief of staff, $740,000 since April 2025; its Q2 report lists the National Security Council among offices lobbied, per ZeroHedge citing federal disclosures. Anthropic's federal lobbying was $3.13 million in 2025 and $5.64 million in H1 2026 ([ZeroHedge](https://www.zerohedge.com/political/anthropic-paid-rubios-ex-chief-staffs-firm-740000-after-jensen-memo-it-lobbied-his-nsc)).

## 🧭 AI Dissonance — Society & Infrastructure Acceptance

- **Gary Marcus** writes that the most recent data he has seen shows Anthropic's revenue is no longer accelerating as fast as before, and that revenue has leveled out since Q2 (paywalled; excerpt only) ([Marcus on AI](https://garymarcus.substack.com/p/is-anthropics-ipo-a-bad-bet-both)).
- **EFF's Rory Mir** argues policymakers should use antitrust and interoperability requirements to reduce reliance on a few cloud providers, citing recent outages ([EFF](https://www.eff.org/deeplinks/2026/11/outage-chaos-when-tech-too-big-fail)).
- **Dean Ball** argues the "silent consensus" is the expectation that humans will forfeit primacy over world affairs to AI; he says agents should be tied to humans with limited, auditable, withdrawable permissions, in an essay he says reflects his own views ([OpenAI](https://openai.com/index/the-silent-consensus)).

## 🎓 AI Conventions, Lectures & Best Practices

- **Claude Code team** (company blog): a 39-item reliability checklist with diff-readable triggers; Claude retries a check up to three rounds before involving a human; a commit gate with off/observe/enforce modes; REVIEW.md is read from the base branch so a PR cannot edit its own checks ([claude.dev](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/)).
- **CodeRabbit CEO Harjot Gill** (Pragmatic Engineer): says he shipped over 5,000 agent PRs last month at around $150 each, and expects line-by-line review to give way to plan and release review ([Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/software-factories-and-code-reviews)). **Take:** Both move human attention off individual lines, but only Claude Code's approach keeps enforced checks agents cannot edit ([claude.dev](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/)).

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, verification, repos, data</small> | 94 | 718k | 129k | 146k | 572k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 153k | 37.8k | 0 | 153k |
| **Sonnet 5.5**<br><small>writing</small> | 12 | 24 | 115 | 799k | 108k |
| **Total** | **108** | **870k** | **167k** | **944k** | **832k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
