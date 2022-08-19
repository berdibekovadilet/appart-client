import { ReactNode } from "react";

export interface TitleProps {
  title: "h1" | "h2" | "h3";
  children: ReactNode;
}
