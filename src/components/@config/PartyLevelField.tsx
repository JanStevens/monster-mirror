import { HStack, Stack, StackProps } from '@style/jsx';
import { PARTY_LEVELS } from 'data/config';
import { HeartPulseIcon } from 'lucide-react';

import { Slider, Text } from 'components/@common';

interface Props extends Omit<StackProps, 'onChange'> {
  partyLevel: number;
  onChange: (partyLevel: number) => void;
}

const PartyLevelField = ({ partyLevel, onChange, ...props }: Props) => {
  return (
    <Stack
      flexDir={{ smDown: 'column', base: 'row' }}
      alignItems={{ smDown: 'flex-start', base: 'center' }}
      justifyContent={{ smDown: 'flex-start', base: 'space-between' }}
      width="100%"
      marginBottom={{ smDown: 8, base: 0 }}
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
        onValueChange={({ value }) => onChange(value[0])}
        size="lg"
        min={PARTY_LEVELS[0]}
        max={PARTY_LEVELS[PARTY_LEVELS.length - 1]}
      />
    </Stack>
  );
};

export default PartyLevelField;
