import { Portal } from '@ark-ui/react';
import { ScenarioDefinition } from 'data/scenarios';

import { Dialog } from 'components/@common';

import Content from './Content';

interface Props {
  scenario: ScenarioDefinition;
  open: boolean;
  onClose: () => void;
}

const ScenarioInfoDialog = ({ scenario, open, onClose }: Props) => {
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };
  return (
    <Dialog.Root open={open} onOpenChange={handleClose} unmountOnExit lazyMount>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Content scenario={scenario} onClose={onClose} />
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ScenarioInfoDialog;
