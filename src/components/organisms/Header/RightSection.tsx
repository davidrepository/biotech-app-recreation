import { Flex, IconButton, Link, CartButtonWithBadge } from "@/components";
import { useMediaQuery } from "@/hooks";
import {
  faBars,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RightSection = () => {
  const { isTablet } = useMediaQuery();

  return (
    <Flex.Root>
      <IconButton v={{ type: "link" }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </IconButton>

      {isTablet && (
        <>
          <Link href="#" bold>
            Login
          </Link>

          <Link href="#" square noSpacing>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </>
      )}

      <CartButtonWithBadge count={0} />

      {!isTablet && (
        <IconButton v={{ type: "link" }}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
      )}
    </Flex.Root>
  );
};
