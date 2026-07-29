# OPAL — Luxury Jewelry Website

A fully static, fully responsive luxury jewelry storefront built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. No backend, no paid services, no paid APIs — 100% free to run and deploy.

## What's inside

- **Home** — animated hero (built from an uploaded product photo), category grid, featured products, About preview, reviews, Instagram gallery, WhatsApp CTA
- **Shop** (`/shop`) — all 28 products from your uploaded photos, filterable by category (Rings, Necklaces, Earrings, Bracelets)
- **Product Details** (`/product/[slug]`) — one static page per product, generated automatically
- **About** (`/about`)
- **Reviews** (`/reviews`)
- **Ring Size Guide** (`/ring-size-guide`) — uses your uploaded sizing chart image
- **Contact** (`/contact`) — direct WhatsApp + Instagram links

All prices are intentionally set to **"Coming Soon"** as requested — nothing was invented.

## Product images & categories

All 28 images from your ZIP are used in `public/images/products/`. Since the ZIP had no labels, each photo was manually reviewed and sorted into Rings / Necklaces / Earrings / Bracelets, then given an elegant placeholder name (e.g. "Aurora Ring"). Edit anything in `src/lib/products.ts` — it's a plain array, easy to rename, re-categorize, or add real prices to later.

## About the logo

The ZIP did not contain a separate logo file (only product photos + the ring size chart), so a lightweight typographic "OPAL" wordmark + gem icon was built in CSS/SVG (`src/components/Logo.tsx`) matching your gold/navy palette. If you have a real logo file, drop it at `public/images/logo.png` and swap the `<svg>`/text in `Logo.tsx` for an `<Image src="/images/logo.png" .../>`.

## Editing key info

| What | Where |
|---|---|
| WhatsApp number | `src/lib/site.ts` → `whatsappNumber` |
| Instagram link | `src/lib/site.ts` → `instagramUrl` |
| Colors | `tailwind.config.ts` → `theme.extend.colors` |
| Products / names / categories | `src/lib/products.ts` |
| Reviews | `src/lib/reviews.ts` |

## Run locally

Requires [Node.js](https://nodejs.org) 18.18+ (works great with Node 20/22).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build a static site

```bash
npm run build
```

This produces a fully static site in the **`out/`** folder (no server needed) — ready to upload anywhere.

## Deploy for free

### Vercel
1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Next.js**. Leave everything else default and click **Deploy**.

### Netlify
1. Push this project to a GitHub repo.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`  Publish directory: `out`
4. Click **Deploy**.

Both are free tiers, no credit card, no paid plugins, and no backend/server required — the entire site is static HTML/CSS/JS.

## Tech stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Self-hosted Google Fonts via `@fontsource` (Cormorant Garamond + Poppins) — no external font requests at runtime
