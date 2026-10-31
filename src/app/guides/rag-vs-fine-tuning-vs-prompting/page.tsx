import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle, { type GuideData } from "@/components/GuideArticle";

const TITLE = "RAG vs Fine-Tuning vs Prompting, Explained | Spaciva AI";
const DESCRIPTION =
  "Five ways to make a language model work on your problem, ordered by cost: prompting, retrieval, tool use, fine-tuning, and training. How to tell which one you need.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/guides/rag-vs-fine-tuning-vs-prompting",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/guides/rag-vs-fine-tuning-vs-prompting",
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

const APPROACHES = [
  { approach: "1. Prompt and context engineering", solves: "The model has the capability but not the instruction", cost: "Lowest" },
  { approach: "2. Retrieval (RAG)", solves: "The model doesn't know your information", cost: "Low to moderate" },
  { approach: "3. Tool use and orchestration", solves: "The answer lives in a live system, or the model needs to act", cost: "Moderate" },
  { approach: "4. Fine-tuning", solves: "The model knows the facts but not the form: tone, format, a narrow task", cost: "Moderate to high" },
  { approach: "5. Training from scratch", solves: "Almost nothing a business will encounter", cost: "Very high" },
];

const DATA: GuideData = {
  slug: "rag-vs-fine-tuning-vs-prompting",
  headline: "RAG vs fine-tuning vs prompting: which one does your problem need?",
  description: DESCRIPTION,
  intro:
    "Almost every \"should we build a custom LLM?\" conversation is really this question, and it often gets answered badly because the person answering sells one of the options. There are five approaches, ordered by cost and complexity. The right answer is nearly always the first one that works.",
  published: "2026-10-29",
  sections: [
    {
      heading: "The five approaches, cheapest first",
      body: (
        <>
          <p>Each step up the list costs more to build, more to run, and more to change later. Move to the next one only when the previous one has demonstrably failed on your test set.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-5">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Five approaches to adapting a language model, what each solves, and relative cost</caption>
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-bold text-slate-900">Approach</th>
                  <th scope="col" className="px-4 py-3 font-bold text-slate-900">Solves</th>
                  <th scope="col" className="px-4 py-3 font-bold text-slate-900">Cost</th>
                </tr>
              </thead>
              <tbody>
                {APPROACHES.map((row) => (
                  <tr key={row.approach} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900 align-top">{row.approach}</td>
                    <td className="px-4 py-3 text-slate-600 align-top">{row.solves}</td>
                    <td className="px-4 py-3 text-slate-600 align-top whitespace-nowrap">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      heading: "1. Prompting: try this first, almost always",
      body: (
        <>
          <p>Modern models can already do most business tasks: summarise, classify, extract, draft. When they fall short, the cause is usually the instruction, not the model. Clear task framing, a few worked examples, an explicit output format, and the right context in the window solve a surprising share of problems that arrive labelled &quot;we need a custom model&quot;.</p>
          <p>Prompting is also the cheapest thing to change. A better prompt ships in minutes, and you can test it against the same examples as everything else.</p>
        </>
      ),
    },
    {
      heading: "2. Retrieval (RAG): when the model doesn't know your information",
      body: (
        <>
          <p>If the model needs to know your refund policy, your product catalogue, or last quarter&apos;s contracts, that&apos;s retrieval. At the moment it answers, the system searches your documents, puts the relevant passages in front of the model, and the model answers from them, ideally citing which passage it used.</p>
          <p>Updating a RAG system means updating a document. That&apos;s why it&apos;s the default answer for anything involving your own knowledge: the information stays current without retraining anything. It&apos;s what sits behind a <Link href="/services/rag-chatbot-development">support chatbot that answers from your docs</Link>.</p>
        </>
      ),
    },
    {
      heading: "3. Tool use: when the answer lives in a live system",
      body: (
        <>
          <p>Some answers aren&apos;t in any document. &quot;Where is order 4471?&quot; lives in your order system; &quot;book me a slot on Thursday&quot; needs a calendar. Tool use lets the model call your systems, read the result, and act on it. This is the step where a chatbot becomes an <Link href="/services/ai-agent-development">AI agent</Link>, and where guardrails and permissions start to matter as much as the model.</p>
        </>
      ),
    },
    {
      heading: "4. Fine-tuning: a behaviour, not a body of facts",
      body: (
        <>
          <p><strong>Fine-tuning does not teach a model your facts.</strong> It teaches a behaviour, a style, or a narrow task. Fine-tuning your refund policy into a model makes it harder to update, not easier, and the model can still state it wrongly. This single misunderstanding is behind most wasted fine-tuning budgets.</p>
          <p><strong>Fine-tuning is often the cost answer, not the capability answer.</strong> The strongest real case for it is taking a task a large model already does well and moving it onto a smaller, cheaper, faster model tuned for exactly that task. That&apos;s an economics decision, and it only pays once you have volume.</p>
        </>
      ),
    },
    {
      heading: "5. Training from scratch: effectively never",
      body: (
        <p>For a business application, training a model from scratch solves nothing the first four can&apos;t, at a cost several orders of magnitude higher. If someone proposes it, ask which problem the previous four failed to solve, and how they measured the failure.</p>
      ),
    },
    {
      heading: "You need evaluation before you need any of them",
      body: (
        <>
          <p>Without a test set, nobody can tell whether a fine-tune helped, whether a retrieval change improved anything, or whether last month&apos;s model update broke something. Teams skip this and then argue about whether the system is getting worse based on anecdotes.</p>
          <p>Before choosing an approach, collect 50 to 200 real examples with the answers you&apos;d accept. Every option above is then judged against the same set, and the decision stops being a matter of opinion.</p>
        </>
      ),
    },
    {
      heading: "A quick way to decide",
      body: (
        <ul className="list-disc pl-6 space-y-2 mb-5">
          <li>The model can do the task but does it inconsistently: <strong>improve the prompt</strong>.</li>
          <li>The model doesn&apos;t know something it needs: <strong>add retrieval</strong>.</li>
          <li>The answer depends on live data or needs an action: <strong>add tool use</strong>.</li>
          <li>A proven task is too slow or costly at your volume: <strong>consider fine-tuning a smaller model</strong>.</li>
          <li>Someone suggests training a model: <strong>ask what the other four failed to do</strong>.</li>
        </ul>
      ),
    },
  ],
  service: {
    label: "Generative AI & Custom LLMs",
    href: "/services/generative-ai-custom-llms",
    pitch: "Model selection, retrieval, fine-tuning, evaluation, and self-hosted deployment for teams that already have a product or data. We'll tell you which approach your problem needs, and propose fine-tuning only when there's a specific reason.",
  },
  faqs: [
    { q: "What's the difference between RAG and fine-tuning?", a: "Retrieval gives the model access to your information at the moment it answers, and updating it means updating a document. Fine-tuning adjusts how the model behaves, and updating it means retraining. Most business problems are the first kind." },
    { q: "Should we fine-tune a model?", a: "Probably not yet. Fine-tuning changes behaviour and form, not knowledge. The strongest case for it is moving a task you've already proven onto a smaller, cheaper model once volume justifies it." },
    { q: "Can we combine approaches?", a: "Yes, and most production systems do: a well-engineered prompt, retrieval over your documents, and a few tools for live data. Fine-tuning, when it appears at all, usually comes last." },
  ],
  ctaHeading: "Not sure which one your problem needs?",
  ctaBody: "Tell us what you're trying to build. We'll tell you which approach it needs, roughly what it costs to build and run, and where the hard parts are.",
};

export default function RagVsFineTuningPage() {
  return <GuideArticle data={DATA} />;
}
