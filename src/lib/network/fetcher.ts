import { DATA_FETCH_ERROR } from "@/constants";

export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) throw new Error(`${DATA_FETCH_ERROR}: ${res.statusText}`);

  return res.json();
};
