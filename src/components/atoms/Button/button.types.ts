import { ReactNode } from "react";

export type ButtonProps = {
  recipe?: (v: any) => string | undefined;
  children: ReactNode;
};
