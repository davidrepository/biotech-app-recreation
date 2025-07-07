export interface Logo {
  src: string;
  alt: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderData {
  company: {
    logo: Logo;
  };
  navigation: NavigationItem[];
}
