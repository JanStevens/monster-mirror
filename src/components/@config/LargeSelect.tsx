import { Portal } from '@ark-ui/react';
import { PropertyValue } from '@style/types/prop-type';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { Select, type SelectProps } from 'components/@common';

type Item = {
  label: string;
  value: string;
};

interface Props extends SelectProps<Item> {
  placeholder?: string;
  width?: PropertyValue<'width'>;
}

export const LargeSelect = ({ items, placeholder, ...props }: Props) => {
  return (
    // @ts-ignore expect items to be array of objects
    <Select.Root
      positioning={{
        sameWidth: true,
        fitViewport: true,
        strategy: 'fixed',
        listeners: true,
      }}
      items={items}
      {...props}
    >
      <Select.Control>
        <Select.Trigger
          fontSize={{ smDown: '2xl', base: '3xl' }}
          height="16"
          css={{ '& :where(svg)': { width: '5', height: '5' } }}
        >
          {/* @ts-ignore placeholder works but not properly typed */}
          <Select.ValueText placeholder={placeholder} />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner overflow="scroll">
          <Select.Content>
            <Select.ItemGroup id="framework">
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  item={item}
                  fontSize={{ smDown: '2xl', base: '3xl' }}
                  paddingBlock="3.5"
                  height="initial"
                >
                  <Select.ItemText fontFamily="pirataOne">
                    {item.label}
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
