import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { transformBreakpoints } from "@/helpers";
import { breakpoints, vars } from "./themes.css";

const responsiveProperties = defineProperties({
  conditions: transformBreakpoints(breakpoints),
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop", "tv"],
  properties: {
    position: ["sticky", "relative", "absolute", "unset"],

    gap: vars.space,

    paddingTop: vars.space,
    paddingRight: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,

    marginTop: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,

    top: vars.space,
    right: vars.space,
    bottom: vars.space,
    left: vars.space,

    width: vars.size,
    minWidth: vars.size,
    maxWidth: vars.size,

    height: vars.size,
    minHeight: vars.size,
    maxHeight: vars.size,

    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    fontWeight: vars.fontWeight,

    transform: vars.transform,

    gridTemplateColumns: vars.gridTemplateColumns,
    gridColumn: vars.gridSpan,

    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexShrink: [0],
    flexWrap: ["wrap"],

    alignItems: ["flex-start", "center", "flex-end"],
    justifyContent: ["flex-start", "center", "flex-end", "space-between"],

    aspectRatio: ["1/1"],

    textAlign: ["left", "center"],
  },
  shorthands: {
    p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],

    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],

    w: ["width"],
    minw: ["minWidth"],
    maxw: ["maxWidth"],

    h: ["height"],
    minh: ["minHeight"],
    maxh: ["maxHeight"],

    cols: ["gridTemplateColumns"],
    spanx: ["gridColumn"],
  },
});

const unresposiveProperties = defineProperties({
  properties: {
    display: ["block", "flex", "grid"],
    cursor: ["pointer"],
    objectFit: ["cover"],
    zIndex: ["-1", 2],
    transition: vars.transition,
  },
});

const colorProperties = defineProperties({
  conditions: {
    light: { "@media": "(prefers-color-scheme: light)" },
    dark: { "@media": "(prefers-color-scheme: dark)" },
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    placeholder: { selector: "&::placeholder" },
  },
  defaultCondition: ["light", "dark"],
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
  },
  shorthands: {
    bgc: ["backgroundColor"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresposiveProperties,
  colorProperties
);
