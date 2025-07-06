"use client";

import { Box, Flex } from "@/components";
import {
  NavigationRootProps,
  NavigationListProps,
  NavigationItemProps,
} from "./navigation.types";

const List = ({ children, vertical }: NavigationListProps) => {
  return (
    <Flex.Root as="ul" s={{ flexd: vertical ? "row" : "column" }}>
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
