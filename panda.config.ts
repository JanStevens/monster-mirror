import { defineConfig, defineGlobalStyles } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';

const globalCss = defineGlobalStyles({
  '.elite-color': { color: 'gold' },
  '.icon': {
    height: '1.25em',
    width: '1.25em',
    verticalAlign: 'top',
    display: 'inline-block',
    filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))',
  },
  '.aoe.h2': { height: '3em', width: '3em' },
  '.aoe.h3': { height: '4.5em', width: '4.5em' },
  '.aoe.inline': { display: 'inline-block' },
  '.aoe.rotated.not(.inline)': {
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
  '.rotated-inverse': {
    transform: 'rotateZ(60deg)',
  },
  '.nobr': { whiteSpace: 'nowrap' },
  '.small': { fontSize: '75%' },
  '.element': {
    height: '1.75em',
    width: '1.75em',
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
    // height: 0,
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    '@pandacss/preset-panda',
    createPreset({
      accentColor: 'amber',
      grayColor: 'sand',
      borderRadius: 'md',
    }),
  ],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        show: {
          '100%': { opacity: 1 },
        },
        enemyCardPlayed: {
          '100%': { opacity: 0.5, filter: 'grayscale(1)' },
        },
      },
      tokens: {
        fonts: {
          philosopher: { value: 'var(--font-philosopher), sans-serif' },
          pirataOne: { value: 'var(--font-pirata-one)' },
        },
      },
      slotRecipes: {
        pinInput: {
          variants: {
            size: {
              xl: { input: { height: '12' } },
              '2xl': { input: { height: '16' } },
            },
          },
        },
        dialog: {
          base: {
            content: {
              display: 'flex',
              height: { smDown: '100%', base: 'auto' },
              minWidth: { smDown: '100%', base: 'sm' },
              borderRadius: { smDown: 'none', base: '13' },
            },
            title: {
              fontFamily: 'pirataOne',
              fontSize: '2xl',
              fontWeight: 'normal',
            },
          },
        },
        alert: {
          base: {
            title: {
              fontWeight: 'normal',
              fontSize: 'xl',
            },
            description: {
              fontWeight: 'normal',
              fontSize: 'md',
            },
          },
        },
      },
      recipes: {
        heading: {
          base: {
            letterSpacing: '0 !important',
            fontWeight: 'normal',
          },
        },
        text: {
          base: {
            fontWeight: 'normal',
          },
        },
        button: {
          base: {
            fontWeight: 'normal',
          },
        },
      },
    },
  },
  globalCss,
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system',
});
