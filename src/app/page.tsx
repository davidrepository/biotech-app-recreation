import {
  HeroSection,
  OfferSection,
  ProductSection,
  ServiceSection,
  Separator,
} from "@/components";
import { BlogSection } from "@/components/organisms/BlogSection";

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
      <Separator withContainer />
      <BlogSection />
    </>
  );
}
