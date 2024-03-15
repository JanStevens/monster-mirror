import { Stack } from '@style/jsx';
import { PARTY_LEVELS } from 'data/config';
import { Icon } from 'icons';
import { useState } from 'react';

import { Button, Dialog, IconButton, Slider } from 'components/@common';

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
  const [level, selectLevel] = useState(currentLevel);
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  const handleSubmit = () => {
    onSubmit(level);
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="6" p="6">
            <Stack gap="6" marginBottom="6">
              <Dialog.Title fontSize="2xl" fontWeight="normal">
                Change party level
              </Dialog.Title>
              <Slider
                value={[level]}
                marks={PARTY_LEVELS.map((level) => ({
                  value: level,
                  label: `${level}`,
                }))}
                onValueChange={({ value }) => selectLevel(value[0])}
                size="lg"
                min={PARTY_LEVELS[0]}
                max={PARTY_LEVELS[PARTY_LEVELS.length - 1]}
              />
            </Stack>
            <Stack gap="3" direction="row" width="full">
              <Dialog.CloseTrigger asChild>
                <Button variant="outline" width="full" fontWeight="normal">
                  Cancel
                </Button>
              </Dialog.CloseTrigger>
              <Button width="full" onClick={handleSubmit} fontWeight="normal">
                Confirm
              </Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default ChangeLevelDialog;
