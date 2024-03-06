'use client';

import { Grid } from '@style/jsx';
import { ScenarioDefinition } from 'data/scenarios';

import { useDecks } from 'hooks/useDecks';

import { EnemyCard } from './';
import PlaceholderCard from './PlaceholderCard';

interface Props {
  scenario: ScenarioDefinition;
}

const DeckList = ({ scenario }: Props) => {
  const { selectedDecks, availableDecks } = useDecks(scenario);
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
