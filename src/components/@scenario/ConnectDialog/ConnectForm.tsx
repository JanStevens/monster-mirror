import { Stack } from '@style/jsx';
import { Icon } from 'icons';
import { CircleX } from 'lucide-react';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';

import { Alert, Button, Dialog, FormLabel, Input } from 'components/@common';

interface Props {
  hasError: boolean;
  onClose: () => void;
}

const ConnectForm = ({ hasError, onClose }: Props) => {
  const { pending } = useFormStatus();
  const { isStorageLoading, room, status } = useStore(
    (state) => state.liveblocks,
  );
  const [userId, userName] = useStore(
    useShallow((state) => [state.userId, state.userName]),
  );

  const isLoading = (pending || isStorageLoading) && !status;
  const isRoomLoaded =
    status === 'connected' && room && !isStorageLoading && !pending;

  useEffect(() => {
    if (isRoomLoaded) {
      onClose();
    }
  }, [isRoomLoaded, onClose]);

  if (isLoading && !hasError) {
    return (
      <Alert.Root>
        <Alert.Icon asChild>
          <Icon name="shuffle" />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Connecting...</Alert.Title>
          <Alert.Description>
            Please hold on, do you know your leading initiative card already?
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    );
  }

  return (
    <>
      <Stack gap="4">
        {hasError && (
          <Alert.Root>
            <Alert.Icon asChild>
              <CircleX />
            </Alert.Icon>
            <Alert.Content>
              <Alert.Title>Wrong password or username</Alert.Title>
              <Alert.Description>
                Did not find a matching username and password
              </Alert.Description>
            </Alert.Content>
          </Alert.Root>
        )}
        <input type="hidden" name="userId" value={userId} />
        <Stack gap="1.5">
          <FormLabel htmlFor="userName" fontSize="xl">
            Nickname
          </FormLabel>
          <Input
            id="userName"
            name="userName"
            autoComplete="off"
            size="xl"
            defaultValue={userName ?? ''}
          />
        </Stack>
        <Stack gap="1.5">
          <FormLabel htmlFor="password" fontSize="xl">
            Password
          </FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            size="xl"
          />
        </Stack>
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
            Cancel
          </Button>
        </Dialog.CloseTrigger>
        <Button width="full" type="submit">
          Confirm
        </Button>
      </Stack>
    </>
  );
};

export default ConnectForm;
