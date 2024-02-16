'use client';
import { Popover } from '@ark-ui/react/popover';
import { styled } from '@style/jsx';
import { popover } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(popover);

export const Root = withProvider(Popover.Root);
export const Anchor = withContext(styled(Popover.Anchor), 'anchor');
export const Arrow = withContext(styled(Popover.Arrow), 'arrow');
export const ArrowTip = withContext(styled(Popover.ArrowTip), 'arrowTip');
export const CloseTrigger = withContext(
  styled(Popover.CloseTrigger),
  'closeTrigger',
);
export const Content = withContext(styled(Popover.Content), 'content');
export const Description = withContext(
  styled(Popover.Description),
  'description',
);
export const Indicator = withContext(styled(Popover.Indicator), 'indicator');
export const Positioner = withContext(styled(Popover.Positioner), 'positioner');
export const Title = withContext(styled(Popover.Title), 'title');
export const Trigger = withContext(styled(Popover.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type AnchorProps = ComponentProps<typeof Anchor>;
export type ArrowProps = ComponentProps<typeof Arrow>;
export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export type ContentProps = ComponentProps<typeof Content>;
export type DescriptionProps = ComponentProps<typeof Description>;
export type IndicatorProps = ComponentProps<typeof Indicator>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type TitleProps = ComponentProps<typeof Title>;
export type TriggerProps = ComponentProps<typeof Trigger>;
