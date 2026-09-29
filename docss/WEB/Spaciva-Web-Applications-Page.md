# Spaciva — Web Applications (Next.js / React) Services Page

**URL:** `/services/web-applications`
**Layout:** **Template C — Technical / Depth**, variant **C-4**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — THIS PAGE HAS A DIFFERENT JOB FROM THE OTHER TEN

## It's a pillar, not a peer

Every other service page sells a **problem solved**: the stock number is wrong, the inbox is drowning, the invoices are retyped. This one sells the **engineering underneath all of them**. Dashboards, internal tools, CRMs, and client portals are all web applications built on this stack — this page is what they're made of.

That has three consequences for how it's written.

**One: it must not compete with its own children.** If this page ranks for "custom dashboard development" it has stolen a query from a page better equipped to convert it. This page targets **stack and capability** queries — `Next.js development company`, `React development agency` — and routes problem queries downward. The routing block in Section 10 isn't a courtesy here; it's the page's primary structural job.

**Two: it's the highest-risk page on the site for lead quality.** "Web application development" attracts everything: someone who wants a WordPress brochure site, someone who wants a marketplace built for $2,000, someone who wants three developers on a monthly rate. All three cost you calls and none of them close. **The scope boundary in Section 3 is doing more commercial work than the pitch is.**

**Three: it's where the offshore trust objection lives most acutely.** A US or UK buyer commissioning a custom application from a team in Ahmedabad has one dominant fear, and it isn't cost or timezone — it's *"what if I'm handed a codebase nobody can maintain and I'm stuck?"* That fear is answered with artifacts, not adjectives. Hence the signature section.

## The signature section: the handover manifest

C-1 (Dashboards) uses a four-layer data diagram. C-2 (Internal Tools) uses a five-stage lifecycle. C-3 (CRM Development) will use a record and permission model.

**C-4 uses a handover manifest** — an itemised list of exactly what lands in your repository and your accounts on final payment. Not a promise about quality: a receipt.

Nothing else on the site does this, no competitor page in this category does it, and it converts the single biggest objection this buyer has into the most concrete section on the page. It is the reason to build this page at all.

## Template C variants

| | **C-1 Dashboards** | **C-2 Internal Tools** | **C-3 CRM** *(reserved)* | **C-4 Web Apps** *(this page)* |
|---|---|---|---|---|
| Hero visual | Four-layer data diagram | Three-rung escalation ladder | Record/object model | **Application anatomy — one app, six labelled concerns** |
| Signature section | The data layer, six bands | Five-stage lifecycle | Pipeline and permissions | **The handover manifest — an itemised receipt** |
| Process | Linear phase band | Two-week repeating loop | Migration-first phases | **Two-week loop with a demo-able build from week one** |
| Core objection | "Why not Looker Studio?" | "Why not Airtable?" | "Why not HubSpot?" | **"What if I'm stuck with unmaintainable code?"** |

Shared: dark base with light cards, persistent right spec panel, tabbed technology breakdown, engagement-model table, accordion FAQ, bordered accent CTA.

**Four C pages is the limit.** If another technical page is proposed after CRM Development, it belongs on A or B or it belongs merged into one of these four.

---

# PART 1 — SEO SPEC

## Primary keyword

`Next.js development company` — deliberately narrow, deliberately tool-named.

The instinct is to target `web application development company`. Don't. That term is held by hundreds of offshore agencies running identical pages, the SERP is a commodity bloodbath, and the traffic is unqualified — it's where the WordPress and $2,000-marketplace enquiries come from. You would compete on price against firms whose only differentiator is being cheaper, which is the one competition you lose by design.

`Next.js development company` and `React development agency` are different. Someone typing a framework name has already made a technology decision, usually has a technical person involved, and is filtering for competence rather than price. Lower volume, dramatically better fit.

## Ranking targets

| Keyword | Note |
|---|---|
| `Next.js development company` | Primary. Tool-named, pre-qualified |
| `React development agency` | Higher volume, same buyer type |
| `Next.js development services` | Commercial variant |
| `React web application development` | Broader, still framework-anchored |
| `Next.js migration services` | **High intent, low competition.** Someone leaving WordPress or a legacy SPA |
| `React performance optimization services` | Specific, technical, weak SERP |
| `headless CMS Next.js development` | Adjacent, commercial, under-served |
| `Next.js app router migration` | Very technical, tiny volume, converts exceptionally |
| `rescue failed development project` | **The undervalued one.** See below |
| `custom web application development company` | Broad — include, but don't lead with it |

**The two undervalued angles:**

**Migration and modernisation queries.** `Next.js migration services`, `React performance optimization services`, `Next.js app router migration` are typed by people with an existing application and a specific pain. Nearly every agency page targets greenfield builds because that's the bigger project — which leaves the higher-intent queries wide open.

**Rescue queries.** `rescue failed development project`, `take over existing codebase`, `previous developer disappeared` are searched by people in acute distress with budget already allocated and, usually, a hard deadline. Competition is close to zero because it's an awkward thing to write about. Section 4's rescue card and the FAQ entry are built for this cluster, and it's the fastest-converting traffic on the page.

**Do not chase** `website development`, `web design company`, `hire developers`, `hire React developers`, or `offshore development company`. The first two are the wrong service, the middle two attract staff-augmentation buyers whose model conflicts with fixed-scope pricing, and the last competes on rate alone.

## Meta

**Title (57 chars):**
```
Next.js & React Web Application Development | Spaciva AI
```

**Description (155 chars):**
```
Custom web applications in Next.js, React, and Node — built to a fixed price, shipped
in two-week loops, handed over with tests and docs. You own everything.
```

**H1:** `Applications built to be handed over`
**URL:** `/services/web-applications` — keeps the plural-noun pattern. Not `/services/nextjs-development` (too narrow to hold the React and rescue clusters) and not `/services/web-development` (invites brochure-site enquiries).

## Positioning against neighbouring pages

Eight pages now sit in the build tier. This page is the parent; the others are applications of it. Section 10 states it and every child page should carry a line back:

> **Web applications** — the engineering. If you know you need something custom built and you're evaluating who can build it.
> **Internal business tools** · **Custom dashboards** · **CRM development** — specific applications of this stack, each with its own page because the buyer arrives with a problem, not a framework.
> **ERP** · **Inventory** — systems of record with their own domain logic on top of this foundation.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the engagement table

**Do not** add `SoftwareApplication` schema. You're selling engineering, not a product.

## Internal linking

This page carries more outbound internal links than any other, by design. It's the hub.

- Section 4 → `/services/internal-business-tools`, `/services/custom-dashboards` — **neither live yet**
- Section 4 → `/services/workflow-automation` *(live)*
- Section 7 → `/services/ai-agent-development` *(live)*
- Section 10 → all six sibling build-tier pages — **only Workflow Automation is live**
- Case studies → `/case-studies/partsflow`, `/case-studies/unified-accounting` *(both live)*

Ship every unbuilt link as plain text. `/about` already publishes a live 404 from the footer of every page on the site.

**Critical dependency:** this page is architecturally a hub, and a hub whose spokes don't exist is just a page with a lot of dead text. **Of the ten service pages now specced, only five are live.** If this ships before the others, Section 10 loses most of its content and the page's structural purpose with it. Sequence it late.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template C base, C-4 hero.** Dark base. Two columns at ≥1024px: copy left ~52%, **application anatomy diagram right**.
>
> The anatomy is a single application box with six labelled concerns arranged around or within it — *Interface · Business logic · Data layer · Auth & permissions · Integrations · Deployment & monitoring* — each with a two-word descriptor. Not a flow, not a stack: an anatomy. It reads as "here is everything an application actually is," which is the argument that a competent build is more than a UI.
>
> Distinct from C-1's four-layer flow diagram and C-2's three-rung ladder. Inline SVG, real `<text>` nodes. Below 1024px it moves beneath the copy and reflows to a two-column grid of the six concerns.

**Eyebrow:** WEB APPLICATIONS

# Applications built to be handed over

Next.js, React, and Node — written the way you'd want to inherit it. Tested, documented, running in your own accounts, in a repository you control from day one. Whether we keep running it or your own team takes it over next year, nothing about it depends on us still being here.

**[Book a 30-minute call]** **[See exactly what you receive →]**

**Proof line:**
```
Fixed scope, fixed price · Shipping every two weeks · Your repo, your cloud, from day one
```

**Anatomy diagram content:**

| Concern | Descriptor |
|---|---|
| **Interface** | React, responsive, accessible |
| **Business logic** | Your rules, tested |
| **Data layer** | Postgres, modelled properly |
| **Auth & permissions** | SSO, role and row level |
| **Integrations** | Your existing stack |
| **Deployment & monitoring** | Your cloud, alerting on |

*Small caption under the anatomy:* Most quotes price the first box. The other five are where projects fail.

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component — greyscale to colour on hover, client names as real text beneath each logo. Single row. The live service pages currently render the same eight logos twice through a duplicated marquee loop; fix globally rather than reproducing it.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — What we don't build

> **UI/UX:** Two columns, equal visual weight — "What we build" left, "What we don't" right. **Do not style the right column as a disclaimer**: same type size, same weight, no muted box. Placed high, above the offers, matching the treatment that works on the ERP page.
>
> This section exists primarily to disqualify. Treat that as its job and don't let a designer soften it.

## Scope, before you read any further

Web application development attracts an enormous range of enquiries, most of which we're the wrong firm for. Here's the boundary so neither of us wastes a call.

### What we build

**Custom applications with real logic** — internal systems, client portals, operational tools, data-heavy interfaces, admin platforms. Things with permissions, workflows, and integrations rather than pages.

**Rebuilds and migrations** — legacy applications moved to Next.js and React, WordPress or PHP systems replaced when they've become the constraint, older React apps modernised.

**Rescues** — taking over a project from a previous developer or agency, auditing it honestly, and telling you whether to salvage or restart.

**Performance and scale work** — applications that work but have become slow, expensive to run, or fragile under load.

### What we don't build

**Marketing websites and brochure sites.** If what you need is five pages and a contact form, a good Webflow or WordPress developer will do it faster and for a fraction of what we'd charge. We'd be a poor use of your money and we'll say so on the call.

**Native mobile apps.** We build responsive and progressive web applications that work properly on phones. If you specifically need App Store and Play Store native builds, you want a mobile specialist.

**Staff augmentation.** We don't place developers into your team on a monthly rate. We take defined scopes at fixed prices and carry the delivery risk ourselves — that's the whole model, and it doesn't bend.

**Design-only engagements.** We design what we build, and we build well from designs you bring. We don't take standalone UI design projects.

**Blockchain, crypto, and Web3.** Not our field. We'd be learning on your budget.

> **Every hour we spend on a project we're wrong for is an hour off a project we're right for. Disqualifying early is a service, not a rejection.**

---

## SECTION 4 — What we build

> **UI/UX:** Light content cards on the dark base — the Template C inversion. Four cards, two-up at desktop and tablet, stacked on mobile. Larger and heavier than C-2's twelve-card grid, because these are engagement shapes rather than a catalogue. Title, one-line "best for", body.

**Eyebrow:** WHAT WE BUILD

## Four shapes of engagement

### New application builds
Something that doesn't exist yet: an internal platform, a client portal, an operational system, a product. Scoped into a version one that ships and a roadmap that follows, because the most common way these overrun is that everything gets called version one.

*Best for: teams who know what they need and want it built once, properly.*

### Rebuilds and migrations
A working application that's become the constraint — slow, unmaintainable, stuck on a framework nobody wants to touch, or built on WordPress and PHP long past where that made sense. Migrated incrementally where possible, so you're not offline and not betting a quarter on a cutover.

*Best for: "it works, but every change takes three weeks and we're scared of it."*

### Project rescues
A previous developer or agency left, and you have a half-finished codebase, no documentation, and a deadline. We audit what exists, tell you honestly whether to salvage or restart, and give you a fixed price for either path. **We take these often and we don't editorialise about the last team** — it's rarely useful and you already know how you feel about it.

*Best for: you're mid-project, the developer is gone, and you need a straight answer this week.*

### Performance and scale work
An application that works and has stopped working well. Slow queries, ballooning cloud bills, poor Core Web Vitals, failures under load. Measured first, fixed second — with a written baseline so the improvement is provable rather than asserted.

*Best for: teams where the complaint is "it's slow" and nobody has measured what's actually slow.*

**Below the grid, smaller:**
> If you arrived knowing what the application is for, there's probably a better-fitting page: [internal tools](/services/internal-business-tools), [dashboards](/services/custom-dashboards), or [workflow automation](/services/workflow-automation) if what you need is something to happen rather than a screen. Same engineers, same stack — those pages just answer the specific question faster.

---

## SECTION 5 — The handover manifest

> **UI/UX — the signature section of C-4, and the reason this page exists.** Full-width, styled as an **itemised receipt or manifest**, not as a feature grid. A list with checkmarks or dashes, monospace or tabular treatment, deliberately plain and document-like. It should look like an artifact rather than marketing.
>
> This is the longest scroll on the page and it should feel almost boring — that's the point. Persistent right spec panel stays visible alongside at ≥1200px.

## Exactly what you receive on final payment

The main risk in commissioning custom software from anyone — offshore or not — is being handed something nobody else can maintain. Adjectives don't answer that. Here's the itemised version.

### The code

**A repository you own from day one** — not transferred at the end. You have access from the first commit, so you can see the work as it happens and you're never waiting on a handover to have your own software.

**Conventional, unexciting technology** — Next.js, React, TypeScript, Node, Postgres. Chosen so any competent developer can pick it up, and so hiring for it later means hiring for skills people actually have.

**No proprietary framework of ours.** Nothing you'd need us specifically to maintain. We don't build on an in-house platform and we won't put your business-critical application somewhere only we can reach.

**Tests on the logic that matters** — the business rules, the calculations, the permission checks. Not a coverage percentage chased for its own sake, but the parts where a silent regression would cost you.

### The infrastructure

**Running in your own cloud accounts** — your AWS, GCP, Azure, or Vercel, billed to you, controlled by you. If our relationship ends tomorrow, nothing switches off.

**Infrastructure as code** — the environment reproducible from the repository rather than assembled by hand and remembered by one person.

**CI/CD pipelines** — automated build, test, and deploy, so releasing doesn't depend on a specific human's laptop.

**Staging and production environments**, with a documented promotion path between them.

**Monitoring and alerting configured** — uptime, errors, and performance, wired to reach someone. Not installed and left unrouted.

### The documentation

**A README that gets a new developer running locally** — actually tested by someone who hadn't seen the project, because the ones that haven't been tested never work.

**Architecture notes** covering the decisions and why they were made. The reasoning is what future maintainers need; the code already tells them the what.

**API documentation** for anything other systems talk to.

**A runbook** for deployment, rollback, common failures, and what to check first when something breaks.

**Written access inventory** — every service, credential location, and third-party account the application depends on. This is the thing people discover is missing at the worst possible moment.

### The terms

**Full IP transfer on final payment** — source code, designs, infrastructure configuration, and documentation. In writing, in the SOW, before work starts.

**No lock-in of any kind.** No proprietary dependency, no hosting you can't leave, no licence that expires.

**A handover call and a Loom walkthrough** if your own team is taking over — plus a period of questions answered afterwards, whether or not you're on a monthly plan.

> **If a vendor can't produce this list for a project they've finished, the project isn't finished. Ask for it before you sign, from us and from anyone else you're considering.**

---

## SECTION 6 — How the work runs

> **UI/UX — C-4 process treatment.** A **repeating two-week loop**, as on C-2, but with a distinct visual marker: **the loop begins producing something you can click in week one**, flagged on the diagram. C-2's loop starts after a run-in of audit and quote; here the first usable build is the differentiator and should be the visual emphasis.
>
> Spec column alongside at ≥1200px; stacks below 1024px with the loop redrawn as a repeating vertical cycle rather than flattened to a list.

## Something you can click, from week one

**Run-in — Scope and fixed quote** · *3–5 days*
We work out what version one has to do and, more usefully, what it doesn't. You get a written scope, a fixed price, and a delivery date before any code is written, with version one separated from everything after it. If scope moves, we re-quote in writing first.

**Then, in two-week loops:**

**Build** — A working slice, deployed to staging. Written update every Friday plus a short Loom walkthrough of what moved. You'll never wonder what an offshore team did this week.

**You use it** — Not a demo, not a click-through prototype. Your team opens the real thing on real data and forms an opinion. This is what surfaces the requirements nobody could articulate in a scoping call.

**We adjust** — What came back gets fixed and folded into the next slice.

**Ship** — Live, or held with the others, depending on what makes sense for you.

**After launch** — A monthly plan: uptime and error monitoring, dependency and security updates, small feature work, and a named engineer who knows your setup. Applications rot without this, and it's scoped from day one rather than sold at handover.

**Right-hand spec panel content:**

| | |
|---|---|
| **First clickable build** | End of week one |
| **Typical version one** | [X]–[Y] weeks |
| **Frontend** | Next.js · React · TypeScript · Tailwind |
| **Backend** | Node · Python · REST and GraphQL |
| **Data** | Postgres · MySQL · Redis |
| **Auth** | SSO · Google Workspace · Microsoft Entra ID · role and row-level permissions |
| **Testing** | Vitest · Jest · Playwright |
| **Hosting** | Your AWS, GCP, Azure, or Vercel account |
| **Ownership** | Repository access from day one, full IP transfer on final payment |
| **After launch** | Monthly monitoring, updates, and feature work |

---

## SECTION 7 — Stack

> **UI/UX:** Tabbed technology breakdown — the shared Template C treatment. Five tabs: Frontend · Backend & data · Auth & security · Testing & quality · Infrastructure. Tool names as real text alongside any logos. **Panels must be in the DOM on load and hidden with CSS, never lazy-mounted** — this is the single richest keyword surface on the site for framework queries.

## What we build on, and why

Deliberately conventional. Every choice here is one your own team could hire for.

### Frontend
Next.js (App Router and Pages) · React · TypeScript · Tailwind CSS · shadcn/ui · Radix · TanStack Query · React Hook Form · Recharts and D3 for data-heavy interfaces

### Backend and data
Node · Express and Fastify · Python and FastAPI where the work is data or ML adjacent · REST and GraphQL APIs · Postgres · MySQL · Redis · Prisma and Drizzle · background job queues

### Auth and security
NextAuth and Auth.js · Clerk · Auth0 · SSO via Google Workspace and Microsoft Entra ID · role-based and row-level permissions · audit logging · OWASP-aligned practices · secrets management

### Testing and quality
TypeScript in strict mode · Vitest and Jest · Playwright for end-to-end · ESLint and Prettier · pre-commit hooks · pull request review on every change

### Infrastructure
AWS · GCP · Azure · Vercel · Docker · GitHub Actions · infrastructure as code · staging and production environments · Sentry and uptime monitoring · regional hosting where data residency (EU or UK) is required

**Below the tabs, smaller:**
> Where an application needs a step that genuinely requires judgement rather than a rule, that's an [AI agent](/services/ai-agent-development) inside an otherwise deterministic system. Most applications don't need one. A few need one in exactly one place, and knowing which is which saves more money than it costs.

---

## SECTION 8 — Next.js, or something simpler?

> **UI/UX:** Two light cards side by side on the dark base, deliberately equal in visual weight. Comparison table beneath with real `<th>` markup and plain text, never an image. This targets `Next.js migration services` and the build-or-buy researcher.

## You may not need a custom application

Custom engineering is the wrong answer more often than any development agency admits.

### Don't build custom when

It's a marketing site — Webflow or WordPress, faster and cheaper. Your process still fits a no-code tool and is still changing shape monthly — stay on Airtable or Retool until it stops. An off-the-shelf product exists that does 80% of what you need and the remaining 20% is preference rather than necessity — buy it. You need something in two weeks — no custom build meets that, and anyone who says otherwise is quoting version one of something else.

### Build custom when

Per-seat or per-record pricing has stopped making sense at your scale. The logic has outgrown what a builder can express. You need permissions matching your org rather than a platform's model. You need deep integration with systems no platform reaches. Performance has degraded as your data grew. The application is customer-facing and it's your product, not your admin. Or the data can't sit on someone else's platform.

| | No-code / off-the-shelf | Custom application |
|---|---|---|
| **Time to first version** | Days to weeks | [X]–[Y] weeks |
| **Upfront cost** | Low | Higher, fixed and quoted in writing |
| **Ongoing cost** | Per-seat, grows with you | Hosting plus a monthly plan |
| **Changing it yourself** | Easy, within limits | Needs a developer |
| **Complex logic** | Constrained by the builder | Whatever your process is |
| **Permissions** | Platform's model | Modelled to your org |
| **Performance at volume** | Degrades, tier upgrades | Designed for your scale |
| **Customer-facing use** | Usually limited or licensed | Built as your product |
| **Ownership** | You rent it | Code and infrastructure are yours |

**Honest answer:** the clearest signal it's time to build isn't frustration with your current tool. It's when the **workarounds around it have become their own process** — someone spending hours a week keeping two things in agreement, or a step everyone knows to skip because the tool gets it wrong.

---

## SECTION 9 — Working with an offshore team

> **UI/UX:** Six-item grid, 3×2 at desktop, small icon, bold label, two to three lines. Consistent stroke weight. Placed late deliberately — by here the reader has seen the manifest and the stack, and this closes the remaining objection.

## The distance, addressed directly

You're considering commissioning custom software from a team in Ahmedabad. Here's how each of the usual concerns is actually handled.

### You have the repository from day one
Not on handover. From the first commit. You can see the work as it happens, and you're never in a position where your software exists only somewhere you can't reach.

### Written updates you don't have to chase
Every Friday: what moved, what's next, what's blocked, in writing — plus a short Loom walkthrough. You'll never have to ask what happened this week.

### Real overlap, committed in writing
[X] hours of daily overlap with US Eastern and UK working hours, with a same-business-day response commitment on anything urgent. `[State your actual committed hours — this is the single most-raised objection and a vague answer here reads as no answer.]`

### Fixed price, so the risk is ours
No hourly billing and no change orders you didn't agree to. If we estimate badly, that's our problem to absorb — which is the correct incentive and the reason we scope carefully.

### Senior engineers, directly
You talk to the people writing the code. No account manager relaying requirements to a team you never meet.

### NDA, MSA, and SOW as standard
NDA before discovery if you want one. Standard MSA and SOW with explicit IP transfer and change-order terms. Nothing about the commercial arrangement is improvised.

---

## SECTION 10 — Which page do you actually need?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain treatment. **This is the hub — it's the most structurally important block on the page.** Omit or disable cards whose pages aren't live; currently only Workflow Automation is.

## You may want a more specific page

This page is the engineering. If you already know what the application is *for*, one of these will answer faster.

**[Internal business tools](/services/internal-business-tools)** — a place your team does a specific piece of work. Portals, admin panels, trackers, approval systems.

**[Custom dashboards](/services/custom-dashboards)** — read-only visibility across systems that don't currently talk to each other.

**[CRM development](/services/crm-development)** — when the subject is specifically customers, deals, and pipeline.

**[ERP systems](/services/erp-systems)** — the financial and operational system of record, and everything that connects to it.

**[Inventory management](/services/inventory-management)** — one accurate stock number across channels and locations.

**[Workflow automation](/services/workflow-automation)** — something happens without anyone opening anything. If nobody needs a screen, this is cheaper and faster.

> **Honest answer:** plenty of "we need a web app" enquiries are an automation and a dashboard standing next to each other. That's a smaller, faster, lower-risk project, and we'd rather say so on the first call than build you an application you didn't need.

---

## SECTION 11 — Engagement models

> **UI/UX:** Three columns, middle emphasised as the common choice — the shared Template C commercial treatment. **Publish without figures if prices aren't confirmed.** Never publish a range you can't honour.

## How engagements are structured

Fixed price, quoted in writing before we start. No hourly billing, no staff augmentation, no surprise change orders.

### Version one build — from $[X]
A defined application scoped, built, deployed, and handed over with everything in Section 5. Includes the first month of monitoring.
*Good for: you know what you need and want it built once, properly.*

### Rescue or audit — from $[A]
We take over an existing codebase, audit it against the manifest in Section 5, and give you a written assessment plus a fixed price for either salvaging or restarting. **The audit stands alone** — you can take the report elsewhere and we'd rather you did that than hire us for the wrong reason.
*Good for: the previous developer left and you need a straight answer this week.*

### Ongoing product partner — from $[Z]/month
Monitoring, dependency and security updates, and a set amount of feature work each month against a roadmap you set.
*Good for: teams whose application is now business-critical and keeps evolving — most clients end up here.*

**Beneath the table:**
> Every build includes monitoring for the first month. After that it's $[M]/month and you can stop any time — you keep everything in Section 5 either way. If your own team takes over, we hand over properly rather than leaving them to reverse-engineer it.

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards, matching the shared treatment. Read the note below before publishing.

## What we've built

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.

*Note for the client: both of these are integration and pipeline stories, and both are being asked to stand in for application engineering on this page. **This is the page where that substitution is most visible**, because a technical buyer evaluating a Next.js team wants to see an interface.*

*What would fix it, in order of return:*
1. **A screenshot.** One real application interface, anonymised, beats both case study cards combined. Every competing Next.js agency page shows work; yours currently shows metrics about data entry.
2. **An application case study.** If either project included a UI your client's team used daily, write that up separately with the interface as the subject.
3. **A rescue story.** If you've ever taken over an abandoned codebase and shipped it, that's the highest-converting case study you could publish for this page, and it maps directly to the rescue keyword cluster.

---

## SECTION 13 — FAQ

> **UI/UX:** Accordion, first item open — the shared Template C treatment. Add `FAQPage` schema.

## Common questions

**Why Next.js and React specifically?**
Because they're conventional. Both have enormous ecosystems, deep documentation, and a large hiring pool — so when you want to bring development in-house or move to another firm, you can. A less common framework might suit a given project marginally better and would leave you with a much smaller set of people able to maintain it. That trade is rarely worth it.

**Do you build mobile apps?**
We build responsive and progressive web applications that work properly on phones, including offline-capable ones for field use. If you specifically need native App Store and Play Store builds, you want a mobile specialist and we'll say so.

**Can you take over a project someone else started?**
Yes, often. We audit what exists — code quality, test coverage, documentation, infrastructure, security — and give you a written assessment plus a fixed price for salvaging or restarting. It's more often salvage than people expect. The audit stands alone and you're welcome to take it elsewhere.

**How long does a custom application take?**
Version one is typically [X]–[Y] weeks, and you'll have something clickable at the end of week one. The largest variable is scope discipline, not technical complexity — the most common cause of overruns is that everything gets classified as version one, which is why we separate it in writing at quote stage.

**Do you offer hourly or dedicated developer arrangements?**
No. We take defined scopes at fixed prices and carry the delivery risk ourselves. Hourly billing puts the risk of a bad estimate on you and removes our incentive to be efficient. If you specifically want developers embedded in your team on a monthly rate, we're the wrong firm and there are good ones for that.

**Who owns the code?**
You do, and you have the repository from day one rather than on handover. Full IP transfer — code, designs, infrastructure configuration, documentation — on final payment, written into the SOW before work starts.

**Where is it hosted?**
Your own AWS, GCP, Azure, or Vercel account, billed to you. Regional hosting where data residency in the EU or UK is required. If our relationship ends, nothing switches off.

**Can our own developers maintain it afterwards?**
That's what it's built for. Standard Next.js, React, TypeScript, Node, and Postgres — nothing proprietary, documented, with a README a new developer can actually follow and a runbook for deployment and failures. We do a handover call and a Loom walkthrough, and answer questions afterwards whether or not you're on a plan.

**What happens after launch?**
A monthly plan: uptime and error monitoring, dependency and security updates, small feature work, and a named engineer who knows your setup. Dependencies age and security advisories arrive whether or not anyone is watching — an unmaintained application is a slowly accumulating liability.

**What if we're not happy with how it's going?**
You'll know within two weeks, not two months, because you're using real builds throughout. Fixed scope means no runaway budget, and you have the repository from day one, so at any point you can take what exists and go elsewhere. That's deliberate — it keeps the incentive on us to keep earning the next loop.

**What does it cost?**
Version one builds start at $[X], rescue audits at $[A], and ongoing plans from $[Z] a month. Fixed price in writing before any work starts, and we carry the risk of our own estimates.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with [X] hours of daily overlap with US Eastern and UK working hours and a same-business-day response commitment on anything urgent. A written update every Friday plus a short Loom walkthrough. NDA before discovery if you'd like one.

---

## SECTION 14 — Closing CTA

> **UI/UX:** Bordered accent panel on the dark base — the shared Template C close. Single primary button, no competing secondary link, no email capture.

## Tell us what you're trying to build.

Book a 30-minute call. We'll tell you honestly whether it needs custom engineering, whether a smaller project would do, and give you a fixed price if building is genuinely the right answer.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from C-1, C-2, C-3

| Element | C-1 Dashboards | C-2 Internal Tools | C-3 CRM | **C-4 Web Apps** |
|---|---|---|---|---|
| Hero visual | Four-layer data flow | Three-rung ladder | Record/object model | **Application anatomy, six concerns** |
| Above the offers | — | — | — | **"What we don't build" boundary** |
| Signature section | Data layer, six bands | Lifecycle, five stages | Pipeline & permissions | **Handover manifest — an itemised receipt** |
| Process | Linear phase band | Two-week loop | Migration-first | **Two-week loop, clickable in week one** |
| Late-page grid | — | — | — | **Offshore objections, six items** |
| Routing block | Four cards | Five cards | — | **Six cards — the page's structural purpose** |

## The one thing that must not drift

**The handover manifest must look like a document, not marketing.** Plain, itemised, tabular or monospace, almost boring. If a designer turns it into a feature grid with icons and gradient cards, it stops functioning — its persuasive power comes entirely from reading like an artifact a buyer could check off. Flag this explicitly in the design handoff, the same way the maturity gate is flagged on the BI page.

## Accessibility

- Anatomy diagram needs `role="img"` with an `aria-label` naming all six concerns, and real `<text>` nodes rather than paths.
- "What we build / don't build" columns must be equal in DOM order and visual weight.
- Manifest section: use real list markup (`<ul>`, `<li>`) with `<strong>` for item names — not styled `<div>`s. It's the most likely section to be surfaced as a structured answer by an LLM and the markup matters.
- Tabbed stack needs arrow-key navigation and correct `aria-selected`.
- Dark base: re-check every token at 4.5:1, and use the lighter accent variant rather than the light-template accent.
- **This page in particular should pass its own standards.** A Next.js agency page with accessibility failures is a self-refuting artifact, and a technical buyer will run Lighthouse on it.

## Performance

- **Same point, more forcefully:** this page will be audited. A buyer evaluating a Next.js team runs PageSpeed on the agency's own site as a first filter. Whatever your global performance budget is, this page should be the best-performing page on the domain.
- Both diagrams as inline SVG.
- Stack tab panels render on load, hidden with CSS.
- Section 7's five tabs are the heaviest text block — no per-tool icon requests; use a sprite or plain text.
- The trust strip's duplicated marquee loop should be fixed globally before this page ships.

## Sequencing

**This page should ship last of the ten.** Its routing block links to six sibling pages and its structural purpose is to be a hub. Published while five of six spokes are missing, most of Section 10 renders as plain text and the page loses the thing that distinguishes it from a generic web development page.

## Site-level issues

Unchanged across six documents.

1. **`/about` still 404s and is still linked from the footer of every page.** On this page specifically it's worse than elsewhere — the entire argument here is verifiable rigour, and the footer link is broken.
2. **There is still no `/services` index.** This would be the eleventh service page reachable only via in-body cross-links.
3. **`/contact` still carries the old generalist positioning** and the all-caps "SPACIVA" mark.
4. **Brand mark is still inconsistent.**
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.**

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `[X]`–`[Y]` weeks — version one | Section 6, Section 8 table, FAQ | Must be a range you'll honour |
| `[X]` hours — committed overlap | Section 9, FAQ | **Give a real number.** This is the top offshore objection and "flexible hours" reads as no commitment |
| `$[X]` — version one build | Section 11, FAQ | |
| `$[A]` — rescue audit | Section 11, FAQ | Price it low enough to be an easy yes; it's the best-converting entry point on the page |
| `$[Z]` — monthly partner plan | Section 11, FAQ | |
| `$[M]` — maintenance monthly | Section 11 footnote | |
| Client logos and names | Section 2 | |
| **An application screenshot** | Section 12 | **Highest-impact single asset on this page.** A Next.js agency page with no interface visible is a credibility gap a technical buyer will notice immediately |

**Verify before publishing — the manifest is a commitment, not copy.** Section 5 is the strongest section on this page precisely because it is checkable. **Go through it line by line against your last completed project and confirm you deliver every item.** Any line you don't currently deliver is either something to start doing this month or something to cut from the page — a buyer who takes that list into a handover and finds three items missing will be right to be angry, and the section's entire power depends on it being literally true.

The same applies to the repository-from-day-one claim, which appears three times. If your current practice is to transfer a repo at the end, change the practice or change the copy.

Nothing on this page presents an unverified figure as a client result. Both case study metrics are your existing published figures, and Section 12 flags honestly that neither is an application-engineering story.
