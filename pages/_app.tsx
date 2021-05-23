import 'styles/globals.scss';

// eslint-disable-next-line import/order
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/order
import Head from 'next/head';
import { description, name } from 'package.json';
import type { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
