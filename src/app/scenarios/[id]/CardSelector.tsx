'use client';

import { css } from '@style/css';
import Image from 'next/image';
import { useState } from 'react';

import { MonsterCard } from 'types/data.types';

import BackImage from './back.jpg';
import BossAbilityCard from './BossAbilityCard';
import MonsterAbilityCard from './MonsterAbilityCard';
import { BossDeck, MonsterDeck } from './useDeck';

interface Props {
  deck: BossDeck | MonsterDeck;
  level: number;
}

const CardSelector = ({ deck, level }: Props) => {
  const [cardSelected, setCardSelected] = useState<MonsterCard | undefined>();

  if (cardSelected) {
    if (deck.isBoss) {
      return (
        <BossAbilityCard
          card={cardSelected}
          deck={deck}
          onClose={() => setCardSelected(undefined)}
        />
      );
    } else {
      return (
        <MonsterAbilityCard
          card={cardSelected}
          deck={deck}
          onClose={() => setCardSelected(undefined)}
        />
      );
    }
  }

  return (
    <div
      className={css({
        display: 'flex',
        textAlign: 'center',
        aspectRatio: '437/296',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '15px',
        textShadow: '1px 2px 3px black',
      })}
    >
      <Image
        src={BackImage}
        alt="back ability card"
        fill
        priority
        className={css({ objectFit: 'cover', zIndex: 0 })}
        sizes="437px"
      />

      <ul
        className={css({
          display: 'flex',
          gap: 3,
          alignItems: 'center',
          alignContent: 'flex-start',
          justifyContent: 'center',
          fontSize: '2.5rem',
          flexWrap: 'wrap',
          p: 6,
          zIndex: 1,
        })}
      >
        {deck.cards.map((card, idx) => (
          <li key={idx}>
            <button
              className={css({
                p: 3,
                bgColor: 'white',
                borderRadius: 15,
                textAlign: 'center',
                lineHeight: 0.9,
                width: '65px',
                color: 'black',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
                textShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
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
      <h1
        className={css({
          position: 'absolute',
          bottom: '15.5%',
          width: '100%',
          textAlign: 'center',
          fontSize: '1.3rem',
          boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
        })}
      >
        {deck.name} - {level}
      </h1>
    </div>
  );
};

export default CardSelector;
