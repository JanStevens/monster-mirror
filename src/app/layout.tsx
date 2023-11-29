import './globals.css';

import { Flex } from '@style/jsx';
import { Metadata, Viewport } from 'next';
import { PhilosopherBold, PirataOneGloomhaven } from 'styles/font';

import { PWALifeCycle } from 'components/@utils';

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
  icons: '/apple-icon.png',
};

export const viewport: Viewport = {
  themeColor: '#000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${PirataOneGloomhaven.variable} ${PhilosopherBold.variable}`}
    >
      <body>
        <PWALifeCycle />
        <Flex
          fontFamily="pirataOne"
          bgColor="bg.canvas"
          flexDir="column"
          height="100svh"
        >
          {children}
        </Flex>
      </body>
    </html>
  );
}
