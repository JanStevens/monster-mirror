'use client';

import { Box, Divider } from '@style/jsx';
import { Icon } from 'icons';

import { useStore } from 'services/stores';
import type { BossDeck, MonsterDeck } from 'types/deck.types';

import { BossAbilityCard, MonsterAbilityCard } from 'components/@abilities';
import { Card, IconButton, RadioButtonGroup } from 'components/@common';

import BossCardTitle from './BossCardTitle';
import CardThumbnail from './CardThumbnail';
import MonsterCardTitle from './MonsterCardTitle';

interface Props {
  deck: BossDeck | MonsterDeck;
}

const EnemyCard = ({ deck }: Props) => {
  const activeCard = useStore((state) => state.activeCards[deck.name]);
  const { closeEnemy, selectCard, clearCard } = useStore(
    (state) => state.actions,
  );

  const handleSelectCard = ({ value }: { value: string }) =>
    selectCard(deck.name, deck.cards[Number(value)]);

  const handleClearCard = () => clearCard(deck.name);

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
            onClick={() => closeEnemy(deck.name)}
          >
            <Icon name="close" />
          </IconButton>
        </Box>
      </Card.Header>
      <Divider my="4" />
      <Card.Body px="3" pb="3">
        {activeCard ? (
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
          <Box display="flex" aspectRatio="437/280">
            <RadioButtonGroup.Root
              variant="outline"
              size="xl"
              alignItems="center"
              alignContent="center"
              justifyContent="center"
              onValueChange={handleSelectCard}
            >
              {deck.cards.map((card, idx) => (
                <RadioButtonGroup.Item
                  key={idx}
                  value={idx.toString()}
                  py="8"
                  width="66px"
                >
                  <RadioButtonGroup.ItemControl />
                  <RadioButtonGroup.ItemText fontWeight="normal" fontSize="2xl">
                    {card.initiative}
                  </RadioButtonGroup.ItemText>
                </RadioButtonGroup.Item>
              ))}
            </RadioButtonGroup.Root>
          </Box>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default EnemyCard;
