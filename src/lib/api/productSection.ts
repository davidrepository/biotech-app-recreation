import {
  PRODUCT_SECTION_DATA_URL,
  PRODUCT_SECTION_FETCH_ERROR,
} from "@/constants";
import { ProductSectionData } from "@/types";

export async function getProductSectionData(): Promise<ProductSectionData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${PRODUCT_SECTION_DATA_URL}`
  );

  if (!res.ok) throw new Error(PRODUCT_SECTION_FETCH_ERROR);

  return res.json();
}
