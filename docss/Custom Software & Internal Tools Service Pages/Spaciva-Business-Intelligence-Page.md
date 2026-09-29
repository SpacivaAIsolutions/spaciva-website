# Spaciva — Business Intelligence Services Page

**URL:** `/services/business-intelligence`
**Layout:** **Template A — Narrative / Credibility**, variant **A-4**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — READ THIS BEFORE COMMISSIONING THE PAGE

## This is the closest overlap on the site, and it needs a decision from you

Inventory vs ERP was a boundary problem. **This is worse.** In search, "business intelligence" and "custom dashboards" are treated as near-synonyms. Both pages would target data, reporting, warehouses, and metrics. Both would list the same tools. Published carelessly, they don't just split authority — they actively confuse a buyer who lands on one and can't work out why the other exists.

So before anything else, there are only two defensible options:

**Option 1 — Two pages with a hard boundary (what this document assumes).**

> **Custom dashboards** answers *"we need to see this specific thing."* A known audience, a known set of questions, a screen that answers them. Bottom-funnel, tactical, transactional.
> **Business intelligence** answers *"we need to be able to answer questions we haven't thought of yet."* A warehouse, a modelled metric layer, and a team that can explore without filing a ticket. Higher-funnel, strategic, capability-building.

The buyer distinction is real and it maps to a real difference in what gets built. Dashboards is one output. BI is the foundation that makes the fifth, tenth, and twentieth output nearly free.

**Option 2 — One page. Merge them.**

If you're not confident the team can hold the boundary in copy, in internal links, and in every future blog post, **merge them into a single page and don't publish this one.** One strong page beats two that cannibalise, and the failure mode here is not "slightly weaker rankings" — it's two pages that each rank on page three where one would have ranked on page one.

**My recommendation: Option 1, but only if you commit to the required edits below.** The boundary is genuinely defensible and the two buyers really are different people at different stages. But it's conditional on the edits, not optional.

## Required edits to the Custom Dashboards page if both ship

These are not nice-to-haves. Publishing both pages without them creates the cannibalisation this section exists to prevent.

1. **Dashboards Section 8 ("Build or buy") must stop discussing the data layer as a strategic choice.** It currently says a good number of clients should start with Metabase on a properly built data layer. Keep the recommendation, but route the warehouse discussion here with a link instead of arguing it there.
2. **Dashboards Section 5 ("What's actually underneath") must be trimmed and pointed here.** It's the strongest section on that page and it's also 80% a BI-page argument. Cut it to three bands covering what one dashboard needs, and link here for the full warehouse and modelling discussion.
3. **The Dashboards routing block gains a BI card**, and this page's routing block links back. Reciprocal, explicit, both directions.
4. **Neither page targets the other's primary keyword.** Dashboards owns `custom dashboard development`. This page owns the BI and warehouse cluster. No overlap in title tags, H1s, or H2s.

## Why Template A

Template C would be the obvious choice — it's the technical tier and BI is technical. **Don't.** C-1 is Custom Dashboards. Two dark, technical, architecture-diagram pages about data, adjacent in the nav, is the cannibalisation problem rendered visually. A reader would experience them as the same page.

Template A is also the better fit on merit. The BI buyer's hesitation is not "can this be built?" — they've usually already bought a BI tool once. Their hesitation is:

> *"We bought Tableau three years ago. Two people used it, the licences got cancelled, and we went back to spreadsheets. Why is this time different?"*

That is the shelfware objection, and it is precisely what Template A's "why these projects fail" engine is built to answer. Light base, narrative, credibility before pitch. **Template A, variant A-4.**

## Template A variants

| | **A-1 AI Agents** | **A-2 RAG Chatbots** | **A-3 ERP** | **A-4 BI** *(this page)* |
|---|---|---|---|---|
| Hero visual | Screenshot | Screenshot | Integration map | **Data maturity ladder, four stages, reader locates themselves** |
| Signature second block | Real agent vs chatbot | What's underneath a chatbot | "What we don't do" scope boundary | **"You may not be ready for this" — the maturity gate** |
| Failure section | 4 causes | 4 reasons | 5 patterns + controls | **4 shelfware patterns, each with the design decision that prevents it** |
| Process | Timeline, 6 steps | Timeline, 6 steps | Timeline, 5 steps, phased | **Timeline, 5 steps, first metric shipped in week two** |

Shared: light base with two dark bands only, vertical timeline, accordion FAQ, card-grid offers, six-item credibility grid.

---

# PART 1 — SEO SPEC

## Primary keyword

`business intelligence services` — with a heavy qualifier strategy, because unqualified BI terms are held by Deloitte, Accenture, EY, Gartner, Microsoft, and Tableau. You will not displace them and you don't want their traffic.

The winnable cluster sits one layer down, and it's where the actual buying happens.

## Ranking targets

| Keyword | Note |
|---|---|
| `business intelligence services` | Primary, but expect to rank on qualified long-tail variants of it, not the bare term |
| `data warehouse development services` | **The real workhorse.** Technical, commercial, mid-market, genuinely winnable |
| `business intelligence consulting for small business` | Qualifier does all the work — big firms don't target it |
| `BI implementation services` | Bottom-funnel, vendor-selection intent |
| `semantic layer development` | Very low competition, high sophistication signal, qualifies the buyer |
| `metrics layer dbt implementation` | Technical, small volume, converts extremely well |
| `self-service analytics implementation` | Matches the shelfware pain directly |
| `Metabase implementation partner` / `Superset consulting` | Tool-name + service. Almost uncontested at your size |
| `why BI projects fail` | Informational, high-authority, links internally. **Target with the section, not the page** |
| `data warehouse vs data lake` | Comparison intent — answer honestly, capture the researcher |

**The undervalued cluster is tool-name implementation.** `Metabase implementation partner`, `Superset consulting`, `dbt implementation services` are searched by people with a specific stack decision already made and budget attached. Volume is small, competition is near zero at your scale, and conversion is far higher than anything with "business intelligence" in it.

**The second undervalued angle is the open-source stack.** Almost every BI services page sells Power BI or Tableau implementation, because that's where partner commissions are. Almost nobody writes seriously about Metabase, Superset, and dbt for mid-market teams — which is exactly what a company that doesn't take reseller commissions should own. **Say on the page that you have no reseller relationship.** It's true, it's rare, and it's a differentiator you get for free.

**Do not chase** `business intelligence`, `BI tools`, `best BI software`, or `data analytics` — wrong intent, unwinnable, and it would put you in a comparison set against products and global consultancies simultaneously.

## Meta

**Title (59 chars):**
```
Business Intelligence & Data Warehouse Services | Spaciva AI
```

**Description (156 chars):**
```
We build the data foundation behind BI — warehouse, modelled metrics, self-serve
analytics. No reseller commissions. Fixed price, and you own the whole stack.
```

**H1:** `Your last BI tool didn't fail. The data underneath it did.`
**URL:** `/services/business-intelligence` — not `/services/bi` (too thin) and not `/services/data-analytics` (a different, worse keyword set).

## Positioning against neighbouring pages

Seven pages now cluster around data. Put this in Section 10 and mirror on every sibling:

> **Business intelligence** — the capability to answer questions you haven't thought of yet. Warehouse, modelled metrics, self-serve.
> **Custom dashboards** — one screen answering a known set of questions for a known audience.
> **ERP systems** — the financial and operational system of record.
> **Inventory management** — the stock number being right across channels.
> **Internal business tools** — a screen where work gets done.
> **Workflow automation** — something happens without anyone opening anything.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the engagement table

Add `HowTo` only if the maturity assessment in Section 3 keeps a step structure at publish. Don't force it.

## Internal linking

- Section 3 → `/services/custom-dashboards` — **not live yet**
- Section 5 → `/services/workflow-automation` *(live)*
- Section 7 → `/services/ai-agent-development` *(live)*
- Section 7 → `/services/rag-chatbot-development` *(live)*
- Section 10 → `/services/erp-systems`, `/services/inventory-management`, `/services/internal-business-tools` — **none live yet**
- Case studies → `/case-studies/unified-accounting` and `/case-studies/partsflow` *(both live)*

Ship every unbuilt link as plain text. `/about` already publishes a live 404 from the footer of every page.

**Proof gap, stated plainly:** you have no BI case study. Unified Accounting is a pipeline story and adjacent enough to use, but it is not a warehouse-and-metrics story. **This page is the weakest-evidenced page in the set**, and Section 12 handles that honestly rather than papering over it.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template A opening, A-4 variant.** Light base. Two columns at ≥1024px: copy left, **data maturity ladder right**.
>
> The ladder is four ascending rungs — *Spreadsheets → Tool reports → Dashboards → A modelled foundation* — each with a one-line description of what you can and can't answer at that stage. **Rungs one and two are muted; rung three is mid-tone; rung four is the accent.** A short annotation down the right edge reads "most teams calling us are here" pointing at rung three.
>
> This differs from A-3's hub-and-spoke map and from C-1's four-layer architecture stack. Crucially it is a **self-location device**, not an architecture device — the reader's first action on this page should be placing themselves.
>
> Inline SVG with real `<text>` nodes. Below 1024px it moves beneath the copy and stacks vertically.

**Eyebrow:** BUSINESS INTELLIGENCE

# Your last BI tool didn't fail. The data underneath it did.

Most companies that abandoned a BI tool didn't have a tool problem. They had four systems that disagreed, no agreed definition of "revenue," and an analyst who became a bottleneck. We build the foundation — a warehouse, a modelled metric layer, and definitions everyone accepts — so the tool on top becomes almost incidental.

**[Book a 30-minute call]** **[Find out if you're ready →]**

**Proof line:**
```
No reseller commissions · Open-source stack by default · You own the warehouse, the models, and the code
```

**Maturity ladder content:**

| Rung | Stage | What you can't answer |
|---|---|---|
| 1 | **Spreadsheets** | Anything that spans two systems, or anything about last year |
| 2 | **Each tool's own reports** | Anything the tool's data model doesn't already contain |
| 3 | **Dashboards** | Anything nobody thought of when the dashboard was specified |
| 4 | **A modelled foundation** | Fewer and fewer things — and new questions cost hours, not weeks |

*Small caption under the ladder:* If you're on rung one or two, this page probably isn't what you need yet. Section three explains why.

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component — greyscale to colour on hover, client names as real text beneath each logo. Single row. The live service pages currently render the same eight logos twice through a duplicated marquee loop; fix globally rather than reproducing it.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — The maturity gate

> **UI/UX — the signature block of A-4, placed high on purpose.** Four horizontal bands, one per maturity stage, each with the stage, the symptom, and **an explicit verdict on whether to buy BI work**. The first two verdicts are "not yet."
>
> **Do not style the "not yet" bands as warnings or disclaimers.** Same weight, same treatment, same type size as the other two. The whole persuasive mechanism is that a reader on rung three sees you told rungs one and two to leave — which is what makes the rung-three recommendation credible.
>
> Placing a disqualifier above the offer is unusual and correct. It also does the SEO job: this is the section that answers `is my company ready for business intelligence`, a query nobody serves honestly.

## You may not be ready for this, and we'll tell you

BI has a shelfware problem because it gets sold to companies at the wrong stage. Find yourself below.

### If you're on spreadsheets

**The symptom:** the numbers live in exports, and reporting means someone rebuilding a sheet on Monday.

**The verdict: not yet, and probably not for a while.** The bottleneck isn't analysis — it's that the source data isn't reliably captured anywhere. Fix that first. Usually the honest answer is a better process, an internal tool where the work actually gets recorded, or automation that stops the copy-paste. A warehouse built on data nobody maintains will publish the mess faster and more expensively.

### If you're using each tool's built-in reports

**The symptom:** your CRM reports on the CRM, your store reports on the store, and any question spanning both needs a human.

**The verdict: not yet — buy a dashboard, not a BI programme.** If you have three or four specific questions and a known audience, one [custom dashboard](/services/custom-dashboards) on a light pipeline answers them for a fraction of what BI costs and takes weeks, not months. Come back when you've built the third dashboard and noticed you're rebuilding the same joins each time.

### If you have dashboards and they've stopped keeping up

**The symptom:** every new question is a ticket. Two departments' dashboards disagree and nobody can adjudicate. Someone maintains six pipelines that each do a slightly different version of the same transformation.

**The verdict: yes — this is exactly the moment.** The economics have flipped. You're now paying more to maintain fragmented pipelines than a shared foundation would cost, and the fifth, tenth, and twentieth question become nearly free once the modelling is done once.

### If you have a warehouse and it isn't trusted

**The symptom:** it exists, it's stale or contested, and people have quietly gone back to their own extracts.

**The verdict: yes, but it's a rescue, not a build.** We'll audit what's there and tell you honestly whether to fix the modelling and governance or restart. It's usually fix — a sound warehouse with poor definitions and no ownership is a much smaller job than it looks.

> **BI sold to a company on rung two is how BI got its reputation. The tool wasn't the problem and the next tool won't be either.**

---

## SECTION 4 — What we build

> **UI/UX:** Card grid matching A-1's offer treatment. Five cards: three across, two below, with the two lower cards at equal weight. Title, one-line "best for", body. This sits *after* the maturity gate deliberately.

**Eyebrow:** WHAT WE BUILD

## Five pieces, and you don't need all of them

### The warehouse
One place where data from every system lands, modelled properly, with history retained even where the source system overwrites. Postgres, BigQuery, or ClickHouse depending on your volume and budget — **and we'll pick the cheapest one that works, because we don't earn anything on the choice.**

*Best for: everyone at rung three or above. This is the foundation the rest sits on.*

### The metric layer
Every metric defined once, in version-controlled code, with the definition visible to anyone reading a number. "Active customer," "net revenue," "churn" — agreed across departments and enforced by the system rather than by memory. Typically dbt or an equivalent.

*Best for: any company where two teams have ever disagreed about a number in a meeting. So, any company.*

### Self-serve analytics
A BI tool your team can actually use — Metabase, Superset, Looker Studio, or Power BI if you already own the licences — connected to the modelled layer so people explore safely. Every answer comes from the same definitions, so self-serve doesn't mean self-invented.

*Best for: teams where an analyst has become a queue.*

### Analysis and modelling
Cohorts, retention, forecasting, margin by segment, customer lifetime value, inventory ageing — the questions that need modelling rather than a chart. Built into the warehouse as reusable models, not delivered as a one-off slide.

*Best for: teams who've hit the ceiling of what a dashboard can express.*

### Governance and ownership
Access control, data lineage, documented definitions, freshness monitoring, and a written answer to "who owns this metric." Unglamorous, and it is the difference between a warehouse that's trusted in year two and one that isn't.

*Best for: everyone, and it's the piece most often cut from a quote. We include it.*

**Below the grid, smaller:**
> Getting data into the warehouse on a schedule is [workflow automation](/services/workflow-automation) wearing a different hat, and it's cheaper as its own scope. If your data is already centralised and clean, say so on the call — the project gets substantially smaller and we'll tell you so before you commit.

---

## SECTION 5 — Why BI projects become shelfware

> **UI/UX — Template A's persuasive engine.** Four stacked blocks, generous spacing, each ending on **a bolded line naming the design decision that prevents it** — the A-3 pairing, retained deliberately because it works. Longest scroll on the page.

## Four ways BI becomes shelfware, and what prevents each

Abandoned BI tools have a small number of causes and they repeat almost exactly.

### The tool was bought before the data was ready

Licences signed, a consultant connects it to four sources, and it surfaces four systems' worth of disagreement with no layer to reconcile them. People conclude the tool is wrong. The tool was fine.

**The decision that prevents it:** foundation first, tool last. We build the warehouse and metric layer before recommending a BI tool, and by then the choice matters far less than anyone expected — which is why we can be indifferent about it.

### Nobody agreed what the numbers meant

Finance and sales define revenue differently — both legitimately. The dashboard picks one, the other team rejects it, and both go back to their own extracts. The disagreement was never technical, but it kills the system just the same.

**The decision that prevents it:** definitions are agreed in a workshop before modelling, written into version-controlled code, and displayed next to every number. Contested definitions get both versions, named distinctly, rather than a silent winner.

### It required an analyst for every question

Self-serve was the promise; in practice the model was too complex to explore safely, so everything routed through one person. They became a queue, the queue got long, and people stopped asking.

**The decision that prevents it:** model for the question, not for the source. Tables shaped around how the business thinks, named in business language, with the joins already resolved. Enablement is scoped in — we train your team on your own data, not on a demo dataset.

### It went stale and nobody noticed

A pipeline broke. Charts kept rendering the last successful load. Someone spotted a number that hadn't moved in three weeks, and from that day nothing in the warehouse was trusted again — including everything that was still correct.

**The decision that prevents it:** freshness monitoring and alerting on every model from day one, plus a visible last-updated timestamp on every dashboard. **Trust is lost once and regained slowly; the monitoring costs almost nothing by comparison.**

> **Three of these four are decisions made before any code is written. None of them are about which BI tool you chose.**

---

## SECTION 6 — Mid-page CTA

> **UI/UX — first of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button. Same position and treatment as A-1 and A-3.

## Not sure whether you need a warehouse or just a dashboard?

That's usually settled in one call. Tell us what questions you're trying to answer and how many places the data lives, and we'll tell you which rung you're on — including if the honest answer is that you're not ready and shouldn't spend anything yet.

**[Book a discovery call]**

---

## SECTION 7 — The stack, and why we have no opinion to sell

> **UI/UX:** Six-item grid, 3×2 at desktop, matching A-1's "what separates a real agent" and A-3's integration-quality grid. Small icon, bold label, two to three lines. Consistent stroke weight.

## Six choices we make differently

### Open source unless you need otherwise
Metabase, Superset, and dbt cover what most mid-market teams need at a fraction of per-seat BI licensing. We have no reseller relationship with any vendor, so nothing about our recommendation is commission-driven. If you already own Power BI licences, we'll build to those instead — that's usually the cheapest correct answer.

### The smallest warehouse that works
Postgres handles far more than people expect and costs a fraction of a cloud warehouse. We'll start there unless your volume genuinely requires BigQuery or ClickHouse, and we'll tell you where that threshold is for your data rather than defaulting upward.

### Definitions in version control
Metrics live as code, reviewed like code, with history. When a definition changes you can see who changed it, when, and why — and every number that used it changes with it.

### Modelled for the question
Tables shaped around how the business thinks, not around how the source system stores. Named in business language, joins pre-resolved, so exploring doesn't require knowing your CRM's schema.

### Freshness visible everywhere
Every model monitored, every dashboard stamped with when its data last loaded. A stale number that announces itself is survivable; a stale number that doesn't is what kills trust permanently.

### Built to be handed over
Standard tools, documented, in your repository, running in your accounts. Your own analyst or a future hire can pick it up. Nothing proprietary and nothing requiring us specifically.

**Below the grid, smaller:**
> If what you actually want is to ask questions of your data in plain language, that's closer to a [RAG chatbot](/services/rag-chatbot-development) over a modelled layer than a BI tool — and it only works if the modelling underneath is right first. Where a step needs genuine judgement rather than a query, that's an [AI agent](/services/ai-agent-development).

---

## SECTION 8 — How the work runs

> **UI/UX:** Vertical timeline with connecting rule, matching A-1, A-2, A-3. **Five steps.** The A-4 distinction is that a real metric ships in week two — call it out visually with a marker on step three.

## Five phases, first real number in week two

**01 — Question and definition workshop** · *3–5 days*
Not "what data do you have" — what decisions are being made badly for lack of a number. We work backwards from decisions to metrics to sources, and we settle the contested definitions in the room. You get the written definition set whether or not you hire us; for many teams it's the first time these exist on paper.

**02 — Source audit and fixed quote** · *2–3 days*
We connect to each system and check what's genuinely available, how clean it is, and how far back history goes. Then a written scope, a fixed price, and a date. If a source can't support a metric you need, you find out here.

**03 — Warehouse and first metrics live** · *2 weeks* ← *first real number*
Warehouse stood up, the highest-value three or four metrics modelled and live. Deliberately early: you validate against numbers you already know are right, and you see value before the bulk of the spend. Written update every Friday plus a short Loom walkthrough.

**04 — Full modelling and self-serve rollout** · *[X]–[Y] weeks*
The rest of the metric layer, the BI tool connected, access and governance configured, and your team trained on your own data. Enablement is scoped in, not an optional add-on — an untrained team is the shelfware mechanism.

**05 — Monitor, extend, hand over** · *ongoing*
Freshness monitoring and alerting, source API changes handled, new metrics added as the questions change, and documentation kept current. A named engineer stays on it. If you hire an internal analyst later, we hand over properly rather than leaving them to reverse-engineer it.

---

## SECTION 9 — Tools we work with

> **UI/UX:** Logo grid grouped by category with small labels, greyscale to colour on hover. **Every tool name as real text alongside the logo**, not alt text alone — this is the primary surface for the tool-name implementation queries that are the page's best-value target.

## What we build it on

### Warehouse and storage
Postgres · BigQuery · ClickHouse · Snowflake · Redshift · S3 and object storage

### Modelling and transformation
dbt · SQL · Python · custom transformation services · version-controlled metric definitions

### BI and visualisation
Metabase · Apache Superset · Looker Studio · Power BI · Grafana · custom React front ends where a tool doesn't fit

### Ingestion
Airbyte · Fivetran · n8n · custom Python and Node connectors · CDC where volume requires it

### Sources
HubSpot · Salesforce · Pipedrive · Zoho · Shopify · WooCommerce · Stripe · QuickBooks · Xero · NetSuite · Odoo · Google Analytics · Google Ads · Meta Ads · Postgres · MySQL · MongoDB · Airtable · Google Sheets

**Below the grid, smaller:**
> We hold no reseller or partner commission on any tool listed here. If Looker Studio on a Postgres warehouse does what you need for a fraction of the cost, that's what we'll recommend — and we'll say so before you've spent anything.

---

## SECTION 10 — BI, or something else?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain treatment. **Omit or disable every card whose page isn't live yet — currently that's all of them except Workflow Automation.**

## Is BI actually what you need?

**Business intelligence** — you need to answer questions you haven't thought of yet, repeatedly, without an analyst in the loop. *(This page.)*

**[Custom dashboards](/services/custom-dashboards)** — you need to see a known set of things for a known audience. If you can list your questions on one hand, buy a dashboard, not a warehouse.

**[ERP systems](/services/erp-systems)** — the financial and operational system of record. BI reads from it; it isn't BI.

**[Inventory management](/services/inventory-management)** — the stock number being right across channels. An accuracy problem, not an analysis one.

**[Internal business tools](/services/internal-business-tools)** — a place work gets recorded. If your data is bad because nobody enters it consistently, this comes first.

**[Workflow automation](/services/workflow-automation)** — something happens without anyone opening anything. If a number should trigger an action rather than be looked at, automate it.

> **Honest answer:** a good share of BI enquiries are one dashboard and a fixed definition of two metrics. That's weeks and a fraction of the cost, and we'd rather scope it that way in week one than sell a warehouse to a company that needs a chart.

---

## SECTION 11 — Engagement models

> **UI/UX:** Three columns, middle emphasised. **Publish without figures if prices aren't confirmed** — BI is a category where open pricing is unusual, and the engagement structure alone differentiates. Never publish a range you can't honour.

## How engagements are structured

Fixed price, quoted in writing before we start. No hourly billing. In a category built on day rates and open-ended discovery, this is the point.

### Foundation build — from $[X]
Warehouse, ingestion from up to [N] sources, the metric layer for your core definitions, one BI tool connected, and your team trained on it. Includes the first month of monitoring.
*Good for: rung three — dashboards exist and every new question has become a project.*

### Foundation plus analysis — from $[Y]
Everything above plus the modelling work that needs actual analysis: cohorts, retention, forecasting, margin by segment, lifetime value — built as reusable models rather than one-off reports.
*Good for: teams who've hit what a dashboard can express and need the questions modelled, not charted.*

### Ongoing data partner — from $[Z]/month
Freshness monitoring, source changes handled, new metrics and models as questions evolve, and a set amount of analysis work each month.
*Good for: teams without an internal data hire yet — and a cheaper way to find out what that hire would need to be.*

**Beneath the table:**
> Every build includes monitoring for the first month. After that it's $[M]/month and you can stop any time — you keep the warehouse, the models, the definitions, and the documentation either way. If you hire an analyst, we hand over to them properly.

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards matching the shared treatment. **Read the note below before publishing this section — it is the weakest section on the page and it should be treated honestly rather than dressed up.**

## What we've built

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo. Six ledgers, one pipeline — the ingestion problem that sits underneath any reporting layer.

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's inventory data moved through validated bulk imports and a live sync instead of row-by-row spreadsheet work across a 5,000+ SKU catalogue.

*Note for the client — read this one properly. **Neither of these is a BI case study.** Both are ingestion and pipeline stories, which is genuinely adjacent and genuinely relevant, but a sophisticated BI buyer will notice that neither involves a warehouse, a metric layer, or an analytics outcome. This is the weakest-evidenced page in the set.*

*Three options, in order of preference:*
1. **Best:** if any engagement produced a reporting or analysis outcome, write it up — even a small one. A single real "we defined the metrics and here's what changed" story would carry this page.
2. **Acceptable:** keep both cards but frame them explicitly as the ingestion layer, as written above. Honest, and it doesn't overclaim.
3. **Also acceptable:** cut the section entirely and let Section 3's maturity gate carry the credibility. **A missing case study section is better than one a buyer can see through** — and on this page specifically, where the whole argument is that you'll tell people uncomfortable truths, a stretched case study does disproportionate damage.

---

## SECTION 13 — FAQ

> **UI/UX:** Accordion, first item open — matching A-1, A-2, A-3. Add `FAQPage` schema. BI questions are heavily surfaced by LLMs and this is the cheapest GEO win on the page.

## Common questions

**How is this different from just building dashboards?**
A dashboard answers questions you've already thought of. This builds the foundation so new questions cost hours rather than a project. If you can list your questions on one hand and the audience is fixed, buy a dashboard — it's faster and much cheaper, and we'll tell you so on the call.

**Do we need a data warehouse, or can we connect the BI tool straight to our systems?**
Direct connection works for one or two sources with simple questions. It breaks when you need to join systems that disagree, when you need history a source overwrites, or when your production database starts slowing down because a dashboard is querying it. Those three are the signals, and if none apply, skip the warehouse.

**Which BI tool should we use?**
Usually whichever is cheapest that meets your needs — and once the modelling is right, that choice matters much less than people expect. Metabase covers most mid-market requirements at a fraction of per-seat licensing. If you already own Power BI, we'll build to it. **We hold no reseller commission on any tool, so nothing about that answer is influenced by what we'd earn.**

**We already bought a BI tool and nobody used it. Why would this be different?**
That's the most common story we hear, and the tool was rarely the cause. It's usually one of four things: the data wasn't ready, nobody agreed what the numbers meant, every question still needed an analyst, or it went stale and lost trust. Each has a specific fix and all four are addressed in the build. Section five on this page sets them out in full.

**How long until we see something useful?**
Your first real metrics are live in about two weeks — deliberately early, so you validate against numbers you already know and see value before the bulk of the spend. Full modelling and rollout runs [X]–[Y] weeks depending on source count and data quality.

**What if our data is messy?**
It is, and that's most of the work. We audit each source before quoting and agree cleaning and reconciliation rules in writing. Where a field is unreliable at source, we'll tell you rather than quietly modelling it — a metric built on a field people fill in when they remember is worse than no metric.

**Can our team explore the data themselves?**
That's the point, and it's why modelling is done for the question rather than the source. Tables named in business language, joins pre-resolved, definitions attached. Training your team on your own data is scoped into the project, not sold as an extra — skipping it is how BI becomes shelfware.

**Do we need to hire a data analyst?**
Eventually, probably. Not to start. The monthly plan covers monitoring and new models, which for most mid-market teams is cheaper than a hire and a better way to learn what that hire actually needs to be. When you do hire, everything is documented and standard, and we hand over to them properly.

**Who owns the warehouse and the models?**
You do. The warehouse, the models, the metric definitions, and the documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts on your infrastructure.

**Where is our data hosted?**
In your own AWS, GCP, or Azure account by default, with regional hosting where data residency — EU or UK — is a requirement. Confirmed in writing before anything moves.

**Can you take over a warehouse someone else built?**
Yes, regularly. We'll audit it and tell you honestly whether to fix the modelling and governance or restart, with a fixed price for either path. It's usually fix — a sound warehouse with contested definitions and no ownership is a smaller job than it looks.

**What does it cost?**
Foundation builds start at $[X], foundation plus analysis at $[Y], and ongoing plans from $[Z] a month. Fixed price in writing before any work starts, and we carry the risk of our own estimates.

**How do you work with clients abroad?**
We're in Ahmedabad, India, and stay available for video calls in your US Eastern or UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved.

---

## SECTION 14 — Closing CTA

> **UI/UX — second of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button, no competing secondary link, no email capture. Same treatment as A-1, A-2, A-3 so all four read as siblings.

## Tell us the question your team can't answer.

Book a 30-minute call. We'll work out which rung you're on, tell you honestly whether you need a warehouse or just a dashboard, and give you a fixed price if a foundation is genuinely the right answer.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from A-1, A-2, A-3

| Element | A-1 Agents | A-2 Chatbots | A-3 ERP | **A-4 BI** |
|---|---|---|---|---|
| Hero visual | Screenshot | Screenshot | Integration map | **Maturity ladder — a self-location device** |
| Block above offers | None | None | Scope boundary | **Maturity gate, two "not yet" verdicts** |
| Failure section | 4 causes | 4 reasons | 5 patterns + controls | **4 shelfware patterns + preventing decisions** |
| Process | Timeline, 6 | Timeline, 6 | Timeline, 5, phased | **Timeline, 5, first metric marked at week two** |
| Commercials | Hero + FAQ | Hero + FAQ | Engagement table | **Engagement table** |
| Distinctive claim | — | — | "What we don't do" | **"No reseller commissions," stated three times** |

Shared: light base, two dark bands only, six-item credibility grid, accordion FAQ, card-grid offers, vertical timeline.

## The one thing that must not drift

**The maturity gate in Section 3 must keep equal visual weight across all four bands.** If a designer styles the two "not yet" verdicts as muted, smaller, or boxed as a caveat, the section stops working — the entire persuasive mechanism is that a rung-three reader watches you turn away rungs one and two at full volume. Flag this explicitly in the design handoff.

## Accessibility

- Maturity ladder needs `role="img"` with an `aria-label` naming all four rungs in order plus the "most teams are here" annotation, and real `<text>` nodes rather than paths.
- Rung emphasis must not rely on colour alone — the text labels carry it.
- Failure-section preventing decisions are bolded: use `<strong>`, carrying semantic weight, not styled `<span>`s.
- Accordion FAQ needs correct `aria-expanded` and keyboard operation, matching A-1.
- Two dark bands only; check contrast on both.

## Performance

- Maturity ladder as inline SVG. Crawlable, sharp, no extra request.
- Section 9's logo grid is the heaviest block — roughly 40 marks across five categories. Use a sprite or inline SVG rather than individual requests, and keep text names in the DOM regardless of whether logos load.
- The trust strip's duplicated marquee loop should be fixed globally before this page ships.

## Site-level issues

Unchanged across five documents now.

1. **`/about` still 404s and is still linked from the footer of every page.**
2. **There is still no `/services` index.** This would be the tenth service page reachable only through in-body cross-links.
3. **`/contact` still carries the old generalist positioning** and the all-caps "SPACIVA" mark. Every CTA on this page points there.
4. **Brand mark is still inconsistent** — "Spaciva AI" in nav and footer, "SPACIVA" on contact.
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.**

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `[X]`–`[Y]` weeks — full rollout | Section 8, Section 11, FAQ | Must be a range you'll honour. Warehouse plus modelling plus enablement is longer than a dashboard build — don't copy that window across |
| `$[X]` — foundation build | Section 11, FAQ | |
| `$[Y]` — foundation plus analysis | Section 11, FAQ | |
| `$[Z]` — monthly partner plan | Section 11, FAQ | |
| `$[M]` — maintenance monthly | Section 11 footnote | |
| `[N]` — sources in the foundation package | Section 11 | |
| Client logos and names | Section 2 | |
| **A BI or reporting case study** | Section 12 | **The single biggest gap on this page.** See the three options in Section 12 |

**Verify before publishing — two items:**

**One: the reseller claim.** This page states three times that you hold no reseller or partner commission on any BI tool. It's your strongest differentiator here and it must be literally true today and stay true. If you ever take a Microsoft or Snowflake partner status, this page needs editing the same week.

**Two: the stack list.** Section 9 lists around forty tools. Snowflake, Redshift, Fivetran, and CDC in particular are enterprise-tier items — **confirm you'd be comfortable in a technical call on each, or move the unverified ones to a "we can work with" line rather than an implied credential.** A BI buyer at rung three is often technical enough to probe this, and one tool you can't discuss costs more than the thirty-nine you can.

Nothing on this page presents an unverified figure as a client result. Both case study metrics are your existing published figures, and Section 12 explicitly frames them as ingestion rather than BI work.
