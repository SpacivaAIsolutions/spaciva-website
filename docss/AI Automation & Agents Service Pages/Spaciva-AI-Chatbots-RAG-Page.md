# Spaciva — AI Chatbots (RAG-Powered) Services Page

**URL:** `/services/rag-chatbot-development`
**Page type:** Primary service page (sits alongside AI Agent Development and Workflow Automation)
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

## Strategic note before you build this

I read the top-ranking pages for this keyword before writing. They are close to interchangeable. Every one of them says "context-aware," "enterprise-grade," "scalable," and "hallucination reduction," lists the same four vector databases, and none of them answers the two questions the buyer actually has: **how accurate will it be, and what will it cost me every month.**

That is the entire opening. This page wins by being the one that answers those two questions in plain text, on the page, before the call.

Three things this page owns that the current page-one results do not:

| Gap on page one | What this page does |
|---|---|
| No page states an accuracy number or how it's measured | Section 7 defines accuracy as a measured number on a test set, before launch |
| Nobody publishes running cost — only build cost | Section 11 separates build price from monthly running cost, including model tokens |
| Almost nobody mentions EU AI Act Article 50 | Section 10 covers it — enforceable since 2 August 2026, and it catches UK firms serving EU users |

### Positioning against your other two service pages

This is the third page in the set and the boundaries have to be visible, or the three pages compete with each other in search and confuse buyers on the site.

| Page | The one-line difference |
|---|---|
| Workflow Automation | The process runs itself. Nobody asks it anything. |
| **AI Chatbots (RAG)** | **It answers questions from your knowledge, with sources, and hands off when it can't.** |
| AI Agent Development | It takes actions inside your systems — updates records, closes tickets, sends things. |

Write it that way everywhere, and put Section 12 (the decision table) on all three pages with the same wording. Buyers arriving from three different keywords should land in the same mental model.

**Everything in `[BRACKETS]` is a real value you must supply.** This page argues that Spaciva is specific where competitors are vague. One fabricated number that falls apart on the first sales call destroys the whole argument.

---

# PART 1 — SEO SPEC

## Primary keyword

`RAG chatbot development services`

Genuinely winnable, unlike `AI agent development services`. The current page-one set is mid-authority offshore development firms writing near-identical copy — not enterprise vendors with domain authority you can't touch. Depth and specificity beat them here.

## Ranking targets

| Keyword | Why it's winnable |
|---|---|
| `RAG chatbot development services` | Primary. Mid competition, commercial intent, weak incumbents |
| `RAG chatbot development company` | Same SERP, vendor-selection intent |
| `custom AI chatbot trained on your own data` | How non-technical buyers actually phrase it |
| `AI chatbot for customer support` | High volume, broad, feeds the funnel |
| `RAG chatbot cost` | You can answer with real numbers. Almost nobody does |
| `RAG vs fine-tuning` | Educational, high-quality traffic, links well to the service |
| `internal knowledge base chatbot` | The internal use case nobody optimises for |
| `chatbot that cites sources` | Very low competition, extremely specific intent |
| `AI chatbot for Shopify store` | DTC niche, low competition |

## Keyword gap worth taking

`chatbot hallucination`, `chatbot accuracy testing`, and `AI chatbot compliance` all have real search volume and near-zero coverage on competitor service pages, because answering them requires admitting the technology fails sometimes. Sections 6, 7, and 10 exist partly to capture these.

## Meta

**Title (59 chars):**
```
RAG Chatbot Development Services | Answers From Your Data
```

**Description (156 chars):**
```
Custom RAG chatbots trained on your own docs — answers with sources, escalation
when unsure, accuracy tested before launch. Live in 3 weeks. Fixed price.
```

**H1:** one only, in the hero.
**H2s:** one per major section. Use the exact phrase "RAG chatbot" in no more than two H2s. The competitor pages repeat it in almost every heading and it reads as stuffing to both people and ranking systems.

## URL choice

Use `/services/rag-chatbot-development`, not `/services/ai-chatbots`. The RAG modifier is the commercial-intent keyword and the differentiator. Put the softer phrasing in the H1 and body instead, so you cover both without a second page.

## Schema

- `Service` — name, provider, `areaServed` (US, GB, IN, AE), `offers` with price range
- `FAQPage` — all eight FAQ entries
- `BreadcrumbList` — Home → Services → RAG Chatbot Development
- `HowTo` on Section 13 (the process) is optional and worth testing

## GEO note (AI search)

More buyers now start this search in ChatGPT or Perplexity than in Google, and this keyword especially — people ask an LLM how to build an LLM chatbot. LLMs cite pages that answer directly and numerically.

Three rules for this page specifically:

1. Pricing and timeline figures stay in plain HTML text. Never in an image, never behind a tab.
2. FAQ answers render in the DOM on page load, hidden with CSS. An accordion that injects text on click is invisible to crawlers and to AI search.
3. Section 12's comparison table stays a real `<table>`. Tables get extracted and cited far more often than the equivalent prose.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX:** Left-aligned, two-column at desktop, stacked at mobile. Left column max-width 620px.
>
> Right column: a real screenshot of a chatbot you've built, **with a visible source citation in the answer**. That single detail communicates the entire value proposition faster than the headline does. If you have no screenshot, run the hero single-column full-width rather than dropping in a stock illustration — this page's whole argument is that you ship real things.
>
> Two CTAs only. Primary solid, secondary outlined or text.

**Eyebrow:** AI CHATBOTS · RAG-POWERED

# A chatbot that answers from your data, not the internet

Generic chatbots guess. We build RAG chatbots grounded in your own documents, policies, and product information — so every answer comes from your content, with the source attached. When it doesn't know, it says so and hands the conversation to a human instead of inventing something.

**[Book a 30-minute call]** **[See how it works →]**

**Proof line, beneath the CTAs (small, muted):**
```
Live in 3 weeks · From $[X] · Every answer traceable to a source
```

---

## SECTION 2 — Trust strip

> **UI/UX:** Thin muted band. Greyscale logos, full colour on hover, client name as text beneath each. An unlabelled logo is unverifiable and reads as decoration.

**Label:** TRUSTED BY TEAMS IN THE US, UK, AND INDIA

`[Client logos with names]`

---

## SECTION 3 — What RAG actually means

> **UI/UX:** Single column, max-width 680px, body type one size larger than the rest of the page. This is the section that earns the educational search traffic and it's the one people read start to finish. No graphic. A three-box "retrieve → augment → generate" diagram is what every competitor uses and it explains nothing to the person signing the invoice.

## Your chatbot should be doing an open-book exam

A standard chatbot answers from memory — whatever it absorbed during training, which never included your refund policy or your product catalogue. When it doesn't know, it produces something fluent and wrong, which is worse than saying nothing.

RAG — retrieval-augmented generation — changes the exam. Before the model answers anything, the system searches your own content, pulls the passages that actually relate to the question, and instructs the model to answer only from those. The answer comes back with the source attached, so anyone can check it.

That's the whole idea. Everything else on this page is engineering in service of one thing: making sure the right passage gets retrieved, every time.

> **The hard part isn't the model. It's the retrieval.**

---

## SECTION 4 — What we build

> **UI/UX:** Four cards, 2×2 desktop, single column mobile, equal height. Each card ends with a "best for" line in a distinct muted style — that line is what turns a capability list into self-qualification.

**Eyebrow:** WHAT WE BUILD

## Four chatbots, four different jobs

Same underlying architecture. What changes is whose questions it answers and what it's allowed to say.

### Customer support chatbot

Trained on your help docs, policies, product pages, and resolved tickets. Answers on your website, WhatsApp, and email, and escalates to your team with the full conversation attached the moment it's out of depth. Nobody has to repeat themselves to a human afterwards.

*Best for: DTC brands and SaaS teams where the same twenty questions consume most of the inbox.*

### Internal knowledge assistant

Your SOPs, HR policies, contracts, and process docs, made askable. Staff get an answer with a link to the source document in seconds instead of interrupting someone or digging through a shared drive nobody has organised since 2023.

*Best for: teams over 20 people where onboarding questions and "where is that document" are a daily tax.*

### Product and sales advisor

Answers detailed pre-purchase questions from your specs, sizing charts, compatibility tables, and shipping rules. Handles the questions that make people abandon a cart, and passes qualified conversations to your sales team with context.

*Best for: e-commerce catalogues with technical products, and B2B sites with long specification pages.*

### Document Q&A chatbot

Point it at a contract set, a research library, a compliance manual, or years of reports, and ask questions in plain language. Every answer cites the document and section it came from, so it stands up to being checked.

*Best for: legal, accounting, consulting, and any team whose knowledge is locked inside PDFs.*

---

## SECTION 5 — Mid-page CTA

> **UI/UX:** Full-width dark or accent band, single CTA, under four lines. This is a rest stop, not a section.

### Not sure a chatbot is the right answer?

We'll tell you on the first call. Sometimes the honest answer is better help docs, or a workflow automation at a tenth of the cost. We'd rather say that than sell you a build.

**[Book a discovery call]**

---

## SECTION 6 — Why most chatbots fail

> **UI/UX:** Four items, two columns. Subtle warning accent on titles, tight body copy. Do not illustrate this section — imagery undercuts its seriousness. This is the moment a sceptical technical buyer decides whether you're a vendor or an engineer.

## Four reasons chatbot projects quietly get switched off

We get called in to fix other people's chatbots often enough to see the same four causes. Only one of them is about the model.

### The search underneath it isn't good enough

When a RAG chatbot gives a wrong answer, the model usually isn't the problem — it answered correctly from the wrong passage, because retrieval handed it the wrong passage. Industry analyses of production RAG systems consistently put retrieval, not generation, as the dominant failure point. `[Link a source here if you cite a figure — an unsourced statistic on a page about groundedness is a bad look.]` Most builds skip straight to plugging in a model and never engineer the search.

### The documents were dumped in, not prepared

Content gets chopped into fixed-size fragments, so a policy gets split down the middle and neither half makes sense on its own. Tables in PDFs turn to noise. The chatbot retrieves half an answer and confidently completes the rest.

### Nobody defined what "working" means

It answered ten questions in the demo, so it shipped. There's no measure of how often it's right in production, which means nobody notices when it starts drifting — until a customer screenshots a wrong answer.

### The content moved and the index didn't

Prices changed, the returns policy was rewritten, three products were discontinued. The chatbot keeps answering from the version it was indexed on. Six months later it's confidently quoting a policy you no longer have. This is exactly why every build we ship comes with a monthly plan.

---

## SECTION 7 — How we build retrieval

> **UI/UX:** Six items, 3×2 desktop. Consistent single-weight icons. Keep the language plain — the person approving the budget usually isn't the person who knows what a reranker is, and the person who does know is checking whether you do.

## What's actually underneath a chatbot you can trust

A demo needs a model and a prompt. Something you can put in front of customers needs six things.

**Documents prepared, not dumped**
We split your content on its real structure — sections, headings, clauses, table rows — so each retrievable piece makes sense on its own. Scanned PDFs get OCR, tables get handled as tables. Most retrieval failures are created here, before a single query is ever run.

**Hybrid search, not just vectors**
We run semantic search alongside keyword search and fuse the results. Vector search alone misses exact terms — SKUs, product codes, policy numbers, names — which is precisely what customers type. Hybrid retrieval is the production default for good reason.

**A reranking pass**
We retrieve a wide candidate set, then rescore it with a cross-encoder reranker so the strongest passages reach the model. It's the single highest-leverage precision improvement available in a RAG pipeline, and it's the step most builds skip because the demo works without it.

**Answers with sources attached**
Every answer links back to the document and section it came from. Your team can audit any response in seconds, and customers can check it themselves. This is also what makes the chatbot defensible when someone disputes what it said.

**It's allowed to say "I don't know"**
We set a confidence threshold and instruct the system to escalate rather than answer below it. A chatbot that says "let me get a human" ten percent of the time is worth more than one that's confidently wrong two percent of the time.

**Logging on every conversation**
Every answer is traceable to the passages and the query that produced it. When something goes wrong you can see exactly why in minutes instead of guessing at a prompt.

---

## SECTION 8 — How we measure accuracy

> **UI/UX:** Give this section real visual weight — bordered container or its own background band. It's the strongest differentiator on the page and no competitor on page one has an equivalent.
>
> **Do not put a specific accuracy percentage here unless you have measured one on a real project.** A stated number you can't defend on the call is worse than no number.

## "Accurate" should be a number, not an adjective

Every chatbot vendor promises accuracy. Ask what they measured and the conversation usually ends. Here's what we measure, before your chatbot talks to anyone.

**We build a test set from your real questions**
Before development starts, we assemble a set of real questions — from your ticket history, your sales inbox, your team — with the correct answer and the document it should come from. Typically [X] questions. This is agreed with you and it becomes the standard the build is held to.

**We score three separate things**
Whether retrieval surfaced the right source. Whether the answer is actually supported by that source, with nothing added. Whether it answered the question that was asked. These fail independently and lumping them into one "accuracy" number hides which part is broken.

**We test the awkward cases deliberately**
Questions with no answer in your content, questions that span two documents, ambiguous phrasing, and questions it shouldn't answer at all. Refusing correctly is a pass, not a failure.

**You see the numbers before launch**
You get the scores and the failure cases in writing before the chatbot is live. If it's not good enough, we fix retrieval — that's what the fixed price covers.

**We keep scoring after launch**
The test set becomes a regression suite. Every time your content changes or we tune the system, we re-run it, so an improvement in one area doesn't quietly break another.

---

## SECTION 9 — Escalation and handoff

> **UI/UX:** Two-column split. Left: the text below. Right: a real screenshot of a handoff arriving in Slack or your helpdesk with the transcript attached. Skip the section rather than use a stock illustration.

## The handoff is a feature, not a failure

The fastest way to make customers hate a chatbot is to trap them in it. We design the exit before we design the conversation.

You choose what triggers a handoff: low confidence, a refund or billing question, a complaint, a named account, legal wording, or someone simply asking for a person. When it fires, the conversation moves to your team in Slack, your helpdesk, or email — with the full transcript, the customer's details, and what the chatbot already checked.

Every escalation gets logged as a coverage gap. Once a month we look at what got escalated, decide what should have been answerable, and add it to the knowledge base and the test set. Coverage goes up over time instead of sitting where it launched.

---

## SECTION 10 — Compliance and data handling

> **UI/UX:** Standard content section, three or four short blocks. Do not turn this into a badge wall — you don't hold SOC 2 and pretending otherwise is the one thing that will lose you a deal outright.
>
> **This section is a competitive advantage right now.** Article 50 has been enforceable since 2 August 2026 and it's absent from nearly every competing service page. Have your lawyer read the final wording — this is regulatory content, not marketing copy.

## What you're required to disclose, and what happens to your data

**Your customers have to be told it's a chatbot**
Under Article 50 of the EU AI Act, in force since 2 August 2026, anyone putting a chatbot in front of people in the EU must make clear they're interacting with an AI system unless it's already obvious. It applies to the business deploying the chatbot, not only to the model provider, and it reaches UK and US companies serving EU users. We build that disclosure into the interface by default rather than treating it as a legal afterthought.

**Your content isn't training anyone's model**
Your documents are indexed for retrieval, not used to train a public model. We work with providers under business terms that exclude your data from model training, and we'll show you exactly which providers are in the pipeline before you sign anything.

**Scoped access and retention you control**
The chatbot reaches only the content its job requires. You decide what's indexed, what's excluded, how long conversation logs are kept, and where they're stored — including EU or US hosting where residency matters.

**Deployable in your own environment**
Where policy requires it, we deploy inside your infrastructure or run open-weight models in a private environment. It costs more to run and we'll be honest about the accuracy trade-off before you choose it.

---

## SECTION 11 — RAG, fine-tuning, or an agent

> **UI/UX:** A real HTML `<table>`, not a card grid. Tables get extracted and cited by AI search far more than equivalent prose, and this one answers a comparison query directly. Horizontally scrollable on mobile with the first column pinned.

## Do you need RAG, fine-tuning, or something else entirely?

Most people arrive asking for one of these when they need another. Here's the honest version.

| You want it to | What you need | Why |
|---|---|---|
| Answer questions from your documents and policies | **RAG chatbot** | Your content changes constantly. RAG reads the current version at query time |
| Sound consistently like your brand, in a specific format | **Fine-tuning, usually with RAG** | Fine-tuning teaches style and structure, not facts |
| Actually do things — update the CRM, issue the refund, book the slot | **An AI agent** | A chatbot answers. An agent acts. Different build, different risk profile |
| Run a process end to end with nobody asking it anything | **Workflow automation** | If there's no conversation, you don't need a chatbot at all |
| Answer questions about one long document, occasionally | **Probably nothing custom** | Paste it into an off-the-shelf tool. We'll tell you when this is the answer |

Fine-tuning on your own documents to "teach it your business" is the most common expensive mistake we see. It's slow, it goes stale the day your content changes, and it doesn't give you sources.

> **Link `AI agent` to `/services/ai-agent-development` and `workflow automation` to the workflow automation page. This table is the natural cross-link hub for all three service pages.**

---

## SECTION 12 — Process

> **UI/UX:** Vertical timeline with connecting rule at desktop, stacked cards at mobile. Large light-weight numerals. Duration in a muted pill under each step title — "how long until I see something" is the unspoken question every offshore buyer has.

## How the build runs

**01 — Scoping and question audit** · *2–3 days*
We look at your real questions — tickets, sales emails, whatever your team keeps getting asked — and your existing content. You find out here whether your documentation is good enough to ground a chatbot, and if it isn't, what the cheapest fix is. If the honest answer is that you don't need this, we'll say so.

**02 — Fixed scope and quote** · *2 days*
A written scope, a fixed price, a delivery date, and the agreed test set, all before any code is written. If the scope moves, we re-quote in writing first.

**03 — Ingestion and retrieval build** · *1–2 weeks*
We prepare your content, build the retrieval pipeline, and tune it against the test set. You get a written update every Friday and a short Loom walkthrough of what moved.

**04 — Accuracy testing** · *2–3 days*
We score it against the full test set, including the questions it should refuse. You see the numbers and the failure cases before it meets a customer.

**05 — Launch on your channels** · *2–3 days*
Deployed to your website, WhatsApp, helpdesk, or Slack, with the AI disclosure in place, escalation routing live, and logging from the first conversation.

**06 — Monthly tuning** · *ongoing*
Real questions reveal what the test set couldn't. We review escalations, close coverage gaps, re-index changed content, and re-run the regression suite. A named engineer stays on it.

**Typical total: about 3 weeks from kickoff to live** for a single chatbot on one content set. Multi-source or multi-language builds run 5–8 weeks.

---

## SECTION 13 — Pricing

> **UI/UX:** Three cards. **The running-cost note beneath them is the most important element in this section** — give it real prominence rather than burying it as fine print. Every competitor hides it, and it's the number that makes buyers trust the rest of the page.
>
> If you can't commit to real figures yet, delete this section and keep the pricing FAQ answer only. A pricing section with vague ranges is worse than none, because it confirms the suspicion that pricing is negotiable and opaque.

## What it costs

Fixed price, quoted in writing before work starts. No hourly billing.

### Single chatbot — from $[X]
One content source, one channel, escalation to your team, accuracy tested against your question set. Live in about three weeks.

### Multi-source build — from $[Y]
Several content sources, multiple channels, CRM or helpdesk integration, multi-language where you need it. Typically 5–8 weeks.

### Monthly plan — from $[Z]/month
Monitoring, re-indexing when your content changes, escalation review, coverage expansion, regression testing, and a named engineer. Every build includes this.

**On running costs, plainly:** beyond our fee, you pay the AI provider for what the chatbot uses. For most support chatbots at typical volumes this is a small monthly figure, and we'll model it against your actual conversation volume before you commit — including how it moves if volume triples. We keep it down by retrieving narrowly and caching common questions rather than sending huge amounts of text to the model on every query. `[Insert a real typical range once you can back it from a live project. Do not estimate here.]`

---

## SECTION 14 — Channels and integrations

> **UI/UX:** Logo grid, greyscale, muted. Keep it factual and short. Only list tools you have actually integrated — a fabricated integration list is the easiest claim on this page to get caught on.

## Where it lives and what it connects to

The chatbot goes where your customers and staff already are, and reads from where your content already lives. Nobody should have to migrate a knowledge base to make this work.

**Channels:** your website, WhatsApp, Slack, Microsoft Teams, your helpdesk, email
**Content sources:** Google Drive, Notion, Confluence, SharePoint, your CMS, Shopify, PDFs, your existing help centre
**Handoff into:** Zendesk, Intercom, Freshdesk, HubSpot, Slack, or a shared inbox

`[Trim this list to what you've genuinely shipped.]`

---

## SECTION 15 — Industries

> **UI/UX:** Four cards, matching the homepage industry set exactly. Do not introduce verticals here that don't appear elsewhere on the site — it undoes the focus the repositioning exists to create.

## Where our chatbots run

The architecture barely changes by industry. What changes is the content it reads and what a human still has to sign off.

**Marketing and creative agencies**
Client-facing chatbots built under your brand for your clients, or internal assistants over your own process docs and account knowledge.

**Professional services**
Document Q&A over contracts, case files, and compliance manuals for consulting, legal, accounting, and recruiting firms.

**E-commerce and DTC**
Support and pre-purchase chatbots grounded in your policies, specs, and shipping rules, connected to Shopify and your helpdesk.

**Startups and SaaS**
Support deflection and internal knowledge assistants for teams shipping fast without the headcount to answer the same question forty times.

---

## SECTION 16 — Why Spaciva

> **UI/UX:** Six items, 3×2. Every claim must be one a competitor cannot copy. No generic virtues — "experienced team," "quality focused," and "client centric" are exactly what made the old homepage section worthless.

## Why teams pick us over a bigger agency

### You see the accuracy before you launch
We agree a test set with you upfront and show you the scores before the chatbot meets a customer. Ask any other vendor what they measured.

### You know the price before you commit
Fixed scope, fixed price, in writing before work starts. Most single chatbots start at $[X]. We carry the risk of our own estimates.

### Live in weeks, not quarters
A single production chatbot typically goes live in about three weeks. Enterprise vendors quote three months because they have three months of process.

### You work with the engineers
No account manager relaying requirements to a team you never meet. You talk to the people building it.

### You own all of it
Source code, prompts, the retrieval pipeline, the test set, and documentation transfer to you on final payment. No proprietary platform, no per-seat licence, no lock-in.

### We stay on
Every build includes a monthly plan: re-indexing, escalation review, coverage expansion, regression testing. It's scoped from day one, not sold to you at handover.

---

## SECTION 17 — Case studies

> **UI/UX:** Two or three cards, each leading with the outcome number as the largest element — larger than the client name. **If you don't have real published case studies, delete this section.** A placeholder proof block is worse than none, and the site already has a dead Case Studies link to fix.

`[Case study cards — Problem → What we built → Outcome with a number]`

---

## SECTION 18 — FAQ

> **UI/UX:** Accordion, first item open. **Render all answers in the DOM on load**, hidden with CSS rather than injected on click. This section is the best GEO asset on the page and answers that only exist after a JS event are invisible to AI search.

## Common questions

**What is a RAG chatbot?**
A chatbot that searches your own documents before answering, then responds only from what it found, with the source attached. A standard chatbot answers from general training data and invents things it doesn't know. RAG gives it your content to read at the moment of the question.

**How much does a RAG chatbot cost?**
Single-source chatbots start at $[X], multi-source builds from $[Y], with a monthly plan from $[Z] for re-indexing, monitoring, and coverage work. You also pay the AI provider for usage, which we model against your real volume before you commit. Fixed price in writing before work starts.

**How long does it take?**
About three weeks from kickoff to live for a single chatbot on one content set. Multi-source, multi-channel, or multi-language builds usually run five to eight weeks, depending mostly on how ready your content is.

**How accurate is it?**
That depends on your content, which is why we measure rather than promise. We agree a test set of real questions upfront, score retrieval and answer quality against it, and show you the numbers before launch. Where it can't answer, it escalates instead of guessing.

**How much documentation do we need?**
Less than most people expect. Existing help docs, policies, past tickets, or product pages are usually enough. If there's a genuine gap, we'll find it in the scoping call and tell you the cheapest way to fill it — often a few hours of writing, not a documentation project.

**Will it make things up?**
It's constrained to answer from retrieved passages and to escalate below a confidence threshold, and every answer carries a source so anything wrong is caught immediately. No system is perfect, and anyone claiming zero hallucination is selling. Ours is designed to fail by saying "I don't know."

**Do we need to disclose that it's an AI?**
If you serve users in the EU, yes — Article 50 of the EU AI Act has required it since 2 August 2026, and it applies to UK and US businesses with EU users. We build the disclosure in by default. Confirm the specifics with your own legal counsel.

**Who owns the code, the prompts, and the index?**
You do. Source code, prompts, retrieval configuration, test sets, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan.

**What happens when our content changes?**
That's what the monthly plan covers. We re-index changed content, review what got escalated, close coverage gaps, and re-run the regression suite. Content drift is the most common reason chatbots quietly stop being useful, so we scope for it upfront.

**How do you work across time zones?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US Eastern and UK working hours. Written update every Friday plus a Loom walkthrough, and video calls in your hours.

---

## SECTION 19 — Closing CTA

> **UI/UX:** Full-bleed dark band. Headline, one supporting line, one button. No email capture form — this page's job is a booked call, and a form is the weaker commitment.

## Tell us what your team keeps getting asked.

Book a 30-minute call. We'll look at your questions and your content, tell you honestly whether a chatbot is worth building, and give you a fixed price if it is.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## Page rhythm

Alternate backgrounds so the scroll has structure: hero (light) → trust strip (muted) → what RAG means (light) → what we build (light, cards) → **mid CTA (dark)** → why chatbots fail (light) → how we build retrieval (muted) → accuracy (light, bordered) → escalation (muted) → compliance (light) → comparison table (muted) → process (light) → pricing (muted) → channels (light) → industries (muted) → why Spaciva (light) → **closing CTA (dark)**.

Only two fully dark bands. More than that and neither reads as a break.

## What makes this visibly different from the other two service pages

All three pages will otherwise look identical, which is a problem for buyers who visit two of them:

- **This page's signature block is the accuracy section (8)** — bordered, numbers-forward, no icons. It has no equivalent on the agent or automation pages.
- **This page uses a real table** (Section 11). The AI Agent page uses cards throughout.
- **This page has a compliance section.** Neither of the others does.
- The AI Agent page leads with what agents *do*. This one leads with an explanation of the *technology*, because the search intent here is more educational.

## Typography

- One H1, in the hero
- Body copy max-width ~680px in single-column sections. Full-width paragraphs on a 1440px screen are the most common readability failure on service pages
- Section intro paragraphs one step larger than card body copy
- The comparison table needs its own type scale — table text at body size is unreadable at six rows

## Accessibility

- Escalation triggers and the comparison table must be readable without colour as the only differentiator
- Accordion items need proper `button` semantics with `aria-expanded`
- If you embed a live chatbot demo widget, it must be keyboard navigable and announce itself to screen readers as an AI assistant — which is also the Article 50 disclosure requirement, so it's two boxes with one build

## Performance

- Screenshots as WebP with explicit width and height to prevent layout shift
- Lazy-load everything below the trust strip
- No above-the-fold JS animation on the hero headline
- If you put a live chatbot widget on this page, defer it until after first interaction. A page about performance-sensitive AI that takes four seconds to load argues against itself

## Internal linking

- "AI agent" in Section 11 → `/services/ai-agent-development`
- "workflow automation" in Section 11 → the workflow automation page
- Every "monthly plan" mention → `/services/maintenance`
- Industry cards → industry pages once they exist
- Add to main nav under Services, and link from the homepage AI Automation tile
- **Do not link to case studies until they exist**
- Add the reciprocal link from the AI Agent page's chatbot mentions back to this page

## Cross-page consistency check before launch

The three service pages must not contradict each other. Verify:

- The same `[X]` overlap hours figure on all three
- The same three-week single-build timeline claim
- Section 11's comparison table wording identical wherever it appears
- One brand lockup across all three title tags (`SPACIVA AI` / `Spaciva Solutions` / `SPΛCIVΛ` are all currently live — pick one)
- The Gmail address is gone from every page in this set

---

# VALUES YOU MUST SUPPLY

| Placeholder | Appears in |
|---|---|
| `$[X]` — single chatbot price | Hero proof line, pricing, Why Spaciva, FAQ |
| `$[Y]` — multi-source build price | Pricing, FAQ |
| `$[Z]` — monthly plan price | Pricing, FAQ |
| Typical monthly running cost range | Pricing note (omit until you can back it) |
| `[X]` — test set size | Accuracy section |
| `[X]` hours US/UK overlap | FAQ |
| Client logos with names | Trust strip |
| Chatbot screenshot with a visible citation | Hero |
| Handoff screenshot | Escalation section |
| Confirmed integration list | Channels section |
| Case studies with outcome numbers | Section 17 — delete the section if unavailable |
| Source link for the retrieval-failure claim | Section 6 |

**If a value isn't available, follow the fallback noted in that section. Do not approximate.** This page's entire persuasive argument is that Spaciva is specific where competitors are vague — and it's a page about groundedness. An invented number here is self-refuting.

---

# SUPPORTING CONTENT WORTH BUILDING

Three pieces that would feed this page and rank on their own:

- **Blog:** "RAG vs fine-tuning: which one does your business actually need" — real search volume, near-zero good coverage from service providers, links straight into Section 11
- **Blog:** "What EU AI Act Article 50 means if you run a chatbot" — timely since August 2026, almost no competitor coverage, strong link magnet for UK and EU traffic
- **Case study:** any deployed chatbot with a deflection or response-time number attached. One real number would do more for this page than another thousand words of copy
