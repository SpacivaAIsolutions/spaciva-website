# Spaciva — WhatsApp Automation Services Page

**URL:** `/services/whatsapp-automation`
**Layout:** **Template A — Narrative / Credibility**
**Status:** Website-ready content + UI/UX build spec + SEO notes
**Research date:** 24 August 2026 — see the verification note in Part 3 before publishing

---

## Read this first — two things changed the shape of this page

**1. Meta banned general-purpose AI assistants from the WhatsApp Business API on 15 January 2026.** ChatGPT, Copilot, and Perplexity were all removed from the platform. Business automation — support, orders, bookings, notifications — remains explicitly permitted.

Half your prospects have read a headline saying "Meta bans AI chatbots on WhatsApp" and quietly concluded this whole category is dead. **Answering that misconception clearly is the single highest-value thing this page can do**, both for conversion and for search. Almost nobody is answering it from the position of a builder.

**2. Meta is charging for service messages from 1 October 2026** — about five weeks from now. Free-form replies inside the 24-hour customer service window have been free since November 2024. From October they're billed per message, at the same rate as a utility template in the recipient's country, with no volume discount. Utility templates sent inside the window also become chargeable. Meta's own Business Agent is billed on tokens instead.

This is a live, dated, unsolved problem for every business running WhatsApp support today, and it lands in five weeks. A page that helps a buyer model that change before it hits will outrank and out-convert every "WhatsApp automation services" page written before July 2026.

**Publish this page before 1 October.** Its value halves the day the change stops being news.

---

## Why Template A, not B

The buyer here is not asking "what does my week look like?" They're asking two credibility questions: *"am I even allowed to do this anymore?"* and *"what is this actually going to cost me once Meta's fees are on top?"*

That's Template A — narrative, credibility-first, dark bands, vertical timeline, accordion FAQ.

**How it stays distinct from the AI Agent and Document Processing pages inside the same template:**

| Element | AI Agent Dev | Document Processing | This page |
|---|---|---|---|
| Hero right column | Product screenshot | Document → fields visual | Live WhatsApp thread mockup |
| Signature section | "Why projects fail" | "How accurate is it, really" | "Is this still allowed?" |
| Second heavy section | — | Security & data handling | Meta's cost model + the October change |
| Pricing | Hero line + FAQ | Three columns | **Two blocks — Meta's fees, then ours** |

The two-block pricing is genuinely new, and it's justified: on this page the platform cost isn't a footnote, it's most of what a buyer is trying to work out.

---

# PART 1 — SEO SPEC

## Geography — be honest about who this page attracts

WhatsApp is dominant in the UAE and India, strong in the UK, and comparatively weak in the US. This page will pull traffic that skews **UAE, India, and UK**, plus US brands selling into Latin America, MEA, and South Asia.

That's not a problem, but it does mean this is the one service page where the visitor mix will differ from the rest of the site. Don't judge it against the US/UK conversion rates of your other pages, and consider a UAE-specific angle in the copy since that's your strongest overlap between "WhatsApp is the default channel" and "clients who pay in dollars."

## Primary keyword

`whatsapp automation services`

## Ranking targets

| Keyword | Why it's worth targeting |
|---|---|
| `whatsapp business api integration` | Higher volume, technical buying intent |
| `is whatsapp banning ai chatbots` / `whatsapp ai chatbot ban 2026` | **Timely, high volume, near-zero competition from service providers.** Own this. |
| `whatsapp service message charges october 2026` | Dated, urgent, and nobody has covered it as a service page |
| `whatsapp chatbot for ecommerce` | Commercial intent, your DTC niche |
| `whatsapp automation for customer support` | Core use case |
| `whatsapp business api cost` | Answer with real structure; competitors give vague ranges |
| `whatsapp abandoned cart automation` | Shopify buyers, high intent |
| `whatsapp crm integration` | Tool-adjacent, bottom-funnel |
| `whatsapp business api provider` / `bsp` | Buyers actively shopping |

**The two undervalued angles are both news-driven:** the January AI ban and the October service-message charge. Every competing page on this keyword was written before either happened. That's a real, temporary, entirely winnable gap — and it's why this page needs to ship soon.

## Meta

**Title (59 chars):**
```
WhatsApp Automation & Business API Development | Spaciva
```

**Description (155 chars):**
```
WhatsApp support, order updates, and lead capture built on the official Business
API — compliant, integrated with your systems, and costed before you commit.
```

## Positioning against the other service pages

State the distinction on the page:

> **WhatsApp automation** is a channel — the same automation logic, delivered where your customers already are.
> **Email & inbox automation** handles the mail that arrives.
> **Workflow automation** moves data between tools once the steps are known.
> **AI agents** make judgement calls where the next step isn't fixed in advance.

Most WhatsApp projects are one of the other three with WhatsApp as the front door. Say that — it reframes the buyer's question from "should I get a WhatsApp bot" to "what should it be connected to," which is a better conversation and a bigger project.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` with `priceRange` on the pricing section

Add `dateModified` and keep it current. Two sections on this page are date-sensitive, and freshness signals matter disproportionately for query clusters where the underlying facts changed this year.

## Internal linking

- Section 11 → `/services/workflow-automation`, `/services/ai-agent-development`, `/services/email-inbox-automation`
- Monthly plan mentions → `/services/maintenance`
- Consider a companion blog post on the October pricing change linking up to this page — it will attract links this page won't

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX:** Two-column at desktop, matching Template A. Left: copy. Right: a realistic WhatsApp thread — customer asks where their order is, the reply comes back with real tracking detail, then a second message escalating a complaint to a named human. Show both halves: automated where it's obvious, human where it matters.
>
> Build it as HTML and CSS in your own brand colours rather than pasting a WhatsApp screenshot. It renders sharper, it's accessible to screen readers, and it avoids using Meta's interface as your marketing asset.

**Eyebrow:** WHATSAPP AUTOMATION

# Your customers are already on WhatsApp. Your systems aren't.

We build WhatsApp automation on the official Business API — order updates, support replies, lead capture, appointment reminders — connected to your store, your CRM, and your helpdesk. Compliant with Meta's rules, costed before you commit, and monitored after launch.

**[Book a 30-minute call]** **[See what we build →]**

**Proof line:**
```
Live in 3–4 weeks · From $[X] · Official Business API, no unofficial workarounds
```

---

## SECTION 2 — Trust strip

> **UI/UX:** Thin band under the hero, greyscale logos, single row, client names as text beneath. An unlabelled logo row is unverifiable.

**Label:** Building automation for teams in the UAE, UK, US, and India

`[Client logos — link at least two to case studies as soon as they exist]`

---

## SECTION 3 — "Didn't Meta ban AI on WhatsApp?"

> **UI/UX — the signature section of this page, and it goes high on purpose.** Full-width band, visually heavier than what surrounds it. This is the objection that stops people before they read anything else, and it's the reason a proportion of your market has stopped looking for this service entirely.
>
> Keep the dates visible and specific. Precision is the proof here — a vendor who can tell you the exact date and the exact wording is a vendor who reads the policy.

## Meta banned general-purpose assistants. Business automation was never in scope.

In October 2025 Meta updated the WhatsApp Business Solution terms to prohibit AI providers from using the platform where an open-ended AI assistant is the primary thing being offered. The clause took effect on **15 January 2026**, and ChatGPT, Copilot, and Perplexity all left the platform on that date.

Here's what got lost in the headlines: the restriction targets **standalone assistants distributed through WhatsApp as a product**. It does not touch a business automating its own customer conversations.

### What is no longer allowed

An open-domain chatbot that answers arbitrary questions, writes content, or acts as a general conversation companion, where that assistant is the product being delivered over WhatsApp. If someone offers you "ChatGPT on WhatsApp" as a service in 2026, they're selling you something Meta removed.

### What is explicitly allowed

Automation that serves your own customers as part of a real business relationship — order confirmations and shipping updates, support triage and replies, appointment booking and reminders, lead qualification, authentication codes, and AI used to understand and route those conversations. Meta's own framing is that the Business API exists for businesses to talk to their customers, and that's exactly what this is.

### And the unofficial route was never allowed

Reverse-engineered libraries and browser automation that drive a personal WhatsApp account have always breached Meta's terms. They're cheaper right up until the number is permanently banned, and you can't appeal your way back to a number your customers have saved. **We only build on the official Business API.** If a cheaper quote you've received doesn't say which BSP it runs through, that's the question to ask.

> **The short version: if the AI is incidental to a genuine business service, you're fine. If the AI is the service, you're not. Everything on this page is the first kind.**

---

## SECTION 4 — What we build

> **UI/UX:** Card grid, three across at desktop. Small icon, bold label, two to three lines. Consistent icon stroke weight throughout.

**Eyebrow:** WHAT WE BUILD

## The conversations worth automating

### Order and delivery updates
Confirmations, dispatch notices, and tracking sent automatically from your store, with the customer able to reply in the same thread and reach a person if something's wrong.

### Support triage and replies
Incoming questions classified on arrival. Order status answered from your own data. Returns and refunds handled against your policy. Complaints escalated to a human immediately, with the account history attached.

### Abandoned cart and re-engagement
Recovery messages that respect opt-in and Meta's marketing category rules, sent through approved templates rather than the workarounds that get numbers restricted.

### Lead capture and qualification
Enquiries from Click-to-WhatsApp ads, website widgets, and QR codes captured, qualified through a short structured conversation, and logged straight to your CRM with the transcript attached.

### Appointment booking and reminders
Slots offered, booked into your calendar, confirmed, and reminded — with rescheduling handled in the thread instead of over three phone calls.

### Payment and invoice notifications
Payment links, reminders, and receipts sent as utility messages, with status written back to your billing system.

### Internal alerts and approvals
Escalations, stock alerts, and approval requests pushed to the people who need them, in the app they already have open.

### Two-way CRM and helpdesk sync
Every conversation logged against the right contact in HubSpot, Zoho, Salesforce, or your helpdesk — so WhatsApp stops being the one channel with no record.

**Below the grid, smaller:**
> Not sure which of these applies? Bring us a month of your WhatsApp history and we'll tell you which conversations are automatable, which shouldn't be, and roughly what each would cost to run.

---

## SECTION 5 — The rules that actually govern this

> **UI/UX:** Two-column list, tight, no icons. Deliberately plain — this section's job is to demonstrate command of the detail, and decoration works against that. Keep it scannable.

## Six constraints most vendors don't mention until after you've signed

WhatsApp is not an open channel you can broadcast on. Meta enforces these, and a build that ignores them gets rate-limited or banned rather than politely warned.

**Opt-in is mandatory**
You need documented consent before messaging someone. It can be collected at checkout, on a form, via a QR code, or through a Click-to-WhatsApp ad, but it has to exist and it has to be recorded. We build the capture and the audit trail as part of the project, not as an afterthought.

**The 24-hour customer service window**
When a customer messages you, a 24-hour window opens in which you can reply freely. Outside it, you can only reach them with a pre-approved template. This single rule shapes the entire design of a WhatsApp automation, and any vendor who hasn't mentioned it hasn't designed one.

**Templates need approval, and category matters**
Outbound messages use templates that Meta reviews. They fall into marketing, utility, and authentication categories, and the category drives both what's permitted and what it costs. Getting an order update classified as marketing rather than utility is an expensive mistake, repeated at volume.

**Quality rating and messaging limits**
Meta scores your number on how recipients react. Blocks and spam reports push the rating down, which caps how many people you can message per day. A campaign that annoys people doesn't just underperform — it reduces what you're allowed to do next month.

**Business verification and display name**
Sending at scale requires a verified Meta Business account, and your display name has to meet Meta's rules. The green verified badge is separate again, discretionary, and not something any vendor can promise you.

**One number, one platform**
A number connected to the Business API can't also be used in the consumer WhatsApp Business app. Deciding which number to migrate — and what happens to the history on it — is a decision to make deliberately, before anyone starts building.

---

## SECTION 6 — What it costs to run

> **UI/UX — the second heavy section, and the one that will get linked to.** Full-width band. Structure it as: the four categories, then the October change with the date prominent, then the levers. A simple diagram of the 24-hour window with a "free until 1 Oct" marker on it would do more work than any other graphic on this page.
>
> **This section has a shelf life.** Put a visible "last reviewed" date on it and set a calendar reminder to check it quarterly — Meta revises rates roughly every quarter.

## Meta charges you separately, and that's changing on 1 October 2026

Two bills run alongside each other: what Meta charges to deliver messages, and what we charge to build and run the automation. Most vendors quote the second and stay quiet about the first, which is how a project comes in on budget and then costs three times what anyone expected to operate.

### How Meta bills today

Since July 2025, billing is **per message, not per conversation**, and the rate depends on the recipient's country and the message category.

**Marketing** — promotions, broadcasts, cart recovery, win-backs. The most expensive category by a wide margin, and deliberately so. No volume discounts at any scale.
**Utility** — order updates, shipping alerts, appointment reminders, payment confirmations. Far cheaper, with volume tiers that reduce the rate as you grow.
**Authentication** — one-time passcodes and verification. Tightly formatted, cheap, and rule-bound.
**Service** — your free-form replies inside the 24-hour window. Free today. Not from October.

Rates are set per country by the recipient's number, not your location, and Meta revises them roughly quarterly. Your Business Solution Provider adds a markup on top of Meta's rate.

### What changes on 1 October 2026

Meta announced on 1 July 2026 that from **1 October 2026**, service messages become billable. Every free-form reply your business sends inside the 24-hour window — whether typed by a person or generated by a third-party automation — is charged at the same per-message rate as a utility template in that customer's country. There's no volume discount. Utility templates sent inside the window become chargeable too. Meta committed to publishing the country rates by 1 September 2026.

Two consequences worth understanding before you build anything:

**Support-heavy businesses are hit hardest.** If your WhatsApp volume is mostly inbound questions rather than outbound campaigns, almost all of it has been free since November 2024. From October, almost none of it is. Clinics, property managers, and delivery businesses should be modelling this now.

**Reply count becomes a cost, not just a habit.** Splitting an answer across four short messages used to be free and friendly. From October it costs four times what one message costs. Automation design changes accordingly, and a system designed before July 2026 was optimised for a pricing model that no longer exists.

### The levers that actually reduce the bill

**Get the category right.** Order and shipping updates belong in utility, not marketing. Misclassification is the most common and most expensive error we see.
**Design for fewer, better messages.** One complete reply instead of three fragments. Post-October, message count is the bill.
**Use inbound entry points.** Conversations started from a Click-to-WhatsApp ad or a Page CTA button open a 72-hour entry-point window with free delivery, which survives the October change.
**Don't broadcast to people who won't engage.** Blocks and spam reports cost you rate limits as well as goodwill, and you still pay for a delivered message someone reports.

> **We model this with you before you commit.** On the discovery call we take your realistic monthly volumes by category and destination country and produce a running-cost estimate alongside the build quote. If the numbers don't work, that's worth knowing in week one rather than month four.

---

## SECTION 7 — How it works

> **UI/UX:** Vertical timeline with connecting rule — the shared Template A component. Large light-weight numerals. Stacks to cards on mobile.

## From approval to live

**01 — Feasibility and cost model** · *2–3 days*
We map the conversations you want to automate, check them against Meta's category and policy rules, and build the running-cost estimate. You get that model whether or not you hire us.

**02 — Account, number, and verification** · *timeline depends on Meta*
Business verification, choosing and migrating the number, and BSP setup. We handle the submissions; the review timeline belongs to Meta and we won't pretend otherwise.

**03 — Templates and opt-in** · *3–4 days*
Templates written, categorised correctly, and submitted for approval. Opt-in capture built into your checkout, forms, or ads, with the consent record stored properly.

**04 — Build and integrate** · *1–2 weeks*
The conversation flows, the routing logic, the escalation rules, and the connections to your store, CRM, and helpdesk. Tested against real scenarios in a sandbox before a customer ever sees it.

**05 — Launch on a limited audience** · *3–5 days*
Live to a small segment first, watching quality rating, delivery, and how people actually reply. Problems at 200 recipients are cheap. The same problems at 20,000 cost you your messaging limits.

**06 — Monitor, tune, and re-cost** · *ongoing*
Delivery and read rates, quality rating, escalation rates, and spend per category tracked monthly. Templates revised as they underperform, and the cost model revisited when Meta changes its rates — which it does roughly quarterly.

---

## SECTION 8 — What it connects to

> **UI/UX:** Logo grid grouped by category with tool names rendered as text beside the logos. Real SEO surface for tool-name searches.

## WhatsApp is the front door. Your systems are behind it.

A WhatsApp automation that can't see your order data is a chatbot with nothing to say. Everything we build is wired into what you already run.

**Business Solution Providers** — Twilio · 360dialog · Gupshup · WATI · AiSensy · Interakt · direct Cloud API
**Commerce** — Shopify · WooCommerce · Magento · Stripe · Razorpay
**CRM and sales** — HubSpot · Zoho · Salesforce · Pipedrive · Close
**Helpdesk and shared inbox** — Zendesk · Freshdesk · Intercom · Front · Help Scout
**Ops and comms** — Slack · Teams · Notion · Airtable · Google Sheets
**Automation layer** — n8n · Make · Zapier · custom Python and Node services

**Below the grid, smaller:**
> No strong opinion on which BSP to use? We'll recommend one based on your volume, your destination countries, and your markup tolerance — and we'll tell you what each one adds on top of Meta's rate. You contract with them directly, not through us.

---

## SECTION 9 — Where these projects go wrong

> **UI/UX:** Plain two-column list, no icons, tight. A supporting note, not a centrepiece.

## Four ways WhatsApp projects burn money

**Building on an unofficial library**
It's cheaper, it works, and then the number is banned with no appeal. Every contact who saved that number now has a dead line to your business. The saving is real until the day it isn't.

**Treating it as a broadcast channel**
WhatsApp reaches people in a way email doesn't, which is exactly why misusing it is punished. Blocks and spam reports lower your quality rating and cut your daily messaging limit. The channel gets less useful the more you abuse it.

**Automating the conversations that need a person**
A polished automated reply to an angry customer is worse than a slow human one. We'll tell you which categories to leave alone, and we'd rather leave them alone than automate them badly.

**Costing the build and not the run**
A project quoted without a per-message model is a project whose real cost you'll discover in month three. This was survivable when service replies were free. From October it isn't.

---

## SECTION 10 — Pricing

> **UI/UX:** Two blocks, clearly separated — "What Meta charges" pointing back to Section 6, and "What we charge" as three columns with the middle emphasised. The separation is the point: it's the honesty that no competing page on this keyword offers.
>
> **If real prices aren't confirmed, delete the second block** rather than publishing ranges you can't honour.

## What we charge, and what Meta charges

**Meta's message fees are separate and go directly to your BSP**, based on your volumes and destination countries. We model those with you before you commit — see the section above.

Our own pricing is fixed, quoted in writing before we start. No hourly billing, no surprise change orders.

### Starter automation — from $[X]
One use case — order updates, support triage, or lead capture — on the official API, integrated with one system. Includes account setup, template approval, and opt-in capture. Typically live in three to four weeks.
*Good for: proving the channel works before committing further.*

### Full WhatsApp build — from $[Y]
Multiple conversation flows, two-way CRM or helpdesk sync, escalation routing, and campaign templates. Usually five to seven weeks.
*Good for: teams where WhatsApp is already a primary customer channel.*

### Ongoing WhatsApp partner — from $[Z]/month
A standing monthly plan: monitoring, quality-rating watch, template revisions, new flows, and a cost review each time Meta changes its rates.
*Good for: anyone running this at volume — which, given how often the rules change, is most clients.*

**Beneath the columns:**
> Every build includes monitoring and tuning for the first month. After that it's $[M]/month, and you can stop any time — you keep the code and the flows either way.

---

## SECTION 11 — Is WhatsApp the right channel?

> **UI/UX:** Three compact cards side by side, each linking out. Points some buyers away from you, which is the trust move, and disambiguates visitors who've arrived on the wrong page.

## Sometimes the honest answer is a different channel

**WhatsApp is right when** your customers already message you there, you're selling into markets where it's the default channel — the UAE, India, Latin America, much of MEA and Southeast Asia — and the conversations are transactional enough to survive Meta's rules.

**WhatsApp is questionable when** your customers are mostly US-based and reach you by email, your volume is low enough that per-message fees never justify the build, or what you actually want is broadcast marketing to a cold list, which is precisely what Meta's pricing is designed to discourage.

**And sometimes the channel isn't the problem.** If mail is piling up rather than messages, that's [email and inbox automation](/services/email-inbox-automation). If the bottleneck is what happens after the conversation, that's [workflow automation](/services/workflow-automation). We'll say so on the call.

> **Honest answer:** WhatsApp is a front door. It's only worth building if there's something useful behind it — your order data, your CRM, your booking system. A WhatsApp bot connected to nothing is a slower way to answer questions your website already answers.

---

## SECTION 12 — FAQ

> **UI/UX:** Accordion matching Template A, first item open by default — and the first item should be the ban question, because it's the one people arrive with. Add FAQPage schema; these are close to verbatim what people ask search engines and LLMs about this topic.

## Common questions

**Didn't Meta ban AI chatbots on WhatsApp?**
Meta banned general-purpose AI assistants from the Business API with effect from 15 January 2026 — that's why ChatGPT and Copilot left the platform. Business automation for support, orders, bookings, and notifications remains explicitly permitted. Everything we build falls into the permitted category.

**What's changing on 1 October 2026?**
Service messages — your free-form replies inside the 24-hour customer service window — become chargeable per message, at the same rate as a utility template in that customer's country. Utility templates sent inside the window become chargeable too. If your WhatsApp volume is mostly inbound support, this is a real change to your running costs and it's worth modelling now.

**What does WhatsApp automation cost to run?**
Two separate costs: Meta's per-message fees, which depend on your volumes, categories, and destination countries, and our fixed build fee starting at $[X]. We produce a running-cost model on the discovery call so you see both before committing.

**Do we need the official Business API?**
For anything at scale, yes. Unofficial libraries and browser-automation tools breach Meta's terms and risk a permanent ban on your number with no appeal. We don't build on them at any price.

**Can we message anyone, or do we need permission?**
You need documented opt-in before messaging someone, and outside the 24-hour window you can only reach them through a pre-approved template. We build the opt-in capture and the consent record as part of the project.

**How long does it take?**
Three to four weeks for a first use case, five to seven for a full build. The one variable outside our control is Meta's business verification and template approval timeline, and we'll tell you where a delay is theirs rather than ours.

**Do we have to give up our current WhatsApp number?**
A number on the Business API can't also run in the consumer WhatsApp Business app. Migrating an existing number is possible and often right, but it's a decision to make deliberately — we'll walk through the trade-off before anything is submitted.

**Can you get us the green verified badge?**
We'll prepare and submit the application, but the badge is at Meta's discretion and no vendor can promise it. Anyone who does is telling you something they can't deliver.

**Which BSP should we use?**
It depends on your volume, your destination countries, and how much markup you're willing to pay over Meta's base rate. We'll recommend one and explain why. You contract with them directly, so you're never locked into a provider through us.

**Who owns what you build?**
You do. Code, flows, templates, and documentation transfer to you on final payment. It runs in your accounts, on your BSP contract. If you stop working with us, it keeps running.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US, UK, and Gulf working hours. A written update every Friday plus a short Loom walkthrough, and calls happen in your hours.

---

## SECTION 13 — Closing CTA

> **UI/UX:** Full-bleed dark band, matching Template A. Headline, one supporting line, single primary button. No secondary link, no email capture.

## Find out what WhatsApp would actually cost you before October.

Book a 30-minute call. We'll map the conversations worth automating, check them against Meta's rules, and build you a running-cost model for your real volumes. If WhatsApp isn't the right channel for you, we'll tell you that instead.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## Verification before publishing — do not skip this

Everything in Sections 3, 5, 6 and the FAQ was researched on **24 August 2026** from secondary sources. Before this page goes live:

1. **Confirm the October changes against Meta's own documentation**, not a BSP's blog. Every reseller has an incentive to frame this dramatically.
2. **Check whether Meta published the October country rates**, which it committed to doing by 1 September 2026. If they're out, consider adding two or three real per-message figures for your main destination markets — that would be the most linkable thing on the page.
3. **Re-read the AI Providers clause in the current Business Solution Terms** and make sure Section 3's characterisation still matches the wording. It's the section carrying the most weight, so it's the section that must be exactly right.
4. **Do not publish specific per-message rates in body copy** unless you'll commit to reviewing them quarterly. A stale rate on a services page is worse than no rate. Link to Meta's pricing page instead and keep your own figures in the cost model you build per client.

**Set a recurring quarterly reminder** to review Sections 5 and 6. This page has more time-sensitive content than anything else on the site.

## Accessibility

- Build the hero WhatsApp thread in HTML, not as an image, with proper reading order for screen readers
- The 24-hour window diagram needs a text alternative explaining the rule, not a filename
- FAQ accordion: correct `aria-expanded`, all answers in the DOM on load

## Performance

- No embedded WhatsApp widget scripts on this page. They add third-party JavaScript and a cookie-consent problem to a page whose job is to get a call booked.
- Tool and BSP logos as inline SVG or a sprite

## Trademark and brand safety

WhatsApp and Meta are Meta's trademarks. Describe yourselves as building **on the WhatsApp Business Platform**, never as an official partner, and don't use Meta's logos in a way that implies endorsement. If you become a listed BSP partner later, that's worth a badge — until then, don't imply it. Check Meta's brand guidelines before using the wordmark in your hero.

## Content risk

Do not claim response-rate or open-rate figures for WhatsApp versus email unless you can cite the source on the page. Those numbers circulate widely, are usually vendor marketing, and citing one you can't stand behind undermines a page whose entire argument is that you read the rules more carefully than the competition.

---

# VALUES YOU MUST SUPPLY

| Placeholder | Appears in |
|---|---|
| `$[X]` — starter automation price | Hero, pricing, FAQ |
| `$[Y]` — full build price | Pricing |
| `$[Z]` — monthly partner price | Pricing |
| `$[M]` — maintenance monthly | Pricing footnote |
| `[X]` hours US/UK/Gulf overlap | FAQ |
| Which BSPs you have actually worked with | Section 8 — don't list ones you haven't |
| Client logos and names | Trust strip |
| Confirmed October rates, once Meta publishes | Section 6, optional |
