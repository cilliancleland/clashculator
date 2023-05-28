import {
  characters,
} from './characters';

import {
  warlord,
  lord,
  hero,
  champion,
  sorcerer,
  deathLord,
  charnelWarrior,
  eldark,
  skogarmadr,
  necrach,
  undeadSorcerer,
  consul,
  centurion,
  optio,
  prince,
  kinlord,
  earl,
  kinthane,
  elvenMage,
  cunningWizard,
  wiseWizard,
  orcShaman,
} from './arcaneCharacters';

import {
  CIVIS,
  MILITES,
  RARE,
  NO_SHIELD,
  SHIELD,
  ENCLOSED,
  PARTIAL,
  FULL,
  MIXED,
  SWORD,
  BOW,
  THRUSTING,
  POLEARMS,
  HEAVY_WPN,
  WAR_BOW,
  NATURAL_WEAPONS,
  NO_ARMOUR,
  XBOW,
  JAVELIN,
  THROWING,
  CAVALRY_SPEAR,
  REANIMATED,
  RETURNED,
  HEAVY_SHIELD,
  PIKE,
} from './constants';

import traits from './traits';

const arcane = {
  'Dark Dwarfs': {
    warlord,
    lord,
    hero,
    champion,
    sorcerer,
    bone: {
      displayName: 'Bone Heads',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.DVERGER,
      ],
      cost: 9,
      options: [
      ],
    },
    bondi: {
      displayName: 'Dvergr Bondi Civis',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.SCHILTRON,
        traits.STRIKE,
        traits.DVERGER,
      ],
      cost: 14,
      options: [
      ],
    },
    raiders: {
      displayName: 'Raiders',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.COMBINED_ARMS,
        traits.SHIELDS_UP,
        traits.DVERGER,
      ],
      cost: 15,
      options: [
      ],
    },
    gobbos: {
      displayName: 'Goblin allies',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.WALL_OF_SPEARS,
        traits.SHIELDS_UP,
        traits.ALLIES,
        traits.STRIKE,
      ],
      cost: 14,
      options: [
      ],
    },
    archers: {
      displayName: 'Archers',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.DVERGER,
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 14,
      options: [
      ],
    },
    schiltron: {
      displayName: 'Schiltron Infantry',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: POLEARMS,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SCHILTRON,
        traits.STRIKE,
        traits.DVERGER,
      ],
      cost: 20,
      options: [
      ],
    },
    draugr: {
      displayName: 'Draugr',
      availability: RARE,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: MIXED,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.UNDEAD,
        traits.OVERWHELM,
        traits.SELF_MOTIVATED,
      ],
      cost: 14,
      options: [
      ],
    },
    heads: {
      displayName: 'Death Heads',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.SCHILTRON,
        traits.STRIKE,
        traits.DVERGER,
      ],
      cost: 20,
      options: [
      ],
    },
    ulfhednar: {
      displayName: 'Ulfhednar',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: MIXED,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.COMBINED_ARMS,
        traits.FUROR,
        traits.IRA,
        traits.DVERGER,
      ],
      cost: 18,
      options: [
      ],
    },
  },
  'Raiders from the North': {
    warlord,
    lord,
    hero,
    champion,
    sorcerer,
    thralls: {
      displayName: 'Thralls',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 9,
      options: [
      ],
    },
    bondsmen: {
      displayName: 'Bondsmen',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.SCHILTRON,
        traits.STRIKE,
      ],
      cost: 14,
      options: [
      ],
    },
    warriors: {
      displayName: 'Dwarf Warriors',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.COMBINED_ARMS,
        traits.SHIELDWALL,
        traits.DVERGER,
      ],
      cost: 15,
      options: [
      ],
    },
    schiltron: {
      displayName: 'Dwarf Schiltron Infantry',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: POLEARMS,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SCHILTRON,
        traits.STRIKE,
        traits.DVERGER,
      ],
      cost: 16,
      options: [
      ],
    },
    archers: {
      displayName: 'Bondi Archers',
      availability: MILITES,
      combat: 5,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 10,
      options: [
      ],
    },
    crossbowmen: {
      displayName: 'Crossbowmen',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: XBOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
      ],
      cost: 14,
      options: [
      ],
    },
    dwarfArchers: {
      displayName: 'Dwarf Archers',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.DVERGER,
      ],
      cost: 14,
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
      defaultShield: SHIELD,
      traits: [
        traits.COMBINED_ARMS,
        traits.SHIELDS_UP,
        traits.CUTTHROAT,
      ],
      cost: 20,
      options: [
      ],
    },
    dwarfVet: {
      displayName: 'Dwarf Veteran Infantry',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.SCHILTRON,
        traits.SHIELDWALL,
        traits.STRIKE,
        traits.DVERGER,
      ],
      cost: 21,
      options: [
      ],
    },
    huscarls: {
      displayName: 'Huscarls',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: HEAVY_WPN,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.GUSHING,
        traits.CUTTHROAT,
      ],
      cost: 20,
      options: [
      ],
    },
    companions: {
      displayName: 'Dwarf Companions',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: SWORD,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.HACK,
        traits.SHIELDS_UP,
        traits.DVERGER,
      ],
      cost: 19,
      options: [
      ],
    },
    berserkers: {
      displayName: 'Berserkers',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: MIXED,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.COMBINED_ARMS,
        traits.FUROR,
        traits.IRA,
      ],
      cost: 18,
      options: [
      ],
    },
    outriders: {
      displayName: 'Outriders Rare',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.MOUNTED,
        traits.CHARGE,
        traits.FORM_UP,
      ],
      cost: 22,
      options: [
      ],
    },
  },
  'The Draugr': {
    deathLord,
    charnelWarrior,
    eldark,
    skogarmadr,
    necrach,
    undeadSorcerer,
    humiliated: {
      displayName: 'The Humiliated',
      availability: REANIMATED,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: MIXED,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.UNDEAD,
        traits.OVERWHELM,
      ],
      cost: 10,
      options: [
      ],
    },
    goblinAllies: {
      displayName: 'Goblin allies',
      availability: REANIMATED,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: THROWING,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDS_UP,
        traits.WALL_OF_SPEARS,
        traits.STRIKE,
        traits.ALLIES,
      ],
      cost: 14,
      options: [
      ],
    },
    dishonored: {
      displayName: 'The Dishonored',
      availability: REANIMATED,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.UNDEAD,
        traits.COMBINED_ARMS,
      ],
      cost: 14,
      options: [
      ],
    },
    betrayers: {
      displayName: 'The Betrayers',
      availability: RETURNED,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.UNDEAD,
      ],
      cost: 15,
      options: [
      ],
    },
    doomed: {
      displayName: 'The Doomed & The Shameful',
      availability: RETURNED,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.UNDEAD,
        traits.COMBINED_ARMS,
        traits.SHIELDWALL,
        traits.IMPLACABLE,
      ],
      cost: 20,
      options: [
      ],
    },
    treacherous: {
      displayName: 'The Treacherous & The Ill Favored',
      availability: RETURNED,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THROWING,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.UNDEAD,
        traits.WALL_OF_SPEARS,
        traits.SHIELDWALL,
        traits.DRILLED,
      ],
      cost: 21,
      options: [
      ],
    },
    outlawed: {
      displayName: 'The Outlawed',
      availability: RETURNED,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: HEAVY_WPN,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.UNDEAD,
        traits.GUSHING,
        traits.IMPLACABLE,
      ],
      cost: 20,
      options: [
      ],
    },
    mammoth: {
      displayName: 'Undead Mammoth',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: NATURAL_WEAPONS,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.UNDEAD,
        traits.LARGE_CREATURE,
        traits.BLITZ,
        traits.SIMPLEMINDED,
        traits.NATURAL_ARMOUR_2,
        'wounds(3)',
        'attacks(3)',
      ],
      cost: 60,
      options: [
      ],
    },
  },
  'The Ghosts of Cannae': {
    consul,
    centurion,
    optio,
    skirmishers: {
      displayName: 'The skirmishers',
      availability: REANIMATED,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: JAVELIN,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.UNDEAD,
      ],
      cost: 12,
      options: [
      ],
    },
    first: {
      displayName: 'The First Casualties',
      availability: REANIMATED,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: HEAVY_SHIELD,
      traits: [
        traits.UNDEAD,
        traits.OVERWHELM,
      ],
      cost: 17,
      options: [
      ],
    },
    legion: {
      displayName: 'The Legion',
      availability: RETURNED,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: HEAVY_SHIELD,
      traits: [
        traits.UNDEAD,
        traits.SHIELD_OVERLAP,
        traits.DRILLED,
      ],
      cost: 20,
      options: [
      ],
    },
    triarii: {
      displayName: 'The Dead Triarii',
      availability: RETURNED,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: HEAVY_SHIELD,
      traits: [
        traits.UNDEAD,
        traits.SHIELD_OVERLAP,
        traits.DRILLED,
        traits.OFFENSIVE_SPEAR,
        traits.WALL_OF_SPEARS,
      ],
      cost: 23,
      options: [
      ],
    },
    vengeful: {
      displayName: 'The Vengeful Legionnaires',
      availability: RETURNED,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: MIXED,
      defaultBody: FULL,
      defaultShield: HEAVY_SHIELD,
      traits: [
        traits.UNDEAD,
        traits.COMBINED_ARMS,
        traits.IMPLACABLE,
        traits.SELF_MOTIVATED,
      ],
      cost: 25,
      options: [
      ],
    },
    Equites: {
      displayName: 'The Dead Equites',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.MOUNTED,
        traits.CHARGE,
        traits.UNDEAD,
      ],
      cost: 23,
      options: [
      ],
    },
  },
  'Elven Kingdoms': {
    prince,
    kinlord,
    earl,
    kinthane,
    elvenMage,
    infantry: {
      displayName: 'The Infantry',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.COMBINED_ARMS,
        traits.BUSHMASTER,
      ],
      cost: 14,
      options: [
      ],
    },
    scouts: {
      displayName: 'Scouts',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: WAR_BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.BUSHMASTER,
      ],
      cost: 16,
      options: [
      ],
    },
    archers: {
      displayName: 'Archers',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: WAR_BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.OVERHEAD,
      ],
      cost: 15,
      options: [
      ],
    },
    veteran: {
      displayName: 'Veteran Spearmen',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.WALL_OF_SPEARS,
        traits.OFFENSIVE_SPEAR,
        traits.PRIDE,
        traits.DRILLED,
      ],
      cost: 23,
      options: [
      ],
    },
    veteranArchers: {
      displayName: 'Veteran Archers',
      availability: MILITES,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: WAR_BOW,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.OVERHEAD,
        traits.PRIDE,
        traits.DRILLED,
      ],
      cost: 22,
      options: [
      ],
    },
    veteranInfantry: {
      displayName: 'Veteran Infantry',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: POLEARMS,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.BLADE_WAVE,
        traits.PRIDE,
        traits.STRIKE,
      ],
      cost: 21,
      options: [
      ],
    },
    mountedArchers: {
      displayName: 'Mounted Archers',
      availability: RARE,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: WAR_BOW,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.MOUNTED,
        traits.PRIDE,
      ],
      cost: 24,
      options: [
      ],
    },
    cavalry: {
      displayName: 'Cavalry',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: SWORD,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.MOUNTED,
        traits.PRIDE,
      ],
      cost: 22,
      options: [
      ],
    },
  },
  'Men of The South': {
    ...characters,
    wiseWizard,
    infantry: {
      displayName: 'Citizen Infantry',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.WALL_OF_SPEARS,
      ],
      cost: 16,
      options: [
      ],
    },
    archers: {
      displayName: 'Citizen Archers',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.OVERHEAD,
        traits.DRILLED,
      ],
      cost: 16,
      options: [
      ],
    },
    seasoned: {
      displayName: 'Seasoned Infantry',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.WALL_OF_SPEARS,
        traits.DRILLED,
        traits.OFFENSIVE_SPEAR,
      ],
      cost: 22,
      options: [
      ],
    },
    swords: {
      displayName: 'Sword Fighters',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: SWORD,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.PARRY_OFF,
        traits.SHIELDS_UP,
      ],
      cost: 19,
      options: [
      ],
    },
    rangersBow: {
      displayName: 'Rangers with bow',
      availability: MILITES,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: WAR_BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.SHARPSHOOTER,
      ],
      cost: 20,
      options: [
      ],
    },
    rangers: {
      displayName: 'Rangers',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.COMBINED_ARMS,
      ],
      cost: 18,
      options: [
      ],
    },
    guard: {
      displayName: 'Guard Infantry',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.DRILLED,
        traits.STRIKE,
        traits.WALL_OF_SPEARS,
        traits.STUBBORN,
      ],
      cost: 21,
      options: [
      ],
    },
    guardArchers: {
      displayName: 'Guard Archers',
      availability: RARE,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: BOW,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.OVERHEAD,
        traits.DRILLED,
      ],
      cost: 20,
      options: [
      ],
    },
    cavalry: {
      displayName: 'Cavalry',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.CHARGE,
        traits.FORM_UP,
        traits.WAR_MOUNT,
      ],
      cost: 25,
      options: [
      ],
    },
  },
  'The Men of the Mark': {
    ...characters,
    wiseWizard,
    infantry: {
      displayName: 'Infantry',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SHIELDS_UP,
        traits.COMBINED_ARMS,
      ],
      cost: 15,
      options: [
      ],
    },
    archers: {
      displayName: 'Archers',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 14,
      options: [
      ],
    },
    spearmen: {
      displayName: 'Spearmen',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 3,
      defaultWeapon: THROWING,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.WALL_OF_SPEARS,
        traits.OFFENSIVE_SPEAR,
      ],
      cost: 20,
      options: [
      ],
    },
    cavalry: {
      displayName: 'Cavalry',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.CHARGE,
        traits.MARAUDERS,
        traits.EXTRA_BOW,
      ],
      cost: 27,
      options: [
      ],
    },
    guard: {
      displayName: 'Guard Infantry',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.SHIELDWALL,
        traits.WALL_OF_SPEARS,
        traits.OFFENSIVE_SPEAR,
        traits.PRIDE,
      ],
      cost: 22,
      options: [
      ],
    },
    guardCavalry: {
      displayName: 'Guard Cavalry',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: ENCLOSED,
      defaultShield: SHIELD,
      traits: [
        traits.CHARGE,
        traits.FORM_UP,
        traits.PRIDE,
        traits.WAR_MOUNT,
      ],
      cost: 28,
      options: [
      ],
    },
  },
  'The Army of the Red Eye': {
    ...characters,
    deathLord,
    orcShaman,
    infantry: {
      displayName: 'Orc infantry',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.FUROR,
      ],
      cost: 12,
      options: [
      ],
    },
    archers: {
      displayName: 'Orc archers',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 8,
      options: [
      ],
    },
    season: {
      displayName: 'Seasoned Orc Infantry',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.COMBINED_ARMS,
        traits.FUROR,
      ],
      cost: 15,
      options: [
      ],
    },
    vet: {
      displayName: 'Veteran Orc Infantry',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: POLEARMS,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.CUTTHROAT,
        traits.STRIKE,
      ],
      cost: 20,
      options: [
      ],
    },
    pArchers: {
      displayName: 'Pirate Archers',
      availability: MILITES,
      combat: 5,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.ALLIES,
      ],
      cost: 10,
      options: [
      ],
    },
    pMarines: {
      displayName: 'Pirate Marines',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: POLEARMS,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.CUTTHROAT,
        traits.ALLIES,
      ],
      cost: 14,
      options: [
      ],
    },
    pSwordsmen: {
      displayName: 'Pirate Swordsmen',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: SWORD,
      defaultBody: NO_ARMOUR,
      defaultShield: SHIELD,
      traits: [
        traits.CUTTHROAT,
        traits.PARRY_OFF,
        traits.ALLIES,
      ],
      cost: 13,
      options: [
      ],
    },
    eSpearmen: {
      displayName: 'Eastern Spearmen',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.OFFENSIVE_SPEAR,
        traits.SHIELDWALL,
        traits.WALL_OF_SPEARS,
        traits.ALLIES,
      ],
      cost: 17,
      options: [
      ],
    },
    eArchers: {
      displayName: 'Easter Archers',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.OVERHEAD,
        traits.ALLIES,
      ],
      cost: 15,
      options: [
      ],
    },
    sSpearmen: {
      displayName: 'Southern Spearmen',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: THRUSTING,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SCHILTRON,
        traits.STRIKE,
        traits.ALLIES,
      ],
      cost: 14,
      options: [
      ],
    },
    sArchers: {
      displayName: 'Southern Archers',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.SHARPSHOOTER,
        traits.ALLIES,
      ],
      cost: 16,
      options: [
      ],
    },
    black: {
      displayName: 'Black Guard',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: SWORD,
      defaultBody: FULL,
      defaultShield: HEAVY_SHIELD,
      traits: [
        traits.ROBUR,
        traits.SHIELD_OVERLAP,
        traits.DRILLED,
      ],
      cost: 21,
      options: [
      ],
    },
    wolf: {
      displayName: 'Orc Wolf Riders',
      availability: RARE,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.WAR_MOUNT,
        traits.CUTTHROAT,
        traits.CHARGE,
        traits.EXTRA_BOW,
      ],
      cost: 23,
      options: [
      ],
    },
    dark: {
      displayName: 'Dark Knights',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.CHARGE,
        traits.FORM_UP,
        traits.WAR_MOUNT,
      ],
      cost: 27,
      options: [
      ],
    },
    eCav: {
      displayName: 'Eastern Cavalry',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: SWORD,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.ALLIES,
        traits.WAR_MOUNT,
      ],
      cost: 22,
      options: [
      ],
    },
    sCav: {
      displayName: 'Southern Cavalry',
      availability: RARE,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.EXTRA_BOW,
        traits.CHARGE,
        traits.ALLIES,
        traits.MOUNTED,
      ],
      cost: 24,
      options: [
      ],
    },
    troll: {
      displayName: 'Armored Troll',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: SWORD,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        'wounds(3)',
        'attacks(3)',
        traits.LARGE_CREATURE,
        traits.INDEPENDENT,
        traits.SIMPLEMINDED,
        traits.NATURAL_ARMOUR_2,
      ],
      cost: 63,
      options: [
      ],
    },
  },
  'The Orcs of the White Hand': {
    ...characters,
    cunningWizard,
    orcShaman,
    infantry: {
      displayName: 'Orc infantry',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultWeapon: MIXED,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.FUROR,
      ],
      cost: 12,
      options: [
      ],
    },
    archers: {
      displayName: 'Orc archers',
      availability: CIVIS,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultWeapon: BOW,
      defaultBody: NO_ARMOUR,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
      ],
      cost: 8,
      options: [
      ],
    },
    pikemen: {
      displayName: 'Greater Orc Pikemen',
      availability: CIVIS,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: PIKE,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.STRIKE,
        traits.PIKE_SPECIALIST,
        traits.WALL_OF_SPEARS,
      ],
      cost: 16,
      options: [
      ],
    },
    crossbow: {
      displayName: 'Greater Orc Crossbow',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: XBOW,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
      ],
      cost: 15,
      options: [
      ],
    },
    scouts: {
      displayName: 'Greater Orc Scouts',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: SWORD,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.ENDURANCE,
        traits.ROBUR,
      ],
      cost: 14,
      options: [
      ],
    },
    scoutsBow: {
      displayName: 'Greater Orc Scouts Bow',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: BOW,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.SKIRMISH_SPECIALIST,
        traits.ENDURANCE,
        traits.ROBUR,
      ],
      cost: 16,
      options: [
      ],
    },
    gInfantry: {
      displayName: 'Greater Orc Infantry',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: SWORD,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.ROBUR,
        traits.ENDURANCE,
        traits.SHIELDS_UP,
      ],
      cost: 15,
      options: [
      ],
    },
    wolf: {
      displayName: 'Orc Wolf Riders',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: CAVALRY_SPEAR,
      defaultBody: PARTIAL,
      defaultShield: SHIELD,
      traits: [
        traits.WAR_MOUNT,
        traits.CUTTHROAT,
        traits.CHARGE,
        traits.EXTRA_BOW,
      ],
      cost: 23,
      options: [
      ],
    },
    barbarians: {
      displayName: 'Allied Barbarians',
      availability: MILITES,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultWeapon: HEAVY_WPN,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.GUSHING,
        traits.CUTTHROAT,
        traits.ALLIES,
      ],
      cost: 16,
      options: [
      ],
    },
    vet: {
      displayName: 'Greater Orc Veteran',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultWeapon: SWORD,
      defaultBody: FULL,
      defaultShield: SHIELD,
      traits: [
        traits.ROBUR,
        traits.SHIELDS_UP,
        traits.PARRY_OFF,
      ],
      cost: 20,
      options: [
      ],
    },
    berserkers: {
      displayName: 'Berserkers',
      availability: MILITES,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: HEAVY_WPN,
      defaultBody: FULL,
      defaultShield: NO_SHIELD,
      traits: [
        traits.ROBUR,
        traits.IRA,
      ],
      cost: 16,
      options: [
      ],
    },
    troll: {
      displayName: 'Armored Troll',
      availability: RARE,
      combat: 3,
      ranged: 5,
      grit: 4,
      defaultWeapon: SWORD,
      defaultBody: PARTIAL,
      defaultShield: NO_SHIELD,
      traits: [
        'wounds(3)',
        'attacks(3)',
        traits.LARGE_CREATURE,
        traits.INDEPENDENT,
        traits.SIMPLEMINDED,
        traits.NATURAL_ARMOUR_2,
      ],
      cost: 63,
      options: [
      ],
    },
  },
};

export default arcane;
