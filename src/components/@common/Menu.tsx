'use client';

import { Menu } from '@ark-ui/react/menu';
import { styled } from '@style/jsx';
import { menu } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(menu);

export const Root = withProvider(Menu.Root);
export const Arrow = withContext(styled(Menu.Arrow), 'arrow');
export const ArrowTip = withContext(styled(Menu.ArrowTip), 'arrowTip');
export const Content = withContext(styled(Menu.Content), 'content');
export const ContextTrigger = withContext(
  styled(Menu.ContextTrigger),
  'contextTrigger',
);
export const Item = withContext(styled(Menu.Item), 'item');
export const ItemGroup = withContext(styled(Menu.ItemGroup), 'itemGroup');
export const ItemGroupLabel = withContext(
  styled(Menu.ItemGroupLabel),
  'itemGroupLabel',
);
export const OptionItem = withContext(styled(Menu.OptionItem), 'optionItem');
export const Positioner = withContext(styled(Menu.Positioner), 'positioner');
export const Separator = withContext(styled(Menu.Separator), 'separator');
export const Trigger = withContext(styled(Menu.Trigger), 'trigger');
export const TriggerItem = withContext(styled(Menu.TriggerItem), 'triggerItem');

export type RootProps = ComponentProps<typeof Root>;
export type ArrowProps = ComponentProps<typeof Arrow>;
export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export type ContentProps = ComponentProps<typeof Content>;
export type ContextTriggerProps = ComponentProps<typeof ContextTrigger>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export type ItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export type OptionItemProps = ComponentProps<typeof OptionItem>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type SeparatorProps = ComponentProps<typeof Separator>;
export type TriggerProps = ComponentProps<typeof Trigger>;
export type TriggerItemProps = ComponentProps<typeof TriggerItem>;
