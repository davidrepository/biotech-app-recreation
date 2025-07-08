import { recipe } from "@vanilla-extract/recipes";
import { sprinkles as s } from "@/styles";

export const button = recipe({
  base: s({
    position: "relative",
    cursor: "pointer",
  }),
  variants: {
    size: {
      sm: s({ fontSize: 14, lineHeight: 14 }),
      md: s({ fontSize: 16, lineHeight: 16 }),
    },
    spacingY: {
      none: s({ py: 0 }),
      sm: s({ py: 12 }),
      md: s({ py: 16 }),
    },
    spacingX: {
      none: s({ px: 0 }),
      sm: s({ px: 12 }),
      md: s({ px: 16 }),
    },
    square: {
      md: s({
        width: 48,
        height: 48,
        display: "flex",
        jc: "center",
        ai: "center",
      }),
    },
    tone: {
      primary: s({
        bgc: {
          light: "gray1",
          dark: "gray1",
        },
        color: {
          light: "white",
          dark: "white",
        },
      }),
      secondary: s({
        color: {
          light: "black",
          dark: "black",
        },
      }),
      tertiary: s({
        color: {
          light: "primary",
          dark: "primary",
          hover: "gray10",
        },
      }),
      lightGhost: s({
        color: {
          light: "gray11",
          dark: "gray11",
          hover: "gray10",
        },
      }),
      darkGhost: s({
        color: {
          light: "gray10",
          dark: "gray10",
          hover: "gray1",
        },
      }),
    },
    weight: {
      bold: s({ fontWeight: 600 }),
    },
    withAfterSeparator: {
      true: s({ mr: 24 }),
      false: {},
    },
  },
});
