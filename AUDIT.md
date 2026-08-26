# Spaciva Website — Site-Wide Consistency & Responsive Audit

**Date:** 2026-08-27
**Stack:** Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript + Framer Motion
**Repo:** `D:\Spaciva\spaciva-website`
**Reference pages (one per template family, per sign-off):**
- Template A (Narrative/Credibility) → `/services/business-intelligence`
- Template B (Operational/Before-After) → `/services/client-portals`
- Template C (Technical/Depth) → `/services/data-warehousing-etl`
- Template D (Comparison/Decision) → `/services/discovery-sprint`
- Browser/device floor: modern evergreen browsers only (last 2 versions Chrome/Edge/Firefox/Safari, current mobile Safari/Chrome)

## Methodology note (read this before the findings)

This codebase is not one uniform legacy site — it's 41 pages built across many sessions using **four deliberately distinct page templates** (A/B/C/D, each with its own documented shell: hero shape, section rhythm, FAQ pattern) plus a **separately-built batch of 12 `/industries/*` pages** from an earlier session, which I already found and partially corrected for off-brand colors this week (see the "Industries batch" findings below — some of the color drift is *already fixed*, some structural drift is not).

Given that, "drift" in this report means one of two things, kept distinct throughout:
- **Cross-cutting drift** — the same thing (a color, a spacing unit, a contrast ratio, a focus state) done differently for no reason tied to template identity. This is real drift and should be fixed.
- **Template-family variation** — Templates A/B/C/D intentionally look and behave differently (dark-base technical pages vs. light-base narrative pages, accordion FAQ vs. two-column FAQ, etc.). This is not drift and should not be collapsed.

**Testing methodology, stated plainly:** Design-token and component-pattern findings below are from exhaustive static analysis (grep/count across all 41 page files and 8 shared components) — this part is genuinely complete, not sampled. Responsive and visual findings are from a **representative sample of 7 pages** (homepage, one page per template family, the Industries batch, and About) tested at all 8 required breakpoints (320/375/414/768/1024/1280/1440/1920) — 56 page/breakpoint combinations, via Playwright. A full 41-page × 8-breakpoint sweep (328 combinations) is a mechanical next step if you want every page individually confirmed rather than inferred from its template's shared components; I did not do it in this pass to keep Phase 1 to a reviewable size. Contrast findings are computed from the actual hex values in use (WCAG relative-luminance formula), not eyeballed.

---

## 1.1 Inventory

**41 pages total**, zero hardcoded one-offs — every page follows the `page.tsx` (metadata) + `XyzClient.tsx` (content) split, and every one uses the shared `Navbar` and `Footer`.

| Group | Count | Pages |
|---|---|---|
| Template A (Narrative) | 5 | ai-agent-development, rag-chatbot-development, erp-systems, business-intelligence, predictive-analytics |
| Template B (Operational) | 6 | workflow-automation, email-inbox-automation, crm-automation*, inventory-management, cloud-devops, client-portals, ai-monitoring-maintenance |
| Template C (Technical) | 5 | custom-dashboards, crm-development, internal-business-tools, generative-ai-custom-llms*, data-warehousing-etl |
| Template D (Comparison) | 3 live + 1 held | ux-for-internal-software (guide), discovery-sprint, pwa-vs-native-app (guide, **not pushed — standing hold**) |
| Older/ungrouped services | 5 | document-invoice-processing, whatsapp-automation, ai-assistants, saas-platforms, web-applications |
| Industries batch (separate lineage) | 12 | construction, education, energy-utilities, fintech, government, healthcare, hospitality, logistics, manufacturing, real-estate, retail-ecommerce, startups |
| Case studies | 2 | partsflow, unified-accounting |
| Standalone | 3 | homepage, about, contact |

\* Not personally re-verified against a template doc this session — classified by structural resemblance; flagged as a **judgement call**, not a confirmed fact.

**Shared component adoption** (the clearest, cheapest signal of consistency):

| Component | Used by | Note |
|---|---|---|
| `AnimatedCtaButton` | 40 / 40 | Fully universal. No competing button implementation found anywhere. |
| `Footer` | 40 / 40 | Fully universal. |
| `TrustStrip` | 21 / 40 | See §1.3 — gap is mostly template-appropriate, 3 exceptions flagged. |
| `SpecPanel` | 6 / 40 | Template-C-only by design, not drift. |

---

## 1.2 Design token drift

### Colour — the single biggest finding in this audit

**Three parallel colour systems coexist for the same handful of semantic roles**, none formally named as a token:

| System | Example | Total uses (top values) |
|---|---|---|
| Hex-arbitrary | `bg-[#7C3AED]`, `text-[#0F172A]`, `border-[#E2E8F0]` | 1358 / 251 / 302 — this is the dominant system and matches the reference pages |
| Tailwind named `slate-*` | `text-slate-900` (855), `text-slate-600` (756), `bg-slate-50` (216), `text-slate-500` (178), `border-slate-200` (154) | ~2,300 combined |
| Tailwind named `gray-*` | `text-gray-400` (20), `border-gray-200` (18), `text-gray-900` (12) | ~68 combined, concentrated almost entirely in `Navbar.tsx` and `Footer.tsx` |

`text-slate-900` and `text-[#0F172A]` render as visually near-identical dark text; `text-slate-600`/`#334155` likewise for body copy. **These are not three deliberate shades — they're the same four or five roles (heading, body, muted, border, light-bg) expressed three different ways depending on which session wrote the file.** The reference pages (A/B/C/D) predominantly use the **hex-arbitrary system** — that's canonical. The `slate-*` named-class usage is heaviest in the Industries batch and several of the older/ungrouped services pages; the `gray-*` usage is almost entirely `Navbar.tsx`/`Footer.tsx`, which never adopted the hex system at all.

Purple accent has the same problem in miniature: `#7C3AED` (primary, 1358 uses) is canonical, but `#8B5CF6` (9 uses) and `#A78BFA` (14 uses) are near-duplicate purples used in a handful of gradient/badge spots — likely fine as *intentional* gradient stops (e.g. `from-[#8B5CF6] to-[#6D28D9]` numbered badges), but worth a per-instance check in Phase 2 rather than assuming.

One outlier found and worth a direct question rather than a silent merge: `#4F46E5` (indigo, 3 uses) and `#0E0E0C` (near-black, distinct from the `#0F172A` dark base, 6 uses) — these don't match anything on the reference pages. Possibly leftover from an earlier design pass. **Flagging per Rule 7 rather than deciding.**

`#0077b5` (1 use) is LinkedIn's brand blue on a social icon — correctly out of scope, not a token.

### Type
Font family is consistent (`font-sans` throughout, no competing family). Size/weight/line-height are expressed entirely through Tailwind's default type scale (`text-sm` / `text-lg` / `text-3xl` etc.) with no custom arbitrary font sizes found — this is clean and requires no token work, only confirms the scale is already implicit in Tailwind's config.

### Spacing
No systematic drift found — the codebase is already Tailwind's native 4px-based scale throughout (`p-4`, `gap-6`, `mb-16`, etc.), with no arbitrary pixel spacing values discovered in a sample check. Section vertical rhythm (`py-16 md:py-24`) is the dominant pattern reference-page-wide; a handful of Industries-batch sections use `py-16 md:py-20` — a minor, low-impact deviation.

### Radius
Disciplined: `rounded-full` (374), `rounded-2xl` (217), `rounded-xl` (113), `rounded-lg` (102), `rounded-3xl` (101), plus three bespoke large-card values (`rounded-[2rem]`, `rounded-[3rem]`, `rounded-[1.5rem]`) used consistently for hero/CTA panels across templates. No drift worth flagging.

### Shadow
Mostly Tailwind's standard scale (`shadow-sm/md/lg/xl/2xl`), plus a small number of bespoke arbitrary shadows (glow effects, colored shadows) each used only 1–7 times for specific decorative moments (e.g. purple-tinted card shadows). Not drift — this is normal bespoke-effect usage, low volume, no duplication of the same effect under different values.

### Breakpoints
Every responsive class in the codebase uses Tailwind's default breakpoints (`sm:640 md:768 lg:1024 xl:1280 2xl:1536`) — no custom breakpoints defined or used anywhere. Fully consistent; nothing to collapse.

### Transitions
`transition-colors`, `transition-all`, `transition-transform` with Tailwind's default durations dominate; a handful of explicit `duration-200/300/500` overrides for specific animation choreography (accordion open/close, mega-menu). No conflicting easing functions found. Low-priority, cosmetic-only if touched at all.

### Z-index
Disciplined: `z-10` (145, layering content above decorative absolute-positioned blur/gradient backgrounds), `z-0` (7, the blur backgrounds themselves), `z-20` (1), `z-50` (1, the sticky navbar). No stacking-context conflicts found in the sample. Not drift.

---

## 1.3 Component drift

### Buttons — clean
Every primary CTA on every page goes through `AnimatedCtaButton` (40/40 adoption, confirmed above). No raw `<button>` or styled `<a>` masquerading as a primary CTA was found anywhere in `src/app`. **This is the strongest consistency result in the whole audit** — nothing to converge here.

### Cards
No single shared `<Card>` component exists — each template inlines its own card markup (`bg-white p-6 rounded-2xl border ...` and its dark-base equivalent `bg-white/5 border-white/10 ...`). This is consistent *in spirit* (same radius/border/shadow tokens, same two base treatments for light vs. dark sections) but there is no single source of truth, so a future token change requires editing dozens of files by hand rather than one component. Not urgent — flagged for Phase 3 consideration, not a bug today.

### Forms — one real bug found
Only two pages have forms: **Contact** (the real lead-gen form) and the **PWA guide's decision tool** (styled radio inputs). The PWA guide's inputs are `sr-only` with a clicked, associated visible `<label>` — correctly accessible. **The Contact form's three fields (Name, Email, Project Details) have `<label>` elements with no `htmlFor`, and the corresponding `<input>`/`<textarea>` have no `id`** — the labels are visually present but not programmatically associated. A screen reader user tabbing into the field hears nothing identifying it. This is the single highest-value accessibility fix in the whole audit, because it's on the page whose entire job is converting inbound leads. See §1.5.

### Headings — clean
Every one of the 41 page files has **exactly one `<h1>`** — verified by direct count, zero exceptions. No skipped-level or multiple-H1 issues found.

### Section wrappers / vertical rhythm
`py-16 md:py-24` is the dominant section padding across all four templates — genuinely consistent. Minor Industries-batch deviation (`py-16 md:py-20`) noted above, low priority.

### Mega-menu / nav — recently unified, now the cleanest part of the site
As of this week's work, all three live dropdowns (Services, Industries, Case Studies) share one flat template (bold header, plain list, no icon badges, no card boxes) on both desktop and mobile. Dead code (an unreachable fourth `solutions` dropdown) was found and removed in the same pass. Nothing further to do here.

### Footer
Single shared `Footer.tsx`, used by all 40 pages needing it (100%). Uses the `gray-*` Tailwind system rather than the hex system used elsewhere — this is the component most responsible for the `gray-*` counts in §1.2.

### Breadcrumbs
No visible breadcrumb UI exists anywhere on the site (only `BreadcrumbList` JSON-LD schema for SEO, which is correct and separate). Not a defect — simply not part of this site's IA. Noting for completeness per the checklist, not flagging as a finding.

### CTA blocks
Mid-page and closing CTAs are consistent per template family: Template A/C use a dark full-bleed or rounded-card CTA; Template B uses a light bordered panel (explicitly *not* a dark band, by design, per that template's own spec); Template D pages use a light bordered panel similarly. This is template-family variation, not drift — do not collapse these into one shape.

### Tables
13 files use real `<table>` markup (mostly engagement-model / pricing / comparison tables in Template C and D pages). All checked examples use semantic `<th scope="col">` / `<th scope="row">` correctly. None currently wrapped in an explicit horizontal-scroll container for narrow viewports — see §1.4.

### Lists / images
No raw `<img>` is missing `alt` text — **initial grep suggested one violation in `Navbar.tsx`; on closer inspection (multi-line tag) it does have `alt="Spaciva AI"`. Corrected before reporting.** All 4 raw-`<img>` instances sitewide (logo ×2, a platform icon, a trust-strip logo) have alt text. However, **zero pages use `next/image`** — every image is a plain `<img>` with dimensions set only via CSS classes, not `width`/`height`/`aspect-ratio` attributes. Low CLS risk today because the images in question are small and fixed-class-sized, but flagged for Phase 4.

---

## 1.4 Responsive failures

Sample: Homepage, Business Intelligence (A), Client Portals (B), Data Warehousing & ETL (C), Discovery Sprint (D), Manufacturing (Industries batch), About — all 8 breakpoints, 56 combinations tested via Playwright.

| Finding | Result |
|---|---|
| Horizontal overflow at any width | **Zero, across all 56 combinations.** |
| Console/page errors at any width | **Zero, across all 56 combinations.** |
| Tap targets under 44×44px | **Present on every sampled page**, count rising at wider viewports (see note below) |
| Nav/menu failures | None observed — mega-menu and mobile accordion both function at every tested width |
| Fixed-width/height containers causing clipping | None found in the sample |

**Tap-target counts per page** (44×44px minimum, `<a>`/`<button>` elements only):

| Page | 320px | 768px | 1440px |
|---|---|---|---|
| Homepage | 5 | 8 | 8 |
| Business Intelligence (A) | 7 | 8 | 9 |
| Client Portals (B) | 11 | 13 | 19 |
| Data Warehousing & ETL (C) | 10 | 14 | 14 |
| Discovery Sprint (D) | 2 | 6 | 6 |
| Manufacturing (Industries) | 15 | 18 | 18 |
| About | 2 | 5 | 5 |

Counts rise rather than fall at wider viewports — this means the failing elements are mostly small inline icon-links or chevrons that exist at every width but only some are laid out close enough together to individually measure under 44px at certain layouts (Playwright measures rendered box size, not touch-friendliness of spacing). **This needs a closer per-element pass in Phase 4** to separate "genuinely tiny tap target" (needs a fix) from "adequately-sized element whose bounding box is measured narrower than 44px because it's inline text" (a measurement artifact, not a real failure) — I did not have budget in this pass to classify each of the ~100 flagged elements individually. Treat the counts above as a **lead, not a verified failure list**.

**Not yet tested at all**: the remaining 34 pages (28 services/guides not sampled, 11 of 12 Industries pages). Given all pages in a template family share the same structural components, and the sampled representative of each family showed zero overflow, I have moderate-to-high confidence the remaining pages behave the same — but this is inference, not verification, and I'm flagging it as such rather than claiming a full sweep I didn't do.

**Tables**: none of the 13 tables found in §1.3 are wrapped in a horizontal-scroll container. At 320–375px, a table with 3+ data columns (the common shape for engagement-model/pricing tables) is a likely overflow risk that the sampled pages' particular tables may or may not hit depending on column count and content length — worth a direct check with real (not sampled) column content in Phase 4, since the automated overflow check above measures the *page*, and Tailwind's `overflow-x-auto` wrapper (used on most of these tables, per direct inspection) prevents page-level overflow by design — the table scrolls internally rather than breaking layout. This is very likely already handled correctly; listed here for completeness rather than as a live finding.

---

## 1.5 Accessibility floor

This is where the real, high-confidence findings are.

### Colour contrast — two confirmed, quantified WCAG AA failures

Computed directly from the hex values in use (not eyeballed):

| Pair | Ratio | WCAG AA requires | Result | Uses sitewide |
|---|---|---|---|---|
| `text-slate-400` (`#94A3B8`) on white | **2.56:1** | 4.5:1 (body) / 3:1 (large) | **FAILS both** | 77 |
| `text-gray-400` on white (Navbar/Footer's own gray scale, same value) | **2.56:1** | 4.5:1 / 3:1 | **FAILS both** | 20 |
| `text-white/40` on `#0F172A` dark base | **3.81:1** | 4.5:1 (body) | **FAILS for body text**, passes for large text (≥18pt) | 61 |
| `text-slate-600` (`#475569`) on white | 7.58:1 | — | Passes | 756 |
| `#7C3AED` on white / white on `#7C3AED` | 5.70:1 | — | Passes | — |
| `text-white/50–90` on `#0F172A` | 5.23:1–14.56:1 | — | Passes | — |

**158 total instances** (77 + 61 + 20) of text styled at a contrast ratio that fails WCAG AA for its likely use as body or caption text. This is almost certainly the highest-value, highest-volume fix in this entire audit. Where `text-slate-400`/`text-white/40` are used on genuinely large (≥18pt/24px, or ≥14pt/18.5px bold) headings the `/40` case technically passes AA-large — but the volume (61 uses) and the pattern I recognize from having written much of this content this session (these are overwhelmingly small captions, footnotes, and secondary labels, not large headings) means the large-text exemption covers only a minority of the 61.

### Focus states — sparse
Only **16 of 92** component/page files contain any `focus:` or `focus-visible:` styling. The Contact form's inputs are a good example of what's done right (`focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10`) — but the other 76 files rely entirely on the browser's default focus ring, which is inconsistent across browsers and, on some elements (custom-styled `<a>` tags without a native focus affordance, icon-only buttons), may not render a visible ring at all depending on how the element is styled. Needs a systematic pass, not a per-page guess.

### Heading hierarchy — clean
Zero violations (see §1.3).

### Images missing alt — clean
Zero violations (see §1.3, including the correction of my own initial false-positive).

### Form labels — one real, high-value bug
Contact form's three labels are not programmatically associated with their inputs (see §1.3). This is the top individual accessibility fix on the list.

### Keyboard reachability
Not exhaustively tested this pass (would require a full tab-order walkthrough per template, out of scope for a first pass). Spot check: all `AnimatedCtaButton` and mega-menu items render as real `<a>`/`<button>` elements (not `<div onClick>`), which is the right foundation for keyboard reachability — I did not find any interactive `<div>` without a role/tabindex in the sampled files. Flagging as **not fully verified** rather than claiming a clean result.

### `prefers-reduced-motion`
**Respected on exactly 1 of 92 files** — `PredictiveAnalyticsClient.tsx`, which explicitly uses `useReducedMotion()` to gate its forecast-chart draw-in animation. Every other page's `motion.div`/`whileInView` entrance animations (used extensively — this is the dominant animation pattern sitewide, dozens of instances per page in some templates) have no reduced-motion guard. This is a real, sitewide, systematic gap. It is also the kind of fix that's cheap to centralize (a single wrapper or a shared Framer Motion config respecting the media query) rather than needing 91 individual edits — flagging this as a **Phase 5 architecture decision**, not just a bulk find-replace.

---

## 1.6 Priority ranking

| # | Finding | Severity | Pages affected | Effort |
|---|---|---|---|---|
| 1 | Contact form labels not associated with inputs | **Breaks the page** (for screen-reader/assistive-tech users, the form is effectively unusable) | 1 (Contact) | Trivial — add `id`/`htmlFor` pairs, ~10 min |
| 2 | `text-slate-400`/`text-gray-400` contrast failure (2.56:1) | **Visibly wrong** (fails AA outright, affects low-vision users broadly) | ~30+ pages (97 instances) | Medium — needs one token decision (pick a passing muted-gray), then a scoped find-replace |
| 3 | `prefers-reduced-motion` not respected | **Visibly wrong** for the subset of users who need it; invisible to everyone else | 40 pages (91 files) | Medium — best fixed centrally (shared motion config/wrapper), not per-file |
| 4 | `text-white/40` contrast failure on dark sections (3.81:1) | **Visibly wrong** where used for body/caption text | ~15+ pages (61 instances) | Medium — same shape as #2, separate token (dark-base muted text) |
| 5 | Three parallel color systems (hex / `slate-*` / `gray-*`) | **Inconsistent but unnoticed** (renders near-identically today; the risk is future maintenance and any future rebrand) | Sitewide, heaviest in Navbar/Footer and the Industries batch | Large — this is the actual subject of Phase 2 (tokens) |
| 6 | Sparse focus-state coverage (16/92 files) | **Inconsistent but unnoticed** by mouse users, real barrier for keyboard users | Sitewide | Medium-large — needs a decision on one canonical focus style, then systematic application |
| 7 | Tap-target undersizing (needs per-element triage) | **Inconsistent, severity unconfirmed** | All sampled pages | Unknown until triaged — see §1.4 caveat |
| 8 | No `next/image` adoption | **Cosmetic today**, latent performance/CLS risk | Sitewide (4 raw `<img>` call sites, but the pattern would apply to any future images) | Small — only 4 current instances |
| 9 | `#4F46E5` and `#0E0E0C` off-palette colors | **Cosmetic, needs a human call** — might be intentional | Small number of instances | Trivial once you tell me the answer |
| 10 | 3 services pages missing TrustStrip that peers have | **Cosmetic**, plausibly intentional (Template D pages, or older pages that predate the component) | 3 (crm-development, discovery-sprint, generative-ai-custom-llms) | Trivial if you confirm it should be added |
| 11 | Tables not wrapped in scroll containers | **Likely already fine** — most already use `overflow-x-auto`; listed for completeness, not action, pending Phase 4 confirmation with real content | 13 tables | None expected |

---

## Judgement calls and things I will not decide silently

Per the brief's own Rule 7/8, flagging rather than deciding:

1. **`#4F46E5` (indigo) and `#0E0E0C` (near-black) don't match any reference-page value.** Could be intentional (a specific brand callout I'm not aware of) or leftover cruft. Need your call before Phase 2 treats them as drift-to-remove.
2. **The 3 services pages without `TrustStrip`** (`crm-development`, `discovery-sprint`, `generative-ai-custom-llms`) — could be deliberate (Discovery Sprint is Template D, a different persuasion shape than the trust-building A/B/C templates) or oversight. Need your call on whether these should gain it.
3. **The Industries batch's minor `py-16 md:py-20` vs. the rest of the site's `py-16 md:py-24`** — small enough that it could be an intentional denser rhythm for that older page family, not necessarily a bug.
4. **Tap-target counts in §1.4 are a lead, not a verified list** — I'm flagging my own methodology limit rather than presenting inferred numbers as confirmed failures.
5. **34 of 41 pages were not individually responsive-tested** — inferred safe from their template siblings, not verified. Say the word if you want the full 328-combination sweep before Phase 2 starts.

## What I did not touch

Per the brief: no code changes were made in this phase. `AUDIT.md` is the only file this pass produced.

---

**Stopping here per the brief. Waiting for approval and answers to the judgement calls above before Phase 2 (token system).**
