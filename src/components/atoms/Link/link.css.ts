import { sprinkles as s } from "@/styles";

const base = s({
  position: "relative",
});

const spacingMedium = s({ p: 16 });
const spacingSmall = s({ py: 12 });
const spacingNone = s({ p: 0 });

const square = s({
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const small = s({
  fontSize: 14,
  lineHeight: 14,
});

const medium = s({
  fontSize: 16,
  lineHeight: 16,
});

const bold = s({
  fontWeight: 600,
});

const dark = s({
  color: {
    light: "gray10",
    dark: "gray10",
    hover: "gray1",
  },
});

const light = s({
  color: {
    light: "white",
    dark: "white",
    hover: "gray10",
  },
});

const withAfterSeparator = s({
  mr: 24,
});

export const linkStyles = {
  base,
  spacingNone,
  spacingSmall,
  spacingMedium,
  square,
  bold,
  withAfterSeparator,
  dark,
  light,
  small,
  medium,
};
