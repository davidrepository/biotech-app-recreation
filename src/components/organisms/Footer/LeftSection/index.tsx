import { Flex, Image, Link, Navigation, P } from "@/components";
import { FooterDataProps } from "../footer.types";

export const LeftSection = ({ data }: FooterDataProps) => {
  return (
    <Flex.Root s={{ flexDirection: "column", gap: 32 }}>
      <Image
        src={data.company?.logo.src ?? ""}
        alt={data.company?.logo.alt ?? ""}
        width={90}
        height={30}
        priority
      />
      <Navigation.Root>
        <Navigation.List
          s={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}
        >
          {data?.navigation.map((nav, index) => {
            return (
              <Navigation.Item key={index}>
                <Link
                  href={nav.href}
                  v={{
                    variant: "darkFlat",
                  }}
                >
                  {nav.label}
                </Link>
              </Navigation.Item>
            );
          })}
        </Navigation.List>
      </Navigation.Root>
      <P s={{ color: "gray10" }}>{data.copyright}</P>
    </Flex.Root>
  );
};
