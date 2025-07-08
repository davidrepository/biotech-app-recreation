import { LinkProps } from "next/link";
import { ImageProps } from "../ui";

export interface ProductImage extends ImageProps {}

export interface CTAProps extends LinkProps {
  variant: string;
  body: string;
}

export interface Product {
  href: LinkProps["href"];
  image: ProductImage;
  title: string;
  body: string;
  price?: {
    currency: string;
    from: string;
    to: string;
  };
  cta: CTAProps[];
}

export interface ProductsSectionData {
  heading: string;
  products: Product[];
}
