import React from "react";
import { GridItemProps, GridRootProps } from "./grid.types";
import { Box } from "@/components/primitives";

const GridRoot = ({ children, s, ...rest }: GridRootProps) => {
  return (
    <Box s={{ display: "grid", ...s }} {...rest}>
      {children}
    </Box>
  );
};

const GridItem = ({ children, ...rest }: GridItemProps) => {
  return <Box {...rest}>{children}</Box>;
};

export const Grid = { Root: GridRoot, Item: GridItem };
