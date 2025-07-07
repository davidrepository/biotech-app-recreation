"use client";

import { Container, Flex, Link } from "@/components";
import { useMediaQuery, useTopBarData } from "@/hooks";

export const TopBar = () => {
  const { data, error, loading } = useTopBarData();
  const { isTablet } = useMediaQuery();

  if (loading) return <header>Loading topbar...</header>;
  if (error || !data) return <header>Error loading topbar</header>;

  return isTablet ? (
    <Container.Root
      as="aside"
      outerS={{
        py: [0],
        bgc: "black",
        position: "relative",
      }}
    >
      <Flex.Root s={{ jc: "space-between" }}>
        <Flex.Item>
          <Link small light bold href={data.promo.cta.href}>
            {data.promo.text} - {data.promo.cta.label}
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Flex.Root s={{ gap: 24 }}>
            {data.linksRight.map(({ label, href }, index) => (
              <Link
                key={href}
                small
                light
                bold
                href={href}
                withAfterSeparator={index === 0}
              >
                {label}
              </Link>
            ))}
          </Flex.Root>
        </Flex.Item>
      </Flex.Root>
    </Container.Root>
  ) : (
    <></>
  );
};
