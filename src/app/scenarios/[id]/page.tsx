import { Box } from '@style/jsx';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { notFound } from 'next/navigation';

import { Main } from 'components/@navigation';
import { DeckList, InitiativeList, Navbar } from 'components/@scenario';

const ScenarioPage = ({ params }: { params: { id: string } }) => {
  const scenario = SCENARIO_DEFINITIONS.find(
    (scenario) => scenario.id === Number(params.id),
  );

  if (!scenario) return notFound();

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

export const generateStaticParams = () =>
  SCENARIO_DEFINITIONS.map((scenario) => ({ id: scenario.id.toString() }));

export default ScenarioPage;
