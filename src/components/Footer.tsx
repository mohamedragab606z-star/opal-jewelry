import Link from "next/link";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Jewelry" },
      { href: "/shop?category=Necklaces", label: "Necklaces" },
      { href: "/shop?category=Earrings", label: "Earrings" },
      { href: "/shop?category=Bracelets", label: "Bracelets" },
    ],
  },
  {
    title: "OPAL",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/reviews", label: "Reviews" },
      { href: "/ring-size-guide", label: "Ring Size Guide" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate border-t border-gold/10 mt-24">
      <div className="hairline" />
      <div className="container-opal py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist/60">
            Timeless jewelry made with love. OPAL brings elegant, gold-plated
            pieces to every occasion &mdash; without the luxury price tag.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 12a8 8 0 1 1-3.7-6.75L20 4l-1.1 4A8 8 0 0 1 20 12Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9.5c0 3 2.5 5.5 5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-lg text-white tracking-wide mb-5">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-mist/60 hover:text-gold transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hairline" />
      <div className="container-opal py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-mist/40 tracking-wide">
          &copy; OPAL 2026. All rights reserved.
        </p>
        <p className="text-xs text-mist/40 tracking-wide">
          Crafted with care &middot; {site.instagramHandle}
        </p>
      </div>
    </footer>
  );
}
