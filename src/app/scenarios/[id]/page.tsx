import { css } from '@style/css';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { notFound } from 'next/navigation';

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

  // console.log(decks);

  return (
    <div
      className={css({
        display: 'grid',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gridTemplateColumns: 'repeat(auto-fill, minmax(372px, 1fr))',
        gap: 4,
        p: 4,
      })}
    >
      {decks.map((deck) => (
        <CardSelector key={deck.name} deck={deck} level={level} />
      ))}
    </div>
  );
};

export const generateStaticParams = () =>
  SCENARIO_DEFINITIONS.map((scenario) => ({ id: scenario.id.toString() }));

export default ScenarioPage;
