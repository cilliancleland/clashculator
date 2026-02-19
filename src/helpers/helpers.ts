import { Unit, LookupNumber } from './types';

import {
  SAVE_MODS,
  HALF_BARDING,
  BUCKLER,
} from './constants';
import traits from './traits';

const importedSaveMods: LookupNumber = SAVE_MODS;

function shuffle(inArray:Array<number>):Array<number> {
  const array = [...inArray];
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function calcSaveNumber(unit: Unit):number {
  let save = 7;
  const shield: string = unit.upgradedShield ? unit.upgradedShield : unit.defaultShield;
  const barding: string | undefined = unit.upgradedBarding
    ? unit.upgradedBarding
    : unit.defaultBarding;
  const armour: string = unit.upgradedArmour ? unit.upgradedArmour : unit.defaultBody;
  if (armour) {
    save -= importedSaveMods[armour as keyof LookupNumber];
  }
  if (shield) {
    save -= importedSaveMods[shield as keyof LookupNumber];
  }
  if (barding) {
    save -= importedSaveMods[barding as keyof LookupNumber];
  }
  return save;
}

function calcSaveSymbol(unit: Unit): string {
  const shield = unit.upgradedShield ? unit.upgradedShield : unit.defaultShield;
  const barding = unit.upgradedBarding ? unit.upgradedBarding : unit.defaultBarding;
  let symbol = '+';
  if (shield === BUCKLER || barding === HALF_BARDING) {
    symbol = '*';
  }
  return symbol;
}

function numDeploymentCounters(unit: Unit): number {
  if (unit.availability === 'character') {
    return 0;
  }
  const save = calcSaveNumber(unit);
  const mounted = unit.traits.indexOf(traits.MOUNTED) > 1;

  if ((save > 4 && mounted) || save > 5) {
    return 2;
  }
  return 1;
}

export {
  shuffle,
  calcSaveNumber,
  calcSaveSymbol,
  numDeploymentCounters,
};
