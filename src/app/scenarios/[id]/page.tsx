import { Grid } from '@style/jsx';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { notFound } from 'next/navigation';

import { Main } from 'components/@navigation';
import { MonsterCard, Navbar } from 'components/@scenario';

import CardSelector from './CardSelector';
import { useDecks } from './useDeck';

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
      <Main>
        <Grid
          alignItems="flex-start"
          alignContent="flex-start"
          gridTemplateColumns={{
            mdDown: '1fr',
            base: 'repeat(auto-fill, minmax(372px, 1fr))',
          }}
          p="4"
          gap="4"
        >
          {decks.map((deck) => (
            <CardSelector key={deck.name} deck={deck} level={level} />
          ))}
        </Grid>
      </Main>
    </>
  );
};

export const generateStaticParams = () =>
  SCENARIO_DEFINITIONS.map((scenario) => ({ id: scenario.id.toString() }));

export default ScenarioPage;
