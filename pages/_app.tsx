// eslint-disable-next-line import/order
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/order
import Head from 'next/head';
import { description, name } from 'package.json';
// eslint-disable-next-line import/order
import type { ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
