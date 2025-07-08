import { ImageProps } from "next/image";
import { BoxProps } from "@/types";

export interface CardProps extends BoxProps {}

export interface CardImageProps extends ImageProps, BoxProps {
  link?: boolean;
  full?: boolean;
}
