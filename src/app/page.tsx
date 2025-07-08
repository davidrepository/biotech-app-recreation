import {
  HeroSection,
  OfferSection,
  ProductSection,
  ServiceSection,
  Separator,
} from "@/components";

import "@/styles/global.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <Separator withContainer />
      <ProductSection />
      <Separator withContainer />
      <ServiceSection />
    </>
  );
}
