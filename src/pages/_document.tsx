import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; // Import Script from Next.js

import { AppConfig } from "../utils/AppConfig";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Your description here" />
          <meta
            name="facebook-domain-verification"
            content="y4h5hh2ev0bzn0viktbgxztfyydh7b"
          />
          <meta
            name="google-site-verification"
            content="XPJY17UFsaQkd4B969Nqw6gnnM-5BSgLNZPRXjavlb8"
          />

          {/* Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-RH60V2NCF3"
          ></Script>
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RH60V2NCF3');
            `}
          </Script>

          {/* Calendly Widget */}
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload" // Lazy loading to improve performance
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
