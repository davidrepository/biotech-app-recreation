"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/styles";
import { MediaQueryMatches } from "./useMediaQuery.types";

export const useMediaQuery = (): MediaQueryMatches => {
  const [matches, setMatches] = useState<MediaQueryMatches>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isWide: false,
    isTV: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const queries: Record<keyof MediaQueryMatches, MediaQueryList> = {
      isMobile: window.matchMedia(`(min-width: ${breakpoints.mobile}px)`),
      isTablet: window.matchMedia(`(min-width: ${breakpoints.tablet}px)`),
      isLaptop: window.matchMedia(`(min-width: ${breakpoints.laptop}px)`),
      isDesktop: window.matchMedia(`(min-width: ${breakpoints.desktop}px)`),
      isWide: window.matchMedia(`(min-width: ${breakpoints.wide}px)`),
      isTV: window.matchMedia(`(min-width: ${breakpoints.tv}px)`),
    };

    const updateMatches = () => {
      setMatches({
        isMobile: queries.isMobile.matches,
        isTablet: queries.isTablet.matches,
        isLaptop: queries.isLaptop.matches,
        isDesktop: queries.isDesktop.matches,
        isWide: queries.isWide.matches,
        isTV: queries.isTV.matches,
      });
    };

    updateMatches();

    Object.values(queries).forEach((mq) =>
      mq.addEventListener("change", updateMatches)
    );

    return () => {
      Object.values(queries).forEach((mq) =>
        mq.removeEventListener("change", updateMatches)
      );
    };
  }, []);

  return matches;
};
