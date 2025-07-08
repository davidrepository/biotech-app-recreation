"use client";

import { Container, Grid, H2 } from "@/components";
import { useBlogSectionData } from "@/hooks";
import { BlogCard } from "./BlogCard";

export const BlogSection = () => {
  const { data, loading, error } = useBlogSectionData();

  if (loading) return <div>Loading hero section...</div>;
  if (error) return <div>Error loading hero section</div>;

  return (
    <Container.Root as="section" s={{ py: [60, 80] }}>
      <Grid.Root s={{ cols: [1, 3], gap: [24, 40] }}>
        <Grid.Item>
          <H2 s={{ position: [null, "sticky"], top: [null, 120] }}>
            {data?.heading}
          </H2>
        </Grid.Item>
        <Grid.Item s={{ spanx: ["unset", "2.."] }}>
          <Grid.Root
            as="ul"
            s={{ cols: [1, 2, 3], flexd: "column", gap: [40, 24] }}
          >
            {data?.blogs.map((blog, index) => (
              <BlogCard as="li" key={index} blogData={blog} />
            ))}
          </Grid.Root>
        </Grid.Item>
      </Grid.Root>
    </Container.Root>
  );
};
