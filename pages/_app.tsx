import Layout from '@/components/layout/Layout';
import { NotificationContextProvider } from '@/store/notification-context';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>NextJS Events</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
