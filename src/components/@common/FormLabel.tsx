import type { Assign } from '@ark-ui/react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { formLabel, type FormLabelVariantProps } from '@style/recipes';
import type { JsxStyleProps } from '@style/types';

export interface FormLabelProps
  extends Assign<JsxStyleProps, HTMLArkProps<'label'>>,
    FormLabelVariantProps {}
export const FormLabel = styled(ark.label, formLabel);
