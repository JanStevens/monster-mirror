import { Box, Stack } from '@style/jsx';
import type { ScenarioDefinition } from 'data/scenarios';
import { Icon } from 'icons';

import { useDecks } from 'hooks/useDecks';
import { useStore } from 'services/stores';

import { Button } from 'components/@common/button';
import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';
import { Text } from 'components/@common/text';
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
        <Box
          display="flex"
          alignItems={{ smDown: 'flex-start', base: 'center' }}
          justifyContent="space-between"
        >
          <Dialog.Title
            display="flex"
            alignItems={{ smDown: 'flex-start', base: 'flex-end' }}
            gap={{ smDown: '1', base: '4' }}
            flexDirection={{ smDown: 'column', base: 'row' }}
          >
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
          rowGap={{ smDown: '4', base: '8' }}
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
        <Stack
          gap="3"
          direction="row"
          width="full"
          flex="1"
          alignItems="flex-end"
        >
          <Dialog.CloseTrigger asChild>
            <Button variant="outline" width="full">
              Close
            </Button>
          </Dialog.CloseTrigger>
        </Stack>
      </Stack>
    </Dialog.Content>
  );
};

export default Content;
