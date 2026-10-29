import type { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/IndustryPage";

const TITLE = "AI Automation for Marketing & Creative Agencies | Spaciva AI";
const DESCRIPTION =
  "We automate the work that eats agency margins: client reporting, onboarding, lead routing, and shared inboxes. Fixed price, live in weeks, monitored monthly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/industries/agencies",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/industries/agencies",
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

const DATA: IndustryData = {
  slug: "agencies",
  name: "Agencies",
  eyebrow: "For Agencies",
  h1: "Automation for agencies whose margins disappear into admin",
  intro:
    "Client reports assembled by hand every month. Onboarding checklists chased over email. Leads sitting in a form inbox until someone has a gap. We build the automations and internal tools that take that work off your account managers, connected to the tools you already run.",
  trustLine: "Fixed scope, fixed price · Most automations live in 2 to 3 weeks · You own the code",
  problemsHeading: "Where agency hours go that nobody bills for",
  problems: [
    { title: "Reporting day eats a week", desc: "Numbers pulled from ad platforms, analytics, and the CRM into a deck for every client, every month, by the people you'd rather have on strategy." },
    { title: "Onboarding runs on memory", desc: "Access requests, briefs, folders, and kickoff tasks tracked in someone's head or a spreadsheet, so every new client starts a little differently." },
    { title: "Leads wait for a human", desc: "Inbound enquiries land in a shared inbox and get qualified whenever someone notices them, which is rarely within the hour." },
    { title: "The inbox is the project manager", desc: "Approvals, feedback, and \"where are we on this?\" questions buried in email threads instead of somewhere the client can see." },
  ],
  offersHeading: "What we automate for agencies",
  offersIntro: "Pick the one that costs you most. Each is a fixed-price build on its own.",
  offers: [
    { title: "Automated client reporting", desc: "Dashboards that pull from your ad platforms, analytics, and CRM and refresh on their own, so the report is ready before the client asks for it.", href: "/services/custom-dashboards" },
    { title: "Client onboarding workflows", desc: "Signed proposal to kickoff without the chasing: access requests, folders, tasks, and welcome emails triggered automatically.", href: "/services/workflow-automation" },
    { title: "Lead intake and routing", desc: "Enquiries qualified, enriched, and routed to the right person in your CRM, with follow-ups that don't depend on anyone remembering.", href: "/services/crm-automation" },
    { title: "Shared inbox triage", desc: "Client and new-business inboxes sorted, routed, and drafted for review, so nothing sits unanswered and nothing sends outside your rules.", href: "/services/email-inbox-automation" },
    { title: "Branded client portals", desc: "One place for clients to see status, approve work, and download files, carrying your branding rather than a SaaS vendor's.", href: "/services/client-portals" },
    { title: "An assistant that knows your clients", desc: "An AI assistant in Slack or Teams that answers from your briefs, past work, and process docs, so juniors stop interrupting seniors.", href: "/services/ai-assistants" },
  ],
  proof: {
    heading: "The closest work we've published",
    intro: "We haven't published an agency case study yet. These two projects are the same kind of work: pulling data out of several systems and making it reliable without manual entry.",
    studies: ["unified-accounting", "partsflow"],
  },
  faqs: [
    { q: "Which tools do you connect to?", a: "Most agency stacks: your CRM, project-management tool, Google Workspace or Microsoft 365, Slack or Teams, and the ad and analytics platforms you report from. If a tool has an API we can usually connect it, and we confirm that on the first call before quoting." },
    { q: "Can client portals and reports carry our branding?", a: "Yes. Portals and dashboards are built for you, carry your branding, and you own the code, so there's no per-seat platform fee to pass on to clients." },
    { q: "How long does it take?", a: "Most automations go live in 2 to 3 weeks. A client portal or larger internal tool takes 6 to 12 weeks. You get the timeline with the fixed price, before you commit." },
    { q: "What happens after launch?", a: "Every system includes a monthly plan: monitoring, tuning, updates, and small changes, with a named engineer who knows your setup. When a client changes their ad account or you change tools, someone is already watching." },
  ],
  ctaHeading: "Tell us which report takes longest to build.",
  ctaBody: "Book a 30-minute call. We'll look at where your team's hours go, tell you honestly what's worth automating, and give you a fixed price if it is.",
};

export default function AgenciesPage() {
  return <IndustryPage data={DATA} />;
}
