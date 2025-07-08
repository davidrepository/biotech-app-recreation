"use client";

import { Box } from "@/components";
import { BUTTON_TONE } from "./button.constants";
import { ButtonProps, Tone } from "./button.types";
import { button } from "./button.css";

export const Button = ({
  children,
  as,
  primary,
  secondary,
  tertiary,
  lightGhost,
  darkGhost,
  v,
  ...rest
}: ButtonProps) => {
  const tone: Tone = primary
    ? BUTTON_TONE.PRIMARY
    : secondary
    ? BUTTON_TONE.SECONDARY
    : tertiary
    ? BUTTON_TONE.TERTIARY
    : lightGhost
    ? BUTTON_TONE.LIGHT_GHOST
    : darkGhost
    ? BUTTON_TONE.DARK_GHOST
    : v?.tone;

  const toneOverrides =
    tone === BUTTON_TONE.PRIMARY
      ? { spacingY: "md", spacingX: "md", size: "sm" }
      : tone === BUTTON_TONE.SECONDARY
      ? { spacingY: "sm", size: "sm" }
      : tone === BUTTON_TONE.TERTIARY
      ? { spacingY: "sm", size: "md" }
      : {};

  const vWithTone = { ...v, tone, ...toneOverrides };

  return (
    <Box as={as ?? "button"} recipe={button} v={vWithTone} {...rest}>
      {children}

      {v?.withAfterSeparator && (
        <Box
          s={{
            h: 14,
            w: 1,
            position: "absolute",
            top: "half",
            transform: "-halfY",
            right: "-24",
            bgc: lightGhost ? "gray11" : "black",
          }}
        />
      )}

      {(secondary || tertiary) && (
        <Box
          s={{
            position: "absolute",
            h: 1,
            bottom: 0,
            bgc: secondary ? "gray11" : "white",
            w: "full",
          }}
        />
      )}
    </Box>
  );
};
