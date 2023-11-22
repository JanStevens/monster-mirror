import { ark, type HTMLArkProps } from '@ark-ui/react';
import { styled } from '@style/jsx';
import { button, type ButtonVariantProps } from '@style/recipes';

export type ButtonProps = ButtonVariantProps & HTMLArkProps<'button'>;
export const Button = styled(ark.button, button);
