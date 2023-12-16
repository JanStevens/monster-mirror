import iconSpritePath from 'icons/sprite.svg';
import { IconNames } from 'icons/types';

const svg = (name: (typeof IconNames)[number], className: string) =>
  `<svg class='${className}'><use xlink:href='${iconSpritePath}#${name}' /></svg>`;

export const MACROS: Record<string, string> = {
  '%air%': svg('air', 'element'),
  '%any%': svg('any_element', 'element'),
  '%aoe-4-with-black%': svg('aoe-4-with-black', 'aoe h2'),
  '%aoe-circle%': svg('aoe-circle', 'aoe h2'),
  '%aoe-circle-with-middle-black%': svg(
    'aoe-circle-with-middle-black',
    'aoe h2',
  ),
  '%aoe-circle-with-side-black%': svg('aoe-circle-with-side-black', 'aoe h3'),
  '%aoe-line-3-with-black%': svg(
    'aoe-line-3-with-black',
    'aoe h2 rotated inline',
  ),
  '%aoe-line-4-with-black%': svg(
    'aoe-line-4-with-black',
    'aoe h2 rotated-inverse',
  ),
  '%aoe-line-6-with-black%': svg('aoe-line-6-with-black', 'aoe h3'),
  '%aoe-triangle-2-side%': svg('aoe-triangle-2-side', 'aoe h2'),
  '%aoe-triangle-2-side-with-black%': svg(
    'aoe-triangle-2-side-with-black',
    'aoe h2',
  ),
  '%aoe-triangle-3-side-with-corner-black%': svg(
    'aoe-triangle-3-side-with-corner-black',
    'aoe h2',
  ),
  '%attack%': `<span class='nobr'>Attack ${svg('attack', 'icon')}</span>`,
  '%bless%': `<span class='nobr'>BLESS ${svg('bless', 'icon')}</span>`,
  '%boss-aoe-elder-drake-sp1%': svg('elderDrake.special1Area', 'aoe h2'),
  '%boss-aoe-inox-bodyguard-sp1%': svg('inoxBodyguard.special1Area', 'aoe h2'),
  '%boss-aoe-sightless-eye-sp1%': svg('sightlessEye.special1Area', 'aoe h2'),
  '%boss-aoe-sightless-eye-sp2%': svg('sightlessEye.special2Area', 'aoe h2'),
  '%curse%': `<span class='nobr'>CURSE ${svg('curse', 'icon')}</span>`,
  '%dark%': svg('dark', 'element'),
  '%disarm%': `<span class='nobr'>DISARM ${svg('disarm', 'icon')}</span>`,
  '%earth%': svg('earth', 'element'),
  '%fire%': svg('fire', 'element'),
  '%heal%': `<span class='nobr'>Heal ${svg('heal', 'icon')}</span>`,
  '%ice%': svg('ice', 'element'),
  '%immobilize%': `<span class='nobr'>IMMOBILIZE ${svg(
    'immobilize',
    'icon',
  )}</span>`,
  '%invisible%': `<span class='nobr'>INVISIBLE ${svg(
    'invisibility',
    'icon',
  )}</span>`,
  '%jump%': `<span class='nobr'>Jump ${svg('jump', 'icon')}</span>`,
  '%light%': svg('light', 'element'),
  '%loot%': `<span class='nobr'>Loot ${svg('loot', 'icon')}</span>`,
  '%move%': `<span class='nobr'>Move ${svg('move', 'icon')}</span>`,
  '%muddle%': `<span class='nobr'>MUDDLE ${svg('muddle', 'icon')}</span>`,
  '%pierce%': `<span class='nobr'>PIERCE ${svg('pierce', 'icon')}</span>`,
  '%poison%': `<span class='nobr'>POISON ${svg('poison', 'icon')}</span>`,
  '%pull%': `<span class='nobr'>PULL ${svg('push', 'mirrored icon')}</span>`,
  '%push%': `<span class='nobr'>PUSH ${svg('push', 'icon')}</span>`,
  '%range%': `<span class='nobr'>Range ${svg('range', 'icon')}</span>`,
  '%retaliate%': `<span class='nobr'>Retaliate ${svg(
    'retaliate',
    'icon',
  )}</span>`,
  '%shield%': `<span class='nobr'>Shield ${svg('shield', 'icon')}</span>`,
  '%flying%': svg('fly', 'icon'),
  '%strengthen%': `<span class='nobr'>STRENGTHEN ${svg(
    'strengthen',
    'icon',
  )}</span>`,
  '%stun%': `<span class='nobr'>STUN ${svg('stun', 'icon')}</span>`,
  '%target%': `<span class='nobr'>Target ${svg('target', 'icon')}</span>`,
  '%use_element%': svg('use_element', 'element overlay'),
  '%wound%': `<span class='nobr'>WOUND ${svg('wound', 'icon')}</span>`,
  // for immunities
  '%wound-icon%': svg('wound', 'icon'),
  '%poison-icon%': svg('poison', 'icon'),
  '%disarm-icon%': svg('disarm', 'icon'),
  '%immobilize-icon%': svg('immobilize', 'icon'),
  '%muddle-icon%': svg('muddle', 'icon'),
  '%stun-icon%': svg('stun', 'icon'),
  '%curse-icon%': svg('curse', 'icon'),
};
