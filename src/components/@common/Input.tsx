import type { Assign } from '@ark-ui/react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { input, type InputVariantProps } from '@style/recipes';
import type { JsxStyleProps } from '@style/types';

export type InputProps = Assign<
  Assign<JsxStyleProps, HTMLArkProps<'input'>>,
  InputVariantProps
>;
export const Input = styled(ark.input, input);
