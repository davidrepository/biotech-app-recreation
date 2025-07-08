import { recipe } from "@vanilla-extract/recipes";
import { sprinkles as s } from "@/styles";

export const typography = recipe({
  variants: {
    variant: {
      h1: s({
        fontSize: 28,
        lineHeight: 28,
        fontWeight: 600,
      }),
      h2: s({
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 600,
      }),
      h3: s({
        fontSize: 22,
        lineHeight: 22,
        fontWeight: 600,
      }),
      p: s({
        fontSize: 16,
        lineHeight: 28,
      }),
    },
    tone: {
      light: s({
        color: "white",
      }),
    },
  },
  defaultVariants: {
    variant: "p",
  },
});
