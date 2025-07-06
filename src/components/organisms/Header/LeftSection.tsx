import { Flex, Image, Link, Navigation } from "@/components";
import { useMediaQuery } from "@/hooks";
import { LeftSectionProps } from "./header.types";

export const LeftSection = ({ data }: LeftSectionProps) => {
  const { isTablet } = useMediaQuery();

  return (
    <Flex.Root s={{ ai: "center", gap: 32 }}>
      <Flex.Item>
        <Link href="#" v={{ spacing: "none" }}>
          <Image
            src={data.company.logo.src}
            alt={data.company.logo.alt}
            width={110}
            height={38}
            priority
          />
        </Link>
      </Flex.Item>
      {isTablet && (
        <Flex.Item>
          <Navigation.Root>
            <Navigation.List vertical>
              {data.navigation.map((item, idx) => (
                <Navigation.Item key={idx}>
                  <Link key={item.href} bold href={"#"}>
                    {item.label}
                  </Link>
                </Navigation.Item>
              ))}
            </Navigation.List>
          </Navigation.Root>
        </Flex.Item>
      )}
    </Flex.Root>
  );
};
