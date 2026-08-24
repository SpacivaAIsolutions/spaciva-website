import type { Metadata } from "next";
import DocumentProcessingClient from "./DocumentProcessingClient";

export const metadata: Metadata = {
  title: "Invoice & Document Processing Automation Services | Spaciva AI",
  description:
    "Stop retyping invoices, POs, and contracts. We build document processing that reads your files, checks the numbers, and posts them into your systems.",
  alternates: {
    canonical: "/services/document-invoice-processing",
  },
};

export default function DocumentProcessingPage() {
  return <DocumentProcessingClient />;
}
