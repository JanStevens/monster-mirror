'use client';
import { Box, Stack } from '@style/jsx';
import { connectRoom } from 'app/actions/connectRoom';
import { Icon } from 'icons';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import { useStore } from 'services/stores';

import { Dialog, IconButton } from 'components/@common';

import ConnectForm from './ConnectForm';

interface Props {
  onClose: () => void;
}

const Content = ({ onClose }: Props) => {
  const { id } = useParams();
  const { enterRoom } = useStore((state) => state.liveblocks);
  const [state, action] = useFormState(connectRoom, undefined);
  const { setUser } = useStore((state) => state.actions);

  useEffect(() => {
    if (!!state?.success) {
      // Set the user info
      setUser(state.userId, state.userName);
      // connect to the room
      enterRoom(`mm:scenarios:${id}`);
    }
  }, [enterRoom, id, setUser, state]);

  return (
    // @ts-expect-error typescript is not aware of this
    <Stack gap="6" p="6" flex="1" as="form" action={action}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Dialog.Title>Connect</Dialog.Title>
        <Dialog.CloseTrigger asChild>
          <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
            <Icon name="close" />
          </IconButton>
        </Dialog.CloseTrigger>
      </Box>

      <ConnectForm hasError={!!state?.errors?.length} onClose={onClose} />
    </Stack>
  );
};

export default Content;
