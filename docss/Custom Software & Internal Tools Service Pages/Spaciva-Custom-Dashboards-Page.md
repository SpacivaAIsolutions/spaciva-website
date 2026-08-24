# Spaciva — Custom Dashboards Services Page

**URL:** `/services/custom-dashboards`
**Layout:** **Template C — Technical / Depth** *(first use of Template C)*
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — WHY THIS PAGE IS TEMPLATE C

The three-template system is defined in the Workflow Automation doc. Recap of the rule: template is assigned by **what the buyer needs to be convinced of**, not by rotation.

- **Template A — Narrative / Credibility** *(AI Agent Development, RAG Chatbots)* — buyer's hesitation is *"will this actually work?"*
- **Template B — Operational / Before-After** *(Workflow Automation, Email & Inbox, Document Processing)* — buyer already believes it works and needs to see *"what changes in my week?"*
- **Template C — Technical / Depth** *(this page, plus Custom Software and CRM Development)* — buyer is evaluating **capability**, not concept.

A dashboard buyer has almost never doubted that dashboards work. They are already looking at four of them. Their hesitation is different and much more specific:

> *"I already have Looker Studio, my CRM's built-in reports, and a spreadsheet. Why would I pay someone to build another one — and how do I know yours won't be abandoned like the last three?"*

That is a capability-and-architecture objection, not a belief objection. So this page does not open with a promise. It opens with **the data layer diagram**, because the honest differentiator is that we build the pipeline underneath the charts, and every failed dashboard the buyer has lived through failed at that layer rather than at the chart layer.

## Template C structural rules (lock these — this page defines them for CRM Development and Custom Software later)

- **Dark page base with light content cards** — the inverse of A and B. This is the single most obvious signal that the buyer has moved into the technical tier of the site.
- **Architecture diagram as the hero element**, not a screenshot and not a before/after strip.
- **Persistent right-hand spec panel** at ≥1200px: stack, delivery window, ownership terms, hosting options. Collapses into an inline card above the FAQ below that width.
- **Tabbed technology breakdown** rather than a flat logo grid.
- **Engagement-model table** (fixed scope · retainer · team extension) instead of Template B's open price table.
- Inline stack blocks and field-level detail are welcome here; on A and B they would be noise.

**Do not** reuse Template A's vertical timeline or Template B's sticky left rail on this page. Process here is a **horizontal phase band with a spec column beside it** — a third distinct treatment.

---

# PART 1 — SEO SPEC

## Primary keyword

`custom dashboard development` — moderate competition. The SERP is split between two groups who both leave an opening:

1. **Tool vendors** (Power BI, Tableau, Looker, Metabase, Grafana) who own every "how to build a dashboard" query and have no incentive to discuss when a custom build beats their product.
2. **Offshore dev shops** publishing near-identical "we build stunning dashboards" pages with no architecture detail, no honest comparison, and no pricing.

The gap is a page written by people who will tell you to use Looker Studio when Looker Studio is the right answer. That honesty is the ranking asset *and* the conversion asset — it is the same move that works on the Workflow Automation page ("Can't we just use Zapier ourselves?").

## Ranking targets

| Keyword | Note |
|---|---|
| `custom dashboard development services` | Primary commercial variant |
| `business intelligence dashboard development` | Higher volume, broader intent, worth a section not a page |
| `internal dashboard development` | Under-served; strong fit with the Custom Software pillar |
| `client reporting dashboard for agencies` | Niche, low competition, converts — agencies are a core segment |
| `embedded analytics development` | High intent, technical buyer, low agency competition |
| `looker studio vs custom dashboard` | Comparison intent — answer it honestly and win the click |
| `real-time dashboard development` | Qualifies buyers with a genuine streaming requirement |
| `power bi alternative custom build` | Bottom-funnel, tool-name intent |
| `dashboard development cost` | Answer with structure even where a number is bracketed |

**The undervalued angle is the comparison query.** `looker studio vs custom dashboard` and `power bi alternative custom build` are searched by people mid-decision with budget. Almost every competing agency avoids these because answering honestly means occasionally saying "don't hire us." Section 8 is built entirely for these queries and it is the highest-value block on the page.

## Meta

**Title (59 chars):**
```
Custom Dashboard Development for Ops & Client Reporting | Spaciva AI
```
*If the CMS enforces a hard 60-char limit, use:*
```
Custom Dashboard Development Services | Spaciva AI
```

**Description (154 chars):**
```
We build custom dashboards on a real data layer — your CRM, store, database and
ad platforms in one place, refreshed automatically. Fixed price, you own the code.
```

**H1:** `Dashboards fail at the data, not the charts`
**URL:** `/services/custom-dashboards` — do not use `/services/dashboard-development`; keep the plural-noun pattern consistent with the other service slugs.

## Positioning against neighbouring pages

These four must not cannibalise each other. State the distinction in Section 9 and mirror it on the sibling pages:

> **Custom dashboards** — you need to *see* the state of the business, from data that currently lives in five places.
> **Workflow automation** — you need something to *happen* when the data changes.
> **CRM development** — you need a system people *enter and manage* data inside, not just read it.
> **AI agents** — you need judgement applied where the next step isn't fixed in advance.

Most dashboard projects quietly contain a workflow-automation project (the pipeline that gets the data there). Say so on the page — it is true, it is the honest upsell, and it strengthens the internal link rather than weakening it.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the engagement-model table

Add `HowTo` **only** if the process section keeps its step-by-step structure at publish; do not force it.

## Internal linking (all targets verified live except where noted)

- Section 4 → `/services/workflow-automation` *(live)*
- Section 4 → `/services/document-invoice-processing` *(live)*
- Section 9 → `/services/ai-agent-development` *(live)*
- Section 9 → `/services/rag-chatbot-development` *(live)*
- Section 9 → `/services/crm-development` — **not live yet. Ship this link disabled or omit until that page exists; do not publish a 404 the way `/about` currently does from the footer.**
- Case study block → `/case-studies/partsflow` and `/case-studies/unified-accounting` *(both live)*

Add the reciprocal link back to this page from Workflow Automation Section 9 and from the AI Agent page's cross-link paragraph.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template C opening.** Dark base. Two columns at ≥1024px: copy left at ~52%, **architecture diagram right**. The diagram is the hero image — no screenshot, no illustration, no stock 3D. It is four labelled layers stacked vertically with connecting lines: **Sources → Pipeline → Warehouse → Dashboard**, each layer holding three or four small named chips.
>
> Render it as inline SVG with real text nodes, not a PNG. It is crawlable content, it stays sharp, and it is the single asset that communicates the whole positioning before anyone reads a word.
>
> Below 1024px the diagram moves beneath the copy and collapses to a vertical stack — never let it shrink to unreadable text.

**Eyebrow:** CUSTOM DASHBOARDS

# Dashboards fail at the data, not the charts

Anyone can put a chart on a screen. The hard part is the layer underneath: pulling from your CRM, your store, your database, and your ad platforms; reconciling records that don't agree; and keeping it all current without somebody exporting a CSV every Monday. We build that layer, then the dashboard on top of it.

**[Book a 30-minute call]** **[See how it's built →]**

**Proof line:**
```
Live in [X]–[Y] weeks · Runs on your infrastructure · You own the code and the pipeline
```

**Hero diagram content:**

| Layer | Chips |
|---|---|
| **Sources** | CRM · Shopify · Postgres · Ad platforms · Sheets |
| **Pipeline** | Scheduled sync · Validation · Deduplication · Error alerting |
| **Warehouse** | One modelled source of truth · Historical snapshots |
| **Dashboard** | Role-based views · Alerts · Export · Embedded |

*Small caption under the diagram:* Most dashboard projects only build the top layer. That's why they stop being trusted.

---

## SECTION 2 — Trust strip

> **UI/UX:** Same component, same greyscale-to-colour treatment, same client-name-as-text rule as every other service page. This is one of the shared elements that keeps the three templates reading as one site. Single row — kill the duplicated marquee loop currently rendering on the live service pages, which repeats the same eight logos twice and reads as padding.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — The problem

> **UI/UX:** Full-width, single column, max ~720px, centred, on the dark base. No cards, no icons. This is the one block on the page written to be read as prose rather than scanned. Pull the closing line out as a bordered pull-quote in the accent colour.

## You don't have a reporting problem. You have five systems that disagree.

Your revenue number lives in the accounting system. Your pipeline lives in the CRM. Your delivery status lives in a project tool, your ad spend lives in three ad accounts, and the number your leadership team actually looks at lives in a spreadsheet somebody rebuilds every Monday morning from all of the above.

So every meeting starts with a discussion about whose figure is right. Someone rebuilds the export. A decision waits three days for a number that already existed in four places. And the report is always describing last week, because it takes until Wednesday to assemble.

The built-in reporting in each of those tools can only ever show you its own slice. That's not a flaw in the tools — it's the definition of them. The view you actually need is the one that spans all of them, and no vendor is incentivised to build it for you.

> **A dashboard is only worth building when someone would make a different decision because of it. If nobody would act differently, you don't need a dashboard — you need a weekly email.**

---

## SECTION 4 — What we build

> **UI/UX:** Light content cards on the dark base — the Template C inversion, and the section where it should be most obvious. Three columns at desktop, two at tablet, one at mobile. Card title, one-line "best for", body. No icons; the inversion is doing the visual work here and icons would compete with it.

**Eyebrow:** WHAT WE BUILD

## Six dashboards that earn their build cost

Different jobs, same foundation. What changes is who's looking and what they're allowed to see.

### Executive and business overview

Revenue, pipeline, cash position, delivery load, and headcount utilisation on one screen, reconciled across your accounting system, CRM, and project tool. The number everyone argues about becomes one number with a definition attached.

*Best for: founders and leadership teams making decisions from a spreadsheet someone rebuilds by hand.*

### Client reporting dashboards

A live, branded dashboard per client, pulling from ad platforms, analytics, and your project tool, replacing the deck your team rebuilds every month. Clients log in whenever they want instead of emailing to ask. You keep the monthly call for the commentary that actually needs a human.

*Best for: agencies losing two to three hours per client, per month, to report assembly.*

### Operations and fulfilment dashboards

Orders, inventory, exceptions, SLA breaches, and queue depth in real time, with the flagged items surfaced rather than buried. Built so the first screen shows what needs a person, not what happened last quarter.

*Best for: e-commerce and logistics teams who find out about problems from customers.*

### Sales and pipeline dashboards

Pipeline by stage, source, and owner, with conversion and cycle-time tracked over real history rather than whatever your CRM's built-in report happens to expose. Forecast against your own definitions, not the vendor's.

*Best for: teams whose CRM reporting can't answer the question the sales meeting keeps asking.*

### Financial and AP dashboards

Cash flow, ageing, spend by vendor and category, margin by client or product, assembled from your accounting system and the documents feeding it. Pairs directly with [document and invoice processing](/services/document-invoice-processing), which is where the clean data comes from in the first place.

*Best for: finance teams closing the month from a position they can't see until it's over.*

### Embedded customer-facing dashboards

Analytics inside your own product or client portal, under your brand, with per-tenant data isolation and role-based access. Built as a product feature, with the security model designed before the charts.

*Best for: SaaS and platform businesses where "can we see our own data?" is now a sales objection.*

**Below the grid, smaller:**
> Getting the data into place is often the larger half of a dashboard project, and it's [workflow automation](/services/workflow-automation) wearing a different hat. If your data is already clean and in one system, say so on the call — the project gets meaningfully cheaper and we'll tell you so before you commit.

---

## SECTION 5 — The data layer

> **UI/UX — the signature section of Template C.** Expanded version of the hero diagram, full width, with each of the four layers as a horizontal band containing its own explanatory copy. Bands separated by a visible rule with the flow direction marked. This is the section that justifies the price, and it should be the longest scroll on the page.
>
> Persistent right-hand spec panel stays visible alongside it at ≥1200px.

## What's actually underneath a dashboard you can trust

The chart layer is a week of work. Everything below it is the reason dashboards succeed or get abandoned.

### 01 — Connectors that survive contact with reality

We pull from each source through its API on a schedule you set, with retry logic, rate-limit handling, and alerting when a connection fails. The failure mode of most dashboards is silent: an integration breaks, the chart keeps rendering yesterday's data, and nobody notices for three weeks. Every pipeline we build tells us it broke before it tells you.

### 02 — Reconciliation and deduplication

The same customer exists three times across your systems under three slightly different names. Currencies differ, time zones differ, and one system counts a sale at order and another at fulfilment. We agree the matching rules and the definitions with you in writing, then encode them once, so the number stops depending on who exported it.

### 03 — A modelled layer, not a live query per chart

Data lands in a warehouse or a modelled database and the dashboard reads from that, rather than every chart hammering your production systems. It's faster, it doesn't degrade the tools your team is trying to work in, and it gives you history — so you can answer "what did this look like in March?" even where the source system overwrites rather than keeps.

### 04 — Definitions written down

"Active client," "closed won," "monthly revenue," and "churn" all mean something specific in your business, and usually something slightly different to each department. Every metric on the dashboard carries its definition, visible on hover or in a linked glossary. This is unglamorous and it is the single thing that stops the dashboard being re-litigated in every meeting.

### 05 — Access that matches your org chart

Role-based access down to the row where you need it: an account manager sees their clients, a client sees only themselves, leadership sees everything. For embedded dashboards, tenant isolation is designed and tested before a single chart is styled.

### 06 — Alerts, so nobody has to remember to look

The dashboard nobody opens is worth nothing. Thresholds you define push to Slack, Teams, or email when something crosses them, so the dashboard becomes the place you go to investigate rather than the place you were supposed to check.

> **The chart layer is a week. The data layer is the project. Any quote that doesn't distinguish between the two is a quote that will change later.**

---

## SECTION 6 — How the build runs

> **UI/UX:** **Horizontal phase band with a spec column beside it** — not Template A's vertical timeline, not Template B's four-step rail. Five phases across a horizontal rule with numbered nodes and a duration pill beneath each, and the right-hand spec panel running alongside showing what you receive at each phase. Collapses to a vertical stack with the spec detail inline below 1024px.

## Five phases, [X]–[Y] weeks

**01 — Metric definition workshop** · *2–3 days*
Before anything technical, we agree what the dashboard has to answer and what each metric means. Half of this session is usually the first time two departments discover they define the same word differently. You get the written definition set whether or not you hire us.

**02 — Source audit and fixed quote** · *2–3 days*
We connect to each source and check what's actually available through its API, how clean it is, and how far back the history goes. Only then do you get a written scope, a fixed price, and a date. If a source genuinely can't provide what the dashboard needs, you find out here, before you've committed anything.

**03 — Pipeline and data model** · *1–2 weeks*
Connectors, sync scheduling, reconciliation rules, and the modelled layer. You get a written update every Friday plus a short Loom walkthrough of what moved. This is the phase where a project is won or lost and it's the phase most vendors compress in the quote.

**04 — Dashboard build and review** · *1–2 weeks*
Charts, filters, drill-downs, roles, and alerting, built against your real data rather than sample data. You review it against numbers you already know are correct — that reconciliation against a source you trust is a scheduled step, not a favour.

**05 — Launch and monthly plan** · *ongoing*
Deployed with pipeline monitoring from day one. Then a monthly plan: watching the syncs, adding metrics as the questions change, and adjusting when a source system changes its API — which they do, without asking you first.

**Right-hand spec panel content:**

| | |
|---|---|
| **Typical duration** | [X]–[Y] weeks end to end |
| **Frontend** | React · Next.js · Recharts / D3 / ECharts |
| **Backend** | Node · Python · REST and GraphQL APIs |
| **Data** | Postgres · MySQL · BigQuery · ClickHouse · dbt-style modelling |
| **Pipeline** | Airbyte · n8n · custom Python services |
| **BI layer (where it fits)** | Metabase · Superset · Grafana · Looker Studio |
| **Hosting** | Your AWS, GCP, or Azure account — or ours, if you'd rather |
| **Ownership** | Source code, pipeline, data model, and documentation on final payment |
| **After launch** | Monthly monitoring, tuning, and new metrics |

---

## SECTION 7 — Stack

> **UI/UX:** **Tabbed technology breakdown**, not a flat logo grid — the Template C break from Template B's tool section. Four tabs: Data sources · Pipeline and storage · Dashboard layer · Hosting and delivery. Render tool names as real text alongside any logos; tab panels must be in the DOM on load and hidden with CSS, never lazy-mounted, because this is the richest keyword surface on the page.

## What we connect and what we build it on

We don't ask you to migrate anything. The dashboard reads from where your data already lives.

### Data sources
HubSpot · Salesforce · Pipedrive · Zoho · Shopify · WooCommerce · Stripe · QuickBooks · Xero · NetSuite · Google Analytics · Google Ads · Meta Ads · LinkedIn Ads · Postgres · MySQL · MongoDB · Airtable · Google Sheets · Notion · Asana · ClickUp · Jira

### Pipeline and storage
Custom Python and Node services · n8n · Airbyte · Postgres · BigQuery · ClickHouse · scheduled and event-driven syncs · warehouse-style modelling

### Dashboard layer
React and Next.js front ends · Recharts · D3 · ECharts · Metabase · Superset · Grafana · embedded analytics with per-tenant isolation

### Hosting and delivery
AWS · GCP · Azure · Vercel · Docker · CI/CD pipelines · regional hosting where data residency (EU or UK) is a requirement

**Below the tabs, smaller:**
> Not listed? If it has an API, we can almost certainly read from it. If it doesn't — and some older systems genuinely don't — we'll tell you before you commit and propose a file-based or database-level import instead of promising an integration that doesn't exist.

---

## SECTION 8 — Build or buy

> **UI/UX:** Two light cards side by side on the dark base, deliberately equal in visual weight — the left one must not be styled as the losing option. Beneath them, a full-width comparison table. This section is built for `looker studio vs custom dashboard` and `power bi alternative custom build`, so the table needs real `<th>` markup and plain text, not an image.

## You may not need us for this

An off-the-shelf BI tool is the right answer more often than any agency page will admit. Here's the honest version of the decision.

### An off-the-shelf tool is probably right when

Your data already lives in one or two systems that the tool connects to natively, your metrics match how those systems already define them, a daily refresh is fast enough, and the audience is your own team rather than your customers. Looker Studio, Metabase, or Power BI will be live in days and cost a fraction of a custom build. **We'll tell you this on the call and we won't quote you for something you don't need.**

### A custom build makes sense when

Your data spans four or more systems that disagree with each other, your metrics need definitions the source tools can't express, you need history a source system overwrites, the dashboard has to be embedded in your own product under your brand, you need row-level access rules that match your org chart, or per-seat licensing has stopped making sense at your headcount. You also own it outright, which matters once this becomes something the business runs on.

| | Off-the-shelf BI tool | Custom build |
|---|---|---|
| **Time to first version** | Days | [X]–[Y] weeks |
| **Upfront cost** | Low | Higher, fixed and quoted in writing |
| **Ongoing cost** | Per-seat licence, grows with headcount | Hosting plus a monthly plan |
| **Data across many systems** | Possible, usually fragile | Designed for it |
| **Custom metric definitions** | Constrained by the tool | Whatever your business actually means |
| **Historical snapshots** | Only what sources retain | Kept from day one |
| **Embedding in your product** | Limited, and licensed accordingly | Built as a product feature |
| **Row-level access control** | Tool-dependent | Modelled to your org |
| **Ownership** | You rent it | Code, pipeline, and model are yours |

**Honest answer:** a good number of clients should start with Metabase or Looker Studio on top of a properly built data layer — which is a much cheaper project than a full custom build, and it's frequently what we recommend. The pipeline is the part that has to be right. The chart layer can be bought.

---

## SECTION 9 — Dashboard, or something else?

> **UI/UX:** Four compact linked cards in a row, dropping to two-up on tablet. Keep them plain — this is a routing block, not a persuasion block. Omit or disable the CRM Development card until that page is live.

## Is a dashboard actually what you need?

**Custom dashboards** — you need to *see* the state of the business, from data that currently lives in five places. *(This page.)*

**[Workflow automation](/services/workflow-automation)** — you need something to *happen* when the data changes: a record updated, a person notified, a report sent. If nobody would look at the screen, automate the action instead.

**[CRM development](/services/crm-development)** — you need a system people *enter and manage* data inside, not just read from. A dashboard on top of data nobody maintains properly will only show you the mess faster.

**[AI agents](/services/ai-agent-development)** — the next step depends on judgement rather than a rule. And if the real request is "let me ask questions about our own data in plain language," that's closer to a [RAG chatbot](/services/rag-chatbot-development) than a dashboard, and it's often a smaller build.

> **Honest answer:** roughly half the dashboard enquiries we take turn out to be workflow-automation projects with a reporting screen at the end. That's a cheaper project and a better outcome, and we'd rather say so in week one.

---

## SECTION 10 — Where dashboard projects go wrong

> **UI/UX:** Plain two-column list, no icons, tight spacing, near the bottom of the page. Supporting evidence rather than a centrepiece — Section 5 already did the credibility work.

## Four reasons dashboards get abandoned

### Built once, never watched
The pipeline fails silently. The charts keep rendering the last successful sync. Three weeks later somebody notices a number hasn't moved, and from that day nobody trusts the dashboard again — including for the metrics that were still correct. This is why monitoring is scoped in from day one here rather than sold at handover.

### Every question got its own chart
Forty widgets, no hierarchy, and the screen that was meant to answer "are we okay?" now takes ten minutes to read. We start from the decisions the dashboard has to support and refuse charts that don't support one. Fewer, better-placed numbers beat completeness every time.

### The definitions were never agreed
Two departments define "active client" differently, so the dashboard shows a number neither of them accepts, and both go back to their own spreadsheet. Getting the definitions written down first isn't bureaucracy — it's the whole difference between a dashboard people use and one people argue about.

### It was built on data nobody maintains
If a field is only filled in when someone remembers, a dashboard doesn't fix that; it publicises it. Sometimes the honest answer is to fix the process feeding the system first and build a smaller dashboard afterwards. We'll say so.

---

## SECTION 11 — Engagement models

> **UI/UX — Template C's replacement for Template B's open price table.** Three columns, middle emphasised as the common choice. If real prices aren't confirmed, **keep this section and publish it without figures** — the structure of how you engage is itself differentiating, and unlike Template B's price table it still works without numbers. Do not publish ranges you can't honour.

## How engagements are structured

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders. If scope moves, we re-quote in writing first.

### Single dashboard — from $[X]
One dashboard on up to [N] data sources: definitions, pipeline, model, build, and launch. Includes the first month of monitoring.
*Good for: proving the data layer works before committing further.*

### Data layer and dashboard suite — from $[Y]
The full pipeline plus multiple role-based dashboards reading from one modelled source of truth. Usually where the compounding value shows up, because the second and third dashboards are a fraction of the cost of the first.
*Good for: most teams with data across four or more systems.*

### Ongoing data partner — from $[Z]/month
A standing monthly plan: pipeline monitoring, source-change fixes, new metrics and views as the questions change, plus a set amount of new build work each month.
*Good for: teams where the reporting questions keep evolving — most clients end up here.*

**Beneath the table:**
> Every build includes monitoring for the first month. After that it's $[M]/month and you can stop any time — you keep the code, the pipeline, the data model, and the documentation either way.

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards, matching the treatment on the AI Agent page exactly. Metric, client, one paragraph, link. Both targets are live.

## What we've built

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.

*Note for the client: the strongest possible addition to this page is a dashboard case study with a real screenshot — even anonymised, with the figures blurred. Every competitor's page is chartless stock imagery. One real screen would outperform this entire section.*

---

## SECTION 13 — FAQ

> **UI/UX:** Accordion, first item open — Template A's pattern, reused deliberately here. Template B's two-column plain list would compete with the dense spec content above it. Add `FAQPage` schema; these are the exact questions LLMs surface for dashboard-vendor queries.

## Common questions

**How long does a custom dashboard take to build?**
[X]–[Y] weeks end to end for a single dashboard, most of which is the data pipeline rather than the charts. The biggest variable is how many systems we're pulling from and how clean the data is — not how many charts you want.

**Why not just use Power BI, Tableau, or Looker Studio?**
Often you should, and we'll say so on the call. Those tools are excellent when your data sits in one or two systems they connect to natively and your metrics match how those systems already define them. A custom build earns its cost when data spans several disagreeing systems, when you need definitions or history the source tools can't give you, or when the dashboard has to be embedded in your own product.

**Can it show real-time data?**
Yes, where the source system supports it and where it genuinely changes a decision. Real-time costs more to build and more to run, so we'll ask what you'd actually do differently with a live number versus a fifteen-minute or hourly refresh. For most business dashboards, hourly is indistinguishable in practice.

**What if our data is messy?**
That's normal and it's most of the work. We audit each source before quoting, agree the reconciliation and deduplication rules with you in writing, and encode them once in the pipeline. Where a field is unreliable at source, we'll tell you rather than quietly charting it.

**Can clients or customers log in and see only their own data?**
Yes. Role-based access is part of the model, down to row level where needed, and for embedded dashboards tenant isolation is designed and tested before the charts are built.

**Does it work on mobile?**
The dashboards are responsive, and we design the mobile view around the two or three numbers people actually check on a phone rather than shrinking a desktop grid. If your team lives in Slack, threshold alerts there are often more useful than a mobile screen.

**Who owns the code, the pipeline, and the data?**
You do. Source code, pipeline, data model, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts on your infrastructure, so if you stop working with us, it keeps running.

**Where is our data hosted?**
In your own AWS, GCP, or Azure account by default. Regional hosting is available where data residency (for example EU or UK) is a requirement, and we confirm the exact setup in writing before anything moves.

**What happens when one of our source systems changes its API?**
It will, and usually without telling you. Pipelines ship with alerting so we find out before you do, and fixes to anything we built are covered by the monthly plan. Unmonitored pipelines are the main reason dashboards quietly stop being trusted.

**Can you take over a dashboard someone else built?**
Yes, regularly. We'll audit what exists — usually the pipeline is the problem and the front end is salvageable — and tell you honestly whether to fix or rebuild, with a fixed price for either path.

**What does it cost?**
Single dashboards start at $[X], data-layer-plus-suite engagements at $[Y], and ongoing plans from $[Z] a month. You get a fixed price in writing before any work starts, and we carry the risk of our own estimates.

**How do you work with clients abroad?**
We're in Ahmedabad, India, and stay available for video calls in your US Eastern or UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved.

---

## SECTION 14 — Closing CTA

> **UI/UX — Template C closes dark-on-dark with a bordered accent panel**, distinct from Template A's full-bleed dark band and Template B's light bordered panel. Single primary button, no competing secondary link, no email capture.

## Tell us the number your team keeps rebuilding by hand.

Book a 30-minute call. We'll map where that number actually lives, tell you honestly whether an off-the-shelf tool would do the job, and give you a fixed price if a custom build is genuinely the right answer.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from A and B

| Element | Template A (AI Agent) | Template B (Workflow) | **Template C (this page)** |
|---|---|---|---|
| Base | Light with two dark bands | Light throughout | **Dark base, light cards** |
| Hero | Two-column, screenshot right | Centred, before/after strip | **Two-column, architecture diagram right** |
| Navigation | None | Sticky left rail | **Persistent right spec panel** |
| Main content block | Card grid | Tabbed explorer | **Light cards on dark + layered diagram** |
| Signature section | "Why projects fail" | Manual vs automated split | **The data layer, six bands** |
| Process | Vertical timeline, 6 steps | Horizontal rail, 4 steps | **Horizontal phase band + spec column, 5 phases** |
| Commercials | Hero line + FAQ | Open price table | **Engagement-model table** |
| Tools | Inline text list | Logo grid | **Tabbed technology breakdown** |
| FAQ | Accordion | Two-column plain list | **Accordion** |
| Closing CTA | Full-bleed dark | Light bordered panel | **Bordered accent panel on dark** |

Nine structural differences, one shared design system. The FAQ pattern is intentionally shared with A.

## Accessibility

- Dark base requires re-checking every token: body text on the dark background must hit **4.5:1**, and the accent colour used for links and the pull-quote almost certainly needs a lighter variant than it uses on the light templates. Do not ship the light-template accent unchanged.
- The hero and data-layer diagrams need `role="img"` with a full `aria-label` describing the four layers in order, plus real `<text>` nodes rather than paths.
- Tabbed stack breakdown needs arrow-key navigation and correct `aria-selected`.
- Chart-style visuals in any screenshot must not encode meaning in colour alone.
- Spec panel must not trap focus and must appear in a sensible DOM order for screen readers — after the process content, not before it.

## Performance

- Both diagrams as **inline SVG**, not images. They're the two heaviest visual assets and inline SVG keeps them crawlable, sharp, and free of extra requests.
- Stack tab panels render on load, hidden with CSS. Lazy-mounting loses the richest keyword section on the page.
- The trust strip currently renders its eight logos twice on live service pages (a duplicated marquee loop). Fix it globally rather than replicating the bug here.
- If any live chart demo is added later, load it below the fold and never block LCP with it.

## Site-level issues this page depends on

1. **`/about` still 404s and is still linked from the footer of every service page.** Any new page ships that broken link too. Fix before publishing more pages.
2. **There is still no services index.** Five service pages are live and reachable only via in-body cross-links; the nav "Services" link points to a homepage anchor. This page makes it six orphans. **Build `/services` as a real index, or add a nav dropdown, before adding another page** — otherwise this is well-optimised content with no crawl path and no user path.
3. **`/contact` still carries the old generalist positioning** in its title and meta ("Custom AI, CRM, LMS & Web Systems") and uses the "SPACIVA" all-caps mark. That's the page every CTA on this page points at.
4. **Brand mark is still inconsistent** — "Spaciva AI" in the nav and footer, "SPACIVA" on the contact page. Pick one lockup.
5. **`meta-og:url` is hardcoded to the homepage on every service page**, and `og:title` / `og:description` are the homepage's on all of them. Every share of this page will preview as the homepage. Fix the OG tags per-page as part of this build.

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `[X]`–`[Y]` weeks — delivery window | Hero proof line, Section 6, Section 8 table, FAQ | Must be a range you'll actually honour. Sibling pages use 2–4 weeks; dashboards with a real pipeline are usually longer — don't copy a number across for consistency's sake |
| `$[X]` — single dashboard | Section 11, FAQ | |
| `$[Y]` — data layer + suite | Section 11, FAQ | |
| `$[Z]` — monthly partner plan | Section 11, FAQ | |
| `$[M]` — maintenance monthly | Section 11 footnote | |
| `[N]` — sources included in the entry package | Section 11 | |
| Client logos and names | Section 2 | |
| Dashboard screenshot | Section 12 | Highest-impact single asset on this page. Anonymised and blurred is fine |
| Real dashboard case study | Section 12 | If PartsFlow or Unified Accounting included a reporting layer, write it up as one |

**Important:** every figure on this page is either bracketed or framed as typical. Nothing here presents an unverified number as a client result. If you have one measured outcome from a real dashboard engagement — hours saved on report assembly, days cut from month-end — swap it in and attribute it. One named figure outperforms three plausible ones, and it's the one thing this page currently can't fake.
