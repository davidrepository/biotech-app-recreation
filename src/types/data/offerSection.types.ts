export interface Offer {
  href: string;
  title: string;
  body: string;
}

export interface OfferSectionData {
  heading: string;
  offers: Offer[];
}
