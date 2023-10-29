import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  '.elite-color': { color: 'gold' },
  '.nobr': { whiteSpace: 'nowrap' },
  '.small': { fontSize: '75%' },
  '.collapse': {
    display: 'inline-block',
    width: 0,
    height: 0,
  },
  'img[src="images/shuffle.svg"]': {
    position: 'absolute',
    right: '3%',
    bottom: '5%',
    height: '1.25em',
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ['@pandacss/preset-panda'],

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          philosopher: { value: 'var(--font-philosopher), sans-serif' },
          pirataOne: { value: 'var(--font-pirate-one)' },
        },
      },
    },
  },

  globalCss,

  // The output directory for your css system
  outdir: 'styled-system',
});
