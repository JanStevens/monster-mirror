'use client';

import { Dialog as ArkDrawer } from '@ark-ui/react/dialog';
import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { drawer } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(drawer);

export const Root = withProvider(ArkDrawer.Root);
export const Backdrop = withContext(styled(ArkDrawer.Backdrop), 'backdrop');
export const Body = withContext(styled(ark.div), 'body');
export const CloseTrigger = withContext(
  styled(ArkDrawer.CloseTrigger),
  'closeTrigger',
);
export const Content = withContext(styled(ArkDrawer.Content), 'content');
export const Description = withContext(
  styled(ArkDrawer.Description),
  'description',
);
export const Footer = withContext(styled(ark.div), 'footer');
export const Header = withContext(styled(ark.div), 'header');
export const Positioner = withContext(
  styled(ArkDrawer.Positioner),
  'positioner',
);
export const Title = withContext(styled(ArkDrawer.Title), 'title');
export const Trigger = withContext(styled(ArkDrawer.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type BackdropProps = ComponentProps<typeof Backdrop>;
export type BodyProps = ComponentProps<typeof Body>;
export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export type ContentProps = ComponentProps<typeof Content>;
export type DescriptionProps = ComponentProps<typeof Description>;
export type FooterProps = ComponentProps<typeof Footer>;
export type HeaderProps = ComponentProps<typeof Header>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type TitleProps = ComponentProps<typeof Title>;
export type TriggerProps = ComponentProps<typeof Trigger>;
