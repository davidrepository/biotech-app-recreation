import { BoxProps } from "@/types";

export interface ButtonProps extends BoxProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  lightGhost?: boolean;
  darkGhost?: boolean;
}
