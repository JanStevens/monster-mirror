import { cva } from '@style/css';
import { CHARACTERS } from 'data/characters';
import { thumbnailFor } from 'images';

import { getEnemyArtwork, isCharacterName } from 'utils/deck.utils';

import type { Initiative } from 'types/initiative.types';

const inactiveImage = cva({
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

interface Props {
  size: number;
  initiative: Initiative;
}

const Thumbnail = ({ initiative, size }: Props) => {
  const isCharacter = isCharacterName(initiative.name);
  const icon = isCharacterName(initiative.name)
    ? `/images/characters/${CHARACTERS[initiative.name].icon}`
    : thumbnailFor(getEnemyArtwork(initiative.name));

  return (
    <img
      src={icon}
      width={size}
      height={size}
      alt={initiative.name}
      className={inactiveImage({
        state: initiative.played ? 'disabled' : 'active',
        type: isCharacter ? 'character' : 'enemy',
      })}
    />
  );
};

export default Thumbnail;
