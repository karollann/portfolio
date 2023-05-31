import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.scss";
import "../styles/_react-mutiple-carousel-override.scss";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(App);
