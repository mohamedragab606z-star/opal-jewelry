import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { site, whatsappLink } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "About Us | OPAL Luxury Jewelry",
  description:
    "Learn about OPAL's mission to make elegant, quality jewelry accessible to everyone in Egypt.",
};

const values = [
  {
    title: "Timeless Design",
    text: "Every piece is chosen for its lasting beauty, not fleeting trends.",
  },
  {
    title: "Honest Pricing",
    text: "Luxury aesthetics without the luxury markup — no hidden costs, ever.",
  },
  {
    title: "Quality Craftsmanship",
    text: "Gold-plated, tarnish-resistant pieces built to be worn daily.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-opal">
        <FadeIn className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            About OPAL
          </h1>
          <div className="w-16 h-px bg-gold/60" />
        </FadeIn>

        <div className="max-w-2xl mx-auto mt-14 flex flex-col gap-6 text-center">
          <FadeIn delay={0.1}>
            <p className="text-mist/70 leading-relaxed text-lg font-display italic">
              &ldquo;At OPAL, we believe elegance should be accessible to
              everyone.&rdquo;
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-mist/60 leading-relaxed">
              Every piece is carefully selected to combine timeless beauty,
              quality craftsmanship and affordable luxury. Our mission is to
              provide jewelry that makes every customer feel confident
              without paying luxury prices.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-display text-2xl text-gold">
              Welcome back to OPAL.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-24">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.12}>
              <div className="border border-white/5 bg-slate p-8 h-full flex flex-col gap-3 hover:border-gold/30 transition-colors duration-500">
                <span className="font-display text-3xl text-gold/50">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl text-white">{v.title}</h3>
                <p className="text-mist/50 text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Have a Question?
          </h2>
          <p className="text-mist/60 max-w-md">
            Our team is happy to help you find the right piece, check
            availability, or answer anything about OPAL.
          </p>
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Chat on WhatsApp
          </a>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-[0.25em] text-white border-b border-gold/50 pb-1 hover:text-gold transition-colors duration-300"
          >
            Browse the Collection
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
