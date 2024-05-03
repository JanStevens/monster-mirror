import { createClient } from '@liveblocks/client';
import { liveblocks, type WithLiveblocks } from '@liveblocks/zustand';
import type { RawAbilityCard } from 'data/abilities';
import { createStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { CharacterNames } from 'types/character.types';
import { EnemyNames } from 'types/enemies.types';
import type { InitiativeState } from 'types/initiative.types';

type ActiveCards = Record<EnemyNames, RawAbilityCard | undefined>;

type MonsterMirrorState = {
  enemies: EnemyNames[];
  party: CharacterNames[];
  activeCards: ActiveCards;
  initiatives: InitiativeState;
  level: number;
  deckSortBy: 'initiative' | 'scenario' | 'alphabetical';
  room: string | undefined;
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
  togglePlayer: (character: CharacterNames) => void;
  setParty: (characters: CharacterNames[]) => void;
  setDeckSortBy: (sortBy: 'initiative' | 'scenario' | 'alphabetical') => void;
  resetState: () => void;
  setRoom: (room: string | undefined) => void;
};

export type MonsterMirrorStore = MonsterMirrorState & {
  actions: MonsterMirrorActions;
};

export type MonsterMirrorStoreReturnType = ReturnType<
  typeof createMonsterMirrorStore
>;

export const initMonsterMirrorStore = (): MonsterMirrorState => ({
  level: 1,
  enemies: [],
  party: [],
  initiatives: {} as InitiativeState,
  activeCards: {} as ActiveCards,
  deckSortBy: 'scenario',
  room: undefined,
});

const client = createClient({
  publicApiKey:
    'pk_prod_UANI5kdP20VX5KIgygz6FLhnsKsYRD4ZwHjOLIxrGPdbWk4uKsTWPueUMgU49XtJ',
});

type Presence = {
  isOnline: boolean;
};

export const createMonsterMirrorStore = (
  initState: MonsterMirrorState = initMonsterMirrorStore(),
) => {
  return createStore<WithLiveblocks<MonsterMirrorStore, Presence>>()(
    devtools(
      immer(
        persist(
          liveblocks(
            (set) => ({
              ...initState,
              actions: {
                setLevel: (level) =>
                  set(
                    (state) => {
                      state.level = Number(level);
                    },
                    false,
                    { type: 'setLevel' },
                  ),

                setInitiatives: (initiatives) =>
                  set(
                    (state) => {
                      state.initiatives = {
                        ...state.initiatives,
                        ...initiatives,
                      };
                    },
                    false,
                    { type: 'setInitiatives' },
                  ),

                toggleInitiativePlayed: (thing) =>
                  set(
                    (state) => {
                      state.initiatives[thing].played =
                        !state.initiatives[thing].played;
                    },
                    false,
                    { type: 'toggleInitiativePlayed' },
                  ),

                togglePlayer: (character) =>
                  set(
                    (state) => {
                      if (state.party.includes(character)) {
                        state.party = state.party.filter(
                          (c) => c !== character,
                        );
                      } else if (state.party.length >= 4) {
                        state.party.pop();
                        state.party.push(character);
                      } else {
                        state.party.push(character);
                      }
                    },
                    false,
                    { type: 'togglePlayer' },
                  ),

                setParty: (characters) =>
                  set(
                    (state) => {
                      state.party = characters;
                    },
                    false,
                    { type: 'setParty' },
                  ),

                // Deck actions
                selectEnemy: (enemy) =>
                  set(
                    (state) => {
                      state.enemies.push(enemy);
                      state.activeCards[enemy] = undefined;
                    },
                    false,
                    { type: 'selectEnemy' },
                  ),
                closeEnemy: (enemy) =>
                  set(
                    (state) => {
                      state.enemies = state.enemies.filter(
                        (deck) => deck !== enemy,
                      );
                      state.activeCards[enemy] = undefined;
                      delete state.initiatives[enemy];
                    },
                    false,
                    { type: 'closeEnemy' },
                  ),

                setDeckSortBy: (sortBy) =>
                  set(
                    (state) => {
                      state.deckSortBy = sortBy;
                    },
                    false,
                    { type: 'setDeckSortBy' },
                  ),

                // Card Actions
                selectCard: (enemy, card) =>
                  set(
                    (state) => {
                      state.activeCards[enemy] = card;
                      state.initiatives[enemy] = {
                        initiative: card.initiative,
                        name: enemy,
                        played: false,
                      };
                    },
                    false,
                    { type: 'selectCard' },
                  ),

                clearCard: (enemy) =>
                  set(
                    (state) => {
                      state.activeCards[enemy] = undefined;
                      state.initiatives[enemy].played = true;
                    },
                    false,
                    { type: 'clearCard' },
                  ),

                clearActiveCards: () =>
                  set(
                    (state) => {
                      state.activeCards = {} as ActiveCards;
                      state.initiatives = {} as InitiativeState;
                      return state;
                    },
                    false,
                    { type: 'clearActiveCards' },
                  ),

                resetState: () =>
                  set(
                    (state) => {
                      state.activeCards = {} as ActiveCards;
                      state.initiatives = {} as InitiativeState;
                      state.enemies = [];
                      return state;
                    },
                    false,
                    { type: 'clearDecks' },
                  ),

                setRoom: (room) =>
                  set(
                    (state) => {
                      state.room = room;
                    },
                    false,
                    { type: 'setRoom' },
                  ),
              },
            }),

            {
              client,
              // presenceMapping: { isOnline: true },
              storageMapping: {
                level: true,
                party: true,
                enemies: true,
                initiatives: true,
                activeCards: true,
              },
            },
          ),
          {
            name: 'mm-storage',
            partialize: (state) => ({
              level: state.level,
              party: state.party,
              deckSortBy: state.deckSortBy,
            }),
          },
        ),
      ),
      { serialize: true, store: 'mm' },
    ),
  );
};
