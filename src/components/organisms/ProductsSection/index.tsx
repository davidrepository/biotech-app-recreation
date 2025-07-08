"use client";

import { Container, Flex, Grid, H2 } from "@/components";
import { useProductsSectionData } from "@/hooks";
import { ProductCard } from "./ProductCard";
import { Separator } from "@/components/primitives/Separator";
import { Fragment } from "react";

export const ProductsSection = () => {
  const { data, loading, error } = useProductsSectionData();

  if (loading) return <div>Loading hero section...</div>;
  if (error) return <div>Error loading hero section</div>;

  return (
    <Container.Root as="section" s={{ py: [60, 80] }}>
      <Grid.Root s={{ cols: [1, 1, 3], gap: [20, 20, 40] }}>
        <Grid.Item>
          <H2 s={{ position: [null, null, "sticky"], top: [null, null, 120] }}>
            {data?.heading}
          </H2>
        </Grid.Item>
        <Grid.Item s={{ spanx: ["unset", "unset", "2.."] }}>
          <Flex.Root s={{ flexd: "column", gap: [20, 20, 40] }}>
            {data?.products.map((product, index) => (
              <Fragment key={index}>
                <ProductCard productData={product} />
                {index < data.products.length - 1 && <Separator />}
              </Fragment>
            ))}
          </Flex.Root>
        </Grid.Item>
      </Grid.Root>
    </Container.Root>
  );
};
