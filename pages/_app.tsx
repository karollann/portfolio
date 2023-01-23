import "../styles/globals.scss";
import "../styles/_react-mutiple-carousel-override.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
