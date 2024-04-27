'use client';

import { Box, Stack } from '@style/jsx';
import { Icon } from 'icons';
import { ArrowLeftFromLineIcon } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';

import { useInitiative } from 'hooks/useInitiative';
import { useStore } from 'services/stores';
import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';

import { Drawer, IconButton } from 'components/@common';

import Item from './Item';
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

      {!!initiatives.length && (
        <Drawer.Root
          open={drawerOpen}
          onOpenChange={(e) => setDrawerOpen(e.open)}
        >
          <Drawer.Trigger asChild>
            <ArrowLeftFromLineIcon size={24} />
          </Drawer.Trigger>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content gridTemplateRows="auto 1fr 0">
              <Drawer.Header
                flexDirection="row"
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <Drawer.Title fontSize="2xl" fontWeight="normal">
                  Initiative overview
                </Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <IconButton variant="ghost">
                    <Icon name="close" />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <Stack gap={4} flexDirection="column">
                  {initiatives.map((initiative) => (
                    <Item
                      key={initiative.name}
                      initiative={initiative}
                      onClick={handleToggleInitiativePlayed}
                    />
                  ))}
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      )}
    </Box>
  );
};

export default InitiativeList;
