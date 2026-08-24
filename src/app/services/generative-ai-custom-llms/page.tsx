import type { Metadata } from "next";
import GenerativeAIClient from "./GenerativeAIClient";

export const metadata: Metadata = {
  title: "Custom LLM Development & Generative AI Engineering | Spaciva",
  description:
    "Model selection, retrieval, fine-tuning, evaluation, and self-hosted deployment — the engineering layer under your AI systems. Fixed scope, full ownership.",
  alternates: {
    canonical: "/services/generative-ai-custom-llms",
  },
};

export default function GenerativeAIPage() {
  return <GenerativeAIClient />;
}
