import React from "react";
import { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
       {/* @ts-ignore */ }
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
