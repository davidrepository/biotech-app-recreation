import { Box, Flex, H1, H2, H3, P } from "@/components";
import {
  LeadCTAProps,
  LeadHeadingProps,
  LeadParagraphProps,
  LeadProps,
} from "./lead.types";

const Root = ({ children, s, ...rest }: LeadProps) => {
  return (
    <Flex.Root as="section" s={{ flexDirection: "column", ...s }} {...rest}>
      {children}
    </Flex.Root>
  );
};

const Heading = ({ children, h1, h2, h3, ...rest }: LeadHeadingProps) => {
  if (h2) return <H2 {...rest}>{children}</H2>;
  if (h3) return <H3 {...rest}>{children}</H3>;
  return <H1 {...rest}>{children}</H1>;
};

const Paragraph = ({ children, ...rest }: LeadParagraphProps) => {
  return <P {...rest}>{children}</P>;
};

const CTA = ({ children }: LeadCTAProps) => {
  return <Box>{children}</Box>;
};

export const Lead = {
  Root,
  Heading,
  Paragraph,
  CTA,
};
