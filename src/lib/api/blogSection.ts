import { BLOG_SECTION_DATA_URL, BLOG_SECTION_FETCH_ERROR } from "@/constants";
import { BlogSectionData } from "@/types";

export async function getBlogSectionData(): Promise<BlogSectionData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${BLOG_SECTION_DATA_URL}`
  );

  if (!res.ok) throw new Error(BLOG_SECTION_FETCH_ERROR);

  return res.json();
}
