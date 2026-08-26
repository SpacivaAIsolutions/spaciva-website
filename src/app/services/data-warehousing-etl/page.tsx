import type { Metadata } from "next";
import DataWarehousingClient from "./DataWarehousingClient";

const TITLE = "Data Warehousing & ETL Pipeline Development | Spaciva AI";
const DESCRIPTION =
  "We build and run the pipelines behind your data — ingestion, warehouse, orchestration, monitoring. Fixed price for the build, a named engineer afterwards, you own it all.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/data-warehousing-etl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/data-warehousing-etl",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function DataWarehousingPage() {
  return <DataWarehousingClient />;
}
