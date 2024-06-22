import type { Assign } from '@ark-ui/react';
import {
  Switch as ArkSwitch,
  type SwitchRootProps,
} from '@ark-ui/react/switch';
import { css, cx } from '@style/css';
import { splitCssProps } from '@style/jsx';
import { switchRecipe, type SwitchRecipeVariantProps } from '@style/recipes';
import type { JsxStyleProps } from '@style/types';
import { forwardRef } from 'react';

export interface SwitchProps
  extends Assign<JsxStyleProps, SwitchRootProps>,
    SwitchRecipeVariantProps {}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  (props, ref) => {
    const [variantProps, switchProps] = switchRecipe.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(switchProps);
    const { children, className, ...rootProps } = localProps;
    const styles = switchRecipe(variantProps);

    return (
      <ArkSwitch.Root
        ref={ref}
        className={cx(styles.root, css(cssProps), className)}
        {...rootProps}
      >
        <ArkSwitch.Control className={styles.control}>
          <ArkSwitch.Thumb className={styles.thumb} />
        </ArkSwitch.Control>
        {children && (
          <ArkSwitch.Label className={styles.label}>{children}</ArkSwitch.Label>
        )}
        <ArkSwitch.HiddenInput />
      </ArkSwitch.Root>
    );
  },
);

Switch.displayName = 'Switch';
