import {
  NO_SHIELD,
  NO_ARMOUR,
  FULL,
  SHIELD,
  SWORD,
  JAVELIN,
  OPT_UP_CHARIOT,
  characterOptions,
  samuraiCharacterOptions,
  katanaCharacterOptions,
  HIDE_OPTION,
  OPT_COMMAND_ALL,
  OPT_COMMAND_NUMIDIAN,
  OPT_COMMAND_PYRRHIC,
  OPT_COMMAND_PUNIC,
  OPT_COMMAND_SPANISH,
  OPT_COMMAND_ITALIAN,
  OPT_COMMAND_ROMAN,
  OPT_COMMAND_GREEK,
  OPT_COMMAND_GALLIC,
  ENCLOSED,
  OPT_DOWN_ENCLOSED_TO_FULL_ARMOUR,
  ADDITIONAL,
  OPT_TSUKAIBAN,
  OPT_UNPAINTED,
  HEAVY_LANCE,
  BARDING,
  OPT_UP_TEMPERED_STEEL,
  OPT_DOWN_FULL_TO_NO_BARDING,
  OPT_LIGHT_LANCE_EXTRA,
  OPT_UP_HEAVY_WEAPON,
  OPT_UP_POLEARM,
  OPT_UP_FULL_TO_ENCLOSED_ARMOUR,
} from './constants';

import traits from './traits';

const soothsayer = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Soothsayer',
  availability: 'character',
  cost: 15,
  options: [OPT_UNPAINTED],
  defaultWeapon: HIDE_OPTION,
  combat: 0,
  ranged: 0,
  grit: 0,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: NO_SHIELD,
  defaultBody: NO_ARMOUR,
  traits: [traits.OMENS],
};
const characters = {
  lvl5: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level V character',
    availability: 'character',
    cost: 155,
    options: characterOptions,
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 10,
    commandPoints: 5,
    defaultShield: SHIELD,
    defaultBody: FULL,
    traits: ['attacks(3)', 'wounds(3)', traits.IRON_WILL],
  },
  lvl4: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level IV character',
    availability: 'character',
    cost: 125,
    options: characterOptions,
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 10,
    commandPoints: 4,
    defaultShield: SHIELD,
    defaultBody: FULL,
    traits: ['attacks(2)', 'wounds(3)', traits.IRON_WILL],
  },
  lvl3: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level III character',
    availability: 'character',
    cost: 95,
    options: characterOptions,
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 8,
    commandPoints: 3,
    defaultShield: SHIELD,
    defaultBody: FULL,
    traits: ['attacks(2)', 'wounds(2)', traits.IRON_WILL],
  },
  lvl2: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level II character',
    availability: 'character',
    cost: 65,
    options: characterOptions,
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 8,
    commandPoints: 2,
    defaultShield: SHIELD,
    defaultBody: FULL,
    traits: ['wounds(2)', traits.IRON_WILL],
  },
  soothsayer,
};
const sake = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Sake Rations',
  availability: 'character',
  cost: 10,
  options: [],
  defaultWeapon: HIDE_OPTION,
  combat: 0,
  ranged: 0,
  grit: 0,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: NO_SHIELD,
  defaultBody: NO_ARMOUR,
  traits: [traits.SAKE],
};
const geisha = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Geisha',
  availability: 'character',
  cost: 15,
  options: [],
  defaultWeapon: HIDE_OPTION,
  combat: 0,
  ranged: 0,
  grit: 0,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: NO_SHIELD,
  defaultBody: NO_ARMOUR,
  traits: [traits.GEISHA],
};
const assassin = {
  isCharacter: true,
  fixedFigures: 1,
  displayName: 'Assassin',
  availability: 'character',
  cost: 59,
  options: [],
  defaultWeapon: ADDITIONAL,
  combat: 3,
  ranged: 5,
  grit: 3,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: NO_SHIELD,
  defaultBody: NO_ARMOUR,
  traits: [
    'attacks(2)',
    traits.INDEPENDENT,
    traits.PARRY_OFF,
    traits.ASSASSIN,
    traits.YOJI,
    traits.DEADLY_STRIKE,
  ],
};
const masterAss = {
  isCharacter: true,
  fixedFigures: 1,
  displayName: 'Master Assassin',
  availability: 'character',
  cost: 89,
  options: [],
  defaultWeapon: ADDITIONAL,
  combat: 3,
  ranged: 5,
  grit: 3,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: NO_SHIELD,
  defaultBody: NO_ARMOUR,
  traits: [
    'attacks(3)',
    'wounds(2)',
    traits.INDEPENDENT,
    traits.PARRY_OFF,
    traits.ASSASSIN,
    traits.YOJI,
    traits.DEADLY_STRIKE,
  ],
};
const shrine = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Buddhist Shrine',
  availability: 'character',
  cost: 10,
  options: [],
  defaultWeapon: HIDE_OPTION,
  combat: 0,
  ranged: 0,
  grit: 0,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: NO_SHIELD,
  defaultBody: NO_ARMOUR,
  traits: [traits.SHRINE],
};
const families = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Supporting Families',
  availability: 'character',
  cost: 15,
  options: [],
  defaultWeapon: HIDE_OPTION,
  combat: 0,
  ranged: 0,
  grit: 0,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: NO_SHIELD,
  defaultBody: NO_ARMOUR,
  traits: [traits.FAMILY],
};

const chariotRider = {
  dontCountForBreak: true,
  isCharacter: true,
  fixedFigures: 1,
  displayName: 'Chariot Rider',
  availability: 'character',
  cost: 52,
  options: characterOptions,
  defaultWeapon: JAVELIN,
  combat: 4,
  ranged: 4,
  grit: 3,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: SHIELD,
  defaultBody: FULL,
  traits: [
    'wounds(2)',
    traits.IRON_WILL,
    traits.INDEPENDENT,
    traits.CHARIOT,
  ],
};
const charioteer = {
  dontCountForBreak: true,
  isCharacter: true,
  fixedFigures: 1,
  displayName: 'Charioteer',
  availability: 'character',
  cost: 75,
  options: [OPT_DOWN_ENCLOSED_TO_FULL_ARMOUR],
  defaultWeapon: JAVELIN,
  combat: 4,
  ranged: 4,
  grit: 3,
  commandRange: 0,
  commandPoints: 0,
  defaultShield: SHIELD,
  defaultBody: ENCLOSED,
  traits: ['wounds(2)', traits.IRON_WILL, traits.INDEPENDENT],
};

function charactersWithAbilities(nation) {
  const ret = JSON.parse(JSON.stringify(characters));
  const nationalOptions = {
    numidian: OPT_COMMAND_NUMIDIAN,
    pyrric: OPT_COMMAND_PYRRHIC,
    punic: OPT_COMMAND_PUNIC,
    spanish: OPT_COMMAND_SPANISH,
    italian: OPT_COMMAND_ITALIAN,
    roman: OPT_COMMAND_ROMAN,
    greek: OPT_COMMAND_GREEK,
    gallic: OPT_COMMAND_GALLIC,
  };
  ret.lvl5.options = [...ret.lvl5.options, OPT_COMMAND_ALL, nationalOptions[nation]];
  ret.lvl4.options = [...ret.lvl4.options, OPT_COMMAND_ALL, nationalOptions[nation]];
  ret.lvl3.options = [...ret.lvl3.options, OPT_COMMAND_ALL, nationalOptions[nation]];
  ret.lvl2.options = [...ret.lvl2.options, OPT_COMMAND_ALL, nationalOptions[nation]];
  return ret;
}

function samuraiCharacters() {
  let ret = JSON.parse(JSON.stringify(characters));
  Object.getOwnPropertyNames(ret).forEach((key) => {
    ret[key].defaultShield = NO_SHIELD;
    ret[key].defaultBody = ENCLOSED;
    ret[key].traits.push(traits.HONOURABLE);
    ret[key].traits.push(traits.OLD_WAYS);
    ret[key].options = samuraiCharacterOptions;
    ret[key].cost += 3;
  });
  ret = {
    ...ret,
    assassin,
  };
  return ret;
}

function katanaCharacters() {
  let ret = JSON.parse(JSON.stringify(characters));
  Object.getOwnPropertyNames(ret).forEach((key) => {
    ret[key].defaultShield = NO_SHIELD;
    ret[key].defaultBody = FULL;
    ret[key].options = katanaCharacterOptions;
    ret[key].cost -= 1;
  });
  ret = {
    ...ret,
    assassin,
  };
  return ret;
}

function charactersWithChariots(nation) {
  const ret = nation
    ? JSON.parse(JSON.stringify(charactersWithAbilities(nation)))
    : JSON.parse(JSON.stringify(characters));
  ret.lvl5.options = [...ret.lvl5.options, OPT_UP_CHARIOT];
  ret.lvl4.options = [...ret.lvl4.options, OPT_UP_CHARIOT];
  ret.lvl3.options = [...ret.lvl3.options, OPT_UP_CHARIOT];
  ret.lvl2.options = [...ret.lvl2.options, OPT_UP_CHARIOT];
  return ret;
}

function charactersWithFamilies() {
  const ret = JSON.parse(JSON.stringify(characters));
  delete ret.soothsayer;
  ret.families = families;
  return ret;
}

function addTsukaiban(japanCharacters) {
  const ret = JSON.parse(JSON.stringify(japanCharacters));
  ret.lvl5.options = [...ret.lvl5.options, OPT_TSUKAIBAN];
  ret.lvl4.options = [...ret.lvl4.options, OPT_TSUKAIBAN];
  return ret;
}
const condCharacters = {
  lvl5: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 5 Highborn Lord',
    availability: 'character',
    cost: 165,
    options: [
      ...characterOptions,
      OPT_UP_TEMPERED_STEEL,
      OPT_DOWN_FULL_TO_NO_BARDING,
    ],
    defaultWeapon: HEAVY_LANCE,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 10,
    commandPoints: 5,
    defaultShield: NO_SHIELD,
    defaultBody: ENCLOSED,
    defaultBarding: BARDING,
    traits: [
      'attacks(3)',
      'wounds(3)',
      traits.EXTRA_MACE,
      traits.IRON_WILL,
      traits.MOUNTED,
      traits.NOBLE_DISDAIN,
      traits.NOBLE_BORN,
    ],
  },
  lvl4: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 4 Noble Knight',
    availability: 'character',
    cost: 135,
    options: [
      ...characterOptions,
      OPT_UP_TEMPERED_STEEL,
      OPT_DOWN_FULL_TO_NO_BARDING,
      OPT_DOWN_ENCLOSED_TO_FULL_ARMOUR,
    ],
    defaultWeapon: HEAVY_LANCE,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 10,
    commandPoints: 4,
    defaultShield: NO_SHIELD,
    defaultBody: ENCLOSED,
    defaultBarding: BARDING,
    traits: [
      'attacks(2)',
      'wounds(3)',
      traits.EXTRA_MACE,
      traits.IRON_WILL,
      traits.MOUNTED,
      traits.NOBLE_DISDAIN,
      traits.NOBLE_BORN,
    ],
  },
  lvl3: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 3 Captain',
    availability: 'character',
    cost: 94,
    options: [
      ...characterOptions,
      OPT_UP_TEMPERED_STEEL,
      OPT_LIGHT_LANCE_EXTRA,
      OPT_UP_HEAVY_WEAPON,
      OPT_UP_POLEARM,
    ],
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 8,
    commandPoints: 3,
    defaultShield: NO_SHIELD,
    defaultBody: FULL,
    traits: [
      'attacks(2)',
      'wounds(2)',
      traits.IRON_WILL,
    ],
  },
  lvl2: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 2 Sergeant',
    availability: 'character',
    cost: 64,
    options: [
      ...characterOptions,
      OPT_UP_TEMPERED_STEEL,
      OPT_LIGHT_LANCE_EXTRA,
      OPT_UP_HEAVY_WEAPON,
      OPT_UP_POLEARM,
    ],
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 8,
    commandPoints: 2,
    defaultShield: NO_SHIELD,
    defaultBody: FULL,
    traits: [
      'attacks(1)',
      'wounds(2)',
      traits.IRON_WILL,
    ],
  },
  cond_lvl5: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 5 General Condottiere',
    availability: 'character',
    cost: 156,
    options: [
      ...characterOptions,
      OPT_UP_FULL_TO_ENCLOSED_ARMOUR,
      OPT_UP_TEMPERED_STEEL,
      OPT_DOWN_FULL_TO_NO_BARDING,
    ],
    defaultWeapon: HEAVY_LANCE,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 10,
    commandPoints: 5,
    defaultShield: NO_SHIELD,
    defaultBody: FULL,
    defaultBarding: BARDING,
    traits: [
      'attacks(3)',
      'wounds(3)',
      traits.IRON_WILL,
      traits.GOLD_NOT_GLORY,
    ],
  },
  cond_lvl4: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 4 Condottiere',
    availability: 'character',
    cost: 126,
    options: [
      ...characterOptions,
      OPT_UP_TEMPERED_STEEL,
      OPT_UP_FULL_TO_ENCLOSED_ARMOUR,
      OPT_DOWN_FULL_TO_NO_BARDING,
      OPT_DOWN_ENCLOSED_TO_FULL_ARMOUR,
    ],
    defaultWeapon: HEAVY_LANCE,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 10,
    commandPoints: 4,
    defaultShield: NO_SHIELD,
    defaultBody: FULL,
    defaultBarding: BARDING,
    traits: [
      'attacks(2)',
      'wounds(3)',
      traits.IRON_WILL,
      traits.GOLD_NOT_GLORY,
    ],
  },
  cond_lvl3: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 3 Condotta Captain',
    availability: 'character',
    cost: 95,
    options: [
      ...characterOptions,
      OPT_UP_FULL_TO_ENCLOSED_ARMOUR,
      OPT_LIGHT_LANCE_EXTRA,
      OPT_UP_HEAVY_WEAPON,
      OPT_UP_POLEARM,
    ],
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 8,
    commandPoints: 3,
    defaultShield: NO_SHIELD,
    defaultBody: FULL,
    traits: [
      'attacks(2)',
      'wounds(2)',
      traits.IRON_WILL,
    ],
  },
  cond_lvl2: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level 2 Condotta Sergeant',
    availability: 'character',
    cost: 65,
    options: [
      ...characterOptions,
      OPT_UP_TEMPERED_STEEL,
      OPT_LIGHT_LANCE_EXTRA,
      OPT_UP_HEAVY_WEAPON,
      OPT_UP_POLEARM,
    ],
    defaultWeapon: SWORD,
    combat: 3,
    ranged: 5,
    grit: 3,
    commandRange: 8,
    commandPoints: 2,
    defaultShield: NO_SHIELD,
    defaultBody: FULL,
    traits: [
      'attacks(1)',
      'wounds(2)',
      traits.IRON_WILL,
    ],
  },
};
export {
  characters,
  charactersWithAbilities,
  charactersWithChariots,
  charactersWithFamilies,
  katanaCharacters,
  samuraiCharacters,
  addTsukaiban,
  condCharacters,
  masterAss,
  chariotRider,
  charioteer,
  sake,
  geisha,
  shrine,
};
