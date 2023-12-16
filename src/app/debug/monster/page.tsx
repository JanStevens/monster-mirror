import { Grid } from '@style/jsx';
import { DECK_DEFINITIONS, DECKS } from 'data/abilities';

import { getMonsterStats } from 'utils/deck.utils';

import { MonsterDeck } from 'hooks/useDecks';
import { ScenarioMonsterNames } from 'types/data.types';

import { Main, Navigation } from 'components/@navigation';
import { EnemyCard } from 'components/@scenario';

const MonsterDebugPage = ({
  searchParams,
}: {
  searchParams: { level: string };
}) => {
  const level = searchParams?.level ? Number(searchParams?.level) : 1;
  const monsterDecks = Object.values(DECKS)
    .filter((deck) => deck.class !== 'Boss')
    .map((deck) => {
      const deckDef = DECK_DEFINITIONS[deck.class];
      const stats = getMonsterStats(deck.name as ScenarioMonsterNames, level);

      return {
        name: deck.name,
        isBoss: false,
        stats,
        class: deckDef.class,
        cards: deckDef.cards,
      };
    }) as MonsterDeck[];

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
