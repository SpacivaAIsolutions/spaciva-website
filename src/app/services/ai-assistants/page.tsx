import type { Metadata } from "next";
import AIAssistantsClient from "./AIAssistantsClient";

const TITLE = "Custom AI Assistants for Slack, Teams & Internal Tools | Spaciva AI";
const DESCRIPTION =
  "Generic AI doesn't know your clients, your process, or your data. We build assistants that do — in Slack, Teams, or your own app. Fixed price.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/ai-assistants",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/ai-assistants",
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

export default function AIAssistantsPage() {
  return <AIAssistantsClient />;
}
