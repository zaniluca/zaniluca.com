import type { NextPage } from "next";

export type CustomNextPage<P = {}> = NextPage<P> & {
  PageLayout?: React.ComponentType;
  title?: string;
};

export type WithClassname = {
  className?: string;
};
