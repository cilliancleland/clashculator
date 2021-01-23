import {
  characters,
} from './characters';

import {
  MILITES,
  ENCLOSED,
  PARTIAL,
  FULL,
  NO_SHIELD,
  OPT_DOWN_NO_ARMOUR,
  YUMI,
  CAVALRY_YARI,
  NAGINATA,
  NAGAE,
  YARI,
  TEPPO,
} from './constants';

import {
  TRAIT_CHARGE,
  TRAIT_MOUNTED,
  TRAIT_AIM,
  TRAIT_SKIRMISH_SPECIALIST,
  TRAIT_VOLLEY,
  TRAIT_DRILLED,
  TRAIT_KAKOMU,
  TRAIT_HARINEZUM,
  TRAIT_WALL_OF_SPEARS,
  TRAIT_OFFENSIVE_SPEAR,
  TRAIT_FUREKAESHI,
  TRAIT_KURIDASHI,
  TRAIT_NAGINATA,
} from './traits';

const samurai = {
  Sengoku: {
    ...characters,
    yumi: {
      displayName: 'Yumi Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: YUMI,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_SKIRMISH_SPECIALIST,
      ],
      cost: 16,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
    },
    teppo: {
      displayName: 'Teppo Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: TEPPO,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_VOLLEY,
        TRAIT_DRILLED,
      ],
      cost: 17,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
    },
    untrained: {
      displayName: 'Untrained Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: YARI,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_KAKOMU,
      ],
      cost: 11,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
    },
    yari: {
      displayName: 'Yari Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: YARI,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_KAKOMU,
        TRAIT_HARINEZUM,
        TRAIT_DRILLED,
      ],
      cost: 16,
      options: [
      ],
    },
    nagae: {
      displayName: 'Nagae Yari Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: NAGAE,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_WALL_OF_SPEARS,
        TRAIT_OFFENSIVE_SPEAR,
        TRAIT_DRILLED,
      ],
      cost: 16,
      options: [
      ],
    },
    naganita: {
      displayName: 'Naginata Samurai',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: NAGINATA,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_FUREKAESHI,
        TRAIT_KURIDASHI,
        TRAIT_NAGINATA,
      ],
      cost: 22,
      options: [
      ],
    },
    mounted: {
      displayName: 'Mounted Samurai',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_YARI,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_MOUNTED,
        TRAIT_CHARGE,
      ],
      cost: 25,
      options: [
      ],
    },
    yumiSamurai: {
      displayName: 'Yumi Samurai',
      availability: MILITES,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: YUMI,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [
        TRAIT_AIM,
      ],
      cost: 22,
      options: [
      ],
    },
  },
};

export default samurai;
