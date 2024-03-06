import { RawAbilityCard } from 'data/abilities';

import { BossStats, MonsterStats } from 'utils/deck.utils';

import { BossNames, MonsterNames } from './enemies.types';

export interface MonsterDeck {
  name: MonsterNames;
  isBoss: false;
  stats: MonsterStats;
  image: string;
  cards: RawAbilityCard[];
}

export interface BossDeck {
  name: BossNames;
  isBoss: true;
  stats: BossStats;
  image: string;
  cards: RawAbilityCard[];
}
