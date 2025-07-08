import { BoxProps } from "@/types";

export interface CardProps extends BoxProps {
  children: React.ReactNode;
}

export interface CardImageProps extends BoxProps {
  src: string;
  alt?: string;
}
