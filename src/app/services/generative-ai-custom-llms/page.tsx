import type { Metadata } from "next";
import GenerativeAIClient from "./GenerativeAIClient";

const TITLE = "Custom LLM Development & Generative AI Engineering | Spaciva AI";
const DESCRIPTION =
  "Model selection, retrieval, fine-tuning, evaluation, and self-hosted deployment — the engineering layer under your AI systems. Fixed scope, full ownership.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/generative-ai-custom-llms",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/generative-ai-custom-llms",
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

export default function GenerativeAIPage() {
  return <GenerativeAIClient />;
}
