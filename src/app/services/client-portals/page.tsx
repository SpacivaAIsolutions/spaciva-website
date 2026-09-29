import type { Metadata } from "next";
import ClientPortalsClient from "./ClientPortalsClient";

const TITLE = "Client Portal Development Services | Spaciva AI";
const DESCRIPTION =
  "Custom portals for clients, vendors, and partners — so they self-serve instead of emailing your team. SSO, granular access, your branding. Fixed price, you own it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/client-portals",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/client-portals",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ClientPortalsPage() {
  return <ClientPortalsClient />;
}
