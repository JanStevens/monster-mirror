'use client';

import { useDecks } from 'hooks/useDecks';
import { Scenario } from 'types/data.types';

import { EnemyCard } from './';
import PlaceholderCard from './PlaceholderCard';

interface Props {
  scenario: Scenario;
}

const DeckList = ({ scenario }: Props) => {
  const { selectedDecks, availableDecks } = useDecks(scenario);
  return (
    <>
      {selectedDecks.map((deck) => (
        <EnemyCard key={deck.name} deck={deck} />
      ))}
      {availableDecks.length > 0 && <PlaceholderCard decks={availableDecks} />}
    </>
  );
};

export default DeckList;
