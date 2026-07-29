import FadeIn from "@/components/FadeIn";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact | OPAL Luxury Jewelry",
  description: "Get in touch with OPAL via WhatsApp or Instagram.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-opal">
        <FadeIn className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            Contact OPAL
          </h1>
          <p className="text-mist/60">
            We usually reply within a few hours. Reach out anytime.
          </p>
          <div className="w-16 h-px bg-gold/60" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-16">
          <FadeIn delay={0.1}>
            <a
              href={whatsappLink(`Hello ${site.name}, I'd like to know more.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 border border-white/5 bg-slate p-10 h-full hover:border-gold/40 transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 12a8 8 0 1 1-3.7-6.75L20 4l-1.1 4A8 8 0 0 1 20 12Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9.5c0 3 2.5 5.5 5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white">WhatsApp</h3>
              <p className="text-mist/60 text-sm">{site.whatsappDisplay}</p>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">
                Open Chat &rarr;
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 border border-white/5 bg-slate p-10 h-full hover:border-gold/40 transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white">Instagram</h3>
              <p className="text-mist/60 text-sm">{site.instagramHandle}</p>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">
                Visit Profile &rarr;
              </span>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="max-w-3xl mx-auto mt-16">
          <div className="border border-gold/20 bg-gradient-to-br from-slate to-ink p-10 text-center flex flex-col items-center gap-4">
            <h2 className="font-display text-2xl text-white">
              Prefer to Order Directly?
            </h2>
            <p className="text-mist/60 max-w-md">
              Tell us which piece you love and we&apos;ll confirm availability,
              answer questions, and guide you through checkout &mdash; all on
              WhatsApp.
            </p>
            <a
              href={whatsappLink(`Hello ${site.name}, I'd like to place an order.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-gold text-ink text-xs uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Order on WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
