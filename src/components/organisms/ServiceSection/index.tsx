"use client";

import { Container, H2, Flex, Grid } from "@/components";
import { useServiceSectionData } from "@/hooks";
import { ServiceCard } from "./ServiceCard";

export const ServiceSection = () => {
  const { data, loading, error } = useServiceSectionData();

  if (loading) return <div>Loading hero section...</div>;
  if (error) return <div>Error loading hero section</div>;

  return (
    <Container.Root as="section" s={{ py: [60, 80] }}>
      <Flex.Root s={{ flexd: "column", gap: [20] }}>
        <H2>{data?.heading}</H2>
        <Grid.Root s={{ cols: [1, 3] }}>
          {data?.services.map((service, index) => (
            <Grid.Item key={index}>
              <ServiceCard serviceData={service} />
            </Grid.Item>
          ))}
        </Grid.Root>
      </Flex.Root>
    </Container.Root>
  );
};
