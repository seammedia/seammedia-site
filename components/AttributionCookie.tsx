"use client";

import { useEffect } from "react";

// Remembers how a visitor arrived (Google click IDs and UTM tags) in a first-party cookie
// for 90 days, Google's offline-conversion window. /api/enquiry reads it and adds the
// values to the enquiry email, so each lead shows which ad and keyword produced it and
// can later be uploaded to Google Ads as a qualified lead or signed client. Added 7 Oct 2026.
const PARAMS = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term"];

export default function AttributionCookie() {
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const found: Record<string, string> = {};
      for (const p of PARAMS) {
        const v = url.searchParams.get(p);
        if (v) found[p] = v.slice(0, 200);
      }
      if (!Object.keys(found).length) return;
      const value = encodeURIComponent(JSON.stringify({ ...found, landing: url.pathname.slice(0, 200) }));
      document.cookie = `seam_attr=${value}; Max-Age=${90 * 24 * 60 * 60}; Path=/; SameSite=Lax; Secure`;
    } catch {
      // Attribution is optional; never break the page.
    }
  }, []);
  return null;
}
