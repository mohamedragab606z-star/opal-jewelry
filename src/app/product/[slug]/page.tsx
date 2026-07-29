import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | OPAL Luxury Jewelry`,
    description: product.description || `${product.name} by OPAL — luxury, affordable jewelry.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-opal">
        <FadeIn className="text-xs uppercase tracking-[0.2em] text-mist/40 mb-10 flex items-center gap-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gold transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-gold">{product.name}</span>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn>
            <ProductGallery images={product.images} name={product.name} />
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              {product.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white mt-3">
              {product.name}
            </h1>
            <div className="w-16 h-px bg-gold/60 my-6" />
            {product.description && (
              <p className="text-mist/70 leading-relaxed">{product.description}</p>
            )}

            <div className="mt-8 flex items-center gap-4">
              {product.currentPrice ? (
                <>
                  <span className="font-display text-3xl text-gold">
                    {product.currentPrice} EGP
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-mist/40 line-through">
                      {product.originalPrice} EGP
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-gold/10 text-gold text-[11px] uppercase tracking-[0.15em] px-2.5 py-1 border border-gold/40">
                      {product.discount}% Off
                    </span>
                  )}
                </>
              ) : (
                <span className="font-display text-3xl text-gold">
                  Coming Soon
                </span>
              )}
            </div>

            <a
              href={whatsappLink(
                `Hello ${site.name}, I'm interested in the ${product.name} (${product.category}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full sm:w-auto items-center justify-center bg-gold text-ink text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Order on WhatsApp
            </a>

            <ul className="mt-10 space-y-3 text-sm text-mist/50">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" /> Gold-plated,
                tarnish-resistant finish
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" /> Nickel-free
                &amp; skin friendly
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" /> Comes in
                OPAL signature packaging
              </li>
            </ul>
          </FadeIn>
        </div>

        {related.length > 0 && (
          <div className="mt-28">
            <FadeIn>
              <h2 className="font-display text-3xl text-white mb-10">
                You May Also Like
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={i * 0.08} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
