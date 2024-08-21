import { Box } from '@style/jsx';
import { ArrowLeftFromLineIcon } from 'lucide-react';

import { useInitiative } from 'hooks/useInitiative';

import { Drawer } from 'components/@common/drawer';

import Content from './Content';

interface Props {
  open: boolean;
  onExpandClick: () => void;
  onClose: () => void;
}

const InitiativeDrawer = ({ open, onExpandClick, onClose }: Props) => {
  const { initiatives } = useInitiative();
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  if (!initiatives.length) return null;

  return (
    <Drawer.Root open={open} onOpenChange={handleClose} lazyMount unmountOnExit>
      <Drawer.Trigger asChild>
        <Box opacity={0} animation="show 300ms 100ms ease-in forwards">
          <ArrowLeftFromLineIcon size={24} onClick={onExpandClick} />
        </Box>
      </Drawer.Trigger>
      <Drawer.Backdrop backdropFilter="blur(0px)" backgroundColor="black.a5" />
      <Drawer.Positioner>
        <Content />
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

export default InitiativeDrawer;
