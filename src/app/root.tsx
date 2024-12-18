import './globals.css';

import { css } from '@style/css';
import { Flex } from '@style/jsx';
import iconSprite from 'icons/sprite.svg?url';
import {
  Links,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import { MonsterMirrorStoreProvider } from 'services/stores';

import type { Route } from './+types/root';

if (typeof window !== 'undefined') import('../pwa');

export const headers: Route.HeadersFunction = () => {
  return {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
  };
};

export const links: Route.LinksFunction = () => [
  {
    rel: 'preload',
    href: '/fonts/PirataOne.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  { rel: 'preload', href: iconSprite, as: 'image', type: 'image/svg+xml' },
  { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
  { rel: 'apple-touch-icon', href: '/apple-icon.png' },
  {
    media:
      'screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_16_Pro_Max_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_16_Pro_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/iPhone_11__iPhone_XR_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
    href: '/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/13__iPad_Pro_M4_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/12.9__iPad_Pro_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/11__iPad_Pro_M4_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/10.9__iPad_Air_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/10.5__iPad_Air_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/10.2__iPad_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
    href: '/splash_screens/8.3__iPad_Mini_landscape.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_16_Pro_Max_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_16_Pro_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/iPhone_11__iPhone_XR_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
    href: '/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/13__iPad_Pro_M4_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/12.9__iPad_Pro_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/11__iPad_Pro_M4_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/10.9__iPad_Air_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/10.5__iPad_Air_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/10.2__iPad_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
    rel: 'apple-touch-startup-image',
  },
  {
    media:
      'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
    href: '/splash_screens/8.3__iPad_Mini_portrait.png',
    rel: 'apple-touch-startup-image',
  },
];

export const meta: MetaFunction = () => [
  { title: 'Monster Mirror' },
  {
    description:
      'Simplify your Gloomhaven experience by easily viewing monster ability cards',
  },
  { name: 'mobile-web-app-capable', content: 'yes' },
  { name: 'theme-color', content: '#111110' },
  { name: 'color-scheme', content: 'dark' },
  { name: 'application-name', content: 'Monster Mirror' },
  { name: 'format-detection', content: 'telephone=no' },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-title', content: 'Monster Mirror' },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  { name: 'og:title', content: 'Monster Mirror' },
  {
    name: 'og:description',
    content:
      'Simplify your Gloomhaven experience by easily viewing monster ability cards',
  },
  { name: 'og:site_name', content: 'Monster Mirror' },
  { name: 'og:image', content: '/og-image.png' },
  { name: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:title', content: 'Monster Mirror' },
  {
    name: 'twitter:description',
    content:
      'Simplify your Gloomhaven experience by easily viewing monster ability cards',
  },
  { name: 'twitter:image', content: '/og-image.png' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`dark`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={css({
          fontFamily: 'pirataOne',
          bgColor: 'bg.canvas',
          WebkitTouchCallout: 'none',
          textSizeAdjust: 'none',
          userSelect: 'none',
        })}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const App = () => {
  return (
    <Flex flexDir="column" height="100svh">
      <MonsterMirrorStoreProvider>
        <Outlet />
      </MonsterMirrorStoreProvider>
    </Flex>
  );
};

export default App;
