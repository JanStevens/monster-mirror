import { css } from '@style/css';
import { Flex } from '@style/jsx';
import { Icon } from 'icons';

import { expandString } from 'utils/macro.utils';

import type { MonsterDeck } from 'types/deck.types';

import { Card } from 'components/@common/card';
import { Text } from 'components/@common/text';

interface Props {
  deck: MonsterDeck;
  additional?: string[];
}

const hasFlyingAttribute = (lines: string[]) =>
  !!lines.find((line) => line.includes('%flying%'));

const expandAbilities = (
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
    const lines = Object.entries(groupedLines).reduce<string[]>(
      (acc, [key, value]) => {
        if (key === value) {
          acc.push(key);
        } else {
          acc.push(`${key} ${value}`);
        }
        return acc;
      },
      [],
    );

    return lines
      .filter((value) => value !== '%flying%')
      .map((value) => expandString(value, attack, move, range))
      .join('&nbsp;&nbsp;');
  });

const MonsterCardTitle = ({ deck, additional }: Props) => {
  const { attack, move, range, attributes } = deck.stats;
  const isFlying = hasFlyingAttribute(deck.stats.attributes[0]);

  const [normalAbilitiesHTML, eliteAbilitiesHTML] = expandAbilities(
    attributes,
    attack,
    move,
    range,
    additional,
  );

  return (
    <Flex flexDir="column" flex="1">
      <Card.Title
        display="flex"
        alignItems="center"
        gap="4"
        fontSize="2xl"
        fontWeight="normal"
      >
        {deck.name}
        {isFlying && (
          <span className={css({ display: 'inline-block' })}>
            <Icon name="fly" fontSize="24" />
          </span>
        )}
      </Card.Title>

      <Flex gap="0" flexDir="column">
        <Flex justify="space-between" gap="3" align="center">
          <Text whiteSpace="nowrap">HP {deck.stats.health[0]}</Text>
          <Text
            fontSize="90%"
            textAlign="right"
            dangerouslySetInnerHTML={{ __html: normalAbilitiesHTML }}
          />
        </Flex>
        {!deck.isBoss && deck.stats.health[1] > 0 && (
          <Flex justify="space-between" gap="3" align="center">
            <Text color="accent.11" whiteSpace="nowrap">
              HP {deck.stats.health[1]}
            </Text>

            <Text
              fontSize="90%"
              color="accent.11"
              textAlign="right"
              dangerouslySetInnerHTML={{ __html: eliteAbilitiesHTML }}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default MonsterCardTitle;
