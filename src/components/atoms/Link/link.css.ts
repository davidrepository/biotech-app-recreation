import { sprinkles as s } from "@/styles";

const base = s({
  fontSize: 16,
  lineHeight: 16,
  color: {
    light: "gray10",
    dark: "gray10",
    hover: "gray1",
  },
});

const spacingDefault = s({ p: 16 });
const spacingNone = s({ p: 0 });

const square = s({
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const bold = s({
  fontWeight: 600,
});

export const linkStyles = {
  base,
  spacingDefault,
  spacingNone,
  square,
  bold,
};
