import type { Metadata } from "next";
import CloudDevopsClient from "./CloudDevopsClient";

const TITLE = "AWS Cost, CI/CD & Cloud Infrastructure Services | Spaciva AI";
const DESCRIPTION =
  "Cut your cloud bill, make deploys boring, and stop finding out about outages from customers. Infrastructure work for teams without a DevOps hire. Fixed price.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/cloud-devops",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/cloud-devops",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CloudDevopsPage() {
  return <CloudDevopsClient />;
}
