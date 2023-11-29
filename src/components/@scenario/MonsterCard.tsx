'use client';

import { css } from '@style/css';
import { Divider, Flex } from '@style/jsx';
import { BossDeck, MonsterDeck } from 'app/scenarios/[id]/useDeck';
import { Icon } from 'icons';
import Image from 'next/image';

import { Card, Text } from 'components/@common';

interface Props {
  deck: BossDeck | MonsterDeck;
}

const hasFlyingAttribute = (lines: string[]) =>
  !!lines.find((line) => line.includes('%flying%'));

const MonsterCard = ({ deck }: Props) => {
  // @ts-expect-error TODO: need to figure out boss cards
  const isFlying = hasFlyingAttribute(deck.stats.attributes[0]);

  return (
    <Card>
      <Card.Header flexDir="row" gap="4" pb="0">
        <Image
          src={`/images/monsters/${deck.name}.png`}
          alt="monster"
          width={75}
          height={75}
        />
        <Flex flexDir="column">
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
          <Flex gap="2">
            <Text as="span">HP {deck.stats.health[0]}</Text> /
            <Text as="span" color="accent.11">
              HP {deck.stats.health[1]}
            </Text>
          </Flex>
        </Flex>
      </Card.Header>
      <Divider my="4" />
      <Card.Body>
        <ul
          className={css({
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            flexWrap: 'wrap',
            // p: 6,
            zIndex: 1,
            aspectRatio: '437/296',
          })}
        >
          {deck.cards.map((card, idx) => (
            <li key={idx}>
              <button
                className={css({
                  p: 3,
                  bgColor: 'white',
                  borderRadius: 15,
                  textAlign: 'center',
                  lineHeight: 0.9,
                  width: '65px',
                  color: 'black',
                  cursor: 'pointer',
                  boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
                  textShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
                })}
                // onClick={() => {
                //   setCardSelected(card);
                // }}
              >
                {card.initiative}
              </button>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default MonsterCard;
