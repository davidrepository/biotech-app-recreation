import { ReactNode } from "react";

export type NavigationListProps = {
  children: ReactNode;
  vertical?: boolean;
};

export type NavigationItemProps = {
  children: ReactNode;
};

export type NavigationRootProps = {
  children: ReactNode;
};
