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
  value: number[],
) => {
  const lineParsed = new RegExp(`%${stat}% (\\+|-)(\\d*)`, 'g').exec(macro);
  const hasEliteValue = value.length == 2;
  let normalAttack = value[0];
  //Check in case of bosses with text in the attack (C+1)
  const valueParsed = new RegExp('(\\d*)(\\+|-)?([a-zA-Z]+)', 'i').exec(
    String(normalAttack),
  );
  let extraTextForParticularBosses = '';

  if (valueParsed && valueParsed[3]) {
    const symbol = valueParsed[2] == '-' ? '-' : '+';
    extraTextForParticularBosses = valueParsed[3] + symbol;
    normalAttack = valueParsed[1] !== '' ? parseInt(valueParsed[1]) : 0;
  }

  if (lineParsed) {
    if (lineParsed[1] === '+') {
      const valueNormal = normalAttack + parseInt(lineParsed[2]);
      if (hasEliteValue) {
        const valueElite = value[1] + parseInt(lineParsed[2]);
        return `%${stat}% ${valueNormal} / <span class='elite-color'>${valueElite}</span>`;
      } else {
        return `%${stat}% ${extraTextForParticularBosses}${valueNormal}`;
      }
    } else if (lineParsed[1] === '-') {
      const valueNormal = normalAttack - parseInt(lineParsed[2]);
      if (hasEliteValue) {
        const valueElite = value[1] - parseInt(lineParsed[2]);
        return `%${stat}% ${valueNormal} / <span class='elite-color'>${valueElite}</span>`;
      } else {
        return `%${stat}% ${extraTextForParticularBosses}${valueNormal}`;
      }
    }
  }

  return macro;
};

export function attributes_to_lines(attributes: string[]) {
  if (!attributes || (attributes[0].length == 0 && attributes[1].length == 0)) {
    return [];
  } else {
    // To make it more readable, group 3 elements in the same row abd naje them small
    let attributes_lines = ['* Attributes'];

    // Write common attributes in white
    let normal_attributes_lines: string[] = [];
    let line = 0;
    for (let i = 0; i < attributes[0].length; i++) {
      normal_attributes_lines[line] = normal_attributes_lines[line]
        ? normal_attributes_lines[line] + attributes[0][i] + ', '
        : attributes[0][i] + ', ';
      if ((i + 1) % 3 == 0) {
        line++;
      }
    }
    attributes_lines = attributes_lines.concat(
      normal_attributes_lines.map(function (line) {
        return line ? '**' + line.replace(/(,\s$)/g, '') : '';
      }),
    );

    // Write elite attributes in Gold
    let elite_attributes_lines: string[] = [];
    // TODO
    // In case we want to show Common and Elite only attributes
    // const elite_attributes = attributes[1].map(function(elite_attribute){
    //     return ((attributes[0].indexOf(elite_attribute) == -1) ? elite_attribute: "")
    // });
    line = 0;
    for (let i = 0; i < attributes[1].length; i++) {
      elite_attributes_lines[line] = elite_attributes_lines[line]
        ? elite_attributes_lines[line] + attributes[1][i] + ', '
        : attributes[1][i] + ', ';
      if ((i + 1) % 3 == 0) {
        line++;
      }
    }

    return attributes_lines.concat(
      elite_attributes_lines.map(function (line) {
        return line
          ? "** <span class='elite-color'>" +
              line.replace(/(,\s$)/g, '') +
              '</span>'
          : '';
      }),
    );
  }
}

function immunities_to_lines(immunities: string[]) {
  if (!immunities) {
    return [];
  } else {
    // To make it more readable, group 3 elements in the same row abd naje them small
    let immunities_lines: string[] = [];
    let line = 0;
    for (let i = 0; i < immunities.length; i++) {
      immunities_lines[line] = immunities_lines[line]
        ? immunities_lines[line] + immunities[i] + ', '
        : immunities[i] + ', ';
      if ((i + 1) % 3 == 0) {
        line++;
      }
    }
    return ['* Immunities'].concat(
      immunities_lines.map(function (line) {
        return (
          "** <span class='small'>" + line.replace(/(,\s$)/g, '') + '</span>'
        );
      }),
    );
  }
}

function notes_to_lines(notes) {
  return ["* <span class='small'> Notes: " + notes + '</span>'];
}

function expand_special(s, special_value) {
  const value = '';

  return special_value.map(function (line) {
    return '* ' + line;
  });
}

function special_to_lines(s, special1, special2) {
  if (special1 && s.indexOf('Special 1') !== -1) {
    s = expand_special(s, special1);
  }
  if (special1 && s.indexOf('Special 2') !== -1) {
    s = expand_special(s, special2);
  }

  return s;
}

export const expandString = (
  macro: string,
  attack: number[],
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
