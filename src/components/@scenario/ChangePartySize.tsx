import { cva } from '@style/css';
import { Box, Stack } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import { Icon } from 'icons';
import Image from 'next/image';
import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { CharacterNames } from 'types/character.types';

import { Button, Dialog, IconButton } from 'components/@common';

interface Props {
  open: boolean;
  currentParty: CharacterNames[];
  onSubmit: (party: CharacterNames[]) => void;
  onClose: () => void;
}

const hoverIcon = cva({
  base: { filter: 'none' },
  variants: {
    state: {
      disabled: {
        filter:
          'brightness(0) invert(24%) sepia(2%) saturate(17%) hue-rotate(324deg) brightness(98%) contrast(82%)',
      },
      active: {
        filter: 'none',
      },
    },
  },
});

const ChangePartySize = ({ open, currentParty, onSubmit, onClose }: Props) => {
  const [party, selectParty] = useState(currentParty);
  const handleClose = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  useDeepCompareEffect(() => {
    selectParty(currentParty);
  }, [currentParty]);

  const onChange = (character: CharacterNames) => {
    selectParty((party) => {
      if (party.includes(character)) {
        return party.filter((item) => item !== character);
      } else if (party.length >= 4) {
        party.pop();
        party.push(character);
        return party;
      } else {
        return [...party, character];
      }
    });
  };

  const handleSubmit = () => {
    onSubmit(party);
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="6" p="6">
            <Dialog.Title fontSize="2xl" fontWeight="normal">
              Change party
            </Dialog.Title>

            <Box
              display="grid"
              gridTemplateColumns="repeat(6, 1fr)"
              gap="4"
              rowGap="4"
            >
              {Object.values(CHARACTERS).map((item) => {
                const isSelected = party.includes(item.name);
                return (
                  <Box key={item.name} onClick={() => onChange(item.name)}>
                    <Image
                      src={`/images/characters/${item.icon}`}
                      width={42}
                      height={42}
                      alt={item.name}
                      className={hoverIcon({
                        state: isSelected ? 'active' : 'disabled',
                      })}
                    />
                  </Box>
                );
              })}
            </Box>

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
