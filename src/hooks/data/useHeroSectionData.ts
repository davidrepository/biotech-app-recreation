import useSWR from "swr";
import { HeroSectionData } from "@/types/data/heroSection.types";
import { HERO_SECTION_DATA_URL } from "@/constants";

export const useHeroSectionData = () => {
  const { data, isLoading, error } = useSWR<HeroSectionData>(
    HERO_SECTION_DATA_URL
  );

  return { data, loading: isLoading, error };
};
