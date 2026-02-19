import { FULL } from '@/helpers/constants';
import { numDeploymentCounters } from '@/helpers/helpers';
import { Unit } from '@/helpers/types';

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

describe('numDeploymentCounters', () => {
  it('returns 0 for character units', () => {
    expect(numDeploymentCounters({
      ...baseUnit,
      availability: 'character',
    })).toBe(0);
  });
  it('returns 2 for low armour units units', () => {
    expect(numDeploymentCounters({
      ...baseUnit,
    })).toBe(2);
  });
  it('returns 1 for heavy units', () => {
    expect(numDeploymentCounters({
      ...baseUnit,
      defaultBody: FULL,
    })).toBe(1);
  });
});
