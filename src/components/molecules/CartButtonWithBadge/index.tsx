import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Box, Button } from "@/components";
import { CartButtonWithBadgeProps } from "./cartButtonWithBadge.types";

export const CartButtonWithBadge = ({ count }: CartButtonWithBadgeProps) => {
  return (
    <Button darkGhost v={{ square: "md" }}>
      <FontAwesomeIcon icon={faCartShopping} />
      <Box
        s={{
          position: "absolute",
          top: 4,
          right: 4,
          color: "primary",
          fontWeight: 600,
        }}
      >
        {count}
      </Box>
    </Button>
  );
};
