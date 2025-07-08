import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { transformBreakpoints } from "@/helpers";
import { breakpoints, vars } from "./themes.css";

const responsiveProperties = defineProperties({
  conditions: transformBreakpoints(breakpoints),
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop", "tv"],
  properties: {
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

    justifyContent: ["space-between", "center"],

    alignItems: ["center"],

    flexDirection: ["row", "column"],

    gridTemplateColumns: vars.gridTemplateColumns,
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

    jc: ["justifyContent"],
    ai: ["alignItems"],
    flexd: ["flexDirection"],

    cols: ["gridTemplateColumns"],
  },
});

const unresposiveProperties = defineProperties({
  properties: {
    display: ["block", "flex", "grid"],
    position: ["sticky", "relative", "absolute"],
    cursor: ["pointer"],
    objectFit: ["cover"],

    zIndex: vars.zIndex,
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
