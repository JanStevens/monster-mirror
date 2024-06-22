import { forwardRef } from 'react';

import { Text, type TextProps } from './Text';

type HeadingProps = TextProps<React.ElementType>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => <Text as="h2" variant="heading" ref={ref} {...props} />,
);

Heading.displayName = 'Heading';
