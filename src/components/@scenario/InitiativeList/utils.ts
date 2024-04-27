import { CharacterNames } from 'types/character.types';

export const isCharacterName = (name: string): name is CharacterNames =>
  Object.values(CharacterNames).includes(name as CharacterNames);
