# Spaciva — Predictive Analytics Page

**URL:** `/services/predictive-analytics`
**Layout:** **Template A — Narrative / Credibility**, variant **A-5**
**Status:** Website-ready content + UI/UX build spec + SEO notes

---

# PART 0 — READ THIS BEFORE COMMISSIONING THE PAGE

## The collision here is with the BI page, and it's a single card

The BI page's Section 4 "Analysis and modelling" card currently reads: *"Cohorts, retention, forecasting, margin by segment, customer lifetime value, inventory ageing."* Three of those six are this page. The fix is small but it isn't optional.

The boundary that holds:

> **Business intelligence** answers *what happened, and what's true now.* Descriptive. The output is a number you can verify against reality today.
> **Predictive analytics** answers *what is likely to happen next, and what should we do about it.* Estimative. The output is a number with an error bar attached that you can't verify until later.

That distinction is not academic. It changes the buyer, the pricing, the delivery model, and the failure mode. A wrong BI number gets caught in a meeting. A wrong forecast gets acted on for six months.

**Required edits to the Business Intelligence page if both ship:**

1. **BI Section 4's "Analysis and modelling" card drops forecasting and lifetime value** and keeps cohorts, retention, margin by segment, and inventory ageing — all descriptive. Add one line routing predictive work here.
2. **BI Section 11's "Foundation plus analysis" tier** repeats the same list. Same trim.
3. **BI's routing block gains a predictive analytics card**, and this page's Section 10 links back.

**One small edit to Inventory Management:** that page owns reorder logic driven by current velocity and lead times, which is rules-based and correctly scoped there. This page owns probabilistic demand forecasting — seasonality, promotions, prediction intervals. Add one line to the Inventory page's reorder section routing the forecasting variant here, and this page never describes reorder workflow, POs, or stock sync.

**And a hard prerequisite, stated on the page itself:** predictive work sits on top of the data layer. If a reader has no warehouse and no clean history, this page's honest answer is [data warehousing & ETL](/services/data-warehousing-etl) first. Section 3 says so directly.

## Why Template A, and why it must not be Template C

Tempting to make this Template C — it's the most technical service on the site. **Don't.** The predictive buyer's hesitation is not *"can this be built?"* It's:

> *"How do I know this isn't astrology with a confidence score? The last person who sold us a model showed us 94% accuracy and none of it changed anything."*

That is a belief objection, and Template A's credibility engine is the correct instrument. Light base, narrative, honesty before pitch, two dark bands.

It also keeps the tier logic intact: Template C is now four pages deep (Dashboards, Internal Tools, CRM Development, Data Engineering). A fifth dark technical page about data would blur the whole tier.

## Template A variants

| | **A-1 Agents** | **A-2 RAG** | **A-3 ERP** | **A-4 BI** | **A-5 Predictive** *(this page)* |
|---|---|---|---|---|---|
| Hero visual | Screenshot | Screenshot | Integration map | Maturity ladder | **A forecast chart with the prediction interval drawn and labelled** |
| Signature block | Real agent vs chatbot | What's underneath | "What we don't do" | The maturity gate | **"We build the dumb version first" — the baseline test** |
| Failure section | 4 causes | 4 reasons | 5 patterns + controls | 4 shelfware patterns | **5 ways an accurate model still fails** |
| Process | Timeline, 6 | Timeline, 6 | Timeline, 5 phased | Timeline, 5 | **Timeline, 5, with a decision point at step three where we may tell you to stop** |

Shared with A-1 through A-4: light base, two dark bands only, vertical timeline, accordion FAQ, card-grid offers, six-item credibility grid. Keep all of it.

---

# PART 1 — SEO SPEC

## Primary keyword

`predictive analytics services`

Held at the head by SAS, IBM, Alteryx, Gartner, Microsoft and the global consultancies. You will not displace them and their traffic is wrong for you anyway — most of it is students, analysts, and enterprise procurement.

**The winnable layer is the use case, not the category.** Nobody with budget searches "predictive analytics." They search "churn prediction model" or "demand forecasting for ecommerce," because by the time money is involved the problem has a name.

## Ranking targets

| Keyword | Note |
|---|---|
| `predictive analytics services` | Primary in name. Expect to rank on qualified variants, not the bare term |
| `churn prediction model development` | **Workhorse.** Named problem, budget attached, low agency competition |
| `demand forecasting software development` | High commercial value. Maps directly to your DTC segment |
| `customer lifetime value model` | Strong intent, heavily searched by DTC and agency-side marketers |
| `predictive lead scoring implementation` | Bottom-funnel, and it links cleanly to the CRM pages |
| `sales forecasting model development` | Professional-services and B2B segment |
| `machine learning consulting for small business` | The qualifier does all the work — the majors ignore it entirely |
| `how much data do you need for machine learning` | **Informational, high-authority, almost nobody answers it honestly.** Target with Section 3 |
| `predictive analytics vs ai` | Comparison intent, rising sharply, and cheap to own |
| `is predictive analytics worth it` | Doubt-phrased. Section 5 is built for it |

**The undervalued cluster is doubt-phrased and readiness queries.** `how much data do you need for machine learning`, `is predictive analytics worth it for small business`, `why do machine learning projects fail`, `do we have enough data to forecast`. Typed by someone who is seriously considering spending money and is looking for a reason not to. Everyone else in the category answers these with marketing. Answer them with arithmetic and you get the click *and* a pre-qualified call.

**The second undervalued angle is the vs-AI confusion.** Since 2023, "AI" has swallowed the vocabulary, and a large share of people searching for LLM help actually need a regression, while others asking for "a prediction model" want a chatbot. Nobody is writing the plain explanation. Section 8 does it in three paragraphs and it will get quoted by LLMs more than anything else on the page.

**Do not chase** `predictive analytics tools`, `best predictive analytics software`, `machine learning`, `ai analytics platform`. Product intent, unwinnable, wrong comparison set.

## Meta

**Title (58 chars):**
```
Predictive Analytics & Forecasting Development | Spaciva AI
```

**Description (155 chars):**
```
Churn, demand, and revenue forecasting built into your systems — with the
baseline test first. If a simple model wins, we'll tell you and charge you less.
```

**H1:** `A prediction is only worth the decision it changes.`

**URL:** `/services/predictive-analytics` — not `/services/machine-learning` (invites a staffing query and an unwinnable comparison set) and not `/services/ai-analytics` (collides with the Generative AI page's language).

## Positioning against neighbouring pages

Nine pages now cluster around data and AI. Add this line to the shared routing block on every sibling:

> **Predictive analytics** — estimating what happens next, and pushing that estimate into the decision that depends on it.

Distinguish explicitly from **Generative AI & custom LLMs** — that page produces language, this page produces numbers. They're different mathematics, different infrastructure, and different buyers, and the site is one of very few that will say so plainly.

## Schema

`Service` · `FAQPage` · `BreadcrumbList` · `Offer` on the engagement table

Mark up Section 8 as `TechArticle` — the predictive-vs-generative explanation is the most quotable block on the page and it should be independently extractable.

## Internal linking

- Section 3 → `/services/data-warehousing-etl` — **the prerequisite link, and the most important one on the page**
- Section 4 → `/services/inventory-management`, `/services/crm-automation`
- Section 6 → `/services/workflow-automation` — the action layer
- Section 8 → `/services/generative-ai-custom-llms`
- Section 10 → `/services/business-intelligence`, `/services/custom-dashboards`
- Case studies → `/case-studies/partsflow`, `/case-studies/unified-accounting`

**Proof gap, stated plainly:** you have no predictive case study. Neither existing case study is one, and dressing either up as one is the single fastest way to lose a technical buyer on this page. Section 12 handles it by not pretending — see the note there. **If you are unwilling to publish that section as written, delay the page until a first predictive engagement exists.** This is the least-evidenced page in the set and the one where invented proof does the most damage.

---

# PART 2 — PAGE CONTENT

---

## SECTION 1 — Hero

> **UI/UX — Template A opening, A-5 variant.** Light base. Two columns at ≥1024px: copy left, **forecast chart right**.
>
> **The chart is the argument, so build it deliberately.** A solid line of actual history, a dashed line of forecast, and a shaded prediction interval that visibly widens as it extends. Label the shaded band in plain words — *"the range we're actually confident about"* — as a visible annotation, not a legend entry.
>
> Every competitor in this category draws a single confident line going up and to the right. Drawing the uncertainty band is the entire positioning of the page, expressed before anyone reads a word. **Use plausible illustrative data and label it as illustrative.** Do not present invented numbers as a client result.

**Eyebrow:** PREDICTIVE ANALYTICS

# A prediction is only worth the decision it changes.

We build forecasting and prediction models — churn, demand, revenue, lifetime value — on your own data, and then we wire the output into the system where someone acts on it. Every engagement starts by testing whether a simple method already does the job, because often it does, and you should know that before you pay for a model.

**[Primary CTA]** Book a 30-minute call
**[Secondary CTA]** See what we build

---

## SECTION 2 — Trust strip

> **UI/UX:** Shared component. Greyscale to colour on hover, client names as real text beneath each logo, single row. The duplicated marquee loop and the stray `navdrin` text node are still live on service pages — fix globally.

**Label:** Trusted by teams in the US, UK, and India

---

## SECTION 3 — Are you ready for this?

> **UI/UX — the signature block of A-5, placed high on purpose.** Three requirement bands, then a fourth band containing **the baseline test**, styled slightly heavier. Same type size and weight across all four — the first three must not read as small print.
>
> This section does double duty: it disqualifies badly-fitting leads before they book a call, and it targets `how much data do you need for machine learning`, a query nobody serves honestly. Keep the arithmetic in it. The arithmetic is why it will rank.

**Eyebrow:** BEFORE ANYTHING ELSE

## Three things have to be true, and we'll check them for free

Most failed prediction projects were doomed before the modelling started. Three conditions, in order.

### You need history, and more than you'd guess

A model learns from repetition, so the useful question isn't how many rows you have — it's **how many times the thing you're predicting has already happened.** Ten thousand customers with forty churn events is a thin dataset. Four hundred customers with two hundred churn events is a workable one.

For anything seasonal, you need at least two full cycles and preferably three, because with one year of history a model cannot distinguish "December is busy" from "last December was busy."

**If you don't have it yet:** the answer is usually instrumentation, not modelling — start recording the outcome properly now so this conversation is possible in a year.

### The data has to be somewhere a model can reach

Not in four systems that disagree, not in exports someone rebuilds on Mondays. Modelling on ad-hoc extracts produces a result that can't be reproduced next quarter, which means it can't be trusted and won't be maintained.

**If you don't have it yet:** that's [data warehousing and ETL](/services/data-warehousing-etl), and it's the honest first project. We'd rather build you the foundation and revisit prediction in six months than model on sand and hand you a number you can't defend.

### A decision has to be waiting for the answer

This is the one that kills the most projects, and it has nothing to do with data. Before we build anything we ask: *when the prediction says a customer is likely to churn, what specifically happens?* If the answer is "we'd look at it," the model will be accurate, admired, and ignored.

**If you don't have one yet:** define the action first. Sometimes the action turns out to be worth building on its own and the prediction becomes optional.

### And then we build the dumb version first

**Every engagement starts with a baseline** — a deliberately simple method. Last year's number plus growth. A three-month moving average. A rule your ops lead already uses in their head.

Then we measure it, and the model has to beat it by enough to justify what it costs to build and run. **If it doesn't, we tell you, and you don't buy the model.**

This is standard practice among people who do this work seriously and it is almost never offered by people selling it. A simple method that's directionally right and that your team understands beats a model nobody can explain — and it costs a fraction as much to keep alive.

> **Roughly one in three companies who ask us for a forecasting model should buy a moving average and a dashboard instead. We'd rather be the ones who said so.**

---

## SECTION 4 — What we build

> **UI/UX:** Card grid matching A-1's offer treatment. Six cards, three across, two rows. Title, one-line *"typical trigger"*, body. **Every card names the decision the output feeds**, not just the prediction — that's the page's thesis and it has to show up in the offer grid, not only in the argument.

**Eyebrow:** WHAT WE BUILD

## Six models, and the decision each one feeds

### Churn and retention prediction
Which accounts or subscribers are likely to leave, and which signals are driving it. The output lands in your CRM as a scored field with the top contributing factors attached, so the person making the save call knows *why* — not just that a number is high.

*Typical trigger: retention has slipped and nobody can tell whether it's onboarding, pricing, or a single cohort.*

### Demand and inventory forecasting
Expected demand by SKU and location, with seasonality, promotions, and lead times accounted for, expressed as a range rather than a single number. Feeds purchasing decisions and safety-stock levels.

*Typical trigger: you're overstocked and out of stock at the same time, in different SKUs.*

### Revenue and cash forecasting
Forward revenue from your actual pipeline and billing history, with confidence intervals, rather than a spreadsheet built on stage-weighted guesswork. For services businesses, capacity and utilisation forecasting alongside it.

*Typical trigger: a board or lender wants a number you can defend the method behind.*

### Customer lifetime value
Predicted value by segment, channel, and acquisition source — which changes what you're willing to pay to acquire. Blended CAC hides the segments losing money; predicted LTV surfaces them.

*Typical trigger: paid acquisition is scaling and margin isn't.*

### Predictive lead scoring
Which inbound leads resemble the ones that closed, scored on your own history rather than a vendor's generic model. Written back into the CRM so routing and prioritisation happen automatically.

*Typical trigger: sales says the leads are bad, marketing says sales doesn't work them. Both have a point and nobody has evidence.*

### Anomaly and risk detection
Transactions, usage, or operational metrics that don't fit the pattern — flagged in real time with a tuned threshold, because a detector that cries wolf gets muted within a fortnight and then it may as well not exist.

*Typical trigger: something went wrong and nobody noticed for a month.*

**Below the grid, smaller:**
> Forecasting demand is this page. Getting the resulting purchase order raised, approved, and synced across channels is [inventory management](/services/inventory-management). Writing a churn score into HubSpot and triggering the play is [CRM automation](/services/crm-automation). We build across the boundary — the point is that they're separately scoped, so you can see what each part costs.

---

## SECTION 5 — Why prediction projects fail

> **UI/UX — Template A's persuasive engine.** Five stacked blocks, generous spacing, each ending on **a bolded line naming the design decision that prevents it** — the A-3/A-4 pairing, retained. Longest scroll on the page.

**Eyebrow:** FAILURE MODES

## Five ways an accurate model still fails

Notice that none of these is "the model wasn't accurate enough." Accuracy is rarely what goes wrong.

### It predicted something nobody could act on

A model flags accounts likely to churn ninety days out. Nobody owns the save motion, there's no play to run, and the list arrives in an email. The model is right and nothing changes — which, after two quarters, is indistinguishable from being wrong.

**The decision that prevents it:** we define the action before the model. What happens, who does it, and in which system. If we can't answer that in the first call, we say so rather than taking the project.

### It couldn't explain itself

The model said 0.87 and a manager asked why. Nobody could answer. In anything touching customers, credit, or pricing, an unexplainable score doesn't get used — and in regulated contexts it can't be.

**The decision that prevents it:** contributing factors surfaced with every prediction, and a preference for interpretable methods unless the accuracy gain from a complex one is large and clearly worth it. Usually it isn't.

### It was accurate on the past and useless on the present

The model was validated by testing it on data that included information from after the moment of prediction. It scored beautifully and collapsed in production. This is leakage, it's the most common serious mistake in the field, and it is embarrassingly easy to make.

**The decision that prevents it:** time-based validation only. We test on a period the model has never seen, in the order events actually occurred, and we report performance the way you'll experience it in production rather than the way it looks best.

### The world moved and the model didn't

It was trained before a pricing change, a new channel, or a supply shock. It kept producing confident numbers based on a world that no longer exists, and nobody was watching the error rate.

**The decision that prevents it:** monitoring on the predictions themselves, not just the pipeline. We track error against reality as outcomes arrive, alert on drift, and retrain on a schedule. **This is the part that isn't a project — it's why the monthly plan exists.**

### One number was presented as certainty

The forecast said 4,200 units. Someone ordered 4,200 units. The honest answer was somewhere between 3,400 and 5,100, and the decision that should have been made — how much safety stock to carry — was never surfaced because the interval got flattened into a point.

**The decision that prevents it:** every forecast ships as a range with a stated confidence level, and every interface we build displays the range. **A point estimate is a summary of a distribution, and the distribution is the part you make decisions with.**

> **Four of these five are decisions made before any modelling starts. None of them are about which algorithm you picked.**

---

## SECTION 6 — Mid-page CTA

> **UI/UX — first of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button. Same position and treatment as A-1 through A-4.

## Not sure whether you have enough data?

That's usually settled in one call. Tell us what you want to predict and how long you've been recording it, and we'll tell you whether it's workable, what the baseline would be, and whether a model is likely to beat it — before you commit anything.

**[Book a 30-minute call]**

---

## SECTION 7 — How we work differently

> **UI/UX:** Six-item grid, 3×2 at desktop, matching A-1's "what separates a real agent" and A-4's stack grid. Small icon, bold label, two to three lines, consistent stroke weight.

## Six things we do that most vendors don't

**We report the baseline next to the model**
Every result is shown against the simple method it has to beat. If the gap is small, that's in the report, in writing, where you can see it.

**We validate the way time actually works**
Trained on the past, tested on the future, never the reverse. The accuracy number we give you is the one you'll live with, not the flattering one.

**Ranges, not points**
Every forecast carries an interval and every interface we build shows it. The width of that band is often more useful than the estimate inside it.

**The output goes where the decision is made**
Into the CRM field, the purchasing screen, the Slack alert. Not into a slide deck and not into a notebook only an analyst can open.

**You get the model, not access to it**
Training code, features, weights, and documentation transfer on final payment. No black box, no per-prediction pricing, no platform you can't leave.

**We watch the error after launch**
Predictions are compared against what actually happened, continuously. Accuracy decay is normal and expected — going unnoticed is what makes it expensive.

---

## SECTION 8 — Predictive AI and generative AI are not the same thing

> **UI/UX:** Two-column comparison block, plainer treatment than the rest of the page. Self-contained — a reader arriving here from search must get a complete answer without the surrounding page. **Mark up as `TechArticle`.** This is the most quotable section on the page and the likeliest to be surfaced by an LLM.

## "AI" is now one word for two different technologies

Since 2023 the vocabulary has collapsed, and it costs people real money. A significant share of the projects we're asked to quote are described in the wrong category entirely.

**Predictive AI produces a number.** It learns from your historical records and estimates a quantity or a probability — units, revenue, likelihood of churn. It's trained on your data, it can be measured against reality, and you can state exactly how wrong it usually is. This page.

**Generative AI produces language, code, or images.** It's a large model trained on text, prompted rather than fitted, and useful for reading, writing, summarising, and answering. Its correctness is judged, not measured. That's [generative AI and custom LLMs](/services/generative-ai-custom-llms).

**The practical test:** if the right answer is a number you could eventually check against what happened, it's predictive. If the right answer is a piece of text a person has to read and judge, it's generative.

They're built differently, they cost differently, and they fail differently — a forecast drifts quietly, an LLM makes something up confidently. Plenty of systems use both: a model predicts which accounts are at risk, an LLM drafts the outreach. But scoping them as one project is how budgets get spent on the wrong half of the problem.

---

## SECTION 9 — How the work runs

> **UI/UX:** Vertical timeline with connecting rule, matching A-1 through A-4. **Five steps.** The A-5 distinction is step three: a **visible decision point where the engagement can honourably stop.** Mark it — a different node treatment, an explicit "go / no-go" label. It's the most persuasive element in the section and it must be seen at a glance.

## Five phases, with an exit at week two

**01 — Define the decision**
What are we predicting, who acts on it, in which system, and what does being wrong cost in each direction? Under-forecasting and over-forecasting rarely hurt equally, and that asymmetry shapes the whole model.

**02 — Data and baseline**
We assemble the history, check it's sufficient, and build the simple method. You get a written baseline number. Everything afterwards is measured against it.

**03 — Go / no-go** ← *decision point*
We build a first model and compare it to the baseline honestly. **If the improvement doesn't justify the cost of building and running it, we say so and the engagement stops here.** You keep the baseline, the data work, and the write-up. This is a real exit, not a formality — and it's the reason the earlier phases are priced separately.

**04 — Build and integrate**
The model, the retraining pipeline, monitoring on prediction error, and the integration that puts the output in front of the person who acts on it.

**05 — Run it**
Error tracked against outcomes as they arrive, drift alerting, scheduled retraining, and a named engineer. Models decay — that's the nature of the technology, not a defect, and it's scoped from day one.

---

## SECTION 10 — Is this what you need?

> **UI/UX:** Compact linked cards, three-up then two-up. Plain treatment. Omit or disable any card whose page isn't live; ship the rest as plain text rather than live 404s.

## Prediction, or something else?

- **You want to know what's likely to happen next, and act on it** — you're on the right page.
- **You want to know what happened and what's true now** — [business intelligence](/services/business-intelligence).
- **You want one screen answering a known set of questions** — [custom dashboards](/services/custom-dashboards).
- **Your data isn't in one place yet** — [data warehousing and ETL](/services/data-warehousing-etl), and it's the honest first step.
- **You want something written, read, or summarised** — [generative AI and custom LLMs](/services/generative-ai-custom-llms).
- **You want something to happen automatically when a threshold is crossed** — [workflow automation](/services/workflow-automation).

---

## SECTION 11 — Engagement models

> **UI/UX:** Three columns, middle emphasised. **The first tier must be priced low enough to be a genuine yes** — its whole purpose is to make the go/no-go exit real rather than rhetorical. Publish without figures if prices aren't confirmed; never publish a range you can't honour.

## How engagements are structured

### Feasibility and baseline — from $[X]
Two weeks. Data assessment, the baseline method, a written verdict on whether a model is likely to beat it, and by how much. **You can stop here and many should.** Deducted from the build price if you continue.

### Model build — from $[Y]
The model, validation, retraining pipeline, monitoring, and integration into the system where the decision happens. Fixed scope, fixed price, typically [X] to [Y] weeks after feasibility.

### Ongoing — from $[Z]/month
Error monitoring against actual outcomes, drift alerting, scheduled retraining, threshold tuning, and a named engineer. Available on models we built and on models we didn't.

---

## SECTION 12 — Proof

> **UI/UX:** This section is different from every other page's case-study block, on purpose. **Read the note before building it.**
>
> **You have no predictive case study.** Neither PartsFlow nor Unified Accounting is one, and framing either as a prediction story is the fastest possible way to lose the exact buyer this page is written for — this reader has met people who oversold models and is scanning for it.
>
> Build this section as an honest block instead. It converts better than a stretched case study, and it is consistent with everything the page has already said. Replace it the moment a real engagement exists.

## What we can and can't show you

We've built the data foundations underneath prediction work — pipelines, warehouses, and the reporting layer — and you can see that work in [Unified Accounting](/case-studies/unified-accounting) and [PartsFlow](/case-studies/partsflow).

**Neither is a forecasting project, and we're not going to present them as one.** Predictive analytics is a newer part of our practice than our automation and data engineering work.

What that means for you, practically: the feasibility phase exists partly so you can judge us on your own problem before committing to a build. Two weeks, a fixed price, a written verdict, and a real exit. It's a shorter and cheaper way to assess a vendor than reading a case study about somebody else's business.

*[If a predictive engagement has completed by publication, replace this entire section with the standard two-card treatment and delete the note above.]*

---

## SECTION 13 — FAQ

> **UI/UX:** Accordion, first item open, matching A-1 through A-4. Add `FAQPage` schema. These questions are heavily surfaced by LLMs and remain the cheapest GEO win on the page.

## Common questions

**How much data do we actually need?**
It depends on how often the outcome has occurred, not on total rows. As a working rule we want several hundred instances of the thing being predicted, and for anything seasonal at least two full cycles — three is better. We check this for free before you commit, and we'll tell you if the honest answer is "not yet."

**How accurate will it be?**
Nobody credible can answer that before seeing your data, and anyone who quotes a number in a sales call is guessing. What we do commit to is measuring it against a simple baseline and reporting both, so you can judge whether the model is earning its cost.

**What if the model doesn't beat the baseline?**
Then we say so and you don't buy it. That's what the feasibility phase is for, and it happens often enough that we price it as a real exit rather than a formality.

**Is this the same as the AI everyone's talking about?**
No. Predictive models produce numbers from your historical data and can be measured against what actually happened. Generative AI produces text and images and is judged rather than measured. Different technology, different cost, different failure mode — see the section above.

**Who owns the model?**
You do. Training code, feature definitions, model weights, and documentation transfer on final payment. No per-prediction pricing and no platform dependency you can't exit.

**How often does it need retraining?**
Depends how fast your business changes — monthly for fast-moving demand, quarterly for longer sales cycles. What matters more than the schedule is monitoring error against outcomes so retraining is triggered by evidence rather than by the calendar. That's included in the monthly plan.

**Can you work with our existing data team?**
Yes, and it's often the better arrangement. We frequently build the model and hand it to an internal team to run, or take on monitoring for models built elsewhere. Both are normal.

**Do you use our data to train anything else?**
No. Your data trains your model and nothing leaves your environment without your instruction. NDA before discovery, and we'll work inside your cloud account if you prefer.

---

## SECTION 14 — Closing CTA

> **UI/UX — second of Template A's two dark bands.** Full-bleed dark, headline, one supporting line, single primary button, no competing secondary link, no email capture. Identical treatment to A-1 through A-4 so all five read as siblings.

## Tell us what decision you're making blind.

Book a 30-minute call. We'll tell you whether your data can support a prediction, what the simple version would look like, and whether a model is worth building at all.

**[Book a discovery call]**

---

# PART 3 — BUILD NOTES

## What makes this visibly different from A-1 to A-4

Five Template A pages is where a tier risks blurring. The distinguishing elements, in order of load-bearing weight:

1. **The hero chart with a visible widening prediction interval.** No other page has a data visual as its hero, and it states the positioning before any copy is read.
2. **Section 3's baseline test**, which is structurally unlike A-4's maturity ladder — that one sorts readers into stages, this one sets a bar the work has to clear.
3. **The go/no-go node in the timeline.** Same timeline component as A-1 to A-4, one node treated differently.
4. **Section 12 is an honest proof-gap block**, not a case-study grid. Unique on the site and it should stay that way only as long as it's true.

## The one thing that must not drift

**Every claim on this page is falsifiable, and that's the asset.** If a future edit adds an accuracy percentage, a "95% accurate" badge, or a case study implying a forecasting result that didn't happen, the page loses the only thing distinguishing it from every competitor in a saturated category. This buyer is specifically scanning for overclaiming. Put this in the CMS notes.

## Accessibility

- The hero chart needs a genuine text alternative describing the shape of the forecast and the widening interval, plus a plain-language annotation visible on the chart itself — not colour alone to distinguish actual from forecast.
- Prediction intervals shown as shaded bands must remain distinguishable in greyscale and for colour-blind readers; use a pattern or an outline as well as a fill.
- Accordion FAQ needs full keyboard support and correct expanded state.

## Performance

- Render the hero chart as inline SVG. **Do not pull in a charting library** for one static illustration — it would be the heaviest asset on a page whose argument is about restraint.
- Respect `prefers-reduced-motion` on any chart draw-in animation.

## Site-level issues this page inherits

1. **Duplicated logo marquee** on service pages — same eight clients twice, with a stray `navdrin` text node and no logo attached.
2. **Footer Services column** still links all three items to homepage anchors instead of the service pages that now exist.
3. **Case Studies in the main nav** points at a single case study rather than an index.
4. **Brand mark** still varies between "Spaciva AI", "Spaciva Solutions", and the stylised lockup.

---

# VALUES THE CLIENT MUST SUPPLY

- [ ] Feasibility phase price `$[X]` — **set this deliberately low.** The go/no-go exit is the page's main persuasive device and it only works if the first step is easy to say yes to
- [ ] Model build price floor `$[Y]` and typical week range
- [ ] Monthly monitoring price `$[Z]`
- [ ] Confirmation of which of the six model types in Section 4 you'll genuinely take on — **cut any you wouldn't want the first enquiry to be about**
- [ ] Whether you have any predictive work completed or in flight that could replace Section 12
- [ ] Sign-off on the three edits to the BI page and the one-line edit to Inventory Management
- [ ] A decision on whether the honesty in Section 3 and Section 12 is one you'll hold to on sales calls. **If the sales conversation contradicts the page, the page stops working** — this is the most consequential item on the list
