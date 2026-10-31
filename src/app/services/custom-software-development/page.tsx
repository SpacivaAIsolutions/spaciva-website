import type { Metadata } from "next";
import CustomSoftwareDevelopmentClient from "./CustomSoftwareDevelopmentClient";

const TITLE = "Custom Software Development Company | Spaciva AI";
const DESCRIPTION =
  "Spaciva is a custom software development company engineering bespoke web applications, enterprise tools, CRMs, ERPs, and cloud systems. Fixed price, 2-week loops, and 100% code ownership.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/custom-software-development",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/custom-software-development",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CustomSoftwareDevelopmentPage() {
  return <CustomSoftwareDevelopmentClient />;
}

