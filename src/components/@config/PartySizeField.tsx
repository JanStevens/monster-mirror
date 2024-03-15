import { HStack, Stack } from '@style/jsx';
import { CHARACTERS_COUNT } from 'data/config';
import { UsersIcon } from 'lucide-react';

import { RadioButtonGroup, Text } from 'components/@common';

interface Props {
  partySize: number;
  onChange: (partySize: number) => void;
}

const PartySizeField = ({ partySize, onChange }: Props) => {
  return (
    <Stack
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <HStack gap="2" marginRight="12">
        <UsersIcon />
        <Text fontSize={{ smDown: '2xl', base: '3xl' }} whiteSpace="nowrap">
          Party size
        </Text>
      </HStack>

      <RadioButtonGroup.Root
        value={String(partySize)}
        variant="outline"
        onValueChange={({ value }) => onChange(Number(value))}
        size="xl"
      >
        {CHARACTERS_COUNT.map((item) => (
          <RadioButtonGroup.Item key={item} value={`${item}`}>
            <RadioButtonGroup.ItemControl />
            <RadioButtonGroup.ItemText fontSize="xl" fontWeight="normal">
              {item}
            </RadioButtonGroup.ItemText>
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root>
    </Stack>
  );
};

export default PartySizeField;
