import { type HTMLStyledProps, styled, type StyledComponent } from '@style/jsx';
import { text, type TextVariantProps } from '@style/recipes';
import { useMemo } from 'react';

type As = 'p' | 'span' | 'div' | 'label';

export type TextProps = {
  as?: As;
} & TextVariantProps &
  HTMLStyledProps<As>;

export const Text = (props: TextProps) => {
  const { as = 'p', ...localProps } = props;
  const Dynamic = useMemo(() => styled(as, text) as StyledComponent<As>, [as]);

  return <Dynamic {...localProps} />;
};
