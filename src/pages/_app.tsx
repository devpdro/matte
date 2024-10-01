import type { AppProps } from "next/app";

import { Global, ThemeProvider } from "@emotion/react";

import GlobalStyle from "src/presentation/styles/global";
import lightTheme from "src/presentation/styles/themes/light";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
