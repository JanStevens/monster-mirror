'use client';

import { Box, Stack } from '@style/jsx';
import { useLayoutEffect, useState } from 'react';

import { useInitiative } from 'hooks/useInitiative';

import InitiativeDrawer from './InitiativeDrawer';
import Widget from './Widget';

const InitiativeList = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { initiatives, activeTurn, roundEnded, onToggleInitiativePlayed } =
    useInitiative();

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
      px="2"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      display={{ smDown: 'none', base: 'flex' }}
      visibility={initiatives.length ? 'visible' : 'hidden'}
    >
      <Stack gap={2} flexDirection="column" alignItems="center" mb={6}>
        {initiatives.map((initiative) => (
          <Widget
            key={initiative.name}
            activeTurn={initiative.name === activeTurn}
            initiative={initiative}
            onClick={onToggleInitiativePlayed}
          />
        ))}
      </Stack>

      <InitiativeDrawer
        open={drawerOpen}
        onExpandClick={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      />
    </Box>
  );
};

export default InitiativeList;
