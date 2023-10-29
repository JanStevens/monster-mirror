import { DECK_DEFINITONS, DECKS } from 'data/abilities';
import { MONSTER_STATS } from 'data/monsters';

import { Scenario, ScenarioMonsterDeckNames } from 'types/data.types';

const STAT_KEYS = ['attack', 'move', 'range', 'attributes', 'health'] as const;
const BOSS_KEY = 'Boss' as const;

export type Deck = ReturnType<typeof useDecks>[number];

export const useDecks = (scenario: Scenario | undefined, level: number) => {
  if (!scenario) return [];
  const decks = scenario?.decks.map((scenarioDeck) => {
    const isBoss = scenarioDeck.name.includes(BOSS_KEY);
    const name = isBoss
      ? BOSS_KEY
      : (scenarioDeck.name as ScenarioMonsterDeckNames);
    const deckClass = DECKS[name]?.class;
    const deck = DECK_DEFINITONS[deckClass];

    const stats = STAT_KEYS.reduce<{
      attack: number[];
      move: number[];
      range: number[];
      attributes: string[];
      health: number[];
    }>(
      (acc, key) => {
        acc[key] = [
          // @ts-expect-error TODO: deal with boss stuff
          MONSTER_STATS.monsters[name]['level'][level]['normal'][key],
          // @ts-expect-error TODO: deal with boss stuff
          MONSTER_STATS.monsters[name]['level'][level]['elite'][key],
        ];
        return acc;
      },
      { attack: [], move: [], range: [], attributes: [], health: [] },
    );

    return { name: scenarioDeck.name, ...deck, isBoss, stats };
  });

  return decks;
};
