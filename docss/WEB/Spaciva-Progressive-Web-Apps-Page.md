# Spaciva — Progressive Web Apps Page

**URL:** `/services/progressive-web-apps`
**Layout:** **Template D — Comparison / Decision** *(new page type, defined here)*
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — THIS SHOULD NOT BE A FULL SERVICE PAGE, AND HERE'S WHY

## The honest assessment first

Nine service pages in, this is the first request where my recommendation is **don't build what was asked for — build something better shaped.** Three reasons.

**One: PWA isn't a service, it's a delivery choice.** Every other page in this set names a business problem — stock is wrong, invoices are retyped, clients keep emailing. "Progressive web app" names a *technical approach*. Buyers with budget don't wake up wanting a PWA; they wake up needing something their field team can use on a phone and wondering whether they can avoid paying for a native app. The service is the outcome. The PWA is how it gets delivered.

**Two: the keyword is thinner than it looks.** `PWA development company` gets searched, but a meaningful share of that traffic is developers researching the technology and founders looking for the cheapest possible route to "an app." Neither converts. The commercially valuable searches nearby are *decision* queries — `PWA vs native app`, `alternative to native app development`, `do I need a native app` — which is a different page shape entirely.

**Three: your Web Applications page already covers it, and correctly.** C-4 says: *"We build responsive and progressive web applications that work properly on phones, including offline-capable ones for field use. If you specifically need native App Store and Play Store builds, you want a mobile specialist."* That's a good, honest paragraph. A separate page risks contradicting it or duplicating it.

## But there's a genuinely good version of this page

Here's what makes it worth building anyway: **it converts a refusal into an offer.**

Right now, someone who arrives wanting "an app" hits your Web Applications page and reads a polite decline. That's an honest answer and it's also a lost enquiry — because for a large share of those people, a PWA is the *correct* answer and nobody has told them so. This page catches that traffic, gives them a real decision framework, and routes the ones who fit into a build.

**So: not a tenth pillar. A satellite.** Shorter, decision-first, existing to rank for comparison queries and hand qualified traffic to Web Applications.

## Why a new template

The three-template system is saturated. Template A is at five pages with its own guidance saying a sixth should merge. Template B is at five. Template C states four is the limit and is at four. **That saturation is a real signal** — not that the system is wrong, but that the service catalogue has outgrown a site architecture where every page is a full-weight pillar.

Forcing this onto A, B, or C would produce a sixth near-identical page and dilute a tier that's already working. Instead:

### Template D — Comparison / Decision

**Purpose:** capture decision-stage traffic on a question the buyer is actively weighing, answer it more honestly than anyone else does, and route qualified readers to the pillar page that sells the build.

**Rules:**
- **Roughly half the length of a pillar page.** Eight sections, not fourteen. If it grows past that, it's becoming a pillar and the boundary has failed.
- **The decision tool is the hero** — an interactive or scannable "which one do you need" device, above everything else.
- **No pricing table.** D pages don't sell; they qualify and route. Pricing lives on the pillar.
- **No case study section.** Same reason, and it avoids the proof gaps that have dogged the last four pages.
- **Light base**, visually closest to B, so it doesn't read as a technical tier page.
- **Exactly one outbound conversion path**, to the pillar page — not to the calendar. A D page that books calls directly is competing with its own pillar.

**Future D candidates:** `no-code vs custom build`, `build vs buy for internal software`, `AI agent vs chatbot`, `data warehouse vs direct connection`. Each is a comparison already answered in a section of a pillar page and each has decision-stage search volume of its own. **This template is probably worth more to you over the next year than another pillar page is.**

---

# PART 1 — SEO SPEC

## Primary keyword

`PWA vs native app` — a comparison query, not a service query.

This is the deliberate choice. `PWA development company` and `progressive web app development services` are in the ranking set below, but they are not what this page is optimised around, because the buyer typing them is often further from a purchase than the buyer typing the comparison.

Someone searching `PWA vs native app` or `do I need a native app` is mid-decision, usually has a budget in mind, and is looking for someone to settle the question. Almost every page currently ranking for these is either a developer blog explaining the technology or a mobile agency with an obvious incentive to say "native." **A page that answers honestly — including "sometimes native, and here's exactly when" — wins the query and the trust simultaneously.**

## Ranking targets

| Keyword | Note |
|---|---|
| `PWA vs native app` | Primary. Decision-stage, competitor incentives are misaligned |
| `do I need a native app` | Question-phrased, near-zero commercial competition |
| `alternative to native app development` | High intent, buyer has already balked at a native quote |
| `progressive web app development services` | The commercial term. Include, don't lead with it |
| `PWA development company` | Same. Present, secondary |
| `offline capable web app` | Technical, specific, qualifies well |
| `field service app development` | **The undervalued one.** See below |
| `web app that works offline` | Plain-language version of the above |
| `PWA vs React Native` | Technical comparison, developer-adjacent but converts sometimes |
| `install web app on phone without app store` | Very long tail, very high intent |

**The undervalued cluster is field-team apps.** `field service app development`, `web app that works offline`, `app for technicians without app store` — these are searched by operations managers at installers, inspectors, delivery firms, and maintenance businesses. They have a real problem (paper forms, or a native app quote they can't justify), modest search volume, and almost no competition from firms who'd rather sell native. **This is the highest-converting traffic this page can attract**, and Section 4 is built for it.

**Do not chase** `mobile app development company`, `app developers`, `iOS app development`, or `Android app development`. Wrong service, brutal SERP, and it delivers people who want something you've correctly said you don't build.

## Meta

**Title (57 chars):**
```
PWA vs Native App: Which Do You Actually Need? | Spaciva AI
```

**Description (154 chars):**
```
An honest comparison of progressive web apps and native apps — what each does well,
where PWAs genuinely fall short, and how to tell which one your project needs.
```

**H1:** `You probably don't need a native app. Sometimes you do.`
**URL:** `/services/progressive-web-apps` — or `/guides/pwa-vs-native-app` if you'd rather signal that D pages aren't service pages. **The `/guides/` path is the better long-term structure** if you plan more D pages, and it keeps `/services/` meaning "things you can buy."

## Positioning

This page does not compete with anything. It routes.

> **Progressive web apps** — a decision guide. Answers which delivery approach fits, then hands off.
> **[Web applications](/services/web-applications)** — where the build is actually sold, and where every conversion from this page should land.

**The single most important structural rule on this page: the primary CTA goes to Web Applications, not to the calendar.** A reader who books a call straight off a comparison guide hasn't been qualified by the pillar page, and you'll spend the call doing scoping the pillar would have done for free.

## Schema

`FAQPage` · `BreadcrumbList` · `Article`

**Do not** add `Service` or `Offer` schema. This page doesn't sell anything, and marking it as a service invites Google to rank it for commercial queries the pillar should own.

## Internal linking

- Section 3, Section 5, Section 7, and the closing CTA → `/services/web-applications` — **not live yet**
- Section 4 → `/services/internal-business-tools`, `/services/enterprise-portals` — **neither live**
- Section 4 → `/services/workflow-automation` *(live)*

**Sequencing:** this page is structurally dependent on Web Applications existing. Its entire conversion path leads there. **Do not ship it first.**

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero and decision tool

> **UI/UX — Template D's defining element.** Light base, centred copy, and immediately beneath it **the decision tool**, above the fold on desktop.
>
> The tool is five questions with yes/no answers that resolve to one of three verdicts: **PWA · Native · Both**. Build it as a genuinely interactive widget if the frontend budget allows — a reader who clicks through five questions has invested in the answer. If not, a static scannable table works and is better than a bad interactive one.
>
> **Semantic HTML with real text either way** — this is the block most likely to be surfaced as an answer by an LLM, and the whole page's ranking case rests on it.

**Eyebrow:** PWA VS NATIVE

# You probably don't need a native app. Sometimes you do.

Most businesses quoted for a native app are buying something bigger than the problem requires. But not all of them — there are real cases where a progressive web app can't do the job, and a firm that tells you otherwise is selling rather than advising. Five questions will tell you which side you're on.

**Decision tool content:**

| Question | If yes |
|---|---|
| **Do you need it in the App Store or Play Store for discovery?** If customers will search a store to find you, that's the whole point of being there. | → Native |
| **Do you need hardware a browser can't reach?** Bluetooth peripherals, NFC payments, background location tracking, advanced camera control. | → Native |
| **Is it a consumer product where install rate is the business model?** Games, social apps, anything where the store listing *is* the funnel. | → Native |
| **Will people use it on both phones and desktops?** Field staff who also work at a laptop, clients who check on either. | → PWA |
| **Is the audience known — your staff, your clients, your vendors — rather than the public?** You can send them a link. You don't need a store. | → PWA |

**Verdict logic:**
- **Any "yes" in the first three** → you likely need native, and we'll say so. We don't build native, and we'll tell you what to look for in a firm that does.
- **"Yes" only in the last two** → a PWA does the job at a fraction of the cost and time.
- **Yes on both halves** → build the PWA first. It's cheaper, it's faster, and it tells you whether the native app is worth funding.

*Small caption:* We build progressive web apps. We don't build native apps. That's why the first three questions send you elsewhere — we'd rather you knew now.

---

## SECTION 2 — What a PWA actually is

> **UI/UX:** Single column, max ~720px, centred. Prose, not cards. Short — three paragraphs. The reader who needs a definition needs it quickly, and the reader who doesn't will scroll past.

## The plain version

A progressive web app is a website built so it behaves like an app. Your team opens a link once, taps "add to home screen," and from then on it has an icon, opens full-screen without browser chrome, works when there's no signal, and can send notifications.

There's no download, no store approval, no review queue, and no separate build for iPhone and Android. When you ship a change, everyone has it the next time they open it — no update to push, no fragmented versions in the field.

What it isn't: a way to get into the App Store, or a way to reach hardware the browser can't. Those two limits are real, they're where the decision above comes from, and the rest of this page is honest about them.

---

## SECTION 3 — Where PWAs genuinely fall short

> **UI/UX — the credibility engine of a D page, and it goes early.** Four blocks, plain, no icons. This section is the reason the page ranks and the reason a reader trusts the rest.
>
> **Placing the limitations before the benefits is the whole design.** Every competing page buries them.

## Four things a PWA can't do, stated plainly

Most pages selling PWAs skip this. It's the most useful section on the page.

### It isn't in the App Store or Play Store

There's no listing, no store search, no reviews, no "featured" placement. If people find your product by browsing a store, a PWA doesn't participate in that at all. For internal tools, client portals, and field apps this is irrelevant — you send a link. For a consumer product it can be the entire distribution model, and no amount of technical capability substitutes for it.

### Some hardware is out of reach

Bluetooth peripherals, NFC payments, background location tracking while the app is closed, and fine-grained camera or sensor control are limited or unavailable in a browser. Barcode scanning via the camera works well. A dedicated Bluetooth scanner usually doesn't. **If your workflow depends on specific hardware, tell us on the first call — it's the most common reason we say "you need native."**

### iOS support trails Android

Apple has narrowed the gap considerably and modern iPhones handle installed web apps, offline storage, and push notifications for home-screen apps. But iOS still lags on capability and on how obvious installation is to a non-technical user. **The precise state of this changes with each iOS release** — we check it against your actual requirements before quoting rather than working from what was true last year.

### Installation needs a nudge

"Add to home screen" isn't obvious to most people, and on iOS it's a menu item rather than a prompt. For a known audience this is solved with one instruction in an onboarding email. For the general public it's real friction, and it's another reason PWAs suit known audiences better than consumer launches.

**Below the blocks:**
> If any of these are dealbreakers, you want a native app and you want a mobile specialist. We'd rather tell you that in the first ten minutes than take a project we'd deliver badly.

---

## SECTION 4 — Where PWAs are clearly the right call

> **UI/UX:** Four cards, two-up at desktop. Title, one-line "typical buyer", body. Balanced against Section 3 — same card count, same weight, so the page reads as a genuine comparison rather than a soft sell.

## Four cases where this is obviously the right answer

### Field and mobile teams

Technicians, installers, inspectors, drivers, and site staff filling in paper forms or phoning things back to the office. Jobs, checklists, photos, signatures, and offline capture that syncs when there's signal again. No store approval means a fix ships the same day it's reported — which matters more in the field than anywhere else.

*Typical buyer: an operations manager who has been quoted for a native app and can't justify it.*

### Internal tools people use on a phone

Approvals, stock lookups, time entry, quick record updates. Your team already has laptop access; they just need the phone version to not be miserable. A separate native app for this is almost always overkill.

*Typical buyer: a team already building an [internal tool](/services/internal-business-tools) who assumed mobile meant a second project.*

### Client and vendor portals on mobile

Your clients aren't going to install an app to check an invoice. They'll open a link. A [portal](/services/enterprise-portals) that works properly on a phone gets used; one that requires a download doesn't get installed in the first place.

*Typical buyer: anyone who has watched a client-facing app sit at 4% adoption.*

### Anything that also needs to work on desktop

One codebase, one deployment, works everywhere. The moment your users span phones and laptops, building two native apps plus a web version stops making sense — you're maintaining three things that do the same job.

*Typical buyer: a business where the same person uses the system at a desk and in the van.*

**Below the cards, smaller:**
> Worth checking before any of this: if the goal is that people are *told* something rather than *look something up*, you may not need an app at all. A well-built notification from a [workflow automation](/services/workflow-automation) is cheaper than every option on this page.

---

## SECTION 5 — How we build them

> **UI/UX:** Six-item grid, 3×2 at desktop, small icon, bold label, two lines. Deliberately compact — this is the shortest technical block in the set, because a D page shouldn't be selling depth. Depth lives on the pillar.

## What we do differently

Six things that separate a PWA people actually use from a website with an icon.

### Offline as a design decision, not a feature
What happens with no signal is decided per screen at the start — what's cached, what queues, what's simply unavailable. Retrofitting offline is close to a rebuild, so it's settled before anything is built.

### Conflict handling that's been thought about
Two people edit the same record offline. One reconnects first. What should happen? A real answer agreed with you in advance, rather than whoever syncs last silently winning.

### Built for one hand, outdoors
Field apps get used standing up, in gloves, in sunlight, on a cracked screen. Large targets, high contrast, minimal typing. This is the difference between adoption and a team going back to paper.

### Fast on bad networks and old phones
Your field team doesn't have this year's flagship on 5G. Performance budgets are set for the worst device and connection in the fleet, not the best.

### Installation made obvious
A guided prompt, clear instructions per platform, and an onboarding message people actually follow. The best PWA nobody installed is worth nothing.

### Notifications that respect the platform
Push where the platform supports it for installed apps, sensible fallbacks where it doesn't, and honesty about the difference rather than a promise that quietly doesn't hold on some devices.

**Below the grid, smaller:**
> The stack, process, pricing, and what you receive on handover are all the same as any other build — see [web applications](/services/web-applications) for the full picture.

---

## SECTION 6 — Side by side

> **UI/UX:** Full-width comparison table, real `<th>` markup, plain text, never an image. Three columns: the criterion, PWA, native. **Native must win visibly in several rows** — if the table shows PWA ahead on everything, the page loses the credibility Section 3 earned.

## PWA and native, compared honestly

| | Progressive web app | Native app |
|---|---|---|
| **Time to build** | Weeks | Typically several months |
| **Cost** | One build | Usually two builds, iOS and Android |
| **Updates** | Instant, no review | Store review, and users must update |
| **App Store presence** | None | Yes — and it's the point for consumer products |
| **Discovery via store search** | None | Yes |
| **Works offline** | Yes, when designed for it | Yes |
| **Camera and photos** | Yes | Yes, with finer control |
| **Bluetooth, NFC, background location** | Limited or unavailable | **Full access** |
| **Push notifications** | Supported for installed apps; varies by platform | **Fully supported everywhere** |
| **Performance ceiling** | High, and enough for most business apps | **Higher — the right call for heavy graphics** |
| **Works on desktop too** | **Yes, same build** | No, separate work |
| **Installation** | Add to home screen — needs a nudge | Store download, familiar to everyone |
| **Ongoing maintenance** | One codebase | Two, plus store compliance |

**Beneath the table:**
> **The honest summary:** for internal tools, field apps, portals, and B2B software with a known audience, a PWA does the job at a fraction of the cost and ships in a fraction of the time. For consumer products that live or die on store discovery, and for anything needing deep hardware access, native is the right answer and we'll tell you so.

---

## SECTION 7 — FAQ

> **UI/UX:** Two-column plain list, matching Template B's FAQ treatment rather than an accordion — D pages sit visually closest to B. Add `FAQPage` schema.

## Common questions

**Is a PWA just a mobile website?**
No, though the line is blurry. A responsive website adapts its layout to a phone. A PWA additionally installs to the home screen, opens without browser chrome, works offline, and can send notifications. The difference is whether it behaves like software your team opens daily or like a page they visit.

**Will it work on iPhone?**
Yes. Modern iOS supports installed web apps, offline storage, and push notifications for apps added to the home screen. Capability still trails Android in places and Apple changes this with each release — **we check the current state against your specific requirements before quoting** rather than working from what was true a year ago.

**Can it work with no internet?**
Yes, when it's designed for it from the start. Data is cached for reading and changes queue locally until there's signal. What's available offline is decided screen by screen at the start, because retrofitting it later is close to a rebuild.

**Can it use the camera and scan barcodes?**
Yes — camera-based barcode and QR scanning works well and is one of the most common requirements we build. Dedicated Bluetooth scanner hardware usually doesn't work in a browser, so if your team uses one, say so early.

**Can we get it into the App Store?**
Not as a PWA. There are wrapper approaches that submit a web app as a store listing, and they sit in an awkward middle ground — store review still applies, Apple has historically been unenthusiastic about thin wrappers, and you lose the instant-update advantage. If store presence genuinely matters, build native.

**How much cheaper is it than a native app?**
Substantially, and the reason is structural rather than a discount: one codebase instead of two, no store submission process, and no ongoing compliance with two sets of platform requirements. The maintenance difference compounds every year and is usually larger than the build difference.

**What if we need a native app later?**
Building the PWA first is often the cheapest way to find out whether you do. You'll have real usage data, a validated feature set, and an API a native app can be built against. Plenty of teams discover the native version was never needed; the ones who do need it arrive at it with far better information.

**Do you build native apps?**
No. We build progressive web apps and web applications, and we'll tell you honestly when your requirement needs native so you can find a specialist. Taking a native project we'd deliver badly helps nobody.

**How long does one take?**
Similar to any web application of comparable scope — the PWA characteristics themselves add relatively little. Offline capability is the main variable, since it affects architecture rather than being a setting. [Web applications](/services/web-applications) has the timelines and pricing.

**Who owns the code?**
You do — repository from day one, full transfer on final payment, running in your own accounts. Same terms as every build we do.

---

## SECTION 8 — Closing CTA

> **UI/UX — Template D's close, and it breaks from A, B, and C deliberately.** Light bordered panel. **The primary button goes to the Web Applications page, not to the calendar.** A secondary text link to the calendar is acceptable for readers who are already decided; the primary path is the pillar.

## Sounds like the right fit?

If the decision tool pointed you toward a PWA, the next thing to read is how we build web applications — process, stack, pricing, and exactly what you receive on handover.

**[See how we build web applications →]**

*Already decided and want to talk it through? [Book a 30-minute call.](/contact)*

---

# PART 3 — BUILD NOTES

## Template D, defined

| | A (Narrative) | B (Operational) | C (Technical) | **D (Comparison)** |
|---|---|---|---|---|
| Length | 14 sections | 14 sections | 14 sections | **8 sections** |
| Base | Light + 2 dark bands | Light | Dark | **Light, no dark bands** |
| Hero | Two-column | Centred + before/after | Two-column + diagram | **Centred + decision tool** |
| Pricing | Varies | Open table | Engagement table | **None** |
| Case studies | Yes | Yes | Yes | **None** |
| Primary CTA | Calendar | Calendar | Calendar | **The pillar page** |
| Job | Convince | Show the change | Prove capability | **Settle a decision, then route** |

## The two things that must not drift

**One: limitations stay above benefits.** Section 3 comes before Section 4. Every competing page inverts this, and inverting it here turns an honest comparison into a sales page and forfeits the trust that makes the page work. If someone in review argues it's "leading with negatives," that's the section doing its job.

**Two: the primary CTA does not become a calendar link.** It goes to Web Applications. A D page that books calls directly competes with its own pillar and delivers unqualified calls. This will be proposed as a "conversion improvement." It isn't.

## Accessibility

- Decision tool: if interactive, it needs full keyboard operation, `aria-live` on the verdict so screen readers hear the result, and a visible non-interactive fallback. **If the fallback would be poor, ship the static table instead** — a broken decision tool is worse than a good table.
- Comparison table needs real `<th>` scope attributes and must not encode meaning in colour alone.
- The page has no dark bands; standard light-base contrast tokens apply.

## Performance

Lighter than any other page in the set — no logo grid, no tabbed explorer, no diagrams. It should be the fastest page on the domain. **If it isn't, something has been added that shouldn't be there**, and that's a useful check on scope creep for D pages generally.

## Sequencing

**Ship after Web Applications.** Its entire conversion path leads there, and published first it dead-ends.

## Site-level issues

Unchanged across nine documents.

1. **`/about` still 404s and is still linked from the footer of every page.**
2. **There is still no `/services` index.** This would be the fourteenth page reachable only via in-body cross-links.
3. **`/contact` still carries the old generalist positioning** and the all-caps "SPACIVA" mark — and this page's secondary CTA points there.
4. **Brand mark is still inconsistent.**
5. **`meta-og:url`, `og:title`, and `og:description` are hardcoded to the homepage on every service page.**

---

# VALUES THE CLIENT MUST SUPPLY

Almost none — which is one of Template D's advantages. No pricing, no case studies, no client-specific claims.

| Item | Appears in | Notes |
|---|---|---|
| Nothing bracketed | — | This page is publishable as written |

**Verify before publishing — two items:**

**One: the iOS capability claims.** Section 3 and the FAQ describe what iOS supports for installed web apps. **Apple changes this with most major releases, and the page says so explicitly — but check the current state at publish and set a reminder to re-check every six months.** A comparison page that's factually stale is worse than no comparison page, and this is the one claim on it that has a shelf life.

**Two: the "we don't build native" statement.** It appears three times and it's load-bearing — it's what makes the first three decision-tool questions credible. Confirm it's firm. If you'd take a React Native project for the right client, cut the claim entirely; a stated principle you'd bend is worse than none, and this page's whole value is that it can be trusted to send people away.

**One recommendation to weigh:** consider publishing this at `/guides/pwa-vs-native-app` rather than under `/services/`. D pages aren't things anyone buys, and keeping `/services/` meaning "purchasable" makes both the navigation and the eventual services index clearer. If you build the other D candidates listed in Part 0 — and I think you should, before another pillar — a `/guides/` section gives them somewhere coherent to live.
