import { DECK_DEFINITIONS, DECKS } from 'data/abilities';

import {
  BossStats,
  getBossStats,
  getMonsterStats,
  MonsterStats,
} from 'utils/deck.utils';

import {
  DeckClasses,
  DeckNames,
  Scenario,
  ScenarioBossNames,
  ScenarioMonsterNames,
} from 'types/data.types';

const BOSS_KEY = 'Boss' as const;

export interface MonsterDeck {
  name: ScenarioMonsterNames;
  isBoss: false;
  stats: MonsterStats;
  class: Exclude<DeckClasses, 'Boss'>;
  cards: (typeof DECK_DEFINITIONS)[Exclude<DeckClasses, 'Boss'>]['cards'];
}

export interface BossDeck {
  name: ScenarioBossNames;
  isBoss: true;
  stats: BossStats;
  class: typeof BOSS_KEY;
  cards: (typeof DECK_DEFINITIONS)['Boss']['cards'];
}

const getScenarioLevelForDeck = (
  scenario: Scenario,
  level: number,
  deck: DeckNames,
) => {
  if (!scenario.specialRules?.length) return level;
  const matchingSpecialRule = scenario.specialRules.find(
    (rule) => rule.deck === deck,
  );
  if (!matchingSpecialRule) return level;
  return Math.min(7, matchingSpecialRule.extra_levels + level);
};

export const useDecks = (
  scenario: Scenario | undefined,
  level: number,
): (MonsterDeck | BossDeck)[] => {
  if (!scenario) return [];
  const decks = scenario?.decks.map((scenarioDeck) => {
    const isBoss = scenarioDeck.name.includes(BOSS_KEY);

    if (isBoss) {
      const deck = DECK_DEFINITIONS[BOSS_KEY];
      const bossName = scenarioDeck.name.replace(
        'Boss: ',
        '',
      ) as ScenarioBossNames;
      return {
        name: bossName,
        isBoss,
        class: BOSS_KEY,
        cards: deck.cards,
        stats: getBossStats(bossName, level),
      };
    } else {
      const deckName = scenarioDeck.name as Exclude<DeckNames, 'Boss'>;
      const deckClass = DECKS[deckName]?.class;
      const deck = DECK_DEFINITIONS[deckClass];
      const adjustedLevel = getScenarioLevelForDeck(scenario, level, deckName);
      const stats = getMonsterStats(
        deckName as ScenarioMonsterNames,
        adjustedLevel,
      );

      return {
        name: deckName,
        isBoss,
        stats,
        class: deck.class,
        cards: deck.cards,
      };
    }
  });

  // @ts-expect-error not sure how to  make TS happy here
  return decks;
};
