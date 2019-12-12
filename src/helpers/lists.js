/* eslint-disable no-undef */
import {
  NO_SHIELD,
  NO_ARMOUR,
  FULL,
  PARTIAL,
  SHIELD,
  HEAVY_SHIELD,
  THROWING,
  THRUSTING,
  CAVALRY_SPEAR,
  LONG_SPEAR,
  JAVELIN,
  CAVALRY_JAVELIN,
  SLING,
  BOW,
  SWORD,
  OPT_BUCKLER,
  OPT_DOWN_NO_ARMOUR,
  OPT_DOWN_PARTIAL_ARMOUR,
  OPT_UP_PARTIAL_ARMOUR,
  OPT_UP_FULL_ARMOUR,
  OPT_UPGRADE_CAVALRY_JAVELIN,
  OPT_DOWN_HEAVY_SHIELD,
  OPT_CHARGING,
  characterOptions,
} from './constants';

const lists = {
  Samnite: {
    lvl5: {
      isCharacter: true,
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
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(3)', 'wounds(3)', 'Iron Will'],
    },
    lvl4: {
      isCharacter: true,
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
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(2)', 'wounds(3)', 'Iron Will'],
    },
    lvl3: {
      isCharacter: true,
      displayName: 'Level III leader',
      availability: 'leader',
      cost: 95,
      options: characterOptions,
      defaultWeapon: SWORD,
      combat: 3,
      ranged: 5,
      grit: 3,
      commandRange: 8,
      commandPoints: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(2)', 'wounds(2)', 'Iron Will'],
    },
    lv2: {
      isCharacter: true,
      displayName: 'Level II leader',
      availability: 'leader',
      cost: 65,
      options: characterOptions,
      defaultWeapon: SWORD,
      combat: 3,
      ranged: 5,
      grit: 3,
      commandRange: 10,
      commandPoints: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['wounds(2)', 'Iron Will'],
    },
    soothsayer: {
      isCharacter: true,
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
      traits: ['luck'],
    },
    javelinmen: {
      displayName: 'Javelin men',
      availability: 'civis',
      traits: ['skirmish specialist'],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
      defaultWeapon: JAVELIN,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    hoplites: {
      displayName: 'Campanian Allied Hoplites',
      availability: 'civis',
      traits: ['shield overlap', 'wall of spears', 'offensive spear', 'allies'],
      cost: 18,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
      defaultWeapon: THRUSTING,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: HEAVY_SHIELD,
      defaultBody: PARTIAL,
    },
    tribesmen: {
      displayName: 'Tribesmen',
      availability: 'civis',
      traits: [''],
      cost: 12,
      options: [
      ],
      defaultWeapon: THRUSTING,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    samnite: {
      displayName: 'Samnite Warriors',
      availability: 'civis',
      traits: ['shield overlap', 'wall of spears', 'guerrilla'],
      cost: 19,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: HEAVY_SHIELD,
      defaultBody: PARTIAL,
    },
    veterans: {
      displayName: 'Veteran Samnite Warriors',
      availability: 'milites',
      traits: ['shield overlap', 'wall of spears', 'guerrilla'],
      cost: 23,
      options: [
        OPT_UP_FULL_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: HEAVY_SHIELD,
      defaultBody: PARTIAL,
    },
    slingers: {
      displayName: 'Slingers',
      availability: 'milites',
      traits: ['skirmish specialist'],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
      defaultWeapon: SLING,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    cavalry: {
      displayName: 'Samnite Cavalry',
      availability: 'rare',
      traits: ['mounted'],
      cost: 8,
      options: [
        OPT_CHARGING,
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
      defaultWeapon: SLING,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultShield: SHIELD,
      defaultBody: FULL,
    },
  },
  Roman: {
    lvl5: {
      isCharacter: true,
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
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(3)', 'wounds(3)', 'Iron Will'],
    },
    lvl4: {
      isCharacter: true,
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
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(2)', 'wounds(3)', 'Iron Will'],
    },
    lvl3: {
      isCharacter: true,
      displayName: 'Level III leader',
      availability: 'leader',
      cost: 95,
      options: characterOptions,
      defaultWeapon: SWORD,
      combat: 3,
      ranged: 5,
      grit: 3,
      commandRange: 8,
      commandPoints: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(2)', 'wounds(2)', 'Iron Will'],
    },
    lv2: {
      isCharacter: true,
      displayName: 'Level II leader',
      availability: 'leader',
      cost: 65,
      options: characterOptions,
      defaultWeapon: SWORD,
      combat: 3,
      ranged: 5,
      grit: 3,
      commandRange: 10,
      commandPoints: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['wounds(2)', 'Iron Will'],
    },
    soothsayer: {
      isCharacter: true,
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
      traits: ['luck'],
    },
    leves: {
      displayName: 'Leves',
      availability: 'civis',
      traits: ['skirmish specialist'],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
      defaultWeapon: JAVELIN,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    velites: {
      displayName: 'Velites',
      availability: 'civis',
      traits: ['skirmish specialist'],
      cost: 13,
      options: [
      ],
      defaultWeapon: JAVELIN,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: SHIELD,
      defaultBody: NO_ARMOUR,
    },
    raw: {
      displayName: 'Raw Legionnaries',
      availability: 'civis',
      traits: ['shield overlap', 'wall of spears'],
      cost: 14,
      options: [
        OPT_UP_PARTIAL_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    samnite: {
      displayName: 'Samnite Allies',
      availability: 'civis',
      traits: ['shield overlap', 'wall of spears', 'guerrilla', 'allies'],
      cost: 19,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: HEAVY_SHIELD,
      defaultBody: PARTIAL,
    },
    hastati: {
      displayName: 'Hastati',
      availability: 'civis',
      traits: ['shield overlap', 'wall of spears', 'impulsum', 'drilled'],
      cost: 20,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: HEAVY_SHIELD,
      defaultBody: PARTIAL,
    },
    principes: {
      displayName: 'Principes',
      availability: 'milites',
      traits: ['shield overlap', 'wall of spears', 'impulsum', 'drilled'],
      cost: 25,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
    },
    tirarii: {
      displayName: 'tirarii',
      availability: 'rare',
      traits: ['shield overlap', 'wall of spears', 'offensive spear', 'fidelis', 'drilled'],
      cost: 24,
      options: [],
      defaultWeapon: THRUSTING,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
    },
    extraordinarii: {
      displayName: 'Italian Extraordinarii',
      availability: 'rare',
      traits: ['shield overlap', 'wall of spears', 'guerilla tactics', 'allies'],
      cost: 24,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: HEAVY_SHIELD,
      defaultBody: PARTIAL,
    },
    equites: {
      displayName: 'Equites or Alae',
      availability: 'rare',
      traits: ['mounted', 'impetus'],
      cost: 23,
      options: [
        OPT_UPGRADE_CAVALRY_JAVELIN,
      ],
      defaultWeapon: CAVALRY_SPEAR,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: SHIELD,
      defaultBody: FULL,
    },
    cretan: {
      displayName: 'Cretan Archers',
      availability: 'rare',
      traits: ['skirmish specialist', 'aimed shot', 'allies'],
      cost: 17,
      options: [
        OPT_BUCKLER,
      ],
      defaultWeapon: BOW,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
    },
  },
  Carthaginian: {
    lvl5: {
      isCharacter: true,
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
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(3)', 'wounds(3)', 'Iron Will'],
    },
    lvl4: {
      isCharacter: true,
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
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(2)', 'wounds(3)', 'Iron Will'],
    },
    lvl3: {
      isCharacter: true,
      displayName: 'Level III leader',
      availability: 'leader',
      cost: 95,
      options: characterOptions,
      defaultWeapon: SWORD,
      combat: 3,
      ranged: 5,
      grit: 3,
      commandRange: 8,
      commandPoints: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['attacks(2)', 'wounds(2)', 'Iron Will'],
    },
    lv2: {
      isCharacter: true,
      displayName: 'Level II leader',
      availability: 'leader',
      cost: 65,
      options: characterOptions,
      defaultWeapon: SWORD,
      combat: 3,
      ranged: 5,
      grit: 3,
      commandRange: 10,
      commandPoints: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
      traits: ['wounds(2)', 'Iron Will'],
    },
    soothsayer: {
      isCharacter: true,
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
      traits: ['luck'],
    },
    javelinmen: {
      displayName: 'Javelin men',
      availability: 'civis',
      traits: ['skirmish specialist'],
      cost: 8,
      options: [
        OPT_BUCKLER,
      ],
      defaultWeapon: JAVELIN,
      combat: 5,
      ranged: 5,
      grit: 5,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    citizen: {
      displayName: 'Punic Citizens Levy',
      availability: 'civis',
      traits: ['shield overlap', 'wall of spears', 'offensive spear'],
      cost: 13,
      options: [
        OPT_DOWN_HEAVY_SHIELD,
      ],
      defaultWeapon: LONG_SPEAR,
      combat: 4,
      ranged: 5,
      grit: 5,
      defaultShield: HEAVY_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    infantry: {
      displayName: 'Punic Infantry',
      availability: 'civis',
      traits: ['shield overlap', 'wall of spears', 'offensive spear', 'drilled'],
      cost: 18,
      options: [
      ],
      defaultWeapon: LONG_SPEAR,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: HEAVY_SHIELD,
      defaultBody: PARTIAL,
    },
    scutarii: {
      displayName: 'Iberian Scutarii',
      availability: 'civis',
      traits: ['wall of spears', 'guerrilla ', 'impulsum', 'determined', 'allies'],
      cost: 18,
      options: [
      ],
      defaultWeapon: THROWING,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: HEAVY_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    veteran: {
      displayName: 'Veteran Punic Infantry',
      availability: 'milites',
      traits: ['shield overlap', 'wall of spears', 'offensive spear', 'drilled'],
      cost: 23,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
      defaultWeapon: LONG_SPEAR,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
    },
    romanised: {
      displayName: 'Romanized Veteran Infantry',
      availability: 'milites',
      traits: ['shield overlap', 'wall of spears', 'drilled'],
      cost: 24,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
      defaultWeapon: THROWING,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: HEAVY_SHIELD,
      defaultBody: FULL,
    },
    numidian: {
      displayName: 'Numidian light cavalry',
      availability: 'milites',
      traits: ['mounted', 'marauders'],
      cost: 17,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
      defaultWeapon: JAVELIN,
      combat: 4,
      ranged: 5,
      grit: 4,
      defaultShield: SHIELD,
      defaultBody: NO_ARMOUR,
    },
    iberianCav: {
      displayName: 'Iberian noble cavalry',
      availability: 'milites',
      traits: ['mounted', 'impetus', 'allies', 'extra equipment-(javelin)'],
      cost: 25,
      options: [
        OPT_DOWN_NO_ARMOUR,
      ],
      defaultWeapon: CAVALRY_JAVELIN,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: SHIELD,
      defaultBody: PARTIAL,
    },
    balearic: {
      displayName: 'Balearic slingers',
      availability: 'rare',
      traits: ['skirmish specialist', 'sling specialist', 'allies'],
      cost: 17,
      options: [
        OPT_BUCKLER,
      ],
      defaultWeapon: SLING,
      combat: 4,
      ranged: 4,
      grit: 3,
      defaultShield: NO_SHIELD,
      defaultBody: NO_ARMOUR,
    },
    punicCav: {
      displayName: 'Punic cavalry',
      availability: 'rare',
      traits: ['mounted', 'impetus', 'extra equipment-(javelin)'],
      cost: 26,
      options: [
        OPT_DOWN_PARTIAL_ARMOUR,
      ],
      defaultWeapon: CAVALRY_JAVELIN,
      combat: 3,
      ranged: 5,
      grit: 3,
      defaultShield: SHIELD,
      defaultBody: FULL,
    },
  },
};

export default lists;
