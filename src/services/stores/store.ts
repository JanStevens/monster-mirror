import type { RawAbilityCard } from 'data/abilities';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';
import type { InitiativeState } from 'types/initiative.types';

type ActiveCards = Record<EnemyNames, RawAbilityCard | undefined>;
type NewRoundCards = Record<EnemyNames, number | undefined>;

type MonsterMirrorState = {
  enemies: EnemyNames[];
  characters: CharacterNames[];
  activeCards: ActiveCards;
  newRoundCards: NewRoundCards;
  initiatives: InitiativeState;
  level: number;
  characterCount: number;
  deckSortBy: 'initiative' | 'scenario' | 'alphabetical';
};

export type MonsterMirrorActions = {
  selectEnemy: (enemy: EnemyNames) => void;
  closeEnemy: (enemy: EnemyNames) => void;
  selectCard: (enemy: EnemyNames, card: RawAbilityCard) => void;
  clearCard: (enemy: EnemyNames) => void;
  clearActiveCards: () => void;
  setLevel: (level: string | number) => void;
  setInitiatives: (initiatives: InitiativeState) => void;
  toggleInitiativePlayed: (thing: EnemyNames | CharacterNames) => void;
  setCharacterCount: (count: string | number) => void;
  toggleCharacter: (character: CharacterNames) => void;
  setCharacters: (characters: CharacterNames[]) => void;
  setDeckSortBy: (sortBy: 'initiative' | 'scenario' | 'alphabetical') => void;
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
  initiatives: {} as InitiativeState,
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

            setInitiatives: (initiatives) =>
              set((state) => {
                state.initiatives = {
                  ...state.initiatives,
                  ...initiatives,
                };
              }),

            toggleInitiativePlayed: (thing) =>
              set((state) => {
                state.initiatives[thing].played =
                  !state.initiatives[thing].played;
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
                delete state.initiatives[enemy];
              }),

            setDeckSortBy: (sortBy) =>
              set((state) => {
                state.deckSortBy = sortBy;
              }),

            // Card Actions
            selectCard: (enemy, card) =>
              set((state) => {
                state.activeCards[enemy] = card;
                state.initiatives[enemy] = {
                  initiative: card.initiative,
                  name: enemy,
                  played: false,
                };
              }),

            clearCard: (enemy) =>
              set((state) => {
                state.activeCards[enemy] = undefined;
                delete state.initiatives[enemy];
              }),

            clearActiveCards: () =>
              set((state) => {
                state.activeCards = {} as ActiveCards;
                state.initiatives = {} as InitiativeState;
                return state;
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
