import { expandString } from 'utils/macro.utils';

export const hasFlyingAttribute = (lines: string[]) =>
  !!lines.find((line) => line.includes('%flying%'));

export const expandAbilities = (
  lines: string[][],
  attack: number[],
  move: number[],
  range: number[],
) =>
  lines.map((line) =>
    line
      .filter((value) => value !== '%flying%')
      .map((value) => expandString(value, attack, move, range))
      .map((value) => `<span>${value}</span>`)
      .join(''),
  );
