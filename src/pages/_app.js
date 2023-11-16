import "../assets/scss/global.css";
import "../assets/scss/main.scss";
import "../assets/scss/georgina.scss";
import "../assets/scss/christelle.scss";
import "../assets/scss/gaelle.scss";

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>The winner's circle by Racing League</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Page description" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <main className="bg-gray_1">
        <Component {...pageProps} />
      </main>
    </>
  );
}
