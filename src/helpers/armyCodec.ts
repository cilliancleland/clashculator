import { ArmyDetail, DecodedArmy, LookupArmy, SavedArmy } from './types';

export function encodeArmy(
  units: ArmyDetail[],
  selectedNation: string,
  armyName: string,
  periodLists: LookupArmy,
): string {
  let ad = Object.keys(periodLists).indexOf(selectedNation).toString(32);
  ad += units.reduce((acc, unit) => {
    const type = unit.type.toString();
    let ret = unit.size.toString(32);
    ret += Object.keys(periodLists[selectedNation]).indexOf(type).toString(32);
    let optionsBin = '1';
    for (let i = 0; i < 14; i += 1) {
      if (unit.selectedOptions.includes(i)) {
        optionsBin += '1';
      } else {
        optionsBin += '0';
      }
    }
    ret += parseInt(optionsBin, 2).toString(32).replace(/g00/g, '-').replace(/o00/g, '~');
    return acc + ret;
  }, '');
  ad += `_${armyName}`;
  return ad;
}

export function decodeCompactArmy(str: string, periodLists: LookupArmy): DecodedArmy {
  const pos = str.indexOf('_');
  const armyName = str.substr(pos + 1);
  const nation = Object.keys(periodLists)[parseInt(str.substr(0, 1), 32)];
  let nums = str.substr(1, pos).replace(/-/g, 'g00').replace(/~/g, 'o00');
  const units: ArmyDetail[] = [];
  while (nums.length > 4) {
    const size = parseInt(nums.substr(0, 1), 32);
    const unitIndex = parseInt(nums.substr(1, 1), 32);
    const opts = parseInt(nums.substr(2, 3), 32);
    const optsBin = opts.toString(2);
    const optsArr: number[] = [];
    const type = Object.keys(periodLists[nation])[unitIndex];
    for (let i = 1; i < 15; i += 1) {
      if (optsBin.substr(i, 1) === '1') {
        optsArr.push(i - 1);
      }
    }
    units.push({ type, size, selectedOptions: optsArr });
    nums = nums.substr(5);
  }
  return { nation, armyName, units };
}

export function decodeLegacyArmy(str: string): SavedArmy {
  return JSON.parse(atob(decodeURIComponent(str)));
}
