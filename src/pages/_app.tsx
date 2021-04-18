import { AppProps } from 'next/app';

import Index from '../components/layout';

import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Index>
      <Component {...pageProps} />
    </Index>
  );
}

export default MyApp;
