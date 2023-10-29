import { DECK_DEFINITONS, DECKS } from 'data/abilities';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';

export type Scenario = (typeof SCENARIO_DEFINITIONS)[number];

export type DeckClasses = (typeof DECKS)[keyof typeof DECKS]['class'];

export type ScenarioMonsterDeckNames =
  keyof typeof DECKS extends `Boss: ${infer _Name}`
    ? never
    : keyof typeof DECKS;

export type ScenarioBossDeckNames =
  keyof typeof DECKS extends `Boss: ${infer Name}` ? Name : never;

export type MonsterCard =
  (typeof DECK_DEFINITONS)[DeckClasses]['cards'][number];
