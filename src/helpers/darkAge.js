import {
  characters,
} from './characters';

import {
  MILITES,
  CIVIS,
  RARE,
  NO_SHIELD,
  NO_ARMOUR,
  FULL,
  PARTIAL,
  SHIELD,
  LANCE,
  ENCLOSED,
  HEAVY_SHIELD,
  THROWING,
  XBOW,
  MIXED,
  JAVELIN,
  SLING,
  BOW,
  BUCKLER,
  AX,
  TEETH,
  OPT_SHIELD,
  OPT_BUCKLER,
  OPT_BARDING,
  OPT_DRILLED,
  OPT_UP_PARTIAL_ARMOUR,
  OPT_UP_FULL_ARMOUR,
  OPT_HUNTER,
  CAVALRY_SPEAR,
  OPT_UP_NO_TO_HEAVY_SHIELD,
  THRUSTING,
} from './constants';

import traits from './traits';

const darkAge = {
  Byzantine: {
    ...characters,
    cataphracts_k: {
      displayName: 'Cataphracts w/kontarion',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: LANCE,
      defaultBody: ENCLOSED,
      defaultShield: BUCKLER,
      traits: [traits.MOUNTED, traits.CHARGE, traits.DRILLED],
      cost: 27,
      options: [
        OPT_BARDING,
        OPT_SHIELD,
      ],
    },
    cataphracts_b: {
      displayName: 'Cataphracts w/bow',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: BOW,
      defaultBody: ENCLOSED,
      defaultShield: NO_SHIELD,
      traits: [traits.MOUNTED],
      cost: 23,
      options: [
        OPT_BARDING,
        OPT_BUCKLER,
      ],
    },
    tagmata_k: {
      displayName: 'Tagmata Cavalry w/kontarion',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: LANCE,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.CHARGE, traits.DRILLED, traits.IMPETUS],
      cost: 26,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
    tagmata_b: {
      displayName: 'Tagmata Cavalry w/bow',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [traits.MOUNTED],
      cost: 21,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },

    themata_k: {
      displayName: 'Themata Cavalry w/kontarion',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: LANCE,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.IMPETUS],
      cost: 19,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
    themata_b: {
      displayName: 'Themata Cavalry w/bow',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [traits.MOUNTED],
      cost: 21,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
    jinetes: {
      displayName: 'Mounted javelinmen',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.SKIRMISH_SPECIALIST],
      cost: 17,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    spearmen: {
      displayName: 'Spearmen',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultShield: HEAVY_SHIELD,
      defaultBody: NO_ARMOUR,
      traits: [traits.SHIELD_OVERLAP, traits.WALL_OF_SPEARS],
      cost: 16,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    veteran: {
      displayName: 'Veteran Spearmen',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THROWING,
      defaultShield: HEAVY_SHIELD,
      defaultBody: NO_ARMOUR,
      traits: [traits.SHIELD_OVERLAP, traits.WALL_OF_SPEARS],
      cost: 20,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    archers: {
      displayName: 'Archers',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
      traits: [traits.OVERHEAD],
      cost: 12,
      options: [
        OPT_BUCKLER,
        OPT_DRILLED,
      ],
    },
    varangian: {
      displayName: 'Varnagian Guards',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: AX,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: [traits.SHIELD_OVERLAP, traits.BREAKER, traits.STALWART, traits.DOUBLE],
      cost: 23,
      options: [
      ],
    },
    psiloi_j: {
      displayName: 'Psiloi w/ javelins',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 9,
      options: [
      ],
    },
    ploili_s: {
      displayName: 'Psiloi w/ slings',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: SLING,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
    },
  },
  Norman: {
    ...characters,
    coloni_j: {
      displayName: 'Coloni w/javelin',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: BUCKLER,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 9,
      options: [
      ],
    },
    coloni_b: {
      displayName: 'Coloni w/bow',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
      ],
    },
    coloni_s: {
      displayName: 'Coloni w/sling',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: SLING,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST, traits.SLING],
      cost: 9,
      options: [
      ],
    },
    pueri: {
      displayName: 'Pueri',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.IMPETUS],
      cost: 16,
      options: [
      ],
    },
    liberi_s: {
      displayName: 'Liberi w/spear',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP, traits.EXTRA_JAVELIN],
      cost: 19,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    liberi_b: {
      displayName: 'Liberi w/bow',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [],
      cost: 11,
      options: [],
    },
    pedites_x: {
      displayName: 'Pedites w/crossbow',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: XBOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [],
      cost: 12,
      options: [OPT_UP_PARTIAL_ARMOUR],
    },
    pedites_d: {
      displayName: 'Pedites or Dismounted Milites',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THROWING,
      defaultBody: FULL,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 23,
      options: [],
    },
    milites_j: {
      displayName: 'Earlier Milites',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.EXTRA_JAVELIN, traits.WARHORSE],
      cost: 26,
      options: [],
    },
    milites: {
      displayName: 'Milites',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: LANCE,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.CHARGE, traits.WARHORSE],
      cost: 26,
      options: [],
    },
  },
  Irish: {
    ...characters,
    kerns_j: {
      displayName: 'Kerns w/javelin',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 9,
      options: [
      ],
    },
    kerns_s: {
      displayName: 'Kerns w/sling',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: SLING,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 9,
      options: [
      ],
    },
    bonnachts: {
      displayName: 'Bonnachts',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.FUROR, traits.GUERRILLA],
      cost: 14,
      options: [
      ],
    },
    fianna_j: {
      displayName: 'Fianna w/javelin',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.FUROR, traits.GUERRILLA],
      cost: 18,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    fianna_s: {
      displayName: 'Fianna w/spear',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP, traits.FUROR],
      cost: 21,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    fianna_a: {
      displayName: 'Fianna w/axe',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: AX,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.GUERRILLA, traits.FUROR, traits.DOUBLE],
      cost: 17,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    fianna_m: {
      displayName: 'Mounted Fianna',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.FUROR],
      cost: 21,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    dogs: {
      displayName: 'War Hounds',
      availability: RARE,
      combat: 4,
      ranged: 5,
      grit: 3,
      defaultWeapon: TEETH,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
      traits: [traits.FERAL],
      cost: 10,
      options: [
      ],
    },
  },
  Viking: {
    ...characters,
    thralls: {
      displayName: 'Thralls',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 9,
      options: [
      ],
    },
    bondi_sp: {
      displayName: 'Bondi Spearmen',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 16,
      options: [
      ],
    },
    bondi_b: {
      displayName: 'Bondi Archers',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 12,
      options: [
      ],
    },
    hirdmen: {
      displayName: 'Hirdmen',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.SHIELD_OVERLAP, traits.COMBINED_ARMS, traits.CUTTHROAT],
      cost: 21,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
    hirdmen_a: {
      displayName: 'Hirdmen w/Axe',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: AX,
      defaultBody: PARTIAL,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.SHIELD_OVERLAP, traits.SHIELDBREAKER, traits.CUTTHROAT, traits.DOUBLE],
      cost: 22,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
    berzerkers: {
      displayName: 'Berzerkers w/big axe',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: AX,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [traits.FUROR, traits.IRA, traits.SHIELDBREAKER, traits.CUTTHROAT, traits.DOUBLE],
      cost: 19,
      options: [
        OPT_UP_NO_TO_HEAVY_SHIELD,
      ],
    },
    berzerkers_2: {
      displayName: 'Berzerkers w/2 axes',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [traits.FUROR, traits.IRA, traits.RAIN, traits.CUTTHROAT],
      cost: 18,
      options: [
        OPT_UP_NO_TO_HEAVY_SHIELD,
      ],
    },
  },
  'Anglo-Saxon': {
    ...characters,
    geburs_j: {
      displayName: 'Geburs w/javelin',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
      ],
    },
    geburs_s: {
      displayName: 'Geburs w/sling',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: SLING,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
      ],
    },
    geburs_b: {
      displayName: 'Geburs w/bow',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
      ],
    },
    geburs_sp: {
      displayName: 'Geburs w/spear',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 12,
      options: [
      ],
    },
    ceorls: {
      displayName: 'Ceorls',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 16,
      options: [
      ],
    },
    seasoned: {
      displayName: 'Seasoned Ceorls',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 18,
      options: [
      ],
    },
    thengs: {
      displayName: 'Thengs',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THROWING,
      defaultBody: PARTIAL,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 22,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
    mounted: {
      displayName: 'Mounted Thengs',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.IMPETUS, traits.EXTRA_CAVALRY],
      cost: 25,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
  },
  'Anglo-Dane': {
    ...characters,
    geburs_s: {
      displayName: 'Geburs w/sling',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: SLING,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
      ],
    },
    geburs_b: {
      displayName: 'Geburs w/bow',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
      ],
    },
    ceorls: {
      displayName: 'Ceorls',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 16,
      options: [
      ],
    },
    seasoned: {
      displayName: 'Seasoned Ceorls',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP],
      cost: 18,
      options: [
      ],
    },
    huscarls_sp: {
      displayName: 'Huscarls Spearmen',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THROWING,
      defaultBody: FULL,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP, traits.DETERMINED],
      cost: 24,
      options: [
      ],
    },
    huscarls_ax: {
      displayName: 'Huscarls w/Axe',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: AX,
      defaultBody: FULL,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.SHIELDBREAKER, traits.SHIELD_OVERLAP, traits.DETERMINED, traits.DOUBLE],
      cost: 23,
      options: [
      ],
    },
    mounted: {
      displayName: 'Mounted Thengs',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.IMPETUS, traits.EXTRA_JAVELIN],
      cost: 25,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
    },
  },
  Welsh: {
    ...characters,
    bonnedig_j: {
      displayName: 'Bonnedig',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
    },
    bonnedig_b: {
      displayName: 'Bonnedig w/bow',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
    },
    priodaur: {
      displayName: 'Priodaur w/javelin',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.FUROR, traits.GUERRILLA],
      cost: 14,
      options: [
      ],
    },
    priodaur_b: {
      displayName: 'Priodaur w/bow',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.FUROR, traits.GUERRILLA],
      cost: 13,
      options: [
      ],
    },
    priodaur_sp: {
      displayName: 'Priodaur w/spear',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.GUERRILLA],
      cost: 15,
      options: [
      ],
    },
    teulu_sp: {
      displayName: 'Teulu w/spear',
      availability: MILITES,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.GUERRILLA, traits.FUROR],
      cost: 20,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    teulu_j: {
      displayName: 'Teulu w/javelin',
      availability: MILITES,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.GUERRILLA, traits.FUROR],
      cost: 18,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    teulu_m: {
      displayName: 'Mounted Teulu',
      availability: RARE,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.GUERRILLA, traits.FUROR, traits.MOUNTED],
      cost: 20,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
  },
  Strathclyde: {
    ...characters,
    bonnedig_j: {
      displayName: 'Bonnedig',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
    },
    priodaur: {
      displayName: 'Priodaur w/javelin',
      availability: RARE,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.FUROR, traits.GUERRILLA],
      cost: 14,
      options: [
      ],
    },
    priodaur_m: {
      displayName: 'Mounted Priodaur',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED],
      cost: 16,
      options: [
      ],
    },
    teulu_j: {
      displayName: 'Teulu w/javelin',
      availability: MILITES,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.GUERRILLA, traits.FUROR],
      cost: 18,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    teulu_m: {
      displayName: 'Mounted Teulu',
      availability: MILITES,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.FUROR, traits.MOUNTED],
      cost: 21,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
  },
  'Scots and Picts': {
    ...characters,
    doer_j: {
      displayName: 'Doer‐Chele w/javelin',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: BUCKLER,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 9,
      options: [
      ],
    },
    doer_b: {
      displayName: 'Doer‐Chele w/bow',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [traits.SKIRMISH_SPECIALIST],
      cost: 8,
      options: [
        OPT_HUNTER,
      ],
    },
    soer_p: {
      displayName: 'Soer‐chele (Picts)',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: NO_ARMOUR,
      defaultShield: BUCKLER,
      traits: [traits.WALL_OF_SPEARS, traits.THRUST],
      cost: 13,
      options: [
      ],
    },
    soer_a: {
      displayName: 'Soer‐chele (Alba)',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP, traits.FUROR],
      cost: 15,
      options: [
      ],
    },
    toisech_p: {
      displayName: 'Toisech (Picts)',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: NO_ARMOUR,
      defaultShield: BUCKLER,
      traits: [traits.WALL_OF_SPEARS, traits.FUROR, traits.ELUSIVE],
      cost: 18,
      options: [
      ],
    },
    toisech_a: {
      displayName: 'Toisech (Alba)',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: NO_ARMOUR,
      defaultShield: HEAVY_SHIELD,
      traits: [traits.WALL_OF_SPEARS, traits.SHIELD_OVERLAP, traits.FUROR],
      cost: 19,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
    eachraidh: {
      displayName: 'Eachraidh',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [traits.MOUNTED, traits.FUROR],
      cost: 21,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
    },
  },
};

export default darkAge;
