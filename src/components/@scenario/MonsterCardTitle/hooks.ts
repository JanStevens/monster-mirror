import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';
import { MonsterDeck } from 'types/deck.types';
import { MonsterNames } from 'types/enemies.types';

const EXCLUDES_CARDS: Record<string, number[]> = {
  [MonsterNames.Lurker]: [11],
  [MonsterNames.SavvasLavaflow]: [22],
  [MonsterNames.HarrowerInfester]: [2],
  [MonsterNames.StoneGolem]: [11],
};

export const useAdditionalAbilities = (deck: MonsterDeck) => {
  const [activeCard, hasPlayed] = useStore(
    useShallow((state) => [
      state.activeCards[deck.name],
      state.initiatives[deck.name]?.played,
    ]),
  );

  const activeShieldAbility = useMemo(() => {
    if (!activeCard) return;
    if (!hasPlayed) return;
    if (
      deck.name in EXCLUDES_CARDS &&
      EXCLUDES_CARDS[deck.name].includes(activeCard.initiative)
    )
      return;

    return activeCard?.lines
      .filter(
        (line) => line.includes('%shield%') || line.includes('%retaliate%'),
      )
      .map((line) => line.replaceAll('*', ''));
  }, [activeCard, hasPlayed, deck.name]);

  return activeShieldAbility;
};
