import { Box, Stack } from '@style/jsx';
import { MONSTER_MOVER_TOOL } from 'data/tools';
import Icon from 'icons/Icon';
import { ExternalLinkIcon } from 'lucide-react';

import { Button } from 'components/@common/button';
import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';
import { Link } from 'components/@common/link';

interface Props {
  scenarioId: number;
}

const Content = ({ scenarioId }: Props) => {
  const monsterMoverUrl =
    MONSTER_MOVER_TOOL.find(({ id }) => id === scenarioId)?.url ??
    'https://gloom.aluminumangel.org';

  return (
    <Dialog.Content maxWidth="1/4">
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title fontSize="2xl" fontWeight="normal">
            Tools
          </Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>
        <Box display="flex" flexDir="column" mb="6" gap="4">
          <Link textStyle="lg" href={monsterMoverUrl} target="_blank">
            Monster mover / focus <ExternalLinkIcon />
          </Link>

          <Link
            textStyle="lg"
            href={`https://gloomhaven.one/#${scenarioId}`}
            target="_blank"
          >
            Monster line of sight <ExternalLinkIcon />
          </Link>

          <Link
            textStyle="lg"
            href="https://ninjawithkillmoon.github.io/utilities/enhancementCalculator"
            target="_blank"
          >
            Enhancement calculator <ExternalLinkIcon />
          </Link>

          <Link
            textStyle="lg"
            href="https://coda.io/@kennywong/gloomhaven/retirement-checklist-7"
            target="_blank"
          >
            Retirement checklist <ExternalLinkIcon />
          </Link>
        </Box>
        <Stack
          gap="3"
          direction="row"
          width="full"
          pb="env(safe-area-inset-bottom, 16px)"
        >
          <Dialog.CloseTrigger asChild>
            <Button variant="outline" width="full" fontWeight="normal">
              Close
            </Button>
          </Dialog.CloseTrigger>
        </Stack>
      </Stack>
    </Dialog.Content>
  );
};

export default Content;
