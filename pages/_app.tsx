import "../styles/globals.css";
import "../lib/i18n/config";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  return <Component {...pageProps} />;
}

export default App;
