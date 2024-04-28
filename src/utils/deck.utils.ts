import { ENEMY_ARTWORK } from 'data/artwork';
import { BOSS_STATS } from 'data/bosses';
import { MONSTER_STATS } from 'data/monsters';

import { CharacterNames } from 'types/character.types';
import { BossNames, EnemyNames, MonsterNames } from 'types/enemies.types';

export const getMonsterStats = (name: MonsterNames, level: number) => {
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

export const getEnemyArtwork = (name: EnemyNames) => ENEMY_ARTWORK[name];

export const isBossName = (name: EnemyNames): name is BossNames =>
  Object.values(BossNames).includes(name as BossNames);

export const isMonsterName = (name: EnemyNames): name is MonsterNames =>
  Object.values(MonsterNames).includes(name as MonsterNames);

export const isCharacterName = (name: string): name is CharacterNames =>
  Object.values(CharacterNames).includes(name as CharacterNames);

const BossHealthValueRegex =
  /\[([xCL0-9\.\+\/\-\*\(\)\=\?\:\|\s\>\<]+)(\{(.*)\})?\]/;

const parseBossHealthValue = (
  value: string | number,
  level: number,
  partySize: number,
) => {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  if (value === '-') return 0;
  let expression = value;
  let func = undefined;

  const match = value.match(BossHealthValueRegex);

  if (match && match[0].length == value.length) {
    expression = match[1];
    func = match[3];
  }

  expression = expression.replace(/[x]/g, '*');
  expression = expression.replace(/[C]/g, '' + Math.max(2, partySize));
  expression = expression.replace(/[L]/g, '' + level);

  let result = 0;
  try {
    result = eval(expression) as number;
  } catch (e) {
    console.warn('Could not evaluate expression: ' + expression, e);
    return 0;
  }

  if (func && func.startsWith('$')) {
    func = func.replace('$', '');
  }

  if (func) {
    switch (func) {
      case 'math.ceil':
        result = Math.ceil(result);
        break;
      case 'math.floor':
        result = Math.floor(result);
        break;
      default:
        console.error(`Unknown expression: ${func}(${match})`);
        break;
    }
  }
  return Math.round(result);
};

export const getBossName = (name: BossNames): BossNames => {
  const stats = BOSS_STATS[name];
  return stats.name ?? name;
};

export const getBossStats = (
  name: BossNames,
  level: number,
  partySize: number,
) => {
  const scaledStats = BOSS_STATS[name]['level'][level];
  const expandHealth = parseBossHealthValue(
    scaledStats['health'],
    level,
    partySize,
  );
  return {
    attack: [scaledStats['attack']],
    move: [scaledStats['move']],
    range: [scaledStats['range']],
    special1: scaledStats['special1'],
    special2: scaledStats['special2'],
    immunities: scaledStats['immunities'],
    notes: scaledStats['notes'],
    health: [expandHealth],
  };
};

export type BossStats = ReturnType<typeof getBossStats>;
