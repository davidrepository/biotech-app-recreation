import { ReactNode } from "react";

export type ContainerOuterProps = {
  s?: Record<string, any>;
  children: ReactNode;
};

export type ContainerInnerProps = {
  s?: Record<string, any>;
  children: ReactNode;
};

export type ContainerRootProps = {
  as?: string;
  outerS?: Record<string, any>;
  innerS?: Record<string, any>;
  children: ReactNode;
};
