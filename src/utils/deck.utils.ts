import { BOSS_STATS } from 'data/bosses';
import { MONSTER_STATS } from 'data/monsters';

import { ScenarioBossNames, ScenarioMonsterNames } from 'types/data.types';

export const getMonsterStats = (name: ScenarioMonsterNames, level: number) => {
  const scaledStats = MONSTER_STATS[name]['level'][level];
  return {
    attack: [scaledStats['normal']['attack'], scaledStats['elite']['attack']],
    move: [scaledStats['normal']['move'], scaledStats['elite']['move']],
    range: [scaledStats['normal']['range'], scaledStats['elite']['range']],
    attributes: [
      scaledStats['normal']['attributes'],
      scaledStats['elite']['attributes'],
    ],
    health: [scaledStats['normal']['health'], scaledStats['elite']['health']],
  };
};

export type MonsterStats = ReturnType<typeof getMonsterStats>;

export const getBossImage = (name: ScenarioBossNames) =>
  BOSS_STATS[name]['image'];

export const getBossStats = (name: ScenarioBossNames, level: number) => {
  const scaledStats = BOSS_STATS[name]['level'][level];
  return {
    attack: [scaledStats['attack']],
    move: [scaledStats['move']],
    range: [scaledStats['range']],
    special1: scaledStats['special1'],
    special2: scaledStats['special2'],
    immunities: scaledStats['immunities'],
    notes: scaledStats['notes'],
    health: [scaledStats['health']],
  };
};

export type BossStats = ReturnType<typeof getBossStats>;
