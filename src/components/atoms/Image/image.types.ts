import { ImageProps as NextImageProps } from "next/image";
import { BoxProps } from "@/types";

export interface ImageProps extends NextImageProps, BoxProps {}
