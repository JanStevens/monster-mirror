'use client';

import { Box, Divider } from '@style/jsx';
import { XIcon } from 'lucide-react';
import { useState } from 'react';

import { BossDeck, MonsterDeck } from 'hooks/useDecks';
import { MonsterCard } from 'types/data.types';

import { BossAbilityCard, MonsterAbilityCard } from 'components/@abilities';
import { Button, Card, IconButton } from 'components/@common';

import BossCardTitle from './BossCardTitle';
import CardThumbnail from './CardThumbnail';
import MonsterCardTitle from './EnemyCardTitle';

interface Props {
  deck: BossDeck | MonsterDeck;
  onClose: (deckName: string) => void;
}

const EnemyCard = ({ deck, onClose }: Props) => {
  const [cardSelected, setCardSelected] = useState<MonsterCard | undefined>();

  return (
    <Card>
      <Card.Header flexDir="row" gap="4" pt="3" px="3" pb="0">
        <CardThumbnail name={deck.name} />
        {deck.isBoss ? (
          <BossCardTitle deck={deck} />
        ) : (
          <MonsterCardTitle deck={deck} />
        )}

        <Box position="absolute" right="0" top="0">
          <IconButton
            aria-label="Close deck"
            variant="ghost"
            size="lg"
            onClick={() => onClose(deck.name)}
          >
            <XIcon strokeWidth="4" fontSize="24" />
          </IconButton>
        </Box>
      </Card.Header>
      <Divider my="4" />
      <Card.Body px="3" pb="3">
        {cardSelected ? (
          deck.isBoss ? (
            <BossAbilityCard
              card={cardSelected}
              deck={deck}
              onClose={() => setCardSelected(undefined)}
            />
          ) : (
            <MonsterAbilityCard
              card={cardSelected}
              deck={deck}
              onClose={() => setCardSelected(undefined)}
            />
          )
        ) : (
          <Box
            display="flex"
            gap="3"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            flexWrap="wrap"
            aspectRatio="437/280"
          >
            {deck.cards.map((card, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="2xl"
                fontSize="2xl"
                width="65px"
                onClick={() => {
                  setCardSelected(card);
                }}
              >
                {card.initiative}
              </Button>
            ))}
          </Box>
        )}
      </Card.Body>
    </Card>
  );
};

export default EnemyCard;
