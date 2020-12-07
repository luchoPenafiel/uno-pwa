import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../components/GlobalStyles';
import theme from '../constants/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    // Removes the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>UNO</title>
        <meta
          name="viewport"
          content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
