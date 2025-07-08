import { LinkProps } from "next/link";

export interface Offer extends LinkProps {
  title: string;
  body: string;
}

export interface OfferSectionData {
  heading: string;
  offers: Offer[];
}
