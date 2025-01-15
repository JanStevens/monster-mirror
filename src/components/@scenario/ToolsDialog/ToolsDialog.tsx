import { Portal } from '@ark-ui/react';

import { Dialog } from 'components/@common/dialog';

import Content from './Content';

interface Props {
  scenarioId: number;
  open: boolean;
  onClose: () => void;
}

const ToolsDialog = ({ scenarioId, open, onClose }: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose} lazyMount unmountOnExit>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Content scenarioId={scenarioId} />
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ToolsDialog;
