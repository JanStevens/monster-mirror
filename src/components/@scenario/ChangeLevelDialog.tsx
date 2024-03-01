import { Stack } from '@style/jsx';
import { Icon } from 'icons';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useState } from 'react';

import { Button, Dialog, IconButton, Select } from 'components/@common';
import { PARTY_LEVELS } from 'components/@config';

interface Props {
  open: boolean;
  currentLevel: string;
  onSubmit: (level: string) => void;
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
          <Stack gap="6" p="4">
            <Stack gap="6">
              <Dialog.Title fontSize="2xl">Change Party Level</Dialog.Title>
              <Select.Root
                size="lg"
                positioning={{
                  sameWidth: true,
                  fitViewport: true,
                  strategy: 'fixed',
                  listeners: true,
                }}
                items={PARTY_LEVELS}
                value={[`${level}`]}
                onValueChange={({ value }) => selectLevel(value[0])}
              >
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select level" />
                    <ChevronsUpDownIcon />
                  </Select.Trigger>
                </Select.Control>
                <Select.Positioner overflow="scroll">
                  <Select.Content>
                    <Select.ItemGroup id="framework">
                      {PARTY_LEVELS.map((item) => (
                        <Select.Item key={item.value} item={item}>
                          <Select.ItemText
                            fontFamily="pirataOne"
                            fontWeight="normal"
                          >
                            {item.label}
                          </Select.ItemText>
                          <Select.ItemIndicator>
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.ItemGroup>
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
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

export default ChangeLevelDialog;
