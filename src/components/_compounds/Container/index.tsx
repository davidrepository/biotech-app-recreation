import { Box } from "@/components";
import {
  ContainerOuterProps,
  ContainerInnerProps,
  ContainerRootProps,
} from "./container.types";

const ContainerOuter = ({ children, s, ...rest }: ContainerOuterProps) => {
  return (
    <Box s={{ px: [16], ...s }} {...rest}>
      {children}
    </Box>
  );
};

const ContainerInner = ({ children, s, ...rest }: ContainerInnerProps) => {
  return (
    <Box s={{ maxw: [1200], ml: "auto", mr: "auto", ...s }} {...rest}>
      {children}
    </Box>
  );
};

const ContainerRoot = ({
  children,
  outerS,
  innerS,
  ...rest
}: ContainerRootProps) => (
  <ContainerOuter s={outerS} {...rest}>
    <ContainerInner s={innerS}>{children}</ContainerInner>
  </ContainerOuter>
);

export const Container = {
  Root: ContainerRoot,
  Outer: ContainerOuter,
  Inner: ContainerInner,
};
