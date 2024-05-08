'use client';

import { Box, Stack } from '@style/jsx';
import { Icon } from 'icons';
import { InfoIcon } from 'lucide-react';

import { useInitiative } from 'hooks/useInitiative';

import { Alert, Button, Dialog, IconButton } from 'components/@common';

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

            {!!initiatives.length ? (
              <Stack gap={4} flexDirection="column" flex="1">
                {initiatives.map((initiative) => (
                  <Item
                    key={initiative.name}
                    initiative={initiative}
                    onClick={onToggleInitiativePlayed}
                  />
                ))}
              </Stack>
            ) : (
              <Box flex="1">
                <Alert.Root>
                  <Alert.Icon asChild>
                    <InfoIcon />
                  </Alert.Icon>
                  <Alert.Content>
                    <Alert.Title>No initiatives</Alert.Title>
                    <Alert.Description>
                      Add some initiatives to get started.
                    </Alert.Description>
                  </Alert.Content>
                </Alert.Root>
              </Box>
            )}

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
