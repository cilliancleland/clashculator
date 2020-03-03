import {
  NO_SHIELD,
  NO_ARMOUR,
  FULL,
  SHIELD,
  SWORD,
  OPT_UP_CHARIOT,
  characterOptions,
} from './constants';

import {
  TRAIT_IRON_WILL,
  TRAIT_OMENS,
} from './traits';

const characters = {
  lvl5: {
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
    traits: ['attacks(3)', 'wounds(3)', TRAIT_IRON_WILL],
  },
  lvl4: {
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
    traits: ['attacks(2)', 'wounds(3)', TRAIT_IRON_WILL],
  },
  lvl3: {
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
    traits: ['attacks(2)', 'wounds(2)', TRAIT_IRON_WILL],
  },
  lvl2: {
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
    traits: ['wounds(2)', TRAIT_IRON_WILL],
  },
  soothsayer: {
    isCharacter: true,
    fixedFigures: 0,
    displayName: 'Soothsayer',
    availability: 'leader',
    cost: 15,
    options: [],
    combat: 0,
    ranged: 0,
    grit: 0,
    commandRange: 0,
    commandPoints: 0,
    defaultShield: NO_SHIELD,
    defaultBody: NO_ARMOUR,
    traits: [TRAIT_OMENS],
  },
};

function charactersWithChariots() {
  const ret = JSON.parse(JSON.stringify(characters));
  ret.lvl5.options = [...ret.lvl5.options, OPT_UP_CHARIOT];
  ret.lvl4.options = [...ret.lvl4.options, OPT_UP_CHARIOT];
  ret.lvl3.options = [...ret.lvl3.options, OPT_UP_CHARIOT];
  ret.lvl2.options = [...ret.lvl2.options, OPT_UP_CHARIOT];
  return ret;
}

export {
  characters,
  charactersWithChariots,
};
