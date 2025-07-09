import { GROUP_SECTION_DATA_URL, GROUP_SECTION_FETCH_ERROR } from "@/constants";
import { GroupSectionData } from "@/types";

export async function getGroupSectionData(): Promise<GroupSectionData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${GROUP_SECTION_DATA_URL}`
  );

  if (!res.ok) throw new Error(GROUP_SECTION_FETCH_ERROR);

  return res.json();
}
