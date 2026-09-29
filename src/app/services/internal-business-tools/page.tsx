import type { Metadata } from "next";
import InternalBusinessToolsClient from "./InternalBusinessToolsClient";

const TITLE = "Internal Business Tools Development for Ops Teams | Spaciva AI";
const DESCRIPTION =
  "We build the internal tools your team runs on — admin panels, trackers, approval systems, internal portals. Fixed price, live in weeks, and you own the code outright.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/internal-business-tools",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/internal-business-tools",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function InternalBusinessToolsPage() {
  return <InternalBusinessToolsClient />;
}
