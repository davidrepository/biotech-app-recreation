import { Box, Container } from "@/components";

const Sep = () => <Box s={{ h: 1, w: "full", bgc: "gray12" }} />;

export const Separator = ({ withContainer }: any) => {
  return withContainer ? (
    <Container.Root>
      <Sep />
    </Container.Root>
  ) : (
    <Sep />
  );
};
