'use client';
import type { Assign } from '@ark-ui/react';
import { RatingGroup } from '@ark-ui/react/rating-group';
import { createStyleContext } from 'lib/create-style-context';
import {
  ratingGroup,
  type RatingGroupVariantProps,
} from 'styled-system/recipes';
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types';

const { withProvider, withContext } = createStyleContext(ratingGroup);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, RatingGroup.RootProviderBaseProps>,
    RatingGroupVariantProps
  >
>(RatingGroup.RootProvider, 'root');

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, RatingGroup.RootBaseProps>,
    RatingGroupVariantProps
  >
>(RatingGroup.Root, 'root');

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, RatingGroup.ControlBaseProps>
>(RatingGroup.Control, 'control');

export const Item = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, RatingGroup.ItemBaseProps>
>(RatingGroup.Item, 'item');

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, RatingGroup.LabelBaseProps>
>(RatingGroup.Label, 'label');

export {
  RatingGroupContext as Context,
  RatingGroupHiddenInput as HiddenInput,
  RatingGroupItemContext as ItemContext,
} from '@ark-ui/react/rating-group';
