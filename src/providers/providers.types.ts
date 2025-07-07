import { ReactNode } from "react";

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface DataProviderProps {
  children: ReactNode;
  fallback?: Record<string, any>;
}
