"use client";

import { Image, Lead, Container, Link, H1, P } from "@/components";
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
        alignItems: "center",
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
        <Lead.Head>
          <H1 v={{ tone: "light" }}>{data?.heading}</H1>
        </Lead.Head>
        <Lead.Body>
          <P v={{ tone: "light" }}>{data?.body}</P>
        </Lead.Body>
        <Lead.CTA>
          {data?.cta.map((item, index) => (
            <Link
              key={index}
              href={item.href ?? "#"}
              v={{ variant: item.variant }}
            >
              {item.label}
            </Link>
          ))}
        </Lead.CTA>
      </Lead.Root>
    </Container.Root>
  );
};
