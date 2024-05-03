import { Portal } from '@ark-ui/react';
import { RawAbilityCard } from 'data/abilities';

import { BossDeck, MonsterDeck } from 'types/deck.types';

import { Dialog } from 'components/@common';

import Content from './Content';

interface Props {
  deck: BossDeck | MonsterDeck;
  cards: RawAbilityCard[];
  onSubmit: (card: RawAbilityCard) => void;
  onClose: () => void;
}

const DuplicateInitiativeDialog = ({
  deck,
  cards,
  onSubmit,
  onClose,
}: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  return (
    <Dialog.Root
      open={!!cards.length}
      onOpenChange={handleClose}
      unmountOnExit
      lazyMount
      closeOnInteractOutside={false}
      modal
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Content
            deck={deck}
            cards={cards}
            onSubmit={onSubmit}
            onClose={onClose}
          />
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DuplicateInitiativeDialog;
