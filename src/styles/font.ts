import { Philosopher, Pirata_One } from 'next/font/google';

export const PirataOne = Pirata_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-pirate-one',
});

export const PhilosopherBold = Philosopher({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-philosopher',
});
