'use client';

import { Box, Divider, styled } from '@style/jsx';
import { RawAbilityCard } from 'data/abilities';
import { Icon } from 'icons';
import { useShallow } from 'zustand/react/shallow';

import { useInitiative } from 'hooks/useInitiative';
import { useStore } from 'services/stores';
import type { BossDeck, MonsterDeck } from 'types/deck.types';

import { BossAbilityCard, MonsterAbilityCard } from 'components/@abilities';
import { Card, IconButton } from 'components/@common';

import BossCardTitle from './BossCardTitle';
import CardThumbnail from './CardThumbnail';
import EnemyInitiativeSelector from './EnemyInitiativeSelector';
import MonsterCardTitle from './MonsterCardTitle';

const MonsterCard = styled(Card.Root, {
  base: {
    transition: 'all 300ms ease-out',
    boxShadow: 'lg',
  },
  variants: {
    state: {
      default: {
        boxShadow: 'lg',
      },
      active: {
        boxShadow: '0 0 5px 5px var(--colors-zinc-700)',
      },
      inactive: {
        animation: 'enemyCardPlayed 300ms ease-out forwards',
      },
    },
  },
});

interface Props {
  deck: BossDeck | MonsterDeck;
}

const EnemyCard = ({ deck }: Props) => {
  const [activeCard] = useStore(
    useShallow((state) => [state.activeCards[deck.name]]),
  );
  const { isActiveTurn, hasPlayed } = useInitiative();
  const { closeEnemy, selectCard, clearCard } = useStore(
    (state) => state.actions,
  );

  const handleSelectCard = (card: RawAbilityCard) =>
    selectCard(deck.name, card);

  const handleClearCard = () => clearCard(deck.name);

  const hasEnemyPlayed = hasPlayed(deck.name);
  const isEnemyActive = isActiveTurn(deck.name);
  const state = hasEnemyPlayed
    ? 'inactive'
    : isEnemyActive
      ? 'active'
      : 'default';

  return (
    <MonsterCard state={state}>
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
            onClick={() => closeEnemy(deck.name)}
          >
            <Icon name="close" />
          </IconButton>
        </Box>
      </Card.Header>
      <Divider my="4" />
      <Card.Body px="3" pb="3">
        {activeCard && !hasEnemyPlayed ? (
          deck.isBoss ? (
            <BossAbilityCard
              card={activeCard}
              deck={deck}
              onClose={handleClearCard}
            />
          ) : (
            <MonsterAbilityCard
              card={activeCard}
              deck={deck}
              onClose={handleClearCard}
            />
          )
        ) : (
          <EnemyInitiativeSelector
            deck={deck}
            onSelectCard={handleSelectCard}
          />
        )}
      </Card.Body>
    </MonsterCard>
  );
};

export default EnemyCard;
