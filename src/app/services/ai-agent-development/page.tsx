import type { Metadata } from "next";
import AIAgentDevelopmentClient from "./AIAgentDevelopmentClient";

export const metadata: Metadata = {
  title: "AI Agent Development Services for Growing Teams | Spaciva AI",
  description:
    "Custom AI agents that handle support, intake, and document work, built on your data, live in 3 weeks, and monitored monthly. Fixed price, full code ownership.",
  alternates: {
    canonical: "/services/ai-agent-development",
  },
};

export default function AIAgentDevelopmentPage() {
  return <AIAgentDevelopmentClient />;
}
