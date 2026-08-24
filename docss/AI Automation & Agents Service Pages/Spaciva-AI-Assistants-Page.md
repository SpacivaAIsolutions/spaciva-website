# Spaciva — AI Assistants Services Page

**URL:** `/services/ai-assistants`
**Layout:** **Template A — Narrative / Credibility**
**Status:** Website-ready content + UI/UX build spec + SEO notes
**Research date:** 24 August 2026 — see verification note in Part 3

---

# READ THIS BEFORE BUILDING THE PAGE

## You have a cannibalisation problem, and it needs a decision

You already have two pages in this territory:

- **AI Agent Development** — support agents, lead intake agents, document agents, ops agents
- **AI Chatbots (RAG)** — answering from your data, including an internal knowledge base chatbot

A generic "AI Assistants" page overlaps both. Three pages competing for overlapping queries means Google picks one and dilutes the others, buyers can't tell which to read, and you've spent three times the effort for less than one page's worth of ranking.

**The fix is a scope decision, and it has to be made before a word ships.** Here's the line I'd draw, because it's both defensible in search and true in practice:

| | Answers | Prepares | Acts |
|---|---|---|---|
| **Chatbot (RAG)** | ✅ from your documents | — | — |
| **AI Assistant** *(this page)* | ✅ | ✅ drafts, summarises, researches, assembles | — *a human does* |
| **AI Agent** | ✅ | ✅ | ✅ end to end, unattended |

> **An assistant works alongside a person. An agent works instead of one.**

That single sentence is the page's spine, it's honest, and it gives each of the three pages a distinct query cluster. **This page is scoped to internal, employee-facing assistants** — the copilot your team works with — which is territory neither existing page claims.

If you'd rather not maintain three pages, the alternative is to fold this into AI Agent Development as a section. That's a legitimate choice. What isn't legitimate is publishing all three without deciding which owns what.

## Why Template A

The objection here is *"we already pay for ChatGPT and Copilot — what would we be buying?"* That's a credibility question, not an operational one.

**How it stays distinct from your other three Template A pages:**

| | AI Agent Dev | Document Processing | WhatsApp | This page |
|---|---|---|---|---|
| Signature section | Why projects fail | How accurate is it | Is this still allowed | **What ChatGPT can't do for you** |
| Second heavy section | — | Security & data | Meta's cost model | **What it can see** |
| Hero right column | Screenshot | Doc → fields | WhatsApp thread | **Slack thread with a person in it** |

---

# PART 1 — SEO SPEC

## Primary keyword

`custom AI assistant development`

The head term `AI assistant` is a product category owned by OpenAI, Microsoft, Google, and Anthropic. You will not rank for it and you shouldn't try. Everything below is the service-intent layer underneath it, where the competition is agencies rather than trillion-dollar platforms.

## Ranking targets

| Keyword | Why it's worth targeting |
|---|---|
| `internal AI assistant for business` | **The core query for this page.** Under-served — vendors sell seats, not builds. |
| `AI assistant for Slack` / `AI assistant for Teams` | Where the assistant actually lives. Low competition, high intent. |
| `custom AI copilot development` | Rising term, agency competition only |
| `AI assistant vs AI agent` | **Comparison intent, and you're already writing the answer.** Cheap to own, links well. |
| `ChatGPT Enterprise alternative for small business` | Problem-aware, budget-conscious, genuinely your buyer |
| `AI assistant that connects to our tools` | Long-tail, describes the exact gap |
| `MCP integration development` | Very low competition, technical buyers, and it's how this is actually built now |
| `AI assistant for operations team` | Function-specific, converts |

**The undervalued angle is `AI assistant vs AI agent`.** It's a question thousands of people are typing into Google and into LLMs right now, almost nobody answers it cleanly, and answering it well earns links, citations in AI search, and a natural path into both this page and your agent page. Build Section 8 to be the best answer on the internet to that question and it will do more for you than the rest of the page combined.

## Meta

**Title (56 chars):**
```
Custom AI Assistants for Your Team's Tools | Spaciva
```

**Description (152 chars):**
```
Generic AI doesn't know your clients, your process, or your data. We build
assistants that do — in Slack, Teams, or your own app. Fixed price.
```

## Positioning against your other pages

Put the table from above on the page, in plain language, in Section 8. It's the disambiguation *and* it's the keyword play.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` with `priceRange` on pricing

## Internal linking

- Section 8 → `/services/ai-agent-development` and `/services/ai-chatbots-rag` (add reciprocal links on both — this is required, not optional, or the three pages compete)
- Data-source mentions → `/services/document-invoice-processing`
- Monthly plan mentions → `/services/maintenance`

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX:** Two-column at desktop, matching Template A. Left: copy. Right: a Slack thread where someone asks *"what's the status on the Kofeko renewal?"* and the assistant answers with the actual contract date, the last invoice, the open support ticket, and who owns the account — then the person replies and acts on it.
>
> The person in the thread is the point. Every competing page in this category shows an AI talking to itself. Show a human using it.
>
> Build it in HTML in your brand colours rather than screenshotting Slack.

**Eyebrow:** AI ASSISTANTS

# An assistant that knows your business, not just the internet

Generic AI is good at everything except the thing you actually need — your clients, your data, your process, your last six months of decisions. We build assistants that sit inside Slack, Teams, or your own tools, connected to the systems your team already works in, so the answer comes back with your context in it.

**[Book a 30-minute call]** **[See what we build →]**

**Proof line:**
```
Live in 3–4 weeks · From $[X] · Runs on your data, in your tools, owned by you
```

---

## SECTION 2 — Trust strip

> **UI/UX:** Thin band under the hero, greyscale logos, single row, client names as text beneath.

**Label:** Building AI systems for teams in the US, UK, UAE, and India

`[Client logos — link at least two to case studies as soon as they exist]`

---

## SECTION 3 — "We already pay for ChatGPT"

> **UI/UX — the signature section, placed high on purpose.** Full-width band, visually heavier than what surrounds it. This is the objection that ends the conversation if it isn't answered in the first screen and a half.
>
> Resist the urge to attack the incumbents. The argument is stronger delivered as agreement — the tools are good, the gap is elsewhere.

## Good. Keep it. This is the part it can't do.

We're not going to tell you the assistant you're already paying for is bad. ChatGPT, Claude, Copilot, and Gemini are genuinely excellent, and if your team is getting value from them, that's money well spent.

But there's a pattern worth naming: across the industry, enterprise assistant seats get bought widely and used thinly. Licences go out to the whole company and a fraction of people open them weekly. Analysts have been unusually blunt about it — value from these deployments is not something the licence guarantees.

The reason isn't the model. It's that a generic assistant doesn't know anything about your business until someone types it in, every single time.

### What actually blocks it

**It doesn't know your context.** Ask it about a client and it knows nothing — not the contract terms, not the open tickets, not what was agreed on the call in March. Your people become the integration layer, pasting background in before every useful question. That's the friction that kills adoption.

**It can't act on your systems.** It can draft an email; it can't check whether the invoice was paid. It can summarise a document you upload; it can't find the document.

**It has no memory of your work.** Every conversation starts from zero. Nothing accumulates.

**It answers everyone identically.** No sense of who's asking, what they're allowed to see, or what their job actually is.

### What we build instead

An assistant with your systems already connected — CRM, project tool, billing, documents, support desk — that knows who's asking and what they're permitted to see, remembers your organisation's context, and lives where your team already works instead of in another tab.

> **The gap in 2026 isn't access to a good model. Everyone has one. The gap is that the good model doesn't know anything about you, and nobody has time to keep telling it.**

---

## SECTION 4 — What we build

> **UI/UX:** Card grid, three across at desktop. Small icon, bold label, three lines. **Organise by function, not by department** — one assistant usually serves several teams, and a department grid implies you'd build six.

**Eyebrow:** WHAT WE BUILD

## Assistants that earn their place

### Account and client assistant
Ask about any client and get the real picture — contract terms, open tickets, last invoice, recent activity, who owns it — assembled from your CRM, billing, and support desk instead of from four browser tabs.

### Operations assistant
"What's blocked this week?" "Which projects are over budget?" "Who's unassigned?" Answered from your project and time-tracking data, on demand, without anyone building a report.

### Sales assistant
Call prep in one message: history, open deals, past objections, what was promised. Follow-ups drafted with the context already in them. Notes filed back where they belong.

### Research and drafting assistant
Proposals, briefs, and reports drafted against your own past work, your templates, and your tone — so the first draft starts from your standards rather than from a blank page.

### Onboarding and internal help assistant
"How do I request time off?" "What's our refund policy?" "Where's the template for this?" Answered from your own documentation, with the source cited so people can verify it.

### Data and reporting assistant
Questions asked in plain language against your database or warehouse, returning a real answer with the query shown — so an analyst isn't the bottleneck on every routine number.

**Below the grid, smaller:**
> Most clients start with one, aimed at whatever question their team asks each other most often. That question is usually obvious once you look at a week of Slack.

---

## SECTION 5 — What it can see

> **UI/UX — the second heavy section.** Full-width band. A simple permissions diagram would work harder here than any other graphic on the page: one assistant, three people, three different views of the same data.
>
> This is objection number two, and for anyone with HR data, client contracts, or salary information in scope, it's objection number one.

## The assistant should not know more than the person asking

The fastest way to create a problem is to connect an assistant to everything and let it answer everyone identically. Someone asks an innocent question and gets back a number from a document they were never meant to open.

**Permissions mirror your existing ones.** The assistant checks who's asking and respects the access they already have in the underlying system. If a person can't open the document, the assistant won't summarise it for them.

**Sources are scoped deliberately.** We agree what's in and what's out before building, per source and per group. HR and finance are usually a separate assistant with a separate audience, not a filter on a shared one.

**Answers cite where they came from.** Every response points at its source so a person can verify it. An assistant that can't show its working gets trusted for exactly as long as it takes to be wrong once.

**Everything is logged.** What was asked, what was retrieved, what came back. If a question ever needs auditing, the record exists.

**Your data isn't training anything.** We use API tiers with training disabled, or self-hosted models where the data can't leave your environment. `[Confirm which providers and tiers you actually use before publishing this line.]`

> **Say no to a source rather than filter it later.** A narrower assistant that people trust completely beats a broader one that legal is nervous about.

---

## SECTION 6 — Where it lives

> **UI/UX:** Four cards or a simple logo row with labels. Keep it light — this section is short by design and sits between two heavy ones.

## In the tool your team already has open

An assistant in another tab is an assistant people forget. The channel matters as much as the capability.

**Slack** — a DM, or a bot in the channels where the work already happens
**Microsoft Teams** — same, for Microsoft-based teams
**Your own app or internal tool** — embedded where your staff already work
**Browser extension** — context-aware help alongside whatever they're looking at
**Email and WhatsApp** — for people who won't adopt a new interface, and there's always someone

**Connected to:** HubSpot · Salesforce · Zoho · Pipedrive · Notion · Google Workspace · Microsoft 365 · SharePoint · Asana · ClickUp · Jira · Linear · Zendesk · Freshdesk · Intercom · Stripe · QuickBooks · Xero · Shopify · Postgres · MySQL · BigQuery · your own API

**Below, smaller:**
> Tool integrations are increasingly built on the Model Context Protocol, which is becoming the standard way assistants connect to business systems. Where a system supports it, we use it — it means fewer bespoke connectors to maintain and less work if you change models later.

---

## SECTION 7 — How it works

> **UI/UX:** Vertical timeline with connecting rule — the shared Template A component. Large light-weight numerals, stacks to cards on mobile.

## From one question to something your team uses daily

**01 — Find the question worth answering** · *2 days*
We look at what your team asks each other repeatedly, and how long each answer currently takes to assemble. The best first assistant is almost always obvious from a week of Slack history. You get that shortlist whether or not you hire us.

**02 — Scope the sources and the permissions** · *2 days*
Which systems it reads, who can ask what, what's deliberately excluded. Agreed in writing before anything is connected.

**03 — Build and connect** · *1–2 weeks*
Integrations, retrieval, permission checks, and the interface it lives in. Tested against real questions from your real data.

**04 — Pilot with a small group** · *1 week*
Live to five or ten people first. We watch what they ask, what it gets wrong, and what they stop asking it. Bad answers at ten users are cheap. The same answers at a hundred users lose you the rollout permanently.

**05 — Expand, then tune** · *ongoing*
Sources added, gaps closed, and the questions it can't answer tracked as a coverage list rather than ignored. Monthly review of what got asked and what failed. Models change, your data changes, and an assistant nobody tunes gets quietly worse.

---

## SECTION 8 — Assistant, chatbot, or agent?

> **UI/UX:** Three cards side by side, equal visual weight, two of them linking out. **This is the highest-leverage section on the page** — it's the disambiguation, it's the internal linking, and it targets a comparison query with real volume and almost no good answers.
>
> Give it a proper H2 with the comparison phrasing in it, keep it in plain text out of any accordion, and make it the best answer to this question anywhere on the web. It's the section most likely to get cited in AI search.

## AI assistant vs AI agent vs chatbot — what's the actual difference?

The terms get used interchangeably by vendors, which is convenient for them and expensive for you. Here's the distinction that matters when you're deciding what to build.

**A chatbot answers.** Ask a question, get an answer from a defined body of content. One job, done reliably, usually customer-facing. → *[RAG-powered chatbots](/services/ai-chatbots-rag)*

**An assistant prepares.** Multi-turn, conversational, connected to your systems, working alongside a person who reviews and acts. It drafts the email, assembles the brief, pulls the numbers — and a human decides what to do. Internal, usually. *(This page.)*

**An agent acts.** It completes the task end to end without waiting for a person: reads the invoice, validates it, posts it, files it. More capable, more expensive, and it needs far more testing, because a mistake becomes an action rather than a suggestion. → *[AI agent development](/services/ai-agent-development)*

**The practical difference is where the human sits.** With an assistant, the person is the last step. With an agent, the person is the exception handler. That one design choice drives cost, build time, testing burden, and risk more than any other decision you'll make.

> **Honest answer:** we start most clients on an assistant. It's cheaper, it's safe by construction because a person approves everything, and after a month of use you can see exactly which requests are so repetitive and so low-judgement that they should become an agent. That's a far better basis for the decision than guessing upfront — and it's why the assistant usually pays for the agent.

---

## SECTION 9 — Why assistants get abandoned

> **UI/UX:** Plain two-column list, no icons, tight. Deliberately lighter than the AI Agent page's failure section, which is a full styled treatment — the failure mode here is adoption, not engineering, and the styling should reflect the different weight.

## Four reasons nobody uses the assistant you built

**It was wrong once, early**
Trust is asymmetric. One confidently wrong answer in week one costs more than fifty good ones earn. Pilot small, cite sources, and let it say it doesn't know.

**It lives somewhere nobody goes**
A brilliant assistant behind a link on the intranet gets used twice. The channel isn't a detail, it's most of whether this works.

**It can't do the specific thing people wanted**
Teams have one or two questions they actually want answered. If those two aren't covered, general capability doesn't compensate. Find the real questions first.

**Nobody owned it after launch**
Sources go stale, systems change, coverage gaps never get closed, and it degrades until people stop bothering. This is the part most vendors skip and it's why we scope the monthly plan from day one.

---

## SECTION 10 — Pricing

> **UI/UX:** Three columns, middle emphasised. Publishing numbers filters out price-shoppers before they book a call.
>
> **If real prices aren't confirmed, delete this section** rather than publishing ranges you can't honour.
>
> **Model usage costs are separate and must be stated.** An assistant used daily by fifty people has a real running cost, and a buyer who discovers that in month two is a buyer you've lost.

## What it costs

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.

### Single assistant — from $[X]
One assistant, two or three connected sources, in Slack or Teams, with permissions and source citing. Typically live in three to four weeks.
*Good for: proving it works on the question your team asks most.*

### Multi-source assistant — from $[Y]
Deeper integration across your CRM, project, billing, and document systems, with role-based permissions and multiple audiences. Usually five to seven weeks.
*Good for: teams where the answer genuinely lives across four systems.*

### Ongoing assistant partner — from $[Z]/month
A standing monthly plan: coverage-gap review, new sources, prompt and retrieval tuning, and model updates as they ship.
*Good for: anyone running this daily — which is the point of building it.*

**Beneath the columns:**
> Model usage is billed separately and depends on how much your team uses it. We estimate it with you before you commit, and it's typically a fraction of what the equivalent number of enterprise assistant seats would cost. Every build includes tuning for the first month; after that it's $[M]/month and you can stop any time — you keep the code either way.

---

## SECTION 11 — FAQ

> **UI/UX:** Accordion matching Template A, first item open by default — and the first item should be the ChatGPT question, because that's what people arrive with. Add FAQPage schema.

## Common questions

**We already pay for ChatGPT or Copilot. Why would we need this?**
Keep them — they're good at general work. What they can't do is answer questions about your clients, your projects, and your data without someone pasting the context in first. We build the layer that closes that gap, and it usually costs less than adding enterprise seats for everyone.

**What's the difference between an assistant and an agent?**
An assistant prepares work and a person acts on it. An agent completes the task itself. Assistants are cheaper, faster to build, and safe by construction because a human approves everything. Most teams should start there.

**Can it see things people shouldn't?**
Not if it's built properly. Permissions mirror the access people already have in the underlying systems, sources are scoped deliberately before we build, and sensitive areas like HR and finance are usually a separate assistant with a separate audience rather than a filter on a shared one.

**Is our data used to train AI models?**
No. We use API tiers with training disabled, or self-hosted models where the data needs to stay inside your environment.

**How accurate is it?**
It answers from your own sources and cites them, so people can verify rather than trust blindly. It's built to say it doesn't know rather than guess — an assistant that admits gaps gets used, and one that invents answers gets abandoned after the first bad week.

**Where does it live?**
Slack or Teams for most teams, since that's where the work already happens. It can also sit in your own app, a browser extension, email, or WhatsApp.

**How long does it take?**
Three to four weeks for a first assistant with two or three sources. Five to seven for a deeper multi-system build.

**What does it cost to run?**
Model usage is billed on how much your team uses it, separately from the build. We estimate it with you upfront so there are no surprises, and for most teams it's well below the cost of enterprise assistant seats across the company.

**What if we change AI models later?**
We build the integration layer separately from the model, increasingly on the Model Context Protocol, so switching models doesn't mean rebuilding the connections. This field moves fast enough that designing for it is just sensible.

**Who owns what you build?**
You do. Code, prompts, integrations, and documentation transfer to you on final payment. It runs in your accounts. If you stop working with us, it keeps running.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US and UK working hours. A written update every Friday plus a short Loom walkthrough, and calls happen in your hours.

---

## SECTION 12 — Closing CTA

> **UI/UX:** Full-bleed dark band, matching Template A. Headline, one supporting line, single primary button. No secondary link, no email capture.

## What does your team keep asking each other?

Book a 30-minute call. We'll find the question your team assembles by hand most often, tell you what it would take to answer it automatically, and give you a fixed price. If a tool you already pay for would do it, we'll tell you that instead.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## Verification before publishing

The competitive landscape in Section 3 was researched on **24 August 2026**. Two rules:

1. **Do not publish vendor seat counts, adoption percentages, or ARR figures.** Sources conflict materially on these — reported paid Copilot seat numbers vary by a factor of two depending on who's counting — and they age within a quarter. The page makes the adoption argument qualitatively, which is defensible and doesn't rot. If you want to make it a hard claim, cite Gartner's 2026 assessment directly with a link and a date, and diarise a review.
2. **Check product names before publishing.** This category renames things constantly. A stale product name on the one page where informed buyers land is expensive.

**Set a six-month reminder** to review Sections 3 and 6.

## Internal linking — this is load-bearing

Section 8's links to the agent and chatbot pages are not optional, and **the reciprocal links must be added to those pages in the same release.** Three pages in overlapping territory without explicit cross-linking is how you end up with all three ranking badly. Ship the links or don't ship the page.

## Accessibility

- Build the hero Slack thread in HTML with sensible reading order, not as an image
- The permissions diagram needs a text alternative explaining the rule, not a filename
- FAQ accordion: correct `aria-expanded`, all answers in the DOM on load
- Section 8 must be plain text outside any accordion — it's the section most likely to be extracted by AI search, and content behind JS-dependent reveals is a risk

## Performance

- Hero built in HTML and CSS, not screenshotted — sharper, lighter, accessible
- Integration logos as inline SVG or a sprite; Section 6 has a long list

## Trademark

ChatGPT, Copilot, Claude, and Gemini belong to their respective owners. Section 3's argument works better as agreement than attack — keep the framing generous. Comparative claims about named competitors are also the fastest route to a complaint, and the page doesn't need them.

## Content risk

Don't claim a time saving ("saves each employee 5 hours a week") without a measured figure from a real engagement. Those numbers are vendor marketing, and citing one undermines a page whose whole argument is that the industry oversells this.

Don't imply the assistant will replace headcount. It's not what it does, it's not what you should sell, and it poisons internal adoption before launch — the people who need to use the thing will have read the page too.

---

# VALUES YOU MUST SUPPLY

| Placeholder | Appears in |
|---|---|
| `$[X]` — single assistant price | Hero, pricing, FAQ |
| `$[Y]` — multi-source price | Pricing |
| `$[Z]` — monthly partner price | Pricing |
| `$[M]` — maintenance monthly | Pricing footnote |
| `[X]` hours US/UK overlap | FAQ |
| Which model providers and tiers you actually use | Section 5, FAQ |
| A realistic model-usage cost range for a typical team | Pricing footnote |
| Client logos and names | Trust strip |
| The scope decision from Part 0 — confirmed and applied to all three AI pages | Everywhere |
