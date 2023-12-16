import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { input, type InputVariantProps } from '@style/recipes';
import type { ComponentPropsWithoutRef } from 'react';

export type InputProps = InputVariantProps &
  ComponentPropsWithoutRef<typeof ark.input>;
export const Input = styled(ark.input, input);
