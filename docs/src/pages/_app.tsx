import '@/assets/index.scss';
import { ColorThemeElements } from '@/components/Color';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Provider
    //   themeProvider={{
    //     initialTheme: 'system',
    //   }}
    // >
    <>
      <Component {...pageProps} />
      <ColorThemeElements />
    </>
    // </Provider>
  );
}
