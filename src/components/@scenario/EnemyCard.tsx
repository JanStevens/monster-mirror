'use client';

import { Box, Divider } from '@style/jsx';
import { Icon } from 'icons';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'store/useStore';
import type { MonsterCard } from 'types/data.types';
import type { BossDeck, MonsterDeck } from 'types/deck.types';

import { BossAbilityCard, MonsterAbilityCard } from 'components/@abilities';
import { Button, Card, IconButton } from 'components/@common';

import BossCardTitle from './BossCardTitle';
import CardThumbnail from './CardThumbnail';
import MonsterCardTitle from './EnemyCardTitle';

interface Props {
  deck: BossDeck | MonsterDeck;
}

const EnemyCard = ({ deck }: Props) => {
  const [closeDeck, selectCard, activeCard] = useStore(
    useShallow((state) => [
      state.closeDeck,
      state.selectCard,
      state.activeCards[deck.name],
    ]),
  );

  const handleSelectCard = (card: MonsterCard) => selectCard(deck.name, card);

  return (
    <Card.Root>
      <Card.Header flexDir="row" gap="4" pt="3" px="3" pb="0">
        <CardThumbnail name={deck.name} image={deck.image} />
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
            css={{ '&:hover': { background: 'transparent' } }}
            onClick={() => closeDeck(deck.name)}
          >
            <Icon name="close" />
          </IconButton>
        </Box>
      </Card.Header>
      <Divider my="4" />
      <Card.Body px="3" pb="3">
        {activeCard ? (
          deck.isBoss ? (
            <BossAbilityCard card={activeCard} deck={deck} />
          ) : (
            <MonsterAbilityCard card={activeCard} deck={deck} />
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
                fontWeight="normal"
                onClick={() => handleSelectCard(card)}
              >
                {card.initiative}
              </Button>
            ))}
          </Box>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default EnemyCard;
