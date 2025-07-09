import { ImageProps } from "../ui";

interface GroupImage extends ImageProps {}

export interface Group {
  image: GroupImage;
  title: string;
  body: string;
}

export interface GroupSectionData {
  heading: string;
  groups: Group[];
}
