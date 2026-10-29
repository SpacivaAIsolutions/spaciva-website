import type { Metadata } from "next";
import UnifiedAccountingClient from "./UnifiedAccountingClient";

const TITLE = "Multi-Ledger Accounting Sync (QuickBooks, Xero, NetSuite) | Spaciva AI";
const DESCRIPTION =
  "How Spaciva built a multi-platform accounting sync layer for 12+ ledgers — QuickBooks, Xero, Sage, NetSuite, Business Central, and more — cutting manual entry by 70%.";

// Article markup so search engines read this as a dated case study.
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Unified Accounting: one sync engine across 12+ accounting platforms",
  description: DESCRIPTION,
  datePublished: "2026-08-05",
  dateModified: "2026-10-29",
  author: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
  publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
  mainEntityOfPage: "https://www.spaciva.tech/case-studies/unified-accounting",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/case-studies/unified-accounting",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/case-studies/unified-accounting",
    siteName: "Spaciva AI",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function UnifiedAccountingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <UnifiedAccountingClient />
    </>
  );
}
