import { ReactNode } from "react";

export interface TitleProps {
  size: "h1" | "h2" | "h3";
  children: ReactNode;
}
