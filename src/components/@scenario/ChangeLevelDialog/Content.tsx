import { Box, Stack } from '@style/jsx';
import { PARTY_LEVELS } from 'data/config';
import { Icon } from 'icons';
import { useState } from 'react';

import { useStore } from 'services/stores';

import { Button, Dialog, IconButton, Slider } from 'components/@common';

interface Props {
  onClose: () => void;
}

const Content = ({ onClose }: Props) => {
  const currentLevel = useStore((state) => state.level);
  const { setLevel: setStoreLevel } = useStore((state) => state.actions);

  const [level, selectLevel] = useState(currentLevel);

  const handleSubmit = () => {
    setStoreLevel(level);
    onClose();
  };

  return (
    <Dialog.Content>
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title fontSize="2xl" fontWeight="normal">
            Change party level
          </Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>
        <Box flex="1" mb="6">
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
        </Box>

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
    </Dialog.Content>
  );
};

export default Content;
