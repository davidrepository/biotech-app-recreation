import useSWR from "swr";
import { ServiceSectionData } from "@/types";
import { SERVICE_SECTION_DATA_URL } from "@/constants";

export const useServiceSectionData = () => {
  const { data, isLoading, error } = useSWR<ServiceSectionData>(
    SERVICE_SECTION_DATA_URL
  );

  return { data, loading: isLoading, error };
};
