"use client";

import { Container, H2, Flex, Grid } from "@/components";
import { useOfferSectionData } from "@/hooks";
import { OfferCard } from "./OfferCard";

export const OfferSection = () => {
  const { data, loading, error } = useOfferSectionData();

  if (loading) return null;
  if (error) return <div>Error loading hero section</div>;

  return (
    <Container.Root as="section" s={{ py: [60, 80] }}>
      <Flex.Root s={{ flexDirection: "column", gap: [20] }}>
        <H2>{data?.heading}</H2>
        <Grid.Root as="ul" s={{ cols: [1, 4] }}>
          {data?.offers.map((offer, index) => (
            <Grid.Item as="li" key={index}>
              <OfferCard offerData={offer} />
            </Grid.Item>
          ))}
        </Grid.Root>
      </Flex.Root>
    </Container.Root>
  );
};
