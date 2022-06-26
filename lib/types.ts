import type { NextPage } from "next";

export type CustomNextPage = NextPage & {
  PageLayout?: React.ComponentType;
  title?: string;
};

export type WithClassname = {
  className?: string;
};
