"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  WifiOff, GitMerge, Sun, Gauge, Smartphone, BellRing, Code2,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

type Bucket = "native" | "pwa";

const QUESTIONS: { id: string; text: string; detail: string; bucket: Bucket }[] = [
  { id: "store", text: "Do you need it in the App Store or Play Store for discovery?", detail: "If customers will search a store to find you, that's the whole point of being there.", bucket: "native" },
  { id: "hardware", text: "Do you need hardware a browser can't reach?", detail: "Bluetooth peripherals, NFC payments, background location tracking, advanced camera control.", bucket: "native" },
  { id: "consumer", text: "Is it a consumer product where install rate is the business model?", detail: "Games, social apps, anything where the store listing is the funnel.", bucket: "native" },
  { id: "crossplatform", text: "Will people use it on both phones and desktops?", detail: "Field staff who also work at a laptop, clients who check on either.", bucket: "pwa" },
  { id: "known", text: "Is the audience known, your staff, your clients, your vendors, rather than the public?", detail: "You can send them a link. You don't need a store.", bucket: "pwa" },
];

const FALLBACK_WHY = [
  { title: "Do you need it in the App Store or Play Store for discovery?", why: "Native" },
  { title: "Do you need hardware a browser can't reach?", why: "Native" },
  { title: "Is it a consumer product where install rate is the business model?", why: "Native" },
  { title: "Will people use it on both phones and desktops?", why: "PWA" },
  { title: "Is the audience known rather than the public?", why: "PWA" },
];

const PWA_ISNT = [
  { title: "It isn't in the App Store or Play Store", desc: "There's no listing, no store search, no reviews, no “featured” placement. If people find your product by browsing a store, a PWA doesn't participate in that at all. For internal tools, client portals, and field apps this is irrelevant, you send a link. For a consumer product it can be the entire distribution model, and no amount of technical capability substitutes for it." },
  { title: "Some hardware is out of reach", desc: "Bluetooth peripherals, NFC payments, background location tracking while the app is closed, and fine-grained camera or sensor control are limited or unavailable in a browser. Barcode scanning via the camera works well. A dedicated Bluetooth scanner usually doesn't. If your workflow depends on specific hardware, tell us on the first call, it's the most common reason we say “you need native.”" },
  { title: "iOS support trails Android", desc: "Apple has narrowed the gap considerably and modern iPhones handle installed web apps, offline storage, and push notifications for home-screen apps. But iOS still lags on capability and on how obvious installation is to a non-technical user. There's also a regional wrinkle: Apple restricted standalone PWA behaviour for EU users in 2024 to comply with the Digital Markets Act, so installed web apps in EU countries currently open in a Safari tab rather than full-screen, without push, with no confirmed reversal as of writing. The precise state of all of this changes with each iOS release and each regulatory decision, we check it against your actual requirements and your users' location before quoting rather than working from what was true last year." },
  { title: "Installation needs a nudge", desc: "“Add to home screen” isn't obvious to most people, and on iOS it's a menu item rather than a prompt. For a known audience this is solved with one instruction in an onboarding email. For the general public it's real friction, and it's another reason PWAs suit known audiences better than consumer launches." },
];

const PWA_RIGHT = [
  { title: "Field and mobile teams", typicalBuyer: "an operations manager who has been quoted for a native app and can't justify it.", desc: "Technicians, installers, inspectors, drivers, and site staff filling in paper forms or phoning things back to the office. Jobs, checklists, photos, signatures, and offline capture that syncs when there's signal again. No store approval means a fix ships the same day it's reported, which matters more in the field than anywhere else." },
  { title: "Internal tools people use on a phone", typicalBuyer: "a team already building an internal tool who assumed mobile meant a second project.", desc: "Approvals, stock lookups, time entry, quick record updates. Your team already has laptop access; they just need the phone version to not be miserable. A separate native app for this is almost always overkill.", link: { href: "/services/internal-business-tools", label: "internal tool" } },
  { title: "Client and vendor portals on mobile", typicalBuyer: "anyone who has watched a client-facing app sit at 4% adoption.", desc: "Your clients aren't going to install an app to check an invoice. They'll open a link. A portal that works properly on a phone gets used; one that requires a download doesn't get installed in the first place.", link: { href: "/services/client-portals", label: "portal" } },
  { title: "Anything that also needs to work on desktop", typicalBuyer: "a business where the same person uses the system at a desk and in the van.", desc: "One codebase, one deployment, works everywhere. The moment your users span phones and laptops, building two native apps plus a web version stops making sense, you're maintaining three things that do the same job." },
];

const HOW_WE_BUILD = [
  { title: "Offline as a design decision, not a feature", icon: WifiOff, desc: "What happens with no signal is decided per screen at the start, what's cached, what queues, what's simply unavailable. Retrofitting offline is close to a rebuild, so it's settled before anything is built." },
  { title: "Conflict handling that's been thought about", icon: GitMerge, desc: "Two people edit the same record offline. One reconnects first. What should happen? A real answer agreed with you in advance, rather than whoever syncs last silently winning." },
  { title: "Built for one hand, outdoors", icon: Sun, desc: "Field apps get used standing up, in gloves, in sunlight, on a cracked screen. Large targets, high contrast, minimal typing. This is the difference between adoption and a team going back to paper." },
  { title: "Fast on bad networks and old phones", icon: Gauge, desc: "Your field team doesn't have this year's flagship on 5G. Performance budgets are set for the worst device and connection in the fleet, not the best." },
  { title: "Installation made obvious", icon: Smartphone, desc: "A guided prompt, clear instructions per platform, and an onboarding message people actually follow. The best PWA nobody installed is worth nothing." },
  { title: "Notifications that respect the platform", icon: BellRing, desc: "Push where the platform supports it for installed apps, sensible fallbacks where it doesn't, and honesty about the difference rather than a promise that quietly doesn't hold on some devices." },
];

const COMPARISON = [
  { label: "Time to build", pwa: "Weeks", native: "Typically several months", nativeWins: false },
  { label: "Cost", pwa: "One build", native: "Usually two builds, iOS and Android", nativeWins: false },
  { label: "Updates", pwa: "Instant, no review", native: "Store review, and users must update", nativeWins: false },
  { label: "App Store presence", pwa: "None", native: "Yes, and it's the point for consumer products", nativeWins: true },
  { label: "Discovery via store search", pwa: "None", native: "Yes", nativeWins: true },
  { label: "Works offline", pwa: "Yes, when designed for it", native: "Yes", nativeWins: false },
  { label: "Camera and photos", pwa: "Yes", native: "Yes, with finer control", nativeWins: false },
  { label: "Bluetooth, NFC, background location", pwa: "Limited or unavailable", native: "Full access", nativeWins: true },
  { label: "Push notifications", pwa: "Supported for installed apps; varies by platform", native: "Fully supported everywhere", nativeWins: true },
  { label: "Performance ceiling", pwa: "High, and enough for most business apps", native: "Higher, the right call for heavy graphics", nativeWins: true },
  { label: "Works on desktop too", pwa: "Yes, same build", native: "No, separate work", nativeWins: false },
  { label: "Installation", pwa: "Add to home screen, needs a nudge", native: "Store download, familiar to everyone", nativeWins: false },
  { label: "Ongoing maintenance", pwa: "One codebase", native: "Two, plus store compliance", nativeWins: false },
];

const FAQS = [
  { q: "Is a PWA just a mobile website?", a: "No, though the line is blurry. A responsive website adapts its layout to a phone. A PWA additionally installs to the home screen, opens without browser chrome, works offline, and can send notifications. The difference is whether it behaves like software your team opens daily or like a page they visit." },
  { q: "Will it work on iPhone?", a: "Yes, for the most part. Modern iOS supports installed web apps, offline storage, and push notifications for apps added to the home screen. Capability still trails Android in places, Apple changes this with each release, and EU users specifically have been restricted to Safari-tab behaviour without push since 2024 under the Digital Markets Act, with no confirmed reversal as of writing. We check the current state against your specific requirements, and your users' location, before quoting rather than working from what was true a year ago." },
  { q: "Can it work with no internet?", a: "Yes, when it's designed for it from the start. Data is cached for reading and changes queue locally until there's signal. What's available offline is decided screen by screen at the start, because retrofitting it later is close to a rebuild." },
  { q: "Can it use the camera and scan barcodes?", a: "Yes, camera-based barcode and QR scanning works well and is one of the most common requirements we build. Dedicated Bluetooth scanner hardware usually doesn't work in a browser, so if your team uses one, say so early." },
  { q: "Can we get it into the App Store?", a: "Not as a PWA. There are wrapper approaches that submit a web app as a store listing, and they sit in an awkward middle ground, store review still applies, Apple has historically been unenthusiastic about thin wrappers, and you lose the instant-update advantage. If store presence genuinely matters, build native." },
  { q: "How much cheaper is it than a native app?", a: "Substantially, and the reason is structural rather than a discount: one codebase instead of two, no store submission process, and no ongoing compliance with two sets of platform requirements. The maintenance difference compounds every year and is usually larger than the build difference." },
  { q: "What if we need a native app later?", a: "Building the PWA first is often the cheapest way to find out whether you do. You'll have real usage data, a validated feature set, and an API a native app can be built against. Plenty of teams discover the native version was never needed; the ones who do need it arrive at it with far better information." },
  { q: "Do you build native apps?", a: "No. We build progressive web apps and web applications, and we'll tell you honestly when your requirement needs native so you can find a specialist. Taking a native project we'd deliver badly helps nobody." },
  { q: "How long does one take?", a: "Similar to any web application of comparable scope, the PWA characteristics themselves add relatively little. Offline capability is the main variable, since it affects architecture rather than being a setting.", link: { href: "/services/web-applications", label: "Web applications" }, linkSuffix: " has the timelines and pricing." },
  { q: "Who owns the code?", a: "You do, repository from day one, full transfer on final payment, running in your own accounts. Same terms as every build we do." },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "You probably don't need a native app. Sometimes you do.",
  description: "An honest comparison of progressive web apps and native apps — what each does well, where PWAs genuinely fall short, and how to tell which one your project needs.",
  author: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
  publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
  datePublished: "2026-08-25",
  dateModified: "2026-08-25",
  mainEntityOfPage: "https://www.spaciva.tech/guides/pwa-vs-native-app",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spaciva.tech/" },
    { "@type": "ListItem", position: 2, name: "PWA vs Native App", item: "https://www.spaciva.tech/guides/pwa-vs-native-app" },
  ],
};

function DecisionTool() {
  const [answers, setAnswers] = useState<Record<string, boolean | undefined>>({});

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);
  const nativeYes = QUESTIONS.filter((q) => q.bucket === "native" && answers[q.id] === true).length;
  const pwaYes = QUESTIONS.filter((q) => q.bucket === "pwa" && answers[q.id] === true).length;

  let verdict: "native" | "pwa" | "both" | null = null;
  if (allAnswered) {
    if (nativeYes > 0 && pwaYes > 0) verdict = "both";
    else if (nativeYes > 0) verdict = "native";
    else verdict = "pwa";
  }

  const verdictCopy: Record<string, { label: string; body: string }> = {
    native: { label: "You likely need native", body: "We'll say so, and we don't build it. We'll tell you what to look for in a firm that does." },
    pwa: { label: "A PWA does the job", body: "At a fraction of the cost and time of a native build." },
    both: { label: "Build the PWA first", body: "It's cheaper, it's faster, and it tells you whether the native app is worth funding." },
  };

  return (
    <div className="bg-white border border-slate-200 rounded-[1.5rem] shadow-lg p-6 sm:p-8 text-left">
      <div className="flex flex-col gap-6">
        {QUESTIONS.map((q, idx) => (
          <fieldset key={q.id} className="border-t border-slate-100 pt-6 first:border-t-0 first:pt-0">
            <legend className="w-full mb-3">
              <span className="text-xs font-bold text-slate-400 tabular-nums">{String(idx + 1).padStart(2, "0")}</span>{" "}
              <span className="font-bold text-slate-900">{q.text}</span>
              <p className="text-sm text-slate-500 mt-1 font-normal">{q.detail}</p>
            </legend>
            <div className="flex gap-3">
              {(["yes", "no"] as const).map((opt) => {
                const value = opt === "yes";
                const checked = answers[q.id] === value;
                return (
                  <label
                    key={opt}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold cursor-pointer transition-all",
                      checked
                        ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:border-[#C4B5FD]"
                    )}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={checked}
                      onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: value }))}
                      className="sr-only"
                    />
                    {opt === "yes" ? "Yes" : "No"}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div aria-live="polite" className="mt-8">
        {verdict ? (
          <div className="rounded-2xl bg-[#F5F3FF] border-2 border-[#7C3AED]/30 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">Your verdict</p>
            <p className="text-xl font-extrabold text-slate-900 mb-1">{verdictCopy[verdict].label}</p>
            <p className="text-slate-600 text-sm">{verdictCopy[verdict].body}</p>
          </div>
        ) : (
          <p className="text-center text-sm text-slate-400">Answer all five to see your verdict.</p>
        )}
      </div>

      <noscript>
        <div className="mt-6 border-t border-slate-100 pt-6">
          <p className="font-bold text-slate-900 mb-3 text-sm">Verdict logic</p>
          <ul className="text-sm text-slate-600 space-y-1.5">
            {FALLBACK_WHY.map((f) => (
              <li key={f.title}>{f.title} → <strong>{f.why}</strong></li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 mt-3">Any yes in the first three: you likely need native. Yes only in the last two: a PWA does the job. Yes on both halves: build the PWA first.</p>
        </div>
      </noscript>
    </div>
  );
}

function FAQItem({ faq }: { faq: typeof FAQS[0] }) {
  return (
    <div>
      <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {faq.a}
        {faq.link && (
          <>
            {" "}
            <Link href={faq.link.href} className="font-bold text-[#7C3AED] hover:underline">{faq.link.label}</Link>
            {faq.linkSuffix}
          </>
        )}
      </p>
    </div>
  );
}

export default function PwaVsNativeClient() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero + decision tool — Template D's defining element, above everything else */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[820px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              PWA vs Native
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              You probably don&apos;t need a native app. Sometimes you do.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-[680px] mx-auto">
              Most businesses quoted for a native app are buying something bigger than the problem requires. But not all of them, there are real cases where a progressive web app can&apos;t do the job, and a firm that tells you otherwise is selling rather than advising. Five questions will tell you which side you&apos;re on.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <DecisionTool />
          </motion.div>

          <p className="mt-6 text-sm text-slate-500 max-w-[600px] mx-auto">
            We build progressive web apps. We don&apos;t build native apps. That&apos;s why the first three questions send you elsewhere, we&apos;d rather you knew now.
          </p>
        </div>
      </section>

      {/* What a PWA actually is — short, prose, three paragraphs */}
      <section className="py-16 md:py-20 border-t border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">The plain version</h2>
          <div className="text-slate-600 text-lg leading-relaxed text-left space-y-5">
            <p>A progressive web app is a website built so it behaves like an app. Your team opens a link once, taps &quot;add to home screen,&quot; and from then on it has an icon, opens full-screen without browser chrome, works when there&apos;s no signal, and can send notifications.</p>
            <p>There&apos;s no download, no store approval, no review queue, and no separate build for iPhone and Android. When you ship a change, everyone has it the next time they open it, no update to push, no fragmented versions in the field.</p>
            <p>What it isn&apos;t: a way to get into the App Store, or a way to reach hardware the browser can&apos;t. Those two limits are real, they&apos;re where the decision above comes from, and the rest of this page is honest about them.</p>
          </div>
        </div>
      </section>

      {/* Where PWAs fall short — the credibility engine, comes before the benefits deliberately */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Four things a PWA can&apos;t do, stated plainly</h2>
            <p className="text-lg text-slate-600">Most pages selling PWAs skip this. It&apos;s the most useful section on the page.</p>
          </div>

          <div className="flex flex-col">
            {PWA_ISNT.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={cn("py-8", idx > 0 && "border-t border-slate-200")}
              >
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-[720px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 text-slate-900 font-bold leading-snug">
            If any of these are dealbreakers, you want a native app and you want a mobile specialist. We&apos;d rather tell you that in the first ten minutes than take a project we&apos;d deliver badly.
          </blockquote>
        </div>
      </section>

      {/* Where PWAs are the right call — balanced weight against the section above */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Four cases where this is obviously the right answer</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PWA_RIGHT.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex flex-col p-6 md:p-7 rounded-3xl border border-slate-200 bg-white"
              >
                <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.desc}
                  {item.link && (
                    <>
                      {" "}See <Link href={item.link.href} className="font-bold text-[#7C3AED] hover:underline">{item.link.label === "internal tool" ? "internal business tools" : "client portals"}</Link>.
                    </>
                  )}
                </p>
                <p className="mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">Typical buyer: {item.typicalBuyer}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[720px]">
            Worth checking before any of this: if the goal is that people are <em>told</em> something rather than <em>look something up</em>, you may not need an app at all. A well-built notification from{" "}
            <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">workflow automation</Link>{" "}
            is cheaper than every option on this page.
          </p>
        </div>
      </section>

      {/* How we build them — deliberately compact, depth lives on the pillar */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What we do differently</h2>
            <p className="text-lg text-slate-600">Six things that separate a PWA people actually use from a website with an icon.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_WE_BUILD.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[680px]">
            The stack, process, pricing, and what you receive on handover are all the same as any other build, see{" "}
            <Link href="/services/web-applications" className="font-bold text-[#7C3AED] hover:underline">web applications</Link>{" "}
            for the full picture.
          </p>
        </div>
      </section>

      {/* Side by side — native must win visibly on several rows or the page loses credibility */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">PWA and native, compared honestly</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                  <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                  <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Progressive web app</th>
                  <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Native app</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-b border-[#E2E8F0] last:border-0">
                    <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-sm font-bold text-slate-900 align-top whitespace-nowrap">{row.label}</th>
                    <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.pwa}</td>
                    <td className={cn("px-5 py-4 text-sm align-top", row.nativeWins ? "font-bold text-slate-900" : "text-slate-600")}>{row.native}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-slate-600 leading-relaxed max-w-[720px]">
            <span className="font-bold text-slate-900">The honest summary:</span> for internal tools, field apps, portals, and B2B software with a known audience, a PWA does the job at a fraction of the cost and ships in a fraction of the time. For consumer products that live or die on store discovery, and for anything needing deep hardware access, native is the right answer and we&apos;ll tell you so.
          </p>
        </div>
      </section>

      {/* FAQ — plain two-column list, matching Template B's treatment */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">Common questions</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — light bordered panel. Primary button goes to the pillar, not the
          calendar. Secondary text link to /contact for readers who are already decided. */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <Code2 className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Sounds like the right fit?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            If the decision tool pointed you toward a PWA, the next thing to read is how we build web applications, process, stack, pricing, and exactly what you receive on handover.
          </p>
          <div className="flex flex-col items-center gap-4">
            <AnimatedCtaButton href="/services/web-applications" label="See how we build web applications" hoverLabel="Let's Talk" />
            <Link href="/contact" className="text-sm font-semibold text-slate-500 hover:text-[#7C3AED] transition-colors">
              Already decided and want to talk it through? Book a 30-minute call.
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
