import { OFFER_SECTION_DATA_URL, OFFER_SECTION_FETCH_ERROR } from "@/constants";
import { OfferSectionData } from "@/types";

export async function getOfferSectionData(): Promise<OfferSectionData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${OFFER_SECTION_DATA_URL}`
  );

  if (!res.ok) throw new Error(OFFER_SECTION_FETCH_ERROR);

  return res.json();
}
