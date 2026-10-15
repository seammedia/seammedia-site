"use client";

import Script from "next/script";
import { useEffect } from "react";
import { ADS_ID, GA4_ID, trackCall } from "@/lib/ads";

// Loads the Google tag (Google Ads + GA4) on every page and counts clicks on any tel: or mailto: link site-wide.
export default function GoogleTag() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      if (href.startsWith("tel:")) trackCall("phone");
      else if (href.startsWith("mailto:")) trackCall("email");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ADS_ID}');
gtag('config', '${GA4_ID}');`}
      </Script>
    </>
  );
}
