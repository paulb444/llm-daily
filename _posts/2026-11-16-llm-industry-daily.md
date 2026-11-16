---
layout: issue
title: "LLM Industry Daily — November 16, 2026"
date: 2026-11-16 08:00:00 -0500
teaser: "Core Scientific exits bitcoin mining by year-end as AI colocation hits 15.4 million quarterly revenue"
---
# LLM Industry Daily — November 16, 2026


## ⚡ What Matters Today

- **Core Scientific exits bitcoin mining by year-end.** Q3 revenue was $232.9 million versus $81.1 million a year earlier, colocation $215.4 million versus $15 million, with 485MW of colocation billing at end of September ([DCD](https://www.datacenterdynamics.com/en/news/core-scientific-to-exit-bitcoin-mining-by-end-of-2026-as-it-grows-ai-colo-business/)). **Take:** Mining power is being repriced as AI capacity, and two counterparties (CoreWeave, AMD) hold most contracted megawatts.
- **Southern Co. says its five-year capital plan could rise to $100 billion.** Signed large-load contracts reached 21 GW, with 7 GW more in late stages ([Utility Dive](https://www.utilitydive.com/news/southern/874111/)). **Take:** Data center load is steering Southeast utility capital to gas and nuclear, so who pays becomes the regulatory question.
- **AWS breaks ground on $7bn Project Rise in Wheatfield, Indiana.** Per The Times of Northwest Indiana via DCD, the campus will have up to nine buildings on 304 acres sold by NIPSCO ([DCD](https://www.datacenterdynamics.com/en/news/aws-breaks-ground-on-7bn-data-center-in-indiana/)). **Take:** Utility-sold land beside a power plant preempts the power objections visible in public polling.
- **Stanford HAI: corporate AI investment has passed $1 trillion in 2026.** That exceeds the entire 2025 total by 46%, while 60% of US adults would be uncomfortable with a new nearby data center, including majorities in both parties ([Stanford HAI](https://hai.stanford.edu/news/the-jagged-edge-of-the-ai-boom)). **Take:** Because opposition is bipartisan, permitting risk becomes a cost of capital.
- **OpenAI launches a science blog.** OpenAI says an internal system produced a proof addressing Navier–Stokes existence and smoothness in September ([OpenAI](https://openai.com/index/our-new-blog-for-science)). Visiting scientist Nathaniel Craig credits GPT‑6 Astra with leading a candidate Standard Model lattice proof ([OpenAI](https://openai.com/index/step-toward-defining-the-standard-model), [The Defiant](https://thedefiant.io/frontier/ai/openai-details-astra-s-role-in-standard-model-lattice-proof)). **Take:** These are OpenAI's own claims; independent validation is the thing to watch.

## 💰 Business & Money

- **LVMH Media Division and OpenAI** signed a strategic agreement on 16 November 2026 deploying ChatGPT Enterprise across a division of 17 media brands and 1,800 employees, plus more LVMH content in ChatGPT with direct links to original articles ([OpenAI](https://openai.com/index/lvmh-media-division-partnership), [Cryptonomist](https://en.cryptonomist.ch/2026/11/16/lvmh-media-ai-partnership/)). **Take:** It pairs content distribution in ChatGPT with an enterprise seat sale, a template other publishers may copy.
- **Mount Thor** raised $45 million, spanning a Series A co-led by CRV and Conviction and an earlier seed; round components not given. It offers bare-metal Apple hardware and VMs, and says its first data center deployed in under six months ([DCD](https://www.datacenterdynamics.com/en/news/mount-thor-raises-45m-to-fund-new-ai-cloud-offering-apple-chips-and-software/)). DCD says it may be the first AI cloud on Apple machines.
- **NBER (Van Nieuwerburgh, Su):** the authors' calibrated model finds debt finances nearly 60% of the AI compute expansion and investment exceeds the social optimum; losses reach $16.8 trillion in a low-productivity state ([NBER](https://www.nber.org/papers/w36032#fromrss)). These are model outputs, not observed figures. **Take:** Non-recourse project lenders carry the exposure if productivity disappoints.

## 🚀 Model Releases & Research

- **Tencent Hy4 flash:** 224B total parameters including 64B Engram parameters, 12B active, multimodal, 1M-token context. API pricing is 0.5 yuan input and 2 yuan output per million tokens versus 6 and 18 for Hy4 ([Pandaily](https://pandaily.com/tencent-hunyuan-hy4-flash-224b-12b-active-1m-context-workindex)). **Take:** The cut keeps pressure on long-context multimodal pricing.
- **Meta FAIR and NYU:** an encoder trained jointly from scratch is on par with a pretrained one ([alphaXiv](https://www.alphaxiv.org/abs/2611.17334)). The 200+ MLLM count comes from the authors' posts.
- **MMFlash:** speculative decoding acceptance falls from 46% to 22% as visual dependence rises, and the gap persists after multimodal training ([arXiv](https://arxiv.org/html/2611.18482v1), [HF Papers](https://huggingface.co/papers/2611.18482)).
- **Airbnb CASTLE:** per the researchers, synthetic queries and labels reach KL divergence 1.01 versus 9.33 for Promptagator ([InfoQ](https://www.infoq.com/news/2026/11/airbnb-castle/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Marimba:** typed speech decisions on frozen Qwen3-ASR 0.6B features, per a preprint ([arXiv](https://arxiv.org/html/2611.18330v1)). An r/MachineLearning post says Apache-2.0 weights and pip package marimba-audio ([Reddit](https://old.reddit.com/r/MachineLearning/comments/1xwzsm4/marimba_a_system_one_model_for_speech_r/)).
- **Sage S2.1 Flash** appeared on Hugging Face without an announcement; an r/LocalLLaMA post cites the model card claiming support for more than ten scientific input types. Not yet reported by major outlets ([Reddit](https://old.reddit.com/r/LocalLLaMA/comments/1xxn631/internlmsages21flash_hugging_face/)).
- **OpenAI science blog, further claims:** OpenAI says GPT‑Rosalind agents analyzed existing data from millions of mouse brain cells in 32 minutes with PerturbAI and Scripps Research ([OpenAI](https://openai.com/index/our-new-blog-for-science)). Its quasi-Riemann hypothesis result, per OpenAI, is not yet reported by major outlets. Craig's lattice proof was reportedly reviewed privately by three lattice theorists ([AI Weekly](https://aiweekly.co/alerts/openai-says-gpt-6-astra-led-proof-for-lattice-standard-model)).
- **HF Daily Papers:** VibePrevisBench, on agentic coding for 4D scene generation, leads with 78 upvotes ([HF Papers](https://huggingface.co/papers/2611.15789)). MIRIX-2.0, a multi-agent memory system, has 18 ([HF Papers](https://huggingface.co/papers/2611.12068)); V-JEPA-LM has 18 ([HF Papers](https://huggingface.co/papers/2611.17831)).
- **Compare:** Meta FAIR's study and MMFlash both find vision is the weak joint in multimodal LLMs, one in encoder training and one in decoding speed. Hy4 flash and Sage S2.1 Flash both ship multimodal "Flash" variants from Chinese labs.

## 🏗️ Data Center Infrastructure

- **Core Scientific Muskogee campus**, Oklahoma: planned expansion to 1.5GW gross power after the Polaris DS acquisition (about $444 million, completed in August, about 440MW of grid-connected power). It also has 590MW contracted to CoreWeave and 530MW under its AMD partnership; see What Matters Today ([DCD](https://www.datacenterdynamics.com/en/news/core-scientific-to-exit-bitcoin-mining-by-end-of-2026-as-it-grows-ai-colo-business/)).
- **AWS Project Rise**, Wheatfield, Jasper County, Indiana: under construction. AWS pays $98m in taxes upfront and contributes $700 million over 30 years; air cooling, with water used about 2 percent of the year. Per DCD, AWS invests $33 billion total, comprising: New Carlisle, Hobart and Wheatfield ($7 billion); other components not given ([DCD](https://www.datacenterdynamics.com/en/news/aws-breaks-ground-on-7bn-data-center-in-indiana/)).
- **Equinix DA13-1**, Dallas, Texas: planned four-story, 372,445 sq ft, $500 million; construction February 2027 to December 2029 ([DCD](https://www.datacenterdynamics.com/en/news/equinix-files-to-develop-new-data-center-in-dallas-texas/)).
- **Google Châteauroux**, Ozans Business Park, Indre, France: planned, up to 500MW. Engie signed an MoU to become preferred energy partner, including behind-the-meter BESS; under CNDP public consultation ([DCD](https://www.datacenterdynamics.com/en/news/engie-could-supply-power-to-planned-google-data-center-in-ch%C3%A2teauroux-france/)).
- **Epilon**, Épila, Aragón, Spain: Box2Bit exited and sells its 150MW grid connection to Blackstone's Calatorao campus (430MW in two phases; investment exceeds €13 billion, per El Español) ([DCD](https://www.datacenterdynamics.com/en/news/box2bit-sells-150-mw-to-blackstone-and-lets-epila-take-the-lead-in-aragon/)). **Take:** In Spain, grid access is the scarce asset, and denied connections push capacity toward holders of permits.
- **Astella Curitiba**, Paraná, Brazil: operational, 3.5MW initial capacity. ABL Group reportedly invested R$60 million and plans R$300 million (US$53.2m) more by 2028 ([DCD](https://www.datacenterdynamics.com/en/news/astella-part-of-the-abl-group-opens-a-data-center-in-curitiba-with-an-investment-of-r60-million/)).
- **Espírito Santo State Data Center**, Vitória, Brazil: operational, size not specified in source. Banestes signed a five-year colocation deal; a second site in Carapina is planned at US$76.5 million by 2030 ([DCD](https://www.datacenterdynamics.com/en/news/banestes-hires-prodest-to-host-equipment-at-the-espirito-santo-state-data-center/)).
- **DCD 3Q 2026 market report** (teaser figures from a gated page): global capacity up nearly two-thirds, vacancy nearly halved, record 18 GW of 3Q leasing ([DCD](https://www.datacenterdynamics.com/en/whitepapers/3q-2026-global-data-center-market-report/)).
- Mount Thor's first data center: see Business & Money. Stanford polling on data centers: see What Matters Today.

## ⚙️ Hardware & Chips

- **TE Connectivity:** Brian Payne says TE, NVIDIA and Cisco announced a 448G standard at the October 2026 OCP Summit, and describes prototype 800 volt rack-to-rack cables as the path to a megawatt per rack. These are Payne's own product claims ([ServeTheHome](https://www.servethehome.com/te-connectivity-at-ocp-summit-2026-the-interview/)).
- **cmt tune:** an r/MachineLearning user reports pageable cudaMemcpy on B300 rising from 10.2 GB/s to 51.5 GB/s for a 1 GB tensor ([Reddit](https://old.reddit.com/r/MachineLearning/comments/1xx2n25/making_cudamemcpy_5x_faster_on_a_b300_p/)).
- **CMP 170HX:** an r/LocalLLaMA user reports a voltage glitch exposing 80GB VRAM and 126 SMs, after nearly 15 hours of work ([Reddit](https://old.reddit.com/r/LocalLLaMA/comments/1xwxzgj/i_finally_succeed_the_cmp_170hx_voltage_glitch/)).

## 🤖 Coding Agent Changelog

### Claude Code
- **Regression (reported, unconfirmed):** since v2.1.325, bare `claude` exits with "Input must be provided" in Git Bash; it worked in 2.1.321 ([GitHub issue](https://github.com/anthropics/claude-code/issues/110401)).

### oh-my-pi
- **v18.20.3:** `--offline` restricts auxiliary services to the active provider. Breaking: browser screenshot coordinates use displayed image space unless `css: true` is passed, and the `seance` agent and `/seance` are removed ([release](https://github.com/can1357/oh-my-pi/releases/tag/v18.20.3)).

### t3-code
- **v0.1.10-nightly.20261116.4774:** Grok accepts steering during a response, and long threads open about 2.5 times faster ([release](https://github.com/pingdotgg/t3code/releases/tag/v0.1.10-nightly.20261116.4774)).
- **Compare:** t3-code and oh-my-pi are both multi-provider harnesses moving in opposite directions: t3-code widens steering across providers, while oh-my-pi's offline mode narrows traffic to one provider.

### Hermes
- **v0.23.1 canary 20261116:** the generic tool deadline no longer clips a tool's own timeout, database URL passwords in query strings are masked, and the plugin catalog adds permission-tiers ([release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261116T070005Z)).

### Codex
- **Remote app servers in `exec`** merged, letting `codex exec` target a remote app server ([PR 61707](https://github.com/openai/codex/pull/61707)).

### llama.cpp
- **b12438:** jinja supports `sort_keys=true` in json filters; the KleidiAI macOS arm64 build is disabled ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12438)).
- **b12436:** fixes a HIP MoE regression and a CUDA MUL_MAT_ID abort on AMD, makes Vulkan top-k tie selection deterministic, and returns 400 instead of 500 for rejected `reasoning_effort` levels ([release](https://github.com/ggml-org/llama.cpp/releases/tag/b12436)).

### vLLM
- **Rust frontend KV-sharing fast prefill** merged ([commit](https://github.com/vllm-project/vllm/commit/ab6696a5f0781422abbb9467af1c259c873afa8a)).
- **Regression (reported, unconfirmed):** FlashInfer b12x NVFP4 MoE returns garbage on SM120 since PR #64692 ([GitHub issue](https://github.com/vllm-project/vllm/issues/67914)).

## 🏢 OpenAI

- **The King's Trust and OpenAI** launch a £1 million partnership to help up to 25,000 UK young people build AI skills over 18 months, prioritizing those not in education, employment or training ([OpenAI](https://openai.com/index/the-kings-trust-and-openai)).
- **Codex reviews:** an r/codex user reports automated GPT-6 Pro code reviews running 15–45 minutes on a €200/month ChatGPT Pro subscription ([Reddit](https://old.reddit.com/r/codex/comments/1xx6a0g/anyone_hitting_chatgpt_pro_limits_today_when/)).
- **ChatGPT app:** an r/codex user reports live Codex progress on the lock screen, buggy but usable ([Reddit](https://old.reddit.com/r/codex/comments/1xxjz0k/new_update_to_the_chatgpt_app/)).
- LVMH partnership: see Business & Money. Science blog: see What Matters Today.

## 🛡️ Anthropic

- **Usage limits:** an r/ClaudeCode user reports 100% of the 5-hour limit and 16% of the weekly limit used in 3.5 hours, with an apparently shorter reset period ([Reddit](https://old.reddit.com/r/ClaudeCode/comments/1xxkdmw/reset_usage_limits_seem_significantly_reduced/)).
- **Opus consumption:** an r/ClaudeCode user reports Opus slower and using roughly 50% more tokens in recent days ([Reddit](https://old.reddit.com/r/ClaudeCode/comments/1xxl26r/opus_speed_and_token_consumption_getting_worse/)).
- Always-on agents guide: see Conventions.

## 🛠️ Tools & Community

- **AWS Emulator:** AWS open-sourced a Rust emulator of 200+ AWS service APIs, generated from 400+ Smithy models and written and tested by agents. It does not evaluate IAM policies, so it is not for security tests ([InfoQ](https://www.infoq.com/news/2026/11/aws-emulator-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)). **Take:** Free local cloud sandboxes lower the cost and blast-radius barrier to letting agents run infrastructure code.
- **NVIDIA SkillSpector:** an r/AI_Agents user reports static scans found 112 HIGH findings in anthropics/skills and 32 HIGH in addyosmani/agent-skills ([Reddit](https://old.reddit.com/r/AI_Agents/comments/1xxmpx1/i_ran_nvidias_skillspector_on_four_popular_agent/)).
- **Local MoE inference:** r/LocalLLaMA users report BigMoeOnEdge at about 35 tok/s versus about 23 for colibri on 8 GB with Qwen3.6-35B ([Reddit](https://old.reddit.com/r/LocalLLaMA/comments/1xx5fng/bigmoeonedge_outperforms_strata_and_colibri_on/)). tandem.cpp v0.3.0 claims 2-6x faster prompt processing on an RTX 5070 Ti 16 GB ([Reddit](https://old.reddit.com/r/LocalLLaMA/comments/1xxo0f5/tandemcpp_v030_prefill_speed_improved_project/)). Inpherio Live reports gpt-oss 120B at 4.5 tok/s streamed from storage on a 16GB M1 iPad Pro ([Reddit](https://old.reddit.com/r/LocalLLaMA/comments/1xxoabt/running_usable_30b_and_working_120b_models_on/)).
- **Basalt 0.4.0:** an r/LocalLLaMA user reports Qwen 3.8 27B NVFP4 at up to 776 tok/s structured output on a 5090 ([Reddit](https://old.reddit.com/r/LocalLLaMA/comments/1xx1cu9/basalt_040_more_models_still_as_fast_qwen_27b_up/)).
- **Compare:** BigMoeOnEdge, tandem.cpp and Inpherio attack the same constraint, MoE weights exceeding VRAM, via expert caching or flash streaming, competing with Strata and colibri. Basalt instead bets on one big GPU plus quantization.
- **HF trending models:** thinkingmachines/Inkling-2-Small entered at #7 with 368 likes, higurashi-ai/Haru-4B entered at #8 with 366, and Zyphra/ZONOS3-Mini rose to #6 ([Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small), [Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B), [ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)).

## 📈 LLM Adoption Tracker (US & ROW)

### Model & Provider Usage
- **OpenRouter** rankings as of November 15, 2026, are unchanged since that date: top 3 are DeepSeek V4.1 Flash 1017, Hy4, DeepSeek V4.1 Flash ([OpenRouter](https://openrouter.ai/rankings)).
- **Vercel AI Gateway:** most traffic runs on models under two months old, an effective model half-life of about six weeks, per TechRadar ([TechRadar](https://www.techradar.com/pro/teams-are-moving-to-new-models-almost-as-fast-as-labs-release-them-vercel-data-reveals-ai-models-now-have-a-half-life-of-just-six-weeks-with-most-most-ai-traffic-running-on-models-less-than-two-months-old)). An r/AI_Agents post adds "over half" of requests to models under 60 days old and three in four teams moving on ([Reddit](https://old.reddit.com/r/AI_Agents/comments/1xxmiix/new_models_keep_shipping_faster_than_my_eval/)). **Take:** Six-week lifecycles turn eval pipelines into permanent infrastructure.
- **Anthropic Economic Index:** last updated June 26, 2026, unchanged since ([Anthropic](https://www.anthropic.com/economic-index)).

**Enterprise adoption and spend**
- **Ramp:** Anthropic held 49.3% of AI token spend and OpenAI 46.1% among Ramp businesses, week ending Nov. 1, 2026. October 2026 adoption among US businesses on Ramp: Anthropic 44.8%, OpenAI 40.6%, all AI 56.8%. Prior-period comparison not specified in source ([Ramp](https://ramp.com/data/ai-index)).

**Population usage over time**
- **Gallup** (US workers): 52% use AI in their role and 30% frequently, Feb. 4–19, 2026 fieldwork; prior wave not specified in source. 47% say their organization integrated AI tools, up from 41% prior quarter, published July 20, 2026 ([Gallup](https://www.gallup.com/workplace/712736/organizational-adoption-jumps-six-points.aspx)).
- **Pew** (US adults, Feb. 17–23, 2026, 5,119 adults): 49% use AI chatbots and 24% use them daily; prior wave not specified in source ([Pew](https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/)).
- **Dartmouth/NBER panel survey** (Sacerdote, Parris-Bacon): 92% of students say AI is harmful to writing, and 84% of Dartmouth respondents say AI is changing jobs in their desired field rather than eliminating them ([NBER](https://www.nber.org/papers/w36021#fromrss)).

### Installed Hardware Base
- No installed-base counts by chip family in this week's sources: not specified in source.

## 🎭 Drama & Notable Discourse

- **Agent TypeScript hygiene:** an r/AI_Agents user reports 3 months of mostly agent-written PRs added 64 `as` casts (19 `as unknown as`) and 23 ts-ignore or expect-error comments ([Reddit](https://old.reddit.com/r/AI_Agents/comments/1xxmb72/agents_keep_making_typescript_errors_go_away/)).
- **Fable 5.2 versus Astra 6:** an r/ClaudeAI user reports Fable 5.2 Medium finished a KiCad hardware design task within session limits ([Reddit](https://old.reddit.com/r/ClaudeAI/comments/1xxnddo/fable_52_hard_mogs_gpt_astra_in_hardware_design/)).
- **Plan value:** an r/ClaudeAI user claims ChatGPT Pro $100 gives about 5-7x the usage of Claude Max $100 ([Reddit](https://old.reddit.com/r/ClaudeAI/comments/1xxmcqm/chatgpt_pro_100_vs_claude_max_100/)).

## 🧭 AI Dissonance — Society & Infrastructure Acceptance

- **Stanford HAI** (employment): its Digital Economy Lab indicators show employment declines among younger workers in AI-exposed occupations continued into 2026, particularly customer service. The article says these patterns do not establish causality ([Stanford HAI](https://hai.stanford.edu/news/the-jagged-edge-of-the-ai-boom)).
- Stanford polling on data centers and job expectations: see What Matters Today.

## 🎓 AI Conventions, Lectures & Best Practices

- **Anthropic, "Building always-on agents"** (Nov 13, William Hu), per an r/ClaudeAI post: five building blocks, namely event inbox, timers, memory, permissions and outbox ([Reddit](https://old.reddit.com/r/ClaudeAI/comments/1xxdzcf/anthropic_published_a_guide_on_building_alwayson/)). An r/AI_Agents user reports 1.51B tokens used 0.41% of quota running this way ([Reddit](https://old.reddit.com/r/AI_Agents/comments/1xxhtk5/anthropic_just_mapped_out_the_5_primitives_of/)).
- **Uber agent governance:** a registry, runtime enforcement and continuous assurance, with Argus scanning agent code and prompts. Per Uber, explicit constraints were the strongest control ([InfoQ](https://www.infoq.com/news/2026/11/uber-secure-ai-framework/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=AI%2C+ML+%26+Data+Engineering)).
- **Sub-agent cache TTL:** an r/ClaudeCode user claims a 1h cache roughly doubles cost versus 5m, and says only those two values work ([Reddit](https://old.reddit.com/r/ClaudeCode/comments/1xxkd4h/dont_set_your_subagents_to_1h_cache_unless_you/)).
- **Compare:** the always-on guide's permissions block and Uber's explicit-constraint finding converge on least privilege as the core control for long-running agents.

## 🔌 US Power Grid Capacity

### Regional Capacity & Timeline

| Region | Peak/capacity | Headroom |
|---|---|---|
| ERCOT | ~438 GW requests | not specified |
| PJM | 134,479 MW procured | 6,623 MW short |
| CAISO | 2,127 MW added | not specified |
| SPP | +8 GW peak | not specified |
| Southeast | ~10 GW approved | not specified |

Sources: [ERCOT](https://www.ercot.com/files/docs/2026/07/29/ERCOT-Senate-July-29-Panel-1-Assessing-The-Grid.pdf), [PJM](https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2025-releases/20251217-pjm-auction-procures-134479-mw-of-generation-resources.pdf), [CAISO](https://www.caiso.com/generation-transmission/resource-adequacy/2026-summer-loads-and-resources-assessment), [Ascend Analytics](https://www.ascendanalytics.com/blog/spp-the-next-high-opportunity-us-power-market), [SELC](https://www.selc.org/news/experts-say-data-center-growth-is-speculative/).

- **ERCOT:** about 438 GW of large-load interconnection requests as of June 2026 ([ERCOT](https://www.ercot.com/files/docs/2026/07/29/ERCOT-Senate-July-29-Panel-1-Assessing-The-Grid.pdf)); about 410 GW as of March 26, 2026, roughly 87% data centers ([ERCOT](https://www.ercot.com/files/docs/2026/04/01/ERCOT_LargeLoad_Update_April2026_B-C_-Hearing.pdf)).
- **PJM:** the 2027/2028 auction (Dec. 17, 2025) procured 134,479 MW, 6,623 MW short of the requirement, with a 14.8% reserve margin versus a 20% target ([PJM](https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2025-releases/20251217-pjm-auction-procures-134479-mw-of-generation-resources.pdf)).
- **CAISO:** about 2,127 MW of new resource adequacy capacity added Sept 1, 2025 to April 1, 2026 ([CAISO](https://www.caiso.com/generation-transmission/resource-adequacy/2026-summer-loads-and-resources-assessment)); the CEC forecasts data center load up 1.8 GW by 2030, as of January 2026 ([CAISO](https://www.caiso.com/generation-transmission/load/large-loads)).
- **SPP:** expects nearly 8 GW more peak demand by 2030 ([Ascend Analytics](https://www.ascendanalytics.com/blog/spp-the-next-high-opportunity-us-power-market)).
- **Southeast:** Georgia Power received PSC approval to acquire nearly 10 GW of new capacity; date not specified in source ([SELC](https://www.selc.org/news/experts-say-data-center-growth-is-speculative/)). Southern Co. figures: see What Matters Today.
- **Southwest:** hydropower April–August 2026 was 19% below last year ([EIA](https://www.eia.gov/todayinenergy/)); Arizona plans 3.2 GW of battery storage in 2026 ([EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205)).
- **NYISO:** reliability margins declining per its 2026 Power Trends report; no quantified value in source ([NYISO](https://www.nyiso.com/documents/d/guest/2026-power-trends)). MISO, ISO-NE, Northwest: capacity not specified in source.

**Changes vs last week:** no prior-week pack for comparison.

## 📊 Report Generation Stats

| Model | Calls | Input | Output | Cache read | Cache write |
|:--|--:|--:|--:|--:|--:|
| **Haiku 5.5**<br><small>articles, verification, repos, Reddit, data, weekly data</small> | 91 | 624k | 126k | 127k | 496k |
| **Opus 5.5**<br><small>brief, review</small> | 2 | 135k | 31.9k | 0 | 135k |
| **Sonnet 5.5**<br><small>writing</small> | 14 | 28 | 158 | 1.06M | 122k |
| **Total** | **107** | **759k** | **158k** | **1.19M** | **753k** |
{: .stats}

Tokens: k = thousand, M = million. Input = uncached tokens. Writing totals exclude the final stats step.
