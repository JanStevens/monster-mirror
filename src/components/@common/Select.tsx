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
const SelectClearTrigger = withContext(
  styled(ArkSelect.ClearTrigger),
  'clearTrigger',
);
const SelectContent = withContext(styled(ArkSelect.Content), 'content');
const SelectControl = withContext(styled(ArkSelect.Control), 'control');
const SelectItem = withContext(styled(ArkSelect.Item), 'item');
const SelectItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup');
const SelectItemGroupLabel = withContext(
  styled(ArkSelect.ItemGroupLabel),
  'itemGroupLabel',
);
const SelectItemIndicator = withContext(
  styled(ArkSelect.ItemIndicator),
  'itemIndicator',
);
const SelectItemText = withContext(styled(ArkSelect.ItemText), 'itemText');
const SelectLabel = withContext(styled(ArkSelect.Label), 'label');
const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  'positioner',
);
const SelectTrigger = withContext(styled(ArkSelect.Trigger), 'trigger');
const SelectValueText = withContext(styled(ArkSelect.ValueText), 'valueText');

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
