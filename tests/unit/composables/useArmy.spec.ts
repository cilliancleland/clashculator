import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useArmy } from '@/composables/useArmy';
import allLists from '@/helpers/lists';

const localStorageMock = {
  getItem: vi.fn().mockReturnValue(null),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

const firstPunicNation = Object.keys(allLists.punic)[0];
const firstPunicUnitKey = Object.keys(allLists.punic[firstPunicNation])[0];

describe('useArmy', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', localStorageMock);
    vi.spyOn(window.history, 'pushState').mockImplementation(() => {});
    localStorageMock.getItem.mockReturnValue(null);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('addUnit pushes to armyContents and returns the new unit', () => {
    const { addUnit, armyContents, selectNation, selectPeriod } = useArmy();
    selectPeriod('punic');
    selectNation(firstPunicNation);
    const unit = addUnit(firstPunicUnitKey);
    expect(armyContents.value).toHaveLength(1);
    expect(unit.type).toBe(firstPunicUnitKey);
  });

  it('removeUnit splices the correct index', () => {
    const { addUnit, removeUnit, armyContents, selectNation, selectPeriod } = useArmy();
    selectPeriod('punic');
    selectNation(firstPunicNation);
    addUnit(firstPunicUnitKey);
    addUnit(firstPunicUnitKey);
    removeUnit(0);
    expect(armyContents.value).toHaveLength(1);
  });

  it('reposUp swaps a unit with the one above it', () => {
    const { addUnit, reposUp, armyContents, selectNation, selectPeriod } = useArmy();
    selectPeriod('punic');
    selectNation(firstPunicNation);
    const unitKeys = Object.keys(allLists.punic[firstPunicNation]);
    addUnit(unitKeys[0]);
    addUnit(unitKeys[1] ?? unitKeys[0]);
    const secondType = armyContents.value[1].type;
    reposUp(1);
    expect(armyContents.value[0].type).toBe(secondType);
  });

  it('reposDown swaps a unit with the one below it', () => {
    const { addUnit, reposDown, armyContents, selectNation, selectPeriod } = useArmy();
    selectPeriod('punic');
    selectNation(firstPunicNation);
    const unitKeys = Object.keys(allLists.punic[firstPunicNation]);
    addUnit(unitKeys[0]);
    addUnit(unitKeys[1] ?? unitKeys[0]);
    const firstType = armyContents.value[0].type;
    reposDown(0);
    expect(armyContents.value[1].type).toBe(firstType);
  });

  it('armySort orders units by their position in the nation lookup', () => {
    const { addUnit, armySort, armyContents, selectNation, selectPeriod } = useArmy();
    selectPeriod('punic');
    selectNation(firstPunicNation);
    const unitKeys = Object.keys(allLists.punic[firstPunicNation]);
    if (unitKeys.length < 2) return;
    addUnit(unitKeys[1]);
    addUnit(unitKeys[0]);
    armySort();
    expect(armyContents.value[0].type).toBe(unitKeys[0]);
    expect(armyContents.value[1].type).toBe(unitKeys[1]);
  });

  it('armyUnchanged is true after saveLocally', () => {
    const notify = vi.fn();
    const { addUnit, saveLocally, armyUnchanged, selectNation, selectPeriod, armyName } = useArmy(notify);
    selectPeriod('punic');
    selectNation(firstPunicNation);
    addUnit(firstPunicUnitKey);
    armyName.value = 'Test Army';
    localStorageMock.getItem.mockReturnValue('[]');
    saveLocally();
    expect(armyUnchanged.value).toBe(true);
    expect(notify).toHaveBeenCalledWith('Your army has been saved to this device');
  });

  it('armyUnchanged is false after a mutation', () => {
    const notify = vi.fn();
    const { addUnit, saveLocally, removeUnit, armyUnchanged, selectNation, selectPeriod, armyName } = useArmy(notify);
    selectPeriod('punic');
    selectNation(firstPunicNation);
    addUnit(firstPunicUnitKey);
    armyName.value = 'Test Army';
    localStorageMock.getItem.mockReturnValue('[]');
    saveLocally();
    removeUnit(0);
    expect(armyUnchanged.value).toBe(false);
  });

  it('reset clears army state', () => {
    const { addUnit, reset, armyContents, selectedNation, armyName, selectNation, selectPeriod } = useArmy();
    selectPeriod('punic');
    selectNation(firstPunicNation);
    addUnit(firstPunicUnitKey);
    reset();
    expect(armyContents.value).toHaveLength(0);
    expect(selectedNation.value).toBe('');
    expect(armyName.value).toBe('Unknown soldiers');
  });

  it('mostTraits collects traits from units and filters wound/attack prefixes', () => {
    const { addUnit, mostTraits, selectNation, selectPeriod } = useArmy();
    selectPeriod('punic');
    selectNation(firstPunicNation);
    addUnit(firstPunicUnitKey);
    const traits = mostTraits.value;
    expect(traits.every((t) => !t.startsWith('wound') && !t.startsWith('attack'))).toBe(true);
  });

  it('loadArmy hydrates state from localStorage', () => {
    const { loadArmy, armyContents, selectedNation, armyName } = useArmy();
    const savedArmy = {
      sp: 'punic',
      sa: firstPunicNation,
      an: 'Loaded Army',
      ac: [{ type: firstPunicUnitKey, size: 4, selectedOptions: [] }],
    };
    localStorageMock.getItem.mockReturnValue(JSON.stringify({ 'Loaded Army': savedArmy }));
    loadArmy('Loaded Army');
    expect(selectedNation.value).toBe(firstPunicNation);
    expect(armyName.value).toBe('Loaded Army');
    expect(armyContents.value).toHaveLength(1);
  });
});
