import { Grid } from '@style/jsx';
import type { ScenarioDefinition } from 'data/scenarios';
import { useEffect } from 'react';

import { useDecks } from 'hooks/useDecks';
import { useStore } from 'services/stores';

import { EnemyCard } from '.';
import PlaceholderCard from './PlaceholderCard';

interface Props {
  scenario: ScenarioDefinition;
}

const DeckList = ({ scenario }: Props) => {
  const { room, enterRoom, status } = useStore((state) => state.liveblocks);
  const { selectedDecks, availableDecks } = useDecks(scenario);

  // Ensures we stay in connected in the correct room
  useEffect(() => {
    if (status === 'connected') {
      const roomScenario = room?.id.split(':')[2];
      if (roomScenario !== scenario.id.toString()) {
        enterRoom(`mm:scenarios:${scenario.id}`);
      }
    }
  }, [enterRoom, room, scenario.id, status]);

  return (
    <Grid
      alignItems="stretch"
      alignContent="flex-start"
      gridTemplateColumns={{
        mdDown: '1fr',
        base: 'repeat(auto-fill, minmax(340px, 1fr))',
      }}
      gridAutoRows="1fr"
      p="4"
      gap="3"
    >
      {selectedDecks.map((deck) => (
        <EnemyCard key={deck.name} deck={deck} />
      ))}
      {availableDecks.length > 0 && <PlaceholderCard decks={availableDecks} />}
    </Grid>
  );
};

export default DeckList;
