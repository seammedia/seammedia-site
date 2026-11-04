import Link from "next/link";

// Small "where we work" strip for the national web design and website maintenance pages (added 4 Nov 2026,
// seo-loop-seam). These pages had no links to the suburb web design pages, so the suburb pages got no authority
// from them. Pass the anchors per page.
export default function LocalWebLinks({ eyebrow, title, copy, links }: {
  eyebrow: string;
  title: string;
  copy: string;
  links: { href: string; label: string }[];
}) {
  return (
    <section className="py-16 px-6 bg-zinc-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-zinc-400 leading-relaxed max-w-3xl mb-8">{copy}</p>
        <ul className="flex flex-wrap gap-3">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="inline-block rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/40 transition-colors">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
