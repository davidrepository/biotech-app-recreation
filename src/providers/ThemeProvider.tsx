"use client";

import { Inter } from "next/font/google";
import { Box } from "@/components";
import { combineClassnames } from "@/helpers";
import { lightThemeClass } from "@/styles";

const inter = Inter({ subsets: ["latin"] });

interface ThemeProviderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children, ...rest }: ThemeProviderProps) => {
  return (
    <Box
      as="main"
      className={combineClassnames(inter.className, lightThemeClass)}
      {...rest}
    >
      {children}
    </Box>
  );
};
