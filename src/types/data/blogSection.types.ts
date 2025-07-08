import { LinkProps } from "next/link";
import { ImageProps } from "../ui";

interface ProductImage extends ImageProps {}

export interface Blog {
  href: LinkProps["href"];
  image: ProductImage;
  title: string;
  body: string;
  date: string;
}

export interface BlogSectionData {
  heading: string;
  blogs: Blog[];
}
