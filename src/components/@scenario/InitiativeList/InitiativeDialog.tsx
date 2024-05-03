'use client';

import { Box, Stack } from '@style/jsx';
import { Icon } from 'icons';

import { useInitiative } from 'hooks/useInitiative';

import { Button, Dialog, IconButton } from 'components/@common';

import Item from './Item';

interface Props {
  open: boolean;
  onClose: () => void;
}

const InitiativeDialog = ({ open, onClose }: Props) => {
  const { initiatives, onToggleInitiativePlayed } = useInitiative();
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose} lazyMount unmountOnExit>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="6" p="6" flex="1">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Dialog.Title>Initiative overview</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
                  <Icon name="close" />
                </IconButton>
              </Dialog.CloseTrigger>
            </Box>

            <Stack gap={4} flexDirection="column" flex="1">
              {initiatives.map((initiative) => (
                <Item
                  key={initiative.name}
                  initiative={initiative}
                  onClick={onToggleInitiativePlayed}
                />
              ))}
            </Stack>
            <Stack gap="3" direction="row" width="full">
              <Dialog.CloseTrigger asChild>
                <Button width="full" variant="outline">
                  Close
                </Button>
              </Dialog.CloseTrigger>
            </Stack>
          </Stack>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default InitiativeDialog;