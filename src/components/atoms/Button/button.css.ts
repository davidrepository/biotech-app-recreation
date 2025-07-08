import { recipe } from "@vanilla-extract/recipes";
import { sprinkles as s } from "@/styles";

export const button = recipe({
  base: s({
    position: "relative",
    cursor: "pointer",
    transition: "200msColorBgc",
  }),
  variants: {
    variant: {
      primary: s({
        fontSize: 14,
        lineHeight: 14,
        py: 12,
        px: 20,
        color: {
          light: "white",
          dark: "white",
        },
        bgc: {
          light: "gray1",
          dark: "gray1",
          hover: "gray7",
        },
      }),
      secondary: s({
        fontSize: 14,
        lineHeight: 14,
        py: 4,
        color: {
          light: "black",
          dark: "black",
          hover: "primary",
        },
      }),
      tertiary: s({
        fontSize: 16,
        lineHeight: 16,
        py: 8,
        color: {
          light: "primary",
          dark: "primary",
          hover: "gray10",
        },
      }),
      lightGhost: s({
        fontSize: 14,
        lineHeight: 14,
        py: 16,
        color: {
          light: "gray11",
          dark: "gray11",
          hover: "gray10",
        },
      }),
      darkGhost: s({
        fontSize: 16,
        lineHeight: 16,
        py: 16,
        color: {
          light: "gray10",
          dark: "gray10",
          hover: "gray1",
        },
      }),
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
    weight: {
      bold: s({ fontWeight: 600 }),
    },
    withAfterSeparator: {
      true: s({ mr: 24 }),
      false: {},
    },
  },
});
