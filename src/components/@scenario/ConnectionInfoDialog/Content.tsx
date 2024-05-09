import { Box, Stack } from '@style/jsx';
import { Icon } from 'icons';

import { notEmpty } from 'utils/typescript';

import { useStore } from 'services/stores';

import {
  Avatar,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  Text,
} from 'components/@common';
import ConnectionBadge from 'components/@scenario/ConnectionBadge';

interface Props {
  onClose: () => void;
}

const Content = ({ onClose }: Props) => {
  const { others, room, leaveRoom } = useStore((state) => state.liveblocks);

  const handleDisconnect = () => {
    leaveRoom();
    onClose();
  };

  if (!room) return null;

  const me = room.getSelf();
  const connectedUser = [me, ...others].filter(notEmpty);

  return (
    <Dialog.Content>
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title>Connection Info</Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>

        <Stack
          gap="8"
          flexDirection="column"
          display="grid"
          gridTemplateColumns="1fr 1fr"
        >
          <FormLabel fontSize="xl">Status</FormLabel>
          <ConnectionBadge justifySelf="flex-start" />

          <FormLabel fontSize="xl" alignSelf="flex-start">
            Users
          </FormLabel>

          <Stack gap="4" flexDirection="column">
            {connectedUser.map((other) => (
              <Box key={other.id} display="flex" alignItems="center" gap="4">
                <Avatar
                  borderWidth="1px"
                  borderStyle="solid"
                  fontWeight="normal"
                  letterSpacing="0.2em"
                  textIndent="0.1em"
                  borderColor={
                    me?.id === other.id ? 'accent.default' : 'border.outline'
                  }
                  name={other.presence.userName}
                />
                <Text fontSize="md">{other.presence.userName}</Text>
              </Box>
            ))}
          </Stack>

          <FormLabel fontSize="xl">Room</FormLabel>
          <pre>{room.id}</pre>

          <Button gridColumn="2" width="full" onClick={handleDisconnect}>
            Disconnect
          </Button>
        </Stack>

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
