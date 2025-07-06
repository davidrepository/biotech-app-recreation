import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const breakpoints = {
  mobile: 0,
  tablet: 1100,
  desktop: 1500,
  tv: 2100,
};

const palette = {
  primary: "#0074FF",

  white: "#FFFFFF",
  black: "#000000",

  gray1: "#111111",
  gray2: "#191919",
  gray3: "#222222",
  gray4: "#2A2A2A",
  gray5: "#313131",
  gray6: "#3A3A3A",
  gray7: "#484848",
  gray8: "#606060",
  gray9: "#6E6E6E",
  gray10: "#7B7B7B",
  gray11: "#B4B4B4",
  gray12: "#EEEEEE",
};

const colors = {
  transparent: "transparent",
  ...palette,
};

export const vars = createThemeContract({
  space: {
    0: "",
    2: "",
    4: "",
    6: "",
    8: "",
    10: "",
    12: "",
    14: "",
    16: "",
    18: "",
    20: "",
    24: "",
    28: "",
    32: "",
    36: "",
    40: "",
    50: "",
    60: "",
    70: "",
    80: "",
    90: "",
    100: "",
    120: "",
    140: "",
    160: "",
    180: "",
    200: "",
    240: "",
    280: "",
    300: "",

    auto: "",
  },
  size: {
    48: "",
    1200: "",
    full: "",
  },
  fontSize: {
    16: "",
  },
  lineHeight: {
    16: "",
  },
  fontWeight: {
    400: "",
    500: "",
    600: "",
  },
  colors: {
    primary: "",

    background: "",
    transparent: "",

    white: "",
    black: "",

    gray1: "",
    gray2: "",
    gray3: "",
    gray4: "",
    gray5: "",
    gray6: "",
    gray7: "",
    gray8: "",
    gray9: "",
    gray10: "",
    gray11: "",
    gray12: "",
  },
});

const commonVars = {
  space: {
    0: "0rem",
    2: "0.2rem",
    4: "0.4rem",
    6: "0.6rem",
    8: "0.8rem",
    10: "1rem",
    12: "1.2rem",
    14: "1.4rem",
    16: "1.6rem",
    18: "1.8rem",
    20: "2rem",
    24: "2.4rem",
    28: "2.8rem",
    32: "3.2rem",
    36: "3.6rem",
    40: "4rem",
    50: "5rem",
    60: "6rem",
    70: "7rem",
    80: "8rem",
    90: "9rem",
    100: "10rem",
    120: "12rem",
    140: "14rem",
    160: "16rem",
    180: "18rem",
    200: "20rem",
    240: "24rem",
    280: "28rem",
    300: "30rem",

    auto: "auto",
  },
  size: {
    48: "4.8rem",
    1200: "120rem",

    full: "100%",
  },
  fontSize: {
    16: "1.6rem",
  },
  lineHeight: {
    16: "1.6rem",
  },
  fontWeight: {
    400: "400",
    500: "500",
    600: "600",
  },
};

export const lightThemeClass = createTheme(vars, {
  colors: {
    background: colors.white,
    ...colors,
  },
  ...commonVars,
});
