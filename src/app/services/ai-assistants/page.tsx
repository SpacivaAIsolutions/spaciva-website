import type { Metadata } from "next";
import AIAssistantsClient from "./AIAssistantsClient";

export const metadata: Metadata = {
  title: "Custom AI Assistants for Your Team's Tools | Spaciva",
  description:
    "Generic AI doesn't know your clients, your process, or your data. We build assistants that do — in Slack, Teams, or your own app. Fixed price.",
  alternates: {
    canonical: "/services/ai-assistants",
  },
};

export default function AIAssistantsPage() {
  return <AIAssistantsClient />;
}
