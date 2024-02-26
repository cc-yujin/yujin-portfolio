import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>한유진 포트폴리오</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
