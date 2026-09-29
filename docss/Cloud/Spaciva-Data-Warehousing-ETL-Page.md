# Spaciva — Data Warehousing & ETL Pipelines Page

**URL:** `/services/data-warehousing-etl`
**Layout:** **Template C — Technical / Depth**, variant **C-4 (Data Engineering)**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — READ THIS BEFORE COMMISSIONING THE PAGE

## This page takes a keyword away from the BI page. That's deliberate, and it needs your sign-off.

The Business Intelligence doc names `data warehouse development services` as **"the real workhorse — technical, commercial, mid-market, genuinely winnable."** That call was right. But it was made when no data-engineering page existed, and the BI page cannot hold that keyword well: it is a Template A narrative page written for a COO who has been burned by shelfware, and it opens on a maturity gate telling half its readers to leave. Someone searching `data warehouse development services` is not asking whether they're ready. They've decided. They want to know if you can build it.

So the boundary is:

> **Business intelligence** owns the **decision layer** — modelled metrics, agreed definitions, self-serve exploration, "what should we do about this?" The buyer is a COO or founder. The objection is *shelfware*.
> **Data warehousing & ETL** owns the **supply layer** — getting data out of fifteen systems, reliably, on a schedule, into one place that stays correct. The buyer is a CTO, head of data, or the ops engineer who currently owns the broken cron job. The objection is *reliability*.

The warehouse itself is named in this page's title, so **the warehouse build lives here.** BI keeps the metric layer, the semantic layer, dbt modelling, and the BI tool. That split is real: one team builds the pipes and the storage, the other decides what the numbers mean. Every serious data org separates them, and so should the site.

**If you're not willing to make the edits below, don't publish this page.** Two pages both selling "we build your data warehouse" is a worse outcome than one page selling it adequately.

## Required edits to the Business Intelligence page if both ship

1. **Strip `data warehouse development services` from the BI ranking table** and add it here. BI's replacement workhorse is `BI implementation services` and the tool-name cluster it already identified, which it serves better anyway.
2. **BI Section 4, "The warehouse" card, gets shortened to three lines and links here.** Keep the sentence about picking the cheapest warehouse that works — it's a positioning line, not a keyword play. Cut the storage-engine discussion and route it.
3. **BI's Section 4 footnote currently sends ingestion to Workflow Automation.** That was the best available home at the time and it is now wrong. Ingestion on a schedule is this page. Repoint it.
4. **This page never argues the metric layer.** It stops at the modelled warehouse and hands off. No section headed anything like "what your numbers mean," no dbt semantic-layer discussion, no BI tool comparison. One link, one sentence, move on.
5. **Neither page uses the other's H1 language.** BI leads on trust and shelfware. This page leads on reliability and ownership of the pipes.

Custom Dashboards needs one small change too: its Section 5 ("What's actually underneath") already routes to BI for the full warehouse discussion. **Change that link to point here instead** — the underneath of a dashboard is a pipeline, not a semantic layer.

## Why Template C

Straightforward this time. The buyer is evaluating **capability**, not concept. Nobody searching for ETL development needs convincing that pipelines are a good idea — they have four of them and two are broken. They want to see whether you understand idempotency, schema drift, backfills, and what happens at 3am when an API starts returning 429s.

That is exactly what Template C's technical tier exists for: dark base, architecture diagram hero, persistent spec panel, tabbed stack, horizontal phase band.

**One note on the C-variant numbering.** The set currently has Custom Dashboards as "first use," CRM Development as "second use," Internal Business Tools as "C-2," and Generative AI as "first use" again. The numbering has drifted and should be reconciled once, centrally. I've labelled this **C-4** on the assumption the order is Dashboards → Internal Tools → CRM Development → this. Renumber if that's wrong; nothing in the build depends on it.

## Template C variants

| | **C-1 Dashboards** | **C-2 Internal Tools** | **C-3 CRM Dev** | **C-4 Data Engineering** *(this page)* |
|---|---|---|---|---|
| Hero visual | Data-layer diagram | App/screen map | Object-model diagram | **Pipeline flow: sources → ingest → raw → transform → warehouse → consumers** |
| Signature block | Build-or-buy vs Looker Studio | Build-or-buy vs no-code | Build-or-buy vs HubSpot | **Build-or-buy vs Fivetran, with the cost crossover named** |
| Persuasive engine | Why dashboards get abandoned | Why internal tools rot | Why CRM builds stall | **Five ways pipelines fail silently, each with the engineering control** |
| Process | Horizontal phase band | Horizontal phase band | Horizontal phase band | **Horizontal phase band, 5 phases, first source landing in week one** |

---

# PART 1 — SEO SPEC

## Primary keyword

`etl pipeline development services`

Not `data engineering services` (too broad, owned by Accenture, Thoughtworks and the big Indian majors, and the intent behind it is usually a staffing search, not a project search). Not bare `data warehouse` (product and encyclopaedia intent — Snowflake, AWS, IBM, Wikipedia).

The SERP for the ETL cluster is split between three groups that all leave the same gap:

1. **Tool vendors** — Fivetran, Airbyte, Talend, Informatica — who own every informational query and have no incentive to tell you when the tool is the wrong answer.
2. **Enterprise consultancies**, writing for a buyer with a data team already.
3. **Offshore shops** publishing "we build robust scalable ETL pipelines" with zero specifics about schema drift, backfills, or what happens when a source API changes.

The gap is a page that names the cost crossover out loud — the point at which a managed connector stops being cheaper than owning the pipeline — and tells a decent share of readers to stay on Fivetran. Same move as Workflow Automation's "can't we just use Zapier ourselves?", and it works for the same reason.

## Ranking targets

| Keyword | Note |
|---|---|
| `etl pipeline development services` | Primary. Commercial, project intent |
| `data warehouse development services` | **The workhorse, moved here from the BI page.** Highest commercial value in the cluster |
| `data pipeline development company` | Vendor-selection intent, mid-market |
| `custom etl development` | Qualifies out the tool-shoppers |
| `fivetran alternative` / `fivetran too expensive` | **Bottom-funnel with budget attached.** Section 3 is built for this |
| `airbyte implementation partner` | Tool-name + service. Near-uncontested at your size |
| `etl vs elt` | Informational, high-authority, links internally. Target with the section, not the page |
| `data warehouse vs data lake` | Comparison intent — answer honestly, capture the researcher |
| `data migration services` | Adjacent, high volume. Own the one-off variant with Section 8, not a page |
| `shopify data warehouse` / `hubspot to bigquery` | **The undervalued cluster — see below** |

**The undervalued cluster is source-plus-destination long tail.** `shopify to bigquery pipeline`, `hubspot data warehouse integration`, `amazon seller central etl`, `netsuite data extraction`, `google ads bigquery pipeline`. Individually tiny. Collectively substantial, near-zero competition, and searched by someone who has already named both ends of the problem — which is the highest-intent signal in this entire cluster. They also map exactly onto your ICP: agencies with ad platforms, DTC brands with Shopify and Amazon, professional-services firms with a CRM and an accounting system.

**Serve it with Section 7's tabbed stack, not with a landing page per connector.** Every source name rendered as real text, not alt text. Revisit programmatic connector pages only after this page ranks for anything; doorway pages built before the parent page has authority are a liability.

**The second undervalued angle is the honest Fivetran comparison.** Fivetran and Stitch price on monthly active rows, so a single high-churn table can multiply a bill without any change in business volume. That's a real, searched, budget-attached pain, and almost nobody writes about it from a position of *"here's when you should keep paying it."* You can, because you sell neither product and take no reseller commission — the same free differentiator the BI page identified.

**Do not chase** `etl tools`, `best etl software`, `data engineering`, `snowflake vs databricks`. Wrong intent, unwinnable, and they put you in a comparison set against products rather than in a vendor shortlist.

## Meta

**Title (54 chars):**
```
Data Warehouse & ETL Pipeline Development | Spaciva AI
```

**Description (152 chars):**
```
We build and run the pipelines behind your data — ingestion, warehouse,
orchestration, monitoring. Fixed price, no reseller commissions, you own it all.
```

**H1:** `Moving the data once is a week's work. Keeping it right is the job.`

**URL:** `/services/data-warehousing-etl`

Considered and rejected: `/services/data-engineering` (broader than the page delivers, and it invites the staffing query you don't want), `/services/etl` (thin), `/services/data-pipelines` (loses the warehouse term entirely, which is the highest-value keyword on the page).

## Positioning against neighbouring pages

Eight pages now cluster around data. Put this in Section 11 and mirror the line on every sibling:

> **Data warehousing & ETL** — getting data out of every system, on a schedule, into one place that stays correct.
> **Business intelligence** — deciding what the numbers mean and letting people explore them.
> **Custom dashboards** — one screen answering a known set of questions.
> **ERP systems** — the financial and operational system of record.
> **Inventory management** — the stock number being right across channels.
> **Internal business tools** — a screen where work gets done.
> **Workflow automation** — something happens without anyone opening anything.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the engagement table

Add `TechArticle` markup to Section 8 if it keeps its comparison structure at publish — the ETL-vs-ELT and warehouse-vs-lake blocks are the parts LLMs quote, and they're worth marking up separately.

## Internal linking

- Section 3 → `/services/workflow-automation` *(live)*
- Section 4 → `/services/business-intelligence` — one link, for the metric layer
- Section 4 → `/services/custom-dashboards`
- Section 8 → `/services/erp-systems`, `/services/inventory-management`
- Section 11 → the full routing block
- Case studies → `/case-studies/unified-accounting`, `/case-studies/partsflow` *(both live)*

Ship any unbuilt link as plain text rather than a live 404.

**Proof note, and it's a good one for once:** the BI doc flagged that Unified Accounting is a pipeline story and therefore weak evidence for BI. It is strong evidence *here*. This is the page that case study was always describing. Lead Section 13 with it.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template C opening.** Dark page base, light content cards. Two columns at ≥1024px: copy left, **pipeline architecture diagram right**. The diagram is the hero element — no screenshot, no illustration.
>
> **The diagram:** five stages left to right, each a labelled node — *Sources* (four small stacked logos: CRM, store, ads, database) → *Ingest* → *Raw / landing* → *Transform* → *Warehouse* → and a right-hand fan-out to *BI · Dashboards · Ops tools · Finance*. Draw the connecting lines with a subtle animated flow direction, but **animate once on scroll-in and stop.** A perpetually pulsing pipeline diagram is a distraction on a page this long.
>
> **Persistent right-hand spec panel** at ≥1200px, per Template C rules: stack, typical first-source window, ownership terms, hosting options. Collapses into an inline card above the FAQ below that width.

**Eyebrow:** DATA WAREHOUSING & ETL PIPELINES

# Moving the data once is a week's work. Keeping it right is the job.

We build the ingestion, warehouse, and orchestration layer that everything else on your data stack sits on — then we run it. Sources land on a schedule, schema changes get handled before they break anything downstream, and when a load fails, we know before you do.

**[Primary CTA]** Book a 30-minute technical call
**[Secondary CTA]** See what we build

**Spec panel contents:**
- **Warehouses:** Postgres · BigQuery · ClickHouse · Snowflake
- **Ingestion:** Airbyte · Meltano · custom Python connectors · CDC
- **Orchestration:** Dagster · Airflow · n8n for lighter workloads
- **First source landing:** typically week one
- **Ownership:** all code, infra-as-code, and credentials transfer on final payment
- **Hosting:** your cloud, or ours with a documented exit path

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component. Greyscale to colour on hover, client names as real text beneath each logo, single row. The live site still renders the same eight logos twice through a duplicated marquee loop, and there's a stray `navdrin` string with no logo attached at the end of both loops — fix globally, not on this page.

**Label:** Trusted by teams in the US, UK, and India

---

## SECTION 3 — Build or buy

> **UI/UX — the signature block of C-4, placed high on purpose.** Four decision cards in a 2×2 grid at desktop, light cards on the dark base. Each card: the situation, then **a bolded verdict**. Two of the four verdicts say don't hire us.
>
> Below the grid, a single full-width band containing **the cost crossover** — visually the heaviest element in the section. If a simple two-line chart is feasible (managed-connector cost rising with row volume, custom pipeline flat), use it. If not, the sentence alone carries it. **Do not fabricate a chart with invented axis numbers.**
>
> **Do not style the "keep Fivetran" cards as disclaimers.** Same weight, same treatment as the other two. The mechanism only works if a reader can see you turning work away.

**Eyebrow:** BEFORE YOU BUY ANYTHING

## You may not need a custom pipeline. Here's how to tell.

Managed connectors are very good and getting cheaper. Most companies should use them for most sources. Find your situation below.

### Standard SaaS sources, modest volume

You need Shopify, HubSpot, Stripe, and Google Ads in one place, and none of them is enormous.

**Verdict: buy the connectors, don't build them.** Airbyte or Fivetran will do this in an afternoon for less than we'd charge to reproduce it, and doing it well is genuinely somebody else's full-time job. What you may still want from us is the warehouse underneath and someone to own it — that's a much smaller scope than a pipeline build, and we'll quote it that way.

### One system nobody supports

There's a connector for four of your sources and none for the fifth — a legacy ERP, a regional logistics provider, an internal database, a supplier who sends CSVs by email.

**Verdict: this is the job.** Unsupported sources are where custom engineering earns its money, and where most stacks quietly stall. We build the connector properly — incremental, idempotent, rate-limit-aware, with backfill — and it sits alongside your managed connectors rather than replacing them.

### The bill grew and your volume didn't

Managed platforms price on rows synced, not on business value. One high-churn table — an order-status field updating six times a day, an inventory snapshot — can multiply a bill while your revenue sits still.

**Verdict: worth an hour of arithmetic before anything else.** Sometimes the fix is a configuration change and you keep the platform. Sometimes two tables account for most of the bill and moving only those two onto owned pipelines pays for the build in months. We'll tell you which, and the first answer is common.

### It works, but it's one person's cron job

The pipeline runs. It runs on a VM someone set up, on a schedule nobody documented, and when it fails you find out because a client asks why a number looks wrong.

**Verdict: this is a rescue, and it's usually cheaper than you think.** We rarely rebuild these. We wrap what exists in orchestration, monitoring, and version control, document it, and take the pager. The engineering is sound more often than not — what's missing is everything around it.

**Cost crossover band:**

> A managed connector costs you money every month and costs you nothing to run. A custom pipeline costs money once and then costs attention forever. **The crossover isn't a row count — it's whether anyone on your side is willing to own the thing at 3am.** If the answer is nobody, buy the connector or buy our monthly plan. Don't build a pipeline you're planning to ignore.

---

## SECTION 4 — What we build

> **UI/UX:** Five light cards on the dark base. Three across, two below at equal weight. Title, one-line *"best for"*, body. Matches the C-1 and C-2 offer treatment exactly.

**Eyebrow:** WHAT WE BUILD

## Five layers, and you probably don't need all of them

### Ingestion and connectors
Managed connectors where they exist, custom ones where they don't — REST and GraphQL APIs, SFTP drops, database replicas, change-data-capture off Postgres or MySQL, and the supplier who still emails a spreadsheet. Incremental by default, idempotent so a re-run can't double-count, and rate-limit-aware so you don't get throttled into a two-day backlog.

*Best for: anyone with a source no platform supports. That's most people, once you get past the top ten SaaS tools.*

### The warehouse
One place where everything lands and stays, with history retained even where the source overwrites it — which is most of them. Raw and modelled layers kept separate so a transformation bug never destroys the original. Postgres, BigQuery, ClickHouse, or Snowflake depending on your volume and budget, **and we'll pick the cheapest one that works, because we earn nothing on the choice.**

*Best for: everyone. This is the foundation, and it's the piece most often skipped in favour of syncing straight into a BI tool.*

### Orchestration and scheduling
Jobs with declared dependencies, retries with backoff, alerting that names the failed step, and a run history you can look at. Dagster or Airflow where the graph is real; something lighter where it isn't, because a four-source stack does not need a distributed scheduler and we won't sell you one.

*Best for: anyone whose current answer to "what runs when?" is a cron file and a person's memory.*

### Data quality and observability
Freshness checks on every table, row-count anomaly detection, schema-drift handling that quarantines rather than crashes, and alerts that reach a human in Slack. Plus a last-updated timestamp visible wherever the data is consumed.

*Best for: everyone, and it's the line most often cut from a competing quote. We include it — see Section 5 for why.*

### Migration and backfill
Moving off a legacy warehouse, consolidating after an acquisition, or loading eight years of history into a new one. Reconciled row by row against the source, with a documented cutover and a rollback path, so you're never trusting a migration on the strength of a total that looked about right.

*Best for: one-off projects with a hard deadline. Priced separately from ongoing pipeline work.*

**Below the grid, smaller:**
> We stop at the modelled warehouse. Deciding what the numbers *mean* — agreed metric definitions, a semantic layer, self-serve exploration — is [business intelligence](/services/business-intelligence), and it's a different scope with a different conversation. If you just need one screen answering a known set of questions, that's a [custom dashboard](/services/custom-dashboards) and it's smaller than either.

---

## SECTION 5 — Why pipelines fail

> **UI/UX — Template C's persuasive engine.** Five stacked blocks, generous spacing, each ending on **a bolded line naming the engineering control that prevents it.** Longest scroll on the page. This is where a technical evaluator decides whether you're real, so resist any temptation to trim it for length.

**Eyebrow:** FAILURE MODES

## Five ways a pipeline fails, and the control that prevents each

Pipelines rarely fail loudly. That's the whole problem — a crash gets fixed on Tuesday, and silent wrongness gets discovered in a board meeting.

### The source changed and nobody was told

A vendor renames a field, adds a required parameter, or deprecates a version. Your loader either errors out or, worse, keeps running and writes nulls into a column that used to hold revenue.

**The control:** schema contracts on every source. Unexpected changes quarantine the affected rows and alert, rather than failing the whole run or silently accepting the new shape. Additive changes flow through; breaking ones stop at the gate.

### The job failed and the dashboard kept rendering

The load didn't run. The charts drew perfectly, using yesterday's data. Nobody noticed for three weeks, and after that nothing in the warehouse was trusted again — including everything that was still correct.

**The control:** freshness monitoring on every table with an expected-arrival window, and a visible last-updated timestamp everywhere the data is consumed. **Trust is lost once and regained slowly. The monitoring costs almost nothing by comparison.**

### A re-run doubled the numbers

Something failed halfway. Someone re-ran it. The load wasn't idempotent, so half the rows landed twice, and the fix was a manual delete against production that nobody wants to talk about.

**The control:** every load is idempotent and keyed. Re-running any window produces the same result as running it once, which means recovery is a button rather than a judgement call.

### It was built for the volume you had

It worked at 50,000 rows. At two million it takes six hours, overlaps the next scheduled run, and the warehouse bill is now a line item somebody's asking about.

**The control:** incremental loading from day one, even where a full refresh would be simpler at current volume. Partitioning and clustering decided at build time, not retrofitted under pressure.

### The person who built it left

The credentials were in someone's environment. The transformation logic was in a notebook. There was no repository, no documentation, and no second person who had ever looked at it.

**The control:** everything in version control, infrastructure as code, credentials in a managed secret store, and a written runbook covering the failure modes above. Handed over whether or not you keep us on afterwards.

> **Four of these five are decisions made before any data moves. None of them are about which warehouse you picked.**

---

## SECTION 6 — Mid-page CTA

> **UI/UX — on Template C the base is already dark, so the CTA bands invert to light.** Full-bleed light band, headline, one supporting line, single primary button. Same position as C-1 and C-2 so the tier reads consistently.

## Not sure whether to build, buy, or just fix what you have?

Send us your source list and roughly what you're paying today. We'll tell you which sources are worth owning, which to leave on a managed connector, and whether the honest answer is that your current setup needs monitoring rather than replacing.

**[Book a 30-minute technical call]**

---

## SECTION 7 — The stack

> **UI/UX — tabbed technology breakdown**, per Template C rules. Six tabs. **Every tool and source name rendered as real text alongside its logo, not alt text alone** — this is the primary surface for the source-plus-destination long tail identified in the SEO spec, and it's the single highest-value technical decision on the page.
>
> Tabs must be real anchors with crawlable content in the DOM, not client-side-only panels that render on click. If the build can't guarantee that, ship it as a labelled grid instead — the SEO value outweighs the interaction.

## What we build it on

**Sources** — Shopify · Amazon Seller Central · WooCommerce · HubSpot · Salesforce · Pipedrive · Stripe · QuickBooks · Xero · NetSuite · Zoho · Google Ads · Meta Ads · Google Analytics 4 · Postgres · MySQL · MongoDB · SFTP and CSV drops · anything with an API, and several things without one

**Ingestion** — Airbyte · Meltano · Singer taps · Debezium for change data capture · custom Python connectors where nothing else fits

**Warehouse** — Postgres · BigQuery · ClickHouse · Snowflake · DuckDB for smaller analytical workloads that don't justify a cloud warehouse

**Orchestration** — Dagster · Airflow · Prefect · n8n where the graph is simple enough that a full scheduler is overhead

**Quality and observability** — freshness and volume checks · schema contracts · dbt tests where dbt is in play · Slack and PagerDuty alerting · run-history dashboards

**Consumption** — Metabase · Superset · Looker Studio · Power BI · direct SQL access · reverse ETL back into your operational tools

> We hold no reseller relationship with any vendor on this list and take no commission on any of it. That's unusual in this category and it's the reason we can tell you a $50/month Postgres instance is enough.

---

## SECTION 8 — The decisions people get stuck on

> **UI/UX:** Three compact comparison blocks, light cards, each with a short verdict line. Plainer treatment than Section 5 — this section exists to capture comparison queries and to be quotable by LLMs, so keep the answers self-contained and don't require the surrounding page for context. Mark up as `TechArticle` if the structure holds.

## ETL or ELT, warehouse or lake, one-off or ongoing

### ETL vs ELT

ETL transforms data before it lands. ELT lands it raw and transforms it inside the warehouse.

**Verdict: ELT, almost always, for the companies we work with.** Storage is cheap, warehouse compute is fast, and keeping the raw layer means a transformation bug is a re-run rather than a re-extraction. ETL still wins in two cases: when you're legally not allowed to land the raw data, and when the source volume is large enough that filtering before load saves real money. Both are rarer than the internet suggests.

### Data warehouse vs data lake

A warehouse stores structured, modelled data for querying. A lake stores raw files of any shape, cheaply, for processing later.

**Verdict: you almost certainly want a warehouse.** Lakes solve a problem — unstructured data at volume, machine-learning workloads on raw files — that most mid-market companies don't have. A lake bought without that problem becomes a folder of files nobody queries. If your data is rows and columns from business systems, a warehouse is the answer and the lakehouse conversation is a distraction.

### One-off migration vs ongoing pipeline

Moving history once and syncing continuously are different projects, and quoting them together is how scopes get confused.

**Verdict: separate them, and do the migration second.** Build the ongoing pipeline first, confirm it's landing correctly, then backfill history through the same code path. Migrating first with a separate script means you've written the logic twice and reconciled it never. Migration is priced as its own fixed scope — see Section 12.

---

## SECTION 9 — How the work runs

> **UI/UX — horizontal phase band with the spec column beside it**, per Template C. **Five phases.** Mark phase two visually: the first source lands in week one, and that's the claim the page is making about pace. Do not reuse Template A's vertical timeline here.

## Five phases, first source landing in week one

**01 — Source audit**
We list every system, what's in it, how it can be reached, and what it costs to extract. This is also where we tell you which sources aren't worth pulling yet. Half a day to two days, and you get the list whether or not you go ahead.

**02 — First source, end to end**
One source, ingested, landed, modelled, and visible — with monitoring attached. Usually inside week one. It proves the architecture and gives you something to look at before most of the budget is committed.

**03 — Remaining sources**
The rest, in the order you'll actually use them rather than easiest-first. Each one gets freshness checks, schema contracts, and a documented failure mode as it lands.

**04 — History and reconciliation**
Backfill through the same code path as the live pipeline, then reconcile against the source system row by row. You get the reconciliation output, not a summary of it.

**05 — Handover, and then we run it**
Repository, infrastructure as code, runbook, and a walkthrough with whoever will own it on your side. Then the monthly plan starts and the alerts route to us.

---

## SECTION 10 — What ongoing actually means

> **UI/UX:** Six-item grid, 3×2 at desktop, matching C-1 and C-2's credibility grid. Small icon, bold label, two to three lines, consistent stroke weight. **This section is the commercial centre of the page** — the recurring plan is the business model and pipelines are the service where it's easiest to justify. Give it room.

## The monthly plan, stated specifically

Most vendors say "ongoing support" and mean "email us." Here's what ours covers.

**We get the alert first**
Freshness and failure alerts route to us, not to your team. You hear about a broken load from us alongside what we've already done about it.

**Source changes handled**
Vendors change APIs. When one does, adapting the connector is inside the plan, not a change order.

**Backfills on request**
A source was down, a field was wrong, a correction landed late. Re-running a window is routine work and it's covered.

**Cost review**
Warehouse and connector spend reviewed monthly. If a table is costing more than it's worth, we'll say so — including when the saving comes out of our own scope.

**Small additions included**
A new field, a new table, a tweak to a transformation. Anything under the agreed threshold gets done without a quote.

**A named engineer**
The same person, who knows your stack. Not a queue and not a rotating ticket.

---

## SECTION 11 — Is this the page you need?

> **UI/UX:** Compact linked cards, three-up then three-up. Plain treatment. **Omit or disable any card whose page isn't live yet**, and ship the rest as plain text rather than live 404s.

## Data work comes in six shapes. This is one of them.

- **You need data out of several systems and into one place, reliably** — you're on the right page.
- **You need to agree what the numbers mean and let people explore them** — [business intelligence](/services/business-intelligence).
- **You need one screen answering a known set of questions** — [custom dashboards](/services/custom-dashboards).
- **You need something to happen automatically when data changes** — [workflow automation](/services/workflow-automation).
- **You need the stock number to be right across channels** — [inventory management](/services/inventory-management).
- **You need a single financial and operational system of record** — [ERP systems](/services/erp-systems).

If you're not sure, the discovery call sorts it in twenty minutes and we'd rather route you correctly than sell you the wrong scope.

---

## SECTION 12 — Engagement models

> **UI/UX — engagement-model table**, per Template C rules, three columns with the middle emphasised. **Publish without figures if prices aren't confirmed.** The structure differentiates on its own and a range you can't honour is worse than no range. Add `Offer` schema only once real numbers are in.

## How engagements are structured

### Pipeline build — from $[X]
Fixed scope, fixed price. Source audit, warehouse setup, agreed source list, monitoring, documentation, handover. Typical builds run [X] to [Y] weeks. Migration and backfill quoted separately.

### Migration project — from $[Y]
A defined move: legacy warehouse to new, or history loaded into an existing one. Reconciliation output and a documented cutover included. Priced on source count and history depth, not on hours.

### Data partner — from $[Z]/month
Monitoring, alerting, source-change handling, backfills, cost review, and small additions, with a named engineer. Available on systems we built and on systems we didn't — the second case starts with a two-week audit before we take the pager.

---

## SECTION 13 — Case studies

> **UI/UX:** Two cards, shared treatment. **Lead with Unified Accounting** — this is the page that case study actually describes, and it's the strongest evidence on any data page you have.

## What we've built

**[Unified Accounting]** — `/case-studies/unified-accounting`
[Frame this around the pipeline: how many sources, what shape the data arrived in, what runs on a schedule now, and what breaks less. If reconciliation or a migration was involved, say so — it's the most credible detail available to you.]

**[PartsFlow]** — `/case-studies/partsflow`
[Same treatment, focused on the data layer rather than the application layer.]

*Note before publishing: neither of these was scoped and sold as a warehouse project, and the copy shouldn't imply otherwise. Describe what was actually built. A precise, modest pipeline story is more convincing to a technical evaluator than an inflated one, and this buyer reads case studies more sceptically than any other buyer on the site.*

---

## SECTION 14 — FAQ

> **UI/UX:** Accordion, first item open, matching the rest of the set. Add `FAQPage` schema. These are the exact questions LLMs surface for pipeline and warehouse vetting queries, and it remains the cheapest GEO win available.

## Common questions

**How long does a pipeline build take?**
The first source is usually landing inside week one. A full build across [X] sources typically runs [X] to [Y] weeks, depending on how many sources have no existing connector and how much history needs backfilling. You get the fixed price and the date before any code is written.

**Do we have to move off Fivetran or Airbyte Cloud?**
No, and often you shouldn't. Managed connectors are good value for standard sources at moderate volume. We commonly build custom pipelines for the two or three sources nothing supports and leave the rest exactly where they are.

**Which warehouse should we use?**
Whichever is cheapest for your volume — frequently Postgres, which handles far more analytical load than people expect. BigQuery or ClickHouse when volume justifies it, Snowflake if you already own it. We take no reseller commission on any of them, so the recommendation costs us nothing either way.

**What happens when a source API changes?**
Schema contracts catch it. Unexpected changes quarantine the affected rows and alert rather than failing silently or writing bad data. Adapting the connector is covered inside the monthly plan.

**Who owns the pipelines and the infrastructure?**
You do. Code, infrastructure-as-code, credentials, and documentation transfer on final payment, and we hand over the runbook whether or not you keep us on a monthly plan. Everything runs on your cloud account by default.

**Can you take over pipelines someone else built?**
Yes, and it's a meaningful share of our work. It starts with a two-week audit: what exists, what's undocumented, what's actually broken. We'll tell you honestly whether to keep it or rebuild it, and keeping it is the more common answer.

**Do you handle real-time data?**
Where it's genuinely needed — change data capture off a production database, event streams into the warehouse. But most requests for real-time turn out to need fifteen-minute freshness, which is dramatically cheaper to build and run. We'll ask what decision depends on the latency before quoting for it.

**What about data privacy and compliance?**
NDA before discovery, data stays in the region you specify, credentials in a managed secret store, and access scoped per-source. If you have GDPR obligations or handle payment or health data, raise it on the first call so it shapes the architecture rather than getting bolted on.

---

## SECTION 15 — Closing CTA

> **UI/UX — second light band on the dark base.** Headline, one supporting line, single primary button. No competing secondary link, no email capture. Same treatment as every other page in the set so all of them read as siblings.

## Tell us where your data currently lives.

Book a 30-minute call. Bring your source list. We'll tell you what's worth owning, what to leave alone, and give you a fixed price for the part that's worth building.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from C-1, C-2, C-3

Four Template C pages is where a tier starts to blur. The distinguishing elements here, in order of how much work they're doing:

1. **The hero is a left-to-right flow diagram**, not a layer stack or an object model. Different shape, immediately.
2. **Section 3's cost crossover band** is a full-width heavy element that no other C page has.
3. **The process band marks week one** with a visual marker on phase two.
4. **Section 7 is a six-tab stack** where C-1 and C-2 use three or four. The source list is deliberately long — that's the SEO surface.

Everything else — dark base, spec panel, phase band, engagement table — stays identical on purpose.

## The one thing that must not drift

**This page stops at the modelled warehouse.** The moment a future edit adds a paragraph about metric definitions, semantic layers, or which BI tool to choose, the boundary with the BI page collapses and both pages get worse. One link, one sentence, hand off. Put this in the CMS notes for whoever edits next.

## Accessibility

- The hero diagram needs a real text alternative describing the flow, not `alt="data pipeline diagram"`.
- Tabs in Section 7 need proper `role="tablist"` semantics and keyboard navigation.
- Light-on-dark body copy is the accessibility risk of the whole Template C tier — check contrast at the actual rendered weight, not at the design-file weight. Thin light text on dark backgrounds fails more often than it passes.
- The animated flow lines need to respect `prefers-reduced-motion`.

## Performance

- No client-side charting library for the crossover chart. Inline SVG or nothing.
- Source and tool logos in Section 7 are the page's weight risk — there are roughly thirty. Lazy-load below the fold, use SVG where available, and don't ship any of them above 8KB.

## Site-level issues this page inherits

Carried forward from the earlier docs, still worth listing because they affect this page:

1. **The duplicated logo marquee** on service pages renders the same eight clients twice, with a stray `navdrin` text node at the end of each loop and no logo attached.
2. **The footer Services column** links all three items to homepage anchors rather than to the service pages that now exist. Fix before driving any traffic here.
3. **Brand mark still varies** across the site between "Spaciva AI", "Spaciva Solutions", and the stylised lockup. Pick one.
4. **Case Studies in the main nav** links directly to a single case study rather than to an index page.

---

# VALUES THE CLIENT MUST SUPPLY

- [ ] Pipeline build price floor `$[X]` and typical week range
- [ ] Migration project price floor `$[Y]`
- [ ] Monthly data partner price `$[Z]`
- [ ] Typical source count for a standard build
- [ ] Unified Accounting: number of sources, systems involved, what runs on a schedule now
- [ ] PartsFlow: the data-layer detail, described accurately
- [ ] Confirmation that Dagster/Airflow/Airbyte/Debezium are stacks you'll genuinely stand behind — **cut any tool from Section 7 you haven't shipped with.** A technical buyer will ask, and a padded stack list is the fastest way to lose one.
- [ ] Sign-off on removing `data warehouse development services` from the BI page
