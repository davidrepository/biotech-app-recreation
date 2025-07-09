import { Flex, Image, Link, Navigation } from "@/components";
import { useMediaQuery } from "@/hooks";
import { HeaderDataProps } from "../header.types";

export const LeftSection = ({ data }: HeaderDataProps) => {
  const { isLaptop } = useMediaQuery();

  return (
    <Flex.Root s={{ alignItems: "center", gap: 32 }}>
      <Flex.Item>
        <Link href="/">
          <Image
            src={data.company.logo.src}
            alt={data.company.logo.alt}
            width={110}
            height={38}
            priority
          />
        </Link>
      </Flex.Item>
      {isLaptop && (
        <Flex.Item>
          <Navigation.Root>
            <Navigation.List vertical>
              {data.navigation.map((item, idx) => (
                <Navigation.Item key={idx}>
                  <Link
                    href={item.href ?? "#"}
                    s={{
                      px: 16,
                    }}
                    v={{
                      variant: "darkGhost",
                      weight: "bold",
                    }}
                  >
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
