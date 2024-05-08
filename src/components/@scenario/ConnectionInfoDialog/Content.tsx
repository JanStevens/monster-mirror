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
} from 'components/@common';

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
  const connectedUser = [...others, room.getSelf()].filter(notEmpty);

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

        <Stack gap="4" flexDirection="column">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flex="1"
          >
            <FormLabel fontSize="xl">Users</FormLabel>
            <Stack gap="4" flexDirection="row">
              {connectedUser.map((other) => (
                <Avatar
                  borderWidth="1px"
                  borderStyle="solid"
                  fontWeight="normal"
                  borderColor={
                    me?.id === other.id ? 'accent.default' : 'border.outline'
                  }
                  key={other.id}
                  name={other.presence.userName}
                />
              ))}
            </Stack>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flex="1"
          >
            <FormLabel fontSize="xl">Room</FormLabel>
            <pre>{room.id}</pre>
          </Box>
        </Stack>
        <Box display={{ smDown: 'block', base: 'none' }} flex="1" />

        <Stack
          gap="3"
          direction="row"
          width="full"
          flex="1"
          alignItems="flex-end"
        >
          <Button width="full" onClick={handleDisconnect}>
            Disconnect
          </Button>
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
