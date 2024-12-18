import { css } from '@style/css';
import { Box } from '@style/jsx';
import type { action as Page } from 'app/routes/scenario-detail';
import { Icon } from 'icons';
import { useEffect } from 'react';
import { useFetcher, useParams } from 'react-router';

import { useStore } from 'services/stores';

import { Dialog } from 'components/@common/dialog';
import { IconButton } from 'components/@common/icon-button';

import ConnectForm from './ConnectForm';

interface Props {
  onClose: () => void;
}

const Content = ({ onClose }: Props) => {
  const { id } = useParams();
  const { enterRoom } = useStore((state) => state.liveblocks);
  const fetcher = useFetcher<typeof Page>();
  const { setUser } = useStore((state) => state.actions);

  useEffect(() => {
    if (!!fetcher.data?.success && 'userId' in fetcher.data) {
      // Set the user info
      setUser(fetcher.data.userId, fetcher.data.userName);
      // connect to the room
      enterRoom(`mm:scenarios:${id}`);
    }
  }, [enterRoom, id, setUser, fetcher.data]);

  return (
    <fetcher.Form
      method="post"
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '6',
        flex: '1',
        p: '6',
      })}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Dialog.Title>Connect</Dialog.Title>
        <Dialog.CloseTrigger asChild>
          <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
            <Icon name="close" />
          </IconButton>
        </Dialog.CloseTrigger>
      </Box>

      <ConnectForm
        hasError={!!fetcher?.data?.errors}
        pending={fetcher.state === 'submitting'}
        onClose={onClose}
      />
    </fetcher.Form>
  );
};

export default Content;
