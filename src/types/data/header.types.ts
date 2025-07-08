import { LinkProps } from "next/link";
import { ImageProps } from "../ui";

export interface Logo extends ImageProps {}

export interface NavigationItem extends LinkProps {
  label: string;
}

export interface HeaderData {
  company: {
    logo: Logo;
  };
  navigation: NavigationItem[];
}
