import { Box } from "@/components/primitives";
import { TypographyProps } from "./typography.types";
import { typography } from "./typography.css";
import { Flex } from "@/components/_compounds";

const Typography = ({ children, ...rest }: TypographyProps) => {
  return (
    <Box recipe={typography} {...rest}>
      {children}
    </Box>
  );
};

export const H1 = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Typography as="h1" v={{ variant: "h1", ...v }} {...rest}>
      {children}
    </Typography>
  );
};

export const H2 = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Typography as="h2" v={{ variant: "h2", ...v }} {...rest}>
      {children}
    </Typography>
  );
};

export const H3 = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Typography as="h3" v={{ variant: "h3", ...v }} {...rest}>
      {children}
    </Typography>
  );
};

export const P = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Typography as="p" v={{ variant: "p", ...v }} {...rest}>
      {children}
    </Typography>
  );
};

export const Caption = ({
  withDash,
  v,
  children,
  ...rest
}: TypographyProps) => {
  return withDash ? (
    <Flex.Root s={{ alignItems: "center", gap: 8 }}>
      <Box s={{ h: 1, w: 30, bgc: "gray10" }} />
      <Typography as="span" v={{ variant: "caption", ...v }} {...rest}>
        {children}
      </Typography>
    </Flex.Root>
  ) : (
    <Typography as="span" v={{ variant: "caption", ...v }} {...rest}>
      {children}
    </Typography>
  );
};
