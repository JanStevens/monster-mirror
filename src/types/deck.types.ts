import { DECK_DEFINITIONS } from 'data/abilities';
import { BOSS_DECK_DEFINITION } from 'data/bosses';

import { BossStats, MonsterStats } from 'utils/deck.utils';

import {
  DeckClasses,
  ScenarioBossNames,
  ScenarioMonsterNames,
} from './data.types';

export interface MonsterDeck {
  name: ScenarioMonsterNames;
  isBoss: false;
  stats: MonsterStats;
  image: string;
  cards: (typeof DECK_DEFINITIONS)[DeckClasses]['cards'];
}

export interface BossDeck {
  name: ScenarioBossNames;
  isBoss: true;
  stats: BossStats;
  image: string;
  cards: (typeof BOSS_DECK_DEFINITION)['cards'];
}
