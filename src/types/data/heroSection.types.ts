import { LinkProps } from "next/link";
import { ImageProps } from "../ui";

export interface HeroImage extends ImageProps {}

export interface CTAProps extends LinkProps {
  variant: string;
  label: string;
}

export interface HeroSectionData {
  heading: string;
  body: string;
  image: HeroImage;
  cta: CTAProps[];
}
