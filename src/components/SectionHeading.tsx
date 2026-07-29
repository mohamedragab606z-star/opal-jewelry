import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <FadeIn className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-white">{title}</h2>
      {subtitle && (
        <p className="text-mist/60 text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-px bg-gold/60" />
    </FadeIn>
  );
}
