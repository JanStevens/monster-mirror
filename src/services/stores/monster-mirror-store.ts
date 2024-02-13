import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import {
  MonsterCard,
  ScenarioBossNames,
  ScenarioMonsterNames,
} from 'types/data.types';

type ScenarioDeckName = ScenarioMonsterNames | ScenarioBossNames;
type ActiveCards = Record<ScenarioDeckName, MonsterCard | undefined>;

export type MonsterMirrorState = {
  decks: ScenarioDeckName[];
  activeCards: ActiveCards;
  sortDecksOnInitiative: boolean;
  level: number;
};

export type MonsterMirrorActions = {
  selectDeck: (deckName: ScenarioDeckName) => void;
  closeDeck: (deckName: ScenarioDeckName) => void;
  selectCard: (deckName: ScenarioDeckName, card: MonsterCard) => void;
  clearCard: (deckName: ScenarioDeckName) => void;
  clearActiveCards: () => void;
  selectLevel: (level: string) => void;
  toggleSortDecksOnInitiative: () => void;
};

export type MonsterMirrorStore = MonsterMirrorState & MonsterMirrorActions;

const defaultInitState: MonsterMirrorState = {
  decks: [],
  activeCards: {} as ActiveCards,
  level: 1,
  sortDecksOnInitiative: false,
};

export type MonsterMirrorStoreReturnType = ReturnType<
  typeof createMonsterMirrorStore
>;

export const createMonsterMirrorStore = (
  initState: MonsterMirrorState = defaultInitState,
) => {
  return createStore<MonsterMirrorStore>()(
    immer(
      persist(
        (set) => ({
          ...initState,
          selectDeck: (deckName) =>
            set((state) => {
              state.decks.push(deckName);
              state.activeCards[deckName] = undefined;
            }),
          closeDeck: (deckName) =>
            set((state) => {
              state.decks = state.decks.filter((deck) => deck !== deckName);
              state.activeCards[deckName] = undefined;
            }),
          toggleSortDecksOnInitiative: () =>
            set((state) => {
              state.sortDecksOnInitiative = !state.sortDecksOnInitiative;
            }),
          selectCard: (deckName, card) =>
            set((state) => {
              state.activeCards[deckName] = card;
            }),

          clearCard: (deckName) =>
            set((state) => (state.activeCards[deckName] = undefined)),

          clearActiveCards: () =>
            set((state) => {
              state.activeCards = {} as ActiveCards;
              return state;
            }),
          selectLevel: (level) =>
            set((state) => {
              state.level = Number(level);
            }),
        }),
        {
          name: 'mm-storage',
          partialize: (state) => ({
            level: state.level,
            sortDecksOnInitiative: state.sortDecksOnInitiative,
          }),
        },
      ),
    ),
  );
};
