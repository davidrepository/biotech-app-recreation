import { BoxProps } from "@/types";

export interface NextImageProps extends BoxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
}
