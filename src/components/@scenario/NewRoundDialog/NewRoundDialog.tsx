import { CharacterNames } from 'types/character.types';
import { InitiativeState } from 'types/initiative.types';

import { Dialog } from 'components/@common';

import Content from './Content';

interface Props {
  open: boolean;
  currentParty: CharacterNames[];
  onSubmit: (initiatives: InitiativeState) => void;
  onSkip: () => void;
  onClose: () => void;
}

const NewRoundDialog = ({
  open,
  currentParty,
  onClose,
  onSkip,
  onSubmit,
}: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose} unmountOnExit lazyMount>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Content
          currentParty={currentParty}
          onSubmit={onSubmit}
          onClose={onClose}
          onSkip={onSkip}
        />
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default NewRoundDialog;
