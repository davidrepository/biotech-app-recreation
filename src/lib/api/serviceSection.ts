import {
  SERVICE_SECTION_DATA_URL,
  SERVICE_SECTION_FETCH_ERROR,
} from "@/constants";
import { ServiceSectionData } from "@/types";

export async function getServiceSectionData(): Promise<ServiceSectionData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${SERVICE_SECTION_DATA_URL}`
  );

  if (!res.ok) throw new Error(SERVICE_SECTION_FETCH_ERROR);

  return res.json();
}
