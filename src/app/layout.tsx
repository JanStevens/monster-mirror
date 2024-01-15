import './globals.css';

import { Flex } from '@style/jsx';
import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next';
import { PhilosopherBold, PirataOneGloomhaven } from 'styles/font';

import { PWALifeCycle } from 'components/@utils';

export const metadata: Metadata = {
  title: 'Monster Mirror',
  description:
    'Simplify your Gloomhaven experience by easily viewing monster ability cards',
  applicationName: 'Monster Mirror',
  appleWebApp: {
    title: 'Monster Mirror',
    statusBarStyle: 'black',
    // Generated using: https://progressier.com/pwa-icons-and-ios-splash-screen-generator
    startupImage: [
      {
        media:
          'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png',
      },
      {
        media:
          'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png',
      },
      {
        media:
          'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png',
      },
      {
        media:
          'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png',
      },
      {
        media:
          'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
      },
      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png',
      },
      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/iPhone_11__iPhone_XR_landscape.png',
      },
      {
        media:
          'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: 'splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png',
      },
      {
        media:
          'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png',
      },
      {
        media:
          'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png',
      },
      {
        media:
          'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/12.9__iPad_Pro_landscape.png',
      },
      {
        media:
          'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png',
      },
      {
        media:
          'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/10.9__iPad_Air_landscape.png',
      },
      {
        media:
          'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/10.5__iPad_Air_landscape.png',
      },
      {
        media:
          'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/10.2__iPad_landscape.png',
      },
      {
        media:
          'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png',
      },
      {
        media:
          'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: 'splash_screens/8.3__iPad_Mini_landscape.png',
      },
      {
        media:
          'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
      },
      {
        media:
          'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png',
      },
      {
        media:
          'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
      },
      {
        media:
          'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
      },
      {
        media:
          'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
      },
      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
      },
      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/iPhone_11__iPhone_XR_portrait.png',
      },
      {
        media:
          'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: 'splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
      },
      {
        media:
          'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
      },
      {
        media:
          'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
      },
      {
        media:
          'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/12.9__iPad_Pro_portrait.png',
      },
      {
        media:
          'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png',
      },
      {
        media:
          'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/10.9__iPad_Air_portrait.png',
      },
      {
        media:
          'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/10.5__iPad_Air_portrait.png',
      },
      {
        media:
          'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/10.2__iPad_portrait.png',
      },
      {
        media:
          'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
      },
      {
        media:
          'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: 'splash_screens/8.3__iPad_Mini_portrait.png',
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
        <Analytics />
      </body>
    </html>
  );
}
