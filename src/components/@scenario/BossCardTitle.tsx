import { css } from '@style/css';
import { Flex, Grid } from '@style/jsx';

import { expandString } from 'utils/macro.utils';

import { BossDeck } from 'hooks/useDecks';

import { Card, Text } from 'components/@common';

interface Props {
  deck: BossDeck;
}

const BossCardTitle = ({ deck }: Props) => {
  const { attack, move, range, immunities } = deck.stats;

  const immunityIcons = immunities
    .map((macro) => expandString(macro, attack, move, range))
    .join('');

  return (
    <Flex alignItems="center" justify="space-between" flex="1">
      <Flex flexDir="column" flex="1">
        <Card.Title
          display="flex"
          alignItems="center"
          gap="4"
          fontSize="2xl"
          fontWeight="normal"
        >
          {deck.name}
        </Card.Title>

        <Flex gap="0" flexDir="column">
          <Flex justify="space-between" gap="3" align="center">
            <Text>HP {deck.stats.health[0]}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Grid
        gap="1"
        style={{
          gridTemplateColumns: `repeat(${Math.round(
            immunities.length / 2,
          )}, 1.25em)`,
        }}
        fontSize="1.4em"
        dangerouslySetInnerHTML={{ __html: immunityIcons }}
      />
    </Flex>
  );
};

export default BossCardTitle;
