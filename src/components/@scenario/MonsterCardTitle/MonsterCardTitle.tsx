import { css } from '@style/css';
import { Flex } from '@style/jsx';
import { Icon } from 'icons';

import type { MonsterDeck } from 'types/deck.types';

import { Card } from 'components/@common/card';
import { Text } from 'components/@common/text';

import { expandAbilities, hasFlyingAttribute } from './utils';

interface Props {
  deck: MonsterDeck;
}

const MonsterCardTitle = ({ deck }: Props) => {
  const { attack, move, range, attributes } = deck.stats;
  const isFlying = hasFlyingAttribute(deck.stats.attributes[0]);

  const [normalAbilitiesHTML, eliteAbilitiesHTML] = expandAbilities(
    attributes,
    attack,
    move,
    range,
  );

  return (
    <Flex flexDir="column" flex="1">
      <Card.Title
        display="flex"
        alignItems="center"
        gap="2"
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
            fontSize="85%"
            textAlign="right"
            display="inline-flex"
            alignItems="center"
            justifyContent="flex-end"
            gap={2}
            dangerouslySetInnerHTML={{ __html: normalAbilitiesHTML }}
          />
        </Flex>
        {!deck.isBoss && deck.stats.health[1] > 0 && (
          <Flex justify="space-between" gap="3" align="center">
            <Text color="accent.11" whiteSpace="nowrap">
              HP {deck.stats.health[1]}
            </Text>

            <Text
              fontSize="85%"
              color="accent.11"
              textAlign="right"
              display="inline-flex"
              alignItems="center"
              justifyContent="flex-end"
              gap={2}
              dangerouslySetInnerHTML={{ __html: eliteAbilitiesHTML }}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default MonsterCardTitle;
