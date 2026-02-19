import { calcSaveSymbol } from '@/helpers/helpers';
import { Unit } from '@/helpers/types';
import { BUCKLER, HALF_BARDING } from '@/helpers/constants';

describe('calcSaveSymbol', () => {
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

  it('returns "+" for normal shields and barding', () => {
    expect(calcSaveSymbol({
      ...baseUnit,
      defaultShield: 'large shield',
      defaultBarding: 'none',
    })).toBe('+');
  });

  it('returns "*" if shield is BUCKLER', () => {
    expect(calcSaveSymbol({
      ...baseUnit,
      defaultShield: BUCKLER,
      defaultBarding: 'none',
    })).toBe('*');
  });

  it('returns "*" if barding is HALF_BARDING', () => {
    expect(calcSaveSymbol({
      ...baseUnit,
      defaultShield: 'shield',
      defaultBarding: HALF_BARDING,
    })).toBe('*');
  });

  it('returns "*" if upgradedShield is BUCKLER', () => {
    expect(calcSaveSymbol({
      ...baseUnit,
      defaultShield: 'shield',
      upgradedShield: BUCKLER,
      defaultBarding: 'none',
    })).toBe('*');
  });

  it('returns "*" if upgradedBarding is HALF_BARDING', () => {
    expect(calcSaveSymbol({
      ...baseUnit,
      defaultShield: 'shield',
      defaultBarding: 'none',
      upgradedBarding: HALF_BARDING,
    })).toBe('*');
  });
});
