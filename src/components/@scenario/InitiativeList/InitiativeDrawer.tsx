import { ArrowLeftFromLineIcon } from 'lucide-react';

import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';
import { Initiative } from 'types/initiative.types';

import { Drawer } from 'components/@common';

import Content from './Content';

interface Props {
  open: boolean;
  initiatives: Initiative[];
  onExpandClick: () => void;
  onToggleInitiativePlayed: (name: CharacterNames | EnemyNames) => void;
  onClose: () => void;
}

const InitiativeDrawer = ({
  open,
  initiatives,
  onExpandClick,
  onToggleInitiativePlayed,
  onClose,
}: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  if (!initiatives.length) return null;

  return (
    <Drawer.Root open={open} onOpenChange={handleClose} lazyMount unmountOnExit>
      <Drawer.Trigger asChild>
        <ArrowLeftFromLineIcon size={24} onClick={onExpandClick} />
      </Drawer.Trigger>
      <Drawer.Backdrop backdropFilter="blur(0px)" backgroundColor="black.a5" />
      <Drawer.Positioner>
        <Content
          initiatives={initiatives}
          onToggleInitiativePlayed={onToggleInitiativePlayed}
        />
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

export default InitiativeDrawer;
