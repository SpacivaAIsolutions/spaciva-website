# Spaciva — Enterprise Portals Services Page

**URL:** `/services/enterprise-portals`
**Layout:** **Template B — Operational / Before-After**, variant **B-5**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — THE TITLE IS THE FIRST PROBLEM

## "Enterprise" contradicts a position you've already taken in public

Your ERP page says, in its own voice: *"Enterprise ERP implementation. SAP, Oracle, or Dynamics rollouts are multi-year programmes needing a large team and a partner certification. That isn't us, and a firm our size telling you otherwise should worry you."*

A page titled **Enterprise Portals** sits directly against that. A buyer who reads both will reasonably ask which one is true. And "enterprise" in a services context signals *we sell to Fortune 500 procurement* — which attracts RFPs with security questionnaires, insurance minimums, and vendor-onboarding processes that a small team in Ahmedabad will spend three weeks losing.

**Two options.**

**Option 1 — keep the title, redefine the word on the page.** "Enterprise" describes the *requirements* — SSO and SAML, audit trails, role complexity, security review — not the size of the client. This is defensible, it's how the term is used technically, and Section 3 makes it explicit. **This document assumes Option 1.**

**Option 2 — rename it.** `/services/client-portals` is a bigger, cleaner keyword, carries no contradiction, and matches how your actual buyers describe what they want. **This is the better commercial choice and I'd take it unless the title is already fixed elsewhere.** The content below works unchanged either way — only the H1, title tag, and slug shift.

If you keep "Enterprise," the page must never imply you take enterprise procurement engagements. Section 3 handles that.

## The second problem: this overlaps Internal Business Tools

C-2 (Internal Business Tools) already has a "client and customer portals" card, and its own SEO spec flags `client portal development` as *"adjacent, high volume — deserves a section, and eventually its own page."* **This is that page.** Which means C-2 needs an edit, not just a cross-link.

**The boundary, and it's the cleanest one in the set:**

> **Internal business tools** — **your own team** uses it. You employ the users. Success is hours returned to staff.
> **Enterprise portals** — **people outside your organisation** use it. Clients, vendors, partners, franchisees, members. Success is inbound requests that never arrive.

That distinction drives real engineering differences: self-registration and identity for people you don't control, granular external access where a leak is a client incident rather than an internal annoyance, your branding in front of someone else's business, and a support burden that grows with every user who can't work out what to do.

**Required edits if both ship:**

1. **C-2's portal card must be trimmed** to internal-facing only, with a link here for anything external-facing.
2. **C-2 must stop targeting `client portal development`** in its ranking table. That term moves here outright.
3. **Reciprocal routing cards** on both pages.

## Why Template B

Template A is at five pages and its own guidance says a sixth should merge. Template C is at four, which its guidance states is the limit. That's a real constraint — but B is also the right answer on merit.

The portal buyer isn't asking whether portals work; they've used a dozen. They have a concrete, weekly, measurable pain: clients emailing for status, vendors phoning about invoices, staff forwarding the same document for the fourth time. Their question is **"what changes in my week?"** — exactly what Template B exists to answer, and portal value is unusually easy to show that way because it's measured in requests that stop arriving.

**Template B, variant B-5.**

## Template B variants

| | **B-1 Workflow** | **B-2 Email** | **B-3 Documents** | **B-4 Inventory** | **B-5 Portals** *(this page)* |
|---|---|---|---|---|---|
| Before/after device | Manual vs automated split | Inbox state comparison | Document journey | Stock leakage chain | **The inbound request ledger — what arrives weekly, and what absorbs it** |
| Explorer tabs | By use case | By inbox type | By document type | By business shape | **By audience: clients · vendors · partners · members · employees** |
| Process step one | Audit | Audit | Sample documents | Count and baseline | **Audience and access mapping** |
| Signature metric | Time per week | Response time | Documents per hour | Stock accuracy | **Inbound requests eliminated** |

Shared across all five: light base throughout, centred hero, sticky left rail, four-step horizontal rail, open price table, logo grid, two-column plain FAQ, light bordered CTA panel.

---

# PART 1 — SEO SPEC

## Primary keyword

`client portal development` — high volume relative to the rest of the set, commercially direct, and the SERP is genuinely soft.

Three groups hold it and all three leave room: portal *products* (SuiteDash, Copilot, Zendesk, SharePoint) that can't discuss when a custom build is right; WordPress plugin content aimed at freelancers; and generic offshore agency pages with no audience specificity. **Nobody writes the page that distinguishes a client portal from a vendor portal from a partner portal and explains what changes between them.**

If you take Option 2 above and rename the page, this becomes the exact-match term and the page gets meaningfully stronger.

## Ranking targets

| Keyword | Note |
|---|---|
| `client portal development` | Primary. Highest-volume term in the whole page set |
| `customer portal development services` | Commercial variant, same buyer |
| `vendor portal development` | **Under-served.** Almost no agency writes for this audience |
| `supplier portal development` | Same cluster, procurement-side language |
| `partner portal development` | Channel and franchise businesses, low competition |
| `self-service portal development` | Problem-phrased, maps to the support-burden pain |
| `B2B portal development company` | Bottom-funnel vendor selection |
| `member portal development` | Associations, trade bodies, professional institutes — weak SERP |
| `SharePoint alternative client portal` | Tool-name comparison, buyer mid-decision |
| `reduce client status update emails` | Symptom-phrased, near-zero competition, converts |

**The undervalued cluster is audience-specific portals.** `vendor portal development`, `supplier portal development`, `partner portal development`, and `member portal development` are each searched by someone who has already decided they need a portal and knows who it's for. Modest volume, near-zero competition, buyer far down the funnel. **Section 4's audience tabs exist to rank for these individually** — which is why it's tabbed by audience rather than by feature.

**The second cluster is symptom-phrased.** `reduce client status update emails`, `stop clients emailing for updates`, `vendors calling about invoice status`. Nobody writes these because vendors write about features. Section 3 targets them.

**Do not chase** `enterprise portal`, `enterprise portal software`, `intranet software`, or `digital workplace`. Wrong intent, dominated by Microsoft and enterprise vendors, and it delivers exactly the procurement RFPs this page is designed to avoid.

## Meta

**Title (56 chars):**
```
Client, Vendor & Partner Portal Development | Spaciva AI
```
*If Option 2 (rename) is taken:*
```
Client Portal Development Services | Spaciva AI
```

**Description (156 chars):**
```
Custom portals for clients, vendors, and partners — so they self-serve instead of
emailing your team. SSO, granular access, your branding. Fixed price, you own it.
```

**H1:** `Every question your clients email you is a page they could have opened`
**URL:** `/services/enterprise-portals` — or `/services/client-portals` under Option 2, which is the stronger slug.

## Positioning against neighbouring pages

Ten pages now in the build tier. Section 10 states it:

> **Enterprise portals** — people **outside** your organisation self-serve.
> **Internal business tools** — your **own team** does the work.
> **SaaS platforms** — customers pay subscriptions and it's your product.
> **CRM · ERP · Inventory** — systems of record the portal reads from.
> **Web applications** — the engineering underneath all of it.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the price table

Add `ItemList` to the Section 4 audience tabs — five distinct portal types is a genuine enumerated list and the block most likely to be surfaced whole by an LLM.

## Internal linking

- Section 4 → `/services/document-invoice-processing` *(live)*
- Section 4 → `/services/workflow-automation` *(live)*
- Section 6 → `/services/rag-chatbot-development` *(live)*
- Section 10 → build-tier siblings — **only Workflow Automation is live**
- Case studies → `/case-studies/partsflow`, `/case-studies/unified-accounting` *(both live)*

Ship every unbuilt link as plain text. `/about` already publishes a live 404 from the footer of every page.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template B opening.** Light base, **centred** copy (B's signature, distinguishing it from A and C's two-column heroes at a glance). Beneath the copy, the **inbound request ledger** running full width.
>
> The ledger is a two-column list styled like a log or a ticket queue: left column **"What arrived in your inbox last week"** (eight rows, plain), right column **"Where it would have gone instead"** (eight rows, each naming a portal screen). Rows aligned so the eye reads across. Deliberately mundane and text-heavy — it should look like a real inbox, not an infographic.
>
> Distinct from B-4's leakage chain and B-1's manual/automated split. **Semantic HTML list or table markup, not SVG** — it's list content, it's crawlable, and screen readers handle it natively.

**Eyebrow:** ENTERPRISE PORTALS

# Every question your clients email you is a page they could have opened

"What's the status?" "Can you resend the invoice?" "Which version is current?" Every one of those is a person who'd rather have looked it up themselves, interrupting someone who'd rather not have been interrupted. We build the portal that answers them — for your clients, your vendors, your partners, or your members.

**[Book a 30-minute call]** **[See how it works →]**

**Proof line:**
```
Live in [X]–[Y] weeks · SSO and granular access · Your branding, your cloud, your code
```

**Ledger content:**

| What arrived in your inbox last week | Where it would have gone instead |
|---|---|
| "What's the status of our project?" | Their dashboard |
| "Can you resend last month's invoice?" | Their billing page |
| "Which version of the file is current?" | Their documents page |
| "Has our order shipped?" | Their order page |
| "Can you add my colleague to updates?" | Their team settings |
| "When's our next renewal?" | Their account page |
| "Did you get the form we sent?" | Their submissions page |
| "Can we get a copy of the report?" | Their downloads page |

*Small caption:* None of these needed a person. All of them got one.

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component — greyscale to colour on hover, client names as real text beneath each logo. Single row. The live service pages currently render the same eight logos twice through a duplicated marquee loop; fix globally rather than reproducing it.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — The problem

> **UI/UX:** Full-width, single column, max ~720px, centred. Prose, not cards. Pull the closing line as a bordered pull-quote.
>
> This is the landing target for the symptom-phrased keyword cluster. Keep the symptoms literal and named — "clients emailing for status" outranks "stakeholder communication challenges," because it's what people type.

## The interruptions aren't the cost. The interruptions are the symptom.

An account manager loses an hour a day to questions that have answers. Not hard questions — status, invoices, files, dates. Things that exist, written down, somewhere the person asking can't reach.

The obvious cost is the hour. The real cost sits underneath it. Every answer is a small act of retrieval and retyping, and each one is a chance to send the wrong version, quote a stale date, or forward something that shouldn't have left the building. The client who asks twice a week gets good service. The one who doesn't ask assumes the worst and doesn't mention it until renewal.

And it caps you. Twenty clients at two interruptions a week is manageable. Two hundred isn't — not without hiring proportionally, which is the definition of a business that can't scale. The email inbox is a support channel you never chose, with no queue, no history the client can see, and no way to tell whether the same question is being asked forty times.

> **A portal isn't a nicer way to communicate. It's the difference between service that scales with headcount and service that doesn't.**

---

## SECTION 4 — What we build

> **UI/UX — B's tabbed explorer.** Five tabs: **Client portals · Vendor & supplier portals · Partner & franchise portals · Member portals · Employee self-service**. Each panel holds three or four capability blocks written in that audience's language.
>
> **Tabbing by audience is the B-5 distinction and it's also the SEO structure** — each tab targets its own keyword. Panels must be in the DOM on load and hidden with CSS, never lazy-mounted. Mark up as `ItemList`.

**Eyebrow:** WHAT WE BUILD

## Five portals, five very different audiences

Same engineering. What changes completely is who's on the other side and what they're allowed to see.

### Client portals

**Status and progress** — where each project, order, or case stands, updated from your CRM or project tool automatically rather than by someone remembering to post an update.

**Documents and deliverables** — versioned, current, with a clear "this is the latest" rather than an email thread with four attachments.

**Invoices and payments** — issue history, what's outstanding, and the ability to pay, pulled from your accounting system. Pairs with [document and invoice processing](/services/document-invoice-processing) on the intake side.

**Requests and approvals** — a structured way to ask for something or sign off on it, with a history both sides can see.

*Best for: agencies, professional-services firms, and anyone whose account managers have become a helpdesk by accident.*

### Vendor and supplier portals

**Purchase orders and acknowledgement** — vendors see what's been ordered and confirm it in the portal instead of by email.

**Invoice submission** — submitted against a PO and validated at the point of upload, so mismatches surface immediately rather than at month-end.

**Payment status** — the single most common vendor phone call, answered by a page. This one frequently justifies the build on its own.

**Onboarding and compliance documents** — insurance certificates, tax forms, and certifications collected, tracked, and chased automatically before they expire.

*Best for: any business where accounts payable is fielding calls about when invoices will be paid.*

### Partner and franchise portals

**Deal registration and pipeline** — partners register opportunities and see status, without a spreadsheet emailed back and forth.

**Marketing assets and brand controls** — current approved materials, sometimes customisable within limits you set, so nobody is using last year's logo.

**Performance and commission visibility** — partners see their own numbers, which removes both the monthly report and the argument about it.

**Training and certification tracking** — who's completed what, and what's expiring.

*Best for: channel businesses, franchises, and distributor networks running on email and shared drives.*

### Member portals

**Membership status and renewals** — current standing, renewal dates, and self-serve payment.

**Resources and member-only content** — gated properly by membership tier.

**Events and registration** — booking, attendance history, and materials.

**Directory and profiles** — where members maintain their own details instead of emailing changes to an administrator.

*Best for: associations, trade bodies, professional institutes, and membership organisations.*

### Employee self-service

**Documents and requests** — payslips, policies, leave, expenses, and equipment requests routed properly rather than through a manager's inbox.

**Onboarding** — a tracked pipeline for new starters showing what's collected and what's outstanding.

**Directory and org information** — who's who, who owns what, and how to reach them.

*Best for: growing teams where HR and ops have become an inbox. Note this is the one audience that's internal — if the portal is entirely for your own staff, [internal business tools](/services/internal-business-tools) may be the better-fitting page.*

**Below the tabs, smaller:**
> Most portals need automation underneath — a status that updates itself, a document that files itself, a reminder that sends itself. That's [workflow automation](/services/workflow-automation), it's cheaper as its own scope, and we'll price it separately so you can see what you're paying for.

---

## SECTION 5 — Before and after

> **UI/UX — Template B's operational core.** Two columns, **light throughout** — no dark band here; that's Template A's device. Left "A week now," right "A week after," same six rows, aligned so the eye reads across.
>
> Sticky left rail nav becomes visible from this section down, matching B-1 through B-4.

## What changes in your week

### A week now

**Monday** — Four status emails before 10am. Someone opens the project tool and retypes what's in it.

**Tuesday** — A client asks for an invoice copy. Someone finds it in the accounting system and forwards it.

**Wednesday** — A vendor calls about payment timing. Accounts payable checks and calls back.

**Thursday** — A document goes out. It's the wrong version. Nobody realises for a week.

**Friday** — Someone builds the monthly client report by hand from three systems.

**Renewal** — A client says they didn't feel looked after. Nobody can point to what was delivered.

### A week after

**Monday** — Those four clients checked their own dashboards over the weekend.

**Tuesday** — The invoice was already on their billing page, with the payment link.

**Wednesday** — The vendor checked payment status themselves at 6am their time.

**Thursday** — There's one current version and it's the one on the page.

**Friday** — The report is live and always has been. The call is about the commentary.

**Renewal** — Every deliverable, date, and approval is visible with a timestamp.

**Beneath the columns:**
> The measurable outcome isn't hours saved — it's **inbound requests that never arrive.** We baseline that in week one, which is what makes the improvement provable rather than asserted.

---

## SECTION 6 — What a portal has to get right

> **UI/UX:** Six-item grid, 3×2 at desktop, small icon, bold label, two to three lines. Consistent stroke weight. Sits after the before/after, as on all B pages — this reader wants the outcome first.

## Six things that decide whether it gets used

A portal nobody logs into is worse than no portal, because now you have both the emails and the maintenance.

### Access modelled to reality
Not one login per company. Real organisations, real teams, real roles — a client's finance person sees invoices, their project lead sees deliverables, and neither sees another client's anything. Row-level isolation enforced at the data layer, not by remembering to filter a query.

### Login that isn't a barrier
SSO where your users have it, magic links where they don't, and SAML for the ones whose IT department requires it. Every password reset is a person who nearly emailed you instead.

### Populated automatically
A portal that needs your team to post updates has moved the work rather than removed it. Status, documents, and invoices flow in from your CRM, project tool, and accounting system on their own.

### Obvious without training
Your users didn't ask for this and won't attend a session about it. If the first screen doesn't make the next action obvious, they'll email — and after two of those, they won't come back.

### Notifications that pull people in
Nobody remembers to check a portal. Something changed, here's a link, one click to the exact page. The notification is as much the product as the portal is.

### Branded as yours
It sits in front of your clients, so it should look like you — your domain, your identity, your language. A portal that looks like generic vendor software undercuts the impression it was bought to improve.

**Below the grid, smaller:**
> If your users want to *ask questions* of what's in the portal rather than navigate to it, that's a [RAG chatbot](/services/rag-chatbot-development) over the same data, and it's often a smaller build than the extra screens people request.

---

## SECTION 7 — How the work runs

> **UI/UX:** Horizontal process rail, **four steps**, matching B-1 through B-4. Numbered nodes on a connecting rule with duration pills. Stacks vertically on mobile. The B-5 distinction is step one: audience and access mapping before anything else.

## Four phases, [X]–[Y] weeks

**01 — Audience and access mapping** · *3–5 days*
Who logs in, what each role sees, and — the part that matters most — what they must never see. We map organisations, teams, and roles, and we baseline the inbound requests your team currently fields so the outcome is measurable. You get the access model in writing whether or not you hire us.

**02 — Fixed scope and quote** · *2–3 days*
Written scope, fixed price, and a delivery date before any code is written, phased so you can see what launches first. If scope moves, we re-quote in writing first.

**03 — Build and pilot with real users** · *[X]–[Y] weeks*
Built against your real data, then piloted with a handful of actual clients or vendors — not internal staff pretending. Written update every Friday plus a short Loom walkthrough. **Pilot feedback is where portals are saved**, because the confusions that kill adoption are never the ones your own team predicts.

**04 — Roll out by group, then monitor** · *ongoing*
Launched to one group at a time with the old channel still open, so nobody is stranded. Then: monitoring, tracking which pages actually get used, and cutting the ones that don't. Portals accumulate unused screens faster than any other kind of software, and pruning is part of the monthly plan.

---

## SECTION 8 — Build or buy

> **UI/UX:** Two light cards side by side, equal visual weight — the left must not be styled as the losing option. Comparison table beneath with real `<th>` markup and plain text, never an image. This targets `SharePoint alternative client portal` and the build-or-buy researcher.

## You may not need us for this

Portal products are good and getting better. Buying beats building more often than an agency page will say.

### Buy an off-the-shelf portal when

Your needs are close to standard — documents, messages, invoices, basic status — and you're happy for it to look mostly like the vendor's product. Client counts are modest enough that per-seat or per-client pricing works. SuiteDash, Copilot, Zendesk, HubSpot's portal, or SharePoint will be live in weeks for a fraction of a custom build. **We'll tell you this on the call and we won't quote you for something you don't need.**

### Build custom when

Your access model doesn't fit the product's — nested organisations, unusual roles, or data that must be isolated in ways the tool can't express. Or the portal needs to pull live from systems no product connects to. Or per-client pricing has stopped making sense at your volume. Or it's client-facing enough that vendor branding is a problem. Or you need a workflow — approvals, submissions, registrations — the product can't run. Or you're in a regulated space and need audit trails and data residency you control.

| | Off-the-shelf portal | Custom build |
|---|---|---|
| **Time to live** | Weeks | [X]–[Y] weeks |
| **Upfront cost** | Low | Higher, fixed and quoted in writing |
| **Ongoing cost** | Per-seat or per-client, grows with you | Hosting plus a monthly plan |
| **Standard documents and messaging** | Excellent | Overkill |
| **Complex or nested access models** | Product's model | Modelled to reality |
| **Live data from your own systems** | What the product connects to | Anything with an API |
| **Branding** | Vendor's, with your logo | Entirely yours |
| **Custom workflows** | Limited | Whatever your process is |
| **Audit trail and data residency** | Vendor-dependent | Yours to control |
| **Ownership** | You rent it | Code and data are yours |

**Honest answer:** the clearest signal to build is not dissatisfaction with a product's features. It's when **the access model doesn't fit** — when you find yourself creating duplicate accounts, or manually restricting things the tool can't restrict. Features can be lived without. A wrong permission model is a client incident waiting to happen.

---

## SECTION 9 — Systems we connect

> **UI/UX:** Logo grid grouped by category with small labels, greyscale to colour on hover. **Every system name as real text alongside the logo**, not alt text alone.

## What the portal reads from

A portal is only as useful as what's behind it. It shouldn't need anyone to post updates into it.

### CRM and project
HubSpot · Salesforce · Pipedrive · Zoho · Asana · ClickUp · Jira · Monday · Notion

### Finance and billing
QuickBooks · Xero · NetSuite · Sage · Business Central · Odoo · Stripe · GoCardless

### Documents and storage
Google Drive · SharePoint · Dropbox · Box · S3 and object storage

### Identity
Google Workspace · Microsoft Entra ID · Okta · SAML and OIDC · magic links · Auth.js and Clerk

### Application layer
Next.js · React · TypeScript · Node · Postgres · row-level security · audit logging · AWS, GCP, Azure, or Vercel · regional hosting where EU or UK data residency is required

**Below the grid, smaller:**
> Not listed? If it has an API, we can almost certainly read from it. Where a system genuinely can't be reached live, we'll say so before you commit and propose a scheduled sync rather than promising real-time data that isn't available.

---

## SECTION 10 — Portal, or something else?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain treatment. **Omit or disable cards whose pages aren't live** — currently only Workflow Automation is.

## Is a portal actually what you need?

**Enterprise portals** — people **outside** your organisation log in and self-serve. *(This page.)*

**[Internal business tools](/services/internal-business-tools)** — your **own team** does the work. If everyone logging in is on your payroll, start there.

**[SaaS platforms](/services/saas-platforms)** — customers pay subscriptions and the software is your product, not a service wrapper around it.

**[Custom dashboards](/services/custom-dashboards)** — read-only visibility. If nobody needs to *do* anything, a dashboard is smaller and faster.

**[Workflow automation](/services/workflow-automation)** — something happens without anyone opening anything. If the goal is a status email that sends itself, you may not need a portal at all.

**[Web applications](/services/web-applications)** — the engineering underneath all of these.

> **Honest answer:** a good share of portal enquiries are solved by automated status notifications and a shared folder. That's weeks, not months, and it's a real answer — a portal only earns its cost when people need to *look things up on their own schedule*, not when they need to be told things on yours.

---

## SECTION 11 — Pricing

> **UI/UX — Template B's open price table**, matching B-1 through B-4. Three tiers, middle emphasised. Do not swap in Template C's engagement-model table; the open table is one of B's defining elements. If figures aren't confirmed, publish bracketed rather than removing the table — this buyer reads a missing price table as "expensive."

## What it costs

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.

### Single-audience portal — from $[X]
One audience — clients, vendors, or partners — with access modelling, the core screens, identity, notifications, and integration to your primary system. Includes the first month of monitoring.
*Good for: the audience generating the most inbound requests. This is most enquiries.*

### Multi-audience portal — from $[Y]
Several audiences sharing one identity and permission model, so the second and third cost a fraction of the first.
*Good for: businesses fielding requests from clients and vendors both.*

### Ongoing portal partner — from $[Z]/month
Monitoring, usage review and screen pruning, new sections as needs change, and a set amount of feature work each month.
*Good for: portals that have become the main client channel — most clients end up here.*

**Beneath the table:**
> Every build includes monitoring for the first month. After that it's $[M]/month and you can stop any time — you keep the source code, the data, and the documentation either way.

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards, matching the shared treatment. Read the note before publishing.

## What we've built

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo — the finance integration a vendor portal reads from.

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's inventory data moved through validated bulk imports and a live sync across a 5,000+ SKU catalogue.

*Note for the client: neither of these is a portal, and this page needs a screenshot more than it needs a third case study. **A portal is a visual product** — a buyer wants to see what their own client would see. Every competing page in this category shows an interface; yours currently shows data-entry metrics.*

*In order of return:*
1. **A portal screenshot** — anonymised, client names blurred. One real screen would outperform both cards combined.
2. **A portal case study** framed on requests eliminated, not hours saved. If any past project included a client-facing login, write it up.
3. **If neither exists,** keep both cards framed as the integration layer, as written above, and don't imply they're portal work.

---

## SECTION 13 — FAQ

> **UI/UX — Template B's two-column plain list**, not an accordion. One of B's defining differences from A and C — preserve it. Add `FAQPage` schema regardless of visual treatment.

## Common questions

**How is a portal different from just giving clients a login to our system?**
Access modelling, mostly. Your internal systems assume everyone using them works for you. A portal assumes the opposite — that a user should see exactly their own data and nothing else, enforced at the data layer rather than by a setting someone might get wrong. That difference is the whole project, and it's why "just give them a login" tends to end badly.

**Will our clients actually use it?**
Only if it's populated automatically, obvious without training, and paired with notifications that link straight to the relevant page. Portals that require your team to post updates fail, because the work moved rather than disappeared. We pilot with real users before rollout — the confusions that kill adoption are never the ones your own team predicts.

**Can different people at the same client see different things?**
Yes, and it's usually a requirement. Real organisations, teams, and roles — their finance contact sees invoices, their project lead sees deliverables, and access is enforced at the data layer rather than by hiding buttons.

**Can we use SSO?**
Yes — Google Workspace, Microsoft Entra ID, Okta, SAML and OIDC for enterprise users, and magic links for people whose organisations don't have SSO. Every password reset is someone who nearly emailed your team instead, so login friction gets more attention here than it usually gets.

**Does it pull live data from our CRM and accounting system?**
That's the point. Status from your CRM or project tool, invoices from your accounting system, documents from wherever they live. Where a system can't be reached live we'll say so upfront and propose a scheduled sync rather than promising real-time data that isn't available.

**Can clients upload files and submit requests?**
Yes — uploads, structured forms, approvals, and requests, with a history both sides can see. That two-way history is often what actually reduces email, more than the read-only screens do.

**Will it look like our brand?**
Entirely. Your domain, your identity, your language. A portal sitting in front of your clients that looks like generic vendor software undercuts the impression it was bought to create.

**How long does it take?**
[X]–[Y] weeks for a single-audience portal including the access model and a real-user pilot. Multi-audience builds run longer and go live one group at a time. The main variable is how many systems it reads from, not how many screens it has.

**What about security?**
Row-level isolation enforced at the data layer, audit logging on access and changes, SSO and SAML, encryption in transit and at rest, and regional hosting where EU or UK data residency is required. For a portal specifically, the isolation model is the thing to get right — a leak here is a client incident, not an internal inconvenience.

**Why not use SharePoint, SuiteDash, or Copilot?**
Often you should, and we'll say so. They're good products and much cheaper for standard document-and-message portals. Build custom when your access model doesn't fit theirs, when you need live data from systems they don't connect to, when per-client pricing stops making sense, or when vendor branding in front of your clients is a problem.

**Who owns the code and the data?**
You do. Source code, database, integration configuration, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts.

**How do you work with clients abroad?**
We're in Ahmedabad, India, and stay available for video calls in your US Eastern or UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved.

---

## SECTION 14 — Closing CTA

> **UI/UX — Template B's light bordered panel**, not a dark band. B's closing signature; must not drift toward A's full-bleed dark treatment. Single primary button, no competing secondary link, no email capture.

## Tell us the question your clients ask most.

Book a 30-minute call. We'll work out how many of your inbound requests a portal would actually absorb, tell you honestly whether an off-the-shelf product would do it, and give you a fixed price if building is the right answer.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from B-1 to B-4

| Element | B-1 | B-2 | B-3 | B-4 | **B-5** |
|---|---|---|---|---|---|
| Hero device | Manual vs automated | Inbox states | Document journey | Leakage chain | **Inbound request ledger, eight rows** |
| Explorer tabs | By use case | By inbox type | By document type | By business shape | **By audience — five types** |
| Process step one | Audit | Audit | Sample documents | Count and baseline | **Audience and access mapping** |
| Validation step | — | — | — | Parallel run | **Pilot with real external users** |
| Comparison | Zapier vs custom | — | OCR vs custom | Inventory tools vs custom | **Portal products vs custom** |

**Check before shipping:** put B-4 and B-5 side by side at 50% zoom. Hero device and explorer tabs alone should distinguish them.

## The thing that must not drift

**The hero ledger must look mundane.** Its persuasive power is recognition — a reader should see their own inbox in it. If a designer turns it into an infographic with icons, gradients, and illustrated arrows, it stops being recognisable and becomes decoration. Plain rows, plain type, log-like. Flag this in the design handoff, the same way the BI page's maturity gate and the Web Applications manifest are flagged.

## Accessibility

- Hero ledger as real `<ul>` or `<table>` markup with a proper caption, not SVG.
- Before/after columns must read sensibly in DOM order — pair each "now" row with its "after," or ensure the columns announce as two complete sequences rather than interleaved fragments.
- Tabbed explorer needs arrow-key navigation and correct `aria-selected`. **Five tabs is the most on any page in the set**, so keyboard handling matters more here than elsewhere.
- Sticky left rail must not trap focus and must be skippable.
- Price table needs real `<th>` scope attributes.

## Performance

- Section 9's logo grid is the heaviest block — use a sprite or inline SVG, keep text names in the DOM regardless of whether logos load.
- Explorer tab panels render on load, hidden with CSS. Five panels is a lot of text; that's fine and it's the point — lazy-mounting would lose the page's best keyword surface.
- The trust strip's duplicated marquee loop should be fixed globally before this page ships.

## Site-level issues

Unchanged across eight documents.

1. **`/about` still 404s and is still linked from the footer of every page.**
2. **There is still no `/services` index.** This would be the thirteenth service page reachable only via in-body cross-links.
3. **`/contact` still carries the old generalist positioning** and the all-caps "SPACIVA" mark.
4. **Brand mark is still inconsistent.**
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.**

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `[X]`–`[Y]` weeks | Hero, Section 7, Section 8 table, FAQ | Must be a range you'll honour. A portal with a real-user pilot runs longer than a workflow automation |
| `$[X]` — single-audience portal | Section 11 | |
| `$[Y]` — multi-audience portal | Section 11 | |
| `$[Z]` — monthly partner plan | Section 11 | |
| `$[M]` — maintenance monthly | Section 11 footnote | |
| Client logos and names | Section 2 | |
| **A portal screenshot** | Section 12 | **Highest-impact asset on this page.** Portals are visual products and buyers want to see one |

**Verify before publishing — two items:**

**One: the identity claims.** Section 9 and the FAQ name Okta, SAML, OIDC, and Entra ID. **Confirm you've implemented SAML SSO in production, not just OAuth social login.** Enterprise SSO is the most likely technical question on this page and the gap between those two is large.

**Two: the audience tabs.** Five portal types are described. Confirm which you've actually built — vendor, partner, and member portals in particular. The copy describes what would be built rather than what has been, which is fine as written, **but it must not drift into "we built this" at implementation**, and someone needs to be able to hold a call on each.

Nothing on this page presents an unverified figure as a client result, and Section 12 flags that neither case study is portal work.
