"use client";

import { Box, Flex } from "@/components";
import {
  NavigationRootProps,
  NavigationListProps,
  NavigationItemProps,
} from "./navigation.types";

const List = ({ vertical, s, children, ...rest }: NavigationListProps) => {
  return (
    <Flex.Root
      as="ul"
      s={{ flexDirection: vertical ? "row" : "column", ...s }}
      {...rest}
    >
      {children}
    </Flex.Root>
  );
};

const Item = ({ children }: NavigationItemProps) => {
  return <Flex.Item as="li">{children}</Flex.Item>;
};

const Root = ({ children }: NavigationRootProps) => {
  return <Box as="nav">{children}</Box>;
};

export const Navigation = {
  List,
  Item,
  Root,
};
