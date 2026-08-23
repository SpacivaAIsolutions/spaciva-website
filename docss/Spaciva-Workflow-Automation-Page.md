# Spaciva — Workflow Automation Services Page

**URL:** `/services/workflow-automation`
**Layout:** **Template B — Operational / Before-After**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — THE THREE-TEMPLATE SYSTEM

Lock this before building. Three templates, each assigned by **what the buyer needs to be convinced of**, not by rotation. Pages on the same template share components; pages on different templates feel distinct while staying visibly the same site.

## Template A — Narrative / Credibility
*Used by: AI Agent Development (already written)*

- Full-width stacked sections, alternating light and dark bands
- Two dark bands only (mid-page CTA, closing CTA)
- Vertical timeline for process
- Accordion FAQ
- **Persuasive engine:** a "why these projects fail" section that earns engineering credibility before asking for anything

**Use when** the buyer's hesitation is *"will this actually work?"* — new, unproven, or hype-adjacent technology.

## Template B — Operational / Before-After
*Used by: Workflow Automation (this page)*

- Sticky left-rail section nav with scrolling content
- Signature element: **side-by-side manual vs automated comparison**
- Tabbed use-case explorer instead of a card grid
- **Horizontal** step rail instead of a vertical timeline
- Open pricing table on the page, not buried in the FAQ
- Integration logo grid
- Two-column FAQ, no accordion
- Light bordered closing CTA instead of a dark band

**Use when** the buyer already believes the technology works and needs to see *"what changes in my week, and what does it cost?"*

## Template C — Technical / Depth
*Reserved for: Custom Software, Internal Tools, Cloud & DevOps*

- Two-column with a persistent right-hand spec panel
- Architecture diagram as the hero element
- Code and stack blocks inline
- Tabbed technology breakdown
- Engagement-model table (fixed scope vs retainer vs team extension)
- Dark page base with light content cards — the inverse of A and B

**Use when** the buyer is technical and evaluating capability, not concept.

## Shared across all three (this is what keeps it one site)

Type scale · colour tokens · button styles · logo strip · client name treatment · footer · the "From $X · Live in N weeks" proof line format · section spacing rhythm.

**Rule:** every new service page uses one of the three. Don't invent a fourth without a reason grounded in buyer psychology.

---

# PART 1 — SEO SPEC

## Primary keyword

`workflow automation services` — moderate competition, dominated by tool vendors (Zapier, Make, n8n content) rather than agencies. That's the opening: the tool vendors own "how to," so **service-intent queries are under-served.**

## Ranking targets

| Keyword | Note |
|---|---|
| `business process automation services` | Higher volume, commercial intent |
| `workflow automation for agencies` | Your niche, low competition |
| `n8n development agency` / `make.com agency` | Very low competition, extremely high intent — these searchers are ready to buy |
| `automate client onboarding` | Use-case query, converts well |
| `workflow automation cost` | Answer with real numbers; competitors won't |
| `zapier vs custom automation` | Comparison intent, and you can answer honestly |

**The n8n/Make angle is the undervalued one.** Tool name + "agency" or "developer" is bottom-funnel and barely contested. Name your tools explicitly on this page.

## Meta

**Title (57 chars):**
```
Workflow Automation Services for Growing Teams | Spaciva
```

**Description (152 chars):**
```
We automate the repetitive work eating your team's week — onboarding, reporting,
data entry, follow-ups. Fixed price, live in 2 weeks, monitored monthly.
```

## Positioning against the AI Agent page

These two must not cannibalise each other in search or confuse buyers. State the distinction on both pages:

> **Workflow automation** runs a defined sequence of steps between your tools. Predictable, cheaper, faster to build.
> **AI agents** make judgement calls where the right next step isn't fixed in advance.

Cross-link with that framing. It also reads as honest, because most vendors push everything toward the more expensive option.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` with `priceRange` on the pricing table

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — deliberately unlike Template A:** centred, single column, max-width 780px. No hero image beside the text. Instead, directly beneath the CTAs, an inline **before/after strip**: two small panels side by side — left showing a manual process as a cramped list of steps with a time cost, right showing the same process as one flow with the new time cost. This is the page's signature element and it lands in the first viewport.
>
> Template A opened two-column with a screenshot. This opens centred with a diagram. Same type scale, same buttons, instantly distinguishable.

**Eyebrow:** WORKFLOW AUTOMATION

# Your team is doing work a system should be doing

Every business runs on a set of repetitive steps somebody does by hand — copying data between tools, chasing updates, rebuilding the same report every week. We find those, automate them properly, and keep them running.

**[Book a 30-minute call]** **[See what we automate →]**

**Proof line:**
```
Most automations live in 2 weeks · From $[X] · You own everything we build
```

**Before/after strip content:**

| Before | After |
|---|---|
| Form submitted → someone checks the inbox → copies details into the CRM → assigns an owner → writes a welcome email → creates the project folder → adds tasks | Form submitted → everything above happens automatically → team notified in Slack |
| **≈40 minutes per client, manually** | **Under 30 seconds, unattended** |

---

## SECTION 2 — Sticky section nav

> **UI/UX:** Left rail, sticky from below the hero, ≥1024px only. Section names highlight on scroll. Hidden on tablet and mobile — do not substitute a horizontal scrolling pill bar, which consistently tests badly for navigation.
>
> This rail is Template B's most obvious structural break from A, and it lifts scroll depth on a long service page.

Rail items: What we automate · Manual vs automated · How it works · Tools we use · Pricing · Questions

---

## SECTION 3 — What we automate

> **UI/UX:** **Tabbed explorer, not a card grid** — the second deliberate break from Template A. Four tabs across the top, content panel below. Tabs organised by *audience*, not function, so a visitor self-selects in one click. Default to tab one; never load with all panels closed.

**Eyebrow:** WHAT WE AUTOMATE

## Pick the version of this that sounds like your week

### Tab 1 — Agencies

**Client onboarding**
A signed proposal creates the client record, the project folder, the kickoff tasks, the Slack channel, and the welcome sequence. What took most of an afternoon happens before you've closed the tab.

**Client reporting**
Data pulls from your ad platforms, analytics, and project tools on a schedule, assembles into your template, and lands in the client's inbox on the first of the month. Nobody rebuilds it by hand.

**Lead intake and routing**
Every enquiry from every source arrives in one place, enriched and scored, routed to the right person with a first response sent inside a minute.

**Time and invoice prep**
Tracked hours assemble into draft invoices against each client's rate card — ready for review instead of ready to be built from scratch.

### Tab 2 — Professional services

**Client intake and document collection**
Intake forms trigger engagement letters, chase missing documents automatically, and file what arrives into the right client folder.

**Document data extraction**
Invoices, contracts, and forms read, the fields you need extracted and validated, then pushed into your practice management or accounting system.

**Deadline and compliance tracking**
Filing dates, renewals, and review dates monitored automatically with escalating reminders before anything slips.

**Follow-up sequences**
Proposals, outstanding invoices, and dormant clients chased on a schedule, in your voice, without anyone having to remember.

### Tab 3 — E-commerce and DTC

**Order and fulfilment updates**
Order events trigger customer notifications, warehouse alerts, and internal flags on exceptions — so the only orders anyone looks at are the ones that need a human.

**Returns and exchange processing**
Requests validated against your policy, labels issued, inventory adjusted, refund queued. Manual only where policy genuinely requires judgement.

**Inventory and supplier alerts**
Stock thresholds trigger reorder drafts and supplier emails before you find out you're out of your best seller.

**Review and post-purchase flows**
Review requests, replenishment reminders, and win-back sequences firing on real behaviour rather than a fixed calendar.

### Tab 4 — Internal ops (any team)

**Data sync between tools**
Your CRM, spreadsheets, billing system, and project tool stop disagreeing with each other, because one becomes the source of truth and the rest follow automatically.

**Recurring reports**
Any report someone rebuilds weekly gets built once and delivered on schedule.

**Approval routing**
Requests routed to the right approver, escalated when they sit too long, logged when resolved.

**Employee onboarding**
Accounts, access, equipment requests, and first-week tasks all triggered by one form.

---

## SECTION 4 — Manual vs automated

> **UI/UX — the signature section of Template B.** Full-width split with a visible centre divider. Left column muted or desaturated (manual), right column in the accent colour (automated). Three rows, aligned across both columns.
>
> On mobile: stack, but keep the pairing obvious with a small "before / after" label above each pair. Don't let the halves drift into separate cards — the persuasive force is entirely in the direct comparison.

## The same process, two ways

### Client onboarding

**By hand** — Someone spots the signed contract. Opens the CRM, types the details. Creates the folder. Copies the task template. Writes the welcome email. Adds them to billing. Tells the team. *≈40 minutes, and steps get missed when it's busy.*

**Automated** — The signature triggers all of it. The team gets a Slack message once the client is fully set up. *Under 30 seconds, and nothing is ever missed.*

### Monthly client reporting

**By hand** — Export from four platforms. Paste into the template. Fix the formatting. Write the commentary. Send. Repeat per client. *2–3 hours per client, per month.*

**Automated** — Data assembles into your template on the first, ready for the commentary that actually needs a human. *10 minutes of judgement instead of 3 hours of assembly.*

### Invoice processing

**By hand** — Open the PDF. Read the figures. Type them into the accounting system. Check them. File the document. *5–8 minutes per invoice, error-prone at volume.*

**Automated** — Invoices read on arrival, fields extracted and validated against your rules, flagged only when something doesn't reconcile. *Seconds, with a human reviewing exceptions only.*

> **Pull-quote beneath the comparison:**
> None of this is exotic. It's the work your team already knows is a waste of their time — the only reason it hasn't been automated is that nobody's had a spare week to sit down and do it properly.

---

## SECTION 5 — How it works

> **UI/UX:** **Horizontal step rail** — Template A used a vertical timeline, so this must not. Four steps across at desktop, connected by a horizontal rule with numbered nodes, duration pill under each. Converts to a vertical stack below 900px, keeping the numbered nodes so it still reads as a sequence.
>
> Four steps, not six. Workflow automation is a shorter engagement than an agent build, and the process section should *feel* shorter to reinforce that.

## Four steps, about two weeks

**01 — We watch how you work now** · *2 days*
A short call per workflow. We map what actually happens, including the steps nobody documented, and count what it costs in hours. You get that number whether or not you hire us.

**02 — Fixed scope and price** · *1 day*
A written list of exactly which workflows we'll automate, what each will do, the price, and the date. Approved before anything is built.

**03 — Build and test** · *1 week*
Built against your real tools and run on real cases in staging. You see it work on your own data before it touches anything live.

**04 — Live, then monitored** · *ongoing*
Switched on with alerting, so if an integration breaks we know before you do. The monthly plan covers fixes, tuning, and new steps as your process changes.

---

## SECTION 6 — Tools

> **UI/UX:** Logo grid, greyscale to colour on hover, grouped by category with small labels. Double duty — reassures buyers you work with their stack, and it's real SEO surface for tool-name searches. Render tool names as text alongside logos, not as alt text alone.

## We work with what you already use

We don't ask you to move to a new platform. We connect what you're running today.

**Automation platforms** — n8n · Make · Zapier · custom Python and Node services
**CRM and sales** — HubSpot · Pipedrive · Salesforce · Zoho · Close
**Comms** — Slack · Gmail · Outlook · WhatsApp Business
**Project and docs** — Notion · Asana · ClickUp · Monday · Airtable · Google Workspace
**Commerce and billing** — Shopify · WooCommerce · Stripe · QuickBooks · Xero
**Data** — Postgres · MySQL · Google Sheets · BigQuery

**Below the grid, smaller:**
> Not listed? If it has an API, we can almost certainly connect it. If it doesn't, we'll tell you before you commit rather than after.

---

## SECTION 7 — Pricing

> **UI/UX — Template B puts pricing openly on the page**, as a three-column table. Template A kept it to a hero line and the FAQ. This is the strongest differentiator available to you: almost no competing agency publishes numbers, and doing so filters out price-shoppers before they book a call.
>
> Middle column visually emphasised as the common choice. **If real prices aren't confirmed, delete this section** rather than publishing ranges you can't honour.

## What it costs

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.

### Single workflow — from $[X]
One process automated end to end. Discovery, build, testing, deployment. Typically live in about two weeks.
*Good for: proving it works before committing further.*

### Automation package — from $[Y]
Three to five connected workflows, mapped together so they hand off to each other properly. Usually 3–4 weeks.
*Good for: most teams — this is where the compounding time savings show up.*

### Ongoing automation partner — from $[Z]/month
A standing monthly plan: monitoring and maintenance on everything live, plus a set amount of new automation work each month.
*Good for: teams that keep finding new things to automate — most clients end up here.*

**Beneath the table:**
> Every build includes monitoring and maintenance for the first month. After that it's $[M]/month, and you can stop any time — you keep the code either way.

---

## SECTION 8 — Where it goes wrong

> **UI/UX:** Plain two-column list, no icons, tight. Template A gave its failure section a full styled treatment because credibility was the harder sell there. Here it's a supporting note, not a centrepiece — style it accordingly and keep it short.

## Three ways automation projects waste money

**Automating a broken process**
If the workflow doesn't make sense manually, automating it just makes the mess happen faster. Sometimes the honest answer is to fix the process first and automate less of it. We'll say so.

**Building it where nobody can maintain it**
An automation living in one person's personal account, undocumented, becomes a liability the day they leave. Everything we build sits in your accounts, documented, owned by you.

**Nobody watching it**
APIs change and integrations break silently. An automation nobody monitors fails quietly for weeks before someone notices the reports stopped arriving. Monitoring isn't an upsell here — it's the difference between an asset and a time bomb.

---

## SECTION 9 — Automation or an agent?

> **UI/UX:** Two side-by-side cards, visually distinct, the right one linking to `/services/ai-agent-development`. Prevents the two pages competing and signals honesty — you're pointing some buyers toward the cheaper option.

## Do you need automation, or an AI agent?

**Workflow automation** — the steps are known in advance. *If the form says X, do Y.* Cheaper, faster, more predictable, easier to maintain. Most business processes are this, and most people over-estimate how much judgement theirs really needs.

**AI agents** — the right next step depends on judgement. Understanding an unusual customer message, reading a non-standard document, deciding which of six paths applies. More capable, more expensive, needs ongoing tuning. → *[Read about AI agent development]*

> **Honest answer:** we start most clients on automation. It's cheaper, it works immediately, and it usually reveals which one or two steps genuinely need an agent — a much better basis for that decision than guessing upfront.

---

## SECTION 10 — FAQ

> **UI/UX:** **Two-column plain list, no accordion** — Template A used an accordion, so this must not. All answers visible on load, which is better for crawlers and AI search anyway. Question bold, answer beneath, two columns at desktop, single at mobile.

## Common questions

**How long does one automation take to build?**
Most single workflows go from kickoff to live in about two weeks. A package of three to five connected workflows usually takes three to four weeks, depending on how many tools we're connecting and how clean your data is.

**What does it cost?**
Single workflows start at $[X], packages at $[Y], and ongoing plans from $[Z] a month. You get a fixed price in writing before any work starts.

**Can't we just use Zapier ourselves?**
Often, yes — and if your workflow is simple enough for that, we'll tell you on the call. People usually come to us when the process branches, needs data cleanup, requires error handling, or spans more tools than a simple chain manages well. Cost matters too: at volume, per-task pricing on hosted platforms frequently exceeds the cost of running a proper automation on your own infrastructure.

**Who owns what you build?**
You do. It runs in your accounts, on your platforms, with documentation handed over. If you stop working with us, everything keeps running and your team can maintain it.

**What if something breaks?**
Everything ships with alerting, so we usually know before you do. Fixes to anything we built are covered by the monthly plan.

**Do we need to change the tools we use?**
No. The point is to connect what you already run. We'd only suggest a change if a tool genuinely can't do what you need — and we'd explain why before you commit to anything.

**What's the smallest project you'll take?**
A single workflow. Plenty of clients start with one, see the time it gives back, and expand from there. We'd rather start small and be right than sell you a package you're unsure about.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US and UK working hours. Written update every Friday plus a short Loom walkthrough, and calls happen in your hours.

---

## SECTION 11 — Closing CTA

> **UI/UX — Template B closes light, not dark.** A bordered or subtly tinted panel with generous padding rather than Template A's full-bleed dark band. Same button style, same copy structure, different visual weight — so someone landing on both pages reads them as siblings, not clones.

## Tell us what your team does every week that it shouldn't have to.

Book a 30-minute call. We'll map one workflow with you, tell you what it's costing in hours, and give you a fixed price to automate it. If it isn't worth automating, we'll tell you that too.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from the AI Agent page

| Element | Template A (AI Agent) | Template B (this page) |
|---|---|---|
| Hero | Two-column, screenshot right | Centred, inline before/after strip |
| Navigation | None | Sticky left rail |
| Main content block | Card grid | Tabbed explorer |
| Signature section | "Why projects fail" | Manual vs automated split |
| Process | Vertical timeline, 6 steps | Horizontal rail, 4 steps |
| Pricing | Hero line + FAQ | Open table on page |
| FAQ | Accordion | Two-column plain list |
| Closing CTA | Full-bleed dark | Light bordered panel |
| Dark sections | Two | Zero |

Nine structural differences, one shared design system. That's the target.

## Accessibility

- Tabbed explorer needs full keyboard navigation (arrow keys between tabs, correct `aria-selected`) and content in the DOM on load, not fetched on click
- The manual/automated split must not rely on colour alone — keep the "By hand" and "Automated" text labels
- Sticky rail needs a skip link and must not trap focus

## Performance

- Tab panels render on load, hidden with CSS. Lazy-mounting them loses the SEO value of the richest keyword section on the page.
- Tool logos as a sprite or inline SVG; six rows of individual image requests is the heaviest thing here

## Internal linking

- Section 9 → `/services/ai-agent-development` (add the reciprocal link on that page)
- Tab headings → matching industry pages once they exist
- Monthly plan mentions → `/services/maintenance`

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in |
|---|---|
| `$[X]` — single workflow price | Hero, pricing, FAQ |
| `$[Y]` — package price | Pricing, FAQ |
| `$[Z]` — monthly partner price | Pricing, FAQ |
| `$[M]` — maintenance monthly | Pricing footnote |
| `[X]` hours US/UK overlap | FAQ |
| Client logos and names | Trust strip |
| Real time-savings figures | Before/after strip, manual vs automated section |

**Important:** the time figures in the before/after strip and the manual-vs-automated section are realistic industry estimates, not measurements from your clients. Either verify them against a real engagement or keep them framed as typical — never present them as client results. If you have real numbers from any existing client, swap them in. One measured figure with a name attached is worth more than three plausible ones.
