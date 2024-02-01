import { Portal, SelectRootProps } from '@ark-ui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { Select } from 'components/@common';

interface Props extends Select.RootProps {
  placeholder?: string;
  items: SelectRootProps<{ label: string; value: string }>['items'];
}

export const LargeSelect = ({ items, placeholder, ...props }: Props) => {
  return (
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
