import { Grid } from '@style/jsx';
import { BOSS_DECK_DEFINITION, BOSS_STATS } from 'data/bosses';

import { getBossImage, getBossStats } from 'utils/deck.utils';

import type { ScenarioBossNames } from 'types/data.types';
import type { BossDeck } from 'types/deck.types';

import { Main, Navigation } from 'components/@navigation';
import { EnemyCard } from 'components/@scenario';

const getAllBossDecks = (level: number): BossDeck[] =>
  (Object.keys(BOSS_STATS) as ScenarioBossNames[]).map((deck) => ({
    name: deck,
    isBoss: true,
    stats: getBossStats(deck, level),
    image: getBossImage(deck),
    cards: BOSS_DECK_DEFINITION.cards,
  }));

const BossDebugPage = ({
  searchParams,
}: {
  searchParams: { level: string };
}) => {
  const level = searchParams?.level ? Number(searchParams?.level) : 1;
  const bossDecks = getAllBossDecks(level);

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
