import { Portal } from '@ark-ui/react';
import { useRef } from 'react';

import { Dialog } from 'components/@common';

import Content from './Content';

interface Props {
  open: boolean;
  onClose: () => void;
}

const NewRoundDialog = ({ open, onClose }: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={handleClose}
      unmountOnExit
      lazyMount
      initialFocusEl={() =>
        containerRef.current?.querySelector('input') ?? null
      }
      closeOnInteractOutside={false}
      modal
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Content onClose={onClose} containerRef={containerRef} />
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default NewRoundDialog;
