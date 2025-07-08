import { ElementType, ReactNode } from "react";

export type RefType = HTMLElement | null;

export interface BoxProps<T extends ElementType = "div"> {
  as?: T | string;
  v?: Record<string, any>;
  s?: Record<string, any>;
  recipe?: (v: any) => string;
  children?: ReactNode;
  [key: string]: any;
}
