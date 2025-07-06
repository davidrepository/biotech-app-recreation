import { ReactNode } from "react";

export type LinkProps = {
  href: string;
  square?: boolean;
  bold?: boolean;
  v?: Record<string, any>;
  children: ReactNode;
};
