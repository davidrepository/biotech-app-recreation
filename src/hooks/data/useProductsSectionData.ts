import useSWR from "swr";
import { ProductsSectionData } from "@/types";
import { PRODUCTS_SECTION_DATA_URL } from "@/constants";

export const useProductsSectionData = () => {
  const { data, isLoading, error } = useSWR<ProductsSectionData>(
    PRODUCTS_SECTION_DATA_URL
  );

  return { data, loading: isLoading, error };
};
