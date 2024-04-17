import type { RawAbilityCard } from 'data/abilities';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { CharacterNames } from 'types/character.types';
import type { Enemies } from 'types/enemies.types';

type ActiveCards = Record<Enemies, RawAbilityCard | undefined>;
type NewRoundCards = Record<Enemies, number | undefined>;

type MonsterMirrorState = {
  enemies: Enemies[];
  characters: CharacterNames[];
  activeCards: ActiveCards;
  newRoundCards: NewRoundCards;
  level: number;
  characterCount: number;
  deckSortBy: 'initiative' | 'scenario' | 'alphabetical';
};

export type MonsterMirrorActions = {
  selectEnemy: (enemy: Enemies) => void;
  closeEnemy: (enemy: Enemies) => void;
  selectCard: (enemy: Enemies, card: RawAbilityCard) => void;
  clearCard: (enemy: Enemies) => void;
  clearActiveCards: () => void;
  setLevel: (level: string | number) => void;
  setCharacterCount: (count: string | number) => void;
  toggleCharacter: (character: CharacterNames) => void;
  setCharacters: (characters: CharacterNames[]) => void;
  setDeckSortBy: (sortBy: 'initiative' | 'scenario' | 'alphabetical') => void;
  // New Round state
  selectNewRoundCard: (enemy: Enemies, index: number) => void;
  clearNewRoundCard: (enemy: Enemies) => void;
};

export type MonsterMirrorStore = MonsterMirrorState & {
  actions: MonsterMirrorActions;
};

export type MonsterMirrorStoreReturnType = ReturnType<
  typeof createMonsterMirrorStore
>;

export const initMonsterMirrorStore = (): MonsterMirrorState => ({
  level: 1,
  characterCount: 2,
  enemies: [],
  characters: [],
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

            setCharacterCount: (characterCount) =>
              set((state) => {
                state.characterCount = Number(characterCount);
              }),

            toggleCharacter: (character) =>
              set((state) => {
                if (state.characters.includes(character)) {
                  state.characters = state.characters.filter(
                    (c) => c !== character,
                  );
                } else if (state.characters.length >= 4) {
                  state.characters.pop();
                  state.characters.push(character);
                } else {
                  state.characters.push(character);
                }
              }),

            setCharacters: (characters) =>
              set((state) => {
                state.characters = characters;
              }),

            // Deck actions
            selectEnemy: (enemy) =>
              set((state) => {
                state.enemies.push(enemy);
                state.activeCards[enemy] = undefined;
              }),
            closeEnemy: (enemy) =>
              set((state) => {
                state.enemies = state.enemies.filter((deck) => deck !== enemy);
                state.activeCards[enemy] = undefined;
              }),

            setDeckSortBy: (sortBy) =>
              set((state) => {
                state.deckSortBy = sortBy;
              }),

            // Card Actions
            selectCard: (enemy, card) =>
              set((state) => {
                state.activeCards[enemy] = card;
              }),

            clearCard: (enemy) =>
              set((state) => {
                state.activeCards[enemy] = undefined;
              }),

            clearActiveCards: () =>
              set((state) => {
                state.activeCards = {} as ActiveCards;
                return state;
              }),

            // New Round
            selectNewRoundCard: (enemy, card) =>
              set((state) => {
                state.newRoundCards[enemy] = card;
              }),

            clearNewRoundCard: (enemy) =>
              set((state) => {
                state.newRoundCards[enemy] = undefined;
              }),
          },
        }),
        {
          name: 'mm-storage',
          partialize: (state) => ({
            level: state.level,
            characterCount: state.characterCount,
            characters: state.characters,
            deckSortBy: state.deckSortBy,
          }),
        },
      ),
    ),
  );
};
