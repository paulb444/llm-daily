---
layout: issue
title: "LLM Industry Daily — November 28, 2026"
date: 2026-11-28 08:00:00 -0500
teaser: "OpenAI fixes GPT-6.2 billing error: Astra limits run out 40% faster, Sol 25%"
---
# LLM Industry Daily — November 28, 2026


## ⚡ What Matters Today

- **OpenAI fixes a GPT-6.2 billing error, so Astra and Sol limits run out faster.** OpenAI says the launch wrongly discounted Astra and Sol usage for most users, who will now hit limits 40% faster on Astra and 25% faster on Sol than last week; past usage is not charged and Go, Plus, Pro and Business users get one banked reset ([TechRadar](https://www.techradar.com/ai-platforms-assistants/chatgpt/weve-fixed-this-now-so-the-same-work-will-use-more-of-your-plans-usage-allowance-openai-admits-it-made-a-mistake-when-launching-gpt-6-2-and-now-paying-chatgpt-users-could-hit-their-usage-limits-up-to-40-percent-faster), [Business Insider](https://www.businessinsider.com/openai-token-billing-cost-discount-mistake-sol-astra-2026-11), [Notebookcheck](https://www.notebookcheck.net/ChatGPT-users-hit-limits-up-to-40-sooner-after-OpenAI-billing-fix.1460643.0.html)). **Take:** This is an effective consumer price rise within days of launch, landing while early Astra reception is already mixed ([Zvi](https://thezvi.substack.com/p/astra-62s-brain-gets-smart-but-its)).
- **Anthropic launches Claude Ship agents that review, fix and approve pull requests.** Code Review is generally available; PR Steward and Claude Approvals are in beta on Team and Enterprise plans, and Approvals starts from a `.claude/approvals.yml` file, with Anthropic recommending observe mode first ([InfoQ](https://www.infoq.com/news/2026/11/anthropic-claude-ship/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** Merge authority shifts from a human reviewer to a policy file; it is unavailable with Zero Data Retention, HIPAA or customer-managed keys, which excludes the regulated teams most likely to want gated approvals.
- **Sharon AI installs 8,208 Nvidia B300s for ESDS in Sydney.** Per an ESDS regulatory filing, as reported by w.media (via DCD), the cluster is in final testing with handover due mid-December and customer billing from January 2027; ESDS pays about $21 million a month and receives about $30m, leaving $9m a month before operating costs and tax ([DCD](https://www.datacenterdynamics.com/en/news/8208-gpus-deployed-by-sharon-ai-for-esds-software-solution-in-australia/)). **Take:** A rare look at GPU-resale economics; Sharon AI's Q3 SEC filing shows property and equipment of $1.68 billion, up from $88.4m in December 2025.
- **Intel lawsuit documents allege Commerce pressured the board into the government stake.** According to Wired, as reported by DCD, Commerce lawyer David Shapiro told CFO David Zinsner in August 2025 not to treat the deal as a negotiation and that rejection "will have consequences" he "cannot predict"; these are allegations in a shareholder suit ([DCD](https://www.datacenterdynamics.com/en/news/trump-administration-pressured-intel-into-accepting-govt-stake-in-company-lawsuit-documents-allege/)). **Take:** The suit tests how far government leverage over a chipmaker's board can go before directors face liability, a question Trump's role in Huang's return also raises ([CNBC](https://www.cnbc.com/2026/11/23/trump-nvidia-jensen-huang.html)).
- **Tract plans a 13-building Stockton-on-Tees campus worth more than £10 billion; over 6,000 sign a petition against it.** Plans include an on-site substation, a December 2026 planning filing and phased delivery over 11 years, with Tract paying National Grid for extra grid infrastructure; MP Matt Vickers started the petition ([DCD](https://www.datacenterdynamics.com/en/news/tract-plans-second-data-center-campus-in-the-uk/)). **Take:** Developer-funded grid upgrades are becoming the price of entry, and opposition led by a sitting MP raises planning risk.

Threads: staged trust for AI code approval; government leverage over chipmakers; GPT-6.2 economics tightening.

## 💰 Business & Money

- **Wren House** buys GIC's 80% stake in Equinix's xScale joint venture; Equinix keeps 20% and stays operator; closing is expected Q1 2027 and financial details are undisclosed. February reports with no named source put the sale at €800 million to €1 billion ([DCD](https://www.datacenterdynamics.com/en/news/kuwait-wealth-fund-backed-investment-firm-purchases-gics-majority-stake-in-xscale/)). **Take:** Hyperscale JV stakes are trading between sovereign-backed investors while the operator stays on as minority owner.
- **Intel stake context:** the August 2025 deal gave the US government 9.9 percent for $8.9 billion total, comprising: $5.7bn CHIPS Act funds, $3.2bn Secure Enclave program funds. Shareholders sue the board, CEO Lip-Bu Tan, Commerce and Howard Lutnick; see What Matters Today ([DCD](https://www.datacenterdynamics.com/en/news/trump-administration-pressured-intel-into-accepting-govt-stake-in-company-lawsuit-documents-allege/)).
- **Mozilla and Mistral:** Mistral Small 4 (119 billion parameters, Apache 2.0) is the recommended model in Firefox Smart Window in France, the US and Canada, with the UK and Germany later this year; Mistral agreed to zero data retention. Cybernews puts added reach at about 200,000 monthly Firefox users ([InfoQ](https://www.infoq.com/news/2026/11/mozilla-mistral-ai-smart-window/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Quanta and Bloom Energy:** a $367 million total, comprising: a California project of about $249.9m and a Tennessee project of about $117.1m, per reports cited by DCD. It is Quanta's third Bloom deal, after $80m in October 2024 and $20m in April 2024 ([DCD](https://www.datacenterdynamics.com/en/news/quanta-inks-367m-deal-with-bloom-energy-for-two-fuel-cell-anchored-microgrid-systems/)).
- **Compass Datacenters** is reportedly pausing a $380 million asset-backed securities deal until next year after an investor rout following an outage, per Bloomberg via DCD, citing anonymous sources ([DCD](https://www.datacenterdynamics.com/en/news/compass-could-pause-380m-abs-transaction-due-to-investor-rout-after-outage-report/)).

## 🚀 Model Releases & Research

- **GPT-6.2 Astra reception:** per Zvi, it has very high intelligence but often misses what the user wanted, and feedback is mostly negative. Zvi, citing Every, says no one on its 30-person team loved it; citing SemiAnalysis, Astra scores 37.6% on its alignment measure versus 9.3% for Fable 5.2 ([Zvi](https://thezvi.substack.com/p/astra-62s-brain-gets-smart-but-its)). **Take:** The newest OpenAI model reportedly leads on measures while users say it misreads requests, a gap that may matter more in daily use.
- **Follow-up, Astra sketchbook:** TechRadar and Business Insider now cover historian Mark Humphries's account that Astra named a "probable" creator of an 1808 Yale sketchbook in 22 minutes; he prompted it at Ultra effort in goal mode, and Yale curators have not confirmed the attribution. Humphries says Fable 5.2 reached the same conclusion in about 35 minutes but missed Chabot's journal ([TechRadar](https://www.techradar.com/ai-platforms-assistants/chatgpt/chatgpt-6-2-makes-significant-historical-discovery-in-only-22-minutes-openai-model-names-anonymous-creator-of-1808-sketchbook-in-remarkable-find), [Business Insider](https://www.businessinsider.com/historian-openai-mystery-sketchbook-yale-2026-11), [Humphries](https://generativehistory.substack.com/p/gpt-62-astra-solves-a-historical)).
- **Claude Opus 5.6** is reportedly being A/B tested through "Opus 5.5 Extra" routing, per TestingCatalog citing testers on X; Anthropic has announced nothing ([TestingCatalog](https://www.testingcatalog.com/testers-share-early-results-possible-claude-opus-5-6/)).
- **Riemann Hypothesis Lean proof:** per Zvi, Anthropic used Claude to cut it from 17.4 million to 76,000 lines (99.6%); not yet reported by major outlets ([Zvi](https://thezvi.substack.com/p/ai-196-the-return)).
- **NVIDIA Parse 3.5:** the vendor open-sources three training datasets (Synthetic Charts V1, 9.98M examples; Synthetic Tables V1, 1M; OCR Synthetic Multilingual v2, 7.9M) and a fine-tuning recipe. It reports DFlash2 speculation raises throughput 7.62× at concurrency 1 on one H200 ([HF blog](https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin)).
- **Hugging Face on Trainium3:** via an AWS partnership, LTX-2.5 generates a 10-second clip with sound at 2048×1024 in 22 to 23 s on half a trn3.48xlarge, once models are loaded. The authors say LTX's online API makes a 10-second 1080p clip in 23.7 s ([HF blog](https://huggingface.co/blog/video-trainium3)).
- **HF Daily Papers:** "Revisiting LLMs as Context Engineers" leads with 5 upvotes ([HF](https://huggingface.co/papers/2611.30494)). "Markdown Is Not a Firewall" tests four coding agents against one rules file and finds four different boundaries; it has 0 upvotes ([HF](https://huggingface.co/papers/2611.27112)).

## 🏗️ Data Center Infrastructure

- **Sharon AI ESDS cluster**, Sydney: 8,208 Nvidia B300 GPUs, final testing; see What Matters Today.
- **Tract Stockton-on-Tees Technology Park**, England: up to 13 buildings, planned; capacity not specified in source. Earlier this month Tract announced the Durham Technology Park, up to seven buildings totaling 500MW ([DCD](https://www.datacenterdynamics.com/en/news/tract-plans-second-data-center-campus-in-the-uk/)).
- **Galaxy Helios 5**, Afton, Dickens County, Texas: $1.3 billion, 349,595 sq ft, construction November 2026 to June 2028. CoreWeave has committed 526MW critical IT (800MW gross) across three phases on 15-year leases; campus approved power is 1.63GW, potentially 3.6GW ([DCD](https://www.datacenterdynamics.com/en/news/galaxy-digital-files-for-next-phase-of-development-at-helios-data-center-campus-in-texas/)).
- **Nexus Hubbard**, Hill County, Texas: HB3 and HB4 filed, 491,378 sq ft each, January 2028, $400 million; DCD asks whether that covers each building or the site. Google reportedly backs it, said to serve Anthropic; a 600MW gas plan is not confirmed ([DCD](https://www.datacenterdynamics.com/en/news/nexus-dc-files-to-build-two-data-center-buildings-at-site-in-hubbard-texas/)).
- **SpaceX Starbase**, Cameron County, Texas: more than $250 million of Tesla Megapacks installed, per Tesla investor Sawter Merritt on X via DCD. It is planned at over $24 billion with behind-the-meter gas power; the county rejected its tax break ([DCD](https://www.datacenterdynamics.com/en/news/spacex-installs-250m-worth-of-tesla-megapack-batteries-at-starbase-data-center-site-in-texas-report/)).
- **Jera thermal-plant sites**, Japan: reportedly in talks with Meta, Anthropic, Google, Microsoft and Amazon, per Nikkei via DCD; CEO Yukio Kani himself named only Amazon, Google and Microsoft. The 400MW Chiba project with Dell and Rhaelm targets 2028 ([DCD](https://www.datacenterdynamics.com/en/news/japans-jera-in-talks-with-us-hyperscalers-to-colocate-data-centers-at-thermal-power-plants-in-japan/)).
- **KT Cloud Ansan**, South Korea: 60MW anchor lease at Keppel's greenfield, liquid-cooled site, 52,620 sqm, service-ready by 2030 ([DCD](https://www.datacenterdynamics.com/en/news/kt-cloud-signs-60mw-lease-at-data-center-in-ansan-south-korea/)).
- **Google Farciennes**, Belgium: works paused after construction continued despite a permit minister François Desquesnes revoked in August 2026, which Greenpeace spotted in satellite images. Official Raphael Stokis says 300 workers were on site; Google appealed in October ([DCD](https://www.datacenterdynamics.com/en/news/construction-paused-at-google-data-center-in-farciennes-belgium/)).
- **US Air Force unnamed site:** a sources-sought request, not an award, for up to about 30,000 GPUs and about $2 billion; the current room envelope is about 750kW, scalable to 30MW. Responses are due December 11 ([DCD](https://www.datacenterdynamics.com/en/news/us-air-force-plans-30000-gpu-hpc-and-ai-supercomputer/)).
- **Project Eco**, Jacumba Hot Springs, California: Ignis reportedly plans up to 500MW on 177 acres, per local press via DCD; still in planning, no application submitted ([DCD](https://www.datacenterdynamics.com/en/news/500mw-data-center-project-planned-outside-san-diego-california/)).
- **Hermes Data Center**, Sines, Portugal: Fortitude Capital plans 202MW for AI and HPC; timelines not shared ([DCD](https://www.datacenterdynamics.com/en/news/fortitude-capital-plans-a-202-mw-ai-campus-in-sines/)).
- **Datagrid Invercargill**, New Zealand: 280MW planned. Meridian pays US$30 million for 11.27%, after Mercury's July investment, and holds a 140MW power purchase option running 15 years from between July 2028 and January 2029 ([DCD](https://www.datacenterdynamics.com/en/news/nz-energy-firm-meridian-invests-in-datagrid/)).
- **TRG HOU2**, Houston: 24MW across 110,000 sq ft, offered for single-tenant pre-lease with grid power already contracted ([DCD](https://www.datacenterdynamics.com/en/analysis/trg-data-center-houston-atlanta/)).
- **Safaricom**, Kenya and Ethiopia: Vodafone plans to grow capacity from 9.1MW to 35MW across two central sites; no site split given ([DCD](https://www.datacenterdynamics.com/en/news/vodafone-to-triple-safaricoms-data-center-footprint-to-35mw/)).
- **Bharti Airtel Assam**, India: Rs 1,200 crore ($129.6m) total, comprising: Guwahati Rs 700 crore ($75.6m), Jorhat and Silchar Rs 500 crore ($54m). Jorhat is 10MW and Silchar 15MW; Guwahati size not specified in source; possibly live by 2028 ([DCD](https://www.datacenterdynamics.com/en/news/bharti-airtel-to-develop-three-data-centers-in-assam-india/)).
- **Etix BKK#2**, Bangkok: 23MW IT live across 16,000 sqm, up to 150kW density, waterless liquid and air cooling; the campus reaches 25MW ([DCD](https://www.datacenterdynamics.com/en/news/etix-launches-23mw-data-center-in-bangkok-thailand/)).
- **BitHash**, Oman: phased 250MW AI site targeting 2030, per Entrepreneur ME via DCD. The company's own posts conflict, with another citing up to 230MW around 2035; no site identified ([DCD](https://www.datacenterdynamics.com/en/news/uaes-bithash-targets-ai-data-centers-eyes-250mw-project-in-oman/)).
- **Chaince Compute Big Lake**, Reagan County, Texas: binding framework with Bit Lake (60/40), 5MW first phase subject to AEP Texas confirmation, up to 25MW later ([DCD](https://www.datacenterdynamics.com/en/news/chaince-digital-launches-ai-data-center-unit-targets-projects-up-to-100mw/)).
- **Galaxy Venus Data Center**, Perak, Malaysia: non-binding MoU to explore solar from Helios Solar's 1GW Gua Musang park, targeted 2028 to 2029 with 1.6GWh storage; DC size not specified in source ([DCD](https://www.datacenterdynamics.com/en/news/helios-solar-and-galaxy-venus-data-center-sign-mou-to-explore-solar-supply-for-data-center-in-perak-malaysia/)).
- **GAIL Faridabad**, Haryana, India: seeks a 50:50 JV partner for at least 5MW over 2,100 sqm at its Chhainsa compressor station ([DCD](https://www.datacenterdynamics.com/en/news/indias-state-owned-natural-gas-company-seeks-investment-partner-for-data-center-project/)).
- **Tecto TREC1**, Recife, Brazil: 1MW initial, expandable to 6MW, operations Q1 2027; investment and exact location not disclosed ([DCD](https://www.datacenterdynamics.com/en/news/tecto-announces-trec1-its-first-data-center-in-recife-and-connects-pernambuco-to-its-operations-in-fortaleza/)).
- **QAI Seoul:** IQM will install a 54-qubit Radiance R3 alongside GPUs by end of 2027, per the vendor announcement; size not specified in source ([DCD](https://www.datacenterdynamics.com/en/news/iqm-to-deliver-radiance-r3-quantum-computer-to-qai-data-center-in-south-korea/)).
- **Cango Soperton**, Georgia: 50MW site; a contractor died of burns from the October 22 fire, which officials believe began in an electrical system ([DCD](https://www.datacenterdynamics.com/en/news/man-dies-after-suffering-burns-in-fire-at-bitcoin-mining-data-center-in-georgia/)).
- **University of Augsburg**, Bavaria, Germany: broke ground on a data center of more than 4,000 sqm for HPC and AI research, about €60 million in state funding, completion 2029 ([DCD](https://www.datacenterdynamics.com/en/news/university-of-augsburg-breaks-ground-on-new-data-center-at-augsburg-innovation-park-germany/)).
- **Nixval Valencia**, Spain: NxN acquires Occentus Networks, renamed NxN Datacenter Services Iberia; terms not shared; more than 1,500 sqm technical space ([DCD](https://www.datacenterdynamics.com/en/news/spains-nxn-acquires-hosting-and-services-firm-occentus-networks/)).
- **Datlantis and RuVDS:** Datlantis claims tested underwater prototypes, with no trial site or compute disclosed. RuVDS plans a floating server on an Antarctic expedition vessel from January ([DCD](https://www.datacenterdynamics.com/en/news/datlantis-pitches-underwater-data-centers-powered-by-offshore-wind/)).
- **Akashi**, Astana, Kazakhstan: the vendor says 100MW modular campus, with DC-1 (5.3MW) in Q2 2027 ([DCD](https://www.datacenterdynamics.com/en/product-news/how-akashi-data-center-is-preparing-for-the-ai-era/)).
- **Madrone:** $500,000 seed backed by Nvidia for chiller-free cooling; the company has a 100kW demonstrator and claims up to 30 percent of cooling power could be redirected ([DCD](https://www.datacenterdynamics.com/en/news/nvidia-backs-startup-developing-chiller-free-data-center-cooling-system/)).
- **Vertiv 800VDC:** the vendor claims its 90kW PowerDirect 3000 converter reaches 98.5 percent peak efficiency and adds a 5MW PowerNexus MV solid-state transformer ([DCD](https://www.datacenterdynamics.com/en/news/vertiv-expands-800vdc-power-portfolio-for-ai-data-center-market/)).
- **Ampace PU100 UPS battery:** the vendor claims thermal runaway did not propagate in a UL 9540A test ([DCD](https://www.datacenterdynamics.com/en/marketwatch/when-batteries-fail-can-data-centers-contain-the-fire/)).
- **Project Triboro**, Olyphant, Pennsylvania: seven 420,000 sq ft buildings; see AI Dissonance. **Strabag Seestadt Aspern**, Vienna: see Legislation & Regulation. **Compass:** see Business & Money. **Cheyenne Light and Microsoft Wyoming:** see US Power Grid Capacity.
- **Compare:** SpaceX (Megapacks plus planned gas, behind the meter), Jera (siting at existing thermal plants) and Helios Solar with Galaxy Venus (solar plus storage) take three routes to power without waiting on the grid. Helios 5 and Nexus Hubbard both surfaced through Texas TDLR filings.

## ⚙️ Hardware & Chips

- **Microsoft Ignite:** Azure Cobalt 200 VMs are generally available, with 132 Arm Neoverse V3 cores on TSMC 3nm, in 14 regions with 23 planned by end of 2026. GPT-6.2 Sol ($2/$10 per million input/output tokens) and Astra ($8/$40) are GA in Foundry. Entra auto-assigns Agent IDs to Copilot CLI and Claude Code ([InfoQ](https://www.infoq.com/news/2026/11/microsoft-ignite-2026-recap/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** Microsoft treats third-party coding agents as identities to govern, and prices Astra above Sol while consumer limits tighten.
- **Kioxia GP2 SSD:** the vendor claims more than 18 million random read IOPS at 512B, PCIe 6.0 and up to 28 GB/s sequential reads, as a GPU-addressable flash tier alternative to adding HBM or DRAM; evaluation samples by end of 2027 ([ServeTheHome](https://www.servethehome.com/kioxia-gp2-series-ssd/)).
- **Fujitsu Monaka CPU servers:** orderable in Europe from December 2026, shipping from April 2027; the vendor claims twice the AI inference throughput of other CPUs ([DCD](https://www.datacenterdynamics.com/en/news/fujitsu-monaka-cpu-server-will-be-available-to-european-customers-from-december-2026/)).
- **Altair Semiconductor** reportedly raises $100 million led by Maverick Silicon to pivot toward edge AI agents, per Globes via DCD ([DCD](https://www.datacenterdynamics.com/en/news/sony-spin-off-altair-targets-edge-ai-connectivity-with-100m-raise-report/)).
- **Space compute:** Ramon.Space raises a $124 million Series B led by PSG Equity for onboard computing, with Micron among new investors ([DCD](https://www.datacenterdynamics.com/en/news/ramonspace-raises-124m-series-b-after-claiming-earth-grade-computing-in-space/)). NeuralSat raises a €2.9 million ($3.2m) pre-seed for a 72-satellite, 50 Gbps relay and compute constellation, with a demo in Q4 2027 ([DCD](https://www.datacenterdynamics.com/en/news/neuralsat-raises-32m-pre-seed-on-72-satellite-50gbps-data-relay-processing-constellation/)). **Take:** Ramon.Space sells onboard computers today to customers including Eutelsat OneWeb, while NeuralSat is pre-demo on a relay network, so one could supply constellations like the other.

## 🤖 Coding Agent Changelog

### Claude Code

- No release. **Claude Ship** ships separately; see What Matters Today. A merged PR exempts some issues from stale-marking ([PR](https://github.com/anthropics/claude-code/pull/112436)).
- **Regression** (reported, unconfirmed, since 2.1.332; worked in 2.1.326): Windows crash with Bun 1.4.6 ([issue](https://github.com/anthropics/claude-code/issues/112842)). Also reported: an instruction-following drop on Fable 5.2 and Opus 5.5, introducing version unidentified ([issue](https://github.com/anthropics/claude-code/issues/112847)).

### pi

- **v1.7.0:** resumes terminal sessions via OSC 7577 and keeps the Copilot prompt cache on thinking-level changes. Breaking: telemetry reporting and the enableInstallTelemetry setting are removed ([release](https://github.com/earendil-works/pi/releases/tag/v1.7.0)).
- **Regression** (reported, unconfirmed, since 1.6.1): Baseten DeepSeek V4.1 Flash 1017 Fast lost medium effort ([issue](https://github.com/earendil-works/pi/issues/12612)).
- **oh-my-pi** (fork): sources do not show whether it absorbed 1.7.0. Reported, unconfirmed, since 19.2.0: the `cache` status segment is missing in `nerd` and `full` presets ([issue](https://github.com/can1357/oh-my-pi/issues/20911)); a TUI crash occurs when a tool_call hook blocks a named task spawn, since 19.2.x ([issue](https://github.com/can1357/oh-my-pi/issues/20860)).

### t3-code

- **v0.1.14-nightly.20261128.5385** (and 5 earlier builds): draw on image attachments before sending, attach folders from the composer, and save chat or file-panel files to your machine ([release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.14-nightly.20261128.5385)).

### Hermes

- **v0.23.5:** idle gateway chats compact in the background; read_file tails with negative offsets and lists directories; the Solstice provider moves to the stateless Interactions API ([release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.5)).
- **Canary 20261128:** Desktop runs a bounded 120s default-plugins preflight before the local gateway; Docker image upgrades no longer fill the data volume; managed environments prepend installed git to PATH ([canary](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261128T064458Z-v0.23.5)).

### Codex

- No release. Merged: `/diff` opens in a TUI sidebar tab ([PR](https://github.com/openai/codex/pull/64258)), local Markdown images render inline ([PR](https://github.com/openai/codex/pull/64254)), and thread permissions are tracked and shown in status ([PR](https://github.com/openai/codex/pull/64393), [PR](https://github.com/openai/codex/pull/64396)). None is a foundational CLI or config change.

### llama.cpp

- **b12830** (and 7 earlier builds): K2 Horizon tool calls now run inside unclosed reasoning blocks; Inkling 2 tau is applied after embeddings; CUDA ADD_ID works above 65535 tokens ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12830)).
- **Regressions** (reported, unconfirmed): Vulkan prefill 20-40% slower on RX 7900 XTX (Windows) since PR #31323 ([issue](https://github.com/ggml-org/llama.cpp/issues/33241)); Nemotron 3.5 Bolt 74B regressed on 7900 XTX Vulkan since commit a38695013 ([issue](https://github.com/ggml-org/llama.cpp/issues/33249)).

### vLLM

- No release. **Regression** (reported, unconfirmed, since PR #70197): VLLM_BATCH_INVARIANT=1 loads tuned LoRA shrink configs ([issue](https://github.com/vllm-project/vllm/issues/70406)).

## 🏢 OpenAI

- **GPT-6.2 billing fix:** see What Matters Today. Astra reception and the sketchbook follow-up: see Model Releases & Research.

## 🛠️ Tools & Community

- **GreenLight** (open-source take on Meta's RADAR) lets a PyTorch AI reviewer approve maintainers' pull requests; everyone else is reviewed in shadow mode. Approved diffs wait in a landing queue, 24 hours in the paper's diagram, where a human can reject them ([InfoQ](https://www.infoq.com/news/2026/11/uber-agent-spend-steady/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** Like Claude Ship's observe mode, it stages trust before approving, but adds a human veto window where Claude Ship relies on a policy file.
- **ggml-org** launches a llama.cpp × AMD benchmark dashboard on Hugging Face, with weekly llama-bench runs on Radeon 8060S and Radeon AI Pro R9700S ([HF blog](https://huggingface.co/blog/ggml-org/llamacpp-amd-bench)). **Take:** It would suit catching slowdowns like the reported Vulkan prefill regression, though its hardware list excludes the RX 7900 XTX.
- **Simon Willison** explains that sqlite3_rsync copies a database snapshot over SSH without a full local duplicate, exchanging page hashes ([Simon Willison](https://simonwillison.net/2026/Nov/26/sqlite3-rsync/)).
- **HF trending models:** LTX-2.5 is new at #7 with 13777 likes ([HF](https://huggingface.co/Lightricks/LTX-2.5)); OCRia-nano-1 is new at #8 ([HF](https://huggingface.co/llamaindex/OCRia-nano-1)). Sulphur-3 rose to #3 ([HF](https://huggingface.co/SulphurAI/Sulphur-3)). A DeepSeek-V4.1-Flash Nemotron coding-distill dataset is new at #5 among datasets ([HF](https://huggingface.co/datasets/Jackrong/DeepSeek-V4.1-Flash-Nemotron-Competitive-Coding-Distill)).

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage

- **OpenRouter, as of Nov 27, 2026** (source gives rank changes, not % or point deltas): all top eight ranks are unchanged. DeepSeek V4.1 Flash 1017 leads at 83.1T tokens, then Hy4 flash at 38.7T and DeepSeek V4.1 Flash at 13.9T. Claude Opus 5.5 is #6 at 6.36T ([OpenRouter](https://openrouter.ai/rankings)).
- **Anthropic Economic Index:** latest release June 26, 2026; unchanged since ([Anthropic](https://www.anthropic.com/economic-index)).
- **Open-weights reach:** Mistral Small 4 enters Firefox Smart Window; see Business & Money.

## 🎭 Drama & Notable Discourse

- **Follow-up, Huang reinstatement:** Trump says he "made the deal" with Nvidia's board ([BBC](https://www.bbc.com/news/articles/cq5y1k8ez407o)). People familiar told CNBC a sharp post-resignation stock drop and questions about interim CEO Colette Kress also drove the decision ([CNBC](https://www.cnbc.com/2026/11/23/trump-nvidia-jensen-huang.html)). Huang reportedly calls the claim the board caved "completely untrue" ([Yahoo Finance](https://finance.yahoo.com/markets/stocks/live/nvidia-live-updates-nvidia-stock-falls-as-exuberance-fades-after-jensen-huangs-return-as-ceo-142100906.html)); the causal framing is disputed.

## ⚖️ Legislation & Regulation

### Rest of World

- **Vienna** publishes a 10-principle Data Center Strategy: sites steered to municipally suitable locations, early Wiener Netze grid-viability guarantees, and waste heat to district heating. Demand is cited at 250MW by 2030 ([DCD](https://www.datacenterdynamics.com/en/news/sebastian-gemkow/)). **Take:** Cities are moving from case-by-case approvals to rules that set terms up front. Strabag's Seestadt Aspern site plans up to 48MW; status planned.

## 🧭 AI Dissonance — Society & Infrastructure Acceptance

- **Olyphant, Pennsylvania:** police arrested suspects over threats to council members after a 5-2 vote settled a lawsuit with ERCOR Triboro, paving the way for Project Triboro: seven 420,000 sq ft buildings on 470 acres, with $101 million in community benefits over 15 years ([DCD](https://www.datacenterdynamics.com/en/news/pennsylvania-police-arrest-suspects-over-threats-to-olyphant-council-after-controversial-data-center-vote/)). **Take:** Local data center fights are escalating from petitions to alleged criminal intimidation.
- **Stockton West MP Matt Vickers** leads a petition against Tract's campus, with more than 6,000 signatures; see What Matters Today. **Greenpeace** satellite images exposed construction at Google's Farciennes site after its permit was revoked; see Data Center Infrastructure.

## 🎓 AI Conventions, Lectures & Best Practices

- **Hugging Face, multi-agent swarm tutorial:** four agents sharing one Qwen3-0.6B policy on an integer-ordering task go from 6.6% to 82.3% success over 75 steps, with team reward reduced by generated tokens; tokens per attempt fall 37.4%. The TRL run takes about five hours on two H200s for roughly $50 ([HF blog](https://huggingface.co/blog/training-swarms)).

## 🔌 US Power Grid Capacity

- **Cheyenne Light**, Wyoming: files with FERC for transmission and distribution to three planned Microsoft data centers, which Microsoft pays for via a contribution in aid of construction and an up-front payment. Agreements are redacted, so capacity is not specified in source; its pipeline exceeds 3GW ([DCD](https://www.datacenterdynamics.com/en/news/cheyenne-light-applies-to-build-transmission-infrastructure-for-three-microsoft-data-centers-in-wyoming/)). **Take:** Filing "out of an abundance of caution" signals that utilities expect FERC scrutiny of large-load cost recovery.

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, repos, verification, data</small> | 104 | 619k | 153k | 192k | 426k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 143k | 34.8k | 0 | 143k |
| **Sonnet 5.5**<br><small>writing</small> | 18 | 36 | 151 | 1.63M | 131k |
| **Total** | **124** | **762k** | **188k** | **1.82M** | **700k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
