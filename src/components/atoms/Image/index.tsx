import NextImage from "next/image";
import { NextImageProps } from "./image.types";

export const Image = ({ ...rest }: NextImageProps) => {
  return <NextImage {...rest} />;
};
