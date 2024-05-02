'use client';

import { Box, Stack } from '@style/jsx';
import { useLayoutEffect, useState } from 'react';

import { useInitiative } from 'hooks/useInitiative';
import { useStore } from 'services/stores';
import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';

import InitiativeDrawer from './InitiativeDrawer';
import Widget from './Widget';

const InitiativeList = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { initiatives, activeTurn, hasPlayed, roundEnded } = useInitiative();
  const { toggleInitiativePlayed } = useStore((state) => state.actions);

  const handleToggleInitiativePlayed = (name: CharacterNames | EnemyNames) => {
    if (name === activeTurn || hasPlayed(name)) {
      toggleInitiativePlayed(name);
    }
  };

  useLayoutEffect(() => {
    if (roundEnded) setDrawerOpen(false);
  }, [roundEnded]);

  return (
    <Box
      width={75}
      borderLeft="1px"
      borderColor="border.subtle"
      borderStyle="solid"
      my="8"
      px="4"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      display={{ smDown: 'none', base: 'flex' }}
    >
      <Stack gap={6} flexDirection="column" alignItems="center" mb={6}>
        {initiatives.map((initiative) => (
          <Widget
            key={initiative.name}
            activeTurn={initiative.name === activeTurn}
            initiative={initiative}
            onClick={handleToggleInitiativePlayed}
          />
        ))}
      </Stack>

      <InitiativeDrawer
        open={drawerOpen}
        initiatives={initiatives}
        onToggleInitiativePlayed={handleToggleInitiativePlayed}
        onClose={() => setDrawerOpen(false)}
      />
    </Box>
  );
};

export default InitiativeList;
