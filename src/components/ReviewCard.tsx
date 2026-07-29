import { Review } from "@/lib/reviews";
import FadeIn from "./FadeIn";

export default function ReviewCard({
  review,
  delay = 0,
}: {
  review: Review;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="h-full flex flex-col gap-4 bg-slate border border-white/5 p-8 hover:border-gold/30 transition-colors duration-500">
        <div className="text-gold text-lg tracking-widest">
          {"★".repeat(review.rating)}
          <span className="text-white/10">
            {"★".repeat(5 - review.rating)}
          </span>
        </div>
        <p className="text-mist/70 text-sm leading-relaxed flex-1">
          &ldquo;{review.text}&rdquo;
        </p>
        <p className="font-display text-lg text-white">{review.name}</p>
      </div>
    </FadeIn>
  );
}
