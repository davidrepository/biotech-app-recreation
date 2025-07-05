import useSWR from "swr";
import type { HeaderData } from "@/types";
import { HEADER_DATA_URL } from "@/constants/apiPaths";

export const useHeaderData = () => {
  const { data, isLoading, error } = useSWR<HeaderData>(HEADER_DATA_URL);

  return { data, loading: isLoading, error };
};
