# Spaciva — SaaS Platforms Services Page

**URL:** `/services/saas-platforms`
**Layout:** **Template A — Narrative / Credibility**, variant **A-5**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — TWO STRUCTURAL PROBLEMS TO SETTLE FIRST

## Problem one: this overlaps Web Applications almost completely

A SaaS platform *is* a web application. Same stack, same engineers, same repository. Published without a boundary, this page and C-4 compete for the same queries and confuse the same buyer.

**The boundary, and it's a clean one:**

> **Web applications** — software for **your** business. One organisation uses it. Success is measured in hours saved or work made possible.
> **SaaS platforms** — software that **is** your business. Many customers use it, they pay subscriptions, they sign up without talking to you. Success is measured in revenue, retention, and churn.

That distinction is real and it drives genuinely different engineering: multi-tenancy and data isolation, subscription billing and plan logic, self-serve onboarding, usage metering, customer-facing uptime commitments, and the security questionnaire your customers' IT departments will send you. None of that appears in an internal application.

**Required edits if both ship:**

1. **C-4 (Web Applications) must not use the word "product" for customer-facing software.** It currently says "the application is customer-facing and it's your product, not your admin" as a build-custom signal. Change that line to route here.
2. **C-4's routing block gains a SaaS card**; this page's routing block links back. Reciprocal.
3. **Keyword split is absolute.** C-4 owns `Next.js development company` and the framework cluster. This page owns the SaaS and multi-tenant cluster. Neither targets the other's terms in a title, H1, or H2.

## Problem two: this page attracts the worst-fitting leads on the site

Say this plainly, because it affects the copy more than the SEO does.

SaaS enquiries skew heavily toward **pre-revenue founders with no budget, no technical co-founder, and an expectation of equity-based or deferred payment.** They are the highest-volume, lowest-conversion, most time-expensive enquiry type an agency can attract. A page that says "we build SaaS platforms" and nothing else will generate a great deal of traffic and a great many calls that go nowhere.

**So this page qualifies hard, in the first two screens.** It states who it's for, states that you don't take equity, and states the honest minimum. That will reduce enquiry volume and raise close rate — which on this page specifically is the correct trade. Do not let anyone soften this in review on the grounds that it's "discouraging."

**The three buyers this page is actually written for:**

1. **Services businesses productising** — an agency, consultancy, or professional-services firm turning a process they already run into software. They have revenue, real customers, and domain knowledge. **Best-fit buyer on this page by a wide margin.**
2. **Funded or revenue-backed early-stage teams** who need engineering, not a co-founder.
3. **Existing SaaS companies** with a platform that needs rebuilding, rescuing, or scaling.

## Why Template A

Template C is full — four pages (Dashboards, Internal Tools, CRM, Web Applications) is the stated limit, and a fifth would collapse the tier into one indistinguishable dark technical block. Template B doesn't fit; there's no before-and-after week to show a founder building something that doesn't exist yet.

Template A is also right on merit. This buyer's hesitation is:

> *"Can a team I've never met, ten time zones away, be a technical partner for the thing my business depends on — not just for a project with an end date?"*

That's a credibility-and-continuity objection, which is exactly what Template A's "why these fail" engine addresses. **Template A, variant A-5.**

## Template A variants

| | **A-1 Agents** | **A-2 Chatbots** | **A-3 ERP** | **A-4 BI** | **A-5 SaaS** *(this page)* |
|---|---|---|---|---|---|
| Hero visual | Screenshot | Screenshot | Integration map | Maturity ladder | **Scope gate — what v1 is vs what founders plan** |
| Block above offers | — | — | Scope boundary | Maturity gate | **"Who this is for" qualifier + no-equity statement** |
| Failure section | 4 causes | 4 reasons | 5 patterns + controls | 4 shelfware patterns | **5 failure patterns, founder-specific** |
| Distinctive claim | — | — | "What we don't do" | "No reseller commissions" | **"We are not your CTO" — stated and explained** |

Five A pages is a lot. A-5 earns its place through the qualifier block and the CTO-gap section, neither of which appears anywhere else on the site. If a sixth A page is ever proposed, it should be merged instead.

---

# PART 1 — SEO SPEC

## Primary keyword

`SaaS MVP development` — not `SaaS development company`.

`SaaS development company` is a high-volume commodity term dominated by large offshore agencies and lead-gen directories, and its traffic is overwhelmingly the pre-revenue, no-budget enquiry described above. Ranking for it would be actively costly: more calls, worse calls.

`SaaS MVP development` attracts someone who has already accepted that version one should be small. That single word — MVP — is a budget and expectations filter doing free qualification.

## Ranking targets

| Keyword | Note |
|---|---|
| `SaaS MVP development` | Primary. The word MVP pre-qualifies |
| `multi-tenant SaaS development` | **Technical, high-intent, low competition.** Nobody searches this casually |
| `multi-tenant architecture development` | Same buyer, more technical |
| `productize services into software` | **The undervalued one.** See below |
| `turn agency service into SaaS` | Same cluster, near-zero competition |
| `B2B SaaS development company` | The B2B qualifier filters out consumer-app enquiries |
| `Stripe subscription integration development` | Specific, commercial, weak SERP |
| `SaaS platform rescue` / `take over SaaS codebase` | Distress cluster, high conversion |
| `SaaS development cost` | Answer with structure even where figures are bracketed |
| `vertical SaaS development` | Growing category, matches the productising buyer |

**The undervalued cluster is productisation.** `productize services into software`, `turn agency service into SaaS`, `vertical SaaS development` are searched by exactly your best-fit buyer: a services business with revenue, customers, and domain knowledge, wondering whether to build. Volume is modest and competition is close to zero, because agencies write for founders rather than for other services businesses. **Section 4's productisation card and Section 3's qualifier are built for this cluster and it should be the page's primary conversion path.**

**The second cluster is rescue.** `SaaS platform rescue`, `take over SaaS codebase`, `inherited a codebase no documentation` — acute distress, allocated budget, hard deadlines, almost no competition. Same logic as the Web Applications page's rescue cluster, and the two should cross-link.

**Do not chase** `SaaS development company`, `app development company`, `startup app developers`, `MVP development company India`, or anything with "cheap" or "affordable." The last category in particular attracts precisely the enquiries this page is designed to filter out.

## Meta

**Title (58 chars):**
```
SaaS MVP & Multi-Tenant Platform Development | Spaciva AI
```

**Description (157 chars):**
```
We build B2B SaaS platforms — multi-tenancy, billing, onboarding — for funded teams
and services businesses productising. Fixed price. We don't take equity.
```

**H1:** `The version of your product that should actually ship first`
**URL:** `/services/saas-platforms` — keeps the plural-noun pattern. Not `/services/saas-development` (attracts the wrong cluster) and not `/services/mvp-development` (too narrow to hold the rescue and scale work).

## Positioning against neighbouring pages

Nine pages now in the build tier. Section 10 states it:

> **SaaS platforms** — software that is your business, sold to many customers on subscription.
> **Web applications** — software for your business, used by your organisation.
> **Internal tools · Dashboards · CRM · ERP · Inventory** — specific applications of the same engineering.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the engagement table

**Do not** add `SoftwareApplication` or `Product` schema. You build platforms; you don't sell one.

## Internal linking

- Section 4 → `/services/web-applications` — **not live yet**
- Section 5 → `/services/ai-agent-development` *(live)*
- Section 7 → `/services/custom-dashboards` — **not live yet**
- Section 10 → the build-tier siblings — **only Workflow Automation is live**
- Case studies → `/case-studies/partsflow`, `/case-studies/unified-accounting` *(both live)*

Ship every unbuilt link as plain text. `/about` already publishes a live 404 from the footer of every page.

**Proof gap, stated plainly:** you have **no SaaS case study**, and this is the page where that matters most. A founder handing you their product will ask what you've shipped in this shape. Section 12 handles it honestly; read that note before publishing.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template A opening, A-5 variant.** Light base. Two columns at ≥1024px: copy left, **scope gate right**.
>
> The scope gate is two stacked lists side by side or above each other: **"What founders plan for v1"** (long — twelve items, muted, slightly overflowing its container so it reads as too much) and **"What v1 actually needs"** (short — four items, accent colour, generous spacing). The visual argument is made before a word is read.
>
> This is distinct from A-4's maturity ladder (self-location) and A-3's integration map (architecture). It's a **reduction device**. Inline SVG or semantic HTML with real text — either is fine here, since it's list-based; HTML is preferable for crawlability.
>
> Below 1024px it moves beneath the copy, keeping the length contrast intact.

**Eyebrow:** SAAS PLATFORMS

# The version of your product that should actually ship first

Most SaaS builds fail by being too big before anyone has paid for them. We build the smallest version that a real customer will pay for — multi-tenancy, billing, and onboarding done properly from day one, because those three are expensive to retrofit — and then we build the rest against what you learn.

**[Book a 30-minute call]** **[See who this is for →]**

**Proof line:**
```
Fixed scope, fixed price · We don't take equity · Your repo and your cloud, from day one
```

**Scope gate content:**

| What founders plan for v1 | What v1 actually needs |
|---|---|
| Signup · SSO · Team invites · Roles · Billing · Admin panel · Analytics dashboard · Notifications · API · Integrations · Mobile app · White labelling | **The one thing customers pay for** · Multi-tenancy done right · Billing that works · Onboarding they complete alone |

*Small caption:* The right-hand list ships. The left-hand list is a roadmap, and it should be built against paying customers rather than assumptions.

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component — greyscale to colour on hover, client names as real text beneath each logo. Single row. The live service pages currently render the same eight logos twice through a duplicated marquee loop; fix globally rather than reproducing it.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — Who this is for

> **UI/UX — the qualifier block, and the commercially most important section on the page.** Three "this is for you" bands and one "this isn't us" band, **all four at equal visual weight**. Do not style the fourth as a footnote, a disclaimer, or a muted box.
>
> Placed above the offers deliberately. A reader who doesn't fit should close the tab here — that's the section working, not failing.

## Let's establish fit before either of us spends a call

SaaS attracts more mismatched enquiries than anything else we do. Here's who this page is written for.

### Services businesses turning a process into software

You already run the process for clients. You know the domain better than any founder building it from the outside, you have customers who'd pay for a self-serve version, and you have revenue funding the build. **This is the best-fit engagement on this page** — the risk that usually kills SaaS, which is not knowing whether anyone wants it, is largely already answered in your case.

### Funded or revenue-backed early-stage teams

You have money allocated, a clear idea of the first customer, and you need engineering rather than a co-founder. We'll push you toward a smaller version one than you're planning, and that's the value, not an inconvenience.

### Existing SaaS companies needing a rebuild, rescue, or scale

You have customers and a platform that's become the constraint — unmaintainable, slow at your current volume, or abandoned by a previous team. We audit honestly and give you a fixed price for either fixing or rebuilding.

### If you're pre-revenue, unfunded, and looking for a technical partner

**We're the wrong firm, and we'd rather say so now than after three calls.**

We don't take equity, we don't defer payment against future funding, and we don't act as a technical co-founder. Those arrangements need someone whose incentives are tied to the outcome for years — that's a CTO or a technical co-founder, not an agency, and any agency telling you otherwise is describing something they won't actually deliver.

If you're at that stage, the honest advice is usually: get to a paying customer with no-code first. Bubble, Softr, Airtable, and a Stripe payment link have carried more early SaaS products to first revenue than any custom build. Come back when you have customers and something to protect — we'll still be here and the project will be better.

> **We build software for a fixed fee. We're very good at that, and it isn't the same thing as being your technical co-founder.**

---

## SECTION 4 — What we build

> **UI/UX:** Card grid matching A-1's offer treatment. Four cards, two-up at desktop and tablet. Title, one-line "best for", body. Sits after the qualifier deliberately.

**Eyebrow:** WHAT WE BUILD

## Four engagement shapes

### Productisation builds
Turning a service you already deliver into software your clients use themselves. The domain logic already exists in how your team works — the job is encoding it, wrapping it in multi-tenancy and billing, and making it usable without you in the room.

*Best for: agencies, consultancies, and professional-services firms with a repeatable process and clients who'd pay for self-serve.*

### MVP builds
The smallest version a real customer will pay for. Multi-tenancy, billing, and onboarding built properly from day one because retrofitting them is expensive; everything else deferred until customers tell you which parts matter.

*Best for: funded teams with a clear first customer and the discipline to ship small.*

### Rebuilds and rescues
An existing platform that's become the constraint, or one a previous team abandoned. We audit the codebase, architecture, security, and tenancy model, then give you a written assessment and a fixed price for salvaging or rebuilding — **and you can take that assessment elsewhere.**

*Best for: you have paying customers and a codebase you're afraid of.*

### Scale and platform work
A working platform straining at current volume: slow queries, ballooning infrastructure bills, noisy-neighbour problems between tenants, or an architecture that assumed ten customers and now has four hundred.

*Best for: growth has outpaced the original architecture.*

**Below the grid, smaller:**
> If the software is for your own organisation rather than for sale to customers, [web applications](/services/web-applications) is the better-fitting page — same engineers, same stack, different concerns and a different price.

---

## SECTION 5 — What v1 must get right

> **UI/UX:** Six-item grid, 3×2 at desktop, matching A-1's "what separates a real agent" and A-3's integration-quality grid. Small icon, bold label, two to three lines. Consistent stroke weight.
>
> This is the technical credibility block and it earns its place by being specific about the things that are cheap now and ruinous later.

## Six things that are cheap to build now and brutal to retrofit

Almost everything in a SaaS platform can be added later. These six can't — or can only be added at many times the cost.

### Tenancy isolation, decided once
How customer data is separated — row-level, schema-level, or database-level — is an architectural decision, not a setting. Changing it later means migrating every customer's data while they're using the system. We make this decision explicitly with you, in writing, before anything is built.

### Billing that reflects your actual plans
Subscriptions, tiers, seats, usage metering, trials, proration, upgrades, downgrades, failed payments, and dunning. Most billing pain comes from a model that assumed one flat plan. Build the shape of your pricing now, even if you launch with one tier.

### Onboarding a customer completes alone
If a human has to set up each account, you don't have SaaS — you have a service with a login. Self-serve signup, sensible defaults, and a first-run experience that reaches value without a call. This is the single most common gap in an otherwise finished platform.

### An audit trail from the first commit
Who did what, when, in which tenant. Your customers' security reviews will ask, enterprise deals will require it, and reconstructing history retroactively is impossible — the data was never captured.

### Roles and permissions modelled properly
Owner, admin, member, read-only, and whatever your domain needs. Bolting a permission model onto an application that assumed everyone can do everything is one of the most expensive retrofits there is.

### Observability before you need it
Error tracking, performance monitoring, and per-tenant logging from day one. When a customer reports something broken, the difference between a fix in an hour and a fix in a week is entirely whether you can see what happened.

**Below the grid, smaller:**
> Where a feature genuinely needs judgement rather than rules — routing, classification, drafting — that's an [AI agent](/services/ai-agent-development) inside one step. It's worth being sceptical of AI features in a v1: they're rarely the thing customers first pay for, and they're rarely the reason they leave.

---

## SECTION 6 — Mid-page CTA

> **UI/UX — first of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button. Same treatment as A-1, A-3, A-4.

## Not sure what belongs in version one?

That's the most useful thing a first call can settle. Tell us what you're building and who the first customer is, and we'll tell you what we'd cut — including if the honest answer is that you should validate with no-code before spending anything on engineering.

**[Book a discovery call]**

---

## SECTION 7 — Why SaaS builds fail

> **UI/UX — Template A's persuasive engine and the centrepiece.** Five stacked blocks, generous spacing, each ending on **a bolded line naming what prevents it** — the pairing established on A-3 and A-4. Longest scroll on the page.

## Five ways SaaS builds fail, and what prevents each

These repeat with remarkable consistency, and only one of them is technical.

### Too much was built before anyone paid

Eighteen months of development, a feature list built from assumptions, and a launch to an audience that turns out to want something adjacent. The money is gone and the learning hasn't started.

**What prevents it:** a version one scoped to the single thing a named first customer will pay for, shipped in weeks, with everything else on a roadmap built against real usage. We will argue with you about scope, and that argument is most of the value.

### Multi-tenancy was an afterthought

Built as a single-customer application, then adapted when the second customer arrived. Now tenant data separation depends on every query being written correctly, and one missed filter is a breach that ends the company.

**What prevents it:** the isolation model is decided and documented before the first line of application code, and enforced at the data layer rather than by developer discipline.

### Billing didn't match the business

A flat subscription hard-coded, then the pricing changes — as it always does — and every plan change, upgrade, proration, and failed payment becomes manual work. Revenue leaks quietly and nobody notices for two quarters.

**What prevents it:** billing built around the shape of your pricing rather than today's single tier, with plan changes, metering, and dunning handled by the system from the start.

### Onboarding needed a human

Signup works, and then a founder personally configures every new account. It feels fine at ten customers, it caps growth at fifty, and it makes the unit economics look nothing like SaaS.

**What prevents it:** treating first-run as a feature with the same weight as anything else, and testing it with someone who has never seen the product and gets no help.

### The team that built it left

The agency finished and moved on, or the contractor stopped replying. No documentation, no handover, undocumented infrastructure, and a codebase nobody can safely change while paying customers depend on it.

**What prevents it:** repository access from day one rather than on handover, documentation and runbooks as deliverables rather than promises, everything running in your own cloud accounts, and a monthly plan you can end at any time while keeping all of it. **The point isn't that we'll never leave — it's that our leaving shouldn't be an event.**

> **Four of these five are decided before any code is written. The fifth is decided by what's in your repository, not by how the relationship ends.**

---

## SECTION 8 — The CTO gap

> **UI/UX:** Single column, max ~720px, centred. Prose, not cards — the second block on this page written to be read rather than scanned. Pull the closing line as a bordered pull-quote.
>
> **This section exists nowhere else on the site and it's what makes A-5 distinct.** It's also the section most likely to be cut in review for being "negative." Don't cut it — it's the reason a serious buyer trusts the rest.

## We're engineers, not your technical leadership

Here's something most development agencies avoid saying to founders: **an agency cannot replace a CTO, and the gap between those two things is where a lot of SaaS money disappears.**

We can make technical decisions well. We'll choose the architecture, the tenancy model, the stack, and the trade-offs, and we'll explain each one in language you can act on. What we can't do is hold the accumulated context of your product across years, sit in your strategy conversations, own the hiring, or make the hundred small judgement calls a week that come from being inside the business.

For a lot of engagements that gap doesn't matter. A productisation build for a services business with a clear process, or an MVP with a defined scope, works fine without technical leadership on your side — the scope is bounded and the decisions are ours to make within it.

It starts to matter when the product becomes the business. At some point you need someone technical whose horizon is years rather than a scope, and whose incentives are yours. That's a hire, and it's a good sign when it happens.

**What we do about it:** we build so that hire is possible. Conventional technology anyone can be recruited for. Documentation written for someone who wasn't there. Infrastructure in your own accounts. Architecture decisions recorded with the reasoning, not just the outcome. When your first engineer or CTO arrives, they inherit something legible instead of something they'll want to rewrite — and if they do want to rewrite it, we'd rather they told you honestly than that we'd made it hard to leave.

> **Any agency positioning itself as your permanent technical leadership is describing a dependency, not a partnership. Build so you can hire.**

---

## SECTION 9 — Stack

> **UI/UX:** Logo grid grouped by category with small labels, greyscale to colour on hover — matching A-3's treatment rather than Template C's tabs. **Every name as real text alongside the logo**, not alt text alone.

## What we build on

Conventional by design — so you can hire for it, and so a future CTO doesn't inherit something exotic.

### Application
Next.js · React · TypeScript · Node · Python · Tailwind · REST and GraphQL APIs

### Data and multi-tenancy
Postgres with row-level security · schema-per-tenant and database-per-tenant where isolation requires it · Redis · background job queues · per-tenant backup and restore

### Auth and access
Auth.js · Clerk · Auth0 · SSO and SAML for enterprise customers · team and organisation models · role-based permissions · audit logging

### Billing and subscriptions
Stripe Billing · Paddle · plans, seats, usage metering, trials, proration, dunning, and webhook-driven state

### Infrastructure and observability
AWS · GCP · Azure · Vercel · Docker · CI/CD · infrastructure as code · Sentry · uptime and performance monitoring · per-tenant logging · regional hosting where data residency in the EU or UK is required

**Below the grid, smaller:**
> Customer-facing analytics inside your product is its own piece of work — see [custom dashboards](/services/custom-dashboards) for how embedded analytics with per-tenant isolation gets built.

---

## SECTION 10 — SaaS, or something else?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain treatment. **Omit or disable cards whose pages aren't live** — currently only Workflow Automation is.

## Is a SaaS platform actually what you're building?

**SaaS platforms** — software that is your business: many customers, subscriptions, self-serve. *(This page.)*

**[Web applications](/services/web-applications)** — software for your business, used by your own organisation. Same engineers, different concerns, usually a smaller project.

**[Internal business tools](/services/internal-business-tools)** — one team, one job, one screen.

**[Custom dashboards](/services/custom-dashboards)** — read-only visibility, including embedded customer-facing analytics inside a platform you already have.

**[Workflow automation](/services/workflow-automation)** — something happens without anyone opening anything.

> **Honest answer:** a fair number of "we're building a SaaS" conversations turn out to be an internal tool the client wants to eventually sell. Build the internal version first, run your own business on it for a year, and productise what survives. It's cheaper, lower-risk, and the resulting product is better because it was used in anger before it was sold.

---

## SECTION 11 — Engagement models

> **UI/UX:** Three columns, middle emphasised. **Publish without figures if prices aren't confirmed** — but see the note below, because on this page the numbers do qualification work that nothing else does.

## How engagements are structured

Fixed price, quoted in writing before we start. No hourly billing, no equity, no deferred payment against future funding.

### MVP or productisation build — from $[X]
Version one scoped, built, and launched: multi-tenancy, billing, onboarding, and the core feature set. Includes the first month of monitoring.
*Good for: the two best-fit buyers described in Section 3.*

### Audit or rescue — from $[A]
We assess an existing platform — codebase, architecture, tenancy model, security, infrastructure — and give you a written report plus a fixed price for fixing or rebuilding. **The report stands alone and you're welcome to take it elsewhere.**
*Good for: you have customers and a platform you don't trust.*

### Ongoing product partner — from $[Z]/month
Monitoring, security and dependency updates, and a set amount of feature work each month against a roadmap you set. Ends whenever you like, and you keep everything.
*Good for: post-launch, before your first engineering hire.*

**Beneath the table:**
> Every build includes monitoring for the first month. After that it's $[M]/month and you can stop any time — you keep the repository, the infrastructure configuration, and the documentation either way.

*Note for the client: **publish real numbers here if you possibly can.** On every other page an absent price is a mild negative. On this page it's a qualification failure — a stated floor is what turns away the unfunded enquiries that would otherwise consume your calendar, and it does that work before anyone books a call.*

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards, matching the shared treatment. **Read the note below carefully before publishing this section.**

## What we've built

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo — six systems, one integration layer.

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's inventory data moved through validated bulk imports and a live sync instead of row-by-row spreadsheet work across a 5,000+ SKU catalogue.

*Note for the client — this is the most exposed proof gap on the site. **Neither of these is a SaaS platform.** Neither is multi-tenant, neither has subscription billing, neither has self-serve onboarding. A founder evaluating you to build their product will notice immediately, and on a page whose entire argument is that you tell people uncomfortable truths, a stretched case study does more damage here than anywhere else.*

*Options, in order:*
1. **Best: publish one real SaaS engagement**, even a small or unfinished one, even anonymised. A single "here's a multi-tenant platform we shipped, here's the tenancy model we chose and why" outperforms everything else on this page.
2. **Acceptable: cut the section entirely** and let Section 3's qualifier and Section 8's CTO gap carry the credibility. **A missing case study section is better than one a buyer sees through.**
3. **Only if neither is possible:** keep both cards but frame them explicitly as integration and data engineering, and add one line saying you're selective about SaaS engagements and can arrange a reference call. Do not imply they're SaaS work.

*And a strategic note: **until you have one SaaS case study, consider whether this page should ship at all.** Every other page in the set is evidenced at least adjacently. This one isn't, and it's the page where the buyer's risk is highest and their scrutiny hardest.*

---

## SECTION 13 — FAQ

> **UI/UX:** Accordion, first item open — matching A-1 through A-4. Add `FAQPage` schema.

## Common questions

**Do you take equity or work for a share of revenue?**
No. We build software for a fixed fee. Equity arrangements need someone whose incentives are tied to the outcome for years, and that's a technical co-founder, not an agency — any agency offering it is describing something they won't actually deliver. If you can't fund a build yet, get to a paying customer with no-code first. That's genuinely better advice than anything we'd sell you.

**How long does an MVP take?**
[X]–[Y] weeks for a version one scoped to what a first customer will actually pay for, and you'll have something clickable at the end of week one. The main variable is scope discipline, not technical complexity — the most common cause of overruns is that everything gets classified as v1.

**What should be in version one?**
Less than you're planning. The single thing customers pay for, plus multi-tenancy, billing, and onboarding — those three because they're expensive to retrofit and almost nothing else is. We'll go through your list on the first call and tell you what we'd cut.

**How do you handle multi-tenancy?**
The isolation model — row-level, schema-per-tenant, or database-per-tenant — is decided with you explicitly and documented before any application code is written, then enforced at the data layer rather than by remembering to filter every query. It's the one architectural decision that's nearly impossible to change once you have customers.

**Can you integrate Stripe billing?**
Yes, including plans, seats, usage metering, trials, proration, upgrades and downgrades, failed payments, and dunning. We'd encourage building the shape of your intended pricing even if you launch on one tier — most billing pain comes from a model that assumed a single flat plan.

**We already have a platform and the developer disappeared. Can you take it over?**
Yes, and it's a common engagement. We audit the codebase, architecture, tenancy model, security, and infrastructure, then give you a written report and a fixed price for fixing or rebuilding. The report stands alone and you're welcome to take it elsewhere.

**Will our platform be secure enough for enterprise customers?**
We build to the things enterprise security reviews actually ask about: tenant isolation enforced at the data layer, audit logging, role-based access, SSO and SAML, encryption in transit and at rest, and documented infrastructure. We're not a compliance consultancy — if you need SOC 2 or ISO 27001 certification, that's an auditor and a separate programme, and we'll build so it's achievable rather than claiming to deliver it.

**Who owns the code and the infrastructure?**
You do, and you have the repository from day one rather than on handover. Full IP transfer on final payment, and everything runs in your own cloud accounts billed to you. If our relationship ends, nothing switches off.

**What happens when we hire our own engineers?**
That's the intended outcome and we build for it. Conventional technology people can be recruited for, documentation written for someone who wasn't there, and architecture decisions recorded with the reasoning. We hand over properly and answer questions afterwards whether or not you're still on a plan.

**Can you be our technical co-founder or CTO?**
No, and Section 8 on this page explains why at length. We make technical decisions well within a defined scope. We can't hold years of product context, sit in your strategy conversations, or own hiring — and an agency claiming otherwise is offering you a dependency. We build so that hire is easy when you're ready.

**What does it cost?**
Builds start at $[X], audits at $[A], and ongoing plans from $[Z] a month. Fixed price in writing before any work starts, and we carry the risk of our own estimates.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US Eastern and UK working hours and a same-business-day response commitment on anything urgent. A written update every Friday plus a short Loom walkthrough. NDA before discovery if you'd like one.

---

## SECTION 14 — Closing CTA

> **UI/UX — second of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button, no competing secondary link and no email capture.

## Tell us what your first customer would pay for.

Book a 30-minute call. We'll tell you what belongs in version one, what we'd cut, and give you a fixed price — or tell you honestly that you should validate it with no-code before spending anything on engineering.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from A-1 to A-4

| Element | A-1 | A-2 | A-3 | A-4 | **A-5** |
|---|---|---|---|---|---|
| Hero visual | Screenshot | Screenshot | Integration map | Maturity ladder | **Scope gate — long list vs short list** |
| Above the offers | — | — | Scope boundary | Maturity gate | **Buyer qualifier + no-equity statement** |
| Failure section | 4 causes | 4 reasons | 5 + controls | 4 + decisions | **5 + preventions, founder-specific** |
| Prose block | — | — | — | — | **The CTO gap** |
| Distinctive claim | — | — | "What we don't do" | "No reseller commissions" | **"We are not your CTO"** |

## The two things that must not drift

**One: the qualifier's fourth band keeps equal visual weight.** If a designer mutes "if you're pre-revenue and unfunded" into a footnote, the section stops qualifying and starts apologising. Same treatment as the other three bands. This is the same instruction issued for the BI page's maturity gate and it fails the same way.

**Two: Section 8 survives review.** The CTO-gap section will read as negative to someone reviewing this page for conversion, and it will be proposed for cutting. It's the section that makes everything else believable to a sophisticated buyer, and it's the only content on the site that directly addresses the agency-dependency fear. Keep it.

## Accessibility

- Scope gate: if built as SVG, needs `role="img"` and an `aria-label` naming both lists. **Semantic HTML lists are better here** — real `<ul>` elements are crawlable, screen-reader native, and the visual contrast can be done in CSS.
- Qualifier bands must be equal in DOM order and visual weight.
- Failure-section preventions bolded with `<strong>`, carrying semantic weight.
- Accordion FAQ: correct `aria-expanded` and keyboard operation.
- Two dark bands only; check contrast on both.

## Performance

- Section 9's logo grid is the heaviest block — use a sprite or inline SVG, and keep text names in the DOM regardless of whether logos load.
- The trust strip's duplicated marquee loop should be fixed globally before this page ships.
- As with the Web Applications page: a technical founder will run Lighthouse on your site before booking. This page should be among the best-performing on the domain.

## Sequencing

**Ship after Web Applications, and only once you have a SaaS case study** — or ship with Section 12 cut entirely, per the options in that section. Of the eleven pages now specced, this is the one where the proof gap and the buyer's scrutiny are furthest apart.

## Site-level issues

Unchanged across seven documents.

1. **`/about` still 404s and is still linked from the footer of every page.** A founder evaluating a technical partner will click About before anything else. This is the worst page on the site for that link to be broken.
2. **There is still no `/services` index.** This would be the twelfth service page reachable only via in-body cross-links.
3. **`/contact` still carries the old generalist positioning** and the all-caps "SPACIVA" mark.
4. **Brand mark is still inconsistent.**
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.**

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `[X]`–`[Y]` weeks — MVP | Section 11, FAQ | Must be a range you'll honour |
| `[X]` hours — committed overlap | FAQ | Give a real number |
| `$[X]` — MVP or productisation build | Section 11, FAQ | **Publish this one especially.** It does the qualification work |
| `$[A]` — audit or rescue | Section 11, FAQ | Price low enough to be an easy yes |
| `$[Z]` — monthly partner plan | Section 11, FAQ | |
| `$[M]` — maintenance monthly | Section 11 footnote | |
| Client logos and names | Section 2 | |
| **A SaaS case study** | Section 12 | **The blocking gap. See the three options in that section** |

**Verify before publishing — three items:**

**One: the no-equity commitment.** It appears three times and it's a genuine differentiator. Confirm it's a firm policy. If you'd consider equity for the right opportunity, cut the claim — a stated principle you'd bend is worse than no stated principle, and this buyer will test it on the call.

**Two: the multi-tenancy claims.** Section 5 and Section 9 describe row-level security, schema-per-tenant, and database-per-tenant isolation. **Confirm you have implemented at least one of these in production and can discuss the trade-offs between all three in a technical call.** This is the single most likely question from a competent buyer and the one where a vague answer ends the conversation.

**Three: billing depth.** Proration, dunning, usage metering, and webhook-driven subscription state are named specifically. Confirm someone on the team has built these, not just a basic Stripe checkout — the gap between those two is large and a founder who has been burned will know to ask.

Nothing on this page presents an unverified figure as a client result, and Section 12 explicitly flags that neither case study is SaaS work.
