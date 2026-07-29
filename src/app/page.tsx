import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import InstagramGallery from "@/components/InstagramGallery";
import FadeIn from "@/components/FadeIn";
import { categories, products } from "@/lib/products";
import { reviews } from "@/lib/reviews";
import { site, whatsappLink } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  const featured = products.filter((_, i) => i % 3 === 0).slice(0, 8);

  return (
    <>
      <Hero />

      {/* Categories */}
      <section className="py-24 md:py-32">
        <div className="container-opal">
          <SectionHeading
            eyebrow="Explore"
            title="Shop by Category"
            subtitle="Four collections, each crafted around a single idea: understated luxury you can wear every day."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 mt-14">
            {categories.map((cat, i) => (
              <CategoryCard
                key={cat.name}
                name={cat.name}
                image={cat.image}
                blurb={cat.blurb}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="container-opal">
        <div className="hairline" />
      </div>

      {/* Featured Products */}
      <section className="py-24 md:py-32">
        <div className="container-opal">
          <SectionHeading
            eyebrow="New In"
            title="Featured Pieces"
            subtitle="A curated edit from the OPAL collection. Prices are being finalized — reach out on WhatsApp for early access."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={(i % 4) * 0.08} />
            ))}
          </div>
          <FadeIn className="flex justify-center mt-14">
            <Link
              href="/shop"
              className="border border-gold/60 text-gold text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold hover:text-ink transition-all duration-300"
            >
              View Full Collection
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32 bg-slate relative overflow-hidden">
        <div className="container-opal grid md:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6">
              About OPAL
            </h2>
            <div className="w-16 h-px bg-gold/60 mb-6" />
            <p className="text-mist/70 leading-relaxed mb-4">
              At OPAL, we believe elegance should be accessible to everyone.
              Every piece is carefully selected to combine timeless beauty,
              quality craftsmanship and affordable luxury.
            </p>
            <p className="text-mist/70 leading-relaxed mb-4">
              Our mission is to provide jewelry that makes every customer feel
              confident without paying luxury prices.
            </p>
            <p className="font-display text-2xl text-gold italic mt-6">
              Welcome back to OPAL.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-xs uppercase tracking-[0.25em] text-white border-b border-gold/50 pb-1 hover:text-gold transition-colors duration-300"
            >
              Read Our Full Story
            </Link>
          </FadeIn>
          <FadeIn delay={0.15} className="relative aspect-[4/5]">
            <div className="absolute -inset-3 border border-gold/20" />
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/products/item4-1.jpeg"
                alt="OPAL jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32">
        <div className="container-opal">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Our Customers"
            subtitle="Real words from OPAL customers across Egypt."
          />
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {reviews.slice(0, 3).map((r, i) => (
              <ReviewCard key={r.name} review={r} delay={i * 0.1} />
            ))}
          </div>
          <FadeIn className="flex justify-center mt-14">
            <Link
              href="/reviews"
              className="text-xs uppercase tracking-[0.25em] text-white border-b border-gold/50 pb-1 hover:text-gold transition-colors duration-300"
            >
              Read All Reviews
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 md:py-32 bg-slate">
        <div className="container-opal">
          <SectionHeading
            eyebrow="@opalstore_eg"
            title="Follow Our Journey"
            subtitle="Behind-the-scenes, new arrivals, and styling inspiration on Instagram."
          />
          <div className="mt-14">
            <InstagramGallery />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-opal text-center flex flex-col items-center gap-6">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Ready to Find Your Piece?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-mist/60 max-w-md">
              Message us on WhatsApp and our team will help you choose the
              perfect piece from the OPAL collection.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-gold text-ink text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Order on WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
