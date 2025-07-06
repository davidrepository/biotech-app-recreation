import { Button } from "@/components";
import { iconButton } from "./iconButton.css";
import { IconButtonProps } from "./iconButton.types";

export const IconButton = ({ children, ...rest }: IconButtonProps) => {
  return (
    <Button recipe={iconButton} {...rest}>
      {children}
    </Button>
  );
};
