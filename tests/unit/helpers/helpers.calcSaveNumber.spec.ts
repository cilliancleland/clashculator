import { LookupNumber, Unit } from '@/helpers/types';
import {
  FULL,
  HEAVY_SHIELD,
  BARDING,
  SAVE_MODS,
} from '@/helpers/constants';
import { calcSaveNumber } from '@/helpers/helpers';

const importedSaveMods: LookupNumber = SAVE_MODS;


describe('calcSaveNumber', () => {
  const baseUnit: Unit = {
    displayName: 'Test',
    availability: 'core',
    combat: 0,
    ranged: 0,
    grit: 0,
    defaultWeapon: '',
    defaultBody: '',
    defaultShield: '',
    traits: [],
    cost: 0,
    options: [],
  };

  it('calculates save number with no upgrades', () => {
    expect(calcSaveNumber(baseUnit)).toBe(7);
  });

  it('calculates save number with armour', () => {
    expect(calcSaveNumber({
      ...baseUnit,
      defaultBody: FULL,
    })).toBe(7 - SAVE_MODS[FULL]);
  });

  it('calculates save number with shield', () => {
    expect(calcSaveNumber({
      ...baseUnit,
      defaultShield: HEAVY_SHIELD,
    })).toBe(7 - SAVE_MODS[HEAVY_SHIELD]);
  });
  it('calculates save number with barding', () => {
    expect(calcSaveNumber({
      ...baseUnit,
      defaultBarding: BARDING,
    })).toBe(7 - SAVE_MODS[BARDING]);
  });
  it('calculates save number with all upgrades', () => {
    expect(calcSaveNumber({
      ...baseUnit,
      upgradedArmour: FULL,
      upgradedShield: HEAVY_SHIELD,
      upgradedBarding: BARDING,
    })).toBe(7 - SAVE_MODS[FULL] - SAVE_MODS[HEAVY_SHIELD] - SAVE_MODS[BARDING]);
  });
});
