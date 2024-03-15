import { ENEMY_DECKS } from 'data/abilities';
import { MONSTER_STATS } from 'data/monsters';
import { ScenarioDefinition } from 'data/scenarios';
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import {
  getBossName,
  getBossStats,
  getEnemyArtwork,
  getMonsterStats,
} from 'utils/deck.utils';

import { useStore } from 'services/stores';
import type { BossDeck, MonsterDeck } from 'types/deck.types';
import {
  BossNames,
  EnemyDeckNames,
  EnemyNames,
  MonsterNames,
} from 'types/enemies.types';

const getScenarioLevelForDeck = (
  scenario: ScenarioDefinition,
  level: number,
  deck: MonsterNames,
) => {
  if (!scenario.specialRules?.length) return level;
  const matchingSpecialRule = scenario.specialRules.find(
    (rule) => rule.deck === deck,
  );
  if (!matchingSpecialRule) return level;
  if (!matchingSpecialRule.extra_levels) return level;
  return Math.min(7, matchingSpecialRule?.extra_levels + level);
};

const getScenarioMonsterStats = (
  scenario: ScenarioDefinition,
  level: number,
  deck: MonsterNames,
) => {
  const stats = getMonsterStats(deck, level);
  if (!scenario.specialRules?.length) return stats;
  const matchingSpecialRule = scenario.specialRules.find(
    (rule) => rule.deck === deck,
  );
  if (!matchingSpecialRule) return stats;
  if (!matchingSpecialRule.extra_attributes) return stats;

  return {
    ...stats,
    attributes: [
      [
        ...stats.attributes[0],
        ...matchingSpecialRule.extra_attributes['normal'],
      ],
      [
        ...stats.attributes[1],
        ...matchingSpecialRule.extra_attributes['normal'],
      ],
    ],
  };
};

const getBossDeck = (
  bossName: BossNames,
  level: number,
  characterCount: number,
): BossDeck => ({
  name: getBossName(bossName),
  isBoss: true,
  cards: ENEMY_DECKS[EnemyDeckNames.Boss].cards,
  image: getEnemyArtwork(bossName),
  stats: getBossStats(bossName, level, characterCount),
});

const getMonsterDeck = (
  scenario: ScenarioDefinition,
  monsterName: MonsterNames,
  level: number,
): MonsterDeck => {
  const baseStats = MONSTER_STATS[monsterName];
  const deck = ENEMY_DECKS[baseStats.deck];
  const adjustedLevel = getScenarioLevelForDeck(scenario, level, monsterName);
  const stats = getScenarioMonsterStats(scenario, adjustedLevel, monsterName);

  return {
    name: monsterName,
    isBoss: false,
    stats,
    image: getEnemyArtwork(monsterName),
    cards: deck.cards,
  };
};

const isBossName = (name: EnemyNames): name is BossNames =>
  Object.values(BossNames).includes(name as BossNames);

export const useDecks = (scenario: ScenarioDefinition) => {
  const [level, characterCount, activeDeckNames, deckSortBy, activeCards] =
    useStore(
      useShallow((state) => [
        state.level,
        state.characterCount,
        state.enemies,
        state.deckSortBy,
        state.activeCards,
      ]),
    );
  const decks = useMemo(
    () =>
      scenario?.enemies.map((enemyName) =>
        isBossName(enemyName)
          ? getBossDeck(enemyName, level, characterCount)
          : getMonsterDeck(scenario, enemyName, level),
      ),
    [level, scenario, characterCount],
  );

  const selectedDecks = useMemo(
    () =>
      decks
        .filter((deck) => activeDeckNames.includes(deck.name))
        .sort((a, b) => {
          const defaultSorting =
            activeDeckNames.indexOf(a.name) - activeDeckNames.indexOf(b.name);

          if (!deckSortBy || deckSortBy !== 'initiative') return defaultSorting;

          const activeCardAInitiative = activeCards[a.name]?.initiative ?? 99;
          const activeCardBInitiative = activeCards[b.name]?.initiative ?? 99;

          if (activeCardAInitiative === activeCardBInitiative)
            return defaultSorting;
          return activeCardAInitiative < activeCardBInitiative ? -1 : 1;
        }),
    [activeCards, activeDeckNames, decks, deckSortBy],
  );

  const availableDecks = useMemo(
    () => decks.filter((deck) => !activeDeckNames.includes(deck.name)),
    [activeDeckNames, decks],
  );

  return { selectedDecks, availableDecks, decks };
};
