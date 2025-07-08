"use client";

import { Image, Lead, Container, Link } from "@/components";
import { useHeroSectionData } from "@/hooks";

export const HeroSection = () => {
  const { data, loading, error } = useHeroSectionData();

  if (loading) return <div>Loading hero section...</div>;
  if (error) return <div>Error loading hero section</div>;

  return (
    <Container.Root
      as="section"
      outerS={{
        minh: 420,
        position: "relative",
        display: "flex",
        ai: "center",
      }}
      innerS={{
        px: [0, 0, 40],
      }}
    >
      <Image
        src={data?.image.src ?? ""}
        alt={data?.image.alt ?? ""}
        fill
        priority
        s={{ objectFit: "cover", zIndex: "-1" }}
      />
      <Lead.Root s={{ maxw: ["full", "half"], gap: 20 }}>
        <Lead.Heading v={{ tone: "light" }}>{data?.heading}</Lead.Heading>
        <Lead.Body v={{ tone: "light" }}>{data?.body}</Lead.Body>
        <Lead.CTA>
          <Link tertiary href={data?.cta.href ?? "#"}>
            {data?.cta.label}
          </Link>
        </Lead.CTA>
      </Lead.Root>
    </Container.Root>
  );
};
