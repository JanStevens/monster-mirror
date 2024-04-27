import { Box } from '@style/jsx';

import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';
import { Initiative } from 'types/initiative.types';

import Thumbnail from './Thumbnail';

interface Props {
  initiative: Initiative;
  activeTurn: boolean;
  onClick: (name: CharacterNames | EnemyNames) => void;
}

const Widget = ({ initiative, activeTurn, onClick }: Props) => {
  return (
    <Box
      key={initiative.name}
      cursor="pointer"
      onClick={() => onClick(initiative.name)}
      opacity={0}
      transform={activeTurn ? 'scale(1.3)' : 'none'}
      transition="transform 150ms ease-in"
      animation="show 300ms 100ms ease-in forwards"
    >
      <Thumbnail initiative={initiative} size={37} />
    </Box>
  );
};

export default Widget;
