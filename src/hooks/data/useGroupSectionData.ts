import useSWR from "swr";
import { GroupSectionData } from "@/types";
import { GROUP_SECTION_DATA_URL } from "@/constants";

export const useGroupSectionData = () => {
  const { data, isLoading, error } = useSWR<GroupSectionData>(
    GROUP_SECTION_DATA_URL
  );

  return { data, loading: isLoading, error };
};
