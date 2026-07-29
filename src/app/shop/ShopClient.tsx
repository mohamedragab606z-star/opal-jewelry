"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import { Category, products } from "@/lib/products";

const allCategories: (Category | "All")[] = [
  "All",
  "Necklaces",
  "Earrings",
  "Bracelets",
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initial = (searchParams.get("category") as Category) || "All";
  const [active, setActive] = useState<Category | "All">(
    allCategories.includes(initial) ? initial : "All"
  );

  useEffect(() => {
    const cat = searchParams.get("category") as Category;
    if (cat && allCategories.includes(cat)) setActive(cat);
  }, [searchParams]);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="container-opal">
        <FadeIn className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            The Collection
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-white">Shop OPAL</h1>
          <p className="text-mist/60 text-sm md:text-base">
            {filtered.length} pieces
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-wrap justify-center gap-3 mt-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] border transition-all duration-300 ${
                active === cat
                  ? "bg-gold text-ink border-gold"
                  : "border-white/15 text-mist/60 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={(i % 8) * 0.05} />
          ))}
        </div>
      </div>
    </div>
  );
}
