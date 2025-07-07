"use client";

import { SWRConfig } from "swr";
import { fetcher } from "@/lib";
import { DataProviderProps } from "./providers.types";

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
