import useSWR from "swr";
import { ProductSectionData } from "@/types";
import { PRODUCT_SECTION_DATA_URL } from "@/constants";

export const useProductSectionData = () => {
  const { data, isLoading, error } = useSWR<ProductSectionData>(
    PRODUCT_SECTION_DATA_URL
  );

  return { data, loading: isLoading, error };
};
