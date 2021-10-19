import {
  samuraiCharacters,
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
  SWORD,
  OPT_UP_PARTIAL_ARMOUR,
  BOW,
  OPT_DOWN_PARTIAL_ARMOUR,
  NO_ARMOUR,
} from './constants';

import traits from './traits';

const samurai = {
  Sengoku: {
    ...samuraiCharacters(),
    peasants: {
      displayName: 'Peasants',
      availability: MILITES,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: NAGINATA,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
      ],
      cost: 7,
      options: [
      ],
    },
    bandits_teppo: {
      displayName: 'Bandits with teppo',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: TEPPO,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 11,
      options: [
      ],
    },
    bandits: {
      displayName: 'Bandits',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: YARI,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.THRUST,
      ],
      cost: 11,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    veteran_bandits: {
      displayName: 'Veteran bandits',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 3,
      defaultWeapon: NAGINATA,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.CUTTHROAT,
      ],
      cost: 16,
      options: [
      ],
    },
    untrained: {
      displayName: 'Untrained Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: YARI,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.KAKOMU,
      ],
      cost: 11,
      options: [
      ],
    },
    yumi: {
      displayName: 'Yumi Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: YUMI,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 16,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
    },
    teppo: {
      displayName: 'Teppo Ashigaru',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: TEPPO,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.VOLLEY,
        traits.DRILLED,
      ],
      cost: 17,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
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
        traits.KAKOMU,
        traits.HARINEZUM,
        traits.DRILLED,
      ],
      cost: 16,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
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
        traits.WALL_OF_SPEARS,
        traits.OFFENSIVE_SPEAR,
        traits.DRILLED,
      ],
      cost: 16,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
    },
    bushi: {
      displayName: 'Onna Bushi',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 3,
      defaultWeapon: NAGINATA,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.FUREKAESHI,
        traits.KURIDASHI,
      ],
      cost: 17,
      options: [
      ],
    },
    sohei: {
      displayName: 'Sohei monks',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 3,
      defaultWeapon: NAGINATA,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.KURIDASHI,
        traits.GUERRILLA,
      ],
      cost: 17,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
    },
    naganita: {
      displayName: 'Samurai with long weapons',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: NAGINATA,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [
        traits.FUREKAESHI,
        traits.KURIDASHI,
        traits.NAGINATA,
      ],
      cost: 22,
      options: [
      ],
    },
    katana: {
      displayName: 'Samurai with Katana and Wakisash',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: SWORD,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [
        traits.GAUCHE,
        traits.RAIN,
      ],
      cost: 20,
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
        traits.AIM,
      ],
      cost: 22,
      options: [
      ],
    },
    mounted: {
      displayName: 'Mounted Samurai with yari',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_YARI,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [
        traits.MOUNTED,
        traits.CHARGE,
      ],
      cost: 24,
      options: [
      ],
    },
    mounted_bow: {
      displayName: 'Mounted Samurai with bow',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: BOW,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [
        traits.MOUNTED,
        traits.MARAUDERS,
      ],
      cost: 25,
      options: [
      ],
    },
  },
};

export default samurai;
