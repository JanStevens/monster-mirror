import { forwardRef } from 'react';

import { ArkSwitch } from 'components/@common/primitives';

export type SwitchProps = ArkSwitch.RootProps;

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  (props, ref) => {
    const { children, ...rootProps } = props;

    return (
      <ArkSwitch.Root ref={ref} {...rootProps}>
        <ArkSwitch.Control>
          <ArkSwitch.Thumb />
        </ArkSwitch.Control>
        {children && <ArkSwitch.Label>{children}</ArkSwitch.Label>}
        <ArkSwitch.HiddenInput />
      </ArkSwitch.Root>
    );
  },
);

Switch.displayName = 'Switch';
