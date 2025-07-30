import { Box, VStack } from '@style/jsx';
import { Icon } from 'icons';
import Image from 'next/image';

import { getEnemyArtwork, isBossName } from 'utils/deck.utils';

import type { EnemyNames } from 'types/enemies.types';

import { Card } from 'components/@common/card';
import { Text } from 'components/@common/text';

interface Props {
  monster: EnemyNames;
  isSelected: boolean;
  onToggle: (monster: EnemyNames) => void;
}

const EnemyCard = ({ monster, isSelected, onToggle }: Props) => {
  const image = getEnemyArtwork(monster);
  const isBoss = isBossName(monster);

  return (
    <Card.Root
      cursor="pointer"
      onClick={() => onToggle(monster)}
      borderWidth="2px"
      borderColor={isSelected ? 'accent.default' : 'border.default'}
      bg={isSelected ? 'accent.subtle' : 'bg.default'}
      transition="all 0.2s"
      _hover={{
        borderColor: 'accent.default',
        transform: 'scale(1.02)',
      }}
      position="relative"
    >
      {isSelected && (
        <Box
          position="absolute"
          top="2"
          right="2"
          zIndex="10"
          bg="accent.default"
          borderRadius="full"
          p="1"
        >
          <Icon name="check" color="white" />
        </Box>
      )}

      <Card.Body p="3" textAlign="center">
        <VStack gap="2">
          <Box
            position="relative"
            width="80px"
            height="92px"
            mx="auto"
            borderRadius="md"
            overflow="hidden"
          >
            <Image
              src={`/images/thumbnails/${image}`}
              alt={monster}
              fill
              sizes="80px"
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
          <Text
            fontSize="md"
            color={isBoss ? 'accent.default' : 'fg.default'}
            fontWeight="medium"
            lineHeight="tight"
          >
            {monster}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export default EnemyCard;
