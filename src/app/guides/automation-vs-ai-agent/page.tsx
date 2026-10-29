import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle, { type GuideData } from "@/components/GuideArticle";

const TITLE = "Workflow Automation or AI Agent? How to Choose | Spaciva AI";
const DESCRIPTION =
  "Most business processes need workflow automation, not an AI agent. A practical test for telling them apart, what each costs to run, and why to start with automation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/guides/automation-vs-ai-agent",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/guides/automation-vs-ai-agent",
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
  slug: "automation-vs-ai-agent",
  headline: "Workflow automation or an AI agent: how to choose",
  description: DESCRIPTION,
  intro:
    "\"AI agent\" has become the default answer to any repetitive work, and it's often the wrong one. Most business processes are better served by plain workflow automation: cheaper, faster, more predictable. The skill is spotting the one or two steps that genuinely need judgment.",
  published: "2026-10-29",
  sections: [
    {
      heading: "The one-line difference",
      body: (
        <>
          <p><strong>Workflow automation</strong> follows steps that are known in advance. If the form says X, do Y. When an invoice arrives, create a record, notify finance, file the PDF. Every run takes the same path.</p>
          <p><strong>An AI agent</strong> decides the next step itself, because the right step depends on judgment: understanding an unusual customer message, reading a non-standard document, choosing which of six paths applies.</p>
        </>
      ),
    },
    {
      heading: "The test: could you write the rules down?",
      body: (
        <>
          <p>Sit with the person who does the work today and try to write their process as if-then rules. Three outcomes are common:</p>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li><strong>The rules fit on a page.</strong> That&apos;s automation. Most processes land here, and most people over-estimate how much judgment theirs really needs.</li>
            <li><strong>The rules fit, except for one step</strong> such as &quot;work out what the customer is actually asking&quot; or &quot;pull the totals out of whatever format the supplier sent&quot;. That&apos;s automation with one AI step inside it, which is the most common shape of a good build.</li>
            <li><strong>Every case is a judgment call.</strong> That&apos;s where an agent earns its cost, with guardrails, escalation to a person, and monitoring.</li>
          </ul>
        </>
      ),
    },
    {
      heading: "What each costs to own",
      body: (
        <>
          <p>Automation is cheaper to build and close to free to run: a workflow that fires a thousand times a month costs much the same as one that fires ten. When it breaks, it breaks loudly and in the same place, which makes it easy to fix.</p>
          <p>An agent costs more on both counts. Each run calls a model, so running cost scales with volume. Behaviour can drift as inputs change or models update, so it needs a test set, monitoring, and periodic tuning. None of that is a reason to avoid agents; it&apos;s a reason to use them only where the judgment is worth paying for.</p>
        </>
      ),
    },
    {
      heading: "Why we usually start with automation",
      body: (
        <>
          <p>Automating the predictable steps first is cheaper, it works immediately, and it shows exactly which one or two steps genuinely need an agent. That&apos;s a far better basis for the decision than guessing upfront, and it means the agent, if you need one, is built around a process that already runs.</p>
          <p>Two adjacent cases are often mistaken for either. If you need a system to <em>answer questions</em> rather than run a process, that&apos;s a <Link href="/services/rag-chatbot-development">RAG chatbot</Link>. If what you need is invoices and contracts read and posted into your systems, that&apos;s <Link href="/services/document-invoice-processing">document processing</Link>.</p>
        </>
      ),
    },
    {
      heading: "Three examples",
      body: (
        <ul className="list-disc pl-6 space-y-2 mb-5">
          <li><strong>Client onboarding</strong> (signed proposal, create folders, send access requests, schedule kickoff): pure automation.</li>
          <li><strong>Lead routing</strong> (read the enquiry, decide whether it&apos;s a fit and who should take it, then create the CRM record and notify): automation with one AI step to read and classify the enquiry.</li>
          <li><strong>Support triage across a messy inbox</strong> (understand the request, look up the order, decide whether to answer, refund, or escalate): an agent, with a person reviewing anything it isn&apos;t sure about.</li>
        </ul>
      ),
    },
  ],
  service: {
    label: "Workflow Automation",
    href: "/services/workflow-automation",
    pitch: "Onboarding, reporting, data entry, and follow-ups automated end to end, with an AI step only where a step genuinely needs judgment. A single workflow is usually live in about two weeks.",
  },
  faqs: [
    { q: "Is an AI agent just automation with an LLM?", a: "Partly. The difference is who chooses the next step. In automation, you defined it in advance; in an agent, the model chooses it at run time. That's what makes agents more capable and less predictable." },
    { q: "Can we start with automation and add an agent later?", a: "Yes, and it's usually the best order. The automation shows which steps need judgment, and the agent is then built around a process that already runs." },
    { q: "Which is cheaper?", a: "Automation, on both build and running cost. An agent's running cost grows with volume because every run calls a model, and it needs ongoing monitoring and tuning." },
  ],
  ctaHeading: "Tell us the process. We'll tell you which it needs.",
  ctaBody: "Book a 30-minute call. We'll walk through the workflow, tell you honestly whether it needs automation, an agent, or neither, and give you a fixed price if it's worth building.",
};

export default function AutomationVsAgentPage() {
  return <GuideArticle data={DATA} />;
}
