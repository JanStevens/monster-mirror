import type { Assign } from '@ark-ui/react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { button, type ButtonVariantProps } from '@style/recipes';
import type { JsxStyleProps } from '@style/types';

export interface ButtonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'button'>>,
    ButtonVariantProps {}
export const Button = styled(ark.button, button);
