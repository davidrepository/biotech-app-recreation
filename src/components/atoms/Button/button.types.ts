import { BoxProps } from "@/types";

export interface ButtonProps extends BoxProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  lightGhost?: boolean;
  darkGhost?: boolean;
}

export type Tone =
  | "primary"
  | "secondary"
  | "tertiary"
  | "lightGhost"
  | "darkGhost";
