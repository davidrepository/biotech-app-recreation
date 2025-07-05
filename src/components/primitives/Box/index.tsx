"use client";

import { forwardRef } from "react";
import type { ElementType, ReactNode, CSSProperties } from "react";
import { sprinkles } from "@/styles";
import { combineClassnames } from "@/helpers";
import { RefType } from "@/types";

export interface BoxProps<T extends ElementType = "div"> {
  as?: T;
  v?: any;
  s?: any;
  className?: string;
  styleName?: (v: any) => string | undefined;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: any;
}

export const Box = forwardRef<RefType, BoxProps>((props, ref) => {
  const {
    as: Component = "div",
    v = {},
    s = {},
    className,
    styleName,
    style,
    children,
    ...rest
  } = props;

  const sprinklesClass = sprinkles(s);
  const styleNameClass =
    typeof styleName === "function" ? styleName(v) : undefined;

  return (
    <Component
      ref={ref}
      className={combineClassnames(styleNameClass, sprinklesClass, className)}
      {...rest}
    >
      {children}
    </Component>
  );
});
