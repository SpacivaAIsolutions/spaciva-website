import type { Metadata } from "next";
import PwaVsNativeClient from "./PwaVsNativeClient";

const TITLE = "PWA vs Native App: Which Do You Actually Need? | Spaciva AI";
const DESCRIPTION =
  "An honest comparison of progressive web apps and native apps — what each does well, where PWAs genuinely fall short, and how to tell which one your project needs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/guides/pwa-vs-native-app",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/guides/pwa-vs-native-app",
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PwaVsNativePage() {
  return <PwaVsNativeClient />;
}
