import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import FadeIn from "./FadeIn";

export default function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} className="group">
      <div className="relative overflow-hidden bg-slate border border-white/5">
        <Link href={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {product.discount && product.inStock && (
          <span className="absolute top-3 left-3 z-10 bg-gold text-ink text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1">
            {product.discount}% Off
          </span>
        )}

        <div className="p-5 flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-gold/70">
            {product.category}
          </span>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          {product.currentPrice ? (
            <p className="text-sm tracking-wide flex items-baseline gap-2">
              <span className="text-mist/40 line-through">
                {product.originalPrice} EGP
              </span>
              <span className="text-gold font-medium">
                {product.currentPrice} EGP
              </span>
            </p>
          ) : (
            <p className="text-sm text-mist/50 tracking-wide">Coming Soon</p>
          )}

          <a
            href={whatsappLink(
              `Hello ${site.name}, I'm interested in the ${product.name} (${product.category}).`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center border border-gold text-gold text-[11px] uppercase tracking-[0.2em] py-2.5 hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
