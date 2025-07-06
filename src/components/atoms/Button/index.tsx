import { Box } from "@/components";
import { ButtonProps } from "./button.types";

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Box as="button" type="button" {...rest}>
      {children}
    </Box>
  );
};
