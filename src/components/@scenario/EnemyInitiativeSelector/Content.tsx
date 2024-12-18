/* eslint-disable @typescript-eslint/unbound-method */
import { Box, Stack } from '@style/jsx';
import type { RawAbilityCard } from 'data/abilities';
import { Icon } from 'icons';

import type { BossDeck, MonsterDeck } from 'types/deck.types';

import BossAbilityCard from 'components/@abilities/BossAbilityCard';
import MonsterAbilityCard from 'components/@abilities/MonsterAbilityCard';
import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';

interface Props {
  cards: RawAbilityCard[];
  deck: MonsterDeck | BossDeck;
  onSubmit(card: RawAbilityCard): void;
  onClose: () => void;
}

const Content = ({ cards, deck, onSubmit, onClose }: Props) => {
  const handleSubmit = (card: RawAbilityCard) => {
    onSubmit(card);
    onClose();
  };

  return (
    <Dialog.Content minWidth={{ smDown: 'sm', base: '2xl' }}>
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title>Select the correct ability card</Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>

        <Stack
          gap="4"
          display="grid"
          gridTemplateColumns={{ smDown: '1fr', base: '1fr 1fr' }}
        >
          {cards.map((card, idx) => (
            <Box key={idx} onClick={() => handleSubmit(card)}>
              {deck.isBoss ? (
                <BossAbilityCard card={card} deck={deck} />
              ) : (
                <MonsterAbilityCard card={card} deck={deck} />
              )}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Dialog.Content>
  );
};

export default Content;
