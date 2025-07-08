"use client";

import { Flex, Container } from "@/components";
import { useHeaderData } from "@/hooks";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";

export const Header = () => {
  const { data, error, loading } = useHeaderData();

  if (loading) return <header>Loading header...</header>;
  if (error || !data) return <header>Error loading header</header>;

  return (
    <Container.Root
      as="header"
      outerS={{ position: "sticky", top: 0, py: [16], bgc: "white" }}
    >
      <Flex.Root s={{ jc: "space-between", ai: "center" }}>
        <Flex.Item>
          <LeftSection data={data} />
        </Flex.Item>

        <Flex.Item>
          <RightSection />
        </Flex.Item>
      </Flex.Root>
    </Container.Root>
  );
};
