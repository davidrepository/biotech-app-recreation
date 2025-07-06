import { Box } from "@/components";
import { FlexItemProps, FlexRootProps } from "./flex.types";

const Item = ({ children, ...rest }: FlexItemProps) => {
  return <Box {...rest}>{children}</Box>;
};

const Root = ({ children, s, ...rest }: FlexRootProps) => {
  return (
    <Box s={{ display: "flex", ...s }} {...rest}>
      {children}
    </Box>
  );
};

export const Flex = {
  Root,
  Item,
};
