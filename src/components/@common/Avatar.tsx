import {
  Avatar as ArkAvatar,
  type AvatarRootProps,
} from '@ark-ui/react/avatar';
import { css, cx } from '@style/css';
import { splitCssProps } from '@style/jsx';
import { avatar, type AvatarVariantProps } from '@style/recipes';
import type { Assign, JsxStyleProps } from '@style/types';
import { UserIcon } from 'lucide-react';
import { forwardRef } from 'react';

export interface AvatarProps
  extends Assign<JsxStyleProps, AvatarRootProps>,
    AvatarVariantProps {
  name?: string;
  src?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const [variantProps, avatarProps] = avatar.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(avatarProps);
  const { name, src, className, ...rootProps } = localProps;
  const styles = avatar(variantProps);

  return (
    <ArkAvatar.Root
      ref={ref}
      className={cx(styles.root, css(cssProps), className)}
      {...rootProps}
    >
      <ArkAvatar.Fallback className={styles.fallback}>
        {getInitials(name) || <UserIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image className={styles.image} src={src} alt={name} />
    </ArkAvatar.Root>
  );
});

Avatar.displayName = 'Avatar';

const getInitials = (name = '') =>
  name.split('').splice(0, 2).join('').toUpperCase();
