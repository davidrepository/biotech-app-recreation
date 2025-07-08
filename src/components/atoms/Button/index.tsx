"use client";

import { Box } from "@/components";
import { BUTTON_TONE } from "./button.constants";
import { ButtonProps } from "./button.types";
import { button } from "./button.css";

export const Button = ({ children, as, v, ...rest }: ButtonProps) => {
  return (
    <Box as={as ?? "button"} recipe={button} v={v} {...rest}>
      {children}

      {v?.withAfterSeparator && (
        <Box
          s={{
            h: 16,
            w: 1,
            position: "absolute",
            top: "half",
            transform: "-halfY",
            right: "-24",
            bgc: v?.variant === BUTTON_TONE.LIGHT_GHOST ? "gray11" : "black",
          }}
        />
      )}

      {[BUTTON_TONE.SECONDARY, BUTTON_TONE.TERTIARY].includes(v?.variant) && (
        <Box
          s={{
            position: "absolute",
            h: 1,
            bottom: 0,
            bgc: v?.variant === BUTTON_TONE.SECONDARY ? "gray11" : "white",
            w: "full",
          }}
        />
      )}
    </Box>
  );
};
