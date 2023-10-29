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
      <body
        className={css({
          p: 2,
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
