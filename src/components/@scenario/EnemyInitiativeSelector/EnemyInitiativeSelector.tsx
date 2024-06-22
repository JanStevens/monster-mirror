'use client';
import { RadioGroup } from '@ark-ui/react/radio-group';
import { Box } from '@style/jsx';
import { RawAbilityCard } from 'data/abilities';
import { useState } from 'react';

import type { BossDeck, MonsterDeck } from 'types/deck.types';

import { RadioButtonGroup } from 'components/@common';

import DuplicateInitiativeDialog from './DuplicateInitiativeDialog';

interface Props {
  deck: BossDeck | MonsterDeck;
  onSelectCard: (card: RawAbilityCard) => void;
}

const EnemyInitiativeSelector = ({ deck, onSelectCard }: Props) => {
  const [duplicateInitiativeCards, setDuplicateInitiativeCards] = useState<
    RawAbilityCard[]
  >([]);

  const groupedCards = Object.groupBy(deck.cards, (c) => c.initiative);

  const handleValueChange = (value: string) => {
    const parsed = Number(value);
    const cards = groupedCards[parsed];
    if (!cards) return;

    if (cards.length === 1) {
      onSelectCard(cards[0]);
    } else {
      setDuplicateInitiativeCards(cards);
    }
  };

  return (
    <Box display="flex" aspectRatio="437/280" justifyContent="center">
      <RadioButtonGroup.Root
        variant="outline"
        size="xl"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        onValueChange={({ value }) => handleValueChange(value)}
      >
        {Object.keys(groupedCards).map((initiative) => (
          <RadioButtonGroup.Item
            key={initiative}
            value={initiative.toString()}
            py="8"
            width="66px"
          >
            <RadioButtonGroup.ItemControl />
            {/* Needed because else it wont work */}
            <RadioGroup.ItemHiddenInput />
            <RadioButtonGroup.ItemText fontWeight="normal" fontSize="2xl">
              {initiative}
            </RadioButtonGroup.ItemText>
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root>

      <DuplicateInitiativeDialog
        cards={duplicateInitiativeCards}
        deck={deck}
        onSubmit={onSelectCard}
        onClose={() => setDuplicateInitiativeCards([])}
      />
    </Box>
  );
};

export default EnemyInitiativeSelector;
