import { HERO_SECTION_DATA_URL, HERO_SECTION_FETCH_ERROR } from "@/constants";
import { HeroSectionData } from "@/types";

export async function getHeroSectionData(): Promise<HeroSectionData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${HERO_SECTION_DATA_URL}`
  );

  if (!res.ok) throw new Error(HERO_SECTION_FETCH_ERROR);

  return res.json();
}
