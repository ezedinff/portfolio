import React from "react";
import { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../theme/GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
