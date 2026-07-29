"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/ring-size-guide", label: "Ring Size Guide" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-opal flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[13px] uppercase tracking-[0.15em] text-mist/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/60 text-gold text-[12px] uppercase tracking-[0.2em] px-5 py-2.5 hover:bg-gold hover:text-ink transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
        >
          <span
            className={`h-px bg-gold transition-all duration-300 ${
              open ? "w-6 rotate-45 translate-y-[3px]" : "w-6"
            }`}
          />
          <span
            className={`h-px bg-gold transition-all duration-300 ${
              open ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-ink/98 backdrop-blur-lg transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`font-display text-3xl text-white hover:text-gold transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 border border-gold text-gold text-sm uppercase tracking-[0.2em] px-8 py-3"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
