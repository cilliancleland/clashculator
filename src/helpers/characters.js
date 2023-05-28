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
} from './constants';

import traits from './traits';

const soothsayer = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Soothsayer',
  availability: 'leader',
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
  soothsayer,
};
const sake = {
  isCharacter: true,
  fixedFigures: 0,
  displayName: 'Sake Rations',
  availability: 'leader',
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
  traits: [traits.GEISHA],
};
const assassin = {
  isCharacter: true,
  fixedFigures: 1,
  displayName: 'Assassin',
  availability: 'leader',
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
  availability: 'leader',
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
  availability: 'leader',
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

export {
  characters,
  charactersWithAbilities,
  charactersWithChariots,
  charactersWithFamilies,
  katanaCharacters,
  samuraiCharacters,
  addTsukaiban,
  masterAss,
  chariotRider,
  charioteer,
  sake,
  geisha,
  shrine,
};
