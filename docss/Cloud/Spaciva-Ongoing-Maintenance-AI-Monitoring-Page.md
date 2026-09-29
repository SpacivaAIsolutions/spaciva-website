# Spaciva — Ongoing Maintenance & AI Monitoring (Retainer) Page

**URL:** `/services/ai-monitoring-maintenance`
**Layout:** **Template B — Operational / Before-After**, variant **B-5**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — READ THIS BEFORE COMMISSIONING THE PAGE

## This page is not primarily an acquisition page, and it should not be measured like one

Every other page in the set is written to be found. This one is different, and getting that wrong will make it look like a failure when it's working.

**Sixteen pages currently end by promising a monthly plan.** The homepage names "Ongoing Support" as one of three pillars. Every service page says "monitored monthly," "a named engineer," "tuning and updates." Right now that promise has nowhere to land — it's an unsupported claim repeated site-wide, and a buyer who wants to know what it costs has to book a call to find out.

So this page has two jobs, in this order:

1. **Make the recurring-revenue promise concrete and priced.** It's the destination for every "monitored monthly" line on the site, and it converts by removing ambiguity from a claim the buyer has already read four times.
2. **Capture rescue traffic.** A smaller but genuinely valuable second job — see the SEO spec.

**Measure it on assisted conversion and on how many discovery calls arrive already understanding the plan, not on organic sessions.** The head terms in this category have low volume and the ones with volume are wrong-intent. A page that ranks for nothing and closes plans is doing exactly what it was built for.

## The commercial argument this page has to win

Retainers are sold badly almost everywhere, and the reason is structural: **you're asking someone to pay every month for an outcome that looks identical to doing nothing.** A good month and an unmanaged month are indistinguishable from the outside, right up until they aren't.

The page's whole job is to make the invisible month visible. Hence the before/after treatment and hence the itemised "quiet month" block in Section 4, which is the single most important section on the page.

**The second argument, and it's the one that's actually true of AI specifically:** conventional software mostly keeps working if you leave it alone. AI systems measurably don't. Model versions get retired by the provider on a published schedule. Accuracy degrades as inputs shift. Prompts that worked against one model version behave differently against the next. That's not a defect story — it's the nature of the technology, and it makes the plan a genuine requirement rather than an upsell. **Say it plainly and the retainer stops sounding like insurance and starts sounding like operations.**

## Why Template B, and how B-5 stays distinct

The buyer needs to see *what changes in my month and what does it cost* — textbook Template B. They don't doubt maintenance is a good idea; they doubt they're getting anything for the money.

| Element | B-1 Workflow | B-2 Email | B-3 CRM | B-4 Inventory | **B-5 Retainer** *(this page)* |
|---|---|---|---|---|---|
| Tab axis | By audience | By audience | By CRM platform | By channel | **By system type — what maintenance means for an agent vs a pipeline vs an app** |
| Before/after | Three processes | One inbox, one day | One deal record | One SKU | **One incident, run twice: with a plan and without** |
| Extra section | — | Drafts or sends | Fix the data first | — | **What's not included, and when not to buy this** |
| Pricing | Three columns | Three columns | Three columns | Three columns | **Three columns (shared) + a response-time table** |

The before/after axis is the meaningful break: every other B page compares a manual process to an automated one. This one compares **the same failure with and without someone watching**, which is the only honest way to show the value of work whose success state is silence.

---

# PART 1 — SEO SPEC

## Primary keyword

`ai monitoring and maintenance services`

Low volume. Say so internally rather than discovering it in month three and concluding the page failed. Nobody types "AI maintenance retainer" — the phrase is vendor vocabulary, not buyer vocabulary.

**The buyer vocabulary is failure vocabulary**, and that's where the real opportunity sits.

## Ranking targets

| Keyword | Note |
|---|---|
| `ai monitoring and maintenance services` | Primary in name. Low volume, exact intent |
| `ai model drift monitoring` | Technical, small, converts. The honest core of the offer |
| `llm observability services` | Rising, technical, near-zero agency competition |
| `who maintains ai systems after launch` | **Question-phrased. Almost nobody answers it.** Prime GEO target |
| `ai automation support and maintenance cost` | Cost intent — answer with structure even if figures are bracketed |
| `take over existing automation project` | **The workhorse. See below** |
| `fix broken n8n workflow` / `zapier automation stopped working` | Symptom-phrased, urgent, tiny competition |
| `inherited codebase no documentation` | Emergency intent, adjacent buyer, converts unusually well |
| `our chatbot stopped working` | Symptom-phrased and increasingly common |
| `ai maintenance vs software maintenance` | Comparison intent. Section 3 owns it |

**The undervalued cluster is rescue and takeover.** `take over existing automation project`, `developer stopped responding`, `fix broken automation after api update`, `inherited codebase no documentation`. These are typed by someone in active pain, with budget already approved, and with no loyalty to the vendor who left them there. Competition is close to zero because agencies want new builds and write only about new builds.

It is also **the highest-quality lead type on the entire site**: a rescue client arrives pre-sold on the value of maintenance, because they are currently living inside the argument this page is making. Several will convert into build work afterwards.

Section 7 is written specifically for this cluster and should not be trimmed for length.

**The second angle is the model-deprecation deadline.** Providers retire model versions on published schedules, and a system built against a retired version stops working on a date somebody else chose. Almost nothing written for a non-technical buyer explains this. It's concrete, it's checkable, it's a hard date rather than a vague warning, and it's the most persuasive single fact available to this page. Section 3 leads with it.

**Do not chase** `application maintenance services`, `it support services`, `managed services provider`, `devops as a service`. Enormous volume, completely wrong comparison set — it would put you against IT outsourcers and MSPs, where you'd lose on price and be judged on a service you don't sell.

## Meta

**Title (48 chars):**
```
AI Monitoring & Maintenance Retainer | Spaciva AI
```

**Description (154 chars):**
```
Monitoring, drift tuning, model updates and fixes on AI systems and automations —
ours or someone else's. Monthly, no lock-in, a named engineer who knows it.
```

**H1:** `AI systems don't break on launch day. They break in month seven.`

**URL:** `/services/ai-monitoring-maintenance` — not `/services/support` (thin, and it reads like a helpdesk), not `/services/retainer` (vendor vocabulary again, and nobody searches it), not `/maintenance` (belongs in `/services/` with its siblings for the breadcrumb and internal-link structure to hold).

## Positioning against neighbouring pages

This page's relationship to the others is different from every other pair on the site: it isn't an alternative to them, it's the second half of all of them. Say that explicitly rather than routing.

> **Every other page on this site builds something. This is the page about keeping it working.**

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the plan table

**`FAQPage` matters more here than on any other page.** "Who maintains AI systems after launch," "how much does AI maintenance cost," and "what happens when a model is deprecated" are questions LLMs field constantly and answer with generalities. Marked-up specific answers are the cheapest visibility on the site.

## Internal linking

**Inbound is the whole point.** Every page that currently promises a monthly plan must link here from that promise — sixteen pages at last count, including the homepage's "Ongoing Support" pillar and the About page's third "what we do" card. **Do this as a single global pass, not page by page.** An unlinked mention on fifteen pages and a link on one is the version that fails.

Outbound, keep it light — this page's job is to close, not to route:
- Section 5 → `/services/ai-agent-development`, `/services/rag-chatbot-development`
- Section 5 → `/services/workflow-automation`, `/services/data-warehousing-etl`
- Section 7 → `/contact`

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template B opening.** Light base, sticky left-rail section nav from here down. Two columns at ≥1024px: copy left, **status panel right**.
>
> **The right-hand panel is a mock system-health view** — four or five named systems, each with a status dot, a last-checked timestamp, and one showing an amber "schema change handled — no action needed." Not a chart, not a dashboard screenshot. It should read as *someone is watching this*, which is the entire product.
>
> **Label it as illustrative.** Do not present it as a live client dashboard.

**Eyebrow:** ONGOING MAINTENANCE & AI MONITORING

# AI systems don't break on launch day. They break in month seven.

An API changes. A model version gets retired by the provider. Accuracy drifts as your inputs shift. None of it announces itself — the system keeps running and quietly starts being wrong. We monitor, tune, update, and fix the systems we build, and the ones we didn't, for a fixed monthly fee with a named engineer attached.

**[Primary CTA]** Book a 30-minute call
**[Secondary CTA]** See what's included

**Proof line:** From $[X]/month · Month-to-month, no lock-in · Documentation handed over whether you stay or go

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component. Greyscale to colour on hover, client names as real text beneath each logo, single row. The duplicated marquee loop and the stray `navdrin` text node are still live across service pages — fix globally.

**Label:** Trusted by teams in the US, UK, and India

---

## SECTION 3 — Why AI systems are different

> **UI/UX — placed high on purpose, before any pitch.** Four short blocks in a 2×2 grid. **Block one gets visual emphasis** — a border, a slightly larger type size — because the model-deprecation deadline is the most concrete argument on the page.
>
> Keep this section genuinely short. It's an argument, not a feature list, and the moment it becomes a list of maintenance activities it stops working and Section 4 becomes redundant.

**Eyebrow:** WHY THIS ISN'T OPTIONAL

## Conventional software mostly keeps working. AI systems measurably don't.

If you leave a well-built web app alone, it will probably still work next year. That intuition is reasonable, it's why maintenance plans feel like an upsell, and it does not transfer to AI systems.

### The model you built on has a retirement date

Every major provider retires model versions on a published schedule. When yours is retired, your system stops working on a date somebody else chose. Moving to the replacement isn't a switch — outputs shift, prompts behave differently, and the whole thing needs re-testing against your actual cases. **This is a calendar event, not a risk, and someone has to be tracking it.**

### Accuracy drifts because your business does

The model was tuned on the documents, tickets, and products you had at launch. You've since added a product line, changed your pricing page, and started serving a different customer. Nothing broke. The answers just got worse, gradually, in a way nobody notices until a customer points it out.

### The systems around it change without telling you

Your CRM ships an update. A vendor changes an API response. A source adds a required field. Integrations are the most common failure point in any AI system and they fail on somebody else's release schedule, not yours.

### Failure is silent by default

A crashed server pages someone. A drifted model returns a confident, plausible, wrong answer and logs a success. **Without monitoring built specifically for it, the failure mode of an AI system is looking fine.**

---

## SECTION 4 — What a quiet month looks like

> **UI/UX — the signature block of B-5 and the most important section on the page.** Full-width, generous spacing. A month laid out as an itemised list of specific, small, unglamorous events — each one a line with a date-ish marker.
>
> **Design it to feel mundane, not heroic.** No alert-red styling, no incident drama, no "we saved the day" framing. The persuasive mechanism is that the reader recognises every item as something that would have gone unnoticed on their side and eventually become expensive. Understatement is doing the work.
>
> Close on the bolded line. It's the thesis of the entire page.

**Eyebrow:** WHAT YOU'RE PAYING FOR

## A month where nothing happened, itemised

This is roughly what a good month looks like on a plan. None of it would have reached you.

- A source system added a required field. The connector was updated before the next scheduled run.
- Accuracy on one document type slipped after you changed a template. Caught in weekly review, prompt adjusted, back to baseline.
- The provider announced a deprecation date for a model version you're running. Diarised, migration scheduled with room to spare.
- Three dependency updates applied, one of them a security patch.
- A load failed overnight on a rate limit. Retried automatically, then the retry window was widened so it wouldn't recur.
- Someone on your team asked for an extra field on a report. Done inside the plan.
- Monthly note sent: what ran, what was fixed, what's coming, and what we'd suggest next.

**Nothing on that list would have been an emergency this month.** Two or three of them would have become one within a quarter — usually noticed by a customer, or by a number that was wrong for longer than anyone realised.

> **You're not buying incident response. You're buying the month where the incident didn't happen.**

---

## SECTION 5 — What maintenance means for your system

> **UI/UX — tabbed explorer**, per Template B rules. **Four tabs, by system type.** This is B-5's structural break from the audience-tabbed and platform-tabbed B pages.
>
> Tabs must be real anchors with content in the DOM, not client-side-only panels. Each tab: what's monitored, what typically needs attention, and what "included" covers.

**Eyebrow:** BY SYSTEM TYPE

## The work isn't the same for every system

### AI agents and chatbots
**Monitored:** answer accuracy against a held-out set, response latency, escalation and fallback rates, cost per conversation, retrieval quality where a knowledge base is involved.
**Typically needs attention:** prompt tuning as your content changes, re-indexing when documents are added or revised, model-version migrations, tightening a fallback that fires too often or not often enough.

### Automations and integrations
**Monitored:** run success rates, queue depth, error patterns, third-party API health and deprecation notices.
**Typically needs attention:** connector updates when a vendor changes an endpoint, retry and rate-limit tuning, error-queue review so failed items get resolved instead of accumulating, credential and token rotation.

### Data pipelines and warehouses
**Monitored:** freshness against expected arrival windows, row-count anomalies, schema drift, warehouse and connector spend.
**Typically needs attention:** schema changes at source, backfills after an outage or a correction, query and cost optimisation, adding sources as they appear.

### Custom applications and internal tools
**Monitored:** uptime, error rates, performance, dependency and security advisories, backup integrity.
**Typically needs attention:** dependency and framework updates, security patches, small feature requests, and the ordinary accumulation of "can it also do this."

---

## SECTION 6 — The same incident, twice

> **UI/UX — Template B's signature before/after element**, adapted. Two columns side by side, same incident, two timelines running down the page in parallel so the reader's eye compares row by row.
>
> **Left column: no plan. Right column: on a plan.** Use the same event and the same clock on both sides. Keep the left column factual rather than catastrophic — an exaggerated horror story reads as marketing and loses the reader who has actually lived through one.

**Eyebrow:** THE DIFFERENCE

## One API change, two versions of the same month

**Without a plan**

- *Tuesday* — A vendor changes a response field. Your integration keeps running and starts writing blanks.
- *Following weeks* — Reports look slightly off. Someone assumes it's a reporting bug.
- *Week four* — A client asks why a number is wrong. Nobody can say how long it's been wrong.
- *Week four* — Your original developer is on another project, or unreachable, or gone. Finding someone who can read the code takes days.
- *Week five* — Fixed. Then the real work starts: identifying every record affected and correcting a month of downstream data.
- **Cost:** the fix, the backfill, the client conversation, and a quiet loss of confidence in every other number the system produces.

**On a plan**

- *Tuesday* — The field-level check fails on the first run after the change. Alert reaches us, not you.
- *Tuesday* — Connector updated. Affected rows re-processed from the last good run.
- *Tuesday* — Logged.
- *Month end* — It appears as one line in your monthly note.
- **Cost:** included.

---

## SECTION 7 — Systems we didn't build

> **UI/UX:** Full-width block, distinct background tint. **This is the page's acquisition section and its highest-intent traffic target** — see the rescue cluster in the SEO spec. Give it real space and a dedicated CTA of its own, phrased for urgency.
>
> Do not soften the language about inherited systems. The person reading this is in it right now and precision reads as competence.

**Eyebrow:** RESCUE & TAKEOVER

## We take on other people's systems, and it's a third of what we do

Your developer went quiet. The agency that built it doesn't do maintenance. The person who owned it left and took the context with them. The automation has been broken for two weeks and nobody can find where it runs.

That's a normal Monday and it's a normal engagement. Here's how it goes.

**A two-week audit, first.** We map what exists, what it depends on, where it runs, what's undocumented, and what's actually broken versus merely alarming. You get a written assessment and a recommendation. It's a fixed price and it's yours to keep whether or not you continue with us.

**Then an honest verdict.** Sometimes the answer is a rebuild. **More often it isn't.** The engineering is usually sound and what's missing is everything around it — no monitoring, no documentation, no version control, no owner. Wrapping a working system in those four things is a fraction of the cost of replacing it, and we'll tell you when that's the case even though the rebuild is the bigger invoice.

**Then we take the pager.** Once the audit is done and gaps are closed, it moves onto a standard plan and the alerts route to us.

**What we'll need:** repository access or the code itself, credentials or a path to reissuing them, and hosting access. **If nobody has any of those, say so on the call** — it's recoverable more often than you'd expect, but it changes the shape of the first two weeks and we'd rather plan for it than discover it.

**[Book an audit call]**

---

## SECTION 8 — Plans

> **UI/UX — open pricing table on the page**, per Template B rules. Three columns, middle emphasised. **Below it, a separate response-time table** — B-5's addition to the shared component, and the detail this buyer is actually shopping on.
>
> Publish without figures if prices aren't confirmed, but **do not publish the response-time table without real committed numbers.** A response commitment you can't honour at 2am on your side of the world is worse than no commitment at all — this is the one place on the site where a soft number becomes a broken promise with a timestamp on it.

**Eyebrow:** PLANS

## Three plans, month to month

### Essentials — from $[X]/month
Monitoring and alerting, uptime and error tracking, dependency and security updates, failure response, and a monthly written note. **Best for:** one system, stable, low change rate.

### Standard — from $[Y]/month
Everything in Essentials, plus accuracy and drift monitoring with tuning, model-version migrations, connector updates when vendors change APIs, backfills and error-queue review, and **[X] hours of small feature work each month.** A named engineer. **Best for:** most clients, most systems.

### Partner — from $[Z]/month
Everything in Standard, plus a larger monthly allowance, priority response, quarterly review of the whole stack including cost, and a roadmap conversation rather than a ticket queue. **Best for:** several systems, or one that's central to how the business runs.

**Response commitments**

| | Essentials | Standard | Partner |
|---|---|---|---|
| System down | `[X]` | `[X]` | `[X]` |
| Degraded or producing wrong output | `[X]` | `[X]` | `[X]` |
| Everything else | `[X]` | `[X]` | `[X]` |
| Overlap hours with US Eastern and UK | `[X]` | `[X]` | `[X]` |

**Below the table:**
> Month to month. Thirty days' notice, no minimum term, no exit fee. Documentation, code, and credentials are yours throughout and handed over cleanly whether you're leaving us or just taking it in-house. **A plan you can cancel is the only kind worth selling** — if we're not earning it, we'd rather you stopped paying than stayed locked in.

---

## SECTION 9 — What's not included

> **UI/UX:** Plain two-column list, deliberately undesigned. Small type, no icons, no cards. **The lack of visual effort is the point** — this reads as a contract clause rather than a marketing section, which is exactly the register that makes it credible.
>
> Almost nobody publishes this. It prevents the scope arguments that end retainers, and it is disproportionately persuasive to a buyer who has been burned by a vague one.

## Where the plan stops

Being specific about this up front is how the plan survives contact with year two.

**Included:** monitoring and alerting · failure diagnosis and fixes · accuracy and drift tuning · model-version migrations · connector and integration updates when third parties change · dependency and security updates · backfills and reprocessing · small feature work up to the monthly allowance · a named engineer and a monthly written note.

**Not included:** new systems or new integrations · significant new features beyond the allowance · redesigns · data-entry or manual operational work · your third-party licences, API usage, or hosting costs, which stay in your name and are billed to you directly · support for systems we haven't audited.

**On the last two, plainly.** We don't resell infrastructure or model usage — you pay providers directly at their prices, so there's no margin for us in your usage going up, and we can recommend the cheaper option without it costing us anything. And we won't take responsibility for a system we haven't looked at; the audit in Section 7 exists precisely so we're never guessing about what we've agreed to keep alive.

---

## SECTION 10 — When not to buy this

> **UI/UX:** Single centred block, max ~680px, bordered. Short. Placed immediately after the pricing and exclusions on purpose — this is the moment the reader is deciding, and turning some of them away is what makes the rest of the page credible.

## Some systems don't need a plan

**A three-step Zapier automation between two mainstream tools.** If it breaks, it breaks loudly and someone can fix it in an afternoon. Pay for that afternoon when it happens.

**A static site or a system with no AI, no integrations, and no data flowing through it.** Very little decays. Check the dependencies twice a year.

**A system your own team already owns properly** — with monitoring, documentation, and someone whose job it is. That's the right end state. If you're there, we're overhead.

> The plans exist for systems with moving parts: models that drift, integrations that change on someone else's schedule, and data arriving on a timetable. **If yours doesn't have those, we'll say so on the call.**

---

## SECTION 11 — FAQ

> **UI/UX — two-column FAQ, no accordion**, per Template B rules. Add `FAQPage` schema. Higher priority here than on any other page — these are questions LLMs answer with generalities today.

## Common questions

**Do we have to keep paying to keep the system?**
No. You own the code, models, and documentation outright from final payment. The plan buys monitoring and maintenance, not access. Cancel any time with thirty days' notice and everything stays yours, documented.

**Can you maintain something you didn't build?**
Yes — it's roughly a third of our maintenance work. It starts with a fixed-price two-week audit so we both know what we're taking on. The written assessment is yours regardless of what you decide next.

**What actually happens when a model gets deprecated?**
We track announced retirement dates for every model in your systems. Before the deadline we migrate to the replacement, re-test against your real cases, adjust prompts where behaviour has shifted, and confirm accuracy against the previous baseline. It's included on Standard and Partner plans.

**How is this different from a normal software support contract?**
Traditional maintenance is mostly about keeping something running. AI maintenance adds keeping it *correct* — accuracy monitoring, drift tuning, retraining, and model migrations. A system can be running perfectly and producing worse answers than it did in March, and only the second kind of monitoring catches that.

**Who do we contact, and how fast will you respond?**
A named engineer who knows your setup, reachable on email and a shared Slack or WhatsApp channel. Response commitments are in the table above and they're in the contract, not just on this page.

**Do you work in our time zone?**
We commit to `[X]` hours of overlap with US Eastern and UK working hours, with a same-business-day response on anything urgent. `[Confirm the real number — this is one of the top three objections offshore buyers raise, and a vague answer here costs more than a modest one.]`

**What if nothing goes wrong for months?**
Then you've had the outcome you're paying for, and the monthly note will be short. If a system genuinely proves stable enough not to need the plan, we'll suggest moving you down a tier. It's happened.

**Do you charge for the API and hosting costs?**
No. Provider and hosting accounts stay in your name and you're billed by them directly at their prices. We don't resell usage and don't take a margin on it, which is why we can tell you when a cheaper model or a smaller instance would do the same job.

---

## SECTION 12 — Closing CTA

> **UI/UX — light bordered closing CTA**, per Template B rules. Not a dark band — that's Template A's treatment and the distinction should hold across all five B pages.

## Tell us what's running, and who's watching it.

Book a 30-minute call. Whether we built it or someone else did, we'll tell you what's likely to break first, what it would take to keep it healthy, and what that costs a month.

**[Book a call]**

---

# PART 3 — BUILD NOTES

## The global pass this page depends on

**This page fails without it.** Sixteen pages promise a monthly plan and none of them currently link anywhere. Before or with launch:

1. Every service page's maintenance mention links here.
2. The homepage's "Ongoing Support" pillar card links here — currently it points at a homepage anchor along with the other two.
3. The About page's third "what we do" card links here.
4. The footer's Services column links to real service pages instead of homepage anchors.

Do it as one pass. Half-done is worse than not started, because it teaches the reader the links are decorative.

## What makes this visibly different from B-1 to B-4

1. **The status panel hero** — no other B page opens on a system-health view.
2. **Section 4's itemised quiet month**, which has no analogue anywhere on the site.
3. **The before/after runs one incident twice** instead of comparing a manual process to an automated one.
4. **Section 9 is deliberately undesigned** — the only section on the site styled to look like a contract rather than marketing.

## The one thing that must not drift

**Section 9 and the response-time table are promises with timestamps attached.** If sales agrees to something outside the published scope, or if a response commitment gets missed twice, this page becomes evidence against you in a renewal conversation. Only publish numbers operations has signed off on, and review both blocks whenever the team's capacity changes.

## Accessibility

- The status panel needs a text alternative describing the systems and states, and status must not be carried by colour alone — pair each dot with a label.
- Tabs in Section 5 need `role="tablist"` semantics and keyboard navigation.
- The two-column before/after in Section 6 must linearise sensibly on mobile with clear headings, so a screen reader user gets "without a plan" fully before "on a plan" rather than interleaved rows.
- The pricing and response tables need proper `<th>` scope attributes.

## Performance

- No charting or animation libraries. The status panel is static markup.
- The sticky left rail should not recalculate on every scroll event — this page is long and it's the most likely source of jank on the site.

## Site-level issues this page inherits

1. **Duplicated logo marquee** on service pages — same eight clients twice, plus a stray `navdrin` text node with no logo attached.
2. **Footer Services column** links to homepage anchors rather than the service pages that now exist.
3. **Case Studies in the main nav** points at a single case study rather than an index.
4. **Brand mark** still varies between "Spaciva AI", "Spaciva Solutions", and the stylised lockup.

---

# VALUES THE CLIENT MUST SUPPLY

- [ ] Plan prices `$[X]` / `$[Y]` / `$[Z]` per month
- [ ] Monthly small-work allowance in hours for Standard and Partner
- [ ] **Response-time commitments for all three tiers** — real, operations-approved numbers. **Publish nothing here until they are.** A missed commitment on this table is more damaging than an absent one
- [ ] Committed overlap hours with US Eastern and UK time (also outstanding on the About page)
- [ ] Audit price for taking over a system you didn't build, and the standard audit duration
- [ ] Confirmation that model-version migration is genuinely inside Standard, not billed separately — the page states it plainly and the contract must match
- [ ] Sign-off on the exclusions list in Section 9 as contract language, not marketing copy
- [ ] Confirmation of the "we don't resell API or hosting" position, which appears twice and is a real differentiator if it holds
