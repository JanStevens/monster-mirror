import { Stack } from '@style/jsx';
import { useEffect, useRef } from 'react';

import { hasProp, notEmpty } from 'utils/typescript';

import { useStore } from 'services/stores';

import { Avatar } from 'components/@common';

import { toast } from './Toaster';

const ConnectionStatusMapping = {
  connecting: {
    title: 'Connecting to room',
    description: 'Please wait...',
  },
  reconnecting: {
    title: 'Connection is offline',
    description: 'Reconnecting...',
  },
  connected: {
    title: 'Connected!',
    description: 'Enjoy the session!',
  },
} as const;

const ConnectionInfo = () => {
  const { status, room, others } = useStore((state) => state.liveblocks);
  const toastRef = useRef<string | undefined>();

  useEffect(() => {
    if (hasProp(ConnectionStatusMapping, status)) {
      toastRef.current = toast.upsert(ConnectionStatusMapping[status]);
    }

    // When connected remove the toast
    if (status === 'connected') {
      // TODO: this does not work at all
      toast.dismiss(toastRef.current);
    }
  }, [status, room]);

  // Don't bother if we have never connected
  if (status === undefined || !room) return null;
  const me = room.getSelf();
  const connectedUser = [...others, room.getSelf()].filter(notEmpty);

  return (
    <Stack gap="0" flexDirection="row" mr="12">
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
          mr="-16"
        />
      ))}
    </Stack>
  );
};

export default ConnectionInfo;
