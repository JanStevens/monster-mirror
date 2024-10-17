import { createListCollection, Portal, SelectRootProps } from '@ark-ui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { Select } from 'components/@common/select';

type SelectItem = { label: string; value: string };

interface Props extends Omit<Select.RootProps, 'collection'> {
  placeholder?: string;
  items: SelectRootProps<SelectItem>['collection']['items'];
}

export const LargeSelect = ({ items, placeholder, ...props }: Props) => {
  const collection = createListCollection({ items });
  return (
    <Select.Root
      positioning={{
        sameWidth: true,
        fitViewport: true,
        strategy: 'fixed',
        listeners: true,
      }}
      collection={collection}
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
              {collection.items.map((item) => (
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
