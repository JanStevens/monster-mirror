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
