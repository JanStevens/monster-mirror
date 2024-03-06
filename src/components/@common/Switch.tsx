import {
  Switch as ArkSwitch,
  type SwitchRootProps,
} from '@ark-ui/react/switch';
import { css, cx } from '@style/css';
import { splitCssProps } from '@style/jsx';
import { switchRecipe, type SwitchRecipeVariantProps } from '@style/recipes';
import type { Assign, JsxStyleProps } from '@style/types';
import { forwardRef, type ReactNode } from 'react';

export interface SwitchProps
  extends Assign<JsxStyleProps, SwitchRootProps>,
    SwitchRecipeVariantProps {
  children?: ReactNode;
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  (props, ref) => {
    const [variantProps, switchProps] = switchRecipe.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(switchProps);
    const { children, className, ...rootProps } = localProps;
    const styles = switchRecipe(variantProps);

    return (
      <ArkSwitch.Root
        ref={ref}
        // @ts-expect-error
        className={cx(styles.root, css(cssProps), className)}
        {...rootProps}
      >
        <ArkSwitch.Control className={styles.control}>
          <ArkSwitch.Thumb className={styles.thumb} />
        </ArkSwitch.Control>
        {children && (
          <ArkSwitch.Label className={styles.label}>{children}</ArkSwitch.Label>
        )}
      </ArkSwitch.Root>
    );
  },
);

Switch.displayName = 'Switch';
