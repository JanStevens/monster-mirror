import { Box, Stack } from '@style/jsx';
import { Icon } from 'icons';
import { useState } from 'react';

import { useStore } from 'services/stores';

import { Button, Dialog, IconButton, Input } from 'components/@common';

interface Props {
  onClose: () => void;
}

const STATIC_ROOM = 'jawsofcentraal';

const Content = ({ onClose }: Props) => {
  const { setRoom: setStoreRoom } = useStore((state) => state.actions);
  const { enterRoom, leaveRoom } = useStore((state) => state.liveblocks);

  const [room, setRoom] = useState('');

  const handleSubmit = () => {
    const cleanedRoom = room.toLowerCase();
    if (cleanedRoom === STATIC_ROOM) {
      setStoreRoom(cleanedRoom);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      enterRoom(cleanedRoom);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      leaveRoom(STATIC_ROOM);
    }
    onClose();
  };

  return (
    <Dialog.Content>
      <Stack gap="6" p="6" flex="1">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dialog.Title>Connected view</Dialog.Title>
          <Dialog.CloseTrigger asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <Icon name="close" />
            </IconButton>
          </Dialog.CloseTrigger>
        </Box>

        <Box>
          <Input value={room} onChange={(e) => setRoom(e.target.value ?? '')} />
        </Box>

        <Stack
          gap="3"
          direction="row"
          width="full"
          flex="1"
          alignItems="flex-end"
        >
          <Dialog.CloseTrigger asChild>
            <Button variant="outline" width="full" onClick={onClose}>
              Cancel
            </Button>
          </Dialog.CloseTrigger>
          <Button width="full" onClick={handleSubmit}>
            Confirm
          </Button>
        </Stack>
      </Stack>
    </Dialog.Content>
  );
};

export default Content;
