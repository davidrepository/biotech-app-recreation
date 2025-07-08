import { Box, Container } from "@/components";
import { SeparatorProps } from "./separator.types";

const Sep = ({ ...rest }: SeparatorProps) => (
  <Box s={{ h: 1, w: "full", bgc: "gray12" }} {...rest} />
);

export const Separator = ({ withContainer, ...rest }: SeparatorProps) => {
  return withContainer ? (
    <Container.Root>
      <Sep {...rest} />
    </Container.Root>
  ) : (
    <Sep {...rest} />
  );
};
