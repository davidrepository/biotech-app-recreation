import React from "react";
import { CardImageProps, CardProps } from "./card.types";
import { Box, Flex, Image, Link } from "@/components";

const CardRoot = ({ children, ...rest }: CardProps) => {
  return <Flex.Root {...rest}>{children}</Flex.Root>;
};

const CardImage = ({
  src,
  alt,
  link,
  full,
  href = "#",
  s,
  ...rest
}: CardImageProps) => {
  return (
    <Box
      s={{
        w: full ? ["full"] : ["full", "40%", "30%"],
        maxw: ["unset", 420],
        position: "relative",
        aspectRatio: "1/1",
        flexShrink: 0,
        ...s,
      }}
    >
      {link ? (
        <Link href={href} s={{ display: "block", w: "full", h: "full" }}>
          <Image src={src ?? ""} alt={alt ?? ""} fill {...rest} />
        </Link>
      ) : (
        <Image src={src ?? ""} alt={alt ?? ""} fill {...rest} />
      )}
    </Box>
  );
};

const CardBody = ({ children, ...rest }: CardProps) => {
  return <Box {...rest}>{children}</Box>;
};

export const Card = { Root: CardRoot, Image: CardImage, Body: CardBody };
