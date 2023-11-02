import { DECK_DEFINITIONS, DECKS } from 'data/abilities';
import { BOSS_STATS } from 'data/bosses';
import { MONSTER_STATS } from 'data/monsters';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';

export type Scenario = (typeof SCENARIO_DEFINITIONS)[number];

export type DeckClasses = (typeof DECKS)[keyof typeof DECKS]['class'];

export type DeckNames = keyof typeof DECKS;

export type ScenarioMonsterNames = keyof typeof MONSTER_STATS;

export type ScenarioBossNames = keyof typeof BOSS_STATS;

export type MonsterCard =
  (typeof DECK_DEFINITIONS)[DeckClasses]['cards'][number];
