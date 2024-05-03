import { HStack, Stack, StackProps } from '@style/jsx';
import { PARTY_LEVELS } from 'data/config';
import { HeartPulseIcon } from 'lucide-react';

import { useStore } from 'services/stores';

import { Slider, Text } from 'components/@common';

const PartyLevelField = (props: StackProps) => {
  const partyLevel = useStore((state) => state.level);
  const { setLevel } = useStore((state) => state.actions);

  return (
    <Stack
      flexDir={{ smDown: 'column', base: 'row' }}
      alignItems={{ smDown: 'flex-start', base: 'center' }}
      justifyContent={{ smDown: 'flex-start', base: 'space-between' }}
      width="100%"
      marginBottom={{ smDown: 8, base: 6 }}
      {...props}
    >
      <HStack gap="2" marginRight="12">
        <HeartPulseIcon />
        <Text fontSize={{ smDown: '2xl', base: '3xl' }} whiteSpace="nowrap">
          Party level
        </Text>
      </HStack>

      <Slider
        value={[partyLevel]}
        marks={PARTY_LEVELS.map((level) => ({
          value: level,
          label: `${level}`,
        }))}
        onValueChange={({ value }) => setLevel(value[0])}
        size="lg"
        min={PARTY_LEVELS[0]}
        max={PARTY_LEVELS[PARTY_LEVELS.length - 1]}
      />
    </Stack>
  );
};

export default PartyLevelField;
