import { LinkProps } from "next/link";
import { ImageProps } from "../ui";

interface ProductImage extends ImageProps {}

interface CTAProps extends LinkProps {
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

export interface ProductSectionData {
  heading: string;
  products: Product[];
}
