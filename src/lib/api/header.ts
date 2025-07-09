import { HEADER_DATA_URL, HEADER_FETCH_ERROR } from "@/constants";
import { HeaderData } from "@/types";

export async function getHeaderData(): Promise<HeaderData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${HEADER_DATA_URL}`
  );

  if (!res.ok) throw new Error(HEADER_FETCH_ERROR);

  return res.json();
}
