import { ReactNode } from "react";
import { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  children: ReactNode;
  [key: string]: any;
}
