import useSWR from "swr";
import { OfferSectionData } from "@/types";
import { OFFER_SECTION_DATA_URL } from "@/constants";

export const useOfferSectionData = () => {
  const { data, isLoading, error } = useSWR<OfferSectionData>(
    OFFER_SECTION_DATA_URL
  );

  return { data, loading: isLoading, error };
};
