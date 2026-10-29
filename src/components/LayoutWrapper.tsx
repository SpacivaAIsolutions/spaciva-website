"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

// Remembers where a visitor arrived from and the last page they viewed before /contact, so
// contact-form leads show which pages produce them. document.referrer alone can't do this:
// client-side navigation never updates it.
export const LEAD_SOURCE_KEYS = { entry: "spaciva:entry", lastPage: "spaciva:lastPage" } as const;

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(LEAD_SOURCE_KEYS.entry)) {
        sessionStorage.setItem(LEAD_SOURCE_KEYS.entry, JSON.stringify({ page: pathname, referrer: document.referrer }));
      }
      if (pathname !== "/contact") sessionStorage.setItem(LEAD_SOURCE_KEYS.lastPage, pathname);
    } catch {
      // Storage blocked (private mode etc.): lead source is a nice-to-have, never a blocker.
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
    </>
  );
}
