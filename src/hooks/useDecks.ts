import { DECK_DEFINITIONS, DECKS } from 'data/abilities';
import { BOSS_DECK_DEFINITION } from 'data/bosses';
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { getBossImage, getBossStats, getMonsterStats } from 'utils/deck.utils';

import { useStore } from 'services/stores';
import type { DeckNames, Scenario, ScenarioBossNames } from 'types/data.types';
import type { BossDeck, MonsterDeck } from 'types/deck.types';

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
  if (!matchingSpecialRule.extra_levels) return level;
  return Math.min(7, matchingSpecialRule?.extra_levels + level);
};

const getScenarioMonsterStats = (
  scenario: Scenario,
  level: number,
  deck: DeckNames,
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

const getBossDeck = (deckName: string, level: number): BossDeck => {
  const bossName = deckName.replace('Boss: ', '') as ScenarioBossNames;

  return {
    name: bossName,
    isBoss: true,
    cards: BOSS_DECK_DEFINITION.cards,
    image: getBossImage(bossName),
    stats: getBossStats(bossName, level),
  };
};

const getMonsterDeck = (
  scenario: Scenario,
  deckName: DeckNames,
  level: number,
): MonsterDeck => {
  const deckClass = DECKS[deckName];
  const deck = DECK_DEFINITIONS[deckClass?.class];
  const adjustedLevel = getScenarioLevelForDeck(scenario, level, deckName);
  const stats = getScenarioMonsterStats(scenario, adjustedLevel, deckName);

  return {
    name: deckName,
    isBoss: false,
    stats,
    image: deckClass.image,
    cards: deck.cards,
  };
};

export const useDecks = (scenario: Scenario) => {
  const [level, activeDeckNames, deckSortBy, activeCards] = useStore(
    useShallow((state) => [
      state.level,
      state.decks,
      state.deckSortBy,
      state.activeCards,
    ]),
  );
  const decks = useMemo(
    () =>
      scenario?.decks.map((scenarioDeck) => {
        const isBoss = scenarioDeck.name.includes('Boss');
        return isBoss
          ? getBossDeck(scenarioDeck.name, level)
          : getMonsterDeck(scenario, scenarioDeck.name as DeckNames, level);
      }),
    [level, scenario],
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
