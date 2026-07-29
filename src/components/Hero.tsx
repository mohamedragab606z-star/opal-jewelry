"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex items-center justify-center">
      <Image
        src="/images/products/item6-1.jpeg"
        alt="OPAL luxury jewelry"
        fill
        priority
        className="object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="container-opal relative z-10 flex flex-col items-center text-center gap-7">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold"
        >
          OPAL &middot; Est. Egypt
        </motion.span>

        <h1 className="font-display text-white leading-[1.05]">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Elegant Jewelry.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="gold-text block text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl italic"
          >
            Honest Prices.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="max-w-md text-mist/70 text-sm md:text-base tracking-wide"
        >
          Timeless jewelry made with love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-3"
        >
          <Link
            href="/shop"
            className="w-56 sm:w-auto text-center bg-gold text-ink text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Shop Collection
          </Link>
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-56 sm:w-auto text-center border border-gold/60 text-gold text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-mist/40">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent" />
      </motion.div>
    </section>
  );
}
