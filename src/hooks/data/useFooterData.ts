import useSWR from "swr";
import { FooterData } from "@/types";
import { FOOTER_DATA_URL } from "@/constants";

export const useFooterData = () => {
  const { data, isLoading, error } = useSWR<FooterData>(FOOTER_DATA_URL);

  return { data, loading: isLoading, error };
};
