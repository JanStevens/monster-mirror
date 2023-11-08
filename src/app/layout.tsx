import './globals.css';

import { css } from '@style/css';
import { Metadata } from 'next';
import { PhilosopherBold, PirataOne } from 'styles/font';

import { PWALifeCycle } from './PWALifeCycle';

export const metadata: Metadata = {
  title: 'Monster Mirror',
  description: 'Easily show ability card of monsters for Gloomhaven',
  applicationName: 'Monster Mirror',
  appleWebApp: {
    title: 'Monster Mirror',
    statusBarStyle: 'black',
    capable: true,
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  themeColor: '#000',
  icons: '/apple-icon.png',
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
      <body
        className={css({
          fontFamily: 'pirataOne',
          backgroundColor: 'black',
          color: 'white',
        })}
      >
        <PWALifeCycle />
        {children}
      </body>
    </html>
  );
}
