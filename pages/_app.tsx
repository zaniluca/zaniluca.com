import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { appWithI18Next } from "ni18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ni18nConfig } from "../ni18n.config";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  return <Component {...pageProps} />;
}

export default appWithI18Next(App, ni18nConfig);
