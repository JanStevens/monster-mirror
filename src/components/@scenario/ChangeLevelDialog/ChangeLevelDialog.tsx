import { Dialog } from 'components/@common';

import Content from './Content';

interface Props {
  open: boolean;
  currentLevel: number;
  onSubmit: (level: number) => void;
  onClose: () => void;
}

const ChangeLevelDialog = ({
  open,
  currentLevel,
  onSubmit,
  onClose,
}: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose} lazyMount unmountOnExit>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Content
          currentLevel={currentLevel}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default ChangeLevelDialog;
