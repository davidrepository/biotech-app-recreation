import { LinkProps } from "next/link";
import { ImageProps } from "../ui";

interface Logo extends ImageProps {}

interface FooterNavigationItem extends LinkProps {
  label: string;
}

interface SocialLink {
  href: string;
  name: "linkedin" | "x" | "facebook";
}

export interface FooterData {
  company?: {
    logo: Logo;
  };
  navigation: FooterNavigationItem[];
  copyright: string;
  socials: SocialLink[];
}
