import { Link, Card, Lead, P, H3 } from "@/components";
import { ProductProps } from "./productSection.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const ProductCard = ({ productData, ...rest }: ProductProps) => {
  return (
    <Card.Root
      s={{
        gap: [20, 20, 32],
        alignItems: "flex-start",
        flexDirection: ["column", "row"],
      }}
      {...rest}
    >
      <Card.Image
        src={productData?.image.src}
        alt={productData?.image.alt}
        link
        href={productData?.href}
      />
      <Card.Body>
        <Lead.Root s={{ gap: 16 }}>
          <Lead.Head
            s={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Link href={productData?.href}>
              <Lead.Head>
                <H3>{productData?.title}</H3>
              </Lead.Head>
            </Link>
            <Link href="#" v={{ variant: "darkGhost", square: "md" }}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </Lead.Head>
          <Lead.Body s={{ color: "gray10" }}>
            <P>{productData?.body}</P>
          </Lead.Body>
          <Lead.CTA s={{ gap: 20, alignItems: "center" }}>
            {productData?.cta.map((item, index) => (
              <Link href={item.href} key={index} v={{ variant: item.variant }}>
                {item.body}
              </Link>
            ))}
          </Lead.CTA>
        </Lead.Root>
      </Card.Body>
    </Card.Root>
  );
};
