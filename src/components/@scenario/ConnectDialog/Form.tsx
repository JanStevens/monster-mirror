import { Stack } from '@style/jsx';
import { connectRoom } from 'app/actions/connectRoom';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useFormState } from 'react-dom';

import { useStore } from 'services/stores';

interface Props {
  children: ReactNode;
}

const Form = ({ children }: Props) => {
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
      {children}
    </Stack>
  );
};

export default Form;
