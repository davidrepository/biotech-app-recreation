import { Card, Lead, P, H3 } from "@/components";
import { GroupDataProps } from "./groupCard.types";

export const GroupCard = ({ groupData }: GroupDataProps) => {
  return (
    <Card.Root
      s={{
        gap: [20, 20, 32],
        alignItems: ["center", "flex-start"],
        flexDirection: ["column", "row"],
      }}
    >
      <Card.Image
        src={groupData?.image.src}
        alt={groupData?.image.alt}
        s={{ w: [160, "40%", "30%"] }}
      />
      <Card.Body>
        <Lead.Root s={{ gap: 8, alignItems: ["center", "flex-start"] }}>
          <Lead.Head
            s={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Lead.Head>
              <H3 s={{ w: "full", textAlign: ["center", "left"] }}>
                {groupData?.title}
              </H3>
            </Lead.Head>
          </Lead.Head>
          <Lead.Body s={{ color: "gray10" }}>
            <P s={{ w: "full", textAlign: ["center", "left"] }}>
              {groupData?.body}
            </P>
          </Lead.Body>
        </Lead.Root>
      </Card.Body>
    </Card.Root>
  );
};
