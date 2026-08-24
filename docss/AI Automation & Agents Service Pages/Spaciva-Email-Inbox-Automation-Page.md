# Spaciva — Email & Inbox Automation Services Page

**URL:** `/services/email-inbox-automation`
**Layout:** **Template B — Operational / Before-After**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

## Why Template B, not A

Nobody needs convincing that email can be sorted, labelled, and drafted automatically — Gmail has been doing a crude version of it for a decade and AI drafting is now a mainstream feature. The technology isn't the objection.

The objection is **operational**: *"what does my inbox actually look like on Monday morning, and will this thing email a client without me?"* That's Template B — before/after, tabbed explorer, open pricing, light close.

**How it stays distinct from the Workflow Automation page inside the same template:**

| Element | Workflow Automation | This page |
|---|---|---|
| Hero before/after strip | Process steps, with time costs | An inbox screenshot: 214 unread vs 6 needing you |
| Signature section | Manual vs automated, 3 processes | One inbox at 9am, before and after |
| Extra section | — | "Does it send, or does it draft?" — the control block |
| Tab axis | By audience | By audience (keep consistent) |
| Step rail | 4 steps, ~2 weeks | 4 steps, ~2 weeks (shared component) |

Same components, different argument, different centrepiece.

---

# PART 1 — SEO SPEC

## The keyword trap on this page — read first

`email automation` and `email automation services` overwhelmingly mean **marketing email**: campaigns, drip sequences, Klaviyo, Mailchimp, HubSpot. That SERP is owned by ESPs and marketing agencies, the searcher wants newsletters, and ranking for it would send you traffic you can't convert and don't want.

**So don't chase the head term.** Target the operational-intent cluster instead, where volume is lower, competition is near zero, and every searcher is describing a problem you actually solve.

## Primary keyword

`inbox automation`

## Ranking targets

| Keyword | Why it's worth targeting |
|---|---|
| `email triage automation` | Exact intent, almost no service pages competing |
| `AI email assistant for business` | Growing fast, currently owned by SaaS tools not builders |
| `shared inbox automation` | Real pain, high intent — teams with a `support@` or `info@` address |
| `automate customer support email` | Commercial intent, e-commerce and services buyers |
| `automatically sort and route emails` | Descriptive long-tail, converts well |
| `email to CRM automation` | Tool-adjacent, bottom-funnel |
| `Gmail automation for business` / `Outlook inbox automation` | Tool-name intent, barely contested |
| `AI email response drafting` | Rising query, and you can answer it honestly |

**The undervalued angle:** `shared inbox automation`. Any team with a `support@`, `info@`, `orders@` or `careers@` address has this problem, knows it's a problem, and has no idea it's solvable by anyone other than buying another helpdesk seat.

## Meta

**Title (57 chars):**
```
Inbox & Email Automation for Busy Teams | Spaciva
```

**Description (151 chars):**
```
We sort, route, and draft replies for the inboxes your team lives in. Nothing
sends without your rules. Fixed price, live in 2 weeks, monitored monthly.
```

## Positioning against the other service pages

Put this on the page in plain words so the four don't cannibalise each other:

> **Email & inbox automation** handles mail that arrives — sorting, routing, drafting, logging.
> **Workflow automation** moves data between tools once the steps are known.
> **Document processing** turns attachments into clean, checked data.
> **AI agents** make judgement calls where the next step isn't fixed in advance.

Also state clearly that this is **not marketing email**. It costs you nothing and it stops the wrong lead booking a call.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` with `priceRange` on the pricing table

## Internal linking

- Section 10 → `/services/workflow-automation`, `/services/document-invoice-processing`, `/services/ai-agent-development`
- Attachment handling in Section 3 → `/services/document-invoice-processing`
- Monthly plan mentions → `/services/maintenance`

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX:** Centred, single column, max-width 780px, no image beside the text — matching Template B. Directly under the CTAs, the **inline before/after strip**: two small inbox panels side by side. Left, a real (anonymised) cluttered inbox. Right, the same inbox sorted into labelled lanes with a small "Needs you: 6" badge.
>
> Use a real screenshot with names blurred. A mocked-up inbox with `John Smith · Re: Meeting` in every row reads as fake instantly, and this is the first thing on the page.

**Eyebrow:** EMAIL & INBOX AUTOMATION

# Your inbox is a queue nobody is managing

Enquiries, orders, invoices, support requests, and internal noise all landing in the same place, sorted by nothing except when they arrived. We build the layer that reads what comes in, files it, routes it to the right person, drafts the replies that are obvious, and logs it where it belongs.

**[Book a 30-minute call]** **[See what we automate →]**

**Proof line:**
```
Most builds live in 2 weeks · From $[X] · Nothing sends without your rules
```

**Before/after strip content:**

| Before | After |
|---|---|
| One inbox. 214 unread. Sales enquiries buried under supplier invoices, newsletters, and internal cc's. Everything read twice — once to triage, once to act. | Sorted on arrival into lanes. Enquiries routed and logged to the CRM. Invoices filed. Newsletters archived. Obvious replies drafted. |
| **Everything looks urgent** | **6 items actually need you** |

---

## SECTION 2 — Sticky section nav

> **UI/UX:** Left rail, sticky from below the hero, ≥1024px only. Highlights on scroll. Hidden on tablet and mobile — do not substitute a horizontal pill bar.

Rail items: What we automate · Before & after · Drafts or sends · How it works · Tools · Pricing · Questions

---

## SECTION 3 — What we automate

> **UI/UX:** Tabbed explorer, four tabs organised by audience so a visitor self-selects in one click. Default to tab one. All panels rendered in the DOM on load and hidden with CSS — lazy-mounting loses the SEO value of the richest keyword section on the page.

**Eyebrow:** WHAT WE AUTOMATE

## Pick the inbox that sounds like yours

### Tab 1 — Agencies and consultancies

**Enquiry capture and routing**
New business emails identified the moment they arrive, enriched, logged to the CRM as a lead, and routed to whoever owns that service line — with a first acknowledgement sent inside a minute instead of whenever someone next opens the inbox.

**Client request triage**
Client mail sorted by account and urgency, with the ones that reference a deadline, a complaint, or a scope change pushed to the top and flagged in Slack.

**Approval and feedback chasing**
Sent work that hasn't been replied to gets followed up automatically on your schedule, in your voice, until someone responds — so nobody has to keep a mental list of who owes you an answer.

**Status replies that write themselves**
"Where are we on X?" arrives, the system pulls the current state from your project tool and drafts the answer for a two-second review.

### Tab 2 — Professional services

**Client intake from email**
Enquiries parsed into a structured record, conflict-check triggered, engagement letter queued, and the client filed into the right matter or job folder from the first message.

**Document chasing**
Missing items tracked per client and chased automatically with escalating reminders — and when documents arrive, they're filed and read rather than sitting as an attachment somebody has to open. *(That extraction step is [document and invoice processing](/services/document-invoice-processing).)*

**Deadline-aware sorting**
Mail mentioning filing dates, renewals, or statutory deadlines surfaced against your calendar rather than treated like everything else.

**Compliance-safe archiving**
Every client email logged to the right matter automatically, so the record is complete without anyone remembering to file it.

### Tab 3 — E-commerce and DTC

**Support inbox triage**
"Where is my order," returns, exchanges, and complaints classified on arrival. Order-status questions answered automatically from your store data. Complaints escalated to a human immediately rather than queued behind them.

**Order and supplier mail**
Confirmations, shipping notifications, and supplier correspondence parsed and pushed into your systems instead of being read by a person and retyped.

**Returns and refund requests**
Validated against your policy, with the straightforward ones drafted for one-click approval and the judgement calls routed to a person with the order history attached.

**Review and escalation detection**
Angry mail spotted by tone and flagged in Slack within seconds, because the cost of a two-day reply to that email is not the same as the cost of a two-day reply to any other email.

### Tab 4 — Sales and internal ops (any team)

**Lead qualification and follow-up**
Inbound replies scored, logged, and sequenced. Out-of-office and bounce replies detected and handled instead of counting as engagement.

**Meeting and calendar handling**
Scheduling threads resolved, invites created, notes and action items filed to the right record after the call.

**Internal request inboxes**
`it@`, `hr@`, `finance@` — requests classified, ticketed, routed, and acknowledged, with the repetitive ones answered from your own documentation.

**Recruitment inbox**
Applications parsed, CVs filed against the right role, acknowledgements sent, and shortlisting queues built without anyone opening 200 attachments.

---

## SECTION 4 — Before and after

> **UI/UX — the signature section of this page.** Full-width split with a visible centre divider. Left column muted (before), right in the accent colour (after). Unlike the Workflow Automation page, which compares three separate processes, this compares **one inbox at three moments of the day** — same component, different content shape, so the two pages don't read as clones.
>
> Keep the "Before" and "After" text labels; don't rely on colour alone.

## One inbox, one day

### 9:00am

**Before** — 60 new messages overnight. Fifteen minutes spent reading everything once just to work out what's actually urgent, and the sales enquiry from 11pm is on the third screen down.

**After** — Six things in the lane marked for you. Everything else is filed, logged, or already acknowledged. The 11pm enquiry got a reply at 11:01pm and is sitting in the CRM.

### 2:00pm

**Before** — An invoice, three newsletters, a supplier update, and a client complaint arrive in the same ten minutes and all look identical in the list.

**After** — The invoice is extracted and posted. The newsletters are archived. The supplier update is filed. The complaint is in Slack with the account history attached, because that one couldn't wait until you next checked.

### 6:00pm

**Before** — Four threads still unanswered because they needed information from another system and nobody had time to go and get it.

**After** — Drafted with that information already pulled in, waiting for a read and a send.

> **Pull-quote beneath the comparison:**
> Nothing here is exotic. It's the sorting your team already does in their head, thirty times a day — the only reason it hasn't been automated is that nobody's had a spare week to write the rules down properly.

---

## SECTION 5 — Does it send, or does it draft?

> **UI/UX:** Tight bordered panel, no icons, generous type. Short section, high importance — this is the objection that kills the deal if it's unanswered, and burying it in the FAQ is the wrong call. Place it immediately after the before/after so it catches people at peak interest.

## You decide what sends itself. We default to nothing.

The fear is reasonable: an automation replying to a client in your name, confidently and wrongly. So the send permission is a setting per message type, and every build starts with all of them off.

**Auto-send** suits mail where being wrong is nearly impossible and being slow is costly: acknowledgements, order status pulled from your own store data, out-of-office handling, internal routing confirmations.

**Draft for review** suits everything with judgement in it. The reply is written, with the relevant context already pulled from your CRM or project tool, sitting in the thread waiting for a read. Five seconds instead of five minutes, and a human still pressed send.

**Never touched** is a valid setting and some clients keep it on their most sensitive accounts permanently. Sorting, routing, and logging still happen — the replies just stay human.

> Every automated message is logged, and you can see exactly what went out, when, and why the system classified it that way. An automation you can't audit isn't a time saving, it's a liability.

---

## SECTION 6 — How it works

> **UI/UX:** Horizontal step rail, four steps across at desktop with numbered nodes and a duration pill under each. Converts to a vertical stack below 900px. Shared component with the Workflow Automation page — reuse it exactly, don't restyle.

## Four steps, about two weeks

**01 — We read your last month of mail** · *2 days*
With your permission and under NDA, we look at what actually arrives: the categories, the volumes, and the replies your team writes over and over. You get that breakdown whether or not you hire us, and it usually surprises people.

**02 — Rules, routing, and tone** · *2 days*
A written map of every category, where it goes, who owns it, and which ones may reply on their own. Your existing replies become the tone reference, so drafts sound like your team rather than like a chatbot.

**03 — Build and shadow-run** · *1 week*
We build it, then run it silently alongside your real inbox without sending anything. You compare what it *would* have done against what your team actually did. Nothing goes live until that comparison looks right to you.

**04 — Live, then tuned** · *ongoing*
Switched on category by category, starting with the safest. Misroutes get corrected and the rules tighten over the first few weeks. The monthly plan covers that tuning, plus new categories as your mail changes.

---

## SECTION 7 — Tools

> **UI/UX:** Logo grid grouped by category, greyscale to colour on hover, with tool names rendered as text beside the logos — real SEO surface for tool-name searches.

## It works inside the inbox you already use

No new platform, no migration, no asking your team to check somewhere else.

**Email and calendar** — Gmail and Google Workspace · Outlook and Microsoft 365 · IMAP · Google and Outlook Calendar
**Shared inbox and helpdesk** — Front · Help Scout · Zendesk · Freshdesk · Intercom · Missive
**CRM and sales** — HubSpot · Pipedrive · Salesforce · Zoho · Close
**Comms and tasks** — Slack · Teams · Notion · Asana · ClickUp · Monday · Airtable
**Commerce and billing** — Shopify · WooCommerce · Stripe · QuickBooks · Xero
**Automation layer** — n8n · Make · Zapier · custom Python and Node services

**Below the grid, smaller:**
> Using something else? If it has an API, we can almost certainly connect it. If it doesn't, we'll tell you before you commit rather than after.

---

## SECTION 8 — Pricing

> **UI/UX:** Three-column table, middle column emphasised as the common choice. Publishing numbers filters out price-shoppers before they book a call — almost no competing agency does it.
>
> **If real prices aren't confirmed, delete this section** rather than publishing ranges you can't honour.

## What it costs

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.

### Single inbox — from $[X]
One inbox, sorted, routed, logged, with drafting on your highest-volume message types. Typically live in about two weeks.
*Good for: proving it works on the inbox that hurts most.*

### Multi-inbox setup — from $[Y]
Several inboxes or a shared team inbox, with routing between people, escalation rules, CRM and helpdesk integration, and drafting across categories. Usually three to four weeks.
*Good for: teams where `support@` or `info@` is a genuine bottleneck.*

### Ongoing inbox partner — from $[Z]/month
A standing monthly plan: monitoring, rule tuning as misroutes surface, tone updates, and new categories as your mail changes.
*Good for: teams whose inbox keeps evolving — most clients end up here.*

**Beneath the table:**
> Every build includes monitoring and tuning for the first month. After that it's $[M]/month, and you can stop any time — you keep the code and the rules either way.

---

## SECTION 9 — Where it goes wrong

> **UI/UX:** Plain two-column list, no icons, tight. A supporting note, not a centrepiece — style it accordingly and keep it short.

## Three ways inbox automation goes bad

**Letting it send too early**
The fastest way to lose confidence in a system is one embarrassing auto-reply in week one. Shadow-running first and switching on category by category costs a few extra days and prevents exactly that.

**Rules nobody revisits**
Mail changes. A new supplier, a new product, a new type of complaint, and suddenly a category that worked perfectly is misrouting a quarter of the time — silently, because misrouted mail doesn't complain. Tuning isn't an upsell here, it's what keeps the thing accurate.

**Automating a reply that should be a conversation**
Some emails deserve a person, and drafting a polished reply to a genuinely upset customer in four seconds is worse than taking an hour. We'll tell you which categories those are, and we'd rather leave them alone than automate them badly.

---

## SECTION 10 — Which service do you need?

> **UI/UX:** Three compact cards side by side, each linking out. Prevents the service pages competing, disambiguates the marketing-email searcher, and signals honesty by pointing some visitors elsewhere.

## This isn't marketing email

To be clear about what this page is and isn't:

**Email and inbox automation (this page)** — mail that *arrives*. Sorting, routing, drafting, logging, chasing. The inbox your team works in every day.

**Marketing email** — campaigns, newsletters, and drip sequences to a list. That's a different discipline with different tools, and it isn't what we do. If that's what you're after, a marketing agency or your ESP will serve you better than we will.

**[Workflow automation](/services/workflow-automation)** — if the real problem isn't the inbox but what happens after it: data moving between your tools once the steps are known.

> **Honest answer:** for a lot of teams, the inbox is a symptom. The mail piles up because the process behind it is manual. We'll say so on the call if that's what we see — automating the queue for a process that shouldn't exist just makes it tidier.

---

## SECTION 11 — FAQ

> **UI/UX:** Two-column plain list, no accordion — matching Template B. All answers visible on load, which is better for crawlers and AI search. Add FAQPage schema.

## Common questions

**Will it send emails without me seeing them?**
Only for the categories you explicitly switch on, and every build starts with all of them off. Most clients auto-send acknowledgements and status replies, and keep everything with judgement in it as a draft.

**Do you read our email?**
During the two-day assessment, with your permission and under NDA, we look at categories and volumes to design the rules. We don't need to keep a copy, and the running system processes mail inside your own accounts rather than exporting it somewhere.

**Will the replies sound like us?**
They're built from your existing replies, not from a generic template. Tone is part of what gets tuned in the first few weeks, and it's part of what the monthly plan covers afterwards.

**What happens when it misroutes something?**
Misroutes surface in the review lane and get corrected. Each correction tightens the rules. Expect the first two weeks to need more corrections than the two months after that — which is exactly why we shadow-run before switching anything on.

**How long does it take?**
A single inbox is typically about two weeks from kickoff to live. Multi-inbox setups with routing and escalation run three to four.

**What does it cost?**
Single inboxes start at $[X], multi-inbox setups at $[Y], and ongoing plans from $[Z] a month. You get a fixed price in writing before any work starts.

**Does this replace our helpdesk?**
No. If you run Zendesk, Front, or Help Scout, this works inside it — classifying, routing, and drafting rather than replacing the tool your team already knows.

**Can't Gmail filters do this?**
For simple, keyword-based sorting, yes, and if that's all you need we'll tell you on the call. People come to us when the sorting needs to understand what the message actually means, pull context from another system, draft a reply, or log to a CRM — which is where rules-based filters stop.

**Is our email used to train AI models?**
No. We use API tiers with training disabled, or self-hosted models where the data needs to stay inside your environment.

**Who owns what you build?**
You do. It runs in your accounts, on your platforms, with documentation handed over. If you stop working with us, it keeps running and your team can maintain it.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US and UK working hours. A written update every Friday plus a short Loom walkthrough, and calls happen in your hours.

---

## SECTION 12 — Closing CTA

> **UI/UX — Template B closes light, not dark.** Bordered or subtly tinted panel with generous padding. Same button style as the other pages, different visual weight.

## Tell us what's in your inbox that shouldn't need a person.

Book a 30-minute call. We'll look at a month of your real mail, show you what share of it is automatable, and give you a fixed price. If the honest answer is that your inbox is fine and the process behind it isn't, we'll tell you that instead.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## Accessibility

- Tabbed explorer needs full keyboard navigation (arrow keys between tabs, correct `aria-selected`) with panels in the DOM on load
- The before/after split must not rely on colour alone — keep the text labels
- Sticky rail needs a skip link and must not trap focus

## Performance

- The hero inbox screenshots are the LCP element. WebP, explicit width and height, preloaded.
- Tool logos as inline SVG or a sprite — six rows of individual image requests is the heaviest thing on the page

## Content risk — read before publishing

The inbox figures in the hero strip and Section 4 (214 unread, 60 overnight, six needing you) are **illustrative, not measured from a client.** They're framed as a scenario rather than a result, which is defensible — but if you have one real number from a real engagement, swap it in and attach the client name. One measured figure beats three plausible ones.

Do not add a headline claim like "handles 80% of your email." You'd be quoting a number that varies enormously by inbox, and Section 5's whole argument is that the split between auto-send, draft, and leave-alone is a decision the client makes, not a percentage you can promise in advance.

## Privacy — get this reviewed before it ships

Section 6 step 01 commits to reading a month of a prospect's mail during a pre-sale assessment. That's a real data-protection commitment for UK and EU buyers, not just a nice offer.

`[Confirm with your own advisor how this is scoped — NDA before access, read-only, no export, defined retention — and make sure the page's wording matches what you actually do. If the assessment is instead done by the client sharing category counts themselves, rewrite step 01 to say that.]`

---

# VALUES YOU MUST SUPPLY

| Placeholder | Appears in |
|---|---|
| `$[X]` — single inbox price | Hero, pricing, FAQ |
| `$[Y]` — multi-inbox price | Pricing, FAQ |
| `$[Z]` — monthly partner price | Pricing, FAQ |
| `$[M]` — maintenance monthly | Pricing footnote |
| `[X]` hours US/UK overlap | FAQ |
| Which model providers and tiers you actually use | FAQ |
| How the pre-sale inbox assessment is really scoped | Section 6, build notes |
| Client logos and names | Trust strip, if added |
| One real anonymised inbox screenshot, before and after | Hero, Section 4 |
