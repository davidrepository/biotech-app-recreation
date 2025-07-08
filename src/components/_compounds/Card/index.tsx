import React from "react";
import { CardImageProps, CardProps } from "./card.types";
import { Box, Image } from "@/components";

const CardRoot = ({ children, ...rest }: CardProps) => {
  return <Box {...rest}>{children}</Box>;
};

const CardImage = ({ src, alt, ...rest }: CardImageProps) => {
  return <Image src={src ?? ""} alt={alt ?? ""} {...rest} />;
};

const CardBody = ({ children, ...rest }: CardProps) => {
  return <Box {...rest}>{children}</Box>;
};

export const Card = { Root: CardRoot, Image: CardImage, Body: CardBody };
