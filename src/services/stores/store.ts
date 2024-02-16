import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { MonsterCard, ScenarioDeckName } from 'types/data.types';

type ActiveCards = Record<ScenarioDeckName, MonsterCard | undefined>;
type NewRoundCards = Record<ScenarioDeckName, number | undefined>;

type MonsterMirrorState = {
  decks: ScenarioDeckName[];
  activeCards: ActiveCards;
  newRoundCards: NewRoundCards;
  level: number;
  deckSortBy: 'initiative' | 'scenario' | 'alphabetical';
};

export type MonsterMirrorActions = {
  selectDeck: (deckName: ScenarioDeckName) => void;
  closeDeck: (deckName: ScenarioDeckName) => void;
  selectCard: (deckName: ScenarioDeckName, card: MonsterCard) => void;
  clearCard: (deckName: ScenarioDeckName) => void;
  clearActiveCards: () => void;
  setLevel: (level: string) => void;
  setDeckSortBy: (sortBy: 'initiative' | 'scenario' | 'alphabetical') => void;
  // New Round state
  selectNewRoundCard: (deckName: ScenarioDeckName, index: number) => void;
  clearNewRoundCard: (deckName: ScenarioDeckName) => void;
};

export type MonsterMirrorStore = MonsterMirrorState & {
  actions: MonsterMirrorActions;
};

export type MonsterMirrorStoreReturnType = ReturnType<
  typeof createMonsterMirrorStore
>;

export const initMonsterMirrorStore = (): MonsterMirrorState => ({
  level: 1,
  decks: [],
  activeCards: {} as ActiveCards,
  newRoundCards: {} as NewRoundCards,
  deckSortBy: 'scenario',
});

export const createMonsterMirrorStore = (
  initState: MonsterMirrorState = initMonsterMirrorStore(),
) => {
  return createStore<MonsterMirrorStore>()(
    immer(
      persist(
        (set) => ({
          ...initState,
          actions: {
            setLevel: (level) =>
              set((state) => {
                state.level = Number(level);
              }),

            // Deck actions
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

            setDeckSortBy: (sortBy) =>
              set((state) => {
                state.deckSortBy = sortBy;
              }),

            // Card Actions
            selectCard: (deckName, card) =>
              set((state) => {
                state.activeCards[deckName] = card;
              }),

            clearCard: (deckName) =>
              set((state) => {
                state.activeCards[deckName] = undefined;
              }),

            clearActiveCards: () =>
              set((state) => {
                state.activeCards = {} as ActiveCards;
                return state;
              }),

            // New Round
            selectNewRoundCard: (deckName, card) =>
              set((state) => {
                state.newRoundCards[deckName] = card;
              }),

            clearNewRoundCard: (deckName) =>
              set((state) => {
                state.newRoundCards[deckName] = undefined;
              }),
          },
        }),
        {
          name: 'mm-storage',
          partialize: (state) => ({
            level: state.level,
            deckSortBy: state.deckSortBy,
          }),
        },
      ),
    ),
  );
};
