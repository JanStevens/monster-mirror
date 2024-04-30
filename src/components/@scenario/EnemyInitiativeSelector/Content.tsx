import { Box, Stack } from '@style/jsx';
import { RawAbilityCard } from 'data/abilities';
import { Icon } from 'icons';

import { BossDeck, MonsterDeck } from 'types/deck.types';

import { BossAbilityCard, MonsterAbilityCard } from 'components/@abilities';
import { Dialog, IconButton } from 'components/@common';

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
      <Stack gap="6" p="6">
        <Dialog.Title fontSize="2xl" fontWeight="normal">
          Select the correct ability card
        </Dialog.Title>
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
      <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
        <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
          <Icon name="close" />
        </IconButton>
      </Dialog.CloseTrigger>
    </Dialog.Content>
  );
};

export default Content;
