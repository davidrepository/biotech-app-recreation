"use client";

import {
  HeroSection,
  OfferSection,
  ProductSection,
  ServiceSection,
  BlogSection,
  GroupSection,
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
      <Separator withContainer />
      <BlogSection />
      <Separator withContainer />
      <GroupSection />
    </>
  );
}
