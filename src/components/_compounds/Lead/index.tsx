import { Box, Flex } from "@/components";
import {
  LeadRootProps,
  LeadHeadProps,
  LeadBodyProps,
  LeadCTAProps,
} from "./lead.types";

const LeadRoot = ({ children, s, ...rest }: LeadRootProps) => {
  return (
    <Flex.Root as="section" s={{ flexDirection: "column", ...s }} {...rest}>
      {children}
    </Flex.Root>
  );
};

const LeadHead = ({ children, ...rest }: LeadHeadProps) => {
  return <Flex.Root {...rest}>{children}</Flex.Root>;
};

const LeadBody = ({ children, ...rest }: LeadBodyProps) => {
  return <Box {...rest}>{children}</Box>;
};

const CTA = ({ children, ...rest }: LeadCTAProps) => {
  return <Flex.Root {...rest}>{children}</Flex.Root>;
};

export const Lead = {
  Root: LeadRoot,
  Head: LeadHead,
  Body: LeadBody,
  CTA,
};
