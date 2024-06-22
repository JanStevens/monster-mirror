/* eslint-disable @typescript-eslint/ban-types */
import { cx } from '@style/css';
import { styled } from '@style/jsx';
import {
  createContext,
  type ElementType,
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
  useContext,
} from 'react';

type Props = Record<string, unknown>;
type Recipe = {
  (props?: Props): Props;
  splitVariantProps: (props: Props) => [Props, Props];
};
type Slot<R extends Recipe> = keyof ReturnType<R>;

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, string> | null>(null);

  const withRootProvider = <P extends {}>(Component: ElementType) => {
    const StyledComponent = (props: P) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...otherProps} />
        </StyleContext.Provider>
      );
    };
    return StyledComponent;
  };

  const withProvider = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component);
    const StyledComponentWrapped = forwardRef<T, P>((props, ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <StyledComponent
            {...otherProps}
            ref={ref}
            className={cx(slotStyles?.[slot], props.className)}
          />
        </StyleContext.Provider>
      );
    });
    StyledComponentWrapped.displayName = 'StyledComponent';
    return StyledComponentWrapped;
  };

  const withContext = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component);
    const StyledComponentWrapped = forwardRef<T, P>((props, ref) => {
      const slotStyles = useContext(StyleContext);
      return (
        <StyledComponent
          {...props}
          ref={ref}
          className={cx(slotStyles?.[slot], props.className)}
        />
      );
    });
    StyledComponentWrapped.displayName = 'StyledComponent';
    return StyledComponentWrapped;
  };

  return {
    withRootProvider,
    withProvider,
    withContext,
  };
};
