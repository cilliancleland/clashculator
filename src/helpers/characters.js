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
  OPT_DOWN_ENCLOSED_TO_FULL,
} from './constants';

import traits from './traits';

const characters = {
  lvl5: {
    dontCountForBreak: true,
    isCharacter: true,
    fixedFigures: 1,
    displayName: 'Level V leader',
    availability: 'leader',
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
    displayName: 'Level IV leader',
    availability: 'leader',
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
    displayName: 'Level III leader',
    availability: 'leader',
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
    displayName: 'Level II leader',
    availability: 'leader',
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
  soothsayer: {
    isCharacter: true,
    fixedFigures: 0,
    displayName: 'Soothsayer',
    availability: 'leader',
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
    traits: [traits.OMENS],
  },
};

const families = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Supporting Families',
  availability: 'leader',
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
  availability: 'leader',
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
  availability: 'leader',
  cost: 75,
  options: [OPT_DOWN_ENCLOSED_TO_FULL],
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
  const ret = JSON.parse(JSON.stringify(characters));
  delete ret.soothsayer;
  Object.getOwnPropertyNames(ret).forEach((key) => {
    // console.log(`${key}:${obj[key]}`);
    ret[key].defaultShield = NO_SHIELD;
    ret[key].options = samuraiCharacterOptions;
  });
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

export {
  characters,
  charactersWithAbilities,
  charactersWithChariots,
  charactersWithFamilies,
  samuraiCharacters,
  chariotRider,
  charioteer,
};
