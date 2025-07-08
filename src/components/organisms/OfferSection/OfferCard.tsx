import { Link, Card, Lead } from "@/components";
import { OfferProps } from "./offerSection.types";

export const OfferCard = ({ offerData }: OfferProps) => {
  return (
    <Link href={offerData?.href}>
      <Card.Root s={{ p: [20] }}>
        <Card.Body>
          <Lead.Root s={{ gap: 16 }}>
            <Lead.Heading h3>{offerData?.title}</Lead.Heading>
            <Lead.Body s={{ color: "gray10" }}>{offerData?.body}</Lead.Body>
          </Lead.Root>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};
