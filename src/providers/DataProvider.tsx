"use client";

import type { ReactNode } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib";

export interface DataProviderProps {
  children: ReactNode;
  fallback?: Record<string, any>;
}

export const DataProvider = ({ children, fallback }: DataProviderProps) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        fallback,
      }}
    >
      {children}
    </SWRConfig>
  );
};
