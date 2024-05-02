'use client';

import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { alert } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(alert);

export const Root = withProvider(styled(ark.div), 'root');
export const Content = withContext(styled(ark.div), 'content');
export const Description = withContext(styled(ark.div), 'description');
export const Icon = withContext(styled(ark.svg), 'icon');
export const Title = withContext(styled(ark.h5), 'title');

export type RootProps = ComponentProps<typeof Root>;
export type ContentProps = ComponentProps<typeof Content>;
export type DescriptionProps = ComponentProps<typeof Description>;
export type IconProps = ComponentProps<typeof Icon>;
export type TitleProps = ComponentProps<typeof Title>;
