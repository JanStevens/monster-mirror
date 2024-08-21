import { Stack } from '@style/jsx';
import { CSSProperties } from 'react';

import { notEmpty } from 'utils/typescript';

import { useStore } from 'services/stores';

import { Avatar } from 'components/@common/avatar';

import ConnectionBadge from './ConnectionBadge';

interface Props {
  onClick: () => void;
}

const ConnectionInfo = ({ onClick }: Props) => {
  const { status, room, others } = useStore((state) => state.liveblocks);

  // Don't bother if we have never connected
  if (status === undefined || !room) return null;
  const me = room.getSelf();
  const connectedUser = [room.getSelf(), ...others].filter(notEmpty);

  return (
    <>
      <ConnectionBadge display={{ smDown: 'none', base: 'flex' }} />
      <Stack
        gap="0"
        flexDirection="row"
        mr="12"
        // TODO: we need to apply this dynamically, because of the negative margin
        pl="8"
        onClick={onClick}
        display={{ smDown: 'none', base: 'flex' }}
      >
        {connectedUser.map((other, idx) => (
          <Avatar
            borderWidth="1px"
            borderStyle="solid"
            fontWeight="normal"
            style={
              {
                '--avatar-z-index': connectedUser.length - idx,
              } as CSSProperties
            }
            borderColor={
              me?.id === other.id ? 'accent.default' : 'border.outline'
            }
            key={other.id}
            name={other.presence.userName}
            m="1"
            outline="3px solid"
            outlineColor="bg.canvas"
            mr="-4.5rem"
            zIndex="var(--avatar-z-index)"
          />
        ))}
      </Stack>
    </>
  );
};

export default ConnectionInfo;
