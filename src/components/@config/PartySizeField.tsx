import { cva } from '@style/css';
import { Box, HStack, Stack } from '@style/jsx';
import { CHARACTERS } from 'data/characters';
import { UsersIcon } from 'lucide-react';
import Image from 'next/image';

import { useStore } from 'services/stores';

import { Text } from 'components/@common/text';

const hoverIcon = cva({
  base: { filter: 'none' },
  variants: {
    state: {
      disabled: {
        filter:
          'brightness(0) invert(24%) sepia(2%) saturate(17%) hue-rotate(324deg) brightness(98%) contrast(82%)',
      },
      active: {
        filter: 'none',
      },
    },
  },
});

const PartySizeField = () => {
  const party = useStore((state) => state.party);
  const { togglePlayer } = useStore((state) => state.actions);

  return (
    <Stack
      flexDir={{ smDown: 'column', base: 'row' }}
      alignItems={{ smDown: 'flex-start', base: 'center' }}
      justifyContent={{ smDown: 'flex-start', base: 'space-between' }}
      width="100%"
    >
      <HStack gap="2" marginRight="12">
        <UsersIcon />
        <Text fontSize={{ smDown: '2xl', base: '3xl' }} whiteSpace="nowrap">
          Party
        </Text>
      </HStack>

      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gap="4"
        rowGap="4"
      >
        {Object.values(CHARACTERS).map((item) => {
          const isSelected = party.includes(item.name);
          return (
            <Box key={item.name} onClick={() => togglePlayer(item.name)}>
              <Image
                src={`/images/characters/${item.icon}`}
                width={42}
                height={42}
                alt={item.name}
                className={hoverIcon({
                  state: isSelected ? 'active' : 'disabled',
                })}
              />
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export default PartySizeField;
