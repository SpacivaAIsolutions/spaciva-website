# Spaciva Homepage — Content Rewrite Spec

**For:** Cursor / implementing developer
**Scope:** Homepage (`/`) content only. Layout, component structure, and visual design stay as-is unless explicitly noted. This is a copy and information-architecture change, not a redesign.

---

## Context for the implementing agent

Spaciva is repositioning from a generalist agency ("we do AI, web, mobile, custom software") to a specialist: **an AI automation company that engineers the software around it**, selling to agencies, professional-services firms, and e-commerce/DTC brands in the US and UK.

The current homepage fails three tests:

1. **No specificity** — there is not a single number anywhere on the page. No outcome, no price, no timeline, no team size. Every claim is an adjective a competitor could also make.
2. **Wrong hierarchy** — the first service card is "Business Websites," an offer being deprecated. AI Automation, the hero offer, is third.
3. **Missing the target audience** — the Industries section lists ten industries and omits Agencies, Professional Services, and E-Commerce, which are the three the business is built around.

Every instruction below serves one of those three fixes.

### Rules for this task

- **Do not invent facts.** Anything in `[SQUARE BRACKETS]` is a real-world value the client must supply. Leave the bracket visible in the code and add a `{/* TODO: client to confirm */}` comment. Do not substitute a plausible-sounding number.
- **Do not add filler copy.** If a block has no content specified, delete the block rather than writing something to fill it.
- Preserve existing component APIs, styling tokens, and responsive behaviour.
- Keep sentence case for body copy, title case for headlines, matching current conventions.

---

# SECTION 1 — Hero

## Delete

- Headline: "Let's Turn Your Business Challenges Into Smart Solutions."
- Subhead: "From the first conversation to deployment, we help you make confident technology decisions that support long-term growth."

## Replace with

**Headline** (keep the existing two-tone treatment — plain text for the first line, accent colour for the second):

```
AI automation that runs
your busywork
```

Apply the accent/purple colour to `your busywork`.

**Subhead:**

```
We build custom AI agents and automations for agencies, professional-services firms,
and DTC brands in the US and UK — integrated with the tools you already use,
and monitored by us every month.
```

**Primary CTA:** change label from `Discuss Your Idea` to `Book a 30-minute call` → links to `/contact`

**Add a secondary text link** beside the primary CTA:

```
See how it works →
```

Links to `#services`.

## Add — proof line

Directly beneath the CTA row, before the trust chips. Small, muted text.

```
[X]+ systems live across the US, UK, and India
```

`[X]` = client-supplied. If the client cannot supply a real number, **delete this line entirely** rather than approximating.

## Trust chips — replace all three

These currently read "Transparent Development / Weekly Progress Updates / Scalable Architecture." Two are adjectives. Replace with commitments a competitor can't casually copy:

| Position | New label |
|---|---|
| 1 | Weekly written updates + Loom walkthrough |
| 2 | Fixed scope, fixed price |
| 3 | You own the code |

Keep the existing icon + pill styling.

---

# SECTION 2 — Hero service cards (right column)

Currently five cards in this order: Business Websites → Custom Software → AI Automation → Mobile Apps → Ongoing Support.

## Actions

1. **Delete** the `Business Websites` card entirely.
2. **Delete** the `Mobile Apps` card entirely.
3. **Reorder** the remaining three so AI Automation is first.

## Final state — three cards

**Card 1**
```
AI Automation
Support agents · Lead routing · Invoice processing
```

**Card 2**
```
Custom Software
CRMs · Internal tools · Ops dashboards
```

**Card 3**
```
Ongoing Support
Monthly monitoring, tuning & maintenance
```

**Note on the sub-labels:** the current ones name technologies ("Chatbots · WhatsApp · Workflows"). The replacements name outcomes. Keep it that way — the buyer is an operations lead, not an engineer.

With two cards removed, adjust vertical spacing so the three remaining cards balance against the hero text block height.

---

# SECTION 3 — "What We Do" (dark section)

## Section header

**Delete:** "We engineer powerful digital products, from advanced AI automation to high-performance corporate applications."

**Replace with:**

```
We're not a full-service agency. We do three things, in this order.
```

## Card grid — restructure

Currently six equal-ish tiles: AI Solutions (large), Web Applications, Mobile Apps, UI/UX Design, Cloud & DevOps, Custom Software.

Six equal pillars is the "we do everything" signal this rewrite exists to remove.

### New structure: 1 large tile + 2 medium tiles

**Delete these tiles entirely:** `Mobile Apps`, `UI/UX Design`, `Cloud & DevOps`.

**Tile 1 — large (keep existing large-tile treatment and position):**

```
Title: AI Automation & Agents

Body: Support agents trained on your own docs. Lead intake, qualification
and routing. Invoice and document processing. Automated client reporting.
Built to run in production and monitored monthly.

Price line: From $[X] · Live in 3 weeks
```

The price line should be visually distinct — accent colour or a bordered pill. This is the highest-value single addition on the page: naming a price separates Spaciva from every competitor who forces the buyer to ask.

`[X]` client-supplied. If no price is confirmed, render `Live in 3 weeks` alone and omit the "From $X" fragment.

**Tile 2 — medium:**

```
Title: Custom Software & Internal Tools

Body: CRMs, dashboards, portals, and web apps — the engineering layer
automation needs underneath it. Full code ownership on final payment.
```

**Tile 3 — medium:**

```
Title: Monitoring & Maintenance

Body: A monthly plan on every system we build: uptime monitoring, model
and prompt tuning, updates, and small feature work — with a named engineer
who knows your setup.
```

### Technology tags

Keep the small tag pills, but move them **below** the body copy and reduce them to secondary/muted styling. They currently sit directly under the tile title, which gives engineering vocabulary more prominence than the outcome.

Suggested tags per tile:
- Tile 1: `LLMs` `AI Agents` `RAG` `n8n`
- Tile 2: `React` `Next.js` `Node.js` `Postgres`
- Tile 3: `AWS` `Monitoring` `CI/CD`

---

# SECTION 4 — Logo strip

## Change the label

**Delete:** `TRUSTED BY AMBITIOUS BRANDS WORLDWIDE`

**Replace with:**

```
TRUSTED BY TEAMS IN THE US, UK, AND INDIA
```

## Add client names

Render the company name as small text beneath each logo. An unlabelled logo is unverifiable, and unverifiable proof reads as decoration.

## Add a testimonial block

New block directly beneath the logo strip. Single centred quote, max-width ~680px.

```
"[Testimonial quote — must contain a specific number, e.g. hours saved
per week, percentage reduction, or time-to-completion.]"

[Full name], [Job title] — [Company]
```

All values client-supplied. **If no testimonial with a number is available, do not build this block yet** — leave a commented-out placeholder. A vague testimonial ("great to work with") is worse than none, because it occupies proof real estate without providing proof.

---

# SECTION 5 — "Why Choose Us"

This is currently the weakest section on the page. All six items — Senior Engineers, AI-first Development, Fast Delivery, Scalable Architecture, Security Focused, Long-term Support — are claims every competing agency also makes. A differentiator a competitor can copy verbatim is not a differentiator.

## Replace all six labels with checkable commitments

| # | Delete | Replace with |
|---|---|---|
| 1 | Senior Engineers | You work with the engineers, not an account manager |
| 2 | AI-first Development | Full code and model ownership on final payment |
| 3 | Fast Delivery | Most automations are live in 3 weeks |
| 4 | Scalable Architecture | [X] hours of daily overlap with US and UK hours |
| 5 | Security Focused | NDA before discovery, standard MSA and SOW |
| 6 | Long-term Support | Every build includes monthly monitoring and tuning |

Item 4 requires a client-supplied number. If unavailable, substitute: `Video calls in your working hours, not ours`.

These labels are longer than the current ones — check wrapping at tablet and mobile breakpoints and allow two lines per item.

## CRITICAL — fix the mockup image

The dashboard image in this section contains **visible design-template placeholder text**: `Feature Section` and `Minimal typography: Inter`.

This is unshipped filler currently live in production. It directly undermines the "senior engineers" claim sitting next to it, and technical buyers will notice.

**Action:** replace with a real product screenshot, or crop the image to exclude the placeholder text. If neither is possible immediately, remove the image and let the section run single-column. Priority: ship today.

---

# SECTION 6 — Industries We Serve

## Delete the entire current chip set

Currently ten: Healthcare, Education, Manufacturing, Finance, Real Estate, Retail, Logistics, Startups, Hospitality, Government.

Two problems: ten industries signals "senior at nothing," and the three industries the business actually targets are **absent from the page entirely**.

## Replace with exactly six

```
Agencies
Professional Services
E-Commerce
Startups & SaaS
Manufacturing
Real Estate
```

Order matters — the first three are the primary niches and should render first at every breakpoint.

## Update the section subhead

**Delete:** "Transforming operations across global sectors."

**Replace with:**

```
We build deepest where visual, repetitive, and manual workflows are the bottleneck.
```

## Routing

The first three chips must link to dedicated pages:

- `Agencies` → `/industries/agencies`
- `Professional Services` → `/industries/professional-services`
- `E-Commerce` → `/industries/ecommerce`

**These pages do not currently exist.** If they are not yet built, render these three chips as non-interactive (no link) rather than linking to a 404. Do not create stub pages with placeholder content.

Existing routes `/industries/healthcare` and `/industries/finance` should be left in place but **removed from the footer** (see Section 9).

---

# SECTION 7 — Common Questions

Keep the existing accordion component and the five current questions. Add three more.

## Add these three, in this order, after "How does your pricing work?"

**Q: How much does a typical project cost?**
```
Most automation builds start at $[X], with a monthly plan from $[Y] for
monitoring and maintenance. Larger custom software projects are scoped
individually. We'll give you a fixed price before any work begins.
```
Client-supplied figures. If unavailable, omit this question rather than answering vaguely — a non-answer here is worse than silence, because it confirms the buyer's suspicion that pricing is negotiable and opaque.

**Q: How do you work with clients in different time zones?**
```
We're based in Ahmedabad, India, and keep [X] hours of daily overlap with
US Eastern and UK working hours. You get a written update every Friday plus
a short Loom walkthrough, and we're available for video calls in your hours.
```

**Q: What happens after a project launches?**
```
Every system we build includes a monthly plan: uptime monitoring, model and
prompt tuning, dependency updates, and small feature work, with a named
engineer who knows your setup. AI systems drift over time — that's the nature
of the technology, so we scope for it upfront rather than treating it as an
afterthought.
```

This last answer is the retainer pitch delivered as reassurance rather than an upsell. Keep the wording as written.

## Also update the existing pricing answer

**Delete:** "We offer transparent, milestone-based pricing tailored to your specific project requirements. For ongoing work, we also provide dedicated team retainers."

**Replace with:**
```
Our core offers are fixed-scope packages with a stated price and timeline,
so you know the cost before you commit. Ongoing work is billed as a simple
monthly plan. We don't bill hourly by default.
```

---

# SECTION 8 — Final CTA banner

## Delete

- Headline: "Not Sure What to Build or How to Scale your business ?"
- Body: "Every successful product starts with clarity. Share your business challenge, and we'll help you define the right strategy, choose the right technology, and build a solution that scales."

This headline self-selects for buyers who don't know what they want and have no approved budget — the slowest, lowest-value segment. (It also contains a stray space before the question mark and an inconsistent lowercase "your".)

## Replace with

**Headline:**
```
Tell us what's eating your team's time.
```

**Body:**
```
Book a 30-minute call. We'll look at your workflow, tell you honestly whether
automation is worth building, and give you a fixed price if it is.
```

**CTA label:** change from `Discuss Your Idea` to `Book a discovery call`

---

# SECTION 9 — Header, footer, and global

## Header nav

`Case Studies` currently links to `#case-studies`, which does not exist on the page. Clicking it returns the user to the top with no feedback.

**Action:** remove the `Case Studies` nav item until a case studies section or page exists. Do not link to an empty anchor.

## Footer — Company column

`Our Work` links to `#portfolio`, which also does not exist. **Remove this link.**

`About Us` links to `/about`, which currently **returns a 404**. Either ship the About page in the same release, or remove the link. Do not leave a 404 linked from every page on the site.

## Footer — Services column

**Delete:** `Mobile Apps`, `Web Apps`

**Replace the column with:**
```
AI Automation
Custom Software
Monitoring & Maintenance
```

## Footer — Industries column

**Delete:** `Healthcare`, `Finance & FinTech`

**Replace the column with:**
```
Agencies
Professional Services
E-Commerce
Startups
```

Link only those that have live pages; render the rest as plain text.

## Footer — social

The LinkedIn icon links to a **personal profile** (`/in/spaciva-ai-solution-...`). Replace with the company page URL once created. Client-supplied.

## Footer description

**Delete:** "Engineered for growth. We build custom software, AI agents, and web applications for ambitious brands worldwide."

**Replace with:**
```
AI automation and software engineering for agencies, professional-services
firms, and DTC brands. Based in Ahmedabad, India.
```

## Contact page

`spacivaaisolution@gmail.com` is currently the only direct contact address. Replace with a domain email (`hello@spaciva.tech`) everywhere it appears. Client-supplied — do not guess the address.

---

# SECTION 10 — Metadata and schema

## Current meta (replace)

The existing meta description and keywords market three deprecated service lines (LMS, technical SEO, Healthcare/FinTech) and lead with "India based AI company," which is the first thing a US/UK buyer sees in a search snippet.

**Meta title:**
```
AI Automation for Agencies & DTC Brands | Spaciva
```

**Meta description:**
```
Spaciva builds custom AI agents and automations for agencies, professional-services
firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.
```

**Open Graph / Twitter:** mirror the above. Remove all references to Healthcare Tech, FinTech, LMS, and SaaS Platforms from `og:description` and `twitter:description`.

**Meta keywords:** remove the tag entirely. It carries no ranking value and currently advertises the old positioning.

## Brand consistency

Three variants are currently in use across the site: `SPACIVA AI`, `Spaciva Solutions`, `SPΛCIVΛ`. Standardise on one for all `<title>` tags, `og:site_name`, and the logo alt text. Client to confirm which.

## Add JSON-LD

Add two schema blocks to the homepage:

**`Organization`** — `name`, `url`, `logo`, `description`, `foundingDate`, `address` (Ahmedabad, Gujarat, IN), `numberOfEmployees`, `sameAs` (LinkedIn company page, Instagram). All values client-supplied.

**`FAQPage`** — mark up all eight FAQ entries. These are the questions LLMs surface when someone asks how to vet an offshore development partner, and the markup makes them citable.

---

# Build checklist

- [ ] Hero headline, subhead, CTAs replaced
- [ ] Proof line added (or omitted if no real number)
- [ ] Trust chips replaced with three commitments
- [ ] Business Websites + Mobile Apps hero cards deleted; AI Automation moved to first
- [ ] "What We Do" reduced from six tiles to three
- [ ] Price line added to AI tile
- [ ] Tech tags demoted below body copy
- [ ] Logo strip labelled with client names
- [ ] Testimonial block added (or left commented out)
- [ ] All six "Why Choose Us" labels replaced
- [ ] **Placeholder text removed from dashboard mockup image**
- [ ] Industries reduced from ten to the specified six, in order
- [ ] Three new FAQ entries added; pricing answer rewritten
- [ ] Final CTA headline and body replaced
- [ ] Dead `#case-studies` and `#portfolio` links removed
- [ ] `/about` either shipped or unlinked
- [ ] Footer columns rebuilt
- [ ] Gmail address replaced sitewide
- [ ] Meta title, description, OG tags rewritten; keywords tag removed
- [ ] Organization + FAQPage JSON-LD added
- [ ] Responsive check: longer "Why Choose Us" labels at mobile and tablet

---

# Values the client must supply before launch

| Placeholder | Appears in |
|---|---|
| `[X]+ systems live` | Hero proof line |
| `From $[X]` — AI automation starting price | What We Do tile 1, FAQ |
| `$[Y]` — monthly plan starting price | FAQ |
| `[X]` hours of US/UK overlap | Why Choose Us, FAQ |
| Testimonial quote, name, title, company | Logo strip section |
| Client names for each logo | Logo strip |
| Professional domain email | Contact page, footer |
| LinkedIn company page URL | Footer |
| Brand name variant to standardise on | Global |
| Founding date, employee count, address | JSON-LD |

**If a value is not supplied, follow the fallback stated in that section. Do not fabricate.**
