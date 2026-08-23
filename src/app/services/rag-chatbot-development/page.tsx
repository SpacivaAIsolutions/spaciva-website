import type { Metadata } from "next";
import RagChatbotClient from "./RagChatbotClient";

export const metadata: Metadata = {
  title: "RAG Chatbot Development Services | Answers From Your Data | Spaciva AI",
  description:
    "Custom RAG chatbots trained on your own docs: answers with sources, escalation when unsure, accuracy tested before launch. Live in 3 weeks. Fixed price.",
  alternates: {
    canonical: "/services/rag-chatbot-development",
  },
};

export default function RagChatbotPage() {
  return <RagChatbotClient />;
}
