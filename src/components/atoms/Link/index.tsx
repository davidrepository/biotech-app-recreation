import NextLink from "next/link";
import { Button } from "@/components";
import { LinkProps } from "./link.types";

export const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <Button as={NextLink} {...rest}>
      {children}
    </Button>
  );
};
