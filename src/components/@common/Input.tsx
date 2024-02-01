import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { input } from '@style/recipes';
import type { ComponentProps } from 'react';

export const Input = styled(ark.input, input);
export type InputProps = ComponentProps<typeof Input>;
