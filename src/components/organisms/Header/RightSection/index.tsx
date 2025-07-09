import { Flex, Link, CartButtonWithBadge, Button } from "@/components";
import { useMediaQuery } from "@/hooks";
import {
  faBars,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RightSection = () => {
  const { isLaptop } = useMediaQuery();

  return (
    <Flex.Root>
      <Button v={{ variant: "darkGhost", square: "md" }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>

      {isLaptop && (
        <>
          <Link
            href="#"
            v={{
              variant: "darkGhost",
              weight: "bold",
            }}
          >
            Login
          </Link>

          <Link href="#" v={{ variant: "darkGhost", square: "md" }}>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </>
      )}

      <CartButtonWithBadge count={0} />

      {!isLaptop && (
        <Button v={{ variant: "darkGhost", square: "md" }}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      )}
    </Flex.Root>
  );
};
