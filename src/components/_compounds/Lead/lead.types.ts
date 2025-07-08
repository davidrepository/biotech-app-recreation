import { BoxProps } from "@/types";

export interface LeadProps extends BoxProps {}

export interface LeadSubHeadingProps extends BoxProps {}

export interface LeadHeadingProps extends BoxProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

export interface LeadBodyProps extends BoxProps {}

export interface LeadCTAProps extends BoxProps {}
