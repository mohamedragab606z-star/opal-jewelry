import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-6 px-6 pt-24">
      <span className="font-display text-gold text-7xl">404</span>
      <h1 className="font-display text-3xl md:text-4xl text-white">
        This Piece Isn&apos;t Here
      </h1>
      <p className="text-mist/60 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
        you back to the collection.
      </p>
      <Link
        href="/shop"
        className="bg-gold text-ink text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-light transition-colors duration-300"
      >
        Browse Collection
      </Link>
    </div>
  );
}
