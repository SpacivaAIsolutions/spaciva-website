# Spaciva — Inventory Management Services Page

**URL:** `/services/inventory-management`
**Layout:** **Template B — Operational / Before-After**, variant **B-4**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — THE CANNIBALISATION PROBLEM COMES FIRST

## Inventory is already mentioned on three other pages

Before a word of copy: this page is the **fourth** place on the site where inventory appears.

- **ERP Systems** sells "lightweight custom ERP — inventory, orders, purchasing, costing."
- **Internal Business Tools** has an "inventory and asset trackers" card.
- **Custom Dashboards** has an "operations and fulfilment" card covering inventory and exceptions.
- **PartsFlow**, your strongest case study, is literally an inventory project.

Left alone, this page and the ERP page will compete for the same queries, split their own authority, and — worse — confuse a buyer who lands on one and can't tell why the other exists. Google resolves ambiguity by ranking neither.

**The boundary that resolves it, and it must be stated on the page itself:**

> **Inventory management** is about the **stock number being right** — across locations, channels, and time. It's a *data accuracy and synchronisation* problem.
> **ERP** is about the **financial and operational system of record** — stock is one module among purchasing, costing, and ledgers. It's a *system-of-record* problem.
> **Internal tools** is the **screen a specific team uses** for a specific task. It's an *interface* problem.
> **Dashboards** is **read-only visibility** over any of the above.

The practical rule for content: **this page owns multi-channel sync, stock accuracy, reorder logic, and warehouse operations. The ERP page owns purchasing, costing, and ledger integration and must not lead with inventory.** When the ERP page ships, trim its "lightweight custom ERP" card to reference this page for the stock side rather than describing it.

## Why Template B

The templates are assigned by what the buyer needs convincing of:

- **A — Narrative/Credibility** — *"will this actually work?"* (AI Agents, RAG Chatbots, ERP Systems)
- **B — Operational/Before-After** — buyer already believes it works and needs *"what changes in my week?"* (Workflow Automation, Email & Inbox, Document Processing, **and this page**)
- **C — Technical/Depth** — buyer is evaluating capability (Dashboards, Internal Tools, CRM Development)

An inventory buyer is an operations lead, e-commerce manager, or distributor who has never once doubted that inventory software works. They are drowning in a specific, concrete, daily problem: they oversold on Amazon again, the count says forty and the shelf says thirty-one, and someone spends every Monday reconciling. **This is the most literally operational buyer on the entire site.** Template B, and it also relieves the load on A and C, which are each carrying three pages.

## Template B variants — keep these distinct

| | **B-1 Workflow** | **B-2 Email & Inbox** | **B-3 Document Processing** | **B-4 Inventory** *(this page)* |
|---|---|---|---|---|
| Before/after device | Manual vs automated split | Inbox state comparison | Document journey | **Stock-number leakage chain, five links, break points marked** |
| Main explorer | Tabbed by use case | Tabbed by inbox type | Tabbed by document type | **Tabbed by business shape: DTC · distributor · manufacturer · multi-warehouse** |
| Signature framing | Time returned per week | Response-time reduction | Documents per hour | **The cost of one wrong number, traced through four consequences** |
| Process rail | 4 steps | 4 steps | 4 steps | **4 steps, count-and-baseline first** |

Shared across all four: light base throughout, centred hero, sticky left rail, horizontal process rail, open price table, logo grid, two-column plain FAQ, light bordered CTA panel. Keep every one of those.

---

# PART 1 — SEO SPEC

## Primary keyword

`custom inventory management software` — **not** `inventory management system` and **not** `inventory management software`.

Those two head terms are owned entirely by product vendors — Cin7, Katana, Zoho Inventory, Fishbowl, inFlow, NetSuite, Linnworks — plus review aggregators. They have product schema, review counts, free trials, and a decade of backlinks. A services page cannot displace them, and the traffic would be people looking to buy a subscription, not commission a build.

`custom inventory management software` is a different, smaller, and far better market: teams who have already evaluated the products and found that none of them fit. They arrive pre-qualified, having done the buy analysis themselves.

## Ranking targets

| Keyword | Note |
|---|---|
| `custom inventory management software` | Primary. Buyer has already ruled out off-the-shelf |
| `multi-channel inventory sync` | The single most common real problem. Moderate competition |
| `Shopify Amazon inventory sync` | Very high intent, tool-named, matches your DTC segment |
| `inventory management software development company` | Bottom-funnel vendor selection |
| `prevent overselling multiple channels` | Problem-phrased, low competition, converts |
| `inventory management system integration` | Connects this page to the ERP page cleanly |
| `warehouse management software development` | Adjacent, higher volume, worth a section not a page |
| `barcode scanning app development` | Specific, technical, weak SERP |
| `Cin7 alternative custom` / `Linnworks alternative` | Tool-name comparison, buyer mid-decision |
| `inventory reconciliation automation` | Matches PartsFlow exactly — you have the proof |

**The undervalued cluster is problem-phrased queries.** `prevent overselling multiple channels`, `stock levels not syncing shopify amazon`, `inventory count doesn't match system` are typed by someone in active pain with budget authority. They're near-zero competition because vendors write around features rather than symptoms, and Section 3 is built for them specifically.

**Do not chase** `inventory management`, `best inventory software`, or `inventory management system` — wrong intent, unwinnable, and it would put you in a comparison against products you'd lose.

## Meta

**Title (58 chars):**
```
Custom Inventory Management Software & Sync | Spaciva AI
```

**Description (157 chars):**
```
We build inventory systems that keep one accurate stock number across every channel
and location — sync, reorder logic, barcode scanning. Fixed price, you own it.
```

**H1:** `One stock number. Everywhere. Always current.`
**URL:** `/services/inventory-management` — keeps the pattern. Not `/services/inventory-management-software`, which reads as a product page and invites the wrong SERP comparison.

## Positioning against neighbouring pages

Stated above; repeat it in Section 10 and mirror on siblings. The ERP page in particular needs its inventory language trimmed when it ships.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the price table

**Do not** add `Product` or `SoftwareApplication` schema. You are not selling an inventory product, and that schema on these terms puts you in a comparison set against Cin7 and Katana — the one comparison this page is designed to sidestep.

## Internal linking

- Section 4 → `/services/workflow-automation` *(live)*
- Section 4 → `/services/document-invoice-processing` *(live)*
- Section 6 → `/services/ai-agent-development` *(live)*
- Section 10 → `/services/erp-systems` — **not live yet**
- Section 10 → `/services/custom-dashboards` — **not live yet**
- Section 10 → `/services/internal-business-tools` — **not live yet**
- Case studies → `/case-studies/partsflow` *(live)* and `/case-studies/unified-accounting` *(live)*

Ship the three unbuilt links as plain text. `/about` already publishes a live 404 from the footer of every page; don't add more.

**PartsFlow is the single most relevant proof asset on the site for this page** — a 5,000+ SKU inventory project. It should appear three times: hero proof line, Section 5, and the case study block. No other page on the site has proof this well matched to its subject.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template B opening.** Light base, **centred** copy (this is B's signature and distinguishes it from A and C's two-column heroes at a glance). Beneath the copy, the **stock-number leakage chain** running full width.
>
> The chain is five linked nodes left to right — *Physical shelf → System count → Channel listings → Available to promise → The number you quote a customer* — with **three break points marked between them** in the accent colour, each labelled with what leaks there. This replaces B-1's manual-vs-automated split and B-3's document journey.
>
> Inline SVG with real `<text>` nodes. Below 1024px it becomes a vertical chain with the break markers preserved.

**Eyebrow:** INVENTORY MANAGEMENT

# One stock number. Everywhere. Always current.

Most inventory problems aren't storage problems — they're synchronisation problems. The shelf says one thing, the system says another, and three sales channels each believe something different. We build the layer that keeps them agreeing, so you stop overselling, stop stocking out on your best SKUs, and stop reconciling by hand on Mondays.

**[Book a 30-minute call]** **[See how it works →]**

**Proof line:**
```
[80% faster data entry across a 5,000+ SKU catalogue](/case-studies/partsflow) · Live in [X]–[Y] weeks · You own the code
```

**Leakage chain content:**

| Link | What leaks before the next link |
|---|---|
| **Physical shelf** | → Damage, shrinkage, and returns never recorded |
| **System count** | → Sync lag, failed updates, manual edits nobody logged |
| **Channel listings** | → Each channel updated on its own schedule, or not at all |
| **Available to promise** | → Allocated, reserved, and in-transit stock counted as sellable |
| **The number you quote** | |

*Small caption under the chain:* Every business has at least one of these breaks. Most have three and only notice the one that caused an oversell.

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component — greyscale to colour on hover, client names as real text beneath each logo. Single row. The live service pages currently render the same eight logos twice through a duplicated marquee loop; fix globally rather than reproducing it here.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — The problem

> **UI/UX:** Full-width, single column, max ~720px, centred. Prose, not cards — the one block written to be read top-to-bottom. Pull the closing line out as a bordered pull-quote.
>
> This section is the landing target for the problem-phrased keyword cluster. Keep the symptoms literal and named — "we oversold on Amazon again" outranks "inventory visibility challenges," because it's what people actually type.

## You didn't oversell because you were careless

You oversold because the Amazon listing was working from a number that was fourteen minutes old, and in those fourteen minutes the same unit sold on Shopify. Nobody made a mistake. The systems just weren't talking fast enough, and the customer found out before you did.

Then it compounds. You get cautious, so you pad every channel with a buffer — and now you're deliberately not selling stock you have, on every SKU, permanently. That's the invisible half of the problem: the safety margin that stops the oversells is also a standing tax on revenue.

Meanwhile the count itself has drifted. A return came back and went on the shelf but not into the system. A damaged unit got written off in a WhatsApp message. A pallet arrived and got received in bulk against a PO that had two SKUs on it. By quarter-end the variance is big enough that somebody schedules a full count, the warehouse shuts for a day, and the number is accurate for about a week.

And the purchasing decisions on top of all this are being made from a spreadsheet that was exported on Monday, by someone who knows it's wrong and is guessing by how much.

> **The cost of a wrong stock number is never one wrong stock number. It's a cancelled order, a padded buffer on every SKU, a purchase order sized by guesswork, and a full count that fixes it for a week.**

---

## SECTION 4 — What we build

> **UI/UX — B's tabbed explorer, and the B-4 distinction is that it's tabbed by business shape, not by use case.** Four tabs: **DTC & multi-channel retail · Distribution & wholesale · Manufacturing · Multi-warehouse & 3PL**. Each panel holds three or four capability blocks written for that reader.
>
> Tabbing by business shape rather than feature means each reader sees a panel that sounds like their business — which is the entire conversion mechanic on an operational page. Panels must be in the DOM on load and hidden with CSS, never lazy-mounted: this is the richest keyword surface on the page.

**Eyebrow:** WHAT WE BUILD

## Built around how your stock actually moves

Same engineering underneath. What changes is which problem it's pointed at.

### DTC and multi-channel retail

**Real-time multi-channel sync** — Shopify, WooCommerce, Amazon, eBay, and your POS working from one number, updated on sale rather than on a schedule, with the update queued and retried rather than lost when a channel's API is slow.

**Oversell prevention with real allocation** — available-to-promise calculated properly: on-hand minus allocated, reserved, and pending returns. So you can run a thin buffer instead of a defensive one and sell the stock you actually have.

**Bundles and kits that decrement correctly** — a bundle sale draws down its components across every channel, which is where most off-the-shelf sync tools quietly break.

**Returns back into sellable stock** — inspected, graded, and returned to the correct location automatically rather than sitting in a corner uncounted.

### Distribution and wholesale

**Multi-location stock with transfer logic** — what's where, what's in transit, and what should move, with transfers tracked as their own state rather than a subtraction and an addition that can fail halfway.

**Customer-specific pricing and availability** — different customers see different prices and, where you need it, different availability, without maintaining parallel catalogues by hand.

**Purchase order and receiving workflow** — POs raised against reorder logic, receipted line by line or in bulk, with discrepancies flagged at the dock rather than discovered at month-end. Supplier documents can flow in through [document and invoice processing](/services/document-invoice-processing).

**Backorder and allocation rules** — when stock is short, who gets it, decided by rules you set rather than by whoever emails first.

### Manufacturing

**Bill of materials and component tracking** — finished goods, sub-assemblies, and raw materials tracked through production, with component availability checked before a build is committed.

**Work order stock movements** — components consumed and finished goods created as one transaction, so WIP doesn't become a black hole between two counts.

**Batch, lot, and expiry tracking** — full traceability where you need to answer "which customers got this batch," including FEFO picking where expiry matters.

**Production-aware reorder points** — reorder logic that accounts for committed builds, not just current sales velocity.

### Multi-warehouse and 3PL

**Location-level accuracy** — bin, shelf, or zone, so picking doesn't depend on someone knowing where things usually are.

**3PL and WMS integration** — stock levels, fulfilment status, and receipts synced with your logistics partner's system, with reconciliation reporting so you can prove the numbers agree.

**Barcode and mobile scanning** — receiving, picking, counting, and transfers done on a phone or scanner, offline-capable, syncing when there's signal. This alone eliminates the largest single source of count drift.

**Cycle counting instead of shutdowns** — a rolling count schedule weighted by SKU value and movement, so accuracy is maintained continuously rather than restored annually.

**Below the tabs, smaller:**
> Moving data between systems on a schedule is [workflow automation](/services/workflow-automation) and is often cheaper as its own scope. If your problem is entirely "these two systems don't talk," say so on the call — that's a smaller project than anything on this page and we'll price it that way.

---

## SECTION 5 — Before and after

> **UI/UX — Template B's operational core.** Two columns, **light throughout** — do not use a dark band here; that's Template A's device. Left column "A week now," right column "A week after," same six rows, aligned so the eye reads across.
>
> Sticky left rail nav remains visible alongside from this section down, matching B-1 through B-3.

## What changes in your week

### A week now

**Monday** — Export stock from three places, reconcile in a spreadsheet, update channel listings by hand.

**Tuesday** — An oversell on Amazon. Apologise, cancel, absorb the metric hit.

**Wednesday** — Purchasing decisions made from Monday's export, which is already wrong.

**Thursday** — A customer asks if something's in stock. Someone walks to the shelf to check.

**Friday** — A return arrives. It goes on the shelf. It doesn't go in the system.

**Month-end** — Variance is large enough that nobody trusts the number. Schedule a full count.

### A week after

**Monday** — The number is already right. Nobody exports anything.

**Tuesday** — A channel's API failed for six minutes. It retried, caught up, and alerted us. You didn't notice.

**Wednesday** — Reorder suggestions generated from live velocity and lead times. Someone approves them.

**Thursday** — The answer is on screen, with allocated and in-transit stock accounted for.

**Friday** — The return was scanned in on a phone at the returns desk. It's sellable stock.

**Month-end** — Cycle counts have been running weekly. Variance is small enough to explain.

**Beneath the columns:**
> **[PartsFlow](/case-studies/partsflow)** — a spare-parts distributor whose warehouse team was hand-keying inventory movements into QuickBooks across a 5,000+ SKU catalogue. Bulk validated imports and a live sync replaced row-by-row spreadsheet work: **80% faster data entry**.

---

## SECTION 6 — How accuracy is actually maintained

> **UI/UX:** Six-item grid, 3×2 at desktop, small icon, bold label, two to three lines. Consistent icon stroke weight. This is the technical-credibility block; on B pages it sits after the before/after rather than before it, because this reader wants the outcome first.

## Six things that keep the number right

Any tool can store a quantity. Keeping it true under real conditions takes six specific things, and most off-the-shelf sync breaks on at least one.

### Event-driven, not scheduled
Stock updates fire on the transaction, not every fifteen minutes. Scheduled sync means a guaranteed window in which every channel is wrong, and that window is exactly where oversells live.

### One authoritative source per SKU
Exactly one system owns the true count and everything else subscribes. Two systems both writing authoritatively is how counts silently diverge, and it's the most common flaw in setups we're asked to rescue.

### Queued, retried, never dropped
Channel APIs fail, throttle, and go down. Every update is queued with backoff and retry, and anything that can't be applied lands in a visible error queue with the reason attached — not in a log file.

### Available-to-promise, not on-hand
Sellable stock is on-hand minus allocated, reserved, and pending. Publishing raw on-hand to channels is the single most common cause of overselling and it's usually one calculation away from fixed.

### Movement history, not just a quantity
Every change recorded with who, when, why, and what the count was before. Without it, an investigation into a variance has nowhere to start and you're left doing another full count.

### Cycle counting built in
Rolling counts weighted by value and movement velocity, scheduled continuously. Accuracy maintained rather than restored — the annual shutdown count is a symptom, not a solution.

**Below the grid, smaller:**
> Where a step genuinely needs judgement — grading a return, matching a mislabelled supplier delivery to a PO — that's an [AI agent](/services/ai-agent-development) sitting inside one step of an otherwise deterministic system. Most inventory work isn't that, and we'll tell you which of your steps genuinely is.

---

## SECTION 7 — How the work runs

> **UI/UX:** Horizontal process rail, **four steps**, matching B-1 through B-3. Numbered nodes on a connecting rule with a duration pill beneath each. Stacks vertically on mobile. The B-4 distinction is step one: a count-and-baseline phase before anything is built.

## Four phases, [X]–[Y] weeks

**01 — Count and baseline** · *3–5 days*
Before we build anything, we establish how wrong the number currently is and why. A sample count against system records across a representative SKU set, plus a map of every place stock data is entered or changed. You get that written baseline whether or not you hire us — and it's what makes the improvement provable afterwards.

**02 — Fixed scope and quote** · *2–3 days*
A written scope, fixed price, and delivery date before any code is written, phased so you can see what goes live first. If scope moves, we re-quote in writing first.

**03 — Build and parallel run** · *[X]–[Y] weeks*
Built against your real catalogue, not sample data. Then the new sync runs alongside your current process and you compare the two before switching anything off. Written update every Friday plus a short Loom walkthrough of what moved.

**04 — Go live by channel, then monitor** · *ongoing*
One channel at a time, reconciled before the next. After launch: sync monitoring with alerting, error-queue review, reorder-logic tuning as velocity changes, and handling channel API changes that arrive without warning. A named engineer stays on it.

---

## SECTION 8 — Build or buy

> **UI/UX:** Two light cards side by side, equal visual weight — the left card must not be styled as the losing option. Full-width comparison table beneath, with real `<th>` markup and plain text, never an image. This section targets `Cin7 alternative custom` and `Linnworks alternative`.

## You may not need us for this

The inventory software market is genuinely good, and buying beats building more often than any agency page admits.

### Buy an off-the-shelf system when

You sell reasonably standard products through channels the tool supports natively, your fulfilment process fits how the tool expects it to work, and your SKU count and order volume are inside what it handles comfortably. Cin7, Katana, Zoho Inventory, inFlow, Linnworks, or Shopify's native tooling will be live in weeks for a fraction of a custom build, and one of your own team can run it. **We'll tell you this on the call and we won't quote you for something you don't need.**

### A custom build makes sense when

Your product structure fights the tool — bundles inside bundles, configurable products, batch and expiry rules, or components that behave differently by customer. Or your fulfilment doesn't match any tool's assumptions. Or you need a channel or 3PL that no product connects to. Or you've hit performance limits at your SKU or order volume. Or per-order pricing has stopped making sense at your scale. Or — most commonly — **you already run an inventory tool and the problem is that it doesn't talk to the other three systems**, which is an integration project, not a replacement.

| | Off-the-shelf system | Custom build |
|---|---|---|
| **Time to live** | Weeks | [X]–[Y] weeks |
| **Upfront cost** | Low | Higher, fixed and quoted in writing |
| **Ongoing cost** | Per-order or per-seat, grows with volume | Hosting plus a monthly plan |
| **Standard products and channels** | Excellent | Overkill |
| **Complex BOM, bundles, batch rules** | Constrained by the tool's model | Whatever your products actually are |
| **Unsupported channel or 3PL** | Blocked, or via a fragile middleman | Anything with an API |
| **Performance at high SKU/order volume** | Degrades, tier upgrades | Designed for your scale |
| **Ownership** | You rent it | Code and data are yours |

**Honest answer:** the most common right answer isn't build or buy — it's **keep what you have and fix the connections between it and everything else**. That's a substantially smaller project than either column above, and it's what a good share of the enquiries on this page turn out to need.

---

## SECTION 9 — Systems we connect

> **UI/UX:** Logo grid grouped by category with small labels, greyscale to colour on hover. **Render every system name as real text alongside the logo, not as alt text alone** — this is the primary surface for tool-name queries.

## What we connect to

### Sales channels and POS
Shopify · WooCommerce · Magento · BigCommerce · Amazon · eBay · Etsy · Walmart Marketplace · Square · Lightspeed

### Inventory, ERP, and accounting
Cin7 · Katana · Linnworks · Zoho Inventory · inFlow · Fishbowl · NetSuite · Odoo · Business Central · SAP Business One · QuickBooks · Xero · TallyPrime

### Warehouse, logistics, and shipping
3PL and WMS APIs · ShipStation · shipping carriers · barcode scanners and mobile scanning hardware

### Data and integration layer
Postgres · MySQL · Redis · queueing and retry infrastructure · n8n · custom Python and Node services · REST · GraphQL · EDI and SFTP where a modern API doesn't exist

**Below the grid, smaller:**
> Not listed? If it has an API, we can almost certainly connect it. Some 3PLs and older warehouse systems still run on flat-file or EDI exchange — we'll tell you that before you commit and build to it properly rather than promising a real-time sync that isn't possible.

---

## SECTION 10 — Inventory, or something else?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain treatment — routing block, not persuasion. **Omit or disable the three cards whose pages aren't live yet.**

## Is inventory work actually what you need?

**Inventory management** — the stock number needs to be right, everywhere, all the time. A data accuracy and synchronisation problem. *(This page.)*

**[ERP systems](/services/erp-systems)** — you need the financial and operational system of record, where stock is one module alongside purchasing, costing, and ledgers. If the pain is month-end and margin rather than overselling, start there.

**[Internal business tools](/services/internal-business-tools)** — one team needs a screen for one job — a receiving app, a returns desk tool — rather than a whole inventory system.

**[Custom dashboards](/services/custom-dashboards)** — you need to *see* stock position, ageing, and dead capital, read-only, without changing how anything is recorded.

**[Workflow automation](/services/workflow-automation)** — the systems are fine and they just need to talk. Often the cheapest real fix here.

> **Honest answer:** a large share of "we need a new inventory system" enquiries are one integration and a corrected available-to-promise calculation. That's weeks rather than months, and we'd rather scope it that way in week one.

---

## SECTION 11 — Pricing

> **UI/UX — Template B's open price table**, matching B-1 through B-3. Three tiers, middle emphasised. Do not swap in Template C's engagement-model table; the open table is one of B's defining elements and this buyer expects a number.
>
> If real prices aren't confirmed, publish with bracketed figures rather than removing the table — an operational buyer reads a missing price table as "expensive."

## What it costs

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.

### Multi-channel sync — from $[X]
One accurate stock number across your channels: event-driven sync, available-to-promise logic, retry queues, error handling, monitoring, and the first month of support.
*Good for: the oversell problem, which is most enquiries.*

### Inventory system build — from $[Y]
A full system shaped around your products and process — locations, transfers, POs and receiving, reorder logic, barcode scanning — migrated from your current setup and phased live.
*Good for: teams whose product structure genuinely fights every off-the-shelf tool.*

### Ongoing inventory partner — from $[Z]/month
Sync monitoring, error-queue review, reorder-logic tuning, channel API changes, and a set amount of new work each month.
*Good for: teams where channels and SKU ranges keep changing — most clients end up here.*

**Beneath the table:**
> Every build includes monitoring for the first month. After that it's $[M]/month and you can stop any time — you keep the source code, the data, and the documentation either way.

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards, matching the shared treatment. Metric, client, one paragraph, link. **PartsFlow leads** — it is the best-matched proof asset on the entire site for any page.

## What we've built

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.

*Note for the client: PartsFlow is currently written as a data-entry story. **Rewriting it as an inventory-accuracy story — same facts, same metric, with SKU count, channels, and the accuracy problem in the headline — is the highest-return content task attached to this page.** It would let this page claim its primary keyword with real proof rather than assertion, and no competitor page in this category has a case study this well matched.*

---

## SECTION 13 — FAQ

> **UI/UX — Template B's two-column plain list**, not an accordion. This is one of B's defining differences from A and C and it must be preserved. Add `FAQPage` schema regardless of the visual treatment.

## Common questions

**How do you stop overselling across channels?**
Two things together. Updates fire on the transaction rather than on a schedule, so there's no window where channels are working from a stale number. And what gets published is available-to-promise — on-hand minus allocated, reserved, and pending returns — not raw on-hand. Publishing raw on-hand is the most common cause of overselling and it's usually one calculation away from fixed.

**Can it sync Shopify and Amazon in real time?**
Yes, within what each channel's API allows. Amazon in particular throttles and processes some updates asynchronously, so "real time" means seconds to a couple of minutes rather than instant — and any vendor promising instant Amazon updates is describing something the API doesn't offer. We build with queueing and retry so a slow or failed update catches up rather than being lost.

**We already use Cin7 / Katana / Linnworks. Do we have to replace it?**
Usually not, and we'll say so. A good share of enquiries here are solved by connecting the existing tool properly to the channels, warehouse, or accounting system it doesn't currently reach. That's a much smaller project than a replacement and we'll price it as one.

**Our physical count never matches the system. Can software fix that?**
Not on its own — drift comes from movements that happen without being recorded. What software fixes is the recording: barcode scanning at receiving, picking, and returns so movements are captured where they happen, movement history so variances can be investigated instead of guessed at, and cycle counting so accuracy is maintained continuously rather than restored once a year with a shutdown.

**Do you build barcode scanning?**
Yes — mobile-first, working on standard phones or dedicated scanners, with offline capture that syncs when there's signal. Receiving, picking, counting, and transfers. It's typically the single highest-impact component because it removes the largest source of count drift.

**Can you handle bundles, kits, and BOMs?**
Yes, including nested bundles and multi-level bills of materials. Component availability is checked before a bundle or build is committed, and a sale decrements components correctly across every channel. This is where most off-the-shelf sync tools quietly break.

**What about multiple warehouses and 3PLs?**
Location-level stock down to bin or zone, transfers tracked as their own state so a half-completed move can't vanish, and 3PL or WMS integration with reconciliation reporting so you can prove the numbers agree rather than assume it.

**How long does it take?**
[X]–[Y] weeks for multi-channel sync including a parallel run. Full system builds run longer and go live channel by channel. The biggest variables are how clean your SKU data is and how many channels are involved — not how many units you hold.

**What happens to our existing stock data?**
Audited and cleansed before it moves, with the rules agreed in writing, then validated against the source before anything is switched off. Your current process keeps running in parallel until the new one reconciles. We don't do cutovers that depend on everything being right first time.

**What if a channel changes its API?**
They do, usually without warning. Every sync ships with alerting so we find out before you do, and fixes to anything we built are covered by the monthly plan. Unmonitored syncs failing silently is the main way inventory accuracy quietly decays after a project ends.

**Who owns the code and the data?**
You do. Source code, database, integration configuration, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts.

**How do you work with clients abroad?**
We're in Ahmedabad, India, and stay available for video calls in your US Eastern or UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved.

---

## SECTION 14 — Closing CTA

> **UI/UX — Template B's light bordered panel**, not a dark band. This is B's closing signature and must not drift toward A's full-bleed dark treatment. Single primary button, no competing secondary link, no email capture.

## Tell us the last time you oversold.

Book a 30-minute call. We'll trace where your stock number actually breaks, tell you honestly whether an off-the-shelf tool would fix it, and give you a fixed price if building is the right answer.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from B-1, B-2, and B-3

| Element | B-1 Workflow | B-2 Email | B-3 Documents | **B-4 Inventory** |
|---|---|---|---|---|
| Hero device | Manual vs automated split | Inbox state comparison | Document journey | **Five-link leakage chain, breaks marked** |
| Explorer tabs | By use case | By inbox type | By document type | **By business shape** |
| Before/after unit | Time per week | Response time | Documents per hour | **A week, day by day, six rows** |
| Process step one | Audit | Audit | Sample documents | **Count and baseline** |
| Comparison section | Zapier vs custom | — | OCR vs custom | **Off-the-shelf inventory tools vs custom** |

Shared: light base throughout, centred hero, sticky left rail, four-step horizontal rail, open price table, logo grid, two-column plain FAQ, light bordered CTA. Five differences on one chassis.

**Check before shipping:** put B-1 and B-4 side by side at 50% zoom. If the hero device and the explorer tabs don't immediately distinguish them, the variant hasn't been built as specified.

## Accessibility

- The leakage chain needs `role="img"` with an `aria-label` naming all five links and the three break points in order, plus real `<text>` nodes rather than paths.
- **Break points must not be marked by colour alone** — keep the text labels.
- Before/after columns must read sensibly in DOM order on a screen reader: pair each "now" row with its "after" row, or ensure the columns are announced as two complete sequences rather than interleaved fragments.
- Tabbed explorer needs arrow-key navigation and correct `aria-selected`.
- Sticky left rail must not trap focus and must be skippable.
- Price table needs real `<th>` scope attributes.

## Performance

- Leakage chain as inline SVG. Crawlable, sharp, no extra request.
- Section 9's logo grid is the heaviest block — around 30 marks. Use a sprite or inline SVG rather than individual image requests, and keep text names in the DOM regardless of whether logos load.
- Explorer tab panels render on load, hidden with CSS. Lazy-mounting loses the page's richest keyword surface.
- The trust strip's duplicated marquee loop should be fixed globally before this page ships.

## Site-level issues this page depends on

Unchanged, and now past the point where new pages are the best use of effort.

1. **`/about` still 404s and is still linked from the footer of every page.** Fix before publishing anything further.
2. **There is still no `/services` index.** This would be the ninth service page reachable only through in-body cross-links. Build the index or a nav dropdown **first** — you now have more unreachable content than reachable.
3. **`/contact` still carries the old generalist positioning** ("Custom AI, CRM, LMS & Web Systems") and the all-caps "SPACIVA" mark. Every CTA on this page points there.
4. **Brand mark is still inconsistent** — "Spaciva AI" in nav and footer, "SPACIVA" on contact.
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.** Every share previews as the homepage.

## One cross-page edit this release requires

**When the ERP page ships, trim its "lightweight custom ERP" card.** It currently reads "inventory, orders, purchasing, costing, and basic financial reporting." Change the inventory clause to a link to this page and let the ERP card lead on purchasing, costing, and ledgers. Two pages both leading on inventory is how a site loses a keyword it could have won outright.

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `[X]`–`[Y]` weeks | Hero proof line, Section 7, Section 8 table, FAQ | Must be a range you'll honour. Multi-channel sync with a parallel run is longer than a workflow automation — don't copy that window across |
| `$[X]` — multi-channel sync | Section 11, FAQ | |
| `$[Y]` — full system build | Section 11 | |
| `$[Z]` — monthly partner plan | Section 11 | |
| `$[M]` — maintenance monthly | Section 11 footnote | |
| Client logos and names | Section 2 | |
| Rewritten PartsFlow case study | Hero, Section 5, Section 12 | Highest-return task attached to this page |
| A stock-accuracy screenshot | Section 12 | Anonymised, SKUs blurred, is fine. Every competitor page in this category uses warehouse stock photography |

**Important — verify before publishing:** Section 9 lists roughly thirty systems and Section 4 describes capabilities across four business types. **Confirm which of these you have genuinely built, and move anything unverified to a "connectable via API" line rather than an implied credential.** Unified Accounting evidences the ERP and accounting row; PartsFlow evidences inventory sync and bulk import. Manufacturing capabilities — BOM, work orders, batch and lot tracking — are **not** currently evidenced by either case study. If you haven't built them, the manufacturing tab is still fine as written (it describes what would be built, not what has been), but it must not drift into "we built this" language at implementation, and you need someone who can hold a technical call on it.

Nothing on this page presents an unverified figure as a client result. The two case study metrics are your existing published figures; check them against the underlying engagements before they carry a page aimed at an operational buyer who will ask how they were measured.
