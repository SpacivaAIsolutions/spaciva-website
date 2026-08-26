# Spaciva — Cloud & DevOps Services Page

**URL:** `/services/cloud-devops`
**Layout:** **Template B — Operational / Before-After**, variant **B-6**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — BOUNDARY, SCOPE LIMIT, AND A STRUCTURAL WARNING

## The boundary with Web Applications

C-4 already covers infrastructure. Its handover manifest promises *"running in your own cloud accounts,"* *"infrastructure as code,"* *"CI/CD pipelines,"* *"staging and production environments,"* and *"monitoring and alerting configured."* That's a lot of this page's subject matter, already published.

**The distinction is who owns the application:**

> **Web applications** — **we build the software**, and the infrastructure comes with it. Infrastructure is a deliverable inside a build.
> **Cloud & DevOps** — **you already have software**, built by your team or someone else, and the infrastructure is the problem. Nothing new gets built; what exists gets migrated, automated, secured, or made cheaper.

That's a genuinely different buyer. C-4's reader is commissioning software. This page's reader has a running system, a cloud bill that's climbing, deploys everyone dreads, and no idea whether they'd survive losing their one server.

**Required edit if both ship:** C-4's spec panel and manifest stay as they are — they're accurate — but add one line to the manifest section: *"Already have an application and the infrastructure is the problem? See [cloud & devops]."* One sentence, no restructuring.

## The scope limit that has to be on the page

This matters more than the boundary. **A small team in one timezone cannot credibly offer 24/7 incident response**, and DevOps buyers will assume you're claiming it unless you say otherwise.

Every managed-services competitor sells an on-call rotation, a NOC, and a fifteen-minute response SLA at 3am. You can't match that, and pretending to is how you end up with a client whose production is down at 2am Eastern while everyone in Ahmedabad is asleep. That's a reputation event, not a service gap.

**So Section 3 declines it explicitly**, and offers what you can actually commit to: monitoring configured so *your* team is alerted, runbooks written so whoever is awake can act, and same-business-day response in your overlap hours. **Stated honestly, that's enough for most mid-market buyers** — the ones who genuinely need 3am hands need a managed provider and should hire one.

## Why Template B, and a warning about the template system

**Template B on merit.** The DevOps buyer isn't asking whether CI/CD works — they've read about it for years. They have a concrete weekly experience: nobody deploys on Friday, the bill went up again, an incident was reported by a customer rather than by a monitor. Their question is *"what changes in my week?"* That's B's job, and deploy-day before-and-after is one of the strongest before/after cases available in software.

**The warning.** This is the **sixth** Template B page. A is at five with a note saying a sixth should merge. C states four is the limit and is at four. D is at three. **The template system has done its job and is now straining, and the real answer is no longer another variant.**

What the site actually needs, before more pages:

1. **A tiered services architecture** — four or five *pillars* in the navigation, with the rest as satellites reachable from them. Sixteen equal top-level services is not a navigable structure for any buyer.
2. **A `/services` index** that expresses that hierarchy.
3. Then, and only then, more pages.

I'll keep writing pages if that's what's useful. But **the marginal return on page seventeen is now clearly lower than the return on one week of information architecture**, and I'd be doing you a disservice not to keep saying it.

## Template B variants

| | **B-1 Workflow** | **B-2 Email** | **B-3 Docs** | **B-4 Inventory** | **B-5 Portals** | **B-6 Cloud & DevOps** *(this page)* |
|---|---|---|---|---|---|---|
| Before/after device | Manual vs automated | Inbox states | Document journey | Stock leakage chain | Inbound request ledger | **The deploy — one change, start to live** |
| Explorer tabs | By use case | By inbox type | By document type | By business shape | By audience | **By problem: cost · reliability · speed · security · migration** |
| Process step one | Audit | Audit | Sample docs | Count and baseline | Access mapping | **Infrastructure audit and cost baseline** |
| Signature metric | Time per week | Response time | Docs per hour | Stock accuracy | Requests eliminated | **Deploy frequency and monthly spend** |

---

# PART 1 — SEO SPEC

## Primary keyword

`AWS cost optimization services` — not `DevOps services` and not `cloud consulting`.

`DevOps services` is a commodity SERP owned by large managed-services providers and offshore firms with hundreds of near-identical pages. The intent is vague, the buyers are often shopping for staff augmentation, and you'd compete on rate.

`AWS cost optimization` is the opposite in every respect. The buyer has a specific, measurable, monthly-recurring pain. The engagement has provable ROI, which makes it the easiest possible first sale. And — the part that matters commercially — **it is the cheapest route into an infrastructure relationship**, because a client who lets you into their AWS account to find savings has already given you everything you'd need to win the migration, the CI/CD work, and the retainer.

## Ranking targets

| Keyword | Note |
|---|---|
| `AWS cost optimization services` | Primary. Measurable ROI, easiest first sale |
| `reduce AWS bill` | **Symptom-phrased, high volume, weak commercial answers** |
| `cloud cost optimization for startups` | Qualifier filters out enterprise FinOps RFPs |
| `CI/CD implementation services` | Specific, commercial, moderate competition |
| `Docker containerization services` | Technical, under-served at the mid-market |
| `AWS migration services for small business` | The qualifier is doing the work again |
| `infrastructure as code implementation` | Terraform-adjacent, low competition, qualifies well |
| `DevOps for small teams` | **The undervalued one.** See below |
| `move off Heroku` / `Heroku alternative migration` | Distress-adjacent, very high intent |
| `we have no staging environment` | Symptom-phrased, tiny volume, converts exceptionally |

**The undervalued cluster is "DevOps for small teams."** `DevOps for small teams`, `DevOps without a DevOps engineer`, `we can't afford an SRE`. Searched by CTOs and lead developers at ten-to-fifty-person companies who know what they're missing and can't justify a $180k hire. Nobody writes for them, because the DevOps content market is aimed at enterprises. **They're your exact buyer profile and Section 3 is written for them.**

**The second is migration-distress.** `move off Heroku`, `our hosting provider is shutting down`, `migrate off legacy server`. Acute, time-boxed, budget already allocated.

**Do not chase** `DevOps services`, `cloud consulting`, `managed cloud services`, `24/7 cloud support`, or `Kubernetes consulting`. The first three are commodity SERPs; the last two describe things this page explicitly declines.

## Meta

**Title (58 chars):**
```
AWS Cost, CI/CD & Cloud Infrastructure Services | Spaciva AI
```

**Description (156 chars):**
```
Cut your cloud bill, make deploys boring, and stop finding out about outages from
customers. Infrastructure work for teams without a DevOps hire. Fixed price.
```

**H1:** `Deploys shouldn't be an event`
**URL:** `/services/cloud-devops` — not `/services/devops` (too thin, and it targets the commodity term).

## Positioning against neighbouring pages

> **Cloud & DevOps** — you **already have** software and the infrastructure is the problem.
> **[Web applications](/services/web-applications)** — we build the software and the infrastructure comes with it.
> **[Product strategy](/services/product-strategy)** — before either, if the project isn't specified yet.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the price table

## Internal linking

- Section 4 → `/services/web-applications` — **not live yet**
- Section 4 → `/services/saas-platforms` — **not live yet**
- Section 8 → `/services/product-strategy` — **not live yet**
- Case studies → `/case-studies/partsflow`, `/case-studies/unified-accounting` *(both live)*

Ship unbuilt links as plain text. `/about` still publishes a live 404 from the footer of every page.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template B opening.** Light base, **centred** copy. Beneath it, the **deploy timeline** running full width.
>
> Two horizontal tracks, one above the other, both showing the same journey — *code written → tested → reviewed → deployed → verified* — with **time markers underneath**. The top track ("today") is long, with gaps labelled *waiting for review*, *manual QA*, *scheduled for Tuesday*. The bottom track ("after") is short and continuous.
>
> The visual argument is elapsed time, made before a word is read. Distinct from B-5's request ledger and B-4's leakage chain. Inline SVG with real `<text>` nodes; stacks vertically below 1024px with the time markers preserved.

**Eyebrow:** CLOUD & DEVOPS

# Deploys shouldn't be an event

If nobody ships on a Friday, if a release needs a specific person's laptop, if you found out about the last outage from a customer — none of that is a discipline problem. It's missing infrastructure, and it's fixable in weeks. We do that work for teams who need it done properly and can't justify a full-time DevOps hire.

**[Book a 30-minute call]** **[Start with a cost audit →]**

**Proof line:**
```
Your AWS account, your code, your control · Fixed price · No lock-in and no proprietary tooling
```

**Deploy timeline content:**

| | Today | After |
|---|---|---|
| **Code to live** | Days, sometimes weeks | Under an hour |
| **Gaps** | Waiting for review · manual QA · "let's do it Tuesday" · someone's laptop | Automated tests · automated deploy |
| **Rollback** | Restore from backup, hope | One command, two minutes |
| **Who can do it** | One person | Anyone on the team |

*Small caption:* The cost isn't the deploy. It's every fix that waited for one.

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component — greyscale to colour on hover, client names as real text beneath each logo. Single row. The live service pages currently render the same eight logos twice through a duplicated marquee loop; fix globally rather than reproducing it.

**Label:** Trusted by teams in the US, UK, and India

`[Existing client logos with names rendered as text beneath]`

---

## SECTION 3 — What we don't do

> **UI/UX:** Two columns, equal visual weight — "What we do" left, "What we don't" right. **Do not style the right column as a disclaimer.** Placed high, above the offers, matching the ERP page's treatment.
>
> **This is the most important section on the page and the one most likely to be softened in review.** Softening it is how you end up owning a 2am incident you can't answer.

## Scope, before anything else

DevOps buyers assume a vendor is claiming 24/7 coverage unless told otherwise. Here's the honest boundary.

### What we do

**Cloud cost reduction** — find what you're paying for and don't use, and cut it. Measurable, and usually the first thing worth doing.

**CI/CD and automated deployment** — testing, building, and shipping without anyone's laptop involved, with a rollback that works.

**Infrastructure as code** — your environment reproducible from a repository instead of assembled by hand and remembered by one person.

**Migrations** — off Heroku, off a legacy VPS, between clouds, or onto managed services. Planned, staged, reversible.

**Monitoring and alerting** — so problems reach someone before a customer does, and so an incident can be investigated rather than guessed at.

**Security and access hardening** — least-privilege IAM, secrets out of code, encryption, and the controls your customers' security questionnaires ask about.

### What we don't do

**24/7 on-call incident response.** We're one team in one timezone. We won't sell you a rotation we can't staff, and a vendor promising 3am hands from a single office should worry you. What we do instead is set up monitoring that alerts *your* people, write runbooks so whoever is awake can act, and commit to same-business-day response in our overlap hours. **If you genuinely need someone awake at all hours, hire a managed provider — and we'll happily set the infrastructure up so they can run it.**

**Large-scale Kubernetes platform engineering.** Running a multi-tenant Kubernetes platform with a dedicated team is a specialism. We'll containerise your application properly with Docker and run it on managed services — ECS, Fargate, Cloud Run, App Runner — which is what most teams at your size actually need.

**Managed security operations.** We harden infrastructure and follow sound practice. We're not a SOC, we don't do threat monitoring or incident forensics, and we won't pretend to.

**Compliance certification.** We build so SOC 2 or ISO 27001 is achievable and we'll implement the technical controls. The audit itself needs an auditor. Any firm telling you they'll "get you SOC 2" is describing something they can't deliver alone.

> **A vendor who won't tell you what they can't cover is a vendor you'll find out about during an incident.**

---

## SECTION 4 — What we build

> **UI/UX — B's tabbed explorer, tabbed by problem.** Five tabs: **Cost · Reliability · Deploy speed · Security · Migration**. Each panel holds three or four capability blocks.
>
> Tabbing by problem rather than by technology is the B-6 distinction — a reader arrives with a symptom, not a tool preference. Panels must be in the DOM on load, hidden with CSS, never lazy-mounted.

**Eyebrow:** WHAT WE DO

## Five problems, in the order people usually have them

### Cost

**Find what you're paying for and don't use** — idle instances, oversized databases, unattached volumes, forgotten environments, data transfer nobody understands. This is almost always the first pass and it's almost always significant.

**Right-size and commit** — match instance types to actual load, then use reserved or savings plans on the baseline. Most teams are paying on-demand rates for capacity they've run continuously for two years.

**Architecture changes that cut the bill** — moving to managed services, containerising to pack workloads better, or shifting batch work to spot capacity where interruption is fine.

**Ongoing visibility** — spend broken down by service and environment, with alerts when something moves, so the next increase gets noticed in days rather than at renewal.

### Reliability

**Monitoring that reaches a person** — uptime, errors, and performance, wired to Slack, Teams, or PagerDuty. The most common gap we find isn't missing monitoring; it's monitoring installed and never routed anywhere.

**Backups that have been restored** — a backup nobody has tested is a hypothesis. We test the restore and document how long it takes.

**Removing single points of failure** — the one server, the one database with no replica, the one person who knows the deploy.

**Runbooks** — what to check first, how to roll back, who to call. So an incident doesn't depend on the right person being awake.

### Deploy speed

**CI/CD pipelines** — automated test, build, and deploy on merge. No laptops, no manual steps, no ceremony.

**Staging that matches production** — because "it worked on staging" is only useful if staging resembles the thing it's predicting.

**Rollback in one command** — the single change that does most to make deploying unscary.

**Infrastructure as code** — Terraform or equivalent, so environments are reproducible and changes are reviewable instead of clicked into a console at midnight.

### Security

**Access and IAM hardening** — least privilege, no shared root credentials, no long-lived keys in a Slack thread from 2022.

**Secrets management** — out of code and out of environment files, into a proper secrets store.

**Encryption and network boundaries** — in transit and at rest, with databases that aren't reachable from the public internet.

**Security questionnaire readiness** — the technical controls your customers' IT departments ask about, implemented and documented. Especially relevant if you run a [SaaS platform](/services/saas-platforms) selling into larger companies.

### Migration

**Off Heroku or a legacy host** — planned, staged, and reversible, onto infrastructure that costs less and does more.

**Onto managed services** — moving self-managed databases, queues, and caches onto managed equivalents, which is usually cheaper once someone's time is counted.

**Between clouds or accounts** — including the unglamorous parts: DNS, certificates, cutover sequencing, and a rollback plan.

**Containerisation** — Docker-ising an application that currently runs on a hand-configured server, so it can be deployed reproducibly anywhere.

**Below the tabs, smaller:**
> If you're also building something new, infrastructure comes as part of the build rather than as a separate engagement — see [web applications](/services/web-applications).

---

## SECTION 5 — Before and after

> **UI/UX — Template B's operational core.** Two columns, light throughout — no dark band. Left "A month now," right "A month after," same six rows, aligned so the eye reads across.
>
> **Note the unit change: a month, not a week.** Infrastructure pain is monthly-cyclical — the bill, the release, the incident — and forcing it into a week would misrepresent it. This is a legitimate B-6 departure.
>
> Sticky left rail becomes visible from here down, matching B-1 through B-5.

## What changes in your month

### A month now

**Week 1** — A fix is ready. It ships next Tuesday, with the other changes, when the person who does deploys is in.

**Week 2** — The site is slow. Nobody can say why. Someone SSHes in and looks at top.

**Week 3** — A customer reports an outage. It had been running for forty minutes.

**Week 4** — The AWS bill arrives, up again. Nobody can say which service moved.

**Any week** — A new developer takes three days to get running locally.

**In the background** — One person knows how the deploy works, and they're on leave next month.

### A month after

**Week 1** — The fix shipped forty minutes after it was written, by whoever wrote it.

**Week 2** — The slow query was in the dashboard before anyone asked.

**Week 3** — The alert fired at minute one. The runbook said what to check.

**Week 4** — The bill is lower, broken down by service, and an alert would have flagged a jump.

**Any week** — A new developer is running locally in an hour, from the README.

**In the background** — The deploy is a pipeline. Anyone can run it. Nobody is a single point of failure.

**Beneath the columns:**
> The two numbers we baseline in week one are **deploy frequency** and **monthly cloud spend**, because both are unambiguous and both are yours to verify. Everything else on this page is downstream of those two.

---

## SECTION 6 — Start with a cost audit

> **UI/UX:** Bordered panel, distinct from surrounding sections, price stated. Give it the weight of a pricing tier. This is the entry offer and the page's easiest conversion — treat it structurally the same way the UX audit and discovery sprint panels are treated on the D pages, so all three read as a family.

## A cloud cost and readiness audit — $[A], one week

The easiest way to find out whether we're useful, and the one engagement that frequently pays for itself before it finishes.

### What we do

Read-only access to your cloud account. We go through every running resource, what it costs, and whether anything uses it. Then the same for the things a bill doesn't show: whether backups restore, whether monitoring reaches anyone, whether deploys depend on a person, and where the access model is loose.

### What you get

**A costed list of savings**, each with the change required and the risk of making it, sorted by ratio of saving to effort. Most lists have several items that are an afternoon's work.

**A readiness assessment** — backups, monitoring, deploy process, access control, single points of failure — with what's fine, what's urgent, and what can wait.

**A straight answer on whether you need ongoing help.** Sometimes the finding is that your setup is sound and the fixes are three afternoons your own developer can do. We'll say so, in writing.

### What you're not committing to

**Nothing.** The report is yours. Hand it to your team, another firm, or nobody. **We'd rather run audits that go elsewhere than have you wonder whether the findings were shaped by wanting the follow-on work.**

**[Book a cost audit]**

*If you go ahead with the work, the audit fee comes off it.*

---

## SECTION 7 — How the work runs

> **UI/UX:** Horizontal process rail, **four steps**, matching B-1 through B-5. Numbered nodes, duration pills, stacks vertically on mobile. The B-6 distinction is step one — the audit and baseline — and step three, which is explicitly staged and reversible.

## Four phases, [X]–[Y] weeks

**01 — Audit and baseline** · *1 week*
The cost and readiness audit above, whether or not you bought it separately. We baseline deploy frequency and monthly spend so the outcome is provable rather than asserted. You get the written assessment regardless of what happens next.

**02 — Fixed scope and quote** · *2–3 days*
A written scope, fixed price, and delivery date, sequenced so the highest-value and lowest-risk changes come first. If scope moves, we re-quote in writing first.

**03 — Change one thing at a time** · *[X]–[Y] weeks*
Infrastructure work is not a rewrite. Each change is made, verified, and left running before the next begins, with a documented way back from every one. Nothing gets migrated on a Friday. Written update every Friday plus a short Loom walkthrough.

**04 — Hand over, then monitor** · *ongoing*
Everything documented — runbooks, architecture notes, access inventory — and walked through with your team so they can operate it. Then, if you want it: monitoring review, cost review, dependency and security patching, and a set amount of work each month.

---

## SECTION 8 — Do you actually need this?

> **UI/UX:** Four short blocks, two-up at desktop. Plain, no icons. The qualifying section — placed here rather than at the top because this reader wants to see the offer first.

## Four signals, and one that means you don't need us

### You need this if one person can deploy
Not "one person usually does" — one person *can*. That's a business risk before it's a technical one, and it's the most common reason teams call.

### You need this if you found out about an outage from a customer
Monitoring either doesn't exist or isn't routed to a human. This is the cheapest gap on the list to close and the most expensive to leave.

### You need this if the bill grows and nobody can explain it
Untracked spend compounds quietly. It's also the easiest thing to fix and the easiest to prove, which is why we lead with it.

### You need this if a new developer takes days to get running
That's a symptom of infrastructure that exists in someone's head rather than in a repository, and it slows everything downstream.

### You probably don't need us if…
You have a working pipeline, tested backups, monitoring that reaches someone, and a bill you can explain. Some teams call us and the honest answer is that their setup is fine and they've been told otherwise by someone selling something. **We'll tell you that on the call rather than after the audit.**

**Below the blocks, smaller:**
> If you're not sure what you're buying yet, a [discovery sprint](/services/product-strategy) is the more useful first step — it ends in a written specification you own either way.

---

## SECTION 9 — What we work with

> **UI/UX:** Logo grid grouped by category with small labels, greyscale to colour on hover. **Every name as real text alongside the logo**, not alt text alone — this is the page's richest keyword surface.

## The stack

Deliberately mainstream. Nothing proprietary, nothing that needs us specifically to operate.

### Cloud
AWS · Google Cloud · Azure · DigitalOcean · Vercel · Railway · Fly.io

### Containers and compute
Docker · ECS · Fargate · Cloud Run · App Runner · EC2 · Lambda · Cloud Functions

### CI/CD
GitHub Actions · GitLab CI · CircleCI · AWS CodePipeline · Bitbucket Pipelines

### Infrastructure as code
Terraform · AWS CDK · CloudFormation · Pulumi · Ansible

### Data and storage
RDS · Aurora · Postgres · MySQL · Redis · ElastiCache · S3 · CloudFront

### Monitoring and observability
CloudWatch · Sentry · Grafana · Prometheus · Datadog · Better Stack · uptime monitoring

### Security
IAM and least-privilege policies · AWS Secrets Manager · Vault · WAF · VPC design · encryption in transit and at rest

**Below the grid, smaller:**
> We work in your accounts, with your billing, under your control. No agency-owned infrastructure, no proprietary tooling, nothing you'd have to unpick if you stopped working with us.

---

## SECTION 10 — Cloud work, or something else?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain routing block. **Omit or disable cards whose pages aren't live** — currently none of these are except via the live pages listed in Part 1.

## Is infrastructure work what you need?

**Cloud & DevOps** — you already have software and the infrastructure is the problem. *(This page.)*

**[Web applications](/services/web-applications)** — you're building something new, and infrastructure comes as part of the build rather than as its own project.

**[SaaS platforms](/services/saas-platforms)** — your software is your product, and the infrastructure questions are tenancy, scale, and enterprise security review.

**[Product strategy](/services/product-strategy)** — you're not sure what the project is yet. A discovery sprint ends in a specification you own.

> **Honest answer:** if the complaint is "it's slow" and nobody has measured what's slow, that's an afternoon of investigation before it's a project. Start with the audit — it's the cheapest way to find out whether there's a project here at all.

---

## SECTION 11 — Pricing

> **UI/UX — Template B's open price table**, matching B-1 through B-5. Three tiers, middle emphasised. Don't substitute Template C's engagement table. If figures aren't confirmed, publish bracketed rather than removing the table.

## What it costs

Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.

### Cost and readiness audit — $[A]
One week, read-only access, a costed savings list and a readiness assessment you keep. Comes off the cost of any work that follows.
*Good for: finding out whether there's a problem worth paying to fix.*

### Infrastructure project — from $[X]
A defined piece of work: CI/CD implementation, a migration, containerisation, monitoring and alerting, or security hardening. Scoped, fixed price, documented, handed over. Includes the first month of support.
*Good for: you know what's broken and want it fixed properly once.*

### Ongoing infrastructure partner — from $[Z]/month
Monitoring review, cost review, security and dependency patching, and a set amount of infrastructure work each month. **Business-hours support in our overlap window — not a 24/7 rotation.**
*Good for: teams without a DevOps hire who need someone watching. Most clients end up here.*

**Beneath the table:**
> You can stop the monthly plan at any time and everything keeps running — it's in your accounts, defined in code in your repository, and documented. That's the whole design.

---

## SECTION 12 — Case studies

> **UI/UX:** Two cards, matching the shared treatment. Read the note before publishing.

## What we've built

**[70% less manual data entry — Unified Accounting](/case-studies/unified-accounting)**
Vendors, invoices, and payments moved through automated pipelines across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo — six systems, one integration layer running in production.

**[80% faster data entry — PartsFlow](/case-studies/partsflow)**
A spare-parts distributor's inventory data moved through validated bulk imports and a live sync across a 5,000+ SKU catalogue.

*Note for the client: neither is an infrastructure case study, and this page has an unusually cheap fix available. **The two numbers this page cares about — deploy frequency and cloud spend — are the easiest metrics on your entire site to evidence**, because they don't need a client's permission to be interesting.*

*In order of return:*
1. **A cost reduction figure from any engagement.** "Cut a client's monthly AWS bill from $X to $Y" is the single most persuasive sentence this page could contain, and it needs no screenshot and no client name.
2. **A deploy frequency change.** "Weekly manual releases to twelve deploys a day" carries the same weight.
3. **Your own infrastructure as the example.** If you run your own deployments well, that's a legitimate and checkable story — and it's the one case study you don't need a client to approve.

---

## SECTION 13 — FAQ

> **UI/UX — Template B's two-column plain list**, not an accordion. Preserve it; it's one of B's defining differences. Add `FAQPage` schema.

## Common questions

**Do you offer 24/7 support?**
No, and we'd rather say so plainly. We're one team in one timezone and we won't sell an on-call rotation we can't staff. What we do is configure monitoring that alerts your people, write runbooks so whoever is available can act, and commit to same-business-day response in our overlap hours with US Eastern and UK time. If you genuinely need 3am hands, hire a managed provider — we'll set things up so they can run it.

**How much can you actually cut our cloud bill?**
It depends entirely on what's running, which is why we start with an audit rather than a promise. The common findings are consistent: environments nobody uses, instances sized for a load that never arrived, storage nobody deleted, and on-demand pricing on capacity that's been running for years. The audit gives you a costed list and you decide what's worth doing.

**Will you need access to our production systems?**
For the audit, read-only access is enough and that's what we ask for. For implementation, we agree the access needed for each piece of work and remove it afterwards. Everything is in your accounts under your control, and you can revoke access at any moment.

**We don't have a DevOps person. Is that a problem?**
That's most of who this page is for. Teams of ten to fifty who know what they're missing and can't justify a specialist hire. We set things up so your existing developers can operate them — mainstream tools, defined in code, documented — rather than building something that needs us.

**Can you migrate us off Heroku?**
Yes, it's a common project. Staged and reversible, usually onto containers on managed services, typically at meaningfully lower cost. The main work is the unglamorous part — environment variables, add-ons, background workers, DNS, and cutover sequencing — and that's where migrations go wrong when they go wrong.

**Do you do Kubernetes?**
We'll containerise your application with Docker and run it on managed services — ECS, Fargate, Cloud Run, App Runner — which is what most teams at this size need. Running a full Kubernetes platform is a specialism with a dedicated team behind it, and if you genuinely need that, you need a platform engineering firm.

**Can you get us SOC 2 compliant?**
We implement the technical controls — access management, encryption, logging, backup and recovery, change management — and we build so certification is achievable. The audit itself requires an auditor, and any firm claiming they'll "get you SOC 2" on their own is describing something they can't deliver.

**What if we stop working with you?**
Everything keeps running. It's in your cloud accounts, defined as code in your repository, and documented with runbooks. There's no agency-owned infrastructure and no proprietary tooling to unpick. That's deliberate — it's what makes the monthly plan a choice rather than a dependency.

**How long does the work take?**
The audit is a week. A defined project — CI/CD, a migration, monitoring — is typically [X]–[Y] weeks, done one change at a time with each verified before the next. Infrastructure work that moves fast is infrastructure work that breaks things.

**Do you work with Azure and Google Cloud too?**
Yes. AWS is the most common in our work, and the practices are the same across all three. If you're choosing between them, we'll give you an honest opinion on the call — we hold no partner relationships that would shape the answer.

**How do you work with clients abroad?**
We're in Ahmedabad, India, with committed overlap hours with US Eastern and UK working time and a same-business-day response commitment during those hours. A written update every Friday plus a short Loom walkthrough of what changed.

---

## SECTION 14 — Closing CTA

> **UI/UX — Template B's light bordered panel**, not a dark band. B's closing signature. Single primary button, no competing secondary link, no email capture.

## Find out what you're paying for.

A week, a fixed fee, read-only access, and a costed list of what to fix — yours to keep whether you work with us or not.

**[Book a cost audit — $[A]]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from B-1 to B-5

| Element | B-1 | B-2 | B-3 | B-4 | B-5 | **B-6** |
|---|---|---|---|---|---|---|
| Hero device | Manual vs automated | Inbox states | Document journey | Leakage chain | Request ledger | **Deploy timeline, two tracks** |
| Explorer tabs | Use case | Inbox type | Document type | Business shape | Audience | **Problem** |
| Before/after unit | A week | A week | A week | A week | A week | **A month** |
| Above the offers | — | — | — | — | — | **"What we don't do" scope limit** |
| Entry offer | — | — | — | — | — | **Cost audit, priced** |

**Check before shipping:** put B-5 and B-6 side by side at 50% zoom. Hero device and explorer tabs alone should distinguish them.

## The two things that must not drift

**One: the 24/7 decline stays, at full weight.** It will be flagged as losing deals. It loses the deals you should lose. A client who believed you had an on-call rotation and discovers otherwise during an incident is worse than any number of enquiries that went elsewhere.

**Two: the before/after unit stays a month.** Someone will want it changed to a week for consistency with B-1 through B-5. Infrastructure pain is monthly-cyclical — the bill, the release cadence, the incident — and a weekly frame would misrepresent it.

## Accessibility

- Deploy timeline needs `role="img"` with an `aria-label` describing both tracks and the time difference, plus real `<text>` nodes.
- **The time difference must not be conveyed by track length alone** — keep the labels.
- Before/after columns must read sensibly in DOM order.
- Tabbed explorer needs arrow-key navigation and correct `aria-selected`.
- The offer panel needs a proper heading level, not just visual prominence.
- Price table needs real `<th>` scope attributes.

## Performance

- Section 9's logo grid is the heaviest block on the page — roughly 40 marks across seven categories. Use a sprite or inline SVG, and keep text names in the DOM regardless of whether logos load.
- Explorer tab panels render on load, hidden with CSS.
- **This page will be audited by technical buyers**, same as the Web Applications page. A DevOps page with poor Core Web Vitals is self-refuting.
- The trust strip's duplicated marquee loop should be fixed globally before this page ships.

## Site-level issues

Unchanged across twelve documents.

1. **`/about` still 404s and is still linked from the footer of every page.**
2. **There is still no `/services` index.** This would be the seventeenth page reachable only via in-body cross-links. See the structural warning in Part 0.
3. **`/contact` still carries the old generalist positioning** and the all-caps "SPACIVA" mark.
4. **Brand mark is still inconsistent.**
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.**

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `$[A]` — cost and readiness audit | Section 6, Section 11, closing CTA | **Price it low.** It's the entry point and it should feel like an obvious yes. It often pays for itself in month one |
| `[X]`–`[Y]` weeks — project duration | Section 7, Section 11, FAQ | A range you'll honour |
| `$[X]` — infrastructure project | Section 11 | |
| `$[Z]` — monthly partner plan | Section 11 | |
| Committed overlap hours | Section 3, FAQ | **State the actual hours.** "Business hours" without a timezone reads as no commitment to this buyer specifically |
| Client logos and names | Section 2 | |
| **A cost saving or deploy frequency figure** | Section 12 | **Cheapest high-value proof on the whole site.** No screenshot, no client name needed |

**Verify before publishing — three items:**

**One: the stack list.** Section 9 names roughly forty tools across seven categories. **Confirm you'd be comfortable in a technical call on each, or move the unverified ones to a "we also work with" line.** Terraform, Pulumi, Prometheus, and Vault in particular are the ones a competent buyer will probe.

**Two: the audit is deliverable as described.** It promises a costed savings list sorted by effort ratio, a readiness assessment across five areas, and a written recommendation. **Run one against your own infrastructure first.** It's the page's entry offer and the deliverable is the product.

**Three: the overlap-hours commitment.** Section 3 offers same-business-day response in overlap hours as the alternative to 24/7. That's a real commitment and this buyer will hold you to it. Confirm it before publishing.

Nothing on this page presents an unverified figure as a client result, and Section 12 flags that neither case study is infrastructure work.
