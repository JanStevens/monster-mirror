import { Stack } from '@style/jsx';
import { CHARACTERS_COUNT } from 'data/config';
import { Icon } from 'icons';
import { useState } from 'react';

import {
  Button,
  Dialog,
  IconButton,
  RadioButtonGroup,
} from 'components/@common';

interface Props {
  open: boolean;
  currentSize: number;
  onSubmit: (partySize: number) => void;
  onClose: () => void;
}

const ChangePartySize = ({ open, currentSize, onSubmit, onClose }: Props) => {
  const [partySize, selectPartySize] = useState(currentSize);
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  const handleSubmit = () => {
    onSubmit(partySize);
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="6" p="6">
            <Dialog.Title fontSize="2xl" fontWeight="normal">
              Change party size
            </Dialog.Title>

            <RadioButtonGroup.Root
              value={String(partySize)}
              variant="outline"
              onValueChange={({ value }) => selectPartySize(Number(value))}
              size="xl"
            >
              {CHARACTERS_COUNT.map((item) => (
                <RadioButtonGroup.Item key={item} value={`${item}`}>
                  <RadioButtonGroup.ItemControl />
                  <RadioButtonGroup.ItemText fontSize="xl" fontWeight="normal">
                    {item}
                  </RadioButtonGroup.ItemText>
                </RadioButtonGroup.Item>
              ))}
            </RadioButtonGroup.Root>

            <Stack gap="3" direction="row" width="full">
              <Dialog.CloseTrigger asChild>
                <Button variant="outline" width="full">
                  Cancel
                </Button>
              </Dialog.CloseTrigger>
              <Button width="full" onClick={handleSubmit}>
                Confirm
              </Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="4">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default ChangePartySize;
