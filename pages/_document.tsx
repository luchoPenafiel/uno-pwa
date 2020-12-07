/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement } from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import getConfig from 'next/config';

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    const { BASE_URL } = getConfig().publicRuntimeConfig;

    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          <meta name="description" content="¡La primera webapp para contar los puntos del UNO!" />

          <link rel="apple-touch-icon" sizes="180x180" href={`${BASE_URL}/favicon/apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${BASE_URL}/favicon/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${BASE_URL}/favicon/favicon-16x16.png`} />
          <link rel="manifest" href={`${BASE_URL}/webmanifest.json`} />
          <link rel="mask-icon" href={`${BASE_URL}/favicon/safari-pinned-tab.svg`} color="#000" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="apple-mobile-web-app-title" content="Vetapp" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          <link
            href={`${BASE_URL}/splashscreens/iphone5_splash.png`}
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/iphone6_splash.png`}
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/iphoneplus_splash.png`}
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/iphonex_splash.png`}
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/iphonexr_splash.png`}
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/iphonexsmax_splash.png`}
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/ipad_splash.png`}
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/ipadpro1_splash.png`}
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/ipadpro3_splash.png`}
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href={`${BASE_URL}/splashscreens/ipadpro2_splash.png`}
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />

          {this.props.styles}
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
