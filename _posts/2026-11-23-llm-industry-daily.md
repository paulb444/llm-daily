---
layout: issue
title: "LLM Industry Daily — November 23, 2026"
date: 2026-11-23 08:00:00 -0500
teaser: "OpenAI publishes pretraining perplexity figures and proposes shared loss-based development limits"
---
# LLM Industry Daily — November 23, 2026


## ⚡ What Matters Today

- **OpenAI publishes internal pretraining perplexity and proposes shared loss-based limits.** Chief Scientist Jakub Pachocki reports log-perplexity of ~0.99 for GPT-3.5 and ~0.91 for GPT-4, says losses below 0.8 were associated with emergent cybersecurity and mathematics capabilities, and argues for common perplexity-based development limits until monitoring milestones are met ([OpenAI](https://openai.com/index/perplexity-and-intelligence)). These are OpenAI's own measurements. **Take:** A loss threshold would give safety standards a measurable trigger independent of benchmarks, but only works if rivals disclose comparable numbers.
- **Trump threatens a "tremendous tax" on US companies that build data centers abroad.** On November 20 he said the US will not allow it; no tax size or mechanism was given, and DCD ties the threat to data centers being a voter issue at the recent midterms ([DCD](https://www.datacenterdynamics.com/en/news/trump-we-wont-let-us-companies-build-data-centers-outside-the-states-unless-we-tax-them/)). **Take:** Without details this is leverage, not policy, but it clouds overseas hyperscaler builds and may help non-US sovereign-cloud pitches.
- **Oracle says it is fully funded for this investment cycle.** In a November 20 statement Oracle said its final capital raise this month leaves the Investor Day financing, including vendor financing, in place; early November brought $10 billion in common stock and $10bn in notes at 7 to 8.65 percent. Per DCD, the planned $40 billion FY2027 raise is now fulfilled ([DCD](https://www.datacenterdynamics.com/en/news/oracle-secures-funding-needed-for-openai-buildout/)). **Take:** Risk shifts from Oracle's balance sheet to execution and OpenAI's ability to pay.
- **Ramp: Anthropic's share of business AI token spend reaches 58.7%.** For the week ending Nov. 15, 2026 Anthropic held 58.7% versus 49.3% for the week ending Nov. 1; OpenAI went from 46.1% to 37.2% ([Ramp](https://ramp.com/data/ai-index)). Figures cover businesses on Ramp only. **Take:** A spend gap far wider than the October adoption gap points to deeper usage per customer.
- **AWS's Kozani, Greece campus: 300MW power capacity, 240MW IT, on a former coal plant.** An environmental impact assessment shows the campus scaling to 1GW at PPC's former Agios Dimitrios plant ([DCD](https://www.datacenterdynamics.com/en/news/details-shared-of-aws-300mw-data-center-in-kozani-greece/)). **Take:** Retired coal sites come with grid connections, a template for coal regions in Europe.

## 💰 Business & Money

- **KKR's Helix** is reportedly in talks for a majority stake in EdgeCore at an $8bn–$10bn valuation, per Bloomberg via DCD; talks could end without a deal. Helix launched in June with $10 billion committed, led by Adam Selipsky and backed by Nvidia and the Kuwait Investment Authority; EdgeCore claims more than 2GW ([DCD](https://www.datacenterdynamics.com/en/news/kkr-could-acquire-majority-stake-in-edgecore-for-up-to-10bn-report/)). **Take:** A first deal at this size would show AI capital buying existing powered portfolios rather than waiting on greenfield builds.
- **Firmus** reportedly seeks a $1.5 billion bond, part of a debt offering of up to $4 billion, to buy Nvidia GB300 chips for its Indonesia project with DayOne. Per Bloomberg's sources via DCD, the bond runs 69 months at around eight percent, after its IPO fell apart ([DCD](https://www.datacenterdynamics.com/en/news/firmus-seeks-15bn-bond-offering-report/)).
- **Retelit (update):** UniCredit confirms an extra €50 million accordion on the existing €375m financing, funding 27MW of new capacity across three data centers in Milan and Rome; acquisition interest from Vaultica, Ardian, Macquarie and Rai Way is reported ([DCD](https://www.datacenterdynamics.com/en/news/retelit-secures-50m-extra-for-data-center-expansion/)).
- **Evroc and Telia Cygate** launch a Swedish sovereign government cloud with classified sites and dedicated GPU capacity, available in the first half of 2027 via the Kammarkollegiet framework ([DCD](https://www.datacenterdynamics.com/en/news/evroc-and-telia-cygate-launch-swedish-sovereign-cloud/)).

## 🚀 Model Releases & Research

- **Jones and Tonetti (NBER)** find capital task productivity has grown about 5 percentage points a year faster than labor task productivity; in their model growth can explode, but labor "weak links" slow it. Jones is on leave from Stanford and employed at Anthropic; this is a personal-capacity working paper, not Anthropic's position ([NBER](https://www.nber.org/papers/w36050#fromrss)).
- **Mohnen and Gans (NBER)** study 530,471 proteins: where AlphaFold2 predictions are more confident, experiments add fewer first structures for distant proteins and more follow-up work on known ones. Working paper, not peer reviewed ([NBER](https://www.nber.org/papers/w36045#fromrss)). **Take:** Prediction tools can narrow science toward the known, a counterpoint to claims of AI-driven discovery.
- **Graham, Harvey and Jha (NBER):** LLMs role-playing individual CFOs reasonably match the cross-section of Duke–Fed CFO Survey expectations, 2002–2025, with accuracy rising as more information is given. Working paper ([NBER](https://www.nber.org/papers/w36057#fromrss)).
- **HF Daily Papers:** MemOnce, a scalable memory architecture for LLMs, leads new entries with 12 upvotes ([HF](https://huggingface.co/papers/2611.27973)); Intent Contracts: Taking Tools Away from Agents has 2 ([HF](https://huggingface.co/papers/2611.24025)).

## 🏗️ Data Center Infrastructure

- **AWS Kozani campus**, Kozani, Greece: planned; see What Matters Today. Four buildings with 20 data halls, 60–90% of cooling load on water (about 203,000 cubic meters a year). PPC invests €1 billion and AWS a similar amount for IT; the source does not say whether one is inside the other. Construction hoped for summer 2027 ([DCD](https://www.datacenterdynamics.com/en/news/details-shared-of-aws-300mw-data-center-in-kozani-greece/)).
- **Argonne Inference Service**, Illinois: operational. Adds Tara (672 nodes, 2,688 Nvidia GH200, HPE Cray EX4000) and Minerva (eight nodes, 64 B200). Metis grows to 96 SambaNova SN40L chips; the service can host more than 50 LLMs ([DCD](https://www.datacenterdynamics.com/en/news/does-argonne-national-laboratory-expands-its-inference-service-compute-capacity-with-two-new-supercomputers/)).
- **Ecoasis AgTech Park**, Pueblo, Colorado: planned 272-acre campus; data center capped at 10 percent of the site, waste heat to up to 160 acres of greenhouses, closed-loop cooling. Construction spring 2027, first operations first half of 2028; capacity not specified in source ([DCD](https://www.datacenterdynamics.com/en/news/ecoasis-agtech-park-plans-data-center-with-up-to-160-acres-of-greenhouses-in-colorado/)).
- **Follingsby Park 48**, Gateshead, UK: three-acre site marketed for a 12MW data center, 15MVA available, power deliverable in 24–36 months; no planning filing yet ([DCD](https://www.datacenterdynamics.com/en/news/uk-business-park-seeks-developer-for-12mw-data-center-project-in-newcastle/)).
- **Retelit Corsico**, southwest of Milan: 13.6MW, under construction; see Business & Money ([DCD](https://www.datacenterdynamics.com/en/news/retelit-secures-50m-extra-for-data-center-expansion/)).
- **Firmus Indonesia data center**, Indonesia: status unknown, capacity not specified in source; see Business & Money ([DCD](https://www.datacenterdynamics.com/en/news/firmus-seeks-15bn-bond-offering-report/)).
- **Vertiv PowerNexus MV UPS:** Vertiv claims up to 98.5 percent peak efficiency and up to four hours of battery-backed operation with storage, sitting at the utility connection point. Demos with QTS, SoftBank and Rosendin; no site details ([DCD](https://www.datacenterdynamics.com/en/news/vertiv-launches-medium-voltage-ups-for-ai-data-center-sector/)).

## ⚙️ Hardware & Chips

- **TACC Sagebrush** is an NSF-funded inference service on SambaNova chips and SambaStack, with four more systems to be bought and information shared with Los Alamos; deployed chip count not shared ([DCD](https://www.datacenterdynamics.com/en/news/texas-advanced-computing-center-builds-ai-inference-service/)). **Take:** Argonne's Metis (96 SN40L, [DCD](https://www.datacenterdynamics.com/en/news/does-argonne-national-laboratory-expands-its-inference-service-compute-capacity-with-two-new-supercomputers/)) also scales SambaNova beside Nvidia GH200 and B200 systems, so US public labs are hedging inference beyond Nvidia.

## 🤖 Coding Agent Changelog

### Claude Code

- **Experimental Code Mode** (v2.1.323+, `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1`) lets the model write JavaScript to orchestrate tool calls. It does not work with -p, the Agent SDK, VS Code, Desktop, Bedrock, gateways or zero-data-retention orgs. A social media user claims 37% fewer tokens and 19% lower cost on a bigger task, but no speedup ([InfoQ](https://www.infoq.com/news/2026/11/claude-code-mode/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Regression** (reported, unconfirmed, introducing version unidentified): activity indicator flickers on Linux ([issue](https://github.com/anthropics/claude-code/issues/111790)).

### pi

- **pi-classifier API** merged ([PR](https://github.com/earendil-works/pi/pull/12421)). Whether oh-my-pi has absorbed it is not specified in source.

### oh-my-pi

- **v19.1.1:** provider billing failures now count as usage limits, so retries rotate accounts and continue down the model fallback chain; oversized handoffs are caught before reaching the provider. Breaking: the native shell Rust API stores indexed variables as `IndexedArray` ([release](https://github.com/can1357/oh-my-pi/releases/tag/v19.1.1)).

### t3-code

- **Nightly 20261123.5138:** Workflows (Labs) coordinate agents and approvals; multiple Linear accounts; agents can report T3 Code problems when feedback is on ([release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.12-nightly.20261123.5138)).

### Hermes

- **Canary 20261123:** plugin catalog adds creatorplaybooks, valetudo, deny-record and a katara memory provider ([release](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261123T065600Z-v0.23.3)).

### Codex

- **Merged:** open workspace files in the terminal sidebar ([PR](https://github.com/openai/codex/pull/63184)); auto-resume of disconnected cloud conversations in the TUI ([PR](https://github.com/openai/codex/pull/63211)).
- **Behavior change:** per-item usage attribution is now off by default ([PR](https://github.com/openai/codex/pull/63219)).

### llama.cpp

- **b12648:** OpenCL Q4_K cooperative-k c8 GEMM for speculative verification, LFM2.5-VL template fix, faster shared audio FFT ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12648)).
- **b12649–b12651:** OpenCL xIELU activation ([b12649](https://github.com/ggml-org/llama.cpp/releases/tag/b12649)); improved inkling chat parser and grammar ([b12650](https://github.com/ggml-org/llama.cpp/releases/tag/b12650)); WebGPU ROLL op ([b12651](https://github.com/ggml-org/llama.cpp/releases/tag/b12651)).

### vLLM

- **Regression** (reported, unconfirmed, since v0.34.0 versus v0.28.0): parallel sampling (n>1) is 10–14% slower ([issue](https://github.com/vllm-project/vllm/issues/69408)).

## 🛠️ Tools & Community

- **HF trending models:** AtomicChat/Inkling-2-Mini-Uncensored-GGUF rose to #4 from #8, with 329,497 downloads ([HF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF)). sensenova/SenseNova-Loop-9B is new at #8 with 610 likes ([HF](https://huggingface.co/sensenova/SenseNova-Loop-9B)). Apple's FastFrames-L dropped out ([HF](https://huggingface.co/apple/FastFrames-L)).

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage

- **OpenRouter, as of Nov 22, 2026** (source gives rank changes, not percent or point deltas): DeepSeek V4.1 Flash 1017 leads at 65T tokens. Hy4 flash rose to #4 from #6 at 10.2T; GPT-6 Luna fell to #5 from #4 at 8.31T; Claude Opus 5.5 fell to #6 from #5 at 6.97T ([OpenRouter](https://openrouter.ai/rankings)).
- **Ramp adoption, October 2026:** Anthropic 44.8%, OpenAI 40.6%, all AI 56.8% of US businesses on Ramp; token-spend shift is in What Matters Today ([Ramp](https://ramp.com/data/ai-index)).
- **Anthropic Economic Index:** latest release June 26, 2026, unchanged since ([Anthropic](https://www.anthropic.com/economic-index)).
- **Gallup** (US employees, Q1 2026, Feb. 4–19, sample 23,717): 52% use AI in their role and 30% frequently; 47% say their organization has integrated AI tools (Q2 2026, published July 20, 2026). Prior wave not specified in source ([Gallup](https://www.gallup.com/workplace/712736/organizational-adoption-jumps-six-points.aspx)).
- **Pew** (US adults, Feb. 17–23, 2026, 5,119 adults): 49% use AI chatbots, 24% daily. Prior wave not specified in source ([Pew](https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/)). Separately, 34% had ever used ChatGPT, per a 2025 publication ([Pew](https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/)).
- **Census BTOS:** Puerto Rico current AI use 12.4% over the last two weeks, data as of Nov. 15, 2026; question wording was revised from the Nov. 17, 2025 collection; national value not in extract ([Census](https://www.census.gov/library/visualizations/interactive/btos-data.html)).

### Installed Hardware Base

- **Installed accelerator counts** by chip family: not specified in source this week.

## ⚖️ Legislation & Regulation

### Executive & Agency

- **Offshore data center tax threat:** see What Matters Today.

### Rest of World

- **Alberta** proposes the Energy, Environment and Utilities Statutes Amendment Act, 2026 for data centers of 10MW or more: 600-meter setbacks, developers pay for wires within their footprint, near-zero water for cooling, waste-heat recovery, and the Alberta Utilities Commission as primary regulator ([DCD](https://www.datacenterdynamics.com/en/news/alberta-govt-proposes-new-rules-for-large-load-data-centers/)). **Take:** Ratepayer protection, water limits and heat reuse in one bill make this a template other jurisdictions can copy; it contrasts with Kozani's water-heavy cooling ([DCD](https://www.datacenterdynamics.com/en/news/details-shared-of-aws-300mw-data-center-in-kozani-greece/)).

## 🔌 US Power Grid Capacity

### Regional Capacity & Timeline

| Region | Peak/capacity | Headroom |
|---|---|---|
| ERCOT | 466 GW queue | not specified |
| PJM | 134,479 MW procured | 6,623 MW shortfall |
| SPP | 8 GW growth | not specified |
| NYISO | 2,700 MW large loads | 225 MW deficiency |
| CAISO | 46,844 MW peak | not specified |

Sources: [ERCOT Queue](https://www.ercotqueue.com/charts/large-load), [PJM](https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2025-releases/20251217-pjm-auction-procures-134479-mw-of-generation-resources.pdf), [Ascend](https://www.ascendanalytics.com/blog/spp-the-next-high-opportunity-us-power-market), [NYISO](https://www.nyiso.com/-/press-release-nyiso-report-identifies-first-ever-statewide-resource-deficiency), [CAISO](https://www.caiso.com/generation-transmission/resource-adequacy/2026-summer-loads-and-resources-assessment). ERCOT is June 2026; PJM is the 2027/2028 auction, Dec. 17, 2025; SPP is nearly 8 GW added peak demand by 2030; NYISO is the 2026 RNA, Nov. 18, 2026 (225 MW in 2033); CAISO is a 50% chance of exceeding the peak in 2026. MISO, ISO-NE and Northwest: capacity not specified in source.

- **ERCOT:** Batch Zero: ERCOT withdrew its April 9, 2027 study date while verifying applicants; report due December 10 ([Modo Energy](https://modoenergy.com/research/en/large-load-interconnection-six-us-markets-data-centers)). Planned 2026 battery storage is 12.9 GW; baseload not specified ([EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205)).
- **CAISO:** peak forecast rises to 52,940 MW by 2030; the CEC forecasts ISO data center load up 1.8 GW by 2030 ([CAISO](https://www.caiso.com/generation-transmission/load/large-loads)).
- **Southeast:** Georgia PSC approved another 10 GW of generation in December 2025 ([SELC](https://www.selc.org/news/experts-say-data-center-growth-is-speculative/)).
- **Southwest:** hydropower April–August 2026 was 19% below last year and 28% below the 10-year average ([EIA](https://www.eia.gov/todayinenergy/)). Planned 2026 Arizona battery storage is 3.2 GW, 13% of planned additions ([EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205)).

**Changes vs last week:**

- ERCOT large-load queue: ~410 GW (as of March 26, 2026) to 466 GW (June 2026) ([ERCOT Queue](https://www.ercotqueue.com/charts/large-load)).

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, repos, data, weekly data</small> | 58 | 422k | 68.6k | 113k | 309k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 89.3k | 24.7k | 0 | 89.3k |
| **Sonnet 5.5**<br><small>writing</small> | 19 | 38 | 203 | 1.26M | 99.5k |
| **Total** | **79** | **511k** | **93.6k** | **1.37M** | **498k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
