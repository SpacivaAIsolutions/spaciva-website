import type { Metadata } from "next";
import PartsFlowClient from "./PartsFlowClient";

const TITLE = "PartsFlow: Inventory Platform with QuickBooks Sync | Spaciva AI";
const DESCRIPTION =
  "How Spaciva built PartsFlow: a spare-parts inventory platform managing 5,000+ SKUs with bulk Excel/CSV imports and real-time QuickBooks reconciliation.";

// Article markup so search engines read this as a dated case study.
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How PartsFlow cut data entry time 80% across 5,000+ SKUs",
  description: DESCRIPTION,
  datePublished: "2026-08-05",
  dateModified: "2026-10-29",
  author: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
  publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
  mainEntityOfPage: "https://www.spaciva.tech/case-studies/partsflow",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/case-studies/partsflow",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/case-studies/partsflow",
    siteName: "Spaciva AI",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PartsFlowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <PartsFlowClient />
    </>
  );
}
