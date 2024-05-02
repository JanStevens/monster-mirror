import { Stack } from '@style/jsx';
import { Icon } from 'icons';

import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';
import { Initiative } from 'types/initiative.types';

import { Drawer, IconButton } from 'components/@common';

import Item from './Item';

interface Props {
  initiatives: Initiative[];
  onToggleInitiativePlayed: (name: CharacterNames | EnemyNames) => void;
}

const Content = ({ initiatives, onToggleInitiativePlayed }: Props) => {
  return (
    <Drawer.Content gridTemplateRows="auto 1fr 0">
      <Drawer.Header
        flexDirection="row"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <Drawer.Title fontSize="2xl" fontWeight="normal">
          Initiative overview
        </Drawer.Title>
        <Drawer.CloseTrigger asChild>
          <IconButton variant="ghost">
            <Icon name="close" />
          </IconButton>
        </Drawer.CloseTrigger>
      </Drawer.Header>
      <Drawer.Body>
        <Stack gap={4} flexDirection="column">
          {initiatives.map((initiative) => (
            <Item
              key={initiative.name}
              initiative={initiative}
              onClick={onToggleInitiativePlayed}
            />
          ))}
        </Stack>
      </Drawer.Body>
    </Drawer.Content>
  );
};

export default Content;
