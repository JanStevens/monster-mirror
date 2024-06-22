import type { Assign } from '@ark-ui/react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { badge, type BadgeVariantProps } from '@style/recipes';
import type { JsxStyleProps } from '@style/types';

export interface BadgeProps
  extends Assign<JsxStyleProps, HTMLArkProps<'div'>>,
    BadgeVariantProps {}
export const Badge = styled(ark.div, badge);
