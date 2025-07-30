import type { RawAbilityCard } from 'data/abilities';
import { createStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { isCharacterName } from 'utils/deck.utils';

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
  userId: string | undefined;
  userName: string | undefined;
  scenarioEnemies: EnemyNames[];
};

type MonsterMirrorActions = {
  selectEnemy: (enemy: EnemyNames) => void;
  closeEnemy: (enemy: EnemyNames) => void;
  selectCard: (enemy: EnemyNames, card: RawAbilityCard) => void;
  clearCard: (enemy: EnemyNames) => void;
  clearActiveCards: () => void;
  setLevel: (level: string | number) => void;
  setInitiatives: (initiatives: Record<CharacterNames, string[]>) => void;
  setPlayerInitiative: (name: CharacterNames, initiative: number) => void;
  toggleInitiativePlayed: (thing: EnemyNames | CharacterNames) => void;
  togglePlayer: (character: CharacterNames) => void;
  setParty: (characters: CharacterNames[]) => void;
  setUser: (userId: string, userName: string) => void;
  resetState: () => void;
  setScenarioEnemies: (enemies: EnemyNames[]) => void;
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
  userId: undefined,
  userName: undefined,
  scenarioEnemies: [],
});

export const createMonsterMirrorStore = (
  initState: MonsterMirrorState = initMonsterMirrorStore(),
) => {
  return createStore<MonsterMirrorStore>()(
    immer(
      persist(
        devtools(
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
                    const mappedInitiatives = Object.entries(
                      initiatives,
                    ).reduce<InitiativeState>((acc, [key, value]) => {
                      const initiative = parseInt(value.join(''));
                      if (!Number.isNaN(initiative) && isCharacterName(key)) {
                        acc[key] = {
                          id: key,
                          initiative,
                          name: key,
                          played: false,
                        };
                      }
                      return acc;
                    }, {} as InitiativeState);

                    state.initiatives = {
                      ...state.initiatives,
                      ...mappedInitiatives,
                    };
                  },
                  false,
                  { type: 'setInitiatives' },
                ),

              setPlayerInitiative: (name, initiative) =>
                set(
                  (state) => {
                    state.initiatives[name].initiative = initiative;
                  },
                  false,
                  { type: 'setPlayerInitiative' },
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
                      state.party = state.party.filter((c) => c !== character);
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

              // Card Actions
              selectCard: (enemy, card) =>
                set(
                  (state) => {
                    state.activeCards[enemy] = card;
                    state.initiatives[enemy] = {
                      id: enemy,
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
                    state.initiatives[enemy].played = false;
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

              setUser: (userId: string, userName: string) =>
                set((state) => {
                  state.userId = userId;
                  state.userName = userName;
                }),

              setScenarioEnemies: (enemies) =>
                set(
                  (state) => {
                    state.scenarioEnemies = enemies;
                  },
                  false,
                  { type: 'setRandomDungeonMonsters' },
                ),
            },
          }),
          { serialize: true, store: 'mm' },
        ),
        {
          name: 'mm-storage',
          partialize: (state) => ({
            level: state.level,
            party: state.party,
            userId: state.userId,
            userName: state.userName,
            scenarioEnemies: state.scenarioEnemies,
          }),
        },
      ),
    ),
  );
};
