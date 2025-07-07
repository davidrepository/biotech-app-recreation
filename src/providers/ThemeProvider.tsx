"use client";

import { Roboto } from "next/font/google";
import { Box } from "@/components";
import { combineClassnames } from "@/helpers";
import { lightThemeClass } from "@/styles";
import { ThemeProviderProps } from "./providers.types";

const roboto = Roboto({ subsets: ["latin"] });

export const ThemeProvider = ({ children, ...rest }: ThemeProviderProps) => {
  return (
    <Box
      as="main"
      className={combineClassnames(roboto.className, lightThemeClass)}
      {...rest}
    >
      {children}
    </Box>
  );
};
