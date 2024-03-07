import { MACROS } from 'data/macros';

const expandMacro = (macro: string) => {
  const key = macro.toLowerCase();
  if (key in MACROS) {
    return MACROS[key];
  } else {
    return macro;
  }
};

const expandStat = (
  macro: string,
  stat: 'attack' | 'move' | 'range',
  value: (number | string)[],
) => {
  const lineParsed = new RegExp(`%${stat}% (\\+|-)(\\d*)`, 'g').exec(macro);
  const hasEliteValue = value.length == 2;
  const firstValue = value[0];
  //Check in case of bosses with text in the attack (C+1)
  const valueParsed = new RegExp('(\\d*)(\\+|-)?([a-zA-Z]+)', 'i').exec(
    String(firstValue),
  );
  let extraTextForParticularBosses = '';

  let normalAttack: number;
  if (valueParsed && valueParsed[3]) {
    const symbol = valueParsed[2] == '-' ? '-' : '+';
    extraTextForParticularBosses = valueParsed[3] + symbol;
    normalAttack = valueParsed[1] !== '' ? parseInt(valueParsed[1]) : 0;
  } else {
    normalAttack = parseInt(String(firstValue));
  }

  if (lineParsed) {
    if (lineParsed[1] === '+') {
      const valueNormal = normalAttack + parseInt(lineParsed[2]);
      if (hasEliteValue) {
        const valueElite = (value[1] as number) + parseInt(lineParsed[2]);
        return `%${stat}% ${valueNormal} / <span class='elite-color'>${valueElite}</span>`;
      } else {
        return `%${stat}% ${extraTextForParticularBosses}${valueNormal}`;
      }
    } else if (lineParsed[1] === '-') {
      const valueNormal = normalAttack - parseInt(lineParsed[2]);
      if (hasEliteValue) {
        const valueElite = (value[1] as number) - parseInt(lineParsed[2]);
        return `%${stat}% ${valueNormal} / <span class='elite-color'>${valueElite}</span>`;
      } else {
        return `%${stat}% ${extraTextForParticularBosses}${valueNormal}`;
      }
    }
  }

  return macro;
};

export const notesToLines = (notes: string) => [
  `* <span class='small'>Notes: ${notes}</span>`,
];

const expandSpecial = (specialValue: string[]) =>
  specialValue.map((line) => (line.startsWith('*') ? line : `* ${line}`));

export const specialToLines = (
  macro: string,
  special1: string[],
  special2: string[],
) => {
  if (special1 && macro.indexOf('Special 1') !== -1) {
    return expandSpecial(special1);
  }
  if (special2 && macro.indexOf('Special 2') !== -1) {
    return expandSpecial(special2);
  }
};

export const expandString = (
  macro: string,
  attack: (number | string)[],
  move: number[],
  range: number[],
) => {
  const re = new RegExp('%(attack|move|range)% (\\+|-)(\\d*)', 'g');
  let found: RegExpExecArray | null;

  while ((found = re.exec(macro))) {
    if (found[1] === 'attack') {
      macro = macro.replace(found[0], expandStat(found[0], 'attack', attack));
    } else if (found[1] === 'move') {
      macro = macro.replace(found[0], expandStat(found[0], 'move', move));
    } else if (found[1] === 'range') {
      macro = macro.replace(found[0], expandStat(found[0], 'range', range));
    }
  }

  return macro.replace(/%[^%]*%/gi, expandMacro);
};
