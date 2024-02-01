import { Select } from '@ark-ui/react/select';
import { styled } from '@style/jsx';
import { select } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(select);

export const Root = withProvider(styled(Select.Root), 'root');
export const ClearTrigger = withContext(
  styled(Select.ClearTrigger),
  'clearTrigger',
);
export const Content = withContext(styled(Select.Content), 'content');
export const Control = withContext(styled(Select.Control), 'control');
export const Indicator = withContext(styled(Select.Indicator), 'indicator');
export const Item = withContext(styled(Select.Item), 'item');
export const ItemGroup = withContext(styled(Select.ItemGroup), 'itemGroup');
export const ItemGroupLabel = withContext(
  styled(Select.ItemGroupLabel),
  'itemGroupLabel',
);
export const ItemIndicator = withContext(
  styled(Select.ItemIndicator),
  'itemIndicator',
);
export const ItemText = withContext(styled(Select.ItemText), 'itemText');
export const Label = withContext(styled(Select.Label), 'label');
export const Positioner = withContext(styled(Select.Positioner), 'positioner');
export const Trigger = withContext(styled(Select.Trigger), 'trigger');
export const ValueText = withContext(styled(Select.ValueText), 'valueText');

export type RootProps = ComponentProps<typeof Root>;
export type ClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export type ContentProps = ComponentProps<typeof Content>;
export type ControlProps = ComponentProps<typeof Control>;
export type IndicatorProps = ComponentProps<typeof Indicator>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export type ItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export type ItemTextProps = ComponentProps<typeof ItemText>;
export type LabelProps = ComponentProps<typeof Label>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type TriggerProps = ComponentProps<typeof Trigger>;
export type ValueTextProps = ComponentProps<typeof ValueText>;
