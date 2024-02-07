import { Grid } from '@style/jsx';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { notFound } from 'next/navigation';

import { Main } from 'components/@navigation';
import { DeckList, Navbar } from 'components/@scenario';
import { UseWakeLock } from 'components/@utils';

const ScenarioPage = ({ params }: { params: { id: string } }) => {
  const scenario = SCENARIO_DEFINITIONS.find(
    (scenario) => scenario.id === Number(params.id),
  );

  if (!scenario) return notFound();

  return (
    <>
      <Navbar scenarioName={scenario.name} />
      <Main justify="start">
        <Grid
          alignItems="stretch"
          alignContent="flex-start"
          gridTemplateColumns={{
            mdDown: '1fr',
            base: 'repeat(auto-fill, minmax(372px, 1fr))',
          }}
          p="4"
          gap="3"
        >
          <DeckList scenario={scenario} />
        </Grid>
      </Main>
      <UseWakeLock />
    </>
  );
};

export const generateStaticParams = () =>
  SCENARIO_DEFINITIONS.map((scenario) => ({ id: scenario.id.toString() }));

export default ScenarioPage;
