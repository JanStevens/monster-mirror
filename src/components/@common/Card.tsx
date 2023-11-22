import { ark } from '@ark-ui/react';
import { styled } from '@style/jsx';
import { card, type CardVariantProps } from '@style/recipes';
import { createStyleContext } from 'lib/create-style-context';
import type { ComponentPropsWithoutRef } from 'react';

const { withProvider, withContext } = createStyleContext(card);

export type CardProps = CardVariantProps &
  ComponentPropsWithoutRef<typeof ark.div>;

const CardRoot = withProvider(styled(ark.div), 'root');
export const CardBody = withContext(styled(ark.div), 'body');
export const CardDescription = withContext(styled(ark.p), 'description');
export const CardFooter = withContext(styled(ark.div), 'footer');
export const CardHeader = withContext(styled(ark.div), 'header');
export const CardTitle = withContext(styled(ark.h3), 'title');

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Body: CardBody,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
});
