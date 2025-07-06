import { CSSProperties, ElementType, ReactNode } from "react";

export interface BoxProps<T extends ElementType = "div"> {
  as?: T;
  v?: Record<string, any>;
  s?: Record<string, any>;
  recipe?: (v: any) => string | undefined;
  type?: string;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}
