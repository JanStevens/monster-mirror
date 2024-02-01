'use client';

import { BossDeck, MonsterDeck } from 'hooks/useDecks';
import { useActiveDecks } from 'store/useDecksStore';

import { EnemyCard } from '.';
import PlaceholderCard from './PlaceholderCard';

interface Props {
  decks: (MonsterDeck | BossDeck)[];
}

const DeckList = ({ decks }: Props) => {
  const activeDeckNames = useActiveDecks((state) => state.decks);
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
        <EnemyCard key={deck.name} deck={deck} />
      ))}
      {availableDeckNames.length > 0 && (
        <PlaceholderCard deckNames={availableDeckNames} />
      )}
    </>
  );
};

export default DeckList;
