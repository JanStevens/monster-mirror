import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box } from '@style/jsx';
import { CHARACTERS } from 'data/characters';

import { isCharacterName } from 'utils/deck.utils';

import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';
import { Initiative } from 'types/initiative.types';

import { Text } from 'components/@common/text';
import LongRestIndicator from 'components/@scenario/LongRestIndicator';

import Thumbnail from './Thumbnail';

interface Props {
  initiative: Initiative;
  onClick: (name: CharacterNames | EnemyNames) => void;
}

const Item = ({ initiative, onClick }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: initiative.id,
      disabled: !isCharacterName(initiative.name),
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      key={initiative.name}
      cursor="pointer"
      onClick={() => onClick(initiative.name)}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      touchAction="manipulation"
      style={style}
      {...attributes}
      {...listeners}
    >
      <Box
        display="flex"
        alignItems="center"
        gap="4"
        touchAction="manipulation"
      >
        <Thumbnail initiative={initiative} size={45} />
        <Text
          fontSize="2xl"
          color={initiative.played ? 'sand.5' : 'fg.default'}
          touchAction="manipulation"
        >
          {isCharacterName(initiative.name)
            ? CHARACTERS[initiative.name].spoilerName
            : initiative.name}
        </Text>
        {initiative.initiative === 99 && !initiative.played && (
          <LongRestIndicator />
        )}
      </Box>
      <Text
        fontSize="xl"
        color={initiative.played ? 'sand.5' : 'sand.10'}
        pr={3}
        touchAction="manipulation"
      >
        {initiative.initiative}
      </Text>
    </Box>
  );
};

export default Item;
