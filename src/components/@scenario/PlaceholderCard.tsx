import { css } from '@style/css';
import { Box, Divider } from '@style/jsx';

import { useStore } from 'services/stores';
import type { BossDeck, MonsterDeck } from 'types/deck.types';

import { Card } from 'components/@common/card';
import { Text } from 'components/@common/text';

interface Props {
  decks: (BossDeck | MonsterDeck)[];
}

const PlaceholderCard = ({ decks }: Props) => {
  const { selectEnemy } = useStore((state) => state.actions);
  return (
    <Card.Root borderColor="border.accent" borderWidth="1px">
      <Card.Header
        flexDir="row"
        gap="4"
        pt="3"
        px="3"
        pb="0"
        alignItems="center"
        justifyContent="center"
      >
        {/* @ts-expect-error not working with as property */}
        <Card.Title fontSize="2xl" fontWeight="normal" as="h2">
          Select a Monster deck
        </Card.Title>
      </Card.Header>
      <Divider my="4" />
      <Card.Body px="3" pb="3" flexDir="row" justifyContent="center">
        <Box
          display="grid"
          flexGrow="1"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={{ smDown: '2', base: '4' }}
          justifyContent="stretch"
          alignItems="stretch"
        >
          {decks.map((deck) => (
            <Box
              key={deck.name}
              display="flex"
              alignItems="center"
              flexDir="column"
              gap="1"
              minWidth="100px"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="92px"
                aspectRatio="128/147"
                position="relative"
                cursor="pointer"
                onClick={() => selectEnemy(deck.name)}
              >
                <img
                  src={`/images/thumbnails/${deck.image}`}
                  alt={deck.name}
                  decoding="async"
                  sizes="128px"
                  className={css({
                    objectFit: 'cover',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    inset: 0,
                  })}
                />
              </Box>
              <Text fontSize="lg" whiteSpace="nowrap">
                {deck.name}
              </Text>
            </Box>
          ))}
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default PlaceholderCard;
