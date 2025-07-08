import NextImage from "next/image";
import { NextImageProps } from "./image.types";
import { Box } from "@/components";

export const Image = ({ ...rest }: NextImageProps) => {
  return <Box as={NextImage} {...rest} />;
};
