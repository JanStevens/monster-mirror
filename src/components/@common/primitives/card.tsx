'use client';
import type { Assign, PolymorphicProps } from '@ark-ui/react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { createStyleContext } from 'lib/create-style-context';
import { card, type CardVariantProps } from 'styled-system/recipes';
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types';

const { withProvider, withContext } = createStyleContext(card);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, CardVariantProps>
>(ark.div, 'root');

export const Body = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'body');

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'description');

export const Footer = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'footer');

export const Header = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'header');

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<'h3'>, HTMLArkProps<'h3'>>
>(ark.h3, 'title');
