import { ReactNode } from "react";
import { ImageProps as NextImageProps } from "next/image";

export type RefType = HTMLElement | null;

export interface BoxProps {
  v?: Record<string, any>;
  s?: Record<string, any>;
  recipe?: (v: any) => string;
  children?: ReactNode;
  [key: string]: any;
}

export interface ImageProps extends NextImageProps, BoxProps {}
