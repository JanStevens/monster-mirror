'use client';

import { useState } from 'react';

import { BossDeck, MonsterDeck } from 'hooks/useDecks';

import { EnemyCard } from '.';
import PlaceholderCard from './PlaceholderCard';

interface Props {
  decks: (MonsterDeck | BossDeck)[];
}

const DeckList = ({ decks }: Props) => {
  const [activeDeckNames, setActiveDeckNames] = useState<string[]>([]);

  const handleSelectDeck = (deckName: string) => {
    setActiveDeckNames((prev) => [...prev, deckName]);
  };

  const handleCloseDeck = (deckName: string) => {
    setActiveDeckNames((prev) => prev.filter((name) => name !== deckName));
  };

  const selectedDecks = decks
    .filter((deck) => activeDeckNames.includes(deck.name))
    .sort(
      (a, b) =>
        activeDeckNames.indexOf(a.name) - activeDeckNames.indexOf(b.name),
    );

  const availableDeckNames = decks
    .filter((deck) => !activeDeckNames.includes(deck.name))
    .map((deck) => deck.name);

  return (
    <>
      {selectedDecks.map((deck) => (
        <EnemyCard key={deck.name} deck={deck} onClose={handleCloseDeck} />
      ))}
      {availableDeckNames.length > 0 && (
        <PlaceholderCard
          deckNames={availableDeckNames}
          onSelectDeck={handleSelectDeck}
        />
      )}
    </>
  );
};

export default DeckList;
