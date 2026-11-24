---
layout: issue
title: "LLM Industry Daily — November 24, 2026"
date: 2026-11-24 08:00:00 -0500
teaser: "Nvidia board reinstates Jensen Huang as CEO; Apollo and Goldman price $44B SpaceX GPU notes"
---
# LLM Industry Daily — November 24, 2026


## ⚡ What Matters Today

- **Nvidia reinstates Jensen Huang as CEO.** The board reinstated Huang on November 22, effective immediately ([Nvidia 8-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000090/nvda-20261122.htm)). Per ServeTheHome, it cited senior US government input that he poses no national security risk, and markets added roughly 30%, about $1T ([ServeTheHome](https://www.servethehome.com/jensen-is-back-at-nvidia/)). **Take:** Government sign-off may defuse the Megaspeed national-security risk, but leadership now visibly rests on White House assurances.
- **Apollo and Goldman price $44 billion of notes for SpaceX's Nvidia Vera Rubin purchases.** BlackRock, Goldman Sachs Asset Management and KKR-advised accounts anchored it; delivery is slated for H1 2027, and the lenders call it the largest GPU financing to date ([DCD](https://www.datacenterdynamics.com/en/news/apollo-and-goldman-sachs-lead-44bn-spacex-gpu-financing-deal/)). **Take:** Private credit is treating unshipped GPUs as financeable collateral, widening the pool competing with hyperscalers for supply.
- **Spain requires data centers to cover 80% of electricity with new renewables, matched hourly.** The Royal Decree keeps possible uncompensated power cuts; Spain has granted 15GW of access permits total, comprising: 6GW transmission, 9GW distribution ([DCD](https://www.datacenterdynamics.com/en/news/spain-approves-decree-on-data-centers-to-curb-electricity-costs/)). **Take:** Hourly matching plus uncompensated curtailment favors operators that can co-locate generation or storage.
- **DatacenterHawk: global colocation vacancy falls to 1.8%.** Commissioned colocation capacity reached 77GW in Q3 2026, versus 51GW in 2025; vacancy was 3.5% a year earlier ([DCD](https://www.datacenterdynamics.com/en/news/datacenterhawk-global-data-center-supply-grows-two-thirds-but-vacancy-shrinks/)). **Take:** Vacancy fell while supply grew sharply, so pricing power stays with landlords.
- **OpenAI's Brian Yang claims the ChatGPT ads product was built entirely with Codex, with zero human-written code.** He says it reached $100 million ARR within six weeks, speaking at QCon San Francisco ([InfoQ](https://www.infoq.com/news/2026/11/qcon-sf-openai-lessons/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** The transferable part is the review economics, not the revenue, which is OpenAI's own claim from a talk promoting its tool.

## 💰 Business & Money

- **Marlowe** emerged from stealth with a $277m seed led by Accel, Bessemer and others. Founded May 2026 by former Microsoft VPs, it has AMD and Etched compute partnerships and three inference offtake customers ([DCD](https://www.datacenterdynamics.com/en/news/ai-cloud-startup-marlowe-secures-277m-in-seed-funding/)).
- **Marlowe projects:** two are under contract, one live in months and one in H1 2027; locations and sizes not disclosed ([DCD](https://www.datacenterdynamics.com/en/news/ai-cloud-startup-marlowe-secures-277m-in-seed-funding/)). **Take:** AMD-plus-Etched sourcing suggests inference-first neoclouds are deliberately building outside Nvidia allocation.
- **Meta** will issue no Class C shares while the consolidated Delaware Chancery reclassification suit is pending; trial is scheduled for April 19, 2027. Zuckerberg waived the Founder Alignment Agreement requirement on the declared Class C dividend ([Meta 8-K](https://www.sec.gov/Archives/edgar/data/1326801/000162828026075541/meta-20261118.htm)).
- **Noeri**, reportedly a neolab launched by Stanford professors Yejin Choi and Carlos Guestrin, has raised $110m, per Import AI; not yet reported by major outlets ([Import AI](https://importai.substack.com/p/import-ai-482-huawei-kernel-benchmarks)).
- Spain's decree and SpaceX financing: see What Matters Today.

## 🚀 Model Releases & Research

- **Google DeepMind** says Gemini 4 agent teams improved quantum algorithms, with every result proved in Lean. It reports an 11.8× cost cut on a fusion-related circuit (qubit memory 5,650 to 4,338), 2.5× on Cytochrome P450 and a 290x arcsin speedup; the Lean library is open-sourced ([DeepMind](https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/)). **Take:** Formal proofs turn agent-found optimizations from claims into checkable artifacts.
- **Z.ai GLM-5.4** is its first looped transformer, with weight-shared layers iterated for depth without more parameters. Not open weights yet, and available only via the Coding Plan rather than the regular API ([Simon Willison](https://simonwillison.net/2026/Nov/23/glm-54/)). **Take:** Subscription gating marks a shift for a lab known for open releases.
- **Ai2 RoboTrack** adds a 307-video benchmark and a 15M-track synthetic dataset. Ai2 reports trackers score 3.0 to 6.6 AJ lower than on RoboTAP; RoboTracker-Warp lifts 63.9 to 66.0 AJ and finished pipetting in 17 of 20 trials ([HF Blog](https://huggingface.co/blog/allenai/robotrack)).
- **AscendGYM** is a kernel-optimization benchmark for Huawei Ascend NPUs, reportedly from Shenzhen Loop Area Institute, per Import AI. Per Import AI, Opus 5 ranked best, then GPT-5.6, then GLM-5.3; rankings not yet confirmed by an official source ([Import AI](https://importai.substack.com/p/import-ai-482-huawei-kernel-benchmarks), [HyperAI](https://hyper.ai/en/papers/2611.17621/resources)).
- **SciResearch-Eval**, per Import AI, is an LLNL benchmark where agents design experiments on a flawed heat-conduction simulator and report 95% intervals; not yet reported by major outlets ([Import AI](https://importai.substack.com/p/import-ai-482-huawei-kernel-benchmarks)).
- **HF Daily Papers:** "Let the Fixer Decide" (code localizer) leads with 40 upvotes ([HF](https://huggingface.co/papers/2611.12164)). SynthDCB, a device-control benchmark, has 23 ([HF](https://huggingface.co/papers/2611.18639)). Open Vision Banana has 14 ([HF](https://huggingface.co/papers/2611.28489)).

## 🏗️ Data Center Infrastructure

- **CtrlS Patna AI factory**, Patna, Bihar, India: 150MW, Rs 10,000 crore ($1 billion) MoU on a 100-acre plot near a 220/400kV substation, due 2029/2030. Last month's LOI pointed to Bodh Gaya ([DCD](https://www.datacenterdynamics.com/en/news/ctrls-moves-forward-with-150mw-data-center-project-in-bihar-india/)).
- **NTT/B.Grimm Power**, Thailand: MoU for a 400MW opportunity worth about THB 113 billion ($3.3bn); site not specified in source. NTT Bangkok 4 at Amata City Chonburi is due live Q2 2027 ([DCD](https://www.datacenterdynamics.com/en/news/ntt-signs-mou-with-bgrimm-for-400mw-data-center-project-in-thailand/)).
- **Aether Compute Khon Kaen**, Thailand: announced via a binding tripartite framework agreement with Cho Thavee and Advance Capital Partners; 850kW existing power capacity, subject to site assessment ([DCD](https://www.datacenterdynamics.com/en/news/ntt-signs-mou-with-bgrimm-for-400mw-data-center-project-in-thailand/)).
- **Vyoma.AI/LTN Compute Chennai**, Tamil Nadu, India: contracted to deploy 10,000 Nvidia B300 GPUs for an unnamed inference provider. A 52MW build began October 2026 beside a 30MW facility, with 150MVA power readiness ([DCD](https://www.datacenterdynamics.com/en/news/ltn-compute-to-deploy-10000-gpu-cluster-at-chennai-data-center/)).
- **DatacenterHawk Q3 2026 leasing**, reported separately by region: North America 13.5GW (record), APAC 3.4GW, Europe 1.1GW, Middle East 232MW, Latin America 11MW. 9.4GW under construction is unleased; hyperscaler leased capacity grew from 37GW to 52GW ([DCD](https://www.datacenterdynamics.com/en/news/datacenterhawk-global-data-center-supply-grows-two-thirds-but-vacancy-shrinks/)).
- **HiCloud Shanghai**, China: subsea data center, 576kW (48 racks of 12kW), operational, and the company calls it the first part of a planned 500MW park. A second site off Hainan runs three 360kW pods ([DCD](https://www.datacenterdynamics.com/en/analysis/underwater-data-centers-floating-compute-at-sea-us-china/)).
- **Mousterian (M3)**: barge-based floating AI data centers of up to 50MW with Samsung Heavy Industries, moored near power plants; location not specified in source ([DCD](https://www.datacenterdynamics.com/en/analysis/underwater-data-centers-floating-compute-at-sea-us-china/)).
- **Keppel floating DC**, 25 Loyang Crescent, Singapore: 25MW, pre-let to a hyperscaler, due online 2028 ([DCD](https://www.datacenterdynamics.com/en/analysis/underwater-data-centers-floating-compute-at-sea-us-china/)).
- **Panthalassa** raised a $140m Series B led by Peter Thiel and is said to be raising more at a $2 billion valuation ([DCD](https://www.datacenterdynamics.com/en/analysis/underwater-data-centers-floating-compute-at-sea-us-china/)).
- **Cogent Omaha, Tacoma and Cheyenne**: three facilities sold to Saragon (I Squared Capital) for $35 million cash, closing Q1 2027; sizes not specified in source. Separate from Saragon's earlier $225 million Cogent acquisition ([DCD](https://www.datacenterdynamics.com/en/news/cogent-sells-three-data-centers-to-i-squared-capitals-saragon/)).
- **Bitera**, Kuningan, Jakarta: operational since February 2024; the company says it has more than 30 MW IT capacity and completed a SOC 2 Type II audit ([DCD](https://www.datacenterdynamics.com/en/product-news/bitera-completes-soc-2-type-ii-audit-strengthening-governance-to-international-standards/)).
- **Proper Voltage Salt Vault**: sodium-ion UPS cabinet; the vendor claims drop-in fit with existing UPS systems, with deliveries from April 2027 ([DCD](https://www.datacenterdynamics.com/en/news/proper-voltage-launches-sodium-ion-battery-cabinet-for-data-center-ups-systems/)).
- Marlowe: see Business & Money. Spain decree: see Legislation & Regulation. Google The Dalles: see US Power Grid Capacity.

## ⚙️ Hardware & Chips

- **AI server OEMs** are reportedly raising prices, according to the FT via DCD. Dell, Lenovo, Supermicro and HPE are said to demand above-contract prices at delivery; GPU servers are up at least 20 to 30% and CPU nodes have tripled. TrendForce warned HBM could rise 70–140% in 2027 ([DCD](https://www.datacenterdynamics.com/en/news/ai-server-oems-hiking-prices-by-45-as-memory-shortage-bites-report/)).
- **HPE** guarantees quotes under $1 million and doubles validity from 15 to 30 days ([DCD](https://www.datacenterdynamics.com/en/news/ai-server-oems-hiking-prices-by-45-as-memory-shortage-bites-report/)). **Take:** Delivery-time repricing shifts memory-shortage risk onto buyers, making HPE's guarantee a competitive weapon. TrendForce's 64% server DRAM jump refers to H2 2025, background rather than news.

## 🤖 Coding Agent Changelog

### Claude Code
- **v2.1.331** fixes MCP calls hanging 30 minutes on malformed replies, retries silent replies once, and adds CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION for proxies ([release](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)).
- **Regressions** (reported, unconfirmed, introducing version unidentified): Project Instructions no longer visible in /config ([issue](https://github.com/anthropics/claude-code/issues/111976)); remote-managed plugins show enabled:false and never load ([issue](https://github.com/anthropics/claude-code/issues/111965)).

### oh-my-pi
- **Follow-up, v19.1.1 regression** (reported, unconfirmed, since 19.1.1): Alibaba-token-plan endpoint discovery fails and drops 15 models after the baseUrl change ([issue](https://github.com/can1357/oh-my-pi/issues/20343)).

### t3-code
- **Nightly 20261124.5191**: stacked GitHub PRs can auto-merge, and pending PR review comments survive reloads ([release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.12-nightly.20261124.5191)).
- **Regressions** (reported, unconfirmed): OpenCode 2 project-local skills missing from the / menu, a regression of #31042 ([issue](https://github.com/pingdotgg/t3code/issues/42068)); first turn after a pause takes 20–60s in long-context Codex sessions, since PR #41174 ([issue](https://github.com/pingdotgg/t3code/issues/42123)).

### Hermes
- **v0.23.4** adds Gemini 4 Hydrogen, Neon and Carbon on Nous Portal, OpenRouter and Vertex; `hermes gateway migrate --backends` moves old serve/dashboard backends to the gateway; `hermes plugins config` edits plugin settings ([release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.4)).
- **Canary 20261124** adds a neocore memory provider, and plugin state writers no longer recreate deleted profile homes ([release](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261124T064706Z-v0.23.3)).

### Codex
- **rust-v0.172.0**: stdio MCP servers with cached tools now start on first call by default; Code Mode moves to gRPC, deprecating `code_mode_host_grpc`; `codex exec resume` restores saved sandbox permissions ([release](https://github.com/openai/codex/releases/tag/rust-v0.172.0)). Also merged: opt-in deferred image generation ([PR](https://github.com/openai/codex/pull/63594)).
- **Compare:** Claude Code ([v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)) and Codex ([rust-v0.172.0](https://github.com/openai/codex/releases/tag/rust-v0.172.0)) both shipped MCP reliability work. Claude Code bounds hangs and retries; Codex defers server startup until first call. Both target flaky tool servers from opposite ends.

### llama.cpp
- **b12675** adds `quantize --target-size`; Metal BF16 src1 matmul gives tg128 +25.5% on M2 Ultra with LLAMA_MOE_AMAX_SKIP=1; the server keeps prompt-cache entries until restores succeed ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12675)).
- **Regression** (reported, unconfirmed, since b12451): severe hallucinations and text corruption in b12671 ([issue](https://github.com/ggml-org/llama.cpp/issues/32938)).

### vLLM
- **No release;** merged Granite Docling model support ([commit](https://github.com/vllm-project/vllm/commit/8b014b2cbe30e795be5e281a41135a4e08276b06)).
- **Regression** (reported, unconfirmed, since v0.20.0): CPU decode about 1.6x slower on 2-core machines ([issue](https://github.com/vllm-project/vllm/issues/69464)).

## 🏢 OpenAI

- **OpenAI and Cisco** announced Shirudo, an open-source eBPF runtime for live Linux protection ([OpenAI](https://openai.com/index/introducing-shirudo)).
- ChatGPT ads built with Codex: see What Matters Today.

## 🛠️ Tools & Community

- **Ladybird** shipped its first alpha, installable on macOS and Linux, with its own HTML, CSS, layout, JS and Wasm engines. The project says AI coding agents pointed at WPT helped add 75,650 subtest passes in October 2026. The alpha date is the article's publication date ([Simon Willison](https://simonwillison.net/2026/Nov/23/ladybird/)). **Take:** A concrete case of agents closing long-tail spec gaps against a conformance suite.
- **datasette-charts 0.1a0 and 0.2a0, datasette-agent 0.7a1:** charts aggregate full result sets in SQL, capped at 5,000 rows, and keep state in the URL fragment; 0.2a0 lets Datasette Agent build charts in chat ([charts](https://simonwillison.net/2026/Nov/23/datasette-charts/), [0.2a0](https://simonwillison.net/2026/Nov/24/datasette-charts/), [agent](https://simonwillison.net/2026/Nov/24/datasette-agent/)). **Take:** The plugin supplies the tools and the agent supplies the chat surface; agent 0.7a1 fixes charts 0.2a0 bugs.
- **HF trending models:** SulphurAI/Sulphur-3 is new at #8 with 869 likes; tencent/Hy4-flash fell to #4 from #7 ([HF](https://huggingface.co/SulphurAI/Sulphur-3), [HF](https://huggingface.co/tencent/Hy4-flash)).
- **HF trending datasets:** nvidia/simready-assets is new at #4 with 1765 likes, and google/physical-engineerings-last-exam is new at #5 ([HF](https://huggingface.co/datasets/nvidia/simready-assets), [HF](https://huggingface.co/datasets/google/physical-engineerings-last-exam)).

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage
- **OpenRouter, as of Nov 23, 2026** (source gives rank changes, not % or point deltas): DeepSeek V4.1 Flash 1017 leads at 66.8T tokens. Hy4 flash rose to #2 from #4 at 23.5T; DeepSeek V4.1 Flash 15.5T, GLM 5.3 Flash 12.9T, GPT-6 Luna 8.34T and Claude Opus 5.5 6.61T hold #3–#6 ([OpenRouter](https://openrouter.ai/rankings)).
- **Anthropic Economic Index:** latest release June 26, 2026, unchanged since ([Anthropic](https://www.anthropic.com/economic-index)).
- **Enterprise adoption:** a CNCF and Linux Foundation survey of 492 practitioners (September 2026, sponsored by CNCF and Broadcom) finds VMs host an average of 53% of production apps. Among those expanding VMs, 34% cite AI and agentic workloads; MicroVM sandboxing is planned to grow from 20% to 30%. These are reported intentions, not deployments ([InfoQ](https://www.infoq.com/news/2026/11/cncf-vm-ai-workloads/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Monetizing products:** OpenAI's Brian Yang claims the ChatGPT ads product reached $1 billion in under 200 days ([InfoQ](https://www.infoq.com/news/2026/11/qcon-sf-openai-lessons/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)); see What Matters Today.

## 🧭 AI Dissonance — Society & Infrastructure Acceptance

- **Gary Marcus** told CNN International the Huang reinstatement sounds like White House pressure on Nvidia's board, expects many shareholder lawsuits and investigations, and says Nvidia is still down a third from its peak ([Marcus on AI](https://garymarcus.substack.com/p/breaking-jensen-is-back-and-the-market)).
- **Marcus** says a New York Times report supports his view. Per Marcus, citing a CNBC exchange posted by Aaron Rupar, Trump said he gave Nvidia's board "enough assurance" that Huang is "absolutely fine" ([Marcus on AI](https://garymarcus.substack.com/p/could-jensengate-take-down-the-president)). **Take:** Whether the board's cited US government input ([ServeTheHome](https://www.servethehome.com/jensen-is-back-at-nvidia/)) holds up is the question these opinions put to shareholders.

## ⚖️ Legislation & Regulation

### Executive & Agency
- **FERC** approved MISO's plan to clear its legacy interconnection queue: penalty-free withdrawal threshold rises from 35% to 50% network upgrade cost increase. The DPP-2022 cycle has about 35 GW active; MISO says this avoids a roughly 18-month delay ([Utility Dive](https://www.utilitydive.com/news/ferc-miso-interconnection-queue-study/875449/)).
- **FERC** rejected Ranger Power's objections to MISO's penalty-free withdrawal proposal ([Utility Dive](https://www.utilitydive.com/news/ferc-miso-interconnection-queue-study/875449/)). **Take:** Nonviable projects clear out faster, but the roughly 125 GW MISO total still queues behind study cycles.

### Rest of World
- **Spain** (Royal Decree, approved Friday): optional transition requires 60% new renewables initially, 70% in 2029 and 80% in 2032. Minister Sara Aagesen estimates €5 billion ($5.5bn) of bill impact without it; a grid plan through 2030 allocates 9.3GW to data centers, and more than 20GW of access applications are pending ([DCD](https://www.datacenterdynamics.com/en/news/spain-approves-decree-on-data-centers-to-curb-electricity-costs/)). Headline: see What Matters Today.

## 🎓 AI Conventions, Lectures & Best Practices

- **OpenAI's Brian Yang, QCon San Francisco:** his team targets about 90% auto-approval of everyday PRs, reviewing the past 300 to 400 PRs weekly, and bundles 30 to 40 candidate changes per PR for a day or two before human review. He reviews the 50 slowest tests weekly because agents over-write tests ([InfoQ](https://www.infoq.com/news/2026/11/qcon-sf-openai-lessons/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Netflix's Mark Khuzam, QCon San Francisco:** the Commerce team wrote 45 architecture decision records for people and agents, and reports 32% more PRs year over year and developer NPS from -3 to +25 ([InfoQ](https://www.infoq.com/news/2026/11/netflix-sdlc-ai-coding-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** He argues most of the work was documentation, consistency and review rather than agents.
- **Agoda** reports a modular-monolith framework cut median review time 64% (1.08 vs 3.02 hours in Q2 2026) and used 29% fewer AI prompts per 100 changed lines; Agoda calls the findings directional ([InfoQ](https://www.infoq.com/news/2026/11/agoda-modular-monolith-framework/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Compare:** [OpenAI](https://www.infoq.com/news/2026/11/qcon-sf-openai-lessons/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering), [Netflix](https://www.infoq.com/news/2026/11/netflix-sdlc-ai-coding-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering) and [Agoda](https://www.infoq.com/news/2026/11/agoda-modular-monolith-framework/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering) converge on structure over raw generation: batched PRs with auto-approval, agent-readable ADRs, and a framework cutting review time and prompts.

## 🔌 US Power Grid Capacity

- **Mitsubishi Heavy CEO Eisaku Ito** said on a Nov. 6 analyst call that utilities and IPPs took 94% of MHI's new gas turbine orders in 2024 and 2025. He argues smaller off-grid plants cost more and will push data centers to the grid ([Utility Dive](https://www.utilitydive.com/news/data-centers-mitsubishi-gas-turbines-earnings/875146/)).
- **MHI** booked 8 GW of large frame gas turbine orders in H1 FY2026 versus 16 GW in all of FY2025 ([Utility Dive](https://www.utilitydive.com/news/data-centers-mitsubishi-gas-turbines-earnings/875146/)). **Take:** A turbine maker is talking its book, but the cost argument cuts against behind-the-meter hype. Ito's claim that data centers are around 10% of national electricity demand is his figure as stated.
- **Google The Dalles**, Oregon: $10M Energy Impact Fund total, comprising: $9m to Energy Trust of Oregon for efficiency, $1m with use not yet disclosed. Google also signed a 50MW geothermal PPA with Quaise Energy, power expected from 2030; data center capacity not specified in source ([DCD](https://www.datacenterdynamics.com/en/news/google-launches-10m-energy-impact-fund-in-oregon/)).
- MISO queue reform: see Legislation & Regulation.

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, repos, verification, data</small> | 62 | 461k | 85.2k | 106k | 355k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 97.3k | 26.8k | 0 | 97.3k |
| **Sonnet 5.5**<br><small>writing</small> | 22 | 44 | 196 | 1.73M | 114k |
| **Total** | **86** | **559k** | **112k** | **1.84M** | **567k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
