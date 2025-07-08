import { HeroSection, OfferSection, ProductSection } from "@/components";
import { Separator } from "@/components/primitives/Separator";

import "@/styles/global.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <Separator withContainer />
      <ProductSection />
    </>
  );
}
