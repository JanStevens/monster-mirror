import { expandString } from 'utils/macro.utils';

export const hasFlyingAttribute = (lines: string[]) =>
  !!lines.find((line) => line.includes('%flying%'));

export const expandAbilities = (
  lines: string[][],
  attack: number[],
  move: number[],
  range: number[],
  additional: string[] = [],
) =>
  lines.map((line) => {
    // Group lines by ability so we can sum up the shield values
    const groupedLines = [...line, ...additional].reduce<
      Record<string, string | number>
    >((memo, value) => {
      const match = /%(\w*)% (\d*)/g.exec(value);
      if (match?.[1]) {
        const key = `%${match[1]}%`;
        const value = Number(match[2]);
        memo[key] = Number(memo[key] ?? 0) + value;
      } else {
        memo[value] = value;
      }
      return memo;
    }, {});

    // construct back to line arrays
    const lines = Object.entries(groupedLines)
      .reduce<string[]>((acc, [key, value]) => {
        if (key === value) {
          acc.push(key);
        } else {
          acc.push(`${key} ${value}`);
        }
        return acc;
      }, [])
      .sort((a, b) => a.localeCompare(b));

    return lines
      .filter((value) => value !== '%flying%')
      .map((value) => expandString(value, attack, move, range))
      .map((value) => `<span>${value}</span>`)
      .join('');
  });
