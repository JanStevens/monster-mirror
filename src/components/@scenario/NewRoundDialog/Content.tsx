import { Box, HStack, Stack } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import { Icon } from 'icons';
import { CircleX } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { useStore } from 'services/stores';
import { CharacterNames } from 'types/character.types';

import { Alert } from 'components/@common/alert';
import { Button } from 'components/@common/button';
import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';
import { PinInput } from 'components/@common/pin-input';
import { Text } from 'components/@common/text';
import LongRestIndicator from 'components/@scenario/LongRestIndicator';

interface Props {
  onClose: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

const Content = ({ onClose, containerRef }: Props) => {
  const party = useStore((state) => state.party);
  const { clearActiveCards, setInitiatives: setStoreInitiatives } = useStore(
    (state) => state.actions,
  );

  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [initiatives, setInitiatives] = useState<
    Record<CharacterNames, string[]>
  >({} as Record<CharacterNames, string[]>);
  const characters = party.map((name) => CHARACTERS[name]);

  const handleSubmit = () => {
    if (!!hasDuplicateInitiatives) return;
    clearActiveCards();
    setStoreInitiatives(initiatives);
    onClose();
  };

  const handleSkip = () => {
    clearActiveCards();
    onClose();
  };

  const handleValueChange = (character: CharacterNames, value: string[]) => {
    setInitiatives((prev) => ({
      ...prev,
      [character]: value,
    }));
  };

  const duplicates = Object.groupBy(Object.values(initiatives), (i) =>
    i.join(),
  );

  const hasDuplicateInitiatives = !!Object.values(duplicates).find(
    (initiatives) =>
      (initiatives?.length ?? 1) > 1 && initiatives?.[0].join('') !== '99',
  )?.length;

  // Move to the next value input
  const handleValueComplete = (idx: number) => {
    inputRefs.current[idx + 1]?.querySelector('input')?.focus();
  };

  return (
    <Dialog.Content>
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title>Set character initiative</Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>

        <Stack gap="8" flex="1" ref={containerRef}>
          {hasDuplicateInitiatives && (
            <Alert.Root>
              <Alert.Icon asChild>
                <CircleX />
              </Alert.Icon>
              <Alert.Content>
                <Alert.Title fontWeight="normal" fontSize="lg">
                  You have duplicate initiatives
                </Alert.Title>
                <Alert.Description fontSize="md" fontWeight="normal">
                  Please ensure all players have different initiative
                </Alert.Description>
              </Alert.Content>
            </Alert.Root>
          )}
          {characters.map((character, idx) => {
            return (
              <HStack key={character.name} justify="space-between">
                <HStack>
                  <Image
                    src={`/images/characters/${character.icon}`}
                    width={48}
                    height={48}
                    alt={character.name}
                  />
                  <Text fontSize="xl">{character.spoilerName}</Text>
                  {initiatives[character.name]?.join('') === '99' && (
                    <LongRestIndicator />
                  )}
                </HStack>
                <div>
                  <PinInput
                    ref={(ref) => {
                      inputRefs.current[idx] = ref;
                    }}
                    placeholder="0"
                    inputMode="tel"
                    value={initiatives[character.name]}
                    onValueChange={(e) =>
                      handleValueChange(character.name, e.value)
                    }
                    onValueComplete={() => handleValueComplete(idx)}
                    size="xl"
                    type="numeric"
                    fontSize="xl"
                    length={2}
                  />
                </div>
              </HStack>
            );
          })}
        </Stack>
        <Stack gap="3" direction="row" width="full">
          <Button variant="outline" width="full" onClick={handleSkip}>
            Skip
          </Button>

          <Button
            width="full"
            onClick={handleSubmit}
            disabled={hasDuplicateInitiatives}
          >
            Confirm
          </Button>
        </Stack>
      </Stack>
    </Dialog.Content>
  );
};

export default Content;
