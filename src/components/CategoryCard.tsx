import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function CategoryCard({
  name,
  image,
  blurb,
  delay = 0,
}: {
  name: string;
  image: string;
  blurb: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={`/shop?category=${name}`}
        className="group relative block aspect-[3/4] overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-500 m-3" />

        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center gap-1 transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="font-display text-2xl md:text-3xl text-white">
            {name}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
            {blurb}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}
