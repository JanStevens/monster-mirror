import { Box } from '@style/jsx';

import type { CharacterNames } from 'types/character.types';
import type { EnemyNames } from 'types/enemies.types';
import type { Initiative } from 'types/initiative.types';

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
      transform={activeTurn ? 'scale3d(1,1,1)' : 'scale3d(0.7,0.7,1)'}
      transition="transform 150ms ease-in"
      animation="show 300ms 100ms ease-in forwards"
    >
      <Thumbnail initiative={initiative} size={55} />
    </Box>
  );
};

export default Widget;
