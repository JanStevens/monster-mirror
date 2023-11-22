import { Philosopher } from 'next/font/google';
import localFront from 'next/font/local';

// export const PirataOne = Pirata_One({
//   weight: '400',
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-pirate-one',
// });

export const PirataOneGloomhaven = localFront({
  src: '../../public/PirataOne-Gloomhaven.ttf',
  weight: '400',
  display: 'swap',
  variable: '--fonts-pirata-one',
});

export const PhilosopherBold = Philosopher({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-philosopher',
});
