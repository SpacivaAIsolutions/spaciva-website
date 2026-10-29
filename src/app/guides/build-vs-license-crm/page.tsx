import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle, { type GuideData } from "@/components/GuideArticle";

const TITLE = "Build vs License a CRM: The Five-Year Cost Math | Spaciva AI";
const DESCRIPTION =
  "Build cost versus annual licence is the wrong comparison for a CRM. How to compare a custom build against per-seat licensing over five years, and when each one wins.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/guides/build-vs-license-crm",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/guides/build-vs-license-crm",
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const DATA: GuideData = {
  slug: "build-vs-license-crm",
  headline: "Build vs license a CRM: the five-year cost math",
  description: DESCRIPTION,
  intro:
    "The comparison most teams make is a custom build's cost against one year of licences, and it makes building look expensive. The comparison that matters runs over the life of the system. Here's how to run it, and the four situations where building actually wins.",
  published: "2026-10-29",
  sections: [
    {
      heading: "Start with the default: license",
      body: (
        <p>For most teams, an off-the-shelf CRM configured well is the right answer. If you have a sales team selling to contacts through a deal pipeline, HubSpot, Salesforce, Pipedrive, and their peers were designed for exactly that, and configuring what you have will cost less and serve you better than any build. The rest of this guide is about the cases where that stops being true.</p>
      ),
    },
    {
      heading: "How the two cost curves differ",
      body: (
        <>
          <p><strong>Off-the-shelf costs scale with headcount:</strong> per-seat licences, higher tiers to unlock features you need, paid add-ons, connector subscriptions, and implementation or consultancy. The number rises as you grow, and you own nothing at the end of it.</p>
          <p><strong>A custom build costs more upfront and then flattens:</strong> development, hosting, and ongoing maintenance. Adding a hundred users changes your hosting bill, not your licence bill, and you own the asset.</p>
          <p>Where the curves cross depends almost entirely on user count. At ten users, off-the-shelf wins decisively. At a couple of hundred users on a mid-tier plan, five years of licences frequently costs several times a custom build. Somewhere between those, it flips.</p>
        </>
      ),
    },
    {
      heading: "Run the arithmetic yourself",
      body: (
        <>
          <p>You don&apos;t need a vendor to do this. Take these four numbers:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-5">
            <li>Your current cost per user per month, on the tier you actually need.</li>
            <li>Your realistic headcount in three years, including anyone who&apos;d need access: field staff, contractors, clients.</li>
            <li>Sixty months.</li>
            <li>Add-ons, connectors, and implementation fees over the same period.</li>
          </ol>
          <p>Multiply the first three and add the fourth. That&apos;s the figure to compare against a build&apos;s fixed price plus five years of hosting and maintenance. If the licence figure isn&apos;t clearly higher, license.</p>
        </>
      ),
    },
    {
      heading: "The four situations where building wins",
      body: (
        <ul className="list-disc pl-6 space-y-3 mb-5">
          <li><strong>Your core object isn&apos;t a contact or a deal.</strong> If your business revolves around properties, shipments, cases, or projects, you spend your time bending a contact-centred tool around something it wasn&apos;t built for.</li>
          <li><strong>Your process has real structural complexity.</strong> Not &quot;lots of steps&quot;, which workflow builders handle, but several parties to a transaction each needing their own view, records that must stay consistent with each other, or rules that vary by contract or jurisdiction.</li>
          <li><strong>Per-seat licensing has stopped making sense.</strong> Giving a hundred field staff, a contractor network, or your own clients access is where per-seat pricing scales against you fastest. This is the most common reason teams build, and it&apos;s a spreadsheet question rather than a technical one.</li>
          <li><strong>The CRM is part of your product.</strong> If clients log in to it, or it&apos;s white-labelled as part of what you sell, it can&apos;t live on someone else&apos;s platform and pricing.</li>
        </ul>
      ),
    },
    {
      heading: "What ownership has to include",
      body: (
        <>
          <p>The reason to build rather than license is ownership, and ownership you can&apos;t exercise isn&apos;t ownership. A build is only cheaper over five years if you receive the source code, the database, and the documentation in your own accounts, with no proprietary framework or runtime licence that stops working if the agency does.</p>
          <p>If your problem is that the CRM you have is messy or disconnected rather than wrong for your business, you probably don&apos;t need a new one: <Link href="/services/crm-automation">CRM automation and cleanup</Link> fixes that for a fraction of the cost.</p>
        </>
      ),
    },
  ],
  service: {
    label: "CRM Development",
    href: "/services/crm-development",
    pitch: "When your process doesn't fit HubSpot or Salesforce, we build the CRM that does: your data model, your workflow, and your code, fully owned by you. We'll run the five-year comparison with you before quoting.",
  },
  faqs: [
    { q: "How much does a custom CRM cost?", a: "It scales with the number of entities, integrations, and user roles, so a responsible quote needs your data model first. The more useful number is the five-year comparison against licences at your projected headcount." },
    { q: "Can we migrate our existing data?", a: "Yes. Migration is scoped as part of the build, with validation so duplicates and bad records are caught rather than imported." },
    { q: "Isn't a custom build risky to maintain?", a: "Only if you don't own it. With the code, database, and documentation in your accounts, any competent team can maintain it, including your own." },
  ],
  ctaHeading: "Want us to run the numbers with you?",
  ctaBody: "Book a 30-minute call. We'll run the five-year comparison at your headcount, and if licensing wins, we'll say so.",
};

export default function BuildVsLicenseCrmPage() {
  return <GuideArticle data={DATA} />;
}
