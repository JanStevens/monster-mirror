import './globals.css';

import { css } from '@style/css';
import { PhilosopherBold, PirataOne } from 'styles/font';

export const metadata = {
  title: 'Monster Mirror',
  description: 'Easily show ability card of monsters for Gloomhaven',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${PirataOne.variable} ${PhilosopherBold.variable}`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="192x192" href="/images/icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/icon.png"
        />
        <meta charSet="UTF-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Gloomy Companion" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={css({
          fontFamily: 'pirataOne',
          backgroundColor: 'black',
          color: 'white',
        })}
      >
        {children}
      </body>
    </html>
  );
}
