"use client";

import { Container, Flex, Link } from "@/components";
import { useMediaQuery, useTopBarData } from "@/hooks";

export const TopBar = () => {
  const { data, error, loading } = useTopBarData();
  const { isLaptop } = useMediaQuery();

  if (loading) return <header>Loading topbar...</header>;
  if (error || !data) return <header>Error loading topbar</header>;

  return isLaptop ? (
    <Container.Root
      as="aside"
      outerS={{
        py: [0],
        bgc: "black",
        position: "relative",
      }}
    >
      <Flex.Root s={{ justifyContent: "space-between" }}>
        <Link href={data.promo.cta.href} v={{ variant: "lightGhost" }}>
          {data.promo.text} - {data.promo.cta.label}
        </Link>
        <Flex.Root s={{ gap: 24 }}>
          {data.linksRight.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              v={{
                variant: "lightGhost",
                weight: "bold",
                ...(index === 0 ? { withAfterSeparator: true } : {}),
              }}
            >
              {label}
            </Link>
          ))}
        </Flex.Root>
      </Flex.Root>
    </Container.Root>
  ) : (
    <></>
  );
};
