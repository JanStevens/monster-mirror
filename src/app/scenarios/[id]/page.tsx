import { Grid } from '@style/jsx';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { notFound } from 'next/navigation';

import { useDecks } from 'hooks/useDecks';

import { Main } from 'components/@navigation';
import { EnemyCard, Navbar } from 'components/@scenario';

const ScenarioPage = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { level: string };
}) => {
  const scenario = SCENARIO_DEFINITIONS.find(
    (scenario) => scenario.id === Number(params.id),
  );
  const level = searchParams?.level ? Number(searchParams?.level) : 1;

  const decks = useDecks(scenario, level);

  if (!scenario || level < 0 || level > 9 || !decks.length) return notFound();

  return (
    <>
      <Navbar scenarioName={scenario.name} level={level} />
      <Main justify="start">
        <Grid
          alignItems="flex-start"
          alignContent="flex-start"
          gridTemplateColumns={{
            mdDown: '1fr',
            base: 'repeat(auto-fill, minmax(372px, 1fr))',
          }}
          p="4"
          gap="3"
        >
          {decks.map((deck) => (
            <EnemyCard key={deck.name} deck={deck} />
          ))}
        </Grid>
      </Main>
    </>
  );
};

export const generateStaticParams = () =>
  SCENARIO_DEFINITIONS.map((scenario) => ({ id: scenario.id.toString() }));

export default ScenarioPage;
