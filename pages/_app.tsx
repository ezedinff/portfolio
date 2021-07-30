import React from "react";
import { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../theme/GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
       {/* @ts-ignore */ }
      <ThemeProvider theme={theme}>
        <GlobalStyle bp={theme.bp} mixins={theme.mixins} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
