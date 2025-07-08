import { Link, Card, Lead, H3, P } from "@/components";
import { ServiceProps } from "./serviceSection.types";

export const ServiceCard = ({ serviceData }: ServiceProps) => {
  return (
    <Link href={serviceData?.href ?? "#"} s={{ color: { hover: "primary" } }}>
      <Card.Root s={{ p: [20] }}>
        <Card.Body>
          <Lead.Root s={{ gap: 16 }}>
            <Lead.Head>
              <H3>{serviceData?.title}</H3>
            </Lead.Head>
            <Lead.Body>
              <P s={{ color: "gray10" }}>{serviceData?.body}</P>
            </Lead.Body>
          </Lead.Root>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};
