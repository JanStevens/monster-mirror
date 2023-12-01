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
        gap="0.5"
        gridTemplateColumns="1.25em 1.25em"
        transform="rotate(45deg)"
        width="2.5em"
        fontSize="1.4em"
        mr="3"
        className={css({ '& .icon': { transform: 'rotate(-45deg)' } })}
        dangerouslySetInnerHTML={{ __html: immunityIcons }}
      />
    </Flex>
  );
};

export default BossCardTitle;
