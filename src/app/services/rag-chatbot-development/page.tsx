import type { Metadata } from "next";
import RagChatbotClient from "./RagChatbotClient";

const TITLE = "RAG Chatbot Development Services | Answers From Your Data | Spaciva AI";
const DESCRIPTION =
  "Custom RAG chatbots trained on your own docs: answers with sources, escalation when unsure, accuracy tested before launch. Live in 3 weeks. Fixed price.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/rag-chatbot-development",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/rag-chatbot-development",
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

export default function RagChatbotPage() {
  return <RagChatbotClient />;
}
