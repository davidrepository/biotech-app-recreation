"use client";

import { Container, Grid } from "@/components";
import { useFooterData } from "@/hooks";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";

export const Footer = () => {
  const { data, error, loading } = useFooterData();

  if (loading) return <header>Loading header...</header>;
  if (error || !data) return <header>Error loading header</header>;
  return (
    <Container.Root s={{ py: [32, 40], bgc: "gray2", color: "white" }}>
      <Grid.Root s={{ cols: [1, 3], gap: 20 }}>
        <Grid.Item s={{ spanx: [null, "1-2"] }}>
          <LeftSection data={data} />
        </Grid.Item>
        <Grid.Item>
          <RightSection data={data} />
        </Grid.Item>
      </Grid.Root>
    </Container.Root>
  );
};
