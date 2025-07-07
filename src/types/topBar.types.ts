export interface TopBarPromo {
  text: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface TopBarLink {
  label: string;
  href: string;
}

export interface TopBarData {
  promo: TopBarPromo;
  linksRight: TopBarLink[];
}
