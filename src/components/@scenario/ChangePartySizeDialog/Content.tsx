import { Box, Stack } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import { Icon } from 'icons';
import Image from 'next/image';
import { useState } from 'react';

import { CharacterNames } from 'types/character.types';

import { Button, Dialog, IconButton } from 'components/@common';

import { characterInactive } from './styles';

interface Props {
  currentParty: CharacterNames[];
  onSubmit: (party: CharacterNames[]) => void;
  onClose: () => void;
}

const Content = ({ currentParty, onSubmit, onClose }: Props) => {
  const [party, selectParty] = useState(currentParty);

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
    <Dialog.Content>
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title>Change party</Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(6, 1fr)"
          gap="4"
          rowGap="4"
        >
          {Object.values(CHARACTERS).map((item) => {
            const isSelected = party.includes(item.name);
            return (
              <Box
                key={item.name}
                onClick={() => onChange(item.name)}
                cursor="pointer"
              >
                <Image
                  src={`/images/characters/${item.icon}`}
                  width={42}
                  height={42}
                  alt={item.name}
                  className={characterInactive({
                    state: isSelected ? 'active' : 'disabled',
                  })}
                />
              </Box>
            );
          })}
        </Box>

        <Stack
          gap="3"
          direction="row"
          width="full"
          flex="1"
          alignItems="flex-end"
        >
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
    </Dialog.Content>
  );
};

export default Content;
