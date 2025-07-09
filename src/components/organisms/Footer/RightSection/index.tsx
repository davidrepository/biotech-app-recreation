import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Flex, Link, Navigation } from "@/components";
import { FooterDataProps } from "../footer.types";

export const RightSection = ({ data }: FooterDataProps) => {
  return (
    <Flex.Root s={{ justifyContent: ["flex-start", "flex-end"] }}>
      <Navigation.Root>
        <Navigation.List s={{ flexDirection: "row", gap: 32 }}>
          {data?.socials.map((social, index) => {
            return (
              <Navigation.Item key={index}>
                <Link href={social.href}>
                  <FontAwesomeIcon icon={faShareNodes} />
                </Link>
              </Navigation.Item>
            );
          })}
        </Navigation.List>
      </Navigation.Root>
    </Flex.Root>
  );
};
