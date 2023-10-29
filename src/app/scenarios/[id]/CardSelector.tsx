'use client';

import { css } from '@style/css';
import { useState } from 'react';

import { MonsterCard } from 'types/data.types';

import AbilityCard from './AbilityCard';
import { Deck } from './useDeck';

interface Props {
  deck: Deck;
}

const CardSelector = ({ deck }: Props) => {
  const [cardSelected, setCardSelected] = useState<MonsterCard | undefined>();

  if (cardSelected) {
    return (
      <AbilityCard
        card={cardSelected}
        deck={deck}
        onClose={() => setCardSelected(undefined)}
      />
    );
  }

  return (
    <div
      className={css({
        aspectRatio: '437/296',
      })}
    >
      <h1 className={css({ textAlign: 'center', fontSize: '3rem' })}>
        {deck.name}
      </h1>
      <ul
        className={css({
          display: 'flex',
          gap: 3,
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          flexWrap: 'wrap',
          p: 6,
        })}
      >
        {deck.cards.map((card, idx) => (
          <li key={idx}>
            <button
              className={css({
                p: 3,
                border: '1px solid white',
                borderRadius: 4,
                textAlign: 'center',
                lineHeight: 0.9,
                width: '65px',
                color: 'white',
              })}
              onClick={() => {
                setCardSelected(card);
              }}
            >
              {card.initiative}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSelector;
