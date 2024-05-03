import { Box, Stack } from '@style/jsx';
import { ScenarioDefinition } from 'data/scenarios';
import { Icon } from 'icons';

import { useDecks } from 'hooks/useDecks';
import { useStore } from 'services/stores';

import { Dialog, IconButton, Text } from 'components/@common';
import BossCardTitle from 'components/@scenario/BossCardTitle';
import CardThumbnail from 'components/@scenario/CardThumbnail';
import MonsterCardTitle from 'components/@scenario/MonsterCardTitle';

interface Props {
  scenario: ScenarioDefinition;
  onClose: () => void;
}

const Content = ({ scenario }: Props) => {
  const { decks } = useDecks(scenario);
  const level = useStore((state) => state.level);

  return (
    <Dialog.Content>
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title display="flex" alignItems="flex-end" gap="4">
            Scenario: {scenario.name}
            <Text fontSize="xl" color="gray.10">
              level: {level}
            </Text>
          </Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton
              aria-label="Close Dialog"
              variant="ghost"
              size="sm"
              mr="-3"
            >
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            smDown: '1fr',
            base: 'repeat(2, minmax(0, 1fr))',
          }}
          overflow="scroll"
          flex="1"
          rowGap="8"
          columnGap="16"
        >
          {decks.map((deck) => (
            <Box key={deck.name} display="flex" alignItems="center" gap="4">
              <CardThumbnail name={deck.name} image={deck.image} />
              {deck.isBoss ? (
                <BossCardTitle deck={deck} />
              ) : (
                <MonsterCardTitle deck={deck} />
              )}
            </Box>
          ))}
        </Box>
      </Stack>
    </Dialog.Content>
  );
};

export default Content;
