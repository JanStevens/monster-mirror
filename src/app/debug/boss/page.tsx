import { Grid } from '@style/jsx';
import { ENEMY_DECKS } from 'data/abilities';

import { getBossStats, getEnemyArtwork } from 'utils/deck.utils';

import type { BossDeck } from 'types/deck.types';
import { BossNames } from 'types/enemies.types';

import { Main, Navigation } from 'components/@navigation';
import { EnemyCard } from 'components/@scenario';

const BossDeckCards = ENEMY_DECKS['Boss'].cards;

const getAllBossDecks = (level: number): BossDeck[] =>
  Object.values(BossNames).map((bossName) => ({
    name: bossName,
    isBoss: true,
    stats: getBossStats(bossName, level),
    image: getEnemyArtwork(bossName),
    cards: BossDeckCards,
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
