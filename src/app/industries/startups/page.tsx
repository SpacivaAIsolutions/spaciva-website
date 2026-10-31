import type { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/IndustryPage";

const TITLE = "Startup MVP & SaaS Development for Founders | Spaciva AI";
const DESCRIPTION =
  "MVPs and B2B SaaS platforms for founders: scoped in a fixed-fee discovery sprint, built to a fixed price, no equity taken, and you own all the code.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/industries/startups",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/industries/startups",
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// The founder-facing door to /services/saas-platforms: that page and the discovery sprint are
// the two main CTAs here, and the SaaS page links back.
const DATA: IndustryData = {
  slug: "startups",
  name: "Startups & SaaS",
  eyebrow: "For Founders",
  h1: "Your MVP, scoped before you pay to build it",
  intro:
    "Five agencies, five quotes, a 5x spread between them. That gap is what an unscoped build looks like. We start with a fixed-fee discovery sprint that ends in a specification you own, then build the MVP or SaaS platform to a fixed price, without taking equity.",
  trustLine: "No equity taken · Fixed price after scoping · You own all the code",
  problemsHeading: "How MVPs usually go wrong",
  problems: [
    { title: "Quotes you can't compare", desc: "Without a specification, every quote is a guess at a different product, and the cheapest one usually guessed smallest." },
    { title: "The MVP that has to be rebuilt", desc: "Shortcuts on tenancy, billing, or data model that work for ten users and force a rewrite at a hundred." },
    { title: "Code you don't control", desc: "Repositories, cloud accounts, and credentials held by the agency, which makes switching teams expensive." },
    { title: "Equity for code", desc: "Paying for a build with a slice of the company, when what you needed was a fixed price." },
  ],
  offersHeading: "What we build for founders",
  offersIntro: "Most founders start with the discovery sprint, then build the platform.",
  offers: [
    { title: "Discovery sprint", desc: "A fixed-fee scoping sprint that ends in a specification, architecture, and estimate you own, and can take to any team.", href: "/services/discovery-sprint" },
    { title: "SaaS platform build", desc: "Multi-tenancy, billing, onboarding, and admin built properly the first time, so the MVP can grow into the product.", href: "/services/saas-platforms" },
    { title: "Web application MVP", desc: "A Next.js and React web app shipped in two-week loops and handed over with tests and docs.", href: "/services/web-applications" },
    { title: "AI features in your product", desc: "Agents, retrieval, and model integration built into your product with evaluation from day one.", href: "/services/generative-ai-custom-llms" },
    { title: "Cloud and deploy pipelines", desc: "Infrastructure, CI/CD, and monitoring set up so releases are boring and outages don't reach customers first.", href: "/services/cloud-devops" },
    { title: "After launch", desc: "A monthly plan with a named engineer for fixes, updates, and small features while you find product-market fit.", href: "/services/ai-monitoring-maintenance" },
  ],
  proof: {
    intro: "Two production platforms we designed and built end to end, with the numbers our clients measured.",
    studies: ["unified-accounting", "partsflow"],
  },
  faqs: [
    { q: "Do you take equity?", a: "No. We work to a fixed price agreed after scoping. You keep the equity and own all the code, repositories, and cloud accounts." },
    { q: "How long does an MVP take?", a: "Most MVPs take 6 to 12 weeks after the discovery sprint, depending on scope. The sprint itself produces the timeline, so you know it before committing to the build." },
    { q: "Do you build native mobile apps?", a: "Our focus is web: responsive web applications and progressive web apps, which cover most MVPs. If your product genuinely needs a native app, we'll say so on the first call. Our PWA vs native guide explains how to tell." },
    { q: "What if we've already started with another team?", a: "We can take over an existing codebase. The discovery sprint then doubles as a code review, so you know what's worth keeping before anything is rewritten." },
  ],
  ctaHeading: "Get a specification before you get a quote.",
  ctaBody: "Book a 30-minute call. We'll talk through the product, tell you honestly whether you need a sprint or can go straight to a build, and give you a fixed price either way.",
};

export default function StartupsPage() {
  return <IndustryPage data={DATA} />;
}
