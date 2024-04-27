import {
  PinInput as ArkPinInput,
  type PinInputRootProps,
} from '@ark-ui/react/pin-input';
import { css, cx } from '@style/css';
import { splitCssProps } from '@style/jsx';
import { pinInput, type PinInputVariantProps } from '@style/recipes';
import type { Assign, JsxStyleProps } from '@style/types';
import { forwardRef, type ReactNode } from 'react';

import { Input } from './Input';

export interface PinInputProps
  extends Assign<JsxStyleProps, PinInputRootProps>,
    PinInputVariantProps {
  children?: ReactNode;
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number;
}

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  (props, ref) => {
    const [variantProps, pinInputProps] = pinInput.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(pinInputProps);
    const { children, className, length = 4, ...rootProps } = localProps;
    const styles = pinInput(variantProps);

    return (
      <ArkPinInput.Root
        className={cx(styles.root, css(cssProps), className)}
        ref={ref}
        {...rootProps}
      >
        {children && (
          <ArkPinInput.Label className={styles.label}>
            {children}
          </ArkPinInput.Label>
        )}
        <ArkPinInput.Control className={styles.control}>
          {Array.from({ length }, (_, index) => index).map((id, index) => (
            <ArkPinInput.Input
              className={styles.input}
              key={id}
              index={index}
              asChild
            >
              <Input size={variantProps.size} />
            </ArkPinInput.Input>
          ))}
        </ArkPinInput.Control>
      </ArkPinInput.Root>
    );
  },
);

PinInput.displayName = 'PinInput';
