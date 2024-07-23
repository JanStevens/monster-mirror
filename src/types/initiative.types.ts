import { CharacterNames } from './character.types';
import { EnemyNames } from './enemies.types';

export type Initiative = {
  initiative: number;
  name: CharacterNames | EnemyNames;
  played: boolean;
  id: CharacterNames | EnemyNames;
};

export type InitiativeState = Record<CharacterNames | EnemyNames, Initiative>;
