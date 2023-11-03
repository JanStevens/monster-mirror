import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  '.elite-color': { color: 'gold' },
  '.icon': {
    height: '1.25em',
    verticalAlign: 'middle',
    display: 'inline-block',
    filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))',
  },
  '.aoe': { verticalAlign: 'middle', maxWidth: 'unset' },
  '.aoe.h1': { height: '1.5em' },
  '.aoe.h2': { height: '3em' },
  '.aoe.h3': { height: '4.5em' },
  '.aoe.h4': { height: '6em' },
  '.aoe.h6': { height: '7.5em' },
  '.aoe.rotated': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    margin: 'auto 0',
  },
  '.mirrored': {
    transform: 'scale(-1,1)',
  },

  '.rotated': {
    transform: 'rotateZ(-60deg)',
  },
  '.nobr': { whiteSpace: 'nowrap' },
  '.small': { fontSize: '75%' },
  '.element': {
    height: '1.75em',
    verticalAlign: 'middle',
    display: 'inline-block',
  },
  '.element.overlay': {
    marginLeft: '-1.75em',
    zIndex: 1,
  },
  '.collapse': {
    display: 'inline-block',
    width: 0,
    height: 0,
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
