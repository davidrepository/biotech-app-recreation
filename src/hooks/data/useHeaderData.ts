import useSWR from "swr";
import { HeaderData } from "@/types";
import { HEADER_DATA_URL } from "@/constants";

export const useHeaderData = () => {
  const { data, isLoading, error } = useSWR<HeaderData>(HEADER_DATA_URL);

  return { data, loading: isLoading, error };
};
