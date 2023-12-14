import {
  type CollectionItem,
  Select as ArkSelect,
  type SelectProps as ArkSelectProps,
} from '@ark-ui/react/select';
import { styled } from '@style/jsx';
import { select, type SelectVariantProps } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';

const { withProvider, withContext } = createStyleContext(select);

export type SelectProps<T extends CollectionItem> = ArkSelectProps<T> &
  SelectVariantProps;

const SelectRoot = withProvider(styled(ArkSelect.Root), 'root');
export const SelectClearTrigger = withContext(
  styled(ArkSelect.ClearTrigger),
  'clearTrigger',
);
export const SelectContent = withContext(styled(ArkSelect.Content), 'content');
export const SelectControl = withContext(styled(ArkSelect.Control), 'control');
export const SelectItem = withContext(styled(ArkSelect.Item), 'item');
export const SelectItemGroup = withContext(
  styled(ArkSelect.ItemGroup),
  'itemGroup',
);
export const SelectItemGroupLabel = withContext(
  styled(ArkSelect.ItemGroupLabel),
  'itemGroupLabel',
);
export const SelectItemIndicator = withContext(
  styled(ArkSelect.ItemIndicator),
  'itemIndicator',
);
export const SelectItemText = withContext(
  styled(ArkSelect.ItemText),
  'itemText',
);
export const SelectLabel = withContext(styled(ArkSelect.Label), 'label');
export const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  'positioner',
);
export const SelectTrigger = withContext(styled(ArkSelect.Trigger), 'trigger');
export const SelectValueText = withContext(
  styled(ArkSelect.ValueText),
  'valueText',
);

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Control: SelectControl,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Label: SelectLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
});
