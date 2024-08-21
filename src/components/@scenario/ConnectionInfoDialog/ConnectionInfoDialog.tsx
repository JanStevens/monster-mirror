import { Portal } from '@ark-ui/react';

import { Dialog } from 'components/@common/dialog';

import Content from './Content';

interface Props {
  open: boolean;
  onClose: () => void;
}

const ConnectionInfoDialog = ({ open, onClose }: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={handleClose}
      lazyMount
      unmountOnExit
      closeOnInteractOutside={false}
      modal
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Content onClose={onClose} />
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ConnectionInfoDialog;
