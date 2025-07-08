import { LinkProps } from "next/link";
import { ImageProps } from "../ui";

interface HeroImage extends ImageProps {}

interface CTAProps extends LinkProps {
  variant: string;
  label: string;
}

export interface HeroSectionData {
  heading: string;
  body: string;
  image: HeroImage;
  cta: CTAProps[];
}
