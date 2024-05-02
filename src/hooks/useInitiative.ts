import { useCallback } from 'react';

import { isCharacterName } from 'utils/deck.utils';

import { useStore } from 'services/stores';
import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';

export const useInitiative = () => {
  const initiatives = useStore((store) => store.initiatives);
  const { toggleInitiativePlayed } = useStore((state) => state.actions);

  const sortedInitiatives = Object.values(initiatives).sort(
    (initiativeA, initiativeB) => {
      if (initiativeA.initiative === initiativeB.initiative) {
        if (
          isCharacterName(initiativeA.name) &&
          !isCharacterName(initiativeB.name)
        ) {
          return 1;
        }
      }

      return initiativeA.initiative - initiativeB.initiative;
    },
  );

  const activeTurnIdx = sortedInitiatives.findIndex(
    (initiative) => !initiative.played,
  );

  const activeTurn = sortedInitiatives[activeTurnIdx]?.name;
  const nextTurn = sortedInitiatives[activeTurnIdx + 1]?.name;

  const hasPlayed = useCallback(
    (name: CharacterNames | EnemyNames) => initiatives[name]?.played,
    [initiatives],
  );

  const isActiveTurn = useCallback(
    (name: CharacterNames | EnemyNames) => name === activeTurn,
    [activeTurn],
  );

  const roundEnded =
    sortedInitiatives.every((initiative) => initiative.played) &&
    sortedInitiatives.length > 0;

  const onToggleInitiativePlayed = (name: CharacterNames | EnemyNames) => {
    if (name === activeTurn || hasPlayed(name)) {
      toggleInitiativePlayed(name);
    }
  };

  return {
    initiatives: sortedInitiatives,
    onToggleInitiativePlayed,
    isActiveTurn,
    activeTurn,
    nextTurn,
    hasPlayed,
    roundEnded,
  };
};
