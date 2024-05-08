import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { formLabel } from '@style/recipes';
import type { ComponentProps } from 'react';

export const FormLabel = styled(ark.label, formLabel);
export type FormLabelProps = ComponentProps<typeof FormLabel>;
