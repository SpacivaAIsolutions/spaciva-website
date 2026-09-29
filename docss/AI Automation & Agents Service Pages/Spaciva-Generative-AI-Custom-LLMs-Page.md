# Spaciva — Generative AI & Custom LLMs Services Page

**URL:** `/services/generative-ai-custom-llms`
**Layout:** **Template C — Technical / Depth** *(first use)*
**Status:** Website-ready content + UI/UX build spec + SEO notes
**Research date:** 24 August 2026 — EU AI Act timeline verified, see Part 3

---

# READ THIS BEFORE BUILDING THE PAGE

## Two problems, one solution

**Problem one: this is a capability page, not a use-case page.** "We do generative AI" describes what you can do, not what a buyer wants done. Capability pages attract researchers and job applicants, not enquiries. Every agency has one and almost none of them convert.

**Problem two: you now have five pages in AI territory** — Agent Development, RAG Chatbots, AI Assistants, this, and arguably Workflow Automation. Adding a sixth competitor to the same query pool makes everything rank worse.

**Both problems have the same fix. Make this the hub, not another spoke.**

This page owns the layer none of the others touch: **the model itself** — selection, evaluation, fine-tuning, self-hosting, cost, guardrails, and compliance. The other four pages are applications built on top of it. This one is the technical foundation underneath them, and it routes buyers down to whichever application they actually need.

That gives you:
- A page with a defensible, non-overlapping scope
- Internal link equity flowing correctly (hub → spokes, spokes → hub)
- A home for broad, top-of-funnel AI queries that would otherwise dilute your use-case pages
- The one page a technical evaluator reads before deciding you're credible

## Why Template C, and why now

Template C is reserved for buyers who are *technical and evaluating capability rather than concept*. That is exactly who reads this page: a CTO, a technical founder, or an engineering lead asking "should we fine-tune, and do these people know what they're talking about?"

It's also the first use of Template C on the site, which matters structurally. **You now have three Template A pages and three Template B pages.** A seventh page in either would start making the site feel repetitive. This is the right page to break that with.

## One honest note about the house style

The "we'll tell you honestly not to buy this" move has now appeared as a signature section on four of your service pages. It's right, it works, and it's the best thing about this copy — but at five pages it starts to read as a formula rather than as candour, and a buyer who reads two of your pages will notice.

So on this page the honest advice is delivered as **a decision framework the reader can apply themselves**, rather than as another "here's when not to hire us" block. Same integrity, different shape. Worth watching across future pages.

---

# PART 1 — SEO SPEC

## Primary keyword

`custom LLM development`

Do not chase `generative AI development services`. It's dominated by large offshore agencies with far more domain authority, the intent behind it is vague, and even winning it brings you unqualified traffic. Keep it in the title tag for relevance and build the page to win the specific queries below.

## Ranking targets

| Keyword | Why it's worth targeting |
|---|---|
| `RAG vs fine-tuning` | **The best keyword available to this page.** High volume, genuine confusion, technical buyers, and almost every answer online is written by a vendor selling one of the two. |
| `LLM fine-tuning services` | High intent, low agency competition |
| `self-hosted LLM for business` / `private LLM deployment` | Compliance-driven, serious budgets |
| `open source LLM deployment` | Technical, growing, under-served by service providers |
| `LLM cost optimization` | Real pain once something is in production |
| `LLM evaluation` / `how to test an LLM application` | Nobody sells this and everybody needs it |
| `EU AI Act chatbot disclosure requirements` | **Dated, live, and urgent** — see Section 7 |
| `AI proof of concept development` | Top-of-funnel, routes to every other page |
| `on-premise AI for regulated industries` | Niche, high value |

**The two undervalued angles are `RAG vs fine-tuning` and the compliance cluster.** The first is a question thousands of technical people ask Google and LLMs every month, answered almost exclusively by vendors with a stake in the answer. The second is dated, currently live, and nobody in your competitive set is covering it.

## Meta

**Title (58 chars):**
```
Custom LLM Development & Generative AI Engineering | Spaciva
```

**Description (155 chars):**
```
Model selection, retrieval, fine-tuning, evaluation, and self-hosted deployment
— the engineering layer under your AI systems. Fixed scope, full ownership.
```

## Hub-and-spoke structure — this is the whole SEO strategy

```
                 Generative AI & Custom LLMs  ←── this page (hub)
                            │
        ┌──────────┬────────┴────────┬──────────────┐
        ▼          ▼                 ▼              ▼
   AI Agents   RAG Chatbots    AI Assistants   Doc Processing
```

**Every spoke links up to this page** with anchor text about the model or engineering layer. **This page links down to every spoke** from Section 9. Ship the reciprocal links in the same release, or the cluster doesn't work and the pages compete instead.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `TechArticle` on the decision framework section if you split it into a companion post

## GEO note

Section 3 is written to be extracted as a standalone answer by AI search. Keep it in plain text, out of any accordion, with the comparison in a real HTML table rather than an image. This is the section most likely to earn you citations in ChatGPT and Perplexity, which is increasingly where technical buyers start.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template C inverts A and B: dark page base, light content cards.** Two-column, but not the A pattern. Left: copy. Right: **an architecture diagram as the hero element**, not a screenshot — the layered stack, bottom to top: infrastructure → model → retrieval and context → orchestration and tools → evaluation and guardrails → application.
>
> Highlight the layers this page covers and grey the application layer, with the greyed layer linking down to Section 9. The diagram is doing the positioning work: it shows a buyer you think in layers, and it shows exactly where this page sits relative to the others.

**Eyebrow:** GENERATIVE AI & CUSTOM LLMS

# The engineering layer under your AI

Model selection, retrieval, fine-tuning, evaluation, guardrails, and deployment — including self-hosted, where your data can't leave your environment. This is the part that decides whether an AI system holds up in production or quietly degrades after launch.

**[Book a technical call]** **[See the decision framework →]**

**Proof line:**
```
Fixed scope or retainer · You own the weights, the code, and the pipeline
```

---

## SECTION 2 — Spec panel

> **UI/UX — Template C's persistent right-hand spec panel.** Sticky from below the hero to the pricing section, ≥1200px only. Collapses into a single card above the FAQ on smaller screens rather than disappearing — the content is genuinely useful, not decorative.
>
> This is the component that makes Template C feel technical. Keep it dense and factual. No marketing language inside the panel.

**AT A GLANCE**

**Model layer** — commercial APIs and open-weight models, self-hosted or managed
**Retrieval** — vector and hybrid search, chunking, reranking, evaluation
**Orchestration** — tool use, function calling, Model Context Protocol
**Evaluation** — test sets, regression suites, drift monitoring
**Infrastructure** — your cloud, your region, or on-premise
**Engagement** — fixed scope, monthly retainer, or embedded team
**You own** — weights, code, prompts, pipelines, documentation
**Data** — never used for model training
**Base** — Ahmedabad, India · [X] hours overlap with US and UK

---

## SECTION 3 — The decision framework

> **UI/UX — the signature section, and the one most likely to be cited elsewhere.** Full-width light card on the dark base. A real HTML table, plain text, no accordion, no image. Give it a heading containing the comparison phrasing.
>
> Consider splitting a longer version into a companion blog post and linking to it. This is the most linkable thing on your entire site.

## RAG vs fine-tuning vs prompting — which one does your problem need?

Almost every "should we build a custom LLM?" conversation is really this question, and it gets answered badly because most people answering it sell one specific option.

There are five approaches. They're ordered by cost and complexity, and **the right answer is nearly always the first one that works.**

| Approach | Solves | Typical cost | When it's right |
|---|---|---|---|
| **1. Prompt and context engineering** | The model has the capability but not the instruction | Lowest | Almost always try first. A surprising share of "we need a custom model" problems are solved here. |
| **2. Retrieval (RAG)** | The model doesn't know your information | Low–moderate | The default answer for anything involving your documents, policies, or records. |
| **3. Tool use and orchestration** | The model needs to look things up or take action | Moderate | When the answer lives in a live system rather than a document. |
| **4. Fine-tuning** | The model knows the facts but not the *form* — your tone, format, or a specialised task | Moderate–high | Consistency of output, narrow classification, or reducing cost by moving work to a smaller model. |
| **5. Training from scratch** | Almost nothing you will encounter | Very high | Effectively never for a business application. If someone proposes it, ask what problem the previous four failed to solve. |

### The three things most people get wrong

**Fine-tuning does not teach a model your facts.** It teaches it a behaviour, a style, or a task. If the model needs to know your refund policy, retrieval is the answer, and fine-tuning it in makes the information harder to update rather than easier. This single misunderstanding is behind most wasted fine-tuning budgets.

**Fine-tuning is often the cost answer, not the capability answer.** The strongest real case for it is taking a task a large model already does well and moving it to a smaller, cheaper, faster model that's been tuned for exactly that task. That's an economics decision, and it only makes sense once you have volume.

**You need evaluation before you need any of them.** Without a test set, you can't tell whether the fine-tune helped, whether the retrieval change improved anything, or whether last month's model update broke something. Teams routinely skip this and then argue about whether the system is getting worse based on anecdotes.

> **Our default position: prompting and retrieval solve the large majority of business problems. We'll propose fine-tuning when there's a specific reason, and we'll tell you what that reason is.**

---

## SECTION 4 — What we work with

> **UI/UX — Template C's tabbed technology breakdown.** Five tabs, technical content, inline stack and code blocks where they genuinely clarify something. This is the section a technical evaluator reads to decide whether you're real.
>
> All panels in the DOM on load. Keep code blocks short and illustrative — a page of pasted code reads as padding.

**Eyebrow:** THE STACK

## Layer by layer

### Tab 1 — Models

Commercial APIs and open-weight models, chosen per task rather than standardised across a project. Most production systems end up using more than one: a capable model where reasoning matters, a small fast one for classification and routing, and often an embedding model that has nothing to do with either.

We build the model layer behind an abstraction so switching providers is a configuration change, not a rewrite. **This field moves fast enough that designing for replaceability is basic engineering hygiene, not future-proofing.**

*We deliberately don't name specific model versions on this page — anything we listed would be stale within a quarter. On a call we'll tell you exactly what we'd use for your task and why.*

### Tab 2 — Retrieval

Chunking strategy, embedding choice, vector and hybrid search, reranking, and metadata filtering so results respect permissions and recency.

Retrieval quality — not model quality — is what determines whether a system built on your own data actually works. A capable model with poor retrieval produces confident answers from the wrong document, which is worse than no answer. Most "the AI is hallucinating" complaints are retrieval problems wearing a model costume.

### Tab 3 — Orchestration and tools

Function calling, tool definitions, multi-step flows, and error handling for when a tool call fails or returns something unexpected.

Increasingly this is built on the **Model Context Protocol**, which is becoming the standard interface between models and business systems. Where a system supports it, we use it — fewer bespoke connectors to maintain, and far less rework when you change models.

### Tab 4 — Evaluation and guardrails

Test sets built from your real cases, regression suites that run before anything ships, and monitoring for drift after launch.

Guardrails on both sides: input validation and prompt-injection handling on the way in, output checking, grounding requirements, and refusal behaviour on the way out. **A system that can't say "I don't know" will confidently make something up, and it only takes one visible instance to lose a rollout.**

### Tab 5 — Infrastructure and deployment

Your cloud account, your chosen region, or on-premise. Containerised, with inference serving, autoscaling, and cost monitoring.

For self-hosted open-weight models: GPU sizing, quantisation trade-offs, batching, and an honest projection of what it costs to run at your volume — which is frequently more than clients expect, and occasionally far less.

---

## SECTION 5 — Self-hosting

> **UI/UX:** Two-column light card. Left: the three reasons. Right: the honest cost note. Keep this section balanced — it's a big-ticket engagement and the temptation to oversell it is exactly why buyers distrust the pitch.

## When running your own model is the right answer, and when it isn't

Self-hosting an open-weight model is a serious commitment. There are three good reasons for it and a lot of bad ones.

**Data residency and confidentiality.** Some data legitimately cannot leave your infrastructure — regulated sectors, government work, contractual obligations to your own clients, or a jurisdiction with strict residency rules. This is the strongest reason and the one that decides it most often.

**Cost at sustained volume.** Above a certain steady throughput, dedicated inference becomes cheaper than per-token API pricing. That crossover point is much higher than most people assume, and it moves every time providers cut prices — which they keep doing.

**Control and stability.** A self-hosted model doesn't change underneath you. If you need output that's identical in twelve months, you need a model that's still there in twelve months.

### The honest counterweight

Self-hosting means you own the GPU bill whether the system is busy or idle, you own the upgrade path, and you own the operational burden. The frontier commercial models generally remain more capable than what you can practically self-host, so on the hardest reasoning tasks you may be trading capability for control.

> **Most clients who ask about self-hosting turn out to need one specific thing kept in-house, not everything.** A hybrid — sensitive work on a self-hosted model, general work on an API — is usually cheaper and better than either extreme. That's a design decision worth making deliberately rather than defaulting to one side of it.

---

## SECTION 6 — How you know it works

> **UI/UX:** Light card, four short blocks. Sits between two heavy sections — keep it tight.

## Evaluation is the part everyone skips

Ask a vendor how they'll know the system is working and listen carefully to the answer. If it's a demo, that isn't an answer.

**A test set from your real cases.** Actual questions with agreed correct answers, built with your team, covering the normal cases and the awkward ones. This is the artefact everything else depends on.

**Regression testing before every change.** Prompt changes, retrieval changes, and model updates all get run against the test set first. Without this you're changing a production system on instinct.

**Monitoring after launch.** Provider models get updated, your data changes, and your users ask things nobody anticipated. Accuracy drifts. Drift you can see is a maintenance task; drift you can't see is a slow failure.

**Coverage tracked as a list, not ignored.** Every question the system couldn't answer is logged. Once a month we decide what should have been answerable and close the gap. Coverage goes up over time rather than sitting where it launched.

---

## SECTION 7 — Compliance

> **UI/UX:** Light card, prominent date stamp visible in the layout. **This section has the shortest shelf life on the site** — see the build notes.
>
> **Not legal advice, and the page must say so.** You're an engineering firm describing what you build to support compliance, not a firm advising on obligations.

## What the EU AI Act means for what we build

*Last reviewed: [DATE]. This is a summary of the engineering implications, not legal advice — take your own.*

If you serve UK or EU customers, this is live now rather than upcoming.

**Already in force.** Prohibited practices have applied since February 2025. Obligations on general-purpose AI model providers have applied since August 2025. The Act's general application, and the Article 50 transparency duties, took effect on **2 August 2026** — three weeks ago. Article 50 is the one that catches ordinary business systems: it covers disclosure when a person is interacting with an AI, and the marking of synthetic content.

**Deferred, not cancelled.** The Digital Omnibus on AI, adopted as Regulation (EU) 2026/1744 and in force from 27 July 2026, pushed the high-risk obligations back: stand-alone high-risk systems under Annex III to **2 December 2027**, and high-risk AI embedded in already-regulated products under Annex I to **2 August 2028**. These are fixed dates, not conditional ones.

**The trap in that deferral.** High-risk documentation describes design decisions being made now. Reconstructing it in 2027 from a system already in production costs several times more than recording it as you build. If there's any prospect your system lands in a high-risk category, the cheap moment to start documenting is the moment you start building.

### What we build to support it

Disclosure handled properly in the interface rather than buried in a footer. Decision logging so a system's behaviour can be reconstructed after the fact. Documented data lineage — what the model saw, what it was trained or tuned on, where retrieval sourced from. Human oversight designed into the flow rather than added afterwards. Model and prompt versioning so you can say what was running on a given date.

> Whether a specific system falls into a high-risk category is a legal question about your use case, not a technical one. We'll build to whatever standard your counsel sets, and we'd rather build to the stricter interpretation from the start than retrofit.

---

## SECTION 8 — How we work together

> **UI/UX — Template C's engagement-model table.** Three columns, technical framing. Different from the pricing tables on Templates A and B: this describes *how the relationship works*, not what a package costs, because engagements at this layer vary too much for a package price.

## Three ways to engage

| | **Fixed scope** | **Monthly retainer** | **Embedded team** |
|---|---|---|---|
| **Best for** | A defined build with clear boundaries | Ongoing development on a system in production | Extending your own engineering team |
| **Commitment** | Per project | Rolling monthly | Rolling monthly, minimum [X] months |
| **You get** | Written scope, fixed price, fixed date | A set capacity each month, reprioritised as you need | Named engineers working in your process and tooling |
| **Typical use** | Proof of concept, first production build, migration | Evaluation, tuning, new sources, cost work | Long-running AI programmes with in-house leadership |
| **From** | $[X] | $[Y]/month | $[Z]/month per engineer |

**Beneath the table:**
> Model and infrastructure costs are yours and billed by your provider. We estimate them with you before you commit and we'll tell you when a design decision has a big cost consequence — because at this layer, most of them do.

---

## SECTION 9 — What we build on top

> **UI/UX — the hub-to-spoke routing section, and structurally the most important on the page.** Four cards, equal weight, each linking to a service page. Place it before the FAQ so it catches readers who've decided you're credible and now need to know what to actually buy.

## This is the foundation. Here's what usually sits on it.

Most people arriving here have a problem rather than a model requirement. If one of these is yours, the specific page will be more useful than this one.

**[AI agents](/services/ai-agent-development)** — systems that complete a task end to end without a person in the loop.

**[RAG chatbots](/services/ai-chatbots-rag)** — answering from your own documents, with sources cited, for customers or staff.

**[AI assistants](/services/ai-assistants)** — an assistant that prepares work for your team inside Slack, Teams, or your own tools.

**[Document and invoice processing](/services/document-invoice-processing)** — turning files into clean, validated, posted data.

> **If you're not sure which**, that's a good first call. The layer described on this page is the same underneath all four, so the question is only which application actually solves your problem — and that's usually clear within twenty minutes.

---

## SECTION 10 — FAQ

> **UI/UX:** Two-column plain list on the dark base — Template C should not reuse Template A's accordion. All answers visible on load, which is better for crawlers and AI search. Add FAQPage schema.

## Common questions

**Should we fine-tune a model?**
Probably not yet. Fine-tuning changes behaviour and form, not knowledge — if the model needs to know your information, that's retrieval. The strongest real case for fine-tuning is moving a task you've already proven onto a smaller, cheaper model at volume. We'll tell you if you're in that position.

**What's the difference between RAG and fine-tuning?**
Retrieval gives the model access to your information at the moment it answers, and updating it means updating a document. Fine-tuning adjusts how the model behaves, and updating it means retraining. Most business problems are the first kind, and a lot of expensive projects have been the second kind applied to the first problem.

**Can we run a model on our own infrastructure?**
Yes — in your cloud, your region, or on-premise. It's the right call when data genuinely can't leave your environment, or when sustained volume makes dedicated inference cheaper than API pricing. We'll model the crossover honestly, including the costs that don't appear in a per-token comparison.

**Is our data used to train models?**
No. We use API tiers with training disabled, or self-hosted models where the data never leaves your environment.

**How do you know the system is accurate?**
A test set built from your real cases, regression tests run before every change, and drift monitoring after launch. If a vendor's answer to this question is a demo, that's a warning rather than an answer.

**Does the EU AI Act apply to us?**
If you serve EU customers, some of it likely does — the Act's general application and the Article 50 transparency duties took effect on 2 August 2026. Whether your system is high-risk is a legal question about your use case, and the high-risk obligations were deferred to December 2027 and August 2028. We build the logging, documentation, and disclosure the framework expects, and we'd rather over-document from the start than retrofit.

**What happens when models get better or cheaper?**
That's the normal case, not the exception. We build the model layer behind an abstraction so switching is configuration, not a rewrite, and reviewing it is part of the monthly plan. Anyone building a production system on a single hard-coded provider in 2026 is creating work for themselves.

**How much does it cost to run?**
It depends on volume, model choice, and how much context each request carries — and design decisions move it by an order of magnitude in either direction. We estimate it before you commit and flag the choices with big cost consequences.

**Who owns what you build?**
You do. Model weights where we've tuned them, code, prompts, pipelines, and documentation, transferred on final payment. It runs in your accounts.

**Can you take over a stalled build?**
Yes, and it's a common way clients start with us. We'd begin with an assessment of what exists — including telling you honestly if the right move is to rebuild rather than continue.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US and UK working hours. A written update every Friday plus a short Loom walkthrough, and calls happen in your hours.

---

## SECTION 11 — Closing CTA

> **UI/UX — Template C closes on the dark base with a light bordered card**, rather than Template A's full-bleed dark band or Template B's tinted panel. Same button, third distinct treatment.

## Bring us the problem, not the architecture.

Book a technical call. Tell us what you're trying to build and we'll tell you which of the five approaches it actually needs, roughly what it costs to build and to run, and where the hard parts are. If prompting and retrieval solve it, we'll say so rather than proposing something larger.

**[Book a technical call]**

---

# PART 3 — BUILD NOTES

## Verification before publishing — Section 7 especially

The EU AI Act timeline was researched on **24 August 2026**. Before publishing:

1. **Have counsel or a compliance specialist review Section 7.** You're an engineering firm summarising engineering implications. The "not legal advice" line must stay, and the section must not drift into advising on obligations.
2. **Confirm the dates against the current consolidated text**, not a law-firm summary. The Digital Omnibus changed several of these recently and secondary sources still disagree in places.
3. **Put a visible "last reviewed" date in the rendered section**, not just in the source. A compliance section without a date is a liability.
4. **Diarise a quarterly review.** This is the shortest-shelf-life content on the site.

## Do not name model versions in body copy

Section 4 deliberately avoids naming specific models, and that's a decision worth defending against the instinct to list them for credibility. Any list you publish is stale within a quarter, and a stale model list on your most technical page is worse than no list — it tells an evaluator you wrote this once and never came back. The framing "we'll tell you what we'd use for your task and why" is stronger anyway, because it's what a good engineer would actually say.

## Internal linking — this is the point of the page

Section 9 links down to four spokes. **Each of those four pages needs a link back up to this one in the same release**, with anchor text about the model or engineering layer. The hub only works if the links run both ways. If you ship this page without the reciprocal links, you've added a sixth competitor to your own AI cluster rather than a hub — which is worse than not publishing it.

## Accessibility

- The hero architecture diagram needs a real text alternative describing the layers and their order, not a filename. It carries the page's core positioning, so a screen-reader user who misses it misses the argument.
- Tabbed breakdown needs full keyboard navigation with panels in the DOM on load
- Section 3's table must be a real HTML `<table>` with proper headers — it's the most-extracted content on the page
- Template C's dark base needs contrast checked against WCAG AA at every text size, including inside light cards. Inverted palettes fail contrast far more often than light ones.
- The sticky spec panel needs a skip link and must not trap focus

## Performance

- Architecture diagram as inline SVG, not a raster image — it's the LCP element and it needs to stay sharp at every size
- Syntax highlighting for inline code blocks should be build-time, not a client-side library. Don't ship a highlighting bundle for four short snippets.

## Content risk

**Don't publish benchmark scores or model comparisons.** They're stale on arrival, they invite argument from exactly the audience this page is written for, and they're not what you're selling.

**Don't claim capabilities in a tab you haven't shipped.** This is the page where a technical buyer will ask a follow-up question on the call, and the tabs are effectively a list of things you're inviting them to test you on. Cut anything you can't discuss for ten minutes.

---

# VALUES YOU MUST SUPPLY

| Placeholder | Appears in |
|---|---|
| `$[X]` — fixed scope from | Engagement table |
| `$[Y]` — retainer from | Engagement table |
| `$[Z]` — per embedded engineer | Engagement table |
| `[X]` months minimum for embedded team | Engagement table |
| `[X]` hours US/UK overlap | Spec panel, FAQ |
| `[DATE]` last reviewed | Section 7 — must be rendered, not just in source |
| Which model providers and tiers you actually use | FAQ |
| Confirmation you can genuinely deliver each tab in Section 4 | Section 4 |
| Legal review sign-off on Section 7 | Section 7 |
