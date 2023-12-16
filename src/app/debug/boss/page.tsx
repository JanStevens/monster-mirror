import { Grid } from '@style/jsx';
import { DECK_DEFINITIONS } from 'data/abilities';
import { BOSS_STATS } from 'data/bosses';

import { getBossStats } from 'utils/deck.utils';

import { BossDeck } from 'hooks/useDecks';
import { ScenarioBossNames } from 'types/data.types';

import { Main, Navigation } from 'components/@navigation';
import { EnemyCard } from 'components/@scenario';

const BOSS_NAMES = Object.keys(BOSS_STATS);

const BossDebugPage = ({
  searchParams,
}: {
  searchParams: { level: string };
}) => {
  const level = searchParams?.level ? Number(searchParams?.level) : 1;
  const bossDecks = BOSS_NAMES.map((deck) => {
    const deckDef = DECK_DEFINITIONS['Boss'];
    const stats = getBossStats(deck as ScenarioBossNames, level);

    return {
      name: deck,
      isBoss: true,
      stats,
      class: deckDef.class,
      cards: deckDef.cards,
    };
  }) as BossDeck[];

  return (
    <>
      <Navigation>
        <Navigation.Logo title="Boss Debug page" />
      </Navigation>
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
          {bossDecks.map((deck) => (
            <EnemyCard key={deck.name} deck={deck} />
          ))}
        </Grid>
      </Main>
    </>
  );
};

export default BossDebugPage;
