import type { AppProps } from 'next/app';
import { NotificationContextProvider } from '@/context/notification-context';

import Head from 'next/head';
import Layout from '../components/Layout';

import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          {/* If we add key, Next.js won't override with
        the same name on other page */}
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
