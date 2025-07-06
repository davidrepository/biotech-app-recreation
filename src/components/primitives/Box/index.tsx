"use client";

import { forwardRef } from "react";
import { sprinkles } from "@/styles";
import { combineClassnames } from "@/helpers";
import { RefType } from "@/types";
import { BoxProps } from "./box.types";

export const Box = forwardRef<RefType, BoxProps>((props, ref) => {
  const {
    as: Component = "div",
    v = {},
    s = {},
    recipe,
    className,
    children,
    ...rest
  } = props;

  const sprinklesClass = sprinkles(s);
  const recipeClass = typeof recipe === "function" ? recipe(v) : undefined;

  return (
    <Component
      ref={ref}
      className={combineClassnames(recipeClass, sprinklesClass, className)}
      {...rest}
    >
      {children}
    </Component>
  );
});
