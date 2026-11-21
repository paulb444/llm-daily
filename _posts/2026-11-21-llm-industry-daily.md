---
layout: issue
title: "LLM Industry Daily — November 21, 2026"
date: 2026-11-21 08:00:00 -0500
teaser: "Senate passes BAAJA 62-33: data centers over 20MW would pay more for grid buildout"
---
# LLM Industry Daily — November 21, 2026


## ⚡ What Matters Today

- **Senate passes BAAJA 62-33; data centers over 20MW would pay more for grid buildout.** The bill directs FERC to require a greater share of grid infrastructure costs, expands FERC transmission permitting and shortens federal environmental reviews; it heads to the House ([DCD](https://www.datacenterdynamics.com/en/news/us-senate-passes-bill-requiring-data-centers-to-pay-more-for-grid-infrastructure/), [Utility Dive](https://www.utilitydive.com/news/senate-passes-baaja-permitting-bill/875334/)).
  **Take:** Large AI campuses pay more for the grid but may get lines permitted faster; the House fight is likely over permitting.
- **OpenAI says new safeguards cut reasoning-extraction attack success from 54.0% to 0.2%.** The figures compare GPT-6 Astra with original safeguards against GPT-6.2 Astra with updated ones, as reported by OpenAI ([OpenAI](https://openai.com/index/combatting-adversarial-distillation)). **Take:** Raw reasoning traces are now treated as a protected training asset, which explains why labs expose only summaries.
- **Microsoft is first to use Intel's EMIB packaging for in-house silicon.** The multi-year deal also confirms long-term Xeon supply; neither company gave hardware or timeline details ([DCD](https://www.datacenterdynamics.com/en/news/microsoft-becomes-first-company-to-use-intels-emib-packaging-technology-for-azure-hardware/)). **Take:** Intel Foundry gains a named hyperscaler for advanced packaging, but no product or date is attached.
- **Thinking Machines Lab ships Inkling 2 Mini: 3B active parameters, 1M context, looped layers.** The multimodal MoE has ~26B total parameters; 12 middle layers run three times, giving 48 logical layers from 24 ([HF Blog](https://huggingface.co/blog/inkling2mini)). llama.cpp support landed in b12600 ([llama.cpp b12600](https://github.com/ggml-org/llama.cpp/releases/tag/b12600)). **Take:** Looping trades compute for parameter count, which suits memory-bound local hardware.
- **Lambda deploys Nvidia co-packaged optics switches across 10,000+ GB300 GPUs at QScale, Quebec.** Lambda claims the world's first large-scale CPO deployment; DCD reports latency down around four percent at rack scale and up to ten percent at pod scale ([DCD](https://www.datacenterdynamics.com/en/news/lambda-deploys-nvidia-photonics-switches-at-qscale-data-center/)). **Take:** CPO moves from roadmap to production fabric; pluggable-transceiver vendors face pressure if hyperscalers follow.

## 💰 Business & Money

- **LATO** raised a $4.7M seed led by Air Street Capital with YC. Per Nathan Benaich of Air Street Capital, it passed $1M annualized run-rate in under 100 days and has run more than 1,000 expert interviews ([Air Street](https://press.airstreet.com/p/lato-labs-investment-ai-expert-research)).
- **Anthropic commitments:** Benaich writes Anthropic has disclosed roughly $901B in future payment commitments, almost all for compute and infrastructure ([Air Street](https://press.airstreet.com/p/lato-labs-investment-ai-expert-research)).
- **Follow-up, Anthropic shares:** per Gary Marcus, trading started at 111 and fell to 97 by day's end; premarket was indicated near 88, an indication rather than a trade ([Marcus](https://garymarcus.substack.com/p/breaking-anthropic-stock-is-crashing)).

## 🚀 Model Releases & Research

- **OpenAI MedChemBench:** 99 problems from 117 papers and patents. OpenAI reports GPT-6.2 Astra earned 84.5% of credit at xhigh versus 58.2% for GPT-5.6 Sol, and says results do not show drug-discovery ability ([OpenAI](https://openai.com/index/introducing-medchembench)).
- **Levent Alpöge** writes he believes he has discovered a proof of the Riemann Hypothesis, working with Claude, formalized without assumptions ([Willison](https://simonwillison.net/2026/Nov/20/levent-alpoge/)). Source is an excerpt with omissions. **Take:** Until mathematicians check it, this remains one researcher's unverified claim.
- **HF Daily Papers (new):** RL post-training in diffusion transformers framed as activation steering, 16 upvotes ([HF](https://huggingface.co/papers/2611.26627)); Language Models Can Rewrite Their Own Weights, 6 upvotes ([HF](https://huggingface.co/papers/2611.21885)).

## 🏗️ Data Center Infrastructure

- **Microsoft LVL-16 Datacenter Campus**, near Boydton, Mecklenburg County, Virginia: planned, five single-story buildings on 316.7 acres with substation and water storage; capacity not specified in source. Army Corps comments run until December 19, 2026 ([DCD](https://www.datacenterdynamics.com/en/news/microsoft-files-for-3167-acre-data-center-campus-in-mecklenburg-county-virginia/)).
- **Project Phoenix (5C)**, Mount Carmel Township, Northumberland County, Pennsylvania: planned, 160MW IT in the first building (482,895 sq ft). First reported by News-Item; application documents list AMD as intended end user; fuel cells are primary power ([DCD](https://www.datacenterdynamics.com/en/news/amd-set-to-lease-planned-5c-data-center-in-pennsylvania/)). **Take:** Pairing on-site fuel cells with a chipmaker tenant shows large loads planning around the grid.
- **Mega Or / Nebius**, Beit Shemesh and Masmiya, Israel: CalcalisTech reported, via DCD, a 134MW lease expansion across two sites (split not stated); seven years plus five-year option; both sites complete by Q2 2028 ([DCD](https://www.datacenterdynamics.com/en/news/nebius-expands-israel-data-center-lease-with-mega-or-by-134mw/)).
- **Mega Or Beit Shemesh**, Israel: 135MW maximum, under construction, Nebius takes half; first 58MW phase leased under January 2026 contract. Net operating income: NIS 550m ($164.74m) from the new contract, NIS 740m ($221.65m) already signed; DCD gives no total ([DCD](https://www.datacenterdynamics.com/en/news/nebius-expands-israel-data-center-lease-with-mega-or-by-134mw/)).
- **CyrusOne/KEPCO OSK1**, Kansai, Osaka, Japan: 48MW IT, steel topped out, first phase operational by Q1 2028. The JV plans at least ¥1 trillion ($7 billion) and targets 900MW (600MW IT) ([DCD](https://www.datacenterdynamics.com/en/news/cyrusone-and-kep-top-out-48mw-data-center-in-osaka-japan/)).
- **Pinnacle Data Center**, Forbes International Tower, Egypt's New Capital: planned, $750 million, 100MW first phase. Aedan Looking Glass funds, Trinidy AI operates; construction begins next year ([DCD](https://www.datacenterdynamics.com/en/news/egypts-forbes-international-tower-to-house-a-data-center/)).
- **Retelit Datacenters**, Italy: 38 sites totaling around 23MW, including Corsico, outside Milan, 13.6MW. Per Italian local press via DCD, Apollo-backed Vaultica bid; Ardian, Macquarie and Rai Way made non-binding bids. A €700m ($830m) price was reported in January 2026 ([DCD](https://www.datacenterdynamics.com/en/news/apollo-ardian-macquarie-and-rai-line-up-to-acquire-retelit-data-centers-report/)).
- **SpaceX**, Bulgaria: per the Bulgarian government, SpaceX expressed interest in building data centers; no location, cost or capacity released ([DCD](https://www.datacenterdynamics.com/en/news/spacex-expresses-interest-in-building-data-centers-in-bulgaria/)).
- **QScale Quebec**, Canada: 142MW, operational; Lambda CPO deployment, see What Matters Today ([DCD](https://www.datacenterdynamics.com/en/news/lambda-deploys-nvidia-photonics-switches-at-qscale-data-center/)). Grid-cost bill for sites over 20MW: see Legislation & Regulation.

## ⚙️ Hardware & Chips

- **JEDEC DDR6 preview:** starts at 12.8 GT/sec, rising to 14.4 GT/sec and higher versus DDR5's 9.2 top; DIMMs move from a 64-bit to a 96-bit bus, plus a 74mm compact DIMM and data center low-power modes ([ServeTheHome](https://www.servethehome.com/jedec-previews-ddr6-memory-standard-2-35x-more-bandwidth-44-narrower-dimms/)).

## 🤖 Coding Agent Changelog

### Claude Code

- **v2.1.330:** Enterprise Admin Console sign-in now applies org settings after `claude auth login`; fixes a multi-minute freeze after compacting long conversations; `/rewind` no longer restores older file versions in some cases ([release](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)).

### oh-my-pi

- **Regression** (confirmed, since commit 377b08d): Nix build fails because bun.nix lacks browser-relay dependencies ([issue](https://github.com/can1357/oh-my-pi/issues/19991)).

### t3-code

- **Nightly 20261121.5038** adds multi-repository projects, linked environments (beta) that connect machines without pairing codes, and Claude Fable Fast Mode ([release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.12-nightly.20261121.5038)).
- **Regression** (reported, unconfirmed, since 0.1.11): T3 Connect links rejected with not_authorized on every start; worked in 0.1.10 ([issue](https://github.com/pingdotgg/t3code/issues/40322)).

### Hermes

- **Follow-up, canary 20261120:** the plugin catalog also adds optiq-cloud-provider, Gnani Prisma STT and Timbre TTS ([release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3%2Bcanary.20261120T064609Z)).

### Codex

- **Merged:** opt-in indexed web search and SDK web search modes ([PR 62894](https://github.com/openai/codex/pull/62894), [PR 62884](https://github.com/openai/codex/pull/62884)).
- **Merged, behavior change:** reasoning summaries on by default, TUI auto summaries and a /config summary picker ([PR 62903](https://github.com/openai/codex/pull/62903), [PR 62904](https://github.com/openai/codex/pull/62904), [PR 62905](https://github.com/openai/codex/pull/62905)). **Take:** Summaries give users visibility without exposing exact traces, consistent with OpenAI's distillation stance above.
- **Regression** (reported, unconfirmed, since the Nov 21 update, version not stated): new Windows Work conversations lost permission and location selectors ([issue](https://github.com/openai/codex/issues/62943)).

### llama.cpp

- **b12600** adds Inkling 2 Mini support, including loop graph and varying-loop attribute ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12600)).
- **b12606:** fused lightning indexer is now always used; flags, auto probe and non-fused fallbacks removed ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12606)).
- **b12604:** fixes an integer overflow in llama-grammar; invalid values are rejected at parse time ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12604)).
- **b12603:** QSA scores only the k-pools of ubatch sequences ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12603)).
- **b12602:** faster SYCL Grouped XMX GEMM by avoiding SLM staging ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12602)).
- **b12599:** adds an RDNA1 MMVQ parameter table in HIP ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12599)).
- **b12597:** Qwen3-ASR converter puts language output in a thinking block and reads the bundled chat template ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12597)).
- **b12596:** Metal fused MUL/ADD accepts the norm chain in either operand ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12596)).
- **Merged:** undefined behavior in CUDA fastdiv now aborts ([PR 32698](https://github.com/ggml-org/llama.cpp/pull/32698)).

### vLLM

- **Merged:** DiffusionGemma mixed attention on TRTLLM-Gen, the default for text-only SM100/SM103 ([commit](https://github.com/vllm-project/vllm/commit/bd53af0bbec2296e36f9413b69b63664839267e3)).

## 🛠️ Tools & Community

- **Hugging Face harness adapters** (update): per-harness RL LoRAs for Qwen3.8-27B. Terminal-Bench 2.1 with pi rose from 39% to 55% pass@1 while average tokens fell from 2.9K to 1.5K; a merged super-adapter runs under pi, Hermes Agent and OpenCode ([HF Blog](https://huggingface.co/blog/harness-adapters-at-scale)).
- **Meta TLX:** a Triton extension with a Multiple Instructions, Multiple Warps execution model. According to Meta engineers, it gave 20–25% MFU and up to 2x forward-pass speedup for GEM training on thousands of Blackwell GPUs, in production for months ([InfoQ](https://www.infoq.com/news/2026/11/meta-triton-tlx-gpu-compiler/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
  **Take:** The adapters target the agent loop while TLX targets the kernel layer; both specialize to the execution environment instead of generic abstractions.
- **HF trending models, new:** higurashi-ai/Haru-4B, 812 likes ([HF](https://huggingface.co/higurashi-ai/Haru-4B)); tencent/Hy4-flash, 563 likes ([HF](https://huggingface.co/tencent/Hy4-flash)); unsloth/Inkling-2-Mini-GGUF, 238,152 downloads ([HF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)).
- **HF trending datasets:** nvidia/USDCraft-10K rose to #2 from #3 ([HF](https://huggingface.co/datasets/nvidia/USDCraft-10K)); google/physical-engineerings-last-exam is new at #5 with 158 likes ([HF](https://huggingface.co/datasets/google/physical-engineerings-last-exam)).

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage

- **OpenRouter, as of Nov 20, 2026** (source gives rank changes only, no percent or point deltas): DeepSeek V4.1 Flash 1017 leads at 62.4T tokens, then DeepSeek V4.1 Flash at 15.6T, GLM 5.3 Flash 10.8T, GPT-6 Luna 8.74T, Claude Opus 5.5 7.25T, Step 5 Preview 4.8T. MiniMax M3.1 Flash (4.11T) and MiMo-V2.6-Flash (3.91T) are new at #7 and #8 ([OpenRouter](https://openrouter.ai/rankings)).
- **Anthropic Economic Index:** latest release June 26, 2026, unchanged since ([Anthropic](https://www.anthropic.com/economic-index)).

## ⚖️ Legislation & Regulation

### Federal (Legislative)

- **BAAJA criticism:** Sen. Josh Hawley said the bill was "stuffed with giveaways to data centers and industry at the expense of farmers." ([Utility Dive](https://www.utilitydive.com/news/senate-passes-baaja-permitting-bill/875334/)). Cost-allocation detail: see What Matters Today.
- **Earthjustice** argues BAAJA exempts a wide array of government actions from NEPA ([DCD](https://www.datacenterdynamics.com/en/news/us-senate-passes-bill-requiring-data-centers-to-pay-more-for-grid-infrastructure/)). **Rep. Scott Peters** faulted Sens. Wyden and Merkley after Wyden's amendment to ban data centers on public lands was omitted ([Utility Dive](https://www.utilitydive.com/news/senate-passes-baaja-permitting-bill/875334/)).

### Rest of World

- **CCW 7th Review Conference** ended without an autonomous weapons treaty. FLI's Max Tegmark calls the outcome an empty agreement and urges frustrated states to take the issue to another forum ([FLI](https://futureoflife.org/statement/negotiations-on-slaughterbots-conclude-with-frustration/)). This is an advocacy statement.

## 🎓 AI Conventions, Lectures & Best Practices

- **Eugene Yan** reviews twelve public evals: in eight, audits found graders rejecting valid work; he recommends reporting pass^k. On Terminal Bench 2.0 one model scored 57.8% on Terminus 2 versus 52.1% on its provider's harness ([Eugene Yan](https://eugeneyan.com/writing/public-evals)). **Take:** Yan's harness gap and the adapter gains in Tools & Community both show agent benchmark scores depend heavily on the harness.

## 🔌 US Power Grid Capacity

- **FERC winter assessment:** CAISO's Extended Day Ahead Market and SPP's western expansion should cut costs. Henry Hub is expected at $3.19/MMBtu, 42% below last winter's $5.52; New England distillate supplies are 46% below the five-year average; power-sector gas demand rises 0.8 Bcf/d to 35.7 Bcf/d ([Utility Dive](https://www.utilitydive.com/news/western-northeast-market-reforms-drought-grid-ferc/875311/)).

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, repos, data</small> | 48 | 391k | 74.0k | 86.4k | 305k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 108k | 23.6k | 0 | 108k |
| **Sonnet 5.5**<br><small>writing</small> | 15 | 30 | 120 | 930k | 93.7k |
| **Total** | **65** | **499k** | **97.7k** | **1.02M** | **506k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
