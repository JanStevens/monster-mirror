import { Box, Divider } from '@style/jsx';
import Image from 'next/image';
import slugify from 'slugify';

import { Card, Text } from 'components/@common';

interface Props {
  deckNames: string[];
  onSelectDeck: (deckName: string) => void;
}

const PlaceholderCard = ({ deckNames, onSelectDeck }: Props) => {
  return (
    <Card bgColor="transparent" borderColor="border.accent" borderWidth="1px">
      <Card.Header
        flexDir="row"
        gap="4"
        pt="3"
        px="3"
        pb="0"
        alignItems="center"
        justifyContent="center"
      >
        <Card.Title fontSize="2xl" fontWeight="normal">
          Select a Monster deck
        </Card.Title>
      </Card.Header>
      <Divider my="4" />
      <Card.Body px="3" pb="3">
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, minmax(100px, 1fr))"
          gap="4"
          justifyContent="stretch"
          alignItems="stretch"
          aspectRatio="437/280"
        >
          {deckNames.map((deckName) => (
            <Box
              key={deckName}
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
                onClick={() => onSelectDeck(deckName)}
              >
                <Image
                  src={`/images/thumbnails/gh-${slugify(deckName, {
                    trim: true,
                    lower: true,
                  })}.png`}
                  alt="monster"
                  fill
                  sizes="128px"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Text fontSize="lg" whiteSpace="nowrap">
                {deckName}
              </Text>
            </Box>
          ))}
        </Box>
      </Card.Body>
    </Card>
  );
};

export default PlaceholderCard;
