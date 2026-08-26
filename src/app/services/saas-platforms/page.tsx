import type { Metadata } from "next";
import SaasPlatformsClient from "./SaasPlatformsClient";

const TITLE = "SaaS MVP & Multi-Tenant Platform Development | Spaciva AI";
const DESCRIPTION =
  "We build B2B SaaS platforms — multi-tenancy, billing, onboarding — for funded teams and services businesses productising. Fixed price. We don't take equity.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/saas-platforms",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/saas-platforms",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SaasPlatformsPage() {
  return <SaasPlatformsClient />;
}
