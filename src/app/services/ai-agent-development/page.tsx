import type { Metadata } from "next";
import AIAgentDevelopmentClient from "./AIAgentDevelopmentClient";

const TITLE = "AI Agent Development Services for Growing Teams | Spaciva AI";
const DESCRIPTION =
  "Custom AI agents that handle support, intake, and document work, built on your data, live in 3 weeks, and monitored monthly. Fixed price, full code ownership.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/ai-agent-development",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/ai-agent-development",
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

export default function AIAgentDevelopmentPage() {
  return <AIAgentDevelopmentClient />;
}
