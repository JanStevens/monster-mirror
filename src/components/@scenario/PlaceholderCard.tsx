import { Box, Divider } from '@style/jsx';
import Image from 'next/image';

import { useStore } from 'store/useStore';
import type { BossDeck, MonsterDeck } from 'types/deck.types';

import { Card, Text } from 'components/@common';

interface Props {
  decks: (BossDeck | MonsterDeck)[];
}

const PlaceholderCard = ({ decks }: Props) => {
  const selectDeck = useStore((state) => state.selectDeck);
  return (
    <Card.Root
      bgColor="transparent"
      borderColor="border.accent"
      borderWidth="1px"
    >
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
      <Card.Body px="3" pb="3" flexDir="row">
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
                onClick={() => selectDeck(deck.name)}
              >
                <Image
                  src={`/images/thumbnails/${deck.image}`}
                  alt={deck.name}
                  fill
                  priority
                  sizes="128px"
                  style={{
                    objectFit: 'cover',
                  }}
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
