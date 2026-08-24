import type { Metadata } from "next";
import ErpSystemsClient from "./ErpSystemsClient";

const TITLE = "ERP Integration & Custom ERP Development Services | Spaciva AI";
const DESCRIPTION =
  "We connect, extend, and build ERP systems for mid-market teams — integrations, custom modules, and lightweight builds. Fixed price. We won't sell you a rollout.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/erp-systems",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/erp-systems",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ErpSystemsPage() {
  return <ErpSystemsClient />;
}
