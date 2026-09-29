# Spaciva — ERP Systems Services Page

**URL:** `/services/erp-systems`
**Layout:** **Template A — Narrative / Credibility**, variant **A-3**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — READ THIS BEFORE ANYTHING ELSE

## This page needs a scope guardrail more than it needs copy

ERP is the single most dangerous category on this site to write loosely, for two reasons.

**One: it is the fastest way to undo the repositioning.** The homepage now says *"We're not a full-service agency. We do three things, in this order."* A page that implies you implement enterprise ERP puts you back in the generalist bucket the entire rewrite was designed to escape — next to firms with two hundred consultants and a SAP partnership. Worse, it invites RFPs you don't want, from buyers who will disqualify you in round one and cost you a week of scoping to get there.

**Two: ERP buyers are the most burned audience in B2B software.** Failed ERP programmes are the category's defining folklore — public lawsuits, written-off budgets, businesses that couldn't ship for a quarter. Any hint of overclaiming reads as a warning sign to exactly the buyer you want.

So this page **narrows deliberately, in the first viewport**, and the narrowing is the pitch.

### What this page sells

1. **ERP integration** — connecting the ERP you already run to everything else in the business.
2. **ERP extension** — the screens, automations, and reports your ERP can't give you, built alongside it rather than as risky core customisation.
3. **Lightweight custom ERP** — for SMBs who have outgrown spreadsheets and QuickBooks but are genuinely not NetSuite or SAP candidates yet.

### What this page explicitly declines

Full enterprise ERP implementation, SAP or Oracle or Dynamics rollouts, ERP selection consulting as a standalone engagement, and modification of ERP core code. **Say this on the page, in a section of its own.** Declining work in public is the strongest credibility signal available to a small team in a category dominated by large ones, and it is the same move that already works in your Zapier FAQ and your document-processing build-or-buy section.

## Why Template A, and why this relieves a real problem

Template C was reserved for Custom Software, Internal Tools, and CRM Development. Custom Dashboards took it (C-1), Internal Business Tools took it (C-2), CRM Development is queued (C-3). **A fourth C page would break the system.**

ERP belongs on A regardless. Template A is assigned when the buyer's hesitation is *"will this actually work?"* — and no category on earth carries more of that hesitation than ERP. Template A's persuasive engine is a "why these projects fail" section that earns engineering credibility before asking for anything. That is precisely the section this page needs to be built around.

### Template A variants — keep these distinct

| | **A-1 — AI Agent Development** | **A-2 — RAG Chatbots** | **A-3 — ERP Systems** *(this page)* |
|---|---|---|---|
| Failure section | Four causes agents stop working | Four reasons chatbots get switched off | **Five failure patterns, each with the specific control that prevents it** |
| Signature second block | "Real agent vs chatbot" — six requirements | "What's underneath a chatbot you can trust" — six components | **"What we don't do" — the public scope boundary** |
| Hero | Two-column, screenshot right | Two-column | **Two-column, integration map right** |
| Process | Vertical timeline, 6 steps | Vertical timeline, 6 steps | **Vertical timeline, 5 steps, phased-rollout framing** |

Shared with A-1 and A-2: light base with two dark bands only (mid-page CTA and closing CTA), vertical timeline, accordion FAQ, card grid. Keep all of it — that's what makes them siblings.

---

# PART 1 — SEO SPEC

## Primary keyword

`ERP integration services` — **not** `ERP development` or `ERP implementation`.

This choice is the whole SEO strategy for the page. `ERP implementation` and `ERP software development` are held by SAP, Oracle, Microsoft, NetSuite, and the global SIs, with domain authority you will not out-rank and, more to the point, with search intent you can't serve. Ranking for those terms would deliver unqualified enterprise traffic.

`ERP integration services` is a different market: mid-market companies who already own an ERP and need it connected to a store, a CRM, a warehouse, or a bank feed. Lower volume, dramatically lower competition, and it is work you can actually deliver — you have two live case studies that are essentially this. **You've already done the hardest part of proving it; the page just has to claim it.**

## Ranking targets

| Keyword | Note |
|---|---|
| `ERP integration services` | Primary. Commercial intent, deliverable work |
| `ERP API integration` | Technical variant, very low competition |
| `Shopify ERP integration` | High intent, matches your DTC segment exactly |
| `NetSuite integration partner` / `Odoo integration services` | Tool-name + service = bottom-funnel, barely contested |
| `Zoho ERP customization` | Strong overlap with your existing client base |
| `custom ERP for small business` | The lightweight-build offer. Real volume, weak SERP |
| `ERP customization services` | Broad commercial variant |
| `connect ERP to CRM` | Problem-phrased, converts well |
| `ERP implementation failure` | Informational, high-authority, feeds the failure section — **target this with the section, not the page** |
| `ERP vs custom software` | Comparison intent, answerable honestly |

**The undervalued angle is tool-name + integration.** `Odoo integration services`, `NetSuite integration partner`, `Zoho ERP customization` are searched by people with budget and a specific problem, and almost nobody competes for them at your size. Name every ERP explicitly on this page as real text, not as logo alt attributes.

**Do not chase** `ERP software`, `best ERP system`, or `ERP implementation services`. Wrong intent, unwinnable SERP, and traffic you'd rather not have.

## Meta

**Title (57 chars):**
```
ERP Integration & Custom ERP Development Services | Spaciva AI
```
*If the CMS enforces a hard 60-char limit:*
```
ERP Integration & Customization Services | Spaciva AI
```

**Description (155 chars):**
```
We connect, extend, and build ERP systems for mid-market teams — integrations,
custom modules, and lightweight builds. Fixed price. We won't sell you a rollout.
```

**H1:** `Most ERP problems aren't ERP problems`
**URL:** `/services/erp-systems` — keeps the plural-noun slug pattern. Do not use `/services/erp` (too thin for the term) or `/services/erp-implementation` (claims work you're declining).

## Positioning against neighbouring pages

Six pages now cluster around "systems that hold business data." State the distinction in Section 10 and mirror it on each sibling:

> **ERP systems** — the system of record for finance, inventory, and operations, and everything that has to connect to it.
> **CRM development** — the system of record for customers and pipeline.
> **Internal business tools** — a place your team does a specific piece of work that no system of record covers.
> **Custom dashboards** — read-only visibility across all of the above.
> **Workflow automation** — something happens without anyone opening anything.
> **Document & invoice processing** — the layer that gets paper into the ERP without retyping.

The last one is the most commercially useful link on the page: document processing is the highest-converting adjacent offer for an ERP buyer, and it's already live.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the engagement-model table

**Do not** add `Product` or `SoftwareApplication` schema. You are not selling an ERP product, and mismatched schema on this term risks surfacing you against actual ERP vendors, which is the one comparison you lose.

## Internal linking

- Section 4 → `/services/document-invoice-processing` *(live)*
- Section 4 → `/services/workflow-automation` *(live)*
- Section 6 → `/services/ai-agent-development` *(live)*
- Section 10 → `/services/internal-business-tools` — **not live yet**
- Section 10 → `/services/custom-dashboards` — **not live yet**
- Section 10 → `/services/crm-development` — **not live yet**
- Case studies → `/case-studies/unified-accounting` and `/case-studies/partsflow` *(both live)*

Ship all three unbuilt links disabled or as plain text. `/about` is already publishing a live 404 from the footer of every page on the site; do not add more.

**Note:** `/case-studies/unified-accounting` is the single most relevant proof asset on the entire site for this page. It should appear twice — once in the hero proof area and once in the case study block.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template A opening, A-3 variant.** Light base. Two columns at ≥1024px: copy left, **integration map right**.
>
> The map is a simple hub-and-spoke: an ERP box at the centre, six labelled spokes running out to a store, a CRM, a bank feed, a warehouse system, a reporting layer, and a document intake. A-1 and A-2 used a product screenshot here; this uses a diagram, which is the visual argument that you sell the connections rather than the ERP.
>
> Inline SVG with real `<text>` nodes. Below 1024px it moves under the copy and stacks; never let it shrink to unreadable type.

**Eyebrow:** ERP SYSTEMS

# Most ERP problems aren't ERP problems

They're integration problems. The ERP holds the data correctly and nothing else can reach it, so someone re-keys orders from the store, exports a report to build a different report, and reconciles two systems by hand every month. We fix that layer — and where an ERP genuinely needs extending or building, we do that too, at a scope we'll actually finish.

**[Book a 30-minute call]** **[See what we do and don't do →]**

**Proof line:**
```
Integration · Extension · Lightweight custom builds — we don't sell enterprise rollouts
```

**Hero map content:**

| Centre | Spokes |
|---|---|
| **Your ERP** | E-commerce store · CRM · Bank and payments · Warehouse and 3PL · Reporting and BI · Document intake |

*Small caption under the map:* We've connected accounting and ERP systems across [QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo](/case-studies/unified-accounting).

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component, unchanged from every other service page — greyscale to colour on hover, client names as real text beneath each logo. Single row. The live service pages currently render the same eight logos twice through a duplicated marquee loop; fix that globally rather than reproducing it.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — What we don't do

> **UI/UX — the signature block of A-3, and it goes high on purpose.** Two columns: "What we do" left, "What we don't" right, given equal visual weight. Do not style the right column as a disclaimer, do not shrink the type, do not put it in a muted box. The point is that it reads as a deliberate position, not a limitation being confessed.
>
> Placing this above the offers is unusual and correct. An ERP buyer's first question is "are these people the right size for this?" — answer it before pitching anything.

## Let's be clear about scope before you read any further

ERP is a category where small teams routinely overpromise and mid-market buyers routinely get burned. So here's the boundary, upfront.

### What we do

**Integrate the ERP you already run** with your store, CRM, bank feeds, warehouse, reporting, and document intake — so data moves without anyone retyping it.

**Extend it** with the screens, workflows, and reports it can't give you, built alongside the ERP rather than inside its core.

**Build lightweight ERP** for teams who've outgrown spreadsheets and basic accounting software but are genuinely not ready for NetSuite — inventory, orders, purchasing, and costing in one system that fits how you actually work.

**Take over stalled integration work** from a previous vendor, audit it, and tell you honestly whether to salvage or restart.

### What we don't do

**Enterprise ERP implementation.** SAP, Oracle, or Dynamics rollouts are multi-year programmes needing a large team and a partner certification. That isn't us, and a firm our size telling you otherwise should worry you.

**ERP selection consulting on its own.** We'll give you an honest opinion on the call for free. We won't bill you for a three-month evaluation, and we have no reseller commission steering the answer.

**Modification of ERP core code.** It's the most common way an ERP becomes unupgradeable. We build alongside through supported APIs and extension points — see Section 6.

**Anything we can't finish.** If your requirement genuinely needs a Tier 1 ERP and a large implementation partner, we'll say so on the first call and point you at the right kind of firm. We'd rather lose the project than take one we'd deliver badly.

> **A vendor who has never told you no has never told you the truth about scope.**

---

## SECTION 4 — What we build

> **UI/UX:** Three-card grid, matching A-1's "four agents" treatment. Card title, one-line "best for", body. This is the offer block and it sits *after* the scope boundary deliberately.

**Eyebrow:** WHAT WE BUILD

## Three ways we work on ERP

### ERP integration
Your ERP connected to the systems around it — store, CRM, bank feed, warehouse or 3PL, payment processor, reporting layer — with mapping, validation, error handling, and alerting that tells us it broke before it tells you. Bidirectional where it needs to be, one-way where that's safer.

*Best for: teams whose ERP is fine and whose problem is that nothing else can reach it. This is most enquiries.*

### ERP extension and custom modules
The things your ERP won't do: an approval flow that matches your actual sign-off chain, a costing rule specific to your business, a screen your warehouse team can use on a phone, a report the built-in reporting can't express. Built alongside the ERP through supported extension points, so upgrades don't break it.

*Best for: teams told "the ERP can't do that" about something the business genuinely needs.*

### Lightweight custom ERP
Inventory, orders, purchasing, costing, and basic financial reporting in one system, shaped around your process. For businesses running on spreadsheets plus QuickBooks or Xero, where a full ERP would cost more in licences and implementation than the problem is worth.

*Best for: SMBs at the point where spreadsheets have broken but NetSuite is two sizes too big.*

**Below the grid, smaller:**
> Two things frequently come with an ERP project and are worth separating in the quote: getting supplier documents into the system without retyping is [document and invoice processing](/services/document-invoice-processing), and moving data between systems on a schedule is [workflow automation](/services/workflow-automation). Both are cheaper as their own scope than as a line item inside an ERP build, and we'll price them separately so you can see what you're paying for.

---

## SECTION 5 — Why ERP projects fail

> **UI/UX — Template A's persuasive engine, and the centrepiece of this page.** Full styled treatment: five stacked blocks, generous spacing, each with a heading, the failure, and **a bolded closing line naming the specific control that prevents it**. A-1 and A-2 used four causes; this uses five, each ending on a control — that pairing is what makes A-3 distinct.
>
> This section should be the longest scroll on the page. In this category, credibility is the entire sale.

## Five ways ERP projects go wrong, and what actually prevents each one

Everyone in this category has heard the horror stories. They're not mysterious — the failure patterns repeat, and each has a specific, unglamorous control.

### The business changed itself to fit the software

The system arrives with an opinion about how you should operate, and rather than being told which of your practices are genuinely differentiating and which are just habit, everything gets bent to fit the tool. Six months later people are running the real process in spreadsheets alongside the ERP, which is the worst of both.

**The control:** map the process before the software, and mark each step as *keep* (it's why you win), *drop* (it only exists because of an old tool), or *conform* (the standard way is fine). We do that in the first phase and you get the map whether or not you hire us.

### Everything went live at once

The big-bang cutover is the classic. Every module, every department, one weekend. When something goes wrong — and something always goes wrong — there's nothing to fall back to and the business can't ship.

**The control:** phased rollout, one process at a time, with the old system running in parallel until the new one has been reconciled against it. Slower on paper, and the only version that doesn't risk a quarter.

### The data was migrated before it was cleaned

Twelve years of duplicate customers, discontinued SKUs, half-filled fields, and three spellings of the same supplier get carried straight across. Now nobody trusts the new system either, and the migration gets blamed for problems that predate it by a decade.

**The control:** audit and cleanse before migration, with the rules agreed in writing, and validate the migrated data against the source before anything is switched off. This is dull and it is the difference between adoption and rejection.

### The core was customised

The ERP couldn't do something, so someone modified its core code. It worked. Then the vendor shipped an upgrade, the customisation broke, and the upgrade got postponed — permanently. Now you're running an unsupported version and every future change costs more.

**The control:** build alongside, never inside. Supported APIs, extension frameworks, and separate services that the ERP doesn't know about. If a requirement genuinely can't be met that way, that's a scope conversation, not a reason to touch the core.

### Nobody owned it after go-live

The implementation partner finished and left. The integrations weren't monitored, an API changed, a sync failed silently, and three weeks of orders didn't reach the warehouse. There was no one to call and no documentation to read.

**The control:** monitoring and alerting on every integration from day one, plus a monthly plan with a named engineer who knows your setup. This is how every engagement here is scoped — not as an upsell at handover.

> **None of these five are technology failures. Four of them are decisions made before any code was written, and the fifth is a decision made after it shipped.**

*Note for the client: this section is written without statistics on purpose. There are widely circulated ERP failure-rate figures, but they come from vendor and consultancy surveys with inconsistent definitions of "failure." **If you want a number here, source one you can cite by name and link it.** An uncited percentage in this category reads as marketing to exactly the buyer this section is written for.*

---

## SECTION 6 — Mid-page CTA

> **UI/UX — first of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button. Same position and treatment as A-1's mid-page CTA.

## Not sure whether you need integration, extension, or a new system?

That's usually the first thing we can settle. Book a call, describe what's breaking, and we'll tell you which of the three it is — including if the honest answer is that your ERP is fine and the problem is a process nobody's fixed.

**[Book a discovery call]**

---

## SECTION 7 — How we build integrations

> **UI/UX:** Six-item grid, 3×2 at desktop, matching A-1's "what separates a real agent" treatment and A-2's "what's underneath a chatbot you can trust." Small icon, bold label, two to three lines of body. Consistent icon stroke weight throughout.
>
> This is the technical-credibility block that A-1 and A-2 both carry in this position. Keep it.

## What a connection you can trust actually needs

An integration that works on a good day is a demo. Six things separate that from something your finance team can rely on at month-end.

### Field mapping agreed in writing
Every field, both directions, with the transformation rules named — currency, tax treatment, units, date handling, what happens to a field the other system doesn't have. Agreed before we build, so "it mapped the wrong thing" is a conversation that happens once.

### One source of truth per field
For each piece of data, exactly one system wins. Bidirectional syncs that let both sides be authoritative are how records start overwriting each other silently. We'll make you choose, field by field, and it's usually the most useful hour of the project.

### Idempotency and duplicate control
A retried message must not create a second order. Every record carries a stable identifier and every write checks before it inserts. This is the difference between a sync that recovers from a network blip and one that quietly doubles your revenue figure.

### Error queues, not silent failure
Anything that can't be processed goes to a visible queue with the reason attached and the original payload retained, so someone can fix and reprocess it. Nothing is ever dropped, and nothing fails into a log file no one reads.

### Rate limits and volume handled properly
ERP and accounting APIs throttle aggressively, and batch operations at month-end look nothing like a Tuesday afternoon. Backoff, batching, and queueing are designed in, not discovered in production during your busiest week.

### Reconciliation you can run
A report that compares both systems on demand and shows exactly what doesn't agree. Trust in an integration comes from being able to check it, not from being told it works.

**Below the grid, smaller:**
> Where a step genuinely needs judgement — reading a non-standard supplier document, deciding which of several paths applies — that's an [AI agent](/services/ai-agent-development), and it's usually one step inside an otherwise deterministic integration. Most people overestimate how many of their steps need one.

---

## SECTION 8 — How the work runs

> **UI/UX:** Vertical timeline with a connecting rule, matching A-1 and A-2. **Five steps, not six** — and the framing throughout is phased rollout, which is the A-3 distinction. Stacked cards on mobile. Numerals large and light-weight so they read as structure.

## Five phases, phased on purpose

**01 — Process and systems audit** · *3–5 days*
We map how the process runs today, what each system holds, what's genuinely authoritative, and where the manual bridges are. Each step gets marked keep, drop, or conform. You get that written map whether or not you hire us — for a lot of teams it's the first time the process exists on paper.

**02 — Fixed scope and quote** · *2–3 days*
A written scope, a fixed price, and a delivery date before any code is written, with the phases explicitly separated so you can see what ships first and what waits. If scope moves, we re-quote in writing first.

**03 — Build and validate against real data** · *[X]–[Y] weeks*
Built in a sandbox against your actual records, not sample data, with field mapping and reconciliation reporting from the start. Written update every Friday plus a short Loom walkthrough of what moved.

**04 — Parallel run, then phase live** · *1–2 weeks per phase*
The new path runs alongside the existing one, and you compare the two before switching anything off. Then it goes live one process at a time — never everything at once. If a phase doesn't reconcile, it doesn't ship, and nothing about your business stops in the meantime.

**05 — Monitor, reconcile, extend** · *ongoing*
Every integration alerts on failure, so we know before you do. Monthly: reviewing error queues, re-running reconciliation, handling API changes from vendors who don't warn you, and extending as the business changes. A named engineer stays on it.

---

## SECTION 9 — Systems we work with

> **UI/UX:** Logo grid grouped by category with small labels, greyscale to colour on hover — matching the shared treatment. **Render every system name as real text alongside the logo, not as alt text alone.** This section is the primary keyword surface for the tool-name queries that are the page's best-value SEO target.

## The systems we connect and extend

### ERP and accounting
NetSuite · Odoo · SAP Business One · Microsoft Dynamics 365 Business Central · Sage · Zoho Books and Zoho Inventory · TallyPrime · QuickBooks · Xero · ERPNext

### E-commerce and marketplaces
Shopify · WooCommerce · Magento · Amazon · eBay

### CRM and sales
HubSpot · Salesforce · Pipedrive · Zoho CRM · Close

### Warehouse, logistics, and payments
3PL and WMS APIs · shipping carriers · Stripe · Razorpay · bank feeds

### Data and integration layer
Postgres · MySQL · BigQuery · n8n · custom Python and Node services · REST · GraphQL · SOAP · SFTP and file-based exchange where an API genuinely doesn't exist

**Below the grid, smaller:**
> Not listed? If it has an API, we can almost certainly connect it. Some older ERP and accounting software genuinely doesn't have one — in that case we'll tell you before you commit and propose a database-level or file-based exchange rather than promising an integration that doesn't exist.

---

## SECTION 10 — ERP, or something else?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain treatment — routing block, not persuasion. **Omit or disable the three cards whose pages aren't live yet.**

## Is ERP work actually what you need?

**ERP systems** — the system of record for finance, inventory, and operations, and everything that has to connect to it. *(This page.)*

**[CRM development](/services/crm-development)** — the system of record for customers, deals, and pipeline. Different subject, same engineering discipline.

**[Internal business tools](/services/internal-business-tools)** — a place your team does one specific piece of work that no system of record covers. Frequently the right answer when the complaint is "the ERP can't do X."

**[Custom dashboards](/services/custom-dashboards)** — read-only visibility across the ERP and everything around it, without touching the ERP itself.

**[Workflow automation](/services/workflow-automation)** — something happens without anyone opening anything. Plenty of "ERP integration" enquiries are this, at a fraction of the cost.

**[Document & invoice processing](/services/document-invoice-processing)** — getting supplier documents into the ERP without anyone retyping them. The most common thing an ERP buyer actually needs next.

> **Honest answer:** a meaningful share of ERP enquiries we take turn out to be a workflow-automation project and a document-processing project standing next to each other. That combination is cheaper, faster, and lower-risk than anything with "ERP" in the title, and we'd rather say so in week one than month four.

---

## SECTION 11 — Engagement models

> **UI/UX:** Three columns, middle emphasised as the common choice. If real prices aren't confirmed, **publish the section without figures** — the engagement structure is itself differentiating in a category known for open-ended billing. Never publish a range you can't honour.

## How engagements are structured

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders. In a category famous for open-ended budgets, this is the point.

### Single integration — from $[X]
One connection built properly: mapping, validation, error queues, reconciliation reporting, monitoring, and the first month of support.
*Good for: proving the approach on the connection that's costing you the most time.*

### Integration or extension package — from $[Y]
Several connections or custom modules scoped together, phased so each goes live and is reconciled before the next begins.
*Good for: most teams — this is where the manual bridges actually disappear.*

### Lightweight custom ERP — from $[Z]
Inventory, orders, purchasing, and costing built as one system, migrated from your current spreadsheets and accounting software, phased over [N] weeks.
*Good for: SMBs where spreadsheets have broken and a Tier 1 ERP is two sizes too big.*

**Beneath the table:**
> Every build includes monitoring for the first month. After that it's $[M]/month for monitoring, reconciliation review, vendor API changes, and small feature work — and you can stop any time. You keep the source code, the integration configuration, and the documentation either way.

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards, matching A-1's treatment exactly. Metric, client, one paragraph, link. Both targets are live. **Unified Accounting leads** — it is the single most relevant proof asset on the site for this page.

## What we've built

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo. Six ledgers, one pipeline.

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.

*Note for the client: Unified Accounting is genuinely an ERP-integration case study that is currently filed as an accounting one. **Reframing it — same facts, ERP-integration language, named systems in the title — is the highest-return content task available on this page**, and it would let this page claim its primary keyword with real proof rather than assertion.*

---

## SECTION 13 — FAQ

> **UI/UX:** Accordion, first item open — matching A-1 and A-2. Add `FAQPage` schema. ERP questions are heavily surfaced by LLMs and this is the cheapest GEO win on the page.

## Common questions

**Do you implement SAP, Oracle, or Dynamics?**
No. Full enterprise ERP rollouts need a large team and a partner certification, and a firm our size claiming otherwise should worry you. What we do is connect and extend the ERP you already run — including Business Central and SAP Business One — and build lightweight custom systems for teams who aren't Tier 1 candidates. If your requirement genuinely needs a large implementation partner, we'll tell you on the first call.

**Can you connect our ERP to Shopify?**
Yes, and it's one of the most common projects we take. Orders, inventory levels, fulfilment status, customers, and refunds, with the direction of truth agreed per field so the two systems can't overwrite each other. The same applies to WooCommerce, Magento, Amazon, and eBay.

**How long does an ERP integration take?**
A single well-defined connection is typically [X]–[Y] weeks including validation and a parallel run. Multi-system packages are phased, with each phase going live and reconciled before the next starts. The biggest variable is how clean your data is and whether both systems have usable APIs — not how many records you have.

**What if our ERP doesn't have an API?**
Some older ERP and accounting software genuinely doesn't. We'll tell you before you commit and propose a database-level or file-based exchange instead of promising an integration that doesn't exist. It's less elegant and it works — but you should hear it upfront, not in week three.

**Will you customise our ERP's core code?**
No, and you shouldn't let anyone else either. Core modifications break on the next vendor upgrade, which is how businesses end up stuck on unsupported versions. We build alongside through supported APIs and extension frameworks, so upgrades stay possible.

**What happens to our data during migration?**
It's audited and cleansed before it moves, with the rules agreed in writing, then validated against the source before anything is switched off. Your existing system keeps running in parallel until the new one reconciles. We don't do cutovers that depend on everything being right first time.

**Do we have to go live all at once?**
No, and we'd argue against it. Phased rollout, one process at a time, with the old path available until the new one has been reconciled. Big-bang cutovers are the single most cited cause of ERP disasters and the risk is entirely avoidable.

**What happens when a vendor changes their API?**
They will, and usually without warning you. Every integration ships with alerting so we find out before you do, and fixes to anything we built are covered by the monthly plan. Unmonitored integrations failing silently is the most common way an ERP project unravels after go-live.

**Can you take over an ERP integration someone else started?**
Yes, regularly. We'll audit what exists and tell you honestly whether it's worth salvaging or faster to rebuild, with a fixed price for either path. Sometimes the answer is salvage — a sound integration with no monitoring and no documentation is a much smaller job than it looks.

**Should we build a custom ERP or buy one?**
Buy, in most cases. Off-the-shelf ERP encodes decades of accounting and inventory practice you don't want to re-derive. A lightweight custom build makes sense in a narrow band: you've outgrown spreadsheets and basic accounting software, your process has genuine specificity a standard system fights, and licence-plus-implementation cost for a Tier 1 ERP exceeds what the problem is worth. We'll tell you honestly which side you're on, and we have no reseller commission riding on the answer.

**Who owns the code?**
You do. Source code, integration configuration, mapping documentation, and deployment pipelines transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts.

**How do you work with clients abroad?**
We're in Ahmedabad, India, and stay available for video calls in your US Eastern or UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved.

---

## SECTION 14 — Closing CTA

> **UI/UX — second of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button, no competing secondary link and no email capture. Same treatment as A-1 and A-2 so the three read as siblings.

## Tell us what your team is reconciling by hand.

Book a 30-minute call. We'll map where the data actually lives, tell you whether this is an integration, an extension, or a new system — and if it needs a firm bigger than us, we'll tell you that too.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from A-1 and A-2

| Element | A-1 (AI Agent) | A-2 (RAG Chatbot) | **A-3 (this page)** |
|---|---|---|---|
| Hero visual | Screenshot | Screenshot | **Hub-and-spoke integration map** |
| Block above the offers | None — offers lead | None — offers lead | **"What we don't do" scope boundary** |
| Failure section | 4 causes | 4 causes | **5 patterns, each ending on a named control** |
| Process | Vertical timeline, 6 steps | Vertical timeline, 6 steps | **Vertical timeline, 5 steps, phased-rollout framing** |
| Commercials | Hero line + FAQ | Hero line + FAQ | **Engagement-model table** |
| Case studies | Two cards | None | **Two cards, Unified Accounting leading** |

Shared: light base, two dark bands only, six-item technical credibility grid, accordion FAQ, card-grid offers. Six differences on one chassis.

## Accessibility

- The hero integration map needs `role="img"` with an `aria-label` naming the centre and all six spokes, plus real `<text>` nodes rather than paths.
- The "what we do / what we don't" columns must be equal in the DOM and in visual weight — don't let a screen reader encounter the second column as an afterthought, and don't let CSS visually demote it.
- Failure-section controls are bolded for emphasis; ensure the emphasis is `<strong>`, carrying semantic weight rather than styled `<span>`s.
- Accordion FAQ needs correct `aria-expanded` and keyboard operation, matching A-1's implementation.
- Two dark bands only — check contrast on both; ERP buyers skew older and this page will be read on worse screens than your other traffic.

## Performance

- Hero map as inline SVG. Crawlable, sharp, no extra request.
- Section 9's logo grid is the heaviest block: use a sprite or inline SVG rather than ~30 individual image requests, and keep the text names in the DOM regardless of whether logos load.
- The trust strip's duplicated marquee loop should be fixed globally before this page ships.

## Site-level issues this page depends on

Unchanged, and now at the point where they cost more than new pages gain.

1. **`/about` still 404s and is still linked from the footer of every page.** For an ERP buyer specifically — the most vendor-risk-averse audience on the site — a broken About link is disqualifying. Fix this before publishing another page.
2. **There is still no `/services` index.** This would be the eighth service page reachable only through in-body cross-links. Build the index or a nav dropdown first.
3. **`/contact` still carries the old generalist positioning** ("Custom AI, CRM, LMS & Web Systems") and the all-caps "SPACIVA" mark — and it's where every CTA on this page points. Note the irony: this page's entire credibility play is a tight scope boundary, and the page it hands off to advertises a broad one.
4. **Brand mark is still inconsistent** — "Spaciva AI" in nav and footer, "SPACIVA" on contact.
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.** Every share previews as the homepage.

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `[X]`–`[Y]` weeks — single integration | Section 8, Section 11, FAQ | Must be a range you'll honour. Integration with a parallel run is longer than a workflow automation — don't copy that page's window across |
| `$[X]` — single integration | Section 11, FAQ | |
| `$[Y]` — integration/extension package | Section 11 | |
| `$[Z]` — lightweight custom ERP | Section 11 | |
| `$[M]` — monthly plan | Section 11 footnote | |
| `[N]` weeks — lightweight ERP phasing | Section 11 | |
| Client logos and names | Section 2 | |
| A cited ERP failure statistic | Section 5 | **Optional. Only if you can name and link the source** — an uncited percentage here does more harm than no percentage |
| Reframed Unified Accounting case study | Section 12, hero caption | Highest-return task attached to this page |

**Important — verify before publishing:** Section 9 lists ten ERP and accounting systems. **Confirm you have genuinely integrated with each one, or move the unverified ones to a separate line reading "Also connectable via API."** Unified Accounting covers QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo — six of the ten are already evidenced. The remaining four need either a real engagement behind them or a softer framing. In this category, one system you can't actually talk about in a technical call costs more than the four you can.

Nothing on this page presents an unverified figure as a client result. The two case study metrics are your existing published figures; if they haven't been checked against the underlying engagements recently, do that before they carry a page aimed at this audience.
