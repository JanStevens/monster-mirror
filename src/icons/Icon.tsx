import type { SVGProps } from 'react';

import iconSpritePath from './sprite.svg';
import type { IconNames } from './types';

interface IconSpriteProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  name: (typeof IconNames)[number];
}

/**
 * Simple IconLookup component to return an icon based on the unique name.
 * @param name unique name of the icon you want to render
 * @param SVGProps optional styling by passing SVGProps
 * @returns Icon based on the unique name
 */
const Icon = ({ name, fontSize = '1em', ...rest }: IconSpriteProps) => {
  return (
    <svg width={fontSize} height={fontSize} {...rest}>
      <use xlinkHref={`${iconSpritePath}#${name}`} />
    </svg>
  );
};

export default Icon;
