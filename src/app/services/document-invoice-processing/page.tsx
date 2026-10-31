import type { Metadata } from "next";
import DocumentProcessingClient from "./DocumentProcessingClient";

const TITLE = "Invoice & Document Processing Automation Services | Spaciva AI";
const DESCRIPTION =
  "Stop retyping invoices, POs, and contracts. We build document processing that reads your files, checks the numbers, and posts them into your systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/document-invoice-processing",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/document-invoice-processing",
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

export default function DocumentProcessingPage() {
  return <DocumentProcessingClient />;
}
