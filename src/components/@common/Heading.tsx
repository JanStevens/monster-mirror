import { type HTMLStyledProps, styled, type StyledComponent } from '@style/jsx';
import { text, type TextVariantProps } from '@style/recipes';
import { useMemo } from 'react';

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  as?: As;
} & TextVariantProps &
  HTMLStyledProps<As>;

export const Heading = (props: HeadingProps) => {
  const { as = 'h2', ...localProps } = props;
  const Dynamic = useMemo(() => styled(as, text) as StyledComponent<As>, [as]);

  return <Dynamic {...localProps} />;
};
