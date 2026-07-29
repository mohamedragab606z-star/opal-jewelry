export type Category = "Rings" | "Necklaces" | "Earrings" | "Bracelets";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: Category;
  images: string[];
  description: string;
  currentPrice?: number;
  originalPrice?: number;
  discount?: number;
  inStock?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "opal-rainbow-charm-bracelet",
    name: "OPAL Rainbow Charm Bracelet",
    category: "Bracelets",
    images: ['/images/products/item1-1.jpeg', '/images/products/item1-2.jpeg', '/images/products/item1-3.jpeg', '/images/products/item1-4.jpeg'],
    description: "One of those bracelets that will make you look different. These gems have life in them: their colors speak, bright and shine. Crafted from pure 925 Sterling Silver with high-quality Zircon 5A for a premium sparkle. Features an 18K Gold plated finish and an adjustable length of 18CM + 4CM.",
    currentPrice: 1490,
    originalPrice: 1863,
    discount: 20,
    inStock: true,
  },
  {
    id: 2,
    slug: "opal-sparkle-eternity-ring",
    name: "OPAL Sparkle Eternity Ring",
    category: "Rings",
    images: ['/images/products/item2-1.jpeg', '/images/products/item2-2.jpeg', '/images/products/item2-3.jpeg', '/images/products/item2-4.jpeg'],
    description: "A dazzling piece of sparkling silver from OPAL, perfect for any occasion. This minimal and elegant ring is designed for everyday wear, featuring high-quality CZ 5A stones for a long-lasting shine. Crafted from pure 925 Sterling Silver with a width of 3mm.",
    currentPrice: 1600,
    originalPrice: 2000,
    discount: 20,
    inStock: true,
  },
  {
    id: 3,
    slug: "opal-evil-eye-halo-ring",
    name: "OPAL Evil Eye Halo Ring",
    category: "Rings",
    images: ['/images/products/item3-1.jpeg', '/images/products/item3-2.jpeg', '/images/products/item3-3.jpeg', '/images/products/item3-4.jpeg'],
    description: "Add a beautiful touch to your fingers with this elegant halo ring. Crafted from pure 925 Sterling Silver and adorned with high-quality Zircon 5A, it offers a premium finish and long-lasting shine. Available in all sizes to ensure a perfect fit.",
    currentPrice: 1500,
    originalPrice: 1875,
    discount: 20,
    inStock: true,
  },
  {
    id: 4,
    slug: "opal-dazzling-wave-ring",
    name: "OPAL Dazzling Wave Ring",
    category: "Rings",
    images: ['/images/products/item4-1.jpeg', '/images/products/item4-2.jpeg', '/images/products/item4-3.jpeg'],
    description: "A unique ring designed to make you sparkle a little brighter. This piece features a comfort fit design, making it both lightweight and elegant for any occasion. Crafted from pure 925 Sterling Silver with high-quality Zircon 5A stones.",
    currentPrice: 1600,
    originalPrice: 2000,
    discount: 20,
    inStock: true,
  },
  {
    id: 5,
    slug: "opal-glow-pendant-necklace",
    name: "OPAL Glow Pendant Necklace",
    category: "Necklaces",
    images: ['/images/products/item5-1.jpeg', '/images/products/item5-2.jpeg', '/images/products/item5-3.jpeg', '/images/products/item5-4.jpeg', '/images/products/item5-5.jpeg'],
    description: "A fashionable necklace designed to add a radiant glow to your appearance. This timeless piece features a brilliant Zircon 5A pendant and is crafted from pure 925 Sterling Silver. The chain length is 40CM + 5CM, offering a perfect fit for any neckline.",
    currentPrice: 1700,
    originalPrice: 2125,
    discount: 20,
    inStock: true,
  },
  {
    id: 6,
    slug: "opal-dazzling-gem-necklace",
    name: "OPAL Dazzling Gem Necklace",
    category: "Necklaces",
    images: ['/images/products/item6-1.jpeg', '/images/products/item6-2.jpeg', '/images/products/item6-3.jpeg', '/images/products/item6-4.jpeg'],
    description: "Add the perfect touch of elegance with this dazzling necklace. Featuring a brilliant 8mm x 8mm Zircon 5A stone, this piece is crafted from pure 925 Sterling Silver for a long-lasting shine. Available in clear and red stone options to suit your style.",
    currentPrice: 1700,
    originalPrice: 2125,
    discount: 20,
    inStock: true,
  },
  {
    id: 7,
    slug: "opal-dainty-brilliance-bracelet",
    name: "OPAL Dainty Brilliance Bracelet",
    category: "Bracelets",
    images: ['/images/products/item7-1.jpeg', '/images/products/item7-2.jpeg', '/images/products/item7-3.jpeg', '/images/products/item7-4.jpeg'],
    description: "Bring brilliance to your look with this delicate bracelet. Crafted from pure 925 Sterling Silver with a high-polish finish, it features a stunning 1.5 carat Zircon 5A center stone. The adjustable length of 16CM + 3CM ensures a comfortable and elegant fit.",
    currentPrice: 1490,
    originalPrice: 1863,
    discount: 20,
    inStock: true,
  },
  {
    id: 8,
    slug: "opal-modern-line-ring",
    name: "OPAL Modern Line Ring",
    category: "Rings",
    images: ['/images/products/item8-1.jpeg', '/images/products/item8-2.jpeg', '/images/products/item8-3.jpeg', '/images/products/item8-4.jpeg', '/images/products/item8-5.jpeg', '/images/products/item8-6.jpeg'],
    description: "A modern and elegant ring from OPAL, designed to be the perfect fashionable addition to your jewelry collection. Crafted from pure 925 Sterling Silver with high-quality Zircon 5A, it offers a premium shine and comes in luxury packaging ready for gifting.",
    currentPrice: 1600,
    originalPrice: 2000,
    discount: 20,
    inStock: true,
  },
  {
    id: 9,
    slug: "opal-open-leaf-ring",
    name: "OPAL Open Leaf Ring",
    category: "Rings",
    images: ['/images/products/item9-1.jpeg', '/images/products/item9-2.jpeg'],
    description: "The perfect gift for any girl, this adjustable open ring is made with care from pure 925 Sterling Silver. Adorned with high-quality CZ 5A stones, it is available in both 18K Gold and Silver plating options for a long-lasting, sophisticated shine.",
    currentPrice: 1290,
    originalPrice: 1613,
    discount: 20,
    inStock: true,
  },
  {
    id: 10,
    slug: "opal-evil-eye-trio-bracelet",
    name: "OPAL Evil Eye Trio Bracelet",
    category: "Bracelets",
    images: ['/images/products/item10-1.jpeg', '/images/products/item10-2.jpeg', '/images/products/item10-3.jpeg', '/images/products/item10-4.jpeg', '/images/products/item10-5.jpeg'],
    description: "Keep calm and put your bracelet on. This elegant piece features a series of dazzling Zircon 5A stones set in pure 925 Sterling Silver. With an adjustable length of 16CM + 3CM, it's a premium quality addition to any outfit and comes ready for gifting.",
    currentPrice: 1600,
    originalPrice: 2000,
    discount: 20,
    inStock: true,
  },
  {
    id: 11,
    slug: "opal-timeless-evil-eye-bracelet",
    name: "OPAL Timeless Evil Eye Bracelet",
    category: "Bracelets",
    images: ['/images/products/item11-1.jpeg', '/images/products/item11-2.jpeg', '/images/products/item11-3.jpeg', '/images/products/item11-4.jpeg', '/images/products/item11-5.jpeg', '/images/products/item11-6.jpeg'],
    description: "A timeless beauty that suits all outfits. This skin-friendly bracelet is crafted from pure 925 Sterling Silver and features sparkling Zircon 5A stones. It is tarnish-resistant and includes an adjustable 16CM + 3CM chain for the perfect fit.",
    currentPrice: 1500,
    originalPrice: 1875,
    discount: 20,
    inStock: true,
  },
  {
    id: 12,
    slug: "opal-evil-eye-pendant-necklace",
    name: "OPAL Evil Eye Pendant Necklace",
    category: "Necklaces",
    images: ['/images/products/item12-1.jpeg', '/images/products/item12-2.jpeg', '/images/products/item12-3.jpeg'],
    description: "Go for the unexpected with this unique evil eye necklace. Crafted from pure 925 Sterling Silver with a premium 18K Gold plating, it features a stunning 4mm round Zircon 5A stone. The 40CM + 5CM adjustable chain makes it a perfect gift for any occasion.",
    currentPrice: 1650,
    originalPrice: 2063,
    discount: 20,
    inStock: true,
  },
  {
    id: 13,
    slug: "opal-dainty-sparkle-ring",
    name: "OPAL Dainty Sparkle Ring",
    category: "Rings",
    images: ['/images/products/item13-1.jpeg', '/images/products/item13-2.jpeg', '/images/products/item13-3.jpeg', '/images/products/item13-4.jpeg'],
    description: "Add a beautiful touch to your fingers with this dainty sparkle ring. High-quality crafted from pure 925 Silver with 5A Zircon brilliance, this lightweight and smooth ring offers a comfort fit. Available in all sizes and delivered in luxury packaging.",
    currentPrice: 1400,
    originalPrice: 1750,
    discount: 20,
    inStock: true,
  },
  {
    id: 14,
    slug: "opal-blue-lovers-eternity-ring",
    name: "OPAL Blue Lovers Eternity Ring",
    category: "Rings",
    images: ['/images/products/item14-1.jpeg', '/images/products/item14-2.jpeg', '/images/products/item14-3.jpeg', '/images/products/item14-4.jpeg', '/images/products/item14-5.jpeg', '/images/products/item14-6.jpeg'],
    description: "A touch of elegance for every moment. This unique piece features a special design for blue lovers, adorned with brilliant and eye-catching 5A Zircons. Crafted from pure 925 Silver with a comfort fit, it is both lightweight and smooth for daily wear.",
    currentPrice: 1400,
    originalPrice: 1750,
    discount: 20,
    inStock: true,
  },
  {
    id: 15,
    slug: "opal-evil-eye-horseshoe-bracelet",
    name: "OPAL Evil Eye Horseshoe Bracelet",
    category: "Bracelets",
    images: ['/images/products/item15-1.jpeg', '/images/products/item15-2.jpeg', '/images/products/item15-3.jpeg', '/images/products/item15-4.jpeg'],
    description: "Happiness is wearing jewelry that shines in every moment. This elegant bracelet features a timeless evil eye and horseshoe design, crafted from pure 925 Silver with high-quality 5A Zircons. Lightweight and smooth, it is the perfect gift for any occasion.",
    currentPrice: 1590,
    originalPrice: 1988,
    discount: 20,
    inStock: true,
  },
  {
    id: 16,
    slug: "opal-emerald-cut-solitaire-ring",
    name: "OPAL Emerald Cut Solitaire Ring",
    category: "Rings",
    images: ['/images/products/item16-1.jpeg', '/images/products/item16-2.jpeg', '/images/products/item16-3.jpeg', '/images/products/item16-4.jpeg', '/images/products/item16-5.jpeg', '/images/products/item16-6.jpeg'],
    description: "Life is too short for boring jewelry. This elegant ring features a stunning 1.0 carat emerald-cut Zircon 5A stone set in pure 925 Silver. Available in Emerald Green and Pink, it offers a comfort fit and brilliant shine for those who appreciate elegance in every detail.",
    currentPrice: 1590,
    originalPrice: 1988,
    discount: 20,
    inStock: true,
  },
];

export const categories: { name: Category; image: string; blurb: string }[] = [
  {
    name: "Bracelets",
    image: "/images/products/item1-1.jpeg",
    blurb: "Chains that layer beautifully",
  },
  {
    name: "Rings",
    image: "/images/products/item2-1.jpeg",
    blurb: "Elegant bands & statement pieces",
  },
  {
    name: "Necklaces",
    image: "/images/products/item5-1.jpeg",
    blurb: "Pendants & layered chains",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}
