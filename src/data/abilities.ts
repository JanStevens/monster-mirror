export const DECKS = {
  'Ancient Artillery': {
    name: 'Ancient Artillery',
    class: 'Ancient Artillery',
    image: 'gh-ancient-artillery.png',
  },
  'Bandit Archer': {
    name: 'Bandit Archer',
    class: 'Archer',
    image: 'gh-bandit-archer.png',
  },
  'Bandit Guard': {
    name: 'Bandit Guard',
    class: 'Guard',
    image: 'gh-bandit-guard.png',
  },
  'Black Imp': { name: 'Black Imp', class: 'Imp', image: 'gh-black-imp.png' },
  'Cave Bear': {
    name: 'Cave Bear',
    class: 'Cave Bear',
    image: 'gh-cave-bear.png',
  },
  'City Archer': {
    name: 'City Archer',
    class: 'Archer',
    image: 'gh-city-archer.png',
  },
  'City Guard': {
    name: 'City Guard',
    class: 'Guard',
    image: 'gh-city-guard.png',
  },
  Cultist: { name: 'Cultist', class: 'Cultist', image: 'gh-cultist.png' },
  'Deep Terror': {
    name: 'Deep Terror',
    class: 'Deep Terror',
    image: 'gh-deep-terror.png',
  },
  'Earth Demon': {
    name: 'Earth Demon',
    class: 'Earth Demon',
    image: 'gh-earth-demon.png',
  },
  'Flame Demon': {
    name: 'Flame Demon',
    class: 'Flame Demon',
    image: 'gh-flame-demon.png',
  },
  'Forest Imp': {
    name: 'Forest Imp',
    class: 'Imp',
    image: 'gh-forest-imp.png',
  },
  'Frost Demon': {
    name: 'Frost Demon',
    class: 'Frost Demon',
    image: 'gh-frost-demon.png',
  },
  'Giant Viper': {
    name: 'Giant Viper',
    class: 'Giant Viper',
    image: 'gh-giant-viper.png',
  },
  'Harrower Infester': {
    name: 'Harrower Infester',
    class: 'Harrower Infester',
    image: 'gh-harrower-infester.png',
  },
  Hound: { name: 'Hound', class: 'Hound', image: 'gh-hound.png' },
  'Inox Archer': {
    name: 'Inox Archer',
    class: 'Archer',
    image: 'gh-inox-archer.png',
  },
  'Inox Guard': {
    name: 'Inox Guard',
    class: 'Guard',
    image: 'gh-inox-guard.png',
  },
  'Inox Shaman': {
    name: 'Inox Shaman',
    class: 'Shaman',
    image: 'gh-inox-shaman.png',
  },
  'Living Bones': {
    name: 'Living Bones',
    class: 'Living Bones',
    image: 'gh-living-bones.png',
  },
  'Living Corpse': {
    name: 'Living Corpse',
    class: 'Living Corpse',
    image: 'gh-living-corpse.png',
  },
  'Living Spirit': {
    name: 'Living Spirit',
    class: 'Living Spirit',
    image: 'gh-living-spirit.png',
  },
  Lurker: { name: 'Lurker', class: 'Lurker', image: 'gh-lurker.png' },
  'Night Demon': {
    name: 'Night Demon',
    class: 'Night Demon',
    image: 'gh-night-demon.png',
  },
  Ooze: { name: 'Ooze', class: 'Ooze', image: 'gh-ooze.png' },
  'Rending Drake': {
    name: 'Rending Drake',
    class: 'Rending Drake',
    image: 'gh-rending-drake.png',
  },
  'Savvas Icestorm': {
    name: 'Savvas Icestorm',
    class: 'Savvas Icestorm',
    image: 'gh-savvas-icestorm.png',
  },
  'Savvas Lavaflow': {
    name: 'Savvas Lavaflow',
    class: 'Savvas Lavaflow',
    image: 'gh-savvas-lavaflow.png',
  },
  'Spitting Drake': {
    name: 'Spitting Drake',
    class: 'Spitting Drake',
    image: 'gh-spitting-drake.png',
  },
  'Stone Golem': {
    name: 'Stone Golem',
    class: 'Stone Golem',
    image: 'gh-stone-golem.png',
  },
  'Sun Demon': {
    name: 'Sun Demon',
    class: 'Sun Demon',
    image: 'gh-sun-demon.png',
  },
  'Vermling Scout': {
    name: 'Vermling Scout',
    class: 'Scout',
    image: 'gh-vermling-scout.png',
  },
  'Vermling Shaman': {
    name: 'Vermling Shaman',
    class: 'Shaman',
    image: 'gh-vermling-shaman.png',
  },
  'Wind Demon': {
    name: 'Wind Demon',
    class: 'Wind Demon',
    image: 'gh-wind-demon.png',
  },
} as const;

export const DECK_DEFINITIONS = {
  'Ancient Artillery': {
    class: 'Ancient Artillery',
    cards: [
      {
        shuffle: false,
        initiative: 17,
        lines: [
          '* %push% 2',
          '** Target all adjacent enemies',
          '* %shield% 2',
          '* %attack% -2',
          '** %range% +0',
        ],
      },
      {
        shuffle: false,
        initiative: 37,
        lines: [
          '* %push% 1',
          '** Target all adjacent enemies',
          "* %attack% -1 <span class='collapse' style='position:absolute;right:1em;top:0;'>%aoe-triangle-2-side%</span>",
          '** %range% -1',
        ],
      },
      {
        shuffle: false,
        initiative: 37,
        lines: [
          '* %push% 1',
          '** Target all adjacent enemies',
          "* %attack% -1 <span class='collapse' style='position:absolute;right:1em;'>%aoe-circle%</span>",
          '** %range% -1',
        ],
      },
      {
        shuffle: false,
        initiative: 46,
        lines: ['* %attack% -1', '** %range% +2'],
      },
      {
        shuffle: false,
        initiative: 46,
        lines: [
          "* %attack% -1 <span style='position:absolute;right:0;'>%aoe-triangle-2-side%</span>",
          '** %range% +0',
          '** %immobilize%',
        ],
      },
      {
        shuffle: true,
        initiative: 71,
        lines: [
          '* %attack% +0',
          '** %range% +0',
          '** All adjacent enemies suffer 2 damage',
        ],
      },
      {
        shuffle: false,
        initiative: 95,
        lines: ['* %attack% +1', '** %range% +0'],
      },
    ],
  },
  Archer: {
    class: 'Archer',
    cards: [
      {
        shuffle: false,
        initiative: 14,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          '** %range% +0',
          '* <small style="display: inline-block; line-height: 1">Create a 3 damage trap in an adjacent empty hex closest to an enemy </small>',
        ],
      },
      {
        shuffle: false,
        initiative: 16,
        lines: ['* %move% +1', '* %attack% -1', '** %range% +0'],
      },
      {
        shuffle: true,
        initiative: 29,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** %range% +1',
          '** %immobilize%',
        ],
      },
      {
        shuffle: false,
        initiative: 31,
        lines: ['* %move% +0', '* %attack% +0', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 32,
        lines: ['* %move% +0', '* %attack% +1', '** %range% -1'],
      },
      {
        shuffle: false,
        initiative: 44,
        lines: ['* %move% -1', '* %attack% +1', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 56,
        lines: ['* %attack% -1', '** %range% +0', '** %target% 2'],
      },
      {
        shuffle: true,
        initiative: 68,
        lines: ['* %attack% +1', '** %range% +1'],
      },
    ],
  },
  Boss: {
    class: 'Boss',
    cards: [
      { shuffle: false, initiative: 11, lines: ['* Special 2'] },
      { shuffle: false, initiative: 14, lines: ['* Special 2'] },
      { shuffle: true, initiative: 17, lines: ['* Special 2'] },
      {
        shuffle: false,
        initiative: 36,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 52,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          '** %range% 3',
          '** %target% 2',
        ],
      },
      { shuffle: false, initiative: 73, lines: ['* Special 1'] },
      { shuffle: false, initiative: 79, lines: ['* Special 1'] },
      { shuffle: true, initiative: 85, lines: ['* Special 1'] },
    ],
  },
  'Cave Bear': {
    class: 'Cave Bear',
    cards: [
      {
        shuffle: false,
        initiative: 3,
        lines: ['* %shield% 1', '* %retaliate% 2', '* %heal% 2', '** Self'],
      },
      {
        shuffle: false,
        initiative: 13,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 14,
        lines: ['* %move% -1', '* %attack% -1', '** %immobilize%'],
      },
      { shuffle: true, initiative: 34, lines: ['* %attack% +1', '** %wound%'] },
      {
        shuffle: false,
        initiative: 41,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 60,
        lines: ['* %move% -1', '* %attack% +1'],
      },
      {
        shuffle: false,
        initiative: 61,
        lines: ['* %move% +0', '* %attack% -1', '** %target% 2'],
      },
      {
        shuffle: true,
        initiative: 80,
        lines: ['* %attack% -1', '* %move% -2', '* %attack% -1', '** %wound%'],
      },
    ],
  },
  Cultist: {
    class: 'Cultist',
    cards: [
      {
        shuffle: false,
        initiative: 10,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          "* On Death:  <div class='collapse' style='position:absolute;right:0em'>%aoe-circle-with-middle-black%</div>",
          '** %attack% +2',
        ],
      },
      {
        shuffle: false,
        initiative: 27,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 31,
        lines: ['* %move% -1', '* %heal% 3', '** %range% 3'],
      },
      {
        shuffle: false,
        initiative: 39,
        lines: ['* %move% -1', '* %attack% +0', '* %heal% 1', '** Self'],
      },
      {
        shuffle: true,
        initiative: 63,
        lines: ['* Summon normal Living Bones', '* Cultist suffers 2 damage.'],
      },
    ],
  },
  'Deep Terror': {
    class: 'Deep Terror',
    cards: [
      {
        shuffle: false,
        initiative: 54,
        lines: [
          '* %wound% and %poison%',
          '** Target all adjacent enemies',
          '* %attack% +0',
          '** %range% 4',
        ],
      },
      {
        shuffle: true,
        initiative: 60,
        lines: [
          '* %attack% +0 <div class="collapse" style="position:absolute;top:0;right:1em">%aoe-line-6-with-black%</div>',
          '** %pierce% 3',
        ],
      },
      {
        shuffle: false,
        initiative: 65,
        lines: ['* %attack% +0', '** %range% 3', '** %target% 3', '** %curse%'],
      },
      {
        shuffle: false,
        initiative: 75,
        lines: [
          '* %attack% +0',
          '** %poison%',
          '* %attack% -1',
          '** %range% 5',
          '** %immobilize%',
        ],
      },
      {
        shuffle: false,
        initiative: 75,
        lines: [
          '* %attack% -2',
          '** Target all adjacent enemies',
          '** %disarm%',
          '* %attack% +0',
          '** %range% 3',
          '** %target% 2',
        ],
      },
      {
        shuffle: false,
        initiative: 84,
        lines: [
          '* %attack% -1',
          '** Target all adjacent enemies',
          '* %attack% +0',
          '** %range% 4',
          '** %wound%',
        ],
      },
      {
        shuffle: false,
        initiative: 96,
        lines: [
          '* %attack% -2',
          '** %range% 6',
          '** Summon normal Deep Terror in a hex adjacent to the target',
        ],
      },
    ],
  },
  'Earth Demon': {
    class: 'Earth Demon',
    cards: [
      {
        shuffle: true,
        initiative: 40,
        lines: [
          '* %heal% 3',
          '** Self',
          "* %earth%%use_element%: <span class='small'>%immobilize% Target all enemies within %range% 3</span>",
        ],
      },
      {
        shuffle: true,
        initiative: 42,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 62,
        lines: ['* %move% +0', '* %attack% +0', '* %earth%'],
      },
      {
        shuffle: false,
        initiative: 71,
        lines: [
          '* %attack% +0',
          '** %range% 4',
          '** %earth%%use_element%: %target% 2',
        ],
      },
      {
        shuffle: false,
        initiative: 79,
        lines: [
          '* %move% +1',
          '* %attack% +0',
          '** %air%%use_element%: -2 %attack%',
        ],
      },
      {
        shuffle: false,
        initiative: 83,
        lines: ['* %move% -1', '* %attack% +1', '* %earth%'],
      },
      {
        shuffle: false,
        initiative: 87,
        lines: [
          '* %move% +0',
          "* %attack% -1 <div class='collapse' style='position: absolute;right: -0.5em;top: -0.8em'>%aoe-4-with-black%</div>",
          '* %any%%use_element%: %earth%',
        ],
      },
      {
        shuffle: false,
        initiative: 93,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          '** Target all adjacent enemies',
          '* %earth%%use_element%: %push% 1',
        ],
      },
    ],
  },
  'Flame Demon': {
    class: 'Flame Demon',
    cards: [
      {
        shuffle: false,
        initiative: 3,
        lines: ['* %move% +1', '* %attack% -1', '** %range% +0', '* %fire%'],
      },
      {
        shuffle: false,
        initiative: 8,
        lines: [
          '* %move% -1',
          "* <span class='small'> Create a 4 damage trap in an adjacent empty hex closest to an enemy </span>",
          '* %any%%use_element%: %fire%',
        ],
      },
      {
        shuffle: false,
        initiative: 24,
        lines: ['* %move% +0', '* %attack% +0', '** %range% +0', '* %fire%'],
      },
      {
        shuffle: true,
        initiative: 30,
        lines: [
          '* <div style="display: flex;align-items:center;gap: 0.25em; line-height:1"><span>%fire%%use_element%:</span> All adjacent enemies<br/>suffer 2 damage</div>',
          '* %move% +0',
          '* %attack% -2',
          '** %range% +0',
          '** %wound%',
          '** %target% 2',
        ],
      },
      {
        shuffle: true,
        initiative: 46,
        lines: [
          '* %attack% +0',
          '** %range% +0',
          '** <div style="display: flex;align-items:center;justify-content:center;margin-top:0.5em">%fire%%use_element%:  %aoe-circle%</div>',
        ],
      },
      {
        shuffle: false,
        initiative: 49,
        lines: [
          "* %attack% +0 <div class='collapse' style='position:absolute;right:0;top:0'>%aoe-line-3-with-black%</div>",
          '** %range% +0',
          '** %fire%%use_element%: +1 %attack% <br> %wound%',
        ],
      },
      {
        shuffle: false,
        initiative: 67,
        lines: ['* %move% -1', '* %attack% +1', '** %range% -1', '* %fire%'],
      },
      {
        shuffle: false,
        initiative: 77,
        lines: [
          '* %attack% +0',
          '** %range% +0',
          '** Target all adjacent enemies',
          '** %ice%%use_element%: Flame Demon suffers 1 damage.',
        ],
      },
    ],
  },
  'Frost Demon': {
    class: 'Frost Demon',
    cards: [
      {
        shuffle: false,
        initiative: 18,
        lines: [
          '* %immobilize%',
          '** Target all enemies within %range% 2',
          "* %ice%%use_element%: <span class='small'>%heal% 3<br/>Self</span>",
        ],
      },
      {
        shuffle: false,
        initiative: 18,
        lines: [
          '* %shield% 2',
          '* %move% +1',
          "* %fire%%use_element%: <span class='small'>Frost Demon suffers 1 damage</span>",
        ],
      },
      {
        shuffle: false,
        initiative: 38,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 58,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 58,
        lines: [
          '* %move% -1',
          '* %attack% +0',
          '** %range% 2',
          '** %ice%%use_element%: +2 %attack%, +1 %range%',
        ],
      },
      {
        shuffle: false,
        initiative: 58,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          '** %pierce% 3',
          '* %any%%use_element%: %ice%',
        ],
      },
      {
        shuffle: true,
        initiative: 78,
        lines: [
          '* %move% -1',
          '* %attack% +0  <div class="collapse" style="position:absolute;right:0;top:0">%aoe-triangle-2-side-with-black%</div>',
          '* %ice%',
        ],
      },
    ],
  },
  'Giant Viper': {
    class: 'Giant Viper',
    cards: [
      {
        shuffle: false,
        initiative: 11,
        lines: ['* %shield% 1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 23,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          '** %immobilize%',
          '* %attack% -1',
        ],
      },
      {
        shuffle: true,
        initiative: 32,
        lines: [
          '* %move% +0',
          '* %attack% +0',
          "** Add +2 Attack if the target is adjacent to any of the Giant Viper's allies.",
        ],
      },
      {
        shuffle: false,
        initiative: 43,
        lines: [
          '* %move% +1',
          '** %jump%',
          '* %attack% -1',
          '** Target all adjacent enemies.',
        ],
      },
      {
        shuffle: false,
        initiative: 43,
        lines: ['* %move% -1', '** %jump%', '* %attack% +0', '** %target% 2'],
      },
      {
        shuffle: false,
        initiative: 58,
        lines: ['* %move% -1', '* %attack% +1'],
      },
      {
        shuffle: false,
        initiative: 58,
        lines: [
          '* %move% +1',
          '** %jump%',
          '* %attack% -1',
          '** All attacks targeting Giant Viper this round gain Disadvantage.',
        ],
      },
    ],
  },
  Guard: {
    class: 'Guard',
    cards: [
      {
        shuffle: true,
        initiative: 15,
        lines: ['* %shield% 1', '* %retaliate% 2'],
      },
      {
        shuffle: true,
        initiative: 15,
        lines: ['* %shield% 1', '* %attack% +0', '** %poison%'],
      },
      {
        shuffle: false,
        initiative: 30,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 35,
        lines: ['* %move% -1', '* %attack% +0', '** %range% 2'],
      },
      {
        shuffle: false,
        initiative: 50,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 55,
        lines: ['* %move% -1', '* %attack% +0', '* %strengthen%', '** Self'],
      },
      {
        shuffle: false,
        initiative: 70,
        lines: ['* %move% -1', '* %attack% +1'],
      },
    ],
  },
  'Harrower Infester': {
    class: 'Harrower Infester',
    cards: [
      {
        shuffle: true,
        initiative: 2,
        lines: ['* %shield% 2', '* %retaliate% 2', '** %range% 3'],
      },
      {
        shuffle: false,
        initiative: 7,
        lines: ['* %move% +0', '* %attack% -1', '** %poison%', '* %dark%'],
      },
      {
        shuffle: true,
        initiative: 7,
        lines: [
          '* %attack% -1',
          '** %range% 3',
          '** %muddle%',
          '* %heal% 4',
          '** Self',
        ],
      },
      {
        shuffle: false,
        initiative: 16,
        lines: ['* %move% -1', '* %attack% -1', '* %heal% 5', '** Self'],
      },
      {
        shuffle: false,
        initiative: 16,
        lines: ['* %attack% +2', '** %immobilize%', '* %retaliate% 2'],
      },
      {
        shuffle: false,
        initiative: 30,
        lines: [
          '* %move% -1',
          '* %attack% +0<span class="collapse" style="position: absolute;right:1em;top:-1em;">%aoe-line-4-with-black%</div>',
          '* <small style="display: inline-block; line-height: 0.5em">%dark%%use_element%: Perform "%heal% 2, Self"<span style="display: block; padding-left: 2.2em">for each target damaged</style></small>',
        ],
      },
      {
        shuffle: false,
        initiative: 38,
        lines: ['* %move% -1', '* %attack% +1', '** %target% 2'],
      },
      {
        shuffle: false,
        initiative: 38,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** %target% 2',
          '** %dark%%use_element%: +2 %attack%, %disarm%',
        ],
      },
    ],
  },
  Hound: {
    class: 'Hound',
    cards: [
      {
        shuffle: false,
        initiative: 6,
        lines: ['* %move% -1', '* %attack% +0', '** %immobilize%'],
      },
      {
        shuffle: false,
        initiative: 7,
        lines: ['* %move% +0', '* %muddle%', '** Target all adjacent enemies'],
      },
      {
        shuffle: true,
        initiative: 19,
        lines: [
          '* %move% +1',
          '* %attack% +0',
          "** Add +2 Attack if the target is adjacent to any of the Hound's allies",
        ],
      },
      {
        shuffle: false,
        initiative: 26,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 72,
        lines: [
          '* %attack% -1',
          '** %pierce% 2',
          '* %move% -2',
          '* %attack% -1',
          '** %pierce% 2',
        ],
      },
      {
        shuffle: false,
        initiative: 83,
        lines: ['* %move% -2', '* %attack% +1'],
      },
    ],
  },
  Imp: {
    class: 'Imp',
    cards: [
      {
        shuffle: false,
        initiative: 5,
        lines: ['* %shield% 5', '* %heal% 1', '** Self'],
      },
      {
        shuffle: false,
        initiative: 24,
        lines: [
          '* %strengthen%',
          '** Affect all allies within %range% 2',
          '* %muddle%',
          '** Target all enemies within %range% 2',
        ],
      },
      {
        shuffle: false,
        initiative: 37,
        lines: ['* %move% +0', '* %attack% +0', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 42,
        lines: ['* %move% +1', '* %heal% 2', '** %range% 3'],
      },
      {
        shuffle: true,
        initiative: 43,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** %range% +0, %target% 2, %poison%',
        ],
      },
      {
        shuffle: true,
        initiative: 43,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** %range% +0, %target% 2, %curse%',
        ],
      },
      {
        shuffle: false,
        initiative: 76,
        lines: ['* %move% -1', '* %attack% +1', '** %range% +0'],
      },
    ],
  },
  'Living Bones': {
    class: 'Living Bones',
    cards: [
      {
        shuffle: true,
        initiative: 12,
        lines: ['* %shield% 1', '* %heal% 2', '** Self'],
      },
      {
        shuffle: true,
        initiative: 20,
        lines: ['* %move% -2', '* %attack% +0', '* %heal% 2', '** Self'],
      },
      {
        shuffle: false,
        initiative: 25,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 45,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 64,
        lines: ['* %move% -1', '* %attack% +1'],
      },
      {
        shuffle: false,
        initiative: 74,
        lines: [
          '* %move% +0',
          '* %attack% +0',
          '** Target one enemy with all attacks',
        ],
      },
      { shuffle: false, initiative: 81, lines: ['* %attack% +2'] },
    ],
  },
  'Living Corpse': {
    class: 'Living Corpse',
    cards: [
      {
        shuffle: false,
        initiative: 21,
        lines: [
          '* %move% +1',
          '* %muddle% and %immobilize%',
          '** Target one adjacent enemy',
        ],
      },
      {
        shuffle: false,
        initiative: 32,
        lines: [
          '* %attack% +2',
          '** %push% 1',
          '* Living Corpse suffers 1 damage.',
        ],
      },
      {
        shuffle: false,
        initiative: 47,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: true,
        initiative: 66,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 71,
        lines: [
          '* %move% +0',
          '* %attack% +1',
          '* %poison%',
          '** Target all adjacent enemies',
        ],
      },
      {
        shuffle: false,
        initiative: 82,
        lines: ['* %move% -1', '* %attack% +1'],
      },
      {
        shuffle: false,
        initiative: 91,
        lines: ['* %move% +1', '* Living Corpse suffers 1 damage.'],
      },
    ],
  },
  'Living Spirit': {
    class: 'Living Spirit',
    cards: [
      {
        shuffle: true,
        initiative: 22,
        lines: ['* %move% -1', '* %attack% -1', '** %range% +0', '** %muddle%'],
      },
      {
        shuffle: true,
        initiative: 33,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** %range% +0',
          '** Target all enemies within range',
        ],
      },
      {
        shuffle: false,
        initiative: 48,
        lines: ['* %move% +0', '* %attack% +0', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 55,
        lines: [
          '* %move% +0',
          '* %curse%',
          '** %range% +0',
          '** Target all enemies within range',
          '* %ice%',
        ],
      },
      {
        shuffle: false,
        initiative: 61,
        lines: ['* %attack% +0', '** %range% -1', '** %target% 2'],
      },
      {
        shuffle: false,
        initiative: 67,
        lines: [
          '* %move% -1',
          '* %attack% +1',
          '** %range% +0',
          '** %ice%%use_element%: %stun%',
        ],
      },
      {
        shuffle: false,
        initiative: 75,
        lines: [
          '* %move% -1',
          '* %attack% +1',
          '** %range% -1',
          '* %heal% 1',
          '** Self',
        ],
      },
    ],
  },
  Lurker: {
    class: 'Lurker',
    cards: [
      {
        shuffle: true,
        initiative: 11,
        lines: [
          '* %shield% 1',
          '** %ice%%use_element%: %shield% 2 instead',
          '* %wound%',
          '** Target all adjacent enemies',
        ],
      },
      {
        shuffle: true,
        initiative: 23,
        lines: ['* %shield% 1', '* %move% +0', '* %attack% -1', '* %ice%'],
      },
      {
        shuffle: false,
        initiative: 28,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 38,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 38,
        lines: [
          '* %move% +0',
          '* %attack% +0',
          '** Target one enemy with all attacks',
        ],
      },
      {
        shuffle: false,
        initiative: 41,
        lines: [
          '* %ice%%use_element%: %strengthen%',
          '** Self',
          '* %move% +0',
          '* %attack% -1',
          '** %wound%',
        ],
      },
      {
        shuffle: false,
        initiative: 61,
        lines: ['* %move% -1', '* %attack% +1'],
      },
      {
        shuffle: false,
        initiative: 64,
        lines: ['* %attack% +1', '** Target all adjacent enemies'],
      },
    ],
  },
  'Night Demon': {
    class: 'Night Demon',
    cards: [
      {
        shuffle: false,
        initiative: 4,
        lines: ['* %move% +1', '* %attack% -1', '* %dark%'],
      },
      {
        shuffle: false,
        initiative: 7,
        lines: [
          '* %move% +1',
          '* %attack% -1',
          '* %dark%%use_element%: %invisible%',
          '** Self',
        ],
      },
      {
        shuffle: false,
        initiative: 15,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          "* <span class='small'>All adjacent enemies and allies suffer 1 damage.</span>",
          "* <span class='small'>%any%%use_element%: %dark%</span>",
        ],
      },
      {
        shuffle: false,
        initiative: 22,
        lines: ['* %move% +0', '* %attack% +0', '* %dark%'],
      },
      {
        shuffle: false,
        initiative: 26,
        lines: [
          '* %attack% -2',
          '** %range% 3',
          '** %target% 3',
          '** %dark%%use_element%: %muddle%',
        ],
      },
      {
        shuffle: false,
        initiative: 35,
        lines: [
          '* %attack% -1',
          '* %attack% -1',
          '** %pierce% 2',
          '* %light%%use_element%: %curse%',
          '** Self',
        ],
      },
      {
        shuffle: true,
        initiative: 41,
        lines: ['* %move% -1', '* %attack% +1', '* %dark%'],
      },
      {
        shuffle: true,
        initiative: 46,
        lines: [
          '* %move% -1',
          '* %attack% +1',
          '** %dark%%use_element%: +2 %attack%',
        ],
      },
    ],
  },
  Ooze: {
    class: 'Ooze',
    cards: [
      {
        shuffle: false,
        initiative: 36,
        lines: ['* %move% +1', '* %attack% -1', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 57,
        lines: ['* %move% +0', '* %attack% +0', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 59,
        lines: [
          '* %attack% +0',
          '** %range% +0',
          '** %target% 2',
          '** %poison%',
        ],
      },
      {
        shuffle: false,
        initiative: 66,
        lines: ['* %move% -1', '* %attack% +1', '** %range% +1'],
      },
      {
        shuffle: false,
        initiative: 66,
        lines: ['* %move% -1', '* %loot% 1', '* %heal% 2', '** Self'],
      },
      {
        shuffle: false,
        initiative: 85,
        lines: [
          '* %push% 1 and',
          '* %poison%',
          '** Target all adjacent enemies',
          '* %attack% +1',
          '** %range% -1',
        ],
      },
      {
        shuffle: true,
        initiative: 94,
        lines: [
          '* Ooze suffers 2 damage ',
          "** <small style='display: inline-block; line-height: 1.2'>Summons normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)</small>",
        ],
      },
    ],
  },
  'Rending Drake': {
    class: 'Rending Drake',
    cards: [
      {
        shuffle: false,
        initiative: 6,
        lines: [
          '* %shield% 2',
          '* %heal% 2',
          '** Self',
          '* %strengthen%',
          '** Self',
        ],
      },
      {
        shuffle: false,
        initiative: 12,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: true,
        initiative: 13,
        lines: ['* %attack% -1', '* %move% -1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 25,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 39,
        lines: ['* %move% -1', '* %attack% +1'],
      },
      {
        shuffle: false,
        initiative: 54,
        lines: [
          '* %move% -2',
          '* %attack% -1',
          '** %range% 3',
          '** %target% 2',
          '** %poison%',
        ],
      },
      {
        shuffle: false,
        initiative: 59,
        lines: ['* %move% -2', '* %attack% +1', '** %target% 2'],
      },
      {
        shuffle: true,
        initiative: 72,
        lines: ['* %attack% -1', '* %attack% -1', '* %attack% -2'],
      },
    ],
  },
  'Savvas Icestorm': {
    class: 'Savvas Icestorm',
    cards: [
      {
        shuffle: false,
        initiative: 14,
        lines: [
          '* %attack% +0',
          '** %range% +0',
          '** %ice%%use_element%: +2 %attack%, %immobilize%',
          '* %retaliate% 2',
          '* %air%',
        ],
      },
      {
        shuffle: false,
        initiative: 14,
        lines: [
          '* %shield% 4',
          '* %heal% 2',
          '** %range% 3',
          '** %ice%%use_element%: +3 %heal%',
          '* %air%%use_element%: %attack% +0',
        ],
      },
      {
        shuffle: false,
        initiative: 19,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** %range% -1',
          '* %shield% 1',
          '** Affect self and all allies within %range% 2',
          '* %ice%',
        ],
      },
      {
        shuffle: true,
        initiative: 35,
        lines: [
          '* %move% -1',
          "* %attack% -1 <div class='collapse' style='position:absolute;top:-0.8em;right:-0.5em'>%aoe-triangle-3-side-with-corner-black%</div>",
          '* %ice%',
        ],
      },
      {
        shuffle: true,
        initiative: 47,
        lines: [
          '* %disarm%',
          '** Target all adjacent enemies',
          '* %move% +0',
          '* %attack% -1',
          '** %range% +0',
          '* %air%',
        ],
      },
      {
        shuffle: false,
        initiative: 70,
        lines: [
          '* %push% 2',
          '** Target all adjacent enemies',
          '** %air%%use_element%: %push% 4 instead',
          '* %attack% +1',
          '** %range% +1',
        ],
      },
      {
        shuffle: false,
        initiative: 98,
        lines: ['* Summon normal Wind Demon', '* %air%'],
      },
      {
        shuffle: false,
        initiative: 98,
        lines: ['* Summon normal Frost Demon', '* %ice%'],
      },
    ],
  },
  'Savvas Lavaflow': {
    class: 'Savvas Lavaflow',
    cards: [
      {
        shuffle: false,
        initiative: 22,
        lines: [
          '* %move% +1',
          '* %attack% -1',
          '** Target all adjacent enemies',
          '* %fire%%use_element%: %retaliate% 3',
        ],
      },
      {
        shuffle: false,
        initiative: 31,
        lines: [
          '* %heal% 4',
          '** %range% 3',
          '** %earth%%use_element%: %target% 3',
        ],
      },
      {
        shuffle: false,
        initiative: 41,
        lines: [
          '* %move% +0',
          "* %attack% -1 <div class='collapse' style='position:absolute;right:0;top:0'>%aoe-line-4-with-black%</div>",
          '** %earth%%use_element%: +2 %attack%, %immobilize%',
        ],
      },
      {
        shuffle: false,
        initiative: 51,
        lines: [
          '* All enemies suffer 2 damage.',
          '* %fire%%use_element%: %wound% all enemies',
          '* %earth%%use_element%: %disarm% all enemies',
        ],
      },
      {
        shuffle: true,
        initiative: 68,
        lines: [
          '* %move% -1',
          '* %attack% +1',
          '** %range% 3',
          '** All allies and enemies adjacent to the target suffer 2 damage.',
          '* %earth%',
        ],
      },
      {
        shuffle: true,
        initiative: 68,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          '** %range% 3',
          '** %target% 2',
          '* %fire%',
        ],
      },
      {
        shuffle: false,
        initiative: 97,
        lines: ['* Summon normal Flame Demon', '* %fire%'],
      },
      {
        shuffle: false,
        initiative: 97,
        lines: ['* Summon normal Earth Demon', '* %earth%'],
      },
    ],
  },
  Scout: {
    class: 'Scout',
    cards: [
      {
        shuffle: false,
        initiative: 29,
        lines: ['* %move% -1', '* %attack% -1', '** %range% 3'],
      },
      {
        shuffle: true,
        initiative: 35,
        lines: ['* %move% +1', '** %jump%', '* %loot% 1'],
      },
      {
        shuffle: false,
        initiative: 40,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 53,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 54,
        lines: ['* %move% -2', '* %attack% +0', '** %range% 3', '** %poison%'],
      },
      {
        shuffle: false,
        initiative: 69,
        lines: ['* %move% -1', '* %attack% +1'],
      },
      {
        shuffle: false,
        initiative: 79,
        lines: ['* %attack% -1', '** %range% 4', '** %target% 2'],
      },
      {
        shuffle: true,
        initiative: 92,
        lines: ['* %attack% +2', '** %poison% '],
      },
    ],
  },
  Shaman: {
    class: 'Shaman',
    cards: [
      {
        shuffle: false,
        initiative: 8,
        lines: ['* %move% +0', '* %attack% -1', '** %range% +0', '** %disarm%'],
      },
      {
        shuffle: false,
        initiative: 8,
        lines: [
          '* %move% -1',
          '* %attack% +0',
          '** %range% +0',
          '** %immobilize%',
        ],
      },
      {
        shuffle: false,
        initiative: 9,
        lines: [
          '* %move% +1',
          '* %attack% -1',
          '** %range% +0, %curse%, %target% 2',
        ],
      },
      {
        shuffle: true,
        initiative: 23,
        lines: ['* %move% +0', '* %heal% 3', '** %range% 3'],
      },
      {
        shuffle: false,
        initiative: 62,
        lines: ['* %move% +0', '* %attack% +0', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 74,
        lines: ['* %move% -1', '* %attack% +1', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 89,
        lines: [
          '* %move% -1',
          '* %heal% 1',
          '** Affect all adjacent allies',
          '* %bless%',
          '** Self',
        ],
      },
    ],
  },
  'Spitting Drake': {
    class: 'Spitting Drake',
    cards: [
      {
        shuffle: false,
        initiative: 6,
        lines: [
          '* %shield% 2',
          '* %heal% 2',
          '** Self',
          '* %strengthen%',
          '** Self',
        ],
      },
      {
        shuffle: false,
        initiative: 27,
        lines: ['* %attack% +0', '** %range% +0,  %target% 2, %poison%'],
      },
      {
        shuffle: false,
        initiative: 32,
        lines: ['* %move% +1', '* %attack% -1', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 52,
        lines: ['* %move% +0', '* %attack% +0', '** %range% +0'],
      },
      {
        shuffle: true,
        initiative: 57,
        lines: [
          '* %move% +0',
          '* %attack% -1 <div class="collapse" style="position: absolute;right:0;top:0;">%aoe-triangle-2-side%</div>',
          '** %range% +0',
        ],
      },
      {
        shuffle: false,
        initiative: 87,
        lines: ['* %move% -1', '* %attack% +1', '** %range% +0'],
      },
      {
        shuffle: false,
        initiative: 89,
        lines: ['* %attack% -2', '** %range% +0', '** %stun%'],
      },
      {
        shuffle: true,
        initiative: 89,
        lines: [
          '* %move% -1',
          "* %attack% -2 <div class='collapse' style='position:absolute;right:-0.5em;top:0'>%aoe-circle%</span>",
          '** %range% +0',
          '** %poison%',
        ],
      },
    ],
  },
  'Stone Golem': {
    class: 'Stone Golem',
    cards: [
      {
        shuffle: false,
        initiative: 11,
        lines: ['* %retaliate% 3', '** %range% 3'],
      },
      {
        shuffle: false,
        initiative: 28,
        lines: [
          '* %move% +1',
          '* %attack% +0',
          '* Stone Golem suffers 1 damage.',
        ],
      },
      {
        shuffle: false,
        initiative: 28,
        lines: [
          '* %move% +1',
          '* %attack% -2',
          '** %range% 3',
          '* %pull% 2',
          '** %immobilize%',
        ],
      },
      {
        shuffle: true,
        initiative: 51,
        lines: ['* %move% +1', '* %attack% -1'],
      },
      {
        shuffle: false,
        initiative: 65,
        lines: ['* %move% +0', '* %attack% +0'],
      },
      {
        shuffle: false,
        initiative: 72,
        lines: [
          '* %attack% +1',
          '** %range% 3',
          '* Stone Golem suffers 2 damage',
        ],
      },
      {
        shuffle: false,
        initiative: 83,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** Target all adjacent enemies',
        ],
      },
      {
        shuffle: true,
        initiative: 90,
        lines: ['* %move% -1', '* %attack% +1'],
      },
    ],
  },
  'Sun Demon': {
    class: 'Sun Demon',
    cards: [
      {
        shuffle: true,
        initiative: 17,
        lines: [
          '* %heal% 3',
          '** %range% 3',
          '** %light%%use_element%: Target all allies within range',
        ],
      },
      {
        shuffle: false,
        initiative: 36,
        lines: [
          '* %move% +0',
          '* %attack% +0',
          '** Target all adjacent enemies',
          '* %light%',
        ],
      },
      {
        shuffle: false,
        initiative: 50,
        lines: [
          '* %move% +0',
          '* %attack% +0',
          '** %range% 3',
          '* %any%%use_element%: %light%',
        ],
      },
      {
        shuffle: false,
        initiative: 68,
        lines: ['* %move% +0', '* %attack% +1', '* %light%'],
      },
      {
        shuffle: true,
        initiative: 73,
        lines: [
          '* %move% +0',
          '* %attack% +1',
          '* %light%%use_element%: %heal% 3',
          '** Self',
        ],
      },
      {
        shuffle: false,
        initiative: 88,
        lines: [
          '* %move% -1',
          '* %attack% -1',
          '** Target all adjacent enemies',
          '* %dark%%use_element%: %muddle%',
          '** Self',
        ],
      },
      {
        shuffle: false,
        initiative: 95,
        lines: [
          '* %move% -1',
          '* %attack% +0',
          '** %range% 4',
          '** %light%%use_element%: Target all enemies within range',
        ],
      },
    ],
  },
  'Wind Demon': {
    class: 'Wind Demon',
    cards: [
      {
        shuffle: false,
        initiative: 2,
        lines: [
          '* %shield% 1',
          '* %move% -1',
          '* %attack% -1',
          '** %range% +0',
          '* %any%%use_element%: %air%',
        ],
      },
      {
        shuffle: false,
        initiative: 9,
        lines: [
          '* %attack% -1',
          '** %range% +0',
          '* %heal% 1',
          '** Self',
          '* %air%%use_element%: %invisible%',
          '** Self',
        ],
      },
      {
        shuffle: true,
        initiative: 21,
        lines: [
          '* %move% +0',
          '* %attack% +0',
          '** %range% +0, %pull% 1',
          '* %air%',
        ],
      },
      {
        shuffle: false,
        initiative: 29,
        lines: [
          '* %move% +0',
          '* %attack% -1',
          '** %range% +0, %target% 2',
          '** %air%%use_element%: %push% 2',
        ],
      },
      {
        shuffle: false,
        initiative: 37,
        lines: [
          '* %move% +0',
          "* %attack% +0 <div class='collapse' style='position:absolute;right:0;top:-0.8em'>%aoe-4-with-black%</div>",
          "** <div style='display: flex;align-items:center'>%air%%use_element%: +1 Attack <span style='margin-left:0.5em'>%aoe-circle-with-side-black%</span></div>",
        ],
      },
      {
        shuffle: false,
        initiative: 43,
        lines: [
          '* %move% -1',
          '* %attack% +1',
          '** %range% +0',
          '** %air%%use_element%: %target% 2',
        ],
      },
      {
        shuffle: false,
        initiative: 43,
        lines: [
          '* %push% 1',
          '** Target all adjacent enemies',
          '* %attack% +0',
          '** %range% +0',
          '** %earth%%use_element%: -2 %range%',
        ],
      },
    ],
  },
};
