import { CharacterNames } from 'types/character.types';

import { Dialog } from 'components/@common';

import Content from './Content';

interface Props {
  open: boolean;
  currentParty: CharacterNames[];
  onSubmit: (party: CharacterNames[]) => void;
  onClose: () => void;
}

const ChangePartySize = ({ open, currentParty, onSubmit, onClose }: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose} lazyMount unmountOnExit>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Content
          currentParty={currentParty}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default ChangePartySize;
