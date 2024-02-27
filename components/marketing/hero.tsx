import { groq } from "next-sanity";

import { client } from "@/lib/client";
import { SanityProduct } from "@/config/inventory";
import { HeroParallax } from "../ui/hero-parallax";

export async function Hero() {
  const products = await client.fetch<SanityProduct[]>(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      "slug": slug.current
    }`
  );

  return <HeroParallax products={products} />;
}
