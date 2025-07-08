import useSWR from "swr";
import { BlogSectionData } from "@/types";
import { BLOG_SECTION_DATA_URL } from "@/constants";

export const useBlogSectionData = () => {
  const { data, isLoading, error } = useSWR<BlogSectionData>(
    BLOG_SECTION_DATA_URL
  );

  return { data, loading: isLoading, error };
};
