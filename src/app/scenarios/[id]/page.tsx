import { Box } from '@style/jsx';
import { createSession } from 'app/lib/session';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { randomUUID } from 'node:crypto';
import { data } from 'react-router';

import { Main } from 'components/@navigation';
import { DeckList, InitiativeList, Navbar } from 'components/@scenario';

import type { Route } from './+types/page';

export const loader = ({ params }: Route.LoaderArgs) => {
  const scenario = SCENARIO_DEFINITIONS.find(
    (scenario) => scenario.id === Number(params.id),
  );
  return { scenario };
};

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();

  const userId = formData.get('userId') || randomUUID();
  const userName = formData.get('userName');
  const password = formData.get('password');

  if (
    !password ||
    typeof password !== 'string' ||
    typeof userId !== 'string' ||
    typeof userName !== 'string'
  ) {
    return data({ success: false, errors: 'unauthorized' }, { status: 400 });
  }

  // Ensures nobody can just access the app
  console.log(process.env.SECRET_PASSPHRASE);
  const PASSPHRASE = process.env.SECRET_PASSPHRASE ?? '';
  if (password?.toLowerCase() !== PASSPHRASE.toLowerCase()) {
    return data({ success: false, errors: 'unauthorized' }, { status: 400 });
  } else {
    const cookieHeader = await createSession(userId, userName);
    return data(
      { success: true, userId, userName, errors: null },
      { status: 200, headers: { 'Set-Cookie': cookieHeader } },
    );
  }
};

const ScenarioPage = ({ loaderData: { scenario } }: Route.ComponentProps) => {
  // TODO deal with this
  if (!scenario) return null;

  return (
    <>
      <Navbar scenario={scenario} />
      <div>
        <Main justify="start" flexDir="row">
          <Box flexDir="column" flex={1}>
            <DeckList scenario={scenario} />
          </Box>
          <InitiativeList />
        </Main>
      </div>
    </>
  );
};

export default ScenarioPage;
