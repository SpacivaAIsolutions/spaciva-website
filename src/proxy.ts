import { NextResponse } from "next/server";

// Industry pages retired because they sat outside what Spaciva sells and had no relevant
// successor page. 410 Gone tells search engines to drop them; redirecting them all to the
// homepage would be treated as a soft 404. (Logistics and healthcare 301 to a related
// service page instead; see next.config.ts.)
const BODY = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Page removed | Spaciva AI</title>
<style>body{font-family:system-ui,sans-serif;max-width:40rem;margin:6rem auto;padding:0 1rem;color:#0F172A;line-height:1.6}a{color:#7C3AED;font-weight:700}</style></head>
<body><h1>This page has been removed.</h1>
<p>We no longer offer a dedicated service for this industry. See <a href="/services">what we build</a>, or <a href="/contact">tell us about your project</a>.</p>
</body></html>`;

export function proxy() {
  return new NextResponse(BODY, { status: 410, headers: { "content-type": "text/html; charset=utf-8" } });
}

export const config = {
  matcher: [
    "/industries/government",
    "/industries/energy-utilities",
    "/industries/education",
    "/industries/hospitality",
    "/industries/construction",
  ],
};
