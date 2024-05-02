import { HStack, Stack } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import { Icon } from 'icons';
import { CircleX } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { CharacterNames } from 'types/character.types';
import { InitiativeState } from 'types/initiative.types';

import {
  Alert,
  Button,
  Dialog,
  IconButton,
  PinInput,
  Text,
} from 'components/@common';

interface Props {
  currentParty: CharacterNames[];
  onSubmit: (initiatives: InitiativeState) => void;
  onSkip: () => void;
  onClose: () => void;
}

const Content = ({ currentParty, onSubmit, onSkip, onClose }: Props) => {
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [initiatives, setInitiatives] = useState<InitiativeState>(
    {} as InitiativeState,
  );
  const characters = currentParty.map((name) => CHARACTERS[name]);

  const handleSubmit = () => {
    if (!!hasDuplicateInitiatives) return;
    onSubmit(initiatives);
    onClose();
  };

  const handleSkip = () => {
    onSkip();
    onClose();
  };

  const handleValueChange = (character: CharacterNames, value: string) => {
    setInitiatives((prev) => ({
      ...prev,
      [character]: {
        initiative: parseInt(value, 10),
        name: character,
        played: false,
      },
    }));
  };

  const duplicates = Object.groupBy(
    Object.values(initiatives),
    (i) => i.initiative,
  );

  const hasDuplicateInitiatives = !!Object.values(duplicates).find(
    (initiatives) => (initiatives?.length ?? 1) > 1,
  )?.length;

  // Move to the next value input
  const handleValueComplete = (idx: number) => {
    inputRefs.current[idx + 1]?.querySelector('input')?.focus();
  };

  return (
    <Dialog.Content>
      <Stack gap="6" p="6">
        <Dialog.Title fontSize="2xl" fontWeight="normal">
          Set character initiative
        </Dialog.Title>

        <Stack gap="8">
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
                </HStack>
                <div>
                  <PinInput
                    ref={(ref) => {
                      inputRefs.current[idx] = ref;
                    }}
                    placeholder="0"
                    inputMode="tel"
                    autoFocus={idx === 0}
                    onValueChange={(e) =>
                      handleValueChange(character.name, e.valueAsString)
                    }
                    onValueComplete={() => handleValueComplete(idx)}
                    size="xl"
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

      <Dialog.CloseTrigger asChild position="absolute" top="2" right="4">
        <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
          <Icon name="close" />
        </IconButton>
      </Dialog.CloseTrigger>
    </Dialog.Content>
  );
};

export default Content;
