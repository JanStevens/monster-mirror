import { Philosopher } from 'next/font/google';
import localFront from 'next/font/local';

export const PirataOneGloomhaven = localFront({
  src: '../../public/PirataOne-Gloomhaven.ttf',
  weight: '400',
  display: 'swap',
  variable: '--font-pirata-one',
});

export const PhilosopherBold = Philosopher({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-philosopher',
});
