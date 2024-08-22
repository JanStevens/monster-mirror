import { Box, Stack } from '@style/jsx';
import GithubIcon from 'icons/GithubIcon';
import Icon from 'icons/Icon';

import { Button } from 'components/@common/button';
import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';
import { Link } from 'components/@common/link';
import { Text } from 'components/@common/text';

const Content = () => {
  return (
    <Dialog.Content maxWidth="1/4">
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title fontSize="2xl" fontWeight="normal">
            About Monster Mirror
          </Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>

        <Box display="flex" flexDir="column" mb="6" gap="4">
          <Text fontSize="lg">
            Gloomhaven and all related properties, images and text are owned by{' '}
            <Link href="https://cephalofair.com/" target="_blank">
              Cephalofair Games
            </Link>
            . This app is not affiliated with or endorsed by Cephalofair Games.
            It is a fan-made tool for the Gloomhaven board game.
          </Text>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="lg">
              Running on{' '}
              <Link
                href={`https://github.com/JanStevens/monster-mirror/releases/tag/${process.env.NEXT_PUBLIC_APP_VERSION}`}
              >
                v{process.env.NEXT_PUBLIC_APP_VERSION}
              </Link>
            </Text>
            <Text>
              <Link href="https://github.com/JanStevens/monster-mirror">
                <GithubIcon />
                Source Code
              </Link>
            </Text>
          </Box>
        </Box>

        <Stack gap="3" direction="row" width="full">
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
