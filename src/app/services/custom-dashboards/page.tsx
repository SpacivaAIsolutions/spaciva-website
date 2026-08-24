import type { Metadata } from "next";
import CustomDashboardsClient from "./CustomDashboardsClient";

const TITLE = "Custom Dashboard Development for Ops & Client Reporting | Spaciva AI";
const DESCRIPTION =
  "We build custom dashboards on a real data layer — your CRM, store, database and ad platforms in one place, refreshed automatically. Fixed price, you own the code.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/custom-dashboards",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/custom-dashboards",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CustomDashboardsPage() {
  return <CustomDashboardsClient />;
}
