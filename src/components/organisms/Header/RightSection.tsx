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
      <Button darkGhost v={{ square: "md" }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>

      {isLaptop && (
        <>
          <Link
            href="#"
            darkGhost
            v={{
              spacingY: "md",
              spacingX: "md",
              weight: "bold",
            }}
          >
            Login
          </Link>

          <Link href="#" darkGhost v={{ square: "md" }}>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </>
      )}

      <CartButtonWithBadge count={0} />

      {!isLaptop && (
        <Button darkGhost v={{ square: "md" }}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      )}
    </Flex.Root>
  );
};
