import { Suspense } from "react";
import ShopClient from "./ShopClient";

export const metadata = {
  title: "Shop | OPAL Luxury Jewelry",
  description:
    "Browse the full OPAL collection — rings, necklaces, earrings and bracelets.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopClient />
    </Suspense>
  );
}
