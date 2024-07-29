import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>APP</h1>
      <Component {...pageProps} />
    </>
  );
}
