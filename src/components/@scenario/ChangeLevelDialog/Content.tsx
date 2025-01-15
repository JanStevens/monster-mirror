import { Box, HStack, Stack } from '@style/jsx';
import { PARTY_LEVELS } from 'data/config';
import { Icon } from 'icons';
import { RefreshCwIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useStore } from 'services/stores';

import { Button } from 'components/@common/button';
import { Dialog } from 'components/@common/dialog';
import { Heading } from 'components/@common/heading';
import { IconButton } from 'components/@common/icon-button';
import { Slider } from 'components/@common/slider';
import { Text } from 'components/@common/text';

interface Props {
  onClose: () => void;
}

const Content = ({ onClose }: Props) => {
  const currentLevel = useStore((state) => state.level);
  const { setLevel: setStoreLevel } = useStore((state) => state.actions);
  const [calculatedLevels, setCalculatedLevels] = useState<number[]>([]);
  const [level, selectLevel] = useState(currentLevel);

  const handleSubmit = () => {
    setStoreLevel(level);
    onClose();
  };

  const handleCalculateLevel = (level: number) => {
    setCalculatedLevels((memo) => [...memo, level]);
  };

  const totalLevelsSummedUp = calculatedLevels.reduce(
    (memo, level) => memo + level,
    0,
  );

  const calculatedLevel = Math.round(
    totalLevelsSummedUp / calculatedLevels.length / 2,
  );

  useEffect(() => {
    if (calculatedLevel) {
      selectLevel(calculatedLevel);
    }
  }, [calculatedLevel]);

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
          <Box mb="6">
            <Box display="flex" alignItems="center" gap="2" mb={2}>
              <Heading fontSize="xl" fontWeight="normal">
                Calculate Level
              </Heading>
              <IconButton
                variant="ghost"
                size="sm"
                onClick={() => setCalculatedLevels([])}
              >
                <RefreshCwIcon />
              </IconButton>
            </Box>
            <HStack gap={1} mb="2">
              {Array.from({ length: 9 }).map((_, idx) => (
                <Button
                  variant="subtle"
                  fontWeight="normal"
                  fontSize="xl"
                  key={idx}
                  disabled={calculatedLevels.length === 4}
                  onClick={() => handleCalculateLevel(idx + 1)}
                >
                  {idx + 1}
                </Button>
              ))}
            </HStack>
            {calculatedLevel ? (
              <Text fontSize="lg" color="fg.muted">
                Selected:{' '}
                {calculatedLevels.map((lvl) => `Level ${lvl}`).join(', ')}
              </Text>
            ) : (
              <Text fontSize="lg" color="fg.muted">
                Add one by clicking one of the level buttons above
              </Text>
            )}
          </Box>
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

        <Stack
          gap="3"
          direction="row"
          width="full"
          pb="env(safe-area-inset-bottom, 16px)"
        >
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
