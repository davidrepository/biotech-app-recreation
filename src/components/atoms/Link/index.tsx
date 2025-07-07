import NextLink from "next/link";
import { combineClassnames } from "@/helpers";
import { Box } from "@/components";
import { LinkProps } from "./link.types";
import { linkStyles } from "./link.css";

// We're styling <NextLink> directly — no <Box> wrapper or inner <a> tag.
// Since we're not using a recipe prop, styles are split manually here.

function getSpacingClass(noSpacing?: boolean, small?: boolean) {
  if (noSpacing) return linkStyles.spacingNone;
  if (small) return linkStyles.spacingSmall;
  return linkStyles.spacingMedium;
}

export const Link = ({
  square,
  small,
  bold,
  light,
  withAfterSeparator,
  noSpacing,
  children,
  ...rest
}: LinkProps) => {
  return (
    <NextLink
      className={combineClassnames(
        linkStyles.base,
        square && linkStyles.square,
        bold && linkStyles.bold,
        withAfterSeparator && linkStyles.withAfterSeparator,
        light ? linkStyles.light : linkStyles.dark,
        small ? linkStyles.small : linkStyles.medium,
        getSpacingClass(noSpacing, small)
      )}
      {...rest}
    >
      {children}
      {withAfterSeparator && (
        <Box
          s={{
            h: 14,
            w: 1,
            position: "absolute",
            top: "half",
            transform: "-halfY",
            right: "-24",
            bgc: light ? "white" : "black",
          }}
        />
      )}
    </NextLink>
  );
};
