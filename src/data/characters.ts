import { CharacterNames } from 'types/character.types';

type CharacterInfo = {
  name: CharacterNames;
  spoilerName: string;
  icon: string;
  color: string;
};

export const CHARACTERS: Record<CharacterNames, CharacterInfo> = {
  [CharacterNames.Brute]: {
    name: CharacterNames.Brute,
    spoilerName: 'Brute',
    icon: 'gh-brute.svg',
    color: '#35acd5',
  },
  [CharacterNames.Cragheart]: {
    name: CharacterNames.Cragheart,
    spoilerName: 'Cragheart',
    icon: 'gh-cragheart.svg',
    color: '#828b3b',
  },
  [CharacterNames.Mindthief]: {
    name: CharacterNames.Mindthief,
    spoilerName: 'Mindthief',
    icon: 'gh-mindthief.svg',
    color: '#6279a5',
  },
  [CharacterNames.Scoundrel]: {
    name: CharacterNames.Scoundrel,
    spoilerName: 'Scoundrel',
    icon: 'gh-scoundrel.svg',
    color: '#9ecf5f',
  },
  [CharacterNames.Spellweaver]: {
    name: CharacterNames.Spellweaver,
    spoilerName: 'Spellweaver',
    icon: 'gh-spellweaver.svg',
    color: '#b28ac2',
  },
  [CharacterNames.Tinkerer]: {
    name: CharacterNames.Tinkerer,
    spoilerName: 'Tinkerer',
    icon: 'gh-tinkerer.svg',
    color: '#d1c3a2',
  },

  [CharacterNames.AngryFace]: {
    name: CharacterNames.AngryFace,
    spoilerName: 'Doomstalker',
    icon: 'gh-angry-face.svg',
    color: '#5bc5dc',
  },

  [CharacterNames.Circles]: {
    name: CharacterNames.Circles,
    spoilerName: 'Summoner',
    icon: 'gh-circles.svg',
    color: '#e570b3',
  },

  [CharacterNames.Eclipse]: {
    name: CharacterNames.Eclipse,
    spoilerName: 'Nightshroud',
    icon: 'gh-eclipse.svg',
    color: '#7440d4',
  },
  [CharacterNames.Lightning]: {
    name: CharacterNames.Lightning,
    spoilerName: 'Berserker',
    icon: 'gh-lightning.svg',
    color: '#f07c4e',
  },

  [CharacterNames.MusicNote]: {
    name: CharacterNames.MusicNote,
    spoilerName: 'Soothsinger',
    icon: 'gh-music-note.svg',
    color: '#db6e8d',
  },
  [CharacterNames.Saw]: {
    name: CharacterNames.Saw,
    spoilerName: 'Sawbones',
    icon: 'gh-saw.svg',
    color: '#d5ca9c',
  },

  [CharacterNames.Squidface]: {
    name: CharacterNames.Squidface,
    spoilerName: 'Plagueherald',
    icon: 'gh-squidface.svg',
    color: '#72e0be',
  },
  [CharacterNames.Sun]: {
    name: CharacterNames.Sun,
    spoilerName: 'Sunkeeper',
    icon: 'gh-sun.svg',
    color: '#fce434',
  },
  [CharacterNames.ThreeSpears]: {
    name: CharacterNames.ThreeSpears,
    spoilerName: 'Quartermaster',
    icon: 'gh-three-spears.svg',
    color: '#ad9477',
  },
  [CharacterNames.Triangles]: {
    name: CharacterNames.Triangles,
    spoilerName: 'Elementalist',
    icon: 'gh-triangles.svg',
    color: '#dcdcdc',
  },
  [CharacterNames.TwoMini]: {
    name: CharacterNames.TwoMini,
    spoilerName: 'Beast Tyrant',
    icon: 'gh-two-mini.svg',
    color: '#b4765a',
  },
};
