import "../styles/globals.css";
import "../lib/i18n/config";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
