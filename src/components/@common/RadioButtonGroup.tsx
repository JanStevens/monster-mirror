'use client';

import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/react/radio-group';
import { styled } from '@style/jsx';
import { radioButtonGroup } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(radioButtonGroup);

export const Root = withProvider(styled(ArkRadioButtonGroup.Root), 'root');
export const Indicator = withContext(
  styled(ArkRadioButtonGroup.Indicator),
  'indicator',
);
export const Item = withContext(styled(ArkRadioButtonGroup.Item), 'item');
export const ItemControl = withContext(
  styled(ArkRadioButtonGroup.ItemControl),
  'itemControl',
);
export const ItemText = withContext(
  styled(ArkRadioButtonGroup.ItemText),
  'itemText',
);
export const Label = withContext(styled(ArkRadioButtonGroup.Label), 'label');

export type RootProps = ComponentProps<typeof Root>;
export type IndicatorProps = ComponentProps<typeof Indicator>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemControlProps = ComponentProps<typeof ItemControl>;
export type ItemTextProps = ComponentProps<typeof ItemText>;
export type LabelProps = ComponentProps<typeof Label>;
