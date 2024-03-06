import { Grid } from '@style/jsx';
import { ENEMY_DECKS } from 'data/abilities';
import { MONSTER_STATS } from 'data/monsters';

import { getEnemyArtwork, getMonsterStats } from 'utils/deck.utils';

import type { MonsterDeck } from 'types/deck.types';
import { MonsterNames } from 'types/enemies.types';

import { Main, Navigation } from 'components/@navigation';
import { EnemyCard } from 'components/@scenario';

const getAllMonsterDecks = (level: number): MonsterDeck[] =>
  Object.values(MonsterNames).map((monsterName) => {
    const baseStats = MONSTER_STATS[monsterName];
    const deck = ENEMY_DECKS[baseStats.deck];
    const stats = getMonsterStats(monsterName, level);

    return {
      name: monsterName,
      isBoss: false,
      stats,
      image: getEnemyArtwork(monsterName),
      cards: deck.cards,
    };
  });

const MonsterDebugPage = ({
  searchParams,
}: {
  searchParams: { level: string };
}) => {
  const level = searchParams?.level ? Number(searchParams?.level) : 1;
  const monsterDecks = getAllMonsterDecks(level);

  return (
    <>
      <Navigation>
        <Navigation.Logo title="Monster Debug page" />
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
          {monsterDecks.map((deck) => (
            <EnemyCard key={deck.name} deck={deck} />
          ))}
        </Grid>
      </Main>
    </>
  );
};

export default MonsterDebugPage;
