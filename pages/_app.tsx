import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { appWithI18Next } from "ni18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { CustomNextPage } from "../lib/types";
import { ni18nConfig } from "../ni18n.config";
import "../styles/globals.css";

type CustomAppProps = AppProps & {
  Component: AppProps["Component"] & CustomNextPage;
};

function App({ Component, pageProps }: CustomAppProps) {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    // i18n.changeLanguage(router.locale);
  }, [router.locale]);

  return (
    <>
      <Head>
        <title>{Component.title ? Component.title + " ― " : ""}Zani Luca</title>
      </Head>
      {/* {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : ( */}
      <Component {...pageProps} />
      {/* )} */}
    </>
  );
}

export default appWithI18Next(App, ni18nConfig);
