'use client';

import { Toast } from '@ark-ui/react/toast';
import { styled } from '@style/jsx';
import { toast } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(toast);

export const Root = withProvider(styled(Toast.Root), 'root');
export const CloseTrigger = withContext(
  styled(Toast.CloseTrigger),
  'closeTrigger',
);
export const Description = withContext(
  styled(Toast.Description),
  'description',
);
export const Group = withContext(styled(Toast.Group), 'group');
export const Title = withContext(styled(Toast.Title), 'title');

export type RootProps = ComponentProps<typeof Root>;
export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export type DescriptionProps = ComponentProps<typeof Description>;
export type GroupProps = ComponentProps<typeof Group>;
export type TitleProps = ComponentProps<typeof Title>;
