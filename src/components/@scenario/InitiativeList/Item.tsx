import { Box } from '@style/jsx';
import { CHARACTERS } from 'data/characters';

import { isCharacterName } from 'utils/deck.utils';

import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';
import { Initiative } from 'types/initiative.types';

import { Text } from 'components/@common';

import Thumbnail from './Thumbnail';

interface Props {
  initiative: Initiative;
  onClick: (name: CharacterNames | EnemyNames) => void;
}

const Item = ({ initiative, onClick }: Props) => {
  return (
    <Box
      key={initiative.name}
      cursor="pointer"
      onClick={() => onClick(initiative.name)}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
    >
      <Box display="flex" alignItems="center" gap={4}>
        <Thumbnail initiative={initiative} size={45} />
        <Text
          fontSize="2xl"
          color={initiative.played ? 'sand.5' : 'fg.default'}
        >
          {isCharacterName(initiative.name)
            ? CHARACTERS[initiative.name].spoilerName
            : initiative.name}
        </Text>
      </Box>
      <Text fontSize="xl" color={initiative.played ? 'sand.5' : 'sand.10'}>
        {initiative.initiative}
      </Text>
    </Box>
  );
};

export default Item;
