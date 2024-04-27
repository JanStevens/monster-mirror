import { cva } from '@style/css';

export const characterInactive = cva({
  base: { filter: 'none' },
  variants: {
    state: {
      disabled: {
        filter:
          'brightness(0) invert(24%) sepia(2%) saturate(17%) hue-rotate(324deg) brightness(98%) contrast(82%)',
      },
      active: {
        filter: 'none',
      },
    },
  },
});

export const monsterInactive = cva({
  base: { filter: 'none' },
  variants: {
    state: {
      disabled: {
        filter: 'grey-scale(1)',
      },
      active: {
        filter: 'none',
      },
    },
  },
});

export const inactiveImage = cva({
  base: { filter: 'none' },
  variants: {
    state: {
      disabled: {},
      active: { filter: 'none' },
    },
    type: {
      character: {},
      enemy: {},
    },
  },
  compoundVariants: [
    {
      state: 'disabled',
      type: 'character',
      css: {
        filter:
          'brightness(0) invert(24%) sepia(2%) saturate(17%) hue-rotate(324deg) brightness(98%) contrast(82%)',
      },
    },
    {
      state: 'disabled',
      type: 'enemy',
      css: {
        filter: 'grayscale(1) brightness(75%)',
      },
    },
  ],
});
