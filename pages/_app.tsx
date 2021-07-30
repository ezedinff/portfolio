import React from "react";
import { AppProps /*, AppContext */ } from 'next/app'
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../theme/GlobalStyles";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Ezedin Fedlu - Software Engineer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
