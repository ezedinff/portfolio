import React from "react";
import { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AppComponent = Component as any;
  return (
    <>
       {/* @ts-ignore */ }
      <ThemeProvider theme={theme}>
        <AppComponent {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
