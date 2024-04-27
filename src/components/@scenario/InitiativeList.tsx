'use client';

import { Box, VStack } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import Image from 'next/image';

import { getEnemyArtwork } from 'utils/deck.utils';

import { useStore } from 'services/stores';
import { CharacterNames } from 'types/character.types';

import { inactiveImage } from './styles';

const isCharacterName = (name: string): name is CharacterNames =>
  Object.values(CharacterNames).includes(name as CharacterNames);

const InitiativeList = () => {
  const initiatives = useStore((state) => state.initiatives);
  console.log(initiatives);
  const { toggleInitiativePlayed } = useStore((state) => state.actions);

  const sortedInitiatives = Object.values(initiatives).sort(
    (initiativeA, initiativeB) =>
      initiativeA.initiative - initiativeB.initiative,
  );

  console.log({ sortedInitiatives });

  return (
    <Box
      width={75}
      borderLeft="1px"
      borderColor="border.subtle"
      borderStyle="solid"
      my="4"
      px="4"
    >
      <VStack gap={1}>
        {sortedInitiatives.map((initiative) => {
          const isCharacter = isCharacterName(initiative.name);
          const icon = isCharacterName(initiative.name)
            ? `/images/characters/${CHARACTERS[initiative.name].icon}`
            : `/images/thumbnails/${getEnemyArtwork(initiative.name)}`;

          return (
            <Box
              key={initiative.name}
              my="2"
              cursor="pointer"
              onClick={() => toggleInitiativePlayed(initiative.name)}
            >
              <Image
                src={icon}
                width={37}
                height={37}
                alt={initiative.name}
                className={inactiveImage({
                  state: initiative.played ? 'disabled' : 'active',
                  type: isCharacter ? 'character' : 'enemy',
                })}
                style={{ filter: 'grey-scale(1)' }}
              />
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};

export default InitiativeList;
