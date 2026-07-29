import FadeIn from "@/components/FadeIn";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/lib/reviews";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Reviews | OPAL Luxury Jewelry",
  description: "See what OPAL customers across Egypt are saying.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-opal">
        <FadeIn className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Testimonials
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            Customer Reviews
          </h1>
          <div className="flex items-center gap-2 text-gold text-2xl tracking-widest">
            ★★★★★
          </div>
          <p className="text-mist/60">
            Real feedback from OPAL customers across Egypt.
          </p>
          <div className="w-16 h-px bg-gold/60" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} delay={(i % 3) * 0.1} />
          ))}
        </div>

        <FadeIn className="flex flex-col items-center gap-5 mt-24 text-center">
          <h2 className="font-display text-3xl text-white">
            Loved Your OPAL Piece?
          </h2>
          <p className="text-mist/60 max-w-md">
            Tag us on Instagram or send us your feedback on WhatsApp — we
            would love to hear from you.
          </p>
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like to share my feedback!`)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/60 text-gold text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Share Your Feedback
          </a>
        </FadeIn>
      </div>
    </div>
  );
}
