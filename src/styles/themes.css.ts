import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
  tv: 1920,
};

const palette = {
  primary: "#0074FF",

  white: "#FFFFFF",
  black: "#000000",

  // Gray scale gained from Radix UI: https://www.radix-ui.com/colors
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
    1: "",
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

    "-24": "",

    half: "",
    full: "",
    auto: "",
  },
  size: {
    1: "",
    16: "",
    30: "",
    48: "",
    160: "",
    240: "",
    420: "",
    1200: "",

    "30%": "",
    "40%": "",

    half: "",
    full: "",
    unset: "",
  },
  fontSize: {
    14: "", // small link, small body
    16: "", // body
    28: "", // h1
    24: "", // h2
    22: "", // h3
    20: "", // h4
  },
  lineHeight: {
    28: "",
    24: "",
    22: "",
    20: "",
    16: "",
    14: "",
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
  transform: {
    "-halfY": "",
  },
  gridTemplateColumns: {
    1: "",
    2: "",
    3: "",
    4: "",
    6: "",
    12: "",
  },
  gridSpan: {
    "2..": "",
    unset: "",
  },
  transition: {
    "200msColorBgc": "",
  },
});

const commonVars = {
  space: {
    0: "0rem",
    1: "0.1rem",
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

    "-24": "-2.4rem",

    half: "50%",
    full: "100%",
    auto: "auto",
  },
  size: {
    1: ".1rem",
    16: "1.6rem",
    30: "3.0rem",
    48: "4.8rem",
    160: "16.0rem",
    240: "24.0rem",
    420: "42.0rem",
    1200: "120rem",

    "30%": "30%",
    "40%": "40%",

    half: "50%",
    full: "100%",
    unset: "unset",
  },
  fontSize: {
    28: "2.8rem", // h1
    24: "2.4rem", // h2
    22: "2.2rem", // h3
    20: "2.0rem", // h4
    16: "1.6rem", // body
    14: "1.4rem", // small link, small body
  },
  lineHeight: {
    28: "2.8rem",
    24: "2.4rem",
    22: "2.2rem",
    20: "2.0rem",
    16: "1.6rem",
    14: "1.4rem",
  },
  fontWeight: {
    400: "400",
    500: "500",
    600: "600",
  },
  transform: {
    "-halfY": "translateY(-50%)",
  },
  gridTemplateColumns: {
    1: "repeat(1, 1fr)",
    2: "repeat(2, 1fr)",
    3: "repeat(3, 1fr)",
    4: "repeat(4, 1fr)",
    6: "repeat(6, 1fr)",
    12: "repeat(12, 1fr)",
  },
  gridSpan: {
    "2..": "2 / -1",
    unset: "unset",
  },
  transition: {
    "200msColorBgc": ".2s color, .2s background",
  },
};

export const lightThemeClass = createTheme(vars, {
  colors: {
    background: colors.white,
    ...colors,
  },
  ...commonVars,
});
