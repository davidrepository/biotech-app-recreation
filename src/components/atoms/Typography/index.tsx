import { Box } from "@/components/primitives";
import { TypographyProps } from "./typography.types";
import { typography } from "./typography.css";

export const H1 = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Box as="h1" recipe={typography} v={{ variant: "h1", ...v }} {...rest}>
      {children}
    </Box>
  );
};

export const H2 = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Box as="h2" recipe={typography} v={{ variant: "h2", ...v }} {...rest}>
      {children}
    </Box>
  );
};

export const H3 = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Box as="h3" recipe={typography} v={{ variant: "h3", ...v }} {...rest}>
      {children}
    </Box>
  );
};

export const P = ({ children, v, ...rest }: TypographyProps) => {
  return (
    <Box as="p" recipe={typography} v={{ variant: "p", ...v }} {...rest}>
      {children}
    </Box>
  );
};
