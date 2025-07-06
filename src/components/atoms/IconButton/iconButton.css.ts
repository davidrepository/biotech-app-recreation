import { recipe } from "@vanilla-extract/recipes";
import { sprinkles as s } from "@/styles";

export const iconButton = recipe({
  base: s({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }),
  variants: {
    square: {
      48: s({
        h: 48,
        w: 48,
      }),
    },
    type: {
      link: s({
        color: {
          light: "gray10",
          dark: "gray10",
          hover: "gray1",
        },
      }),
    },
  },
  defaultVariants: {
    square: 48,
  },
});
