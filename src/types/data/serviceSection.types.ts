import { LinkProps } from "next/link";

export interface Service extends LinkProps {
  title: string;
  body: string;
}

export interface ServiceSectionData {
  heading: string;
  services: Service[];
}
