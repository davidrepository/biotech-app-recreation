import NextImage from "next/image";
import { ImageProps } from "./image.types";
import { Box } from "@/components";

export const Image = ({ ...rest }: ImageProps) => {
  return <Box as={NextImage} {...rest} />;
};
