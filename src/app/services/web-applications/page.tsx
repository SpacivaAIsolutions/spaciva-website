import type { Metadata } from "next";
import WebApplicationsClient from "./WebApplicationsClient";

const TITLE = "Next.js & React Web Application Development | Spaciva AI";
const DESCRIPTION =
  "Custom web applications in Next.js, React, and Node — built to a fixed price, shipped in two-week loops, handed over with tests and docs. You own everything.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/web-applications",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/web-applications",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function WebApplicationsPage() {
  return <WebApplicationsClient />;
}
