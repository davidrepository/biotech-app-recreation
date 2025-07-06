import { Box } from "@/components";
import {
  ContainerOuterProps,
  ContainerInnerProps,
  ContainerRootProps,
} from "./container.types";

const Outer = ({ children, s, ...rest }: ContainerOuterProps) => {
  return (
    <Box s={{ px: [16, 32], ...s }} {...rest}>
      {children}
    </Box>
  );
};

const Inner = ({ children, s, ...rest }: ContainerInnerProps) => {
  return (
    <Box s={{ maxw: [1200], ml: "auto", mr: "auto", ...s }} {...rest}>
      {children}
    </Box>
  );
};

const Root = ({ children, outerS, innerS, ...rest }: ContainerRootProps) => (
  <Outer s={outerS} {...rest}>
    <Inner s={innerS}>{children}</Inner>
  </Outer>
);

export const Container = {
  Root,
  Outer,
  Inner,
};
