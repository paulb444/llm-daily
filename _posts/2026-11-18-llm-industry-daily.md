---
layout: issue
title: "LLM Industry Daily — November 18, 2026"
date: 2026-11-18 08:00:00 -0500
teaser: "Nvidia posts a 15.84B quarter; board says it won't reinstate Huang"
---
# LLM Industry Daily — November 18, 2026


## ⚡ What Matters Today

- **Nvidia posts a $115.84 billion quarter; its board says it won't reinstate Huang.** Revenue rose 103 percent, earnings were $2.68 per share, and data center revenue was $107.6bn, up 110 percent. Interim CEO Colette Kress raised guidance by five percent, now expecting 75 percent growth (period not specified), assuming no China data center compute revenue. Board chair Harvey Jones said Nvidia "does not intend to reinstate Jensen as CEO." ([DCD](https://www.datacenterdynamics.com/en/news/nvidia-doubles-quarterly-earnings-raises-forecast-does-not-intend-to-reinstate-jensen-as-ceo/)) ([SEC 8-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000088/nvda-20261117.htm)) **Take:** Demand held through the leadership change. With China already out of the outlook, the open risk is governance: the investigation into Singapore sales that ended up in China, which Nvidia has denied.
- **OpenAI ships GPT-6.2 Astra and Sol and cuts the frontier model's API price.** Astra costs $8 per million input tokens, $0.40 cached and $40 output, 20% below GPT-6 Astra on input and output; OpenAI says it scores 5.2 points higher than GPT-6 Astra on Agents' Last Exam. ([OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)) ([Artificial Analysis](https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol)) **Take:** OpenAI is competing on cost per task, while independent evaluations (see Model Releases & Research) favor Claude.
- **Grid operators file large-load interconnection reforms at FERC.** Responding to FERC's June show cause orders, PJM proposed a Fast Energization Process that studies large loads and generation together in one year, about twice as fast as today, per PJM. ISO-NE plans to require large loads to bring their own new capacity. ([Utility Dive](https://www.utilitydive.com/news/pjm-rto-large-load-interconnection-ferc-show-cause/874872/)) **Take:** Faster grid access is being traded for flexibility or self-supply, favoring developers who can curtail or build generation, such as Aetheris pairing a 96MW site with a 180MW gas plant ([DCD](https://www.datacenterdynamics.com/en/news/mormon-data-center-texas/)).
- **About 191 GW of planned data center capacity faces new risk after the midterms, per Orennia.** Exposure is concentrated in Texas, Ohio and Georgia; nearly all of 46 municipal ballot measures tracked by Bloomberg produced restrictions, moratoriums or bans. ([Utility Dive](https://www.utilitydive.com/news/data-center-slowdown-raises-risks-for-utility-investments/874924/)) **Take:** Local opposition now shows up in modeled utility and renewables returns, so utilities that built for demand carry the cost if it fails to arrive.
- **Giga Energy signs a $1bn, ten-year lease for 60MW in Hunt County, Texas.** An unnamed US-based AI cloud provider will lease capacity at Project Clay, with service due in spring 2027. ([DCD](https://www.datacenterdynamics.com/en/news/giga-energy-secures-1bn-lease-for-60mw-data-center-in-hunt-county-texas/)) **Take:** Long contracted leases with AI clouds are the hedge against the cancellation risk Orennia flags in Texas; factory-built campuses compete on speed to power.

## 💰 Business & Money

- **Amazon** will invest $7 billion in Indian renewable projects by 2030; this builds on $4bn of renewable capacity already contracted there. ([DCD](https://www.datacenterdynamics.com/en/news/amazon-to-invest-7bn-into-indian-renewable-projects-by-2030/))
- **Amazon's four Indian PPAs** total 934MW, comprising: 234MW wind and 200MW solar-wind in Karnataka, 300MW solar in Madhya Pradesh, 200MW solar in Rajasthan. The Karnataka wind farm is the largest wind project Amazon has agreed to offtake from in Asia. ([DCD](https://www.datacenterdynamics.com/en/news/amazon-to-invest-7bn-into-indian-renewable-projects-by-2030/))
- **Le Groupe Figaro and OpenAI** announced a strategic partnership on November 18, 2026: Le Figaro journalism becomes discoverable in ChatGPT through summaries, excerpts and links, and Le Figaro plans ChatGPT Enterprise across teams. OpenAI says Le Figaro keeps full editorial independence. ([OpenAI](https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership)) ([Groupe Figaro release](https://www.groupefigaro.com/uploads/a014d3b4-4841-4a25-bee0-82f5360c1f77.pdf)) ([Le Figaro, in French](https://www.lefigaro.fr/medias/chatgpt-sera-plus-complet-et-plus-fiable-en-2027-grace-a-nos-contenus-le-figaro-scelle-un-accord-strategique-avec-openai-20261118)) **Take:** Publisher deals now bundle content licensing with Enterprise seats, making OpenAI both distribution partner and vendor to the newsroom.

## 🚀 Model Releases & Research

- **GPT-6.2 Sol** stays at $2/$10 per million tokens, per Simon Willison. Both models are in the API and, per OpenAI, in ChatGPT Work and Codex for Plus, Pro, Enterprise and Edu users. ([Simon Willison](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/)) ([OpenAI Community](https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531))
- **GPT-6.2 Astra** sets a new high on Terminal-Bench-Science 0.1, scoring 9 percentage points above GPT-6 Astra, OpenAI says. Willison writes it scores below Claude Fable 5.2 on various benchmarks and some users find its style confusing; a VentureBeat headline reports negative power-user reception. ([OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)) ([Simon Willison](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/)) ([VentureBeat](https://venturebeat.com/technology/essentially-unusable-openai-launches-gpt-6-2-astra-and-sol-to-negative-reception-from-ai-power-users))
- **Epoch AI** finds Fable 5.2 and GPT-6.2 Astra roughly tied for a record on its Epoch Capabilities Index, but Fable 5.2 averaged 17 points higher on Epoch's own Automation Reports. ([Epoch AI](https://epoch.ai/publications/how-good-are-fable-5-2-and-gpt-6-2-astra-at-real-work))
- **Epoch's data center analysis task:** Fable 5.2 scored about 98%, Opus 5.5 88%, GPT-6.2 Astra 65%. Opus 5.5 finished the EcoDataCenter 1 analysis in just under 3 hours, below a contractor's typical cost; Astra covered one building and omitted chip estimates through overly cautious judgments. ([Epoch AI](https://epoch.ai/publications/how-good-are-fable-5-2-and-gpt-6-2-astra-at-real-work)) **Take:** On real work, judgment calls matter more than benchmark points.
- **Astra for Law 6.2** scores 20.8% on Harvey LAB-AA versus 15.0% for GPT-6.2 Astra, per OpenAI and The Defiant, and 53.8% on Vals AI's Legal Research Bench (November 16). ([The Defiant](https://thedefiant.io/frontier/ai/openai-widens-astra-for-law-access-with-gpt-6-2-update)) ([Vals AI](https://www.vals.ai/benchmarks/legal_research))
- **Astra for Law access:** every ChatGPT Enterprise customer can request it via the Trusted Access Program; API access is planned only for partners such as Harvey and Legora, per CryptoBriefing. According to OpenAI, it averaged 0.03 material hallucinations per assignment versus 0.59 for Claude Opus 5.5. ([OpenAI](https://openai.com/index/astra-law-6-2)) ([CryptoBriefing](https://cryptobriefing.com/openai-astra-for-law-tops-harvey-benchmark/))
- **Compare:** OpenAI's gains (Agents' Last Exam, LAB-AA) are self-reported, while Epoch and Willison put Fable 5.2 ahead; vertical configurations like Astra for Law are where OpenAI claims clear wins ([OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)) ([Epoch AI](https://epoch.ai/publications/how-good-are-fable-5-2-and-gpt-6-2-astra-at-real-work)).
- **HF Daily Papers:** "Beyond Answering: Learning to Speak First and Act in Streami…" (title truncated in source) leads with 32 upvotes; VideoNexus: Video Perception Beyond the Reasoning Context has 17. ([HF Papers](https://huggingface.co/papers/2611.17048)) ([HF Papers](https://huggingface.co/papers/2611.21392))

## 🏗️ Data Center Infrastructure

- **Project Clay** (Giga Energy), Hunt County, Texas: 60MW, under construction, service spring 2027; see What Matters Today.
- **Macquarie Engineering and Technology Campus** (Macquarie Data Centres), Macquarie Park, Ryde, Sydney: planned 200MW on 42,015 sqm, about AU$2 billion (US$1.35bn), demolishing office buildings. SEARS application filed; timelines not shared. ([DCD](https://www.datacenterdynamics.com/en/news/macquarie-data-centres-eyes-200mw-campus-in-sydney-australia/)) **Take:** Demolishing offices for 200MW suggests powered urban land is the scarce input.
- **Aetheris Infrastructure**, Cottle County, Texas: approved 96MW data center plus 180MW natural gas plant on 3,710 acres bought from a Latter-day Saints subsidiary and 542 acres from another landowner. Aetheris pays $1.5 million within 90 days, then $2.5 million annually, and must start construction within 90 days. ([DCD](https://www.datacenterdynamics.com/en/news/mormon-data-center-texas/))
- **Enlight and Shemen**, Hof Shemen, Haifa, Israel: planned 150MW on 20 acres, 50:50 joint venture, grid application submitted, lease about 25 years. ([DCD](https://www.datacenterdynamics.com/en/news/150mw-data-center-project-planned-in-haifa-israel/))
- **Meridian One**, Northlands Enterprise Park, Hickstead, Mid Sussex, England: planned 100MW, up to five liquid-cooled Tier IV buildings; not yet submitted for planning. ([DCD](https://www.datacenterdynamics.com/en/news/100mw-data-center-planned-in-sussex-uk/))
- **Pace DC Thurleigh Road**, Bedford, UK: four buildings on 22 hectares per a BBC site plan; size not specified in source. Pace DC claims a 186MW UK pipeline across eight sites plus 160MW in New Zealand. ([DCD](https://www.datacenterdynamics.com/en/news/100mw-data-center-planned-in-sussex-uk/))
- **NASA Ames Research Center**, Moffett Federal Airfield, California: NASA is weighing leases of land to data center operators via an Enhanced Use Lease; capacity not specified in source. Rep. Maxine Dexter introduced a bill this month to ban new data centers on Forest Service and Interior lands. ([DCD](https://www.datacenterdynamics.com/en/news/nasa-considers-opening-up-ames-research-center-land-for-private-data-centers/))
- **Patmos Fairfield**, former Walmart, Fairfield, Jefferson County, Alabama: planned 20MW initially, up to 50MW utility capacity on 205,000 sq ft; operations from May 2027. Patmos agreed terms with Alabama Power and pays the full cost to serve. ([DCD](https://www.datacenterdynamics.com/en/news/patmos-plans-50mw-data-center-outside-birmingham-alabama/))
- **Dataspace** launched as Next Capital's operator of five former Fujitsu Australia data centers, acquired in July via its AU$375 million (US$262.76m) fifth fund. ([DCD](https://www.datacenterdynamics.com/en/news/next-capital-launches-new-australian-data-center-firm-dataspace/))
- **Dataspace sites:** Homebush NSW 2.8MW (1,885 sqm); Greystanes NSW 7MW (9,000 sqm); Eight Mile Plains QLD 1MW (750 sqm); Noble Park VIC 2MW (3,050 sqm); Malaga WA 1.7MW (3,125 sqm). ([DCD](https://www.datacenterdynamics.com/en/news/next-capital-launches-new-australian-data-center-firm-dataspace/))
- **Stellanor Datacenters**, London: Gary Watson promoted to CEO; the firm, launched last year by DWS, was seeded with two London data centers from Colt; size not specified in source. ([DCD](https://www.datacenterdynamics.com/en/news/uk-data-center-firm-stellanor-promotes-gary-watson-to-ceo/))
- **Network Rail** awarded Cognizant a £133.2 million ($175.44m, excluding VAT) data center infrastructure services contract, signing expected January 2027, running through January 2034. ([DCD](https://www.datacenterdynamics.com/en/news/uks-network-rail-taps-cognizant-for-1332m-data-center-contract/))
- **EcoDataCenter 1**: location and size not specified in source; used as Epoch's analysis task, see Model Releases & Research.
- Post-midterm cancellation risk: see What Matters Today.

## ⚙️ Hardware & Chips

- **Nvidia at SC26** (Ian Buck): Nemotron for Science pairs the Nemotron 3.5 Super VL open model with an open chemistry dataset and post-training recipes; DKRZ chose Vera CPUs for HLRE-5 (early 2028); Nvidia, IBM and Fermilab plan a quantum co-design platform. ([Nvidia Blog](https://blogs.nvidia.com/blog/ian-buck-sc26/))
- **TCBP-JOBS**, a new CUDA-Q decoding algorithm, cuts error-correction research computation from 12 weeks to 45 minutes, according to Ian Buck. ([Nvidia Blog](https://blogs.nvidia.com/blog/ian-buck-sc26/))
- **Follow-up, Rubin HPC** (2028, previously covered): it will support NVFP4 through FP64, and Nvidia shares no performance or memory details. AMD plans its HPC-focused Instinct MI430X in 2027, and Intel is preparing a PCIe-based GPU D-Series, per ServeTheHome. ([ServeTheHome](https://www.servethehome.com/nvidia-announces-rubin-hpc-science-focused-server-gpu-to-arrive-in-2028/)) **Take:** Rubin HPC arrives after AMD's 2027 part with nothing yet disclosed on performance; Intel's date is not specified in source.

## 🤖 Coding Agent Changelog

- **Compare:** pi, Hermes and Willison's LLM 0.38 all added GPT-6.2 within a day of launch, while Codex (TUI voice) and oh-my-pi (Realtime endpoint) both adopt OpenAI Realtime over WebRTC. ([Simon Willison](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/)) ([pi](https://github.com/earendil-works/pi/commit/e56d35ce5eceedfa16eaf13a5f01a1f7b7271253)) ([Hermes](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261118T064620Z)) ([Codex](https://github.com/openai/codex/releases/tag/rust-v0.170.0)) ([oh-my-pi](https://github.com/can1357/oh-my-pi/releases/tag/v18.22.1))

### Claude Code

- **v2.1.327** stops project-scope `claude mcp add` and `remove` deleting other `.mcp.json` keys, keeps stored messages after a killed headless resume, and makes `/export` ask before overwriting. ([Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.327))
- **Regression (reported, unconfirmed):** since 2.1.326, `--resume --fork-session` of long sessions uploads no history to Remote Control and ignores `--name`. ([Issue](https://github.com/anthropics/claude-code/issues/110915))
- **Regression (reported, unconfirmed, version not stated):** the Claude Desktop Servers list hides stopped servers. ([Issue](https://github.com/anthropics/claude-code/issues/110928))

### pi

- **GPT-6.2 Astra and Sol** merged, with context windows of 272K (Astra) and 500K (Sol). ([Commit](https://github.com/earendil-works/pi/commit/e56d35ce5eceedfa16eaf13a5f01a1f7b7271253)) ([Context windows](https://github.com/earendil-works/pi/commit/cead615b48b80d1c61eecab2f0b576d16eeaf4c5))
- **Mac nightlies** now bundle p2 and Node and update through Sparkle. ([Commit](https://github.com/earendil-works/pi/commit/51abb2d7258fd44c6a2ccadb0a6202a41081920e))
- **P3** will ship as a single executable, per the docs commit. ([Commit](https://github.com/earendil-works/pi/commit/05fd3fbda0bbb9a1c7a76e4bf92ab58ed77c8d94))

### oh-my-pi

- **v18.22.2** adds a native Kiro provider, fixes OAuth shutdown making other sessions see accounts as depleted, and removes a wasted rejected Anthropic round trip on compaction. ([Release](https://github.com/can1357/oh-my-pi/releases/tag/v18.22.2))
- **Regression (reported, unconfirmed):** since v18.22.2, TUI loop blocks on WSL2 grow from about 0.4 s to minutes. ([Issue](https://github.com/can1357/oh-my-pi/issues/19634))
- **v18.22.1** makes the Codex client version track the latest automatically and adds `live.endpoint` and `live.apiKey` for any OpenAI Realtime WebRTC server. Breaking: the JS eval `commit` helper throws on unknown options. ([Release](https://github.com/can1357/oh-my-pi/releases/tag/v18.22.1))

### t3-code

- **v0.1.10** adds an option for hosts to require T3 Connect device approval. ([Release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.10))
- **Nightly 20261118.4877** fully translates the app into supported languages. ([Release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.11-nightly.20261118.4877))

### Hermes

- **Canary 20261118** adds GPT-6.2 Astra and Sol plus GPT Image 2.6 Flare and Sunburst on FAL, and fixes passive update checks dying with the CLI. ([Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261118T064620Z))

### Codex

- **rust-v0.170.0** adds WebRTC negotiation for TUI realtime voice calls, falls back to HTTP without retries for oversized WebSocket requests, and extends sandbox docs to permission profiles and filesystem rules. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.170.0))
- **Merged:** subagent transcripts open from the TUI sidebar and activity links. ([PR](https://github.com/openai/codex/pull/62157))

### llama.cpp

- **b12503** adds OpenVINO model support with NPU and GPU memory optimizations, Kokoro TTS in mtmd, and faster CUDA conv2d via fastdiv. ([Release](https://github.com/ggml-org/llama.cpp/releases/tag/b12503))
- **Merged:** Llama Chat runs via npx; models and MCP are now hidden by default. ([PR 32524](https://github.com/ggml-org/llama.cpp/pull/32524)) ([PR 32527](https://github.com/ggml-org/llama.cpp/pull/32527))

### vLLM

- **Merged:** diarized JSON transcriptions now stream as segments, and the Rust frontend supports `--override-generation-config`. ([Commit](https://github.com/vllm-project/vllm/commit/123f1cb71d4f28b00bbe2e96b349bcd8b345f160)) ([Commit](https://github.com/vllm-project/vllm/commit/3a1c6c43df5eb5344a3f853c34fac93c274a372f))

## 🏢 OpenAI

- **ChatGPT for Sales** pairs a new Sales plugin (workflows for choosing accounts, preparing for calls, drafting follow-ups) with 30+ new and enhanced partner plugins, including Salesforce, HubSpot, Close CRM and monday CRM. Availability varies by plan, region and workspace settings. ([OpenAI](https://openai.com/index/introducing-chatgpt-for-sales/)) ([MLQ](https://mlq.ai/news/openai-launches-chatgpt-for-sales-with-a-sales-plugin-and-more-than-30-partner-apps-including-salesforce-and-hubspot/)) **Take:** Role-based plugins make ChatGPT a front end over CRMs rather than a rival to them.
- **OpenAI for Chile** is an MoU with the Ministry of Science, Technology, Knowledge and Innovation covering public-administration adoption, civil-servant AI training and startup support, with no investment or purchasing commitment. Per OpenAI, it was signed at Semafor's conference in California; MLQ citing Diario Financiero says November 16 in San Francisco. ([OpenAI](https://openai.com/index/introducing-openai-for-chile/)) ([The Next Web](https://thenextweb.com/news/openai-for-chile-mou-public-sector-startups)) ([BNamericas](https://www.bnamericas.com/en/news/openai-chile-sign-pact-to-push-ai-adoption-in-public-sector))
- **Program backing:** the deal is supported by the US Commerce Department's American SI Exports Program, of which OpenAI is a partner. ([BNamericas](https://www.bnamericas.com/en/news/openai-chile-sign-pact-to-push-ai-adoption-in-public-sector))
- GPT-6.2 and Astra for Law: see Model Releases & Research. Le Figaro: see Business & Money.

## 🛠️ Tools & Community

- **External sandboxes for coding agents:** Simon Willison and Prime Radiant released three servers (v86/WebAssembly, container, quicksand) sharing one localhost API that Pi, Claude Code or Codex can call. ([Simon Willison](https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/))
- **Shopify Remote Dev** lets agents build and test iOS and Android apps on remote Macs and Linux VMs; three or four parallel agentic workflows maxed out a laptop. Shopify says River's share of merged PRs rose from 6% to 61%. ([InfoQ](https://www.infoq.com/news/2026/11/shopify-remote-ai-dev/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering))
- **Compare:** Willison's sandboxes and Shopify's Remote Dev both keep the agent apart from where its code runs, one for safety and one for capacity. ([Simon Willison](https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/)) ([InfoQ](https://www.infoq.com/news/2026/11/shopify-remote-ai-dev/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering))
- **Datasette Lite** was rewritten with service workers and Pyodide; a `?sqlite=` parameter selects from over 100 SQLite versions. ([Simon Willison](https://simonwillison.net/2026/Nov/17/datasette-lite/))
- **HF trending models:** Haru-4B rose to #1 from #5 (590 likes); Inkling-2-Small rose to #3 from #6; MiniMax-H3-Image fell to #4 from #1. ([Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)) ([Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)) ([MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image))
- **HF new entries:** harness-hub/Qwen3.8-27B-pi-adapted at #5 (283 likes), and nvidia/USDCraft-10K at #4 among datasets (70 likes). ([Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)) ([USDCraft-10K](https://huggingface.co/datasets/nvidia/USDCraft-10K))

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage

- **OpenRouter** top four by tokens, as of Nov 17, 2026 (rank changes, not percentages): #1 DeepSeek V4.1 Flash 1017, 61.9T (same); #2 Hy4 flash, 22.8T (new); #3 DeepSeek V4.1 Flash, 15.9T (same); #4 Hy4, 14.3T (down from #2). ([OpenRouter](https://openrouter.ai/rankings))
- **OpenRouter** ranks 5-8: #5 GLM 5.3 Flash, 11.5T (new); #6 GPT-6 Luna, 8.38T (new); #7 Claude Opus 5.5, 7.53T (new); #8 Step 5 Preview, 6.57T (new). GPT-6 Luna and Opus 5.5 are the only OpenAI and Anthropic entries listed. ([OpenRouter](https://openrouter.ai/rankings))
- **Anthropic Economic Index:** latest release June 26, 2026, unchanged since. ([Anthropic](https://www.anthropic.com/economic-index))

## ⚖️ Legislation & Regulation

### Federal (Legislative)

- **Dexter bill** (Rep. Maxine Dexter, Oregon): would ban new data centers on Forest Service and Interior lands; introduced this month. See Data Center Infrastructure.

### Local

- **Pflugerville, Texas** Proposition B passed, requiring the City Charter to include protections for data, facial recognition and surveillance technologies and a responsible AI framework, per EFF. ([EFF](https://www.eff.org/deeplinks/2026/11/voters-reject-alprs-and-surveillance-tech-ballot-box))
- **York, Maine** voters approved a ban removing the town's ALPR cameras and requiring voter approval for new ones, with nearly three-quarters in support, per EFF. **League City, Texas** voters rejected continued police ALPR use; approved November 17, starting a 72-hour removal window. ([EFF](https://www.eff.org/deeplinks/2026/11/voters-reject-alprs-and-surveillance-tech-ballot-box)) **Take:** Local ballots are curbing surveillance tech as they curb data centers (see What Matters Today).

### Executive & Agency

- **FERC large-load filings** from PJM, ISO-NE and MISO: see What Matters Today and US Power Grid Capacity.

## 🧭 AI Dissonance — Society & Infrastructure Acceptance

- **Gary Marcus** argues AI appears partly responsible for recent outages, including a nationwide FAA ground stop and a United Airlines outage. He names vibe coding, agents with unrestricted internet access and bad actors exploiting AI as drivers of rising cybersecurity incidents. ([Marcus on AI](https://garymarcus.substack.com/p/wake-up-americas-infrastructure-is))
- **Marcus's unverified claims:** per Marcus, Homeland Security Secretary Mullin acknowledged on Fox News that AI might be part of the outages, and California sued OpenAI over possible computer crimes. A 178-organization cyberattack figure comes from an X post by Ryan Fournier. ([Marcus on AI](https://garymarcus.substack.com/p/wake-up-americas-infrastructure-is))
- Data center ballot measures: see What Matters Today.

## 🎓 AI Conventions, Lectures & Best Practices

- **Booking.com** (Jabez Manuel, InfoQ talk): two years back its model serving handled 480-plus models and 400 billion predictions per day, averaging under 20 milliseconds. Hadoop went into maintenance mode in 2022 and took another three years to sunset. ([InfoQ](https://www.infoq.com/presentations/bookingcom-ml-data-platform-evolution/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering))
- **The Pragmatic Engineer** guide on moving from frontier lab APIs to open-model inference providers (paywalled; visible text only): Uber cut per-token costs by 50%, Pinterest by 90% and AT&T by 56% after moving to open models. ([Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/inference-engineering-for-software-engineers))

## 🔌 US Power Grid Capacity

- **Siemens Energy** reports a 65 GW total gas turbine order backlog, including 42 GW of FY2026 new orders. Data center customers are about 15 billion euros ($16.5 billion), under 10% of the 164 billion euro backlog, per CFO Maria Ferraro. ([Utility Dive](https://www.utilitydive.com/news/elevated-demand-for-gas-turbines-could-persist-through-2035-siemens-energy/874839/))
- **Siemens Energy outlook:** CEO Christian Bruch expects orders at roughly the current pace through 2030, possibly 2035, and plans about 4 billion euros ($4.4 billion) in manufacturing capacity by 2030. **Take:** Turbine demand does not hinge on data centers alone. ([Utility Dive](https://www.utilitydive.com/news/elevated-demand-for-gas-turbines-could-persist-through-2035-siemens-energy/874839/))
- **Orennia modeling:** if 20% of projected ERCOT data center demand fails to materialize, solar and wind average wholesale revenue could fall 38% and 37%; delaying half of PJM's planned buildout two years could cut four-hour battery arbitrage spreads 16%. ([Utility Dive](https://www.utilitydive.com/news/data-center-slowdown-raises-risks-for-utility-investments/874924/))
- **PJM and MISO filings:** PJM also proposed a ride-through requirement for large computational loads. MISO proposed a service for loads that can limit usage under certain price and reliability conditions; ISO-NE aims to file its framework later this year. ([Utility Dive](https://www.utilitydive.com/news/pjm-rto-large-load-interconnection-ferc-show-cause/874872/))
- **Aetheris** 180MW gas plant, Cottle County, Texas: planned; see Data Center Infrastructure.

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, verification, repos, data</small> | 76 | 602k | 110k | 95.5k | 506k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 132k | 33.5k | 0 | 132k |
| **Sonnet 5.5**<br><small>writing</small> | 21 | 42 | 165 | 1.82M | 133k |
| **Total** | **99** | **734k** | **144k** | **1.91M** | **771k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
