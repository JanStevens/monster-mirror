import { DECK_DEFINITIONS, DECKS } from 'data/abilities';
import { BOSS_STATS } from 'data/bosses';
import { MONSTER_STATS } from 'data/monsters';

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
  stats: ReturnType<typeof getMonsterStats>;
  class: Exclude<DeckClasses, 'Boss'>;
  cards: (typeof DECK_DEFINITIONS)[Exclude<DeckClasses, 'Boss'>]['cards'];
}

export interface BossDeck {
  name: ScenarioBossNames;
  isBoss: true;
  stats: ReturnType<typeof getBossStats>;
  class: typeof BOSS_KEY;
  cards: (typeof DECK_DEFINITIONS)['Boss']['cards'];
}

const getMonsterStats = (name: ScenarioMonsterNames, level: number) => {
  const scaledStats = MONSTER_STATS[name]['level'][level];
  return {
    attack: [scaledStats['normal']['attack'], scaledStats['elite']['attack']],
    move: [scaledStats['normal']['move'], scaledStats['elite']['move']],
    range: [scaledStats['normal']['range'], scaledStats['elite']['range']],
    attributes: [
      scaledStats['normal']['attributes'],
      scaledStats['elite']['attributes'],
    ],
    health: [scaledStats['normal']['health'], scaledStats['elite']['health']],
  };
};

const getBossStats = (name: ScenarioBossNames, level: number) => {
  const scaledStats = BOSS_STATS[name]['level'][level];
  return {
    attack: [scaledStats['attack']],
    move: [scaledStats['move']],
    range: [scaledStats['range']],
    special1: scaledStats['special1'],
    special2: scaledStats['special2'],
    immunities: scaledStats['immunities'],
    notes: scaledStats['notes'],
    health: [scaledStats['health']],
  };
};

export const useDecks = (
  scenario: Scenario | undefined,
  level: number,
): MonsterDeck[] | BossDeck[] => {
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

      const stats = getMonsterStats(deckName as ScenarioMonsterNames, level);

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
