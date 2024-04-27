import { HStack, Stack } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import { Icon } from 'icons';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { CharacterNames } from 'types/character.types';
import { InitiativeState } from 'types/initiative.types';

import { Button, Dialog, IconButton, PinInput, Text } from 'components/@common';

interface Props {
  open: boolean;
  currentParty: CharacterNames[];
  onSubmit: (initiatives: InitiativeState) => void;
  onSkip: () => void;
  onClose: () => void;
}

const NewRoundDialog = ({
  open,
  currentParty,
  onClose,
  onSkip,
  onSubmit,
}: Props) => {
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [initiatives, setInitiatives] = useState<InitiativeState>(
    {} as InitiativeState,
  );
  const characters = currentParty.map((name) => CHARACTERS[name]);
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  const handleSubmit = () => {
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

  // Move to the next value input
  const handleValueComplete = (idx: number) => {
    inputRefs.current[idx + 1]?.querySelector('input')?.focus();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="6" p="6">
            <Dialog.Title fontSize="2xl" fontWeight="normal">
              Set character initiative
            </Dialog.Title>

            <Stack gap="8">
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

export default NewRoundDialog;
