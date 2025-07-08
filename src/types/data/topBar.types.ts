import { LinkProps } from "next/link";

export interface CTAProps extends LinkProps {
  label: string;
}

export interface TopBarPromo {
  text: string;
  cta: CTAProps;
}

export interface TopBarLink extends LinkProps {
  label: string;
}

export interface TopBarData {
  promo: TopBarPromo;
  linksRight: TopBarLink[];
}
