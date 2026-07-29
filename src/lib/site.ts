export const site = {
  name: "OPAL",
  tagline: "Elegant Jewelry. Honest Prices.",
  description:
    "OPAL is a luxury jewelry store in Egypt offering timeless, gold-plated rings, necklaces, earrings and bracelets at affordable prices.",
  whatsappNumber: "201012190530", // international format, no leading 0 / plus sign
  whatsappDisplay: "01012190530",
  instagramHandle: "@opalstore_eg",
  instagramUrl: "https://www.instagram.com/opalstore_eg",
  keywords: [
    "Luxury Jewelry Egypt",
    "Affordable Jewelry",
    "Gold Plated Jewelry",
    "OPAL Store",
    "Elegant Accessories",
  ],
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
