import useSWR from "swr";
import { TOPBAR_DATA_URL } from "@/constants";
import { TopBarData } from "@/types";

export const useTopBarData = () => {
  const { data, isLoading, error } = useSWR<TopBarData>(TOPBAR_DATA_URL);

  return { data, loading: isLoading, error };
};
