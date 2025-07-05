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
  },
});

const unresposiveProperties = defineProperties({
  properties: {},
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresposiveProperties
);
