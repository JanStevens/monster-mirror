import type { Assign, HTMLArkProps } from '@ark-ui/react';
import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { iconButton, type IconButtonVariantProps } from '@style/recipes';
import type { JsxStyleProps } from '@style/types';

export interface IconButtonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'button'>>,
    IconButtonVariantProps {}
export const IconButton = styled(ark.button, iconButton);
