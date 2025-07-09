import NextImage from "next/image";
import { Box } from "@/components";
import { ImageProps } from "./image.types";

export const Image = ({ ...rest }: ImageProps) => {
  return <Box as={NextImage} {...rest} />;
};
