import {
  SAVE_MODS,
  HALF_BARDING,
  OPT_BUCKLER,
} from './constants';
import traits from './traits';

function shuffle(inArray) {
  const array = inArray;
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

function calcSaveNumber(unit) {
  let save = 7;
  const shield = unit.upgradedShield ? unit.upgradedShield : unit.defaultShield;
  const barding = unit.upgradedBarding ? unit.upgradedBarding : unit.defaultBarding;
  const armour = unit.upgradedArmour ? unit.upgradedArmour : unit.defaultBody;
  if (armour) {
    save -= SAVE_MODS[armour];
  }
  if (shield) {
    save -= SAVE_MODS[shield];
  }
  if (barding) {
    save -= SAVE_MODS[barding];
  }
  return save;
}

function calcSaveSymbol(unit) {
  const shield = unit.upgradedShield ? unit.upgradedShield : unit.defaultShield;
  const barding = unit.upgradedBarding ? unit.upgradedBarding : unit.defaultBarding;
  let symbol = '+';
  if (shield === OPT_BUCKLER || barding === HALF_BARDING) {
    symbol = '*';
  }
  return symbol;
}

function numDeploymentCounters(unit) {
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
