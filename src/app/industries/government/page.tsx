import type { Metadata } from "next";
import GovernmentClient from "./GovernmentClient";

export const metadata: Metadata = {
  title: "Government Software Development Company | Digital Government & eGovernance Solutions | Spaciva",
  description: "Spaciva develops secure government software, eGovernance platforms, citizen portals, workflow automation systems, AI-powered public service applications, and digital transformation solutions for government organizations.",
  alternates: {
    canonical: "/industries/government",
  },
};

export default function GovernmentPage() {
  return <GovernmentClient />;
}
