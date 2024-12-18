import { EnemyNames } from 'types/enemies.types';

type ScenarioSpecialRules = {
  deck: EnemyNames;
  extra_levels?: number;
  extra_attributes?: { normal: string[]; elite: string[] };
};

export type ScenarioDefinition = {
  id: number;
  name: string;
  enemies: EnemyNames[];
  specialRules?: ScenarioSpecialRules[];
};

export const SCENARIO_DEFINITIONS: ScenarioDefinition[] = [
  {
    name: '#1 Black Barrow',
    enemies: [
      EnemyNames.BanditGuard,
      EnemyNames.BanditArcher,
      EnemyNames.LivingBones,
    ],
    id: 1,
  },
  {
    name: '#2 Barrow Lair',
    enemies: [
      EnemyNames.BanditArcher,
      EnemyNames.BanditCommander,
      EnemyNames.LivingBones,
      EnemyNames.LivingCorpse,
    ],
    id: 2,
  },
  {
    name: '#3 Inox Encampment',
    enemies: [
      EnemyNames.InoxGuard,
      EnemyNames.InoxArcher,
      EnemyNames.InoxShaman,
    ],
    id: 3,
  },
  {
    name: '#4 Crypt of the Damned',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.BanditArcher,
      EnemyNames.Cultist,
      EnemyNames.EarthDemon,
      EnemyNames.WindDemon,
    ],
    id: 4,
  },
  {
    name: '#5 Ruinous Crypt',
    enemies: [
      EnemyNames.Cultist,
      EnemyNames.LivingBones,
      EnemyNames.NightDemon,
      EnemyNames.FlameDemon,
      EnemyNames.FrostDemon,
    ],
    id: 5,
  },
  {
    name: '#6 Decaying Crypt',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.LivingCorpse,
      EnemyNames.LivingSpirit,
    ],
    id: 6,
  },
  {
    name: '#7 Vibrant Grotto',
    enemies: [
      EnemyNames.ForestImp,
      EnemyNames.CaveBear,
      EnemyNames.InoxShaman,
      EnemyNames.EarthDemon,
    ],
    id: 7,
  },
  {
    name: '#8 Gloomhaven Warehouse',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.LivingCorpse,
      EnemyNames.InoxBodyguard,
    ],
    id: 8,
  },
  {
    name: '#9 Diamond Mine',
    enemies: [
      EnemyNames.Hound,
      EnemyNames.VermlingScout,
      EnemyNames.MercilessOverseer,
    ],
    id: 9,
  },
  {
    name: '#10 Plane of Elemental Power',
    enemies: [
      EnemyNames.FlameDemon,
      EnemyNames.EarthDemon,
      EnemyNames.SunDemon,
    ],
    id: 10,
  },
  {
    name: '#11 Gloomhaven Square A',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.LivingCorpse,
      EnemyNames.CityGuard,
      EnemyNames.CityArcher,
      EnemyNames.CaptainOfTheGuard,
    ],
    id: 11,
  },
  {
    name: '#12 Gloomhaven Square B',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.LivingCorpse,
      EnemyNames.Cultist,
      EnemyNames.CityGuard,
      EnemyNames.CityArcher,
      EnemyNames.Jekserah,
    ],
    id: 12,
  },
  {
    name: '#13 Temple of the Seer',
    enemies: [
      EnemyNames.StoneGolem,
      EnemyNames.CaveBear,
      EnemyNames.LivingSpirit,
      EnemyNames.SpittingDrake,
    ],
    id: 13,
  },
  {
    name: '#14 Frozen Hollow',
    enemies: [EnemyNames.Hound, EnemyNames.LivingSpirit, EnemyNames.FrostDemon],
    id: 14,
  },
  {
    name: '#15 Shrine of Strength',
    enemies: [
      EnemyNames.StoneGolem,
      EnemyNames.SavvasIcestorm,
      EnemyNames.FrostDemon,
      EnemyNames.WindDemon,
      EnemyNames.HarrowerInfester,
    ],
    id: 15,
  },
  {
    name: '#16 Mountain Pass',
    enemies: [
      EnemyNames.EarthDemon,
      EnemyNames.WindDemon,
      EnemyNames.InoxGuard,
      EnemyNames.InoxArcher,
    ],
    id: 16,
  },
  {
    name: '#17 Lost Island',
    enemies: [
      EnemyNames.VermlingScout,
      EnemyNames.VermlingShaman,
      EnemyNames.CaveBear,
    ],
    id: 17,
  },
  {
    name: '#18 Abandoned Sewers',
    enemies: [EnemyNames.GiantViper, EnemyNames.Ooze, EnemyNames.VermlingScout],
    id: 18,
  },
  {
    name: '#19 Forgotten Crypt',
    enemies: [
      EnemyNames.Cultist,
      EnemyNames.LivingBones,
      EnemyNames.LivingSpirit,
      EnemyNames.LivingCorpse,
    ],
    id: 19,
  },
  {
    name: "#20 Necromancer's Sanctum",
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.Cultist,
      EnemyNames.NightDemon,
      EnemyNames.LivingCorpse,
      EnemyNames.Jekserah,
    ],
    id: 20,
  },
  {
    name: '#21 Infernal Throne',
    enemies: [
      EnemyNames.SunDemon,
      EnemyNames.FrostDemon,
      EnemyNames.NightDemon,
      EnemyNames.WindDemon,
      EnemyNames.EarthDemon,
      EnemyNames.FlameDemon,
      EnemyNames.PrimeDemon,
    ],
    id: 21,
  },
  {
    name: '#22 Temple of the Elements',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.Cultist,
      EnemyNames.EarthDemon,
      EnemyNames.FlameDemon,
      EnemyNames.FrostDemon,
      EnemyNames.WindDemon,
    ],
    id: 22,
  },
  {
    name: '#23 Deep Ruins',
    enemies: [
      EnemyNames.StoneGolem,
      EnemyNames.AncientArtillery,
      EnemyNames.LivingBones,
      EnemyNames.LivingSpirit,
    ],
    id: 23,
  },
  {
    name: '#24 Echo Chamber',
    enemies: [
      EnemyNames.RendingDrake,
      EnemyNames.Ooze,
      EnemyNames.LivingSpirit,
    ],
    id: 24,
  },
  {
    name: '#25 Icecrag Ascent',
    enemies: [
      EnemyNames.Hound,
      EnemyNames.RendingDrake,
      EnemyNames.SpittingDrake,
    ],
    id: 25,
  },
  {
    name: '#26 Ancient Cistern',
    enemies: [
      EnemyNames.LivingCorpse,
      EnemyNames.Ooze,
      EnemyNames.NightDemon,
      EnemyNames.BlackImp,
    ],
    id: 26,
  },
  {
    name: '#27 Ruinous Rift',
    enemies: [
      EnemyNames.NightDemon,
      EnemyNames.WindDemon,
      EnemyNames.FrostDemon,
      EnemyNames.SunDemon,
      EnemyNames.EarthDemon,
      EnemyNames.FlameDemon,
    ],
    id: 27,
  },
  {
    name: '#28 Outer Ritual Chamber',
    enemies: [
      EnemyNames.LivingCorpse,
      EnemyNames.Cultist,
      EnemyNames.LivingBones,
      EnemyNames.NightDemon,
      EnemyNames.SunDemon,
    ],
    id: 28,
    specialRules: [
      {
        deck: EnemyNames.LivingCorpse,
        extra_levels: 2,
      },
    ],
  },
  {
    name: '#29 Sanctuary of Gloom',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.LivingCorpse,
      EnemyNames.LivingSpirit,
      EnemyNames.BlackImp,
    ],
    id: 29,
  },
  {
    name: '#30 Shrine of the Depths',
    enemies: [EnemyNames.Ooze, EnemyNames.Lurker, EnemyNames.DeepTerror],
    id: 30,
  },
  {
    name: '#31 Plane of the Night',
    enemies: [
      EnemyNames.DeepTerror,
      EnemyNames.NightDemon,
      EnemyNames.BlackImp,
    ],
    id: 31,
  },
  {
    name: '#32 Decrepit Wood',
    enemies: [
      EnemyNames.HarrowerInfester,
      EnemyNames.GiantViper,
      EnemyNames.DeepTerror,
      EnemyNames.BlackImp,
    ],
    id: 32,
  },
  {
    name: '#33 Savvas Armory',
    enemies: [
      EnemyNames.SavvasIcestorm,
      EnemyNames.SavvasLavaflow,
      EnemyNames.FrostDemon,
      EnemyNames.FlameDemon,
      EnemyNames.WindDemon,
      EnemyNames.EarthDemon,
    ],
    id: 33,
  },
  {
    name: '#34 Scorched Summit',
    enemies: [
      EnemyNames.RendingDrake,
      EnemyNames.SpittingDrake,
      EnemyNames.ElderDrake,
    ],
    id: 34,
  },
  {
    name: '#35 Gloomhaven Battlements A',
    enemies: [
      EnemyNames.FlameDemon,
      EnemyNames.FrostDemon,
      EnemyNames.EarthDemon,
      EnemyNames.WindDemon,
    ],
    id: 35,
  },
  {
    name: '#36 Gloomhaven Battlements B',
    enemies: [
      EnemyNames.FlameDemon,
      EnemyNames.FrostDemon,
      EnemyNames.EarthDemon,
      EnemyNames.WindDemon,
      EnemyNames.CityArcher,
      EnemyNames.PrimeDemonScenario36,
    ],
    id: 36,
  },
  {
    name: '#37 Doom Trench',
    enemies: [
      EnemyNames.Lurker,
      EnemyNames.DeepTerror,
      EnemyNames.HarrowerInfester,
    ],
    id: 37,
  },
  {
    name: '#38 Slave Pens',
    enemies: [
      EnemyNames.InoxGuard,
      EnemyNames.InoxArcher,
      EnemyNames.InoxShaman,
      EnemyNames.StoneGolem,
    ],
    id: 38,
  },
  {
    name: '#39 Treacherous Divide',
    enemies: [
      EnemyNames.CaveBear,
      EnemyNames.FrostDemon,
      EnemyNames.SpittingDrake,
      EnemyNames.Cultist,
      EnemyNames.LivingBones,
    ],
    id: 39,
  },
  {
    name: '#40 Ancient Defense Network',
    enemies: [
      EnemyNames.LivingCorpse,
      EnemyNames.FlameDemon,
      EnemyNames.CaveBear,
      EnemyNames.StoneGolem,
      EnemyNames.ForestImp,
    ],
    id: 40,
  },
  {
    name: '#41 Timeworn Tomb',
    enemies: [
      EnemyNames.AncientArtillery,
      EnemyNames.LivingCorpse,
      EnemyNames.LivingSpirit,
      EnemyNames.StoneGolem,
    ],
    id: 41,
  },
  {
    name: '#42 Realm of the Voice',
    enemies: [
      EnemyNames.NightDemon,
      EnemyNames.WindDemon,
      EnemyNames.LivingSpirit,
    ],
    id: 42,
  },
  {
    name: '#43 Drake Nest',
    enemies: [
      EnemyNames.FlameDemon,
      EnemyNames.RendingDrake,
      EnemyNames.SpittingDrake,
    ],
    id: 43,
  },
  {
    name: '#44 Tribal Assault',
    enemies: [
      EnemyNames.InoxGuard,
      EnemyNames.InoxArcher,
      EnemyNames.Hound,
      EnemyNames.InoxShaman,
    ],
    id: 44,
  },
  {
    name: '#45 Rebel Swamp',
    enemies: [EnemyNames.CityGuard, EnemyNames.CityArcher, EnemyNames.Hound],
    id: 45,
  },
  {
    name: '#46 Nightmare Peak',
    enemies: [
      EnemyNames.NightDemon,
      EnemyNames.FrostDemon,
      EnemyNames.WindDemon,
      EnemyNames.SavvasIcestorm,
      EnemyNames.WingedHorror,
    ],
    id: 46,
  },
  {
    name: '#47 Lair of the Unseeing Eye',
    enemies: [
      EnemyNames.Lurker,
      EnemyNames.DeepTerror,
      EnemyNames.HarrowerInfester,
      EnemyNames.TheSightlessEye,
    ],
    id: 47,
  },
  {
    name: '#48 Shadow Weald',
    enemies: [
      EnemyNames.ForestImp,
      EnemyNames.EarthDemon,
      EnemyNames.HarrowerInfester,
      EnemyNames.DarkRider,
    ],
    id: 48,
  },
  {
    name: "#49 Rebel's Stand",
    enemies: [
      EnemyNames.GiantViper,
      EnemyNames.CityArcher,
      EnemyNames.CityGuard,
      EnemyNames.AncientArtillery,
    ],
    id: 49,
  },
  {
    name: '#50 Ghost Fortress',
    enemies: [
      EnemyNames.NightDemon,
      EnemyNames.SunDemon,
      EnemyNames.EarthDemon,
    ],
    id: 50,
  },
  {
    name: '#51 The Void',
    enemies: [EnemyNames.TheGloom],
    id: 51,
  },
  {
    name: '#52 Noxious Cellar',
    enemies: [
      EnemyNames.SpittingDrake,
      EnemyNames.Ooze,
      EnemyNames.VermlingScout,
      EnemyNames.LivingCorpse,
      EnemyNames.VermlingShaman,
    ],
    id: 52,
  },
  {
    name: '#53 Crypt Basement',
    enemies: [
      EnemyNames.Ooze,
      EnemyNames.LivingCorpse,
      EnemyNames.LivingSpirit,
      EnemyNames.LivingBones,
      EnemyNames.GiantViper,
    ],
    id: 53,
  },
  {
    name: '#54 Palace of Ice',
    enemies: [
      EnemyNames.CaveBear,
      EnemyNames.LivingSpirit,
      EnemyNames.FrostDemon,
      EnemyNames.HarrowerInfester,
    ],
    id: 54,
    specialRules: [
      {
        deck: EnemyNames.CaveBear,
        extra_attributes: { normal: ['%poison%'], elite: ['%poison%'] },
      },
    ],
  },
  { name: '#55 Foggy Thicket', enemies: [], id: 55 },
  {
    name: "#56 Bandit's Wood",
    enemies: [
      EnemyNames.Hound,
      EnemyNames.BanditArcher,
      EnemyNames.RendingDrake,
      EnemyNames.BanditGuard,
    ],
    id: 56,
  },
  {
    name: '#57 Investigation',
    enemies: [EnemyNames.CityGuard, EnemyNames.CityArcher, EnemyNames.Hound],
    id: 57,
  },
  {
    name: '#58 Bloody Shack',
    enemies: [
      EnemyNames.EarthDemon,
      EnemyNames.HarrowerInfester,
      EnemyNames.BlackImp,
      EnemyNames.CityGuard,
    ],
    id: 58,
  },
  {
    name: '#59 Forgotten Grove',
    enemies: [EnemyNames.CaveBear, EnemyNames.Hound, EnemyNames.ForestImp],
    id: 59,
  },
  {
    name: '#60 Alchemy Lab',
    enemies: [
      EnemyNames.Ooze,
      EnemyNames.GiantViper,
      EnemyNames.Hound,
      EnemyNames.RendingDrake,
      EnemyNames.SpittingDrake,
    ],
    id: 60,
  },
  {
    name: '#61 Fading Lighthouse',
    enemies: [
      EnemyNames.Ooze,
      EnemyNames.GiantViper,
      EnemyNames.FrostDemon,
      EnemyNames.FlameDemon,
    ],
    id: 61,
  },
  {
    name: '#62 Pit of Souls',
    enemies: [EnemyNames.LivingBones, EnemyNames.LivingSpirit],
    id: 62,
  },
  {
    name: '#63 Magma Pit',
    enemies: [
      EnemyNames.VermlingScout,
      EnemyNames.InoxGuard,
      EnemyNames.InoxArcher,
      EnemyNames.FlameDemon,
    ],
    id: 63,
  },
  {
    name: '#64 Underwater Lagoon',
    enemies: [EnemyNames.Ooze, EnemyNames.ForestImp, EnemyNames.RendingDrake],
    id: 64,
  },
  {
    name: '#65 Sulfur Mine',
    enemies: [
      EnemyNames.VermlingScout,
      EnemyNames.Hound,
      EnemyNames.InoxShaman,
    ],
    id: 65,
  },
  {
    name: '#66 Clockwork Cove',
    enemies: [
      EnemyNames.Ooze,
      EnemyNames.AncientArtillery,
      EnemyNames.LivingSpirit,
      EnemyNames.StoneGolem,
    ],
    id: 66,
  },
  {
    name: '#67 Arcane Library',
    enemies: [EnemyNames.ForestImp, EnemyNames.CaveBear, EnemyNames.StoneGolem],
    id: 67,
  },
  {
    name: '#68 Toxic Moor',
    enemies: [
      EnemyNames.RendingDrake,
      EnemyNames.BlackImp,
      EnemyNames.GiantViper,
      EnemyNames.LivingCorpse,
    ],
    id: 68,
  },
  {
    name: '#69 Well of the Unfortunate',
    enemies: [
      EnemyNames.VermlingScout,
      EnemyNames.VermlingShaman,
      EnemyNames.ForestImp,
      EnemyNames.StoneGolem,
      EnemyNames.LivingSpirit,
    ],
    id: 69,
  },
  {
    name: '#70 Chained Isle',
    enemies: [
      EnemyNames.NightDemon,
      EnemyNames.WindDemon,
      EnemyNames.LivingSpirit,
    ],
    id: 70,
  },
  {
    name: '#71 Windswept Highlands',
    enemies: [
      EnemyNames.SpittingDrake,
      EnemyNames.WindDemon,
      EnemyNames.SunDemon,
    ],
    id: 71,
  },
  {
    name: '#72 Oozing Grove',
    enemies: [EnemyNames.Ooze, EnemyNames.ForestImp, EnemyNames.GiantViper],
    id: 72,
  },
  {
    name: '#73 Rockslide Ridge',
    enemies: [
      EnemyNames.Hound,
      EnemyNames.InoxArcher,
      EnemyNames.AncientArtillery,
      EnemyNames.InoxGuard,
      EnemyNames.InoxShaman,
    ],
    id: 73,
  },
  {
    name: '#74 Merchant Ship',
    enemies: [
      EnemyNames.BanditGuard,
      EnemyNames.BanditArcher,
      EnemyNames.Lurker,
      EnemyNames.DeepTerror,
    ],
    id: 74,
  },
  {
    name: '#75 Overgrown Graveyard',
    enemies: [
      EnemyNames.LivingBones,
      EnemyNames.LivingCorpse,
      EnemyNames.LivingSpirit,
    ],
    id: 75,
  },
  {
    name: '#76 Harrower Hive',
    enemies: [
      EnemyNames.GiantViper,
      EnemyNames.LivingBones,
      EnemyNames.NightDemon,
      EnemyNames.HarrowerInfester,
    ],
    id: 76,
  },
  {
    name: '#77 Vault of Secrets',
    enemies: [
      EnemyNames.CityGuard,
      EnemyNames.CityArcher,
      EnemyNames.StoneGolem,
      EnemyNames.Hound,
    ],
    id: 77,
  },
  {
    name: '#78 Sacrifice Pit',
    enemies: [
      EnemyNames.BanditGuard,
      EnemyNames.BanditArcher,
      EnemyNames.Cultist,
      EnemyNames.LivingBones,
      EnemyNames.BlackImp,
    ],
    id: 78,
  },
  {
    name: '#79 Lost Temple',
    enemies: [
      EnemyNames.StoneGolem,
      EnemyNames.GiantViper,
      EnemyNames.TheBetrayer,
    ],
    id: 79,
  },
  {
    name: '#80 Vigil Keep',
    enemies: [
      EnemyNames.CityGuard,
      EnemyNames.CityArcher,
      EnemyNames.AncientArtillery,
      EnemyNames.Hound,
    ],
    id: 80,
  },
  {
    name: '#81 Temple of the Eclipse',
    enemies: [
      EnemyNames.NightDemon,
      EnemyNames.SunDemon,
      EnemyNames.StoneGolem,
      EnemyNames.AncientArtillery,
      EnemyNames.TheColorless,
    ],
    id: 81,
  },
  {
    name: '#82 Burning Mountain',
    enemies: [
      EnemyNames.EarthDemon,
      EnemyNames.FlameDemon,
      EnemyNames.StoneGolem,
    ],
    id: 82,
  },
  {
    name: '#83 Shadows Within',
    enemies: [
      EnemyNames.Hound,
      EnemyNames.Cultist,
      EnemyNames.LivingBones,
      EnemyNames.LivingSpirit,
      EnemyNames.FlameDemon,
    ],
    id: 83,
  },
  {
    name: '#84 Crystalline Cave',
    enemies: [
      EnemyNames.FlameDemon,
      EnemyNames.FrostDemon,
      EnemyNames.EarthDemon,
    ],
    id: 84,
  },
  {
    name: '#85 Sun Temple',
    enemies: [
      EnemyNames.Hound,
      EnemyNames.BlackImp,
      EnemyNames.NightDemon,
      EnemyNames.SunDemon,
    ],
    id: 85,
  },
  {
    name: '#86 Harried Village',
    enemies: [
      EnemyNames.CaveBear,
      EnemyNames.VermlingShaman,
      EnemyNames.VermlingScout,
      EnemyNames.Lurker,
    ],
    id: 86,
  },
  {
    name: '#87 Corrupted Cove',
    enemies: [
      EnemyNames.Lurker,
      EnemyNames.DeepTerror,
      EnemyNames.Ooze,
      EnemyNames.BlackImp,
    ],
    id: 87,
  },
  {
    name: '#88 Plane of Water',
    enemies: [EnemyNames.FrostDemon, EnemyNames.Ooze, EnemyNames.Lurker],
    id: 88,
  },
  {
    name: '#89 Syndicate Hideout',
    enemies: [
      EnemyNames.BanditArcher,
      EnemyNames.BanditGuard,
      EnemyNames.Cultist,
      EnemyNames.GiantViper,
    ],
    id: 89,
  },
  {
    name: '#90 Demonic Rift',
    enemies: [
      EnemyNames.EarthDemon,
      EnemyNames.WindDemon,
      EnemyNames.NightDemon,
      EnemyNames.LivingSpirit,
    ],
    id: 90,
  },
  {
    name: '#91 Wild Melee',
    enemies: [
      EnemyNames.CaveBear,
      EnemyNames.Hound,
      EnemyNames.BanditGuard,
      EnemyNames.BanditArcher,
      EnemyNames.LivingSpirit,
    ],
    id: 91,
  },
  {
    name: '#92 Back Alley Brawl',
    enemies: [
      EnemyNames.BanditGuard,
      EnemyNames.CityGuard,
      EnemyNames.InoxGuard,
      EnemyNames.BanditArcher,
      EnemyNames.CityArcher,
      EnemyNames.SavvasIcestorm,
      EnemyNames.FrostDemon,
      EnemyNames.WindDemon,
    ],
    id: 92,
  },
  {
    name: '#93 Sunken Vessel',
    enemies: [
      EnemyNames.Lurker,
      EnemyNames.FrostDemon,
      EnemyNames.LivingSpirit,
    ],
    id: 93,
  },
  {
    name: '#94 Vermling Nest',
    enemies: [
      EnemyNames.Hound,
      EnemyNames.VermlingScout,
      EnemyNames.VermlingShaman,
      EnemyNames.CaveBear,
    ],
    id: 94,
  },
  {
    name: '#95 Payment Due',
    enemies: [
      EnemyNames.DeepTerror,
      EnemyNames.FlameDemon,
      EnemyNames.EarthDemon,
      EnemyNames.SavvasLavaflow,
    ],
    id: 95,
  },
];
