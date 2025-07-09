import { Link, Card, Lead, H3, Caption } from "@/components";
import { formatDate } from "@/helpers";
import { BlogDataProps } from "../blogSection.types";

export const BlogCard = ({ blogData }: BlogDataProps) => {
  return (
    <Card.Root
      s={{
        gap: [24, 24, 32],
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <Card.Image
        src={blogData?.image.src}
        alt={blogData?.image.alt}
        link
        full
        href={blogData?.href}
      />
      <Card.Body>
        <Lead.Root s={{ gap: 16 }}>
          <Lead.Head>
            <Lead.Head s={{ flexDirection: "column", gap: 16 }}>
              <Caption withDash v={{ tone: "gray" }}>
                {formatDate(blogData?.date)}
              </Caption>
              <Link href={blogData?.href}>
                <H3>{blogData?.title}</H3>
              </Link>
            </Lead.Head>
          </Lead.Head>
        </Lead.Root>
      </Card.Body>
    </Card.Root>
  );
};
