# Spaciva — UI/UX Design Page

**URL:** `/services/ui-ux-design`
**Layout:** **Template D — Comparison / Decision**, variant **D-2 (Supporting page with one entry offer)**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — TWO BLOCKING PROBLEMS. READ BEFORE COMMISSIONING.

## Problem one: this contradicts a published position, unambiguously

Your Web Applications page says, in a section headed *What we don't build*:

> **"Design-only engagements.** We design what we build, and we build well from designs you bring. We don't take standalone UI design projects."

A page called **UI/UX Design** in the services menu says the opposite. This isn't a nuance a reader has to hunt for — it's a direct contradiction between two items in the same navigation, and the Web Applications version is the one written in a section specifically about credibility through declining work. Undermining it costs more than the design page gains.

**Three ways out.**

**A — Change the business position.** You now take design engagements, and C-4's line is deleted. That's a real decision about what the company sells, not a copywriting choice, and it comes with the portfolio problem below.

**B — Don't build the page.** Add a "Design" section to Web Applications explaining that design is included in every build, and stop there. Defensible, costs nothing, contradicts nothing.

**C — Narrow both statements so they agree.** C-4's line becomes *"standalone visual design and branding projects"* — which is what you actually decline. This page then sells design **inside builds**, plus one genuinely standalone diagnostic (a UX audit) that produces a written report rather than a design deliverable. **This document assumes Option C**, because it's the only one that gets you a page without either a portfolio investment or a contradiction.

**Required edit if this ships:** C-4's "Design-only engagements" bullet must be amended to "standalone visual design and branding projects," with a link here. Do not publish this page while that line stands unchanged.

## Problem two: design is the one category where proof *is* the product

This matters more than the contradiction.

I've flagged a proof gap on the last six pages. On those, weak case studies were a weakness — the copy could carry the page while you gathered assets. **Here it's disqualifying.** Design buyers evaluate on portfolio, almost exclusively. They open the work, they scan it in fifteen seconds, and they decide. Nobody reads a design agency's prose to assess whether it can design.

You currently have **zero visual assets on the entire site** — no application screenshots, no interfaces, no product imagery of any kind. A UI/UX page in that state doesn't just fail to convert; it actively damages the impression the rest of the site is building, because the absence is conspicuous on this page specifically in a way it isn't elsewhere.

**So, plainly:**

> **Do not publish a page targeting `UI/UX design services` or `UX design agency` without a portfolio.** You will not rank — that SERP belongs to portfolio-first agencies, Dribbble-adjacent studios, Toptal, and Clutch listicles — and the buyers who do arrive will bounce in seconds. It is the worst-performing thing you could add to this site.

**What works instead**, and what's written below: a page that doesn't compete on portfolio at all. It targets long-tail queries where the buyer's problem is *"our software is hard to use"* rather than *"we need something beautiful,"* sells a diagnostic instead of a look, and routes builds to Web Applications. That version can rank and convert with the assets you have today.

## Why Template D, variant D-2

This isn't a pillar. It has no portfolio, it doesn't sell a standalone build, and its job is to answer a question buyers already have while considering something else — *"who does the design?"* That's D's job description.

**D-2 extends D by one rule:** a D page carries no pricing table, but **a single stated entry price for a diagnostic offer is permitted**. The UX audit needs a number to function as an entry point. Everything else routes to the pillar.

| | **D-1 Progressive Web Apps** | **D-2 UI/UX Design** *(this page)* |
|---|---|---|
| Hero device | Five-question decision tool | **Four-symptom self-diagnosis** |
| Credibility engine | "Where PWAs fall short" | **"What we're not" — the portfolio-free positioning** |
| Entry offer | None | **UX audit, one stated price** |
| Primary CTA | Web Applications pillar | **Web Applications pillar** |

---

# PART 1 — SEO SPEC

## Primary keyword

`UX design for internal tools` — and everything about that choice is deliberate.

**What this page must not target:** `UI/UX design services`, `UX design agency`, `UI design company`, `product design agency`. These are enormous commodity SERPs where ranking is decided by visible work. Without a portfolio you cannot compete, and traffic that arrives will convert at close to zero. Targeting them would waste the page.

**What it can win:** queries where the buyer describes a *usability problem in business software*. These are text-answerable, the competition is mostly generic, and — critically — the buyer isn't shopping for a visual style. They're shopping for someone who can work out why their team hates a system.

## Ranking targets

| Keyword | Note |
|---|---|
| `UX design for internal tools` | Primary. Text-answerable, low competition, matches your actual work |
| `B2B software UX design` | Broader, still non-portfolio-dependent |
| `enterprise application UX design` | Same cluster, procurement-side language |
| `UX audit services` | **The entry offer.** Real commercial intent, weak SERP |
| `usability audit for web application` | Same, more specific |
| `why won't my team use the new software` | **Symptom-phrased. Near-zero competition, converts well** |
| `improve adoption of internal software` | Same cluster |
| `redesign legacy application interface` | High intent, buyer has an existing system |
| `dashboard UX best practices` | Informational, feeds internal links |
| `admin panel design` | Specific, technical, under-served |

**The undervalued cluster is symptom-phrased adoption queries.** `why won't my team use the new software`, `improve adoption of internal software`, `staff going back to spreadsheets` — typed by managers with budget, a failed rollout, and no vocabulary for what went wrong. Nobody targets these because design agencies write about craft. Section 3 is built for them and it should be the page's main organic entry.

**The second is the audit.** `UX audit services` and `usability audit for web application` have genuine commercial intent, a soft SERP, and — the important part — **an audit is sold on method, not on portfolio.** That's what makes it the one design offer you can credibly sell today.

## Meta

**Title (58 chars):**
```
UX Design for Internal Tools & B2B Software | Spaciva AI
```

**Description (155 chars):**
```
Design for software people have to use, not choose. UX audits and product design
built into every system we ship — so your team adopts it instead of avoiding it.
```

**H1:** `Design for software people have to use, not software they chose`
**URL:** `/services/ui-ux-design` — or `/guides/ux-for-internal-software` if you adopt the `/guides/` structure recommended for D pages, which I'd still advise.

## Positioning

> **UI/UX design** — how the things we build get designed, plus a standalone UX audit. *(This page.)*
> **[Web applications](/services/web-applications)** — where builds are sold, and where every build enquiry from here should land.

**Structural rule, same as D-1: the primary CTA goes to Web Applications, not the calendar.** The exception is the audit, which has its own direct path — that's the one thing this page sells.

## Schema

`FAQPage` · `BreadcrumbList` · `Article` · **`Offer` on the UX audit only**

Do not add `Service` schema for design generally. You're not selling design as a service, and marking it as one invites Google to rank the page for the head terms it cannot win.

## Internal linking

- Section 4, Section 6, closing CTA → `/services/web-applications` — **not live yet**
- Section 3 → `/services/internal-business-tools`, `/services/enterprise-portals` — **neither live**
- Section 5 → `/services/custom-dashboards` — **not live**

**Sequencing: ship after Web Applications.** The conversion path leads there and the page dead-ends without it.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero and self-diagnosis

> **UI/UX — D's defining element, adapted.** Light base, centred copy, and beneath it **four symptoms** the reader checks themselves against. Not an interactive tool this time — a scannable list. Each symptom names what it usually indicates.
>
> The device is recognition, not calculation. A reader should find themselves in row two or three and feel understood before they've read a paragraph.
>
> **Semantic HTML with real text** — this is the block most likely to be surfaced as an answer, and the page's ranking case rests on it.

**Eyebrow:** UI/UX DESIGN

# Design for software people have to use, not software they chose

Consumer apps compete for attention. Business software doesn't — your team has to open it either way. That changes what design is for: not persuading anyone to come back, but making sure the person who has to do this fourteen times today can do it without thinking. Most internal software fails at that, and the symptoms are consistent.

**Self-diagnosis content:**

| What you're seeing | What it usually means |
|---|---|
| **Your team went back to the spreadsheet** | The new system takes more steps than the old one for the task they do most |
| **Every new person needs a training session** | The interface encodes knowledge that should be visible on screen |
| **The same support question comes up weekly** | One screen is ambiguous, and nobody has fixed it because it's "just training" |
| **Nobody uses the feature you paid to build** | It's discoverable in the wrong place, or it solves a problem in a way people don't recognise |

*Small caption:* None of these are training problems, though they're usually treated as one. All four are design problems with specific, findable causes.

---

## SECTION 2 — What we're not

> **UI/UX — the credibility engine, and it goes second on purpose.** Two columns, equal weight: "What we do" left, "What we're not" right. Plain, no icons, no muted styling on the right column.
>
> This section exists because the reader's first question is *"is a development firm really the right people for design?"* Answering it by narrowing the claim is more convincing than a portfolio would be at this stage — and it's the only honest option available.

## Let's be precise about what this is

Design agencies and development firms both say "UI/UX." They usually mean different things, and it's worth being clear which one this is.

### What we do

**Product design inside builds.** Every system we ship is designed — screens, flows, states, and the decisions about what goes where. It's part of the build, not a line item you can decline.

**UX audits as a standalone piece of work.** We assess an existing application against how people actually use it and give you a written report with prioritised, specific fixes. You can hand that report to any developer, including ones who aren't us.

**Redesigns of software that works but isn't used.** Where the logic is sound and the interface is why adoption failed.

**Design that survives implementation.** Because the same team builds it, nothing gets designed that can't be built, and nothing gets quietly simplified in development without a conversation.

### What we're not

**A visual design or branding studio.** Logos, brand identity, marketing sites, illustration, motion design — not our field, and you should hire people whose whole practice is that.

**A portfolio-led design agency.** If you're choosing a partner based on visual craft and aesthetic range, there are studios far better suited than us and we'd rather you used one.

**Available for design-only builds.** We don't produce Figma files for someone else to implement. Design here is attached to systems we're building or auditing.

**Interested in redesigning something that isn't broken.** If your software is unattractive but your team uses it fluently, leave it alone. Cosmetic redesigns of functional systems are the least valuable work in this field.

> **We design business software so it's fast to use for people who use it every day. That's a narrower claim than "UI/UX design" and it's the one we can actually make.**

---

## SECTION 3 — Why business software gets avoided

> **UI/UX:** Four blocks, plain, generous spacing, no icons. Each names the failure and what causes it. This is the landing target for the symptom-phrased keyword cluster and the longest section on the page.

## Four reasons a system nobody asked for gets abandoned

Software your team is required to use fails differently from software people choose. The failures are consistent enough to name.

### It was designed from the requirements document

Every field the database has, laid out in the order the schema defines, with the same visual weight. The screen reflects how the data is stored rather than how the work is done — so the field someone fills in forty times a day sits between two they've never touched.

**What fixes it:** designing from the task backwards. Watch someone do the job, find the sequence, and build the screen around that. Frequently used things get prominence; rarely used things get out of the way.

### It optimised for the rare case

Someone in scoping said "but what if a customer has three billing addresses?" — and now every single order screen carries the complexity of a case that occurs twice a year. The exception got designed into the default path.

**What fixes it:** designing the common path to be fast and putting the exception one deliberate click away. Most business software is slow because it's permanently prepared for something that rarely happens.

### It has no opinion

Every option presented equally, no defaults, nothing pre-filled, nothing suggested. It feels neutral and it's exhausting — the user makes forty decisions to do one thing. Neutral interfaces push all the cognitive work onto the person.

**What fixes it:** defaults that are right most of the time, and clear primary actions. An interface with an opinion is faster even when the opinion is occasionally wrong, because being wrong occasionally is cheaper than deciding constantly.

### Nobody watched anyone use it

It was demoed, approved by people who won't use it daily, and shipped. The confusions that kill adoption are almost never the ones the people who commissioned it predicted — and they surface in the first ten minutes of watching one real user.

**What fixes it:** watching actual users, before launch, doing real tasks with no help. It's the cheapest research there is and it's the step most consistently skipped. For [internal tools](/services/internal-business-tools) and [portals](/services/enterprise-portals) it's the difference between adoption and a quiet return to email.

---

## SECTION 4 — Design inside a build

> **UI/UX:** Compact — four short blocks, two-up at desktop. Deliberately brief, because this isn't the offer being sold here; it's context for someone considering a build. The pillar page carries the weight.

## How design works when it's part of the build

You don't commission this separately. It's how every system we ship gets made.

**We design the flow before the screens.** What happens in what order, including the failure cases — empty states, errors, partial data, someone doing it wrong. Those states are most of real software and they're what gets skipped in mockups.

**You use real builds every two weeks.** Not clickable prototypes. Prototypes tell you whether people understand a concept; real use tells you whether they can do the job, and only the second one predicts adoption.

**Nothing is designed that can't be built.** Same team, so the compromise conversation happens at design time rather than being made silently by a developer at 11pm.

**Visual design is deliberately restrained.** Business software should be legible, consistent, fast, and accessible. Ambitious visual concepts age badly and slow people down. If you want something visually distinctive, that's a studio engagement and we'll say so.

**Below the blocks:**
> Process, stack, pricing, and what you receive on handover are all on [web applications](/services/web-applications) — design isn't priced separately because it isn't optional.

---

## SECTION 5 — The UX audit

> **UI/UX — the one thing this page sells, and it needs its own visual treatment.** A bordered panel, distinct from everything around it, with the price stated. This is D-2's single permitted price.
>
> Give it real prominence — roughly the weight of a pricing tier on a B page. Everything else on this page routes elsewhere; this converts here.

## A UX audit — $[A], one week

You have an application. People use it reluctantly, or don't. You need to know why, specifically, before you spend anything on fixing it.

### What we do

We work through the system doing the tasks your team actually does, then **watch three to five of your real users** do the same with no help. Not a heuristic review from a checklist — a checklist tells you what's unconventional, and watching people tells you what's costing them time.

### What you get

**A prioritised list of specific problems**, each with the screen, what goes wrong, why, and roughly what it costs in time or errors. Not "improve information hierarchy" — the actual thing, on the actual screen.

**Fixes sorted by effort and impact**, so you can see which are an afternoon and which are a rebuild. Most lists are heavily weighted toward the afternoon end, which is the useful discovery.

**A recorded walkthrough** of the sessions, so the people who'll implement the fixes can see what happened rather than reading about it.

**A straight answer on whether it's worth redesigning at all.** Sometimes the interface is fine and the real problem is the process, the data quality, or that the system solves a problem people don't have. We'll say so — and that answer saves more money than the audit costs.

### What you're not committing to

**Nothing.** The report is yours. Hand it to your own developers, another agency, or nobody. We'd rather run audits that go elsewhere than have people assume the recommendation is shaped by wanting the follow-on work.

**[Book a UX audit]**

*If the fixes point toward a rebuild, [web applications](/services/web-applications) covers how that works — and the audit fee comes off the build.*

---

## SECTION 6 — What we design for

> **UI/UX:** Four items, plain list, one line each. Short — this is orientation, not persuasion.

## The kinds of interfaces this applies to

**Internal tools and admin panels** — used all day, by the same people, for the same tasks. Speed and muscle memory matter more than anything else here.

**Client and vendor portals** — used occasionally, by people who won't be trained and won't try twice. Obviousness matters more than efficiency.

**[Dashboards and data interfaces](/services/custom-dashboards)** — where the hard part is hierarchy: what's on screen first, what's one click away, and what shouldn't be there at all.

**Field and mobile tools** — used standing up, outdoors, in gloves, on old phones. Large targets, high contrast, minimal typing, and a design that assumes bad conditions rather than ideal ones.

---

## SECTION 7 — FAQ

> **UI/UX:** Two-column plain list, matching D-1 and the B pages. Add `FAQPage` schema, and `Offer` schema on the audit question.

## Common questions

**Can we hire you for design only?**
Not for design-only builds — we don't produce Figma files for someone else to implement, because designs handed over without the team who'll build them tend to get quietly changed in development. The UX audit is genuinely standalone: you get a written report and you're free to take it anywhere.

**Do you do branding and logos?**
No. That's a different discipline and you should hire a studio that does it properly. We work within a brand you already have, or with restrained defaults if you don't yet.

**We have designs already. Will you build from them?**
Yes, and it's common. We'll flag anything that's expensive to build relative to its value or that misses a state — empty, error, loading, partial data — before we start, so the conversation happens at quote stage rather than mid-build.

**How much does a UX audit cost?**
$[A], and it takes about a week. That includes sessions with three to five of your real users, a prioritised written report, and a recorded walkthrough. If it leads to a build with us, the fee comes off the build.

**Will a redesign fix our adoption problem?**
Sometimes. Sometimes the interface is fine and the problem is that the system solves something people don't actually need, or that the data in it isn't trusted. The audit is designed to tell you which, because spending a redesign budget on a non-design problem is a common and expensive mistake.

**Do you do user research?**
Task-focused research as part of design and audits — watching people work, understanding the sequence, testing with real users. Not large-scale generative research, ethnographic studies, or survey programmes. Those need a dedicated research practice.

**Is your design accessible?**
We build to WCAG AA — keyboard operation, contrast, focus states, screen reader semantics. For business software this isn't only compliance: the same choices that make an interface usable with a screen reader tend to make it faster for everyone.

**What if we want something visually distinctive?**
Then engage a design studio and bring us the result — we build from external designs regularly and well. Our visual work is deliberately restrained because that's what business software should be, and it's an honest limit rather than a philosophy we'd defend in every context.

---

## SECTION 8 — Closing CTA

> **UI/UX — D's close.** Light bordered panel. **Primary button to Web Applications; the audit is the secondary path.** Both are legitimate here, which is D-2's one departure from D-1.

## Building something? Design is already included.

If you're considering a build, the design work is part of it — process, pricing, and what you receive are all on the web applications page.

**[See how we build web applications →]**

*Already have an application people avoid? [Book a UX audit](#) — $[A], one week, and the report is yours regardless.*

---

# PART 3 — BUILD NOTES

## Template D-2, defined

| | **D-1 (PWA)** | **D-2 (this page)** |
|---|---|---|
| Sections | 8 | 8 |
| Hero device | Interactive decision tool | **Static self-diagnosis, four symptoms** |
| Pricing | None | **One entry offer, stated price** |
| Primary CTA | Pillar page | **Pillar page, with a second path to the offer** |
| Case studies | None | **None** |

**The D-2 extension:** a D page may carry **one** priced diagnostic offer. Not two, and not a tier table — the moment it has three tiers it's become a pillar and the boundary has failed.

## The three things that must not drift

**One: no head-term targeting.** If someone in review adds "UI/UX design services" or "UX design agency" to the title tag or H1, the page will fail — those SERPs are decided by visible portfolio work and this page has none. The narrow targeting is the strategy, not a limitation to be optimised away.

**Two: Section 2's right column keeps equal weight.** "What we're not" is what makes a development firm credible on design. Muting it into a disclaimer removes the only credibility mechanism available.

**Three: no stock design imagery.** The temptation on a design page with no portfolio is to fill it with generic wireframe illustrations, Figma-style mockup graphics, or stock UI screenshots. **This is worse than blank space.** A design page decorated with someone else's visual language tells a buyer exactly what they need to know. Keep it typographic.

## Accessibility

- This page will be judged on its own accessibility more than any other on the site — it claims WCAG AA in Section 7. **Run an audit before publish.** A design page failing contrast is disqualifying in a way it isn't elsewhere.
- Self-diagnosis and comparison content as real table or list markup, not images.
- The audit panel needs a proper heading level, not just visual prominence.

## Performance

Light page, no logo grid, no tabs, no diagrams. Should be among the fastest on the domain, alongside D-1.

## Sequencing

**Ship after Web Applications, and only after C-4's "design-only engagements" line has been amended.** Publishing while that line stands creates a visible contradiction between two navigation items.

## Site-level issues

Unchanged across ten documents.

1. **`/about` still 404s and is still linked from the footer of every page.**
2. **There is still no `/services` index.** This would be the fifteenth page reachable only via in-body cross-links.
3. **`/contact` still carries the old generalist positioning** and the all-caps "SPACIVA" mark.
4. **Brand mark is still inconsistent.**
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.**

---

# VALUES THE CLIENT MUST SUPPLY

| Placeholder | Appears in | Notes |
|---|---|---|
| `$[A]` — UX audit price | Section 5, Section 7, closing CTA | **Price it low.** This is a foot-in-the-door diagnostic, not a profit centre. Cheap enough to be an easy yes, and it should feed builds |

**Verify before publishing — three items:**

**One: the audit is deliverable as described.** It promises sessions with three to five real users, a prioritised report with effort-and-impact sorting, and a recorded walkthrough. **Confirm someone can run and write that to a standard you'd stand behind.** It's the only thing this page sells, and a weak first audit costs more than the page earns.

**Two: the "fee comes off the build" offer.** Stated twice. Confirm it's a real policy, not a nice line.

**Three: the WCAG AA claim.** Section 7 states you build to it. Confirm that's true of your current work — and note that the claim will be tested on this page itself before it's tested anywhere else.

**And the thing worth saying once more:** this page is written to work without a portfolio, and it can. But the ceiling is low, and it stays low until you have visible work. **One anonymised screenshot of a real interface would do more for this page than any revision of the copy.** If a portfolio ever becomes possible, this page should be rewritten as a pillar and repointed at the head terms — until then, this narrow version is the one that earns its place.
