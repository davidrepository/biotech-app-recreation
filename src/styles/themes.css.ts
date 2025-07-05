import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const breakpoints = {
  mobile: 0,
  tablet: 600,
  desktop: 1200,
  tv: 1800,
};

const whiteness = {
  white: "#FFFFFF",
};

const blackness = {
  black: "#000000",
};

const colors = {
  transparent: "transparent",
  ...whiteness,
  ...blackness,
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
  },
  colors: {
    background: "",
    transparent: "",
    white: "",
    black: "",
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
  },
};

export const lightThemeClass = createTheme(vars, {
  colors: {
    background: colors.white,
    ...colors,
  },
  ...commonVars,
});
