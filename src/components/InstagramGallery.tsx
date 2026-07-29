import Image from "next/image";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import FadeIn from "./FadeIn";

export default function InstagramGallery() {
  const shots = products.slice(0, 8);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 w-full">
        {shots.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.04}>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden"
            >
              <Image
                src={p.images[0]}
                alt={p.name}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#D4AF37" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" stroke="#D4AF37" strokeWidth="1.6" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="#D4AF37" />
                </svg>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-gold text-gold text-xs uppercase tracking-[0.25em] px-8 py-3.5 hover:bg-gold hover:text-ink transition-all duration-300"
      >
        Follow us on Instagram
      </a>
    </div>
  );
}
