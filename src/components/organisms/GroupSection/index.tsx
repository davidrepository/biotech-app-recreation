"use client";

import { Container, H2, Flex, Grid } from "@/components";
import { useGroupSectionData } from "@/hooks";
import { GroupCard } from "./GroupCard";

export const GroupSection = () => {
  const { data, loading, error } = useGroupSectionData();

  if (loading) return <div>Loading hero section...</div>;
  if (error) return <div>Error loading hero section</div>;

  return (
    <Container.Root as="section" s={{ py: [60, 80] }}>
      <Flex.Root s={{ flexDirection: "column", gap: [20] }}>
        <H2>{data?.heading}</H2>
        <Grid.Root as="ul" s={{ cols: [1, 2], gap: 32 }}>
          {data?.groups.map((group, index) => (
            <Grid.Item as="li" key={index}>
              <GroupCard groupData={group} />
            </Grid.Item>
          ))}
        </Grid.Root>
      </Flex.Root>
    </Container.Root>
  );
};
