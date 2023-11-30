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
    // Generated using: https://appsco.pe/developer/splash-screens
    startupImage: [
      {
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        url: '/splash/iphone5_splash.png',
      },
      {
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        url: '/splash/iphone6_splash.png',
      },
      {
        media:
          '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        url: '/splash/iphoneplus_splash.png',
      },
      {
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        url: '/splash/iphonex_splash.png',
      },
      {
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        url: '/splash/iphonexr_splash.png',
      },
      {
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        url: '/splash/iphonexsmax_splash.png',
      },
      {
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        url: '/splash/ipad_splash.png',
      },
      {
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        url: '/splash/ipadpro1_splash.png',
      },
      {
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        url: '/splash/ipadpro3_splash.png',
      },
      {
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        url: '/splash/ipadpro2_splash.png',
      },
    ],
    capable: true,
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  icons: '/apple-icon.png',
};

export const viewport: Viewport = {
  themeColor: '#111110',
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
