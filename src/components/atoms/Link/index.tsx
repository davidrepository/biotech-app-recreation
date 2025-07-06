import NextLink from "next/link";
import { combineClassnames } from "@/helpers";
import { LinkProps } from "./link.types";
import { linkStyles } from "./link.css";

// We're styling <NextLink> directly — no <Box> wrapper or inner <a> tag.
// Since we're not using a recipe prop, styles are split manually here.

export const Link = ({ square, bold, v, children, ...rest }: LinkProps) => {
  return (
    <NextLink
      className={combineClassnames(
        linkStyles.base,
        v?.spacing === "none"
          ? linkStyles.spacingNone
          : linkStyles.spacingDefault,
        square && linkStyles.square,
        bold && linkStyles.bold
      )}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
