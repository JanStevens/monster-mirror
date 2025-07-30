'use client';

import { Box, Flex } from '@style/jsx';
import { ScenarioDefinition } from 'data/scenarios';
import { useState } from 'react';

import { useStore } from 'services/stores';

import { Button } from 'components/@common/button';
import { Card } from 'components/@common/card';
import EnemySelectorModal from 'components/@config/EnemySelectorModal/EnemySelectorModal';
import { Main } from 'components/@navigation';
import { DeckList, InitiativeList, Navbar } from 'components/@scenario';

const RandomDungeonPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const randomDungeonMonsters = useStore((state) => state.scenarioEnemies);

  const hasSelectedMonsters = randomDungeonMonsters.length > 0;

  // Create a custom scenario definition for the selected monsters
  const customScenario: ScenarioDefinition = {
    id: 99, // Using a special ID for random dungeons
    name: '#99 Random Dungeon',
    enemies: randomDungeonMonsters,
  };

  return (
    <>
      <Navbar scenario={customScenario} isRandomDungeon />

      {hasSelectedMonsters ? (
        <div>
          <Main justify="start" flexDir="row">
            <Box flexDir="column" flex={1}>
              <DeckList scenario={customScenario} />
            </Box>
            <InitiativeList />
          </Main>
        </div>
      ) : (
        <Main>
          <Flex
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
          >
            <Card.Root
              width={{
                sm: 'xl',
                md: 'xl',
                lg: '2xl',
                xl: '2xl',
              }}
            >
              <Card.Header textAlign="center" my={{ lgDown: 2, base: 4 }}>
                <Card.Title
                  fontWeight="normal"
                  fontSize={{ lgDown: '3xl', base: '4xl' }}
                >
                  Random Dungeon
                </Card.Title>
              </Card.Header>

              <Card.Body textAlign="center" py="8">
                <Button
                  variant="solid"
                  size="2xl"
                  fontSize="3xl"
                  width="100%"
                  fontWeight="normal"
                  onClick={() => setIsModalOpen(true)}
                >
                  Select Monsters
                </Button>
              </Card.Body>
            </Card.Root>
            <EnemySelectorModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </Flex>
        </Main>
      )}
    </>
  );
};

export default RandomDungeonPage;
