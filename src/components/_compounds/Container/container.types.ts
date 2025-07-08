import { BoxProps } from "@/types";

export interface ContainerOuterProps extends BoxProps {}

export interface ContainerInnerProps extends BoxProps {}

export interface ContainerRootProps extends BoxProps {
  outerS?: Record<string, any>;
  innerS?: Record<string, any>;
}
