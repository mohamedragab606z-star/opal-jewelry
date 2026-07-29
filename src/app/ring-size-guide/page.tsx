import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Ring Size Guide | OPAL Luxury Jewelry",
  description: "Find your perfect ring size with OPAL's premium sizing guide.",
};

const steps = [
  {
    title: "Wrap a String",
    text: "Wrap a piece of string or paper strip around the base of your finger.",
  },
  {
    title: "Mark the Overlap",
    text: "Mark the point where the string meets, then measure it in millimeters.",
  },
  {
    title: "Match Your Size",
    text: "Compare the measurement to the chart to find your OPAL ring size.",
  },
];

export default function RingSizeGuidePage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-opal">
        <FadeIn className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Find Your Fit
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            Ring Size Guide
          </h1>
          <p className="text-mist/60">
            A quick, at-home way to find your perfect OPAL ring size.
          </p>
          <div className="w-16 h-px bg-gold/60" />
        </FadeIn>

        <FadeIn delay={0.15} className="max-w-3xl mx-auto mt-16">
          <div className="relative border border-gold/20 p-3 md:p-4 bg-slate">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/ring-size-guide.jpeg"
                alt="OPAL Ring Size Guide Chart"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className="text-center flex flex-col items-center gap-3">
                <span className="font-display text-4xl text-gold/50">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl text-white">{s.title}</h3>
                <p className="text-mist/50 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex flex-col items-center gap-5 mt-24 text-center">
          <h2 className="font-display text-3xl text-white">
            Still Not Sure?
          </h2>
          <p className="text-mist/60 max-w-md">
            Send us your measurement on WhatsApp and our team will help you
            pick the right size.
          </p>
          <a
            href={whatsappLink(
              `Hello ${site.name}, I need help finding my ring size.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Ask on WhatsApp
          </a>
        </FadeIn>
      </div>
    </div>
  );
}
