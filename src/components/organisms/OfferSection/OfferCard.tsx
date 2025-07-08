import { Link, Card, Lead, H3, P } from "@/components";
import { OfferProps } from "./offerSection.types";

export const OfferCard = ({ offerData }: OfferProps) => {
  return (
    <Link href={offerData?.href}>
      <Card.Root s={{ p: [20] }}>
        <Card.Body>
          <Lead.Root s={{ gap: 16 }}>
            <Lead.Head>
              <H3>{offerData?.title}</H3>
            </Lead.Head>
            <Lead.Body>
              <P s={{ color: "gray10" }}>{offerData?.body}</P>
            </Lead.Body>
          </Lead.Root>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};
