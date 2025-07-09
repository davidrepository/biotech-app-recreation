import { FOOTER_DATA_URL, FOOTER_FETCH_ERROR } from "@/constants";
import { FooterData } from "@/types";

export async function getFooterData(): Promise<FooterData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${FOOTER_DATA_URL}`
  );

  if (!res.ok) throw new Error(FOOTER_FETCH_ERROR);

  return res.json();
}
