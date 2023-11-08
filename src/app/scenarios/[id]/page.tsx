import { css } from '@style/css';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import Link from 'next/link';
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

  return (
    <>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          my: '4',
          px: '4',
          gap: '4',
        })}
      >
        <Link
          className={css({
            fontSize: '1.5em',
            display: { mdDown: 'none' },
          })}
          href="/"
        >
          Back
        </Link>
        <h1 className={css({ fontSize: '1.5rem', whiteSpace: 'nowrap' })}>
          {scenario.name}
        </h1>
        <h1 className={css({ fontSize: '1.5em' })}>lvl: {level}</h1>
      </div>

      <div
        className={css({
          display: 'grid',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          gridTemplateColumns: {
            mdDown: '1fr',
            base: 'repeat(auto-fill, minmax(372px, 1fr))',
          },
          p: 4,
          gap: 4,
        })}
      >
        {decks.map((deck) => (
          <CardSelector key={deck.name} deck={deck} level={level} />
        ))}
      </div>
    </>
  );
};

export const generateStaticParams = () =>
  SCENARIO_DEFINITIONS.map((scenario) => ({ id: scenario.id.toString() }));

export default ScenarioPage;
