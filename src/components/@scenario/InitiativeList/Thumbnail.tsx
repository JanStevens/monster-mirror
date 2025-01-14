import { cva } from '@style/css';
import { Box } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import Image from 'next/image';

import { getEnemyArtwork, isCharacterName } from 'utils/deck.utils';

import { Initiative } from 'types/initiative.types';

import LongRestIndicator from 'components/@scenario/LongRestIndicator';

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
  showLongRestIndicator?: boolean;
}

const Thumbnail = ({
  initiative,
  size,
  showLongRestIndicator = false,
}: Props) => {
  const isCharacter = isCharacterName(initiative.name);
  const icon = isCharacterName(initiative.name)
    ? `/images/characters/${CHARACTERS[initiative.name].icon}`
    : `/images/thumbnails/${getEnemyArtwork(initiative.name)}`;

  return (
    <Box display="block" position="relative">
      <Image
        src={icon}
        width={size}
        height={size}
        alt={initiative.name}
        className={inactiveImage({
          state: initiative.played ? 'disabled' : 'active',
          type: isCharacter ? 'character' : 'enemy',
        })}
      />
      {initiative.initiative === 99 &&
        !initiative.played &&
        showLongRestIndicator && (
          <LongRestIndicator position="absolute" right={0} bottom="-10px" />
        )}
    </Box>
  );
};

export default Thumbnail;
