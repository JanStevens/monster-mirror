import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { button } from '@style/recipes';
import type { ComponentProps } from 'react';

export const Button = styled(ark.button, button);
export type ButtonProps = ComponentProps<typeof Button>;
