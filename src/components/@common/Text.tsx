/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-types */
import type { Assign, HTMLArkProps } from '@ark-ui/react';
import { css, cx } from '@style/css';
import { splitCssProps } from '@style/jsx';
import { text, type TextVariantProps } from '@style/recipes';
import type { JsxStyleProps } from '@style/types';
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from 'react';

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  Props = {},
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type TextProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  Assign<JsxStyleProps, HTMLArkProps<'p'>> & TextVariantProps
>;

type PolymorphicComponent = <C extends ElementType = 'p'>(
  props: TextProps<C>,
) => ReactNode | null;

export const Text: PolymorphicComponent = forwardRef(
  <C extends ElementType = 'p'>(
    props: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const [variantProps, textProps] = text.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(textProps);
    const { className, as, ...otherProps } = localProps;
    const styles = text(variantProps);
    const Component = props.as || 'p';

    return (
      <Component
        ref={ref}
        className={cx(styles, css(cssProps), className)}
        {...otherProps}
      />
    );
  },
);
