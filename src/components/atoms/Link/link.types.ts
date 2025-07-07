import { ReactNode } from "react";

export type LinkProps = {
  href: string;
  square?: boolean;
  small?: boolean;
  bold?: boolean;
  light?: boolean;
  withAfterSeparator?: boolean;
  noSpacing?: boolean;
  children: ReactNode;
};
