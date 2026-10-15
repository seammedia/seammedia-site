import type { Guide } from "@/components/SEOArticle";
import { guideQueue } from "@/lib/guide-queue";

// Daily SEO guides (set up 12 Oct 2026). Each queued guide goes live at 8 am Melbourne time on its
// date, rendered at request time by app/blog/[slug]/page.tsx, so nothing needs deploying on the day.
// Future guides return 404 and stay out of the blog index and sitemap until then.
// Write new guides into lib/guide-queue.ts; the process is in Clients/seam-media/seo/README.md.

export type ScheduledGuide = {
  date: string; // YYYY-MM-DD, Melbourne
  category: "Trades" | "NDIS & allied health";
  excerpt: string;
  guide: Guide;
};

export const RELEASE_HOUR = 8;

export function melbourneNow(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Melbourne", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23" })
      .formatToParts(now)
      .map((p) => [p.type, p.value]),
  );
  return { date: `${parts.year}-${parts.month}-${parts.day}`, hour: Number(parts.hour) };
}

export function isReleased(date: string, now = new Date()) {
  const m = melbourneNow(now);
  return date < m.date || (date === m.date && m.hour >= RELEASE_HOUR);
}

export function slugOf(item: ScheduledGuide) {
  return item.guide.path.replace(/^\/blog\//, "");
}

export function releasedGuides(now = new Date()) {
  return guideQueue.filter((g) => isReleased(g.date, now)).sort((a, b) => b.date.localeCompare(a.date));
}

export function findReleasedGuide(slug: string, now = new Date()) {
  return releasedGuides(now).find((g) => slugOf(g) === slug);
}
