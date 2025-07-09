import { TOPBAR_DATA_URL, TOPBAR_FETCH_ERROR } from "@/constants";
import { TopBarData } from "@/types";

export async function getTopBarData(): Promise<TopBarData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${TOPBAR_DATA_URL}`
  );

  if (!res.ok) throw new Error(TOPBAR_FETCH_ERROR);

  return res.json();
}
