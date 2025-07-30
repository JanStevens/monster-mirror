'use client';

import { Box, Grid, HStack, Stack, VStack } from '@style/jsx';
import { Icon } from 'icons';
import Image from 'next/image';
import { useState } from 'react';

import { getEnemyArtwork } from 'utils/deck.utils';

import { useStore } from 'services/stores';
import { BossNames, EnemyNames, MonsterNames } from 'types/enemies.types';

import { Button } from 'components/@common/button';
import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';
import { Text } from 'components/@common/text';

import EnemyCard from './EnemyCard';

interface Props {
  open: boolean;
  onClose: () => void;
  onSelectedEnemies?: () => void;
}

const EnemySelectorModal = ({ open, onClose, onSelectedEnemies }: Props) => {
  const scenarioEnemies = useStore((state) => state.scenarioEnemies);
  const { setScenarioEnemies } = useStore((state) => state.actions);
  const [selectedMonsters, setSelectedMonsters] = useState<Set<EnemyNames>>(
    new Set(scenarioEnemies),
  );

  const toggleMonster = (monster: EnemyNames) => {
    const newSelection = new Set(selectedMonsters);
    if (newSelection.has(monster)) {
      newSelection.delete(monster);
    } else {
      newSelection.add(monster);
    }
    setSelectedMonsters(newSelection);
  };

  const handleConfirmSelection = () => {
    setScenarioEnemies(Array.from(selectedMonsters));
    onSelectedEnemies?.();
    onClose();
  };

  const monsters = Object.values(MonsterNames);
  const bosses = Object.values(BossNames);
  const selectedCount = selectedMonsters.size;
  const selectedMonstersCount = Array.from(selectedMonsters).filter((m) =>
    monsters.includes(m as MonsterNames),
  ).length;
  const selectedBossesCount = Array.from(selectedMonsters).filter((m) =>
    bosses.includes(m as BossNames),
  ).length;

  return (
    <Dialog.Root open={open} onOpenChange={({ open }) => !open && onClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          minWidth={{ smDown: 'sm', base: '2xl' }}
          maxHeight={{ smDown: '100vh', base: '80vh' }}
        >
          <Stack gap="6" p="6" flex="1">
            {/* Header */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Dialog.Title fontSize="2xl" fontWeight="normal">
                Select Monsters for Random Dungeon
              </Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
                  <Icon name="close" />
                </IconButton>
              </Dialog.CloseTrigger>
            </Box>

            {/* Content Area */}
            <Box overflowY="auto" flex="1">
              <VStack gap="6">
                {/* Regular Monsters */}
                <Box width="full">
                  <Text fontSize="xl" mb="4">
                    Monsters ({selectedMonstersCount}/{monsters.length}{' '}
                    selected)
                  </Text>
                  <Grid
                    gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))"
                    gap="3"
                  >
                    {monsters.map((monster) => (
                      <EnemyCard
                        key={monster}
                        monster={monster}
                        isSelected={selectedMonsters.has(monster)}
                        onToggle={toggleMonster}
                      />
                    ))}
                  </Grid>
                </Box>

                {/* Boss Monsters */}
                <Box width="full">
                  <Text fontSize="xl" mb="4">
                    Bosses ({selectedBossesCount}/{bosses.length} selected)
                  </Text>
                  <Grid
                    gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))"
                    gap="3"
                  >
                    {bosses.map((boss) => (
                      <EnemyCard
                        key={boss}
                        monster={boss}
                        isSelected={selectedMonsters.has(boss)}
                        onToggle={toggleMonster}
                      />
                    ))}
                  </Grid>
                </Box>
              </VStack>
            </Box>

            {/* Footer */}
            <HStack
              gap="3"
              justify="space-between"
              width="full"
              pt="4"
              borderTopWidth="1px"
            >
              <HStack gap="4">
                {Array.from(selectedMonsters)
                  .slice(0, 6)
                  .map((monster) => (
                    <Box
                      key={monster}
                      position="relative"
                      width="40px"
                      height="46px"
                      mx="auto"
                      borderRadius="md"
                      overflow="hidden"
                      cursor="pointer"
                      onClick={() => toggleMonster(monster)}
                    >
                      <Image
                        src={`/images/thumbnails/${getEnemyArtwork(monster)}`}
                        alt={monster}
                        fill
                        sizes="40px"
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  ))}
              </HStack>
              <HStack gap="3">
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.CloseTrigger>
                <Button
                  disabled={selectedCount === 0}
                  onClick={handleConfirmSelection}
                >
                  Start Dungeon
                </Button>
              </HStack>
            </HStack>
          </Stack>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default EnemySelectorModal;
