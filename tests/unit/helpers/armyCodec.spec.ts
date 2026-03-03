import { describe, it, expect } from 'vitest';
import { encodeArmy, decodeCompactArmy, decodeLegacyArmy } from '@/helpers/armyCodec';
import { LookupArmy, ArmyDetail, SavedArmy } from '@/helpers/types';

// Minimal fixture — codec only uses Object.keys(), not the unit values
const testLists: LookupArmy = {
  'Nation A': {
    swordsmen: {} as any,
    archers: {} as any,
  },
  'Nation B': {
    cavalry: {} as any,
  },
};

describe('encodeArmy / decodeCompactArmy', () => {
  it('round-trips a single unit with options', () => {
    const units: ArmyDetail[] = [{ type: 'swordsmen', size: 5, selectedOptions: [0, 2] }];
    const encoded = encodeArmy(units, 'Nation A', 'Test Army', testLists);
    const decoded = decodeCompactArmy(encoded, testLists);
    expect(decoded.nation).toBe('Nation A');
    expect(decoded.armyName).toBe('Test Army');
    expect(decoded.units).toStrictEqual(units);
  });

  it('round-trips multiple units across nations', () => {
    const units: ArmyDetail[] = [
      { type: 'swordsmen', size: 6, selectedOptions: [] },
      { type: 'archers', size: 4, selectedOptions: [1, 3] },
    ];
    const encoded = encodeArmy(units, 'Nation A', 'My Warband', testLists);
    const decoded = decodeCompactArmy(encoded, testLists);
    expect(decoded.nation).toBe('Nation A');
    expect(decoded.armyName).toBe('My Warband');
    expect(decoded.units).toStrictEqual(units);
  });

  it('encodes a unit with no options using the - escape (g00 substitution)', () => {
    const units: ArmyDetail[] = [{ type: 'swordsmen', size: 1, selectedOptions: [] }];
    const encoded = encodeArmy(units, 'Nation A', 'x', testLists);
    // no-options always produces g00 in base-32, which is substituted to '-'
    expect(encoded).toContain('-');
  });

  it('correctly restores options from a - escaped string', () => {
    const units: ArmyDetail[] = [{ type: 'cavalry', size: 3, selectedOptions: [] }];
    const encoded = encodeArmy(units, 'Nation B', 'Test', testLists);
    const decoded = decodeCompactArmy(encoded, testLists);
    expect(decoded.units[0].selectedOptions).toStrictEqual([]);
  });

  it('encodes nation index correctly for second nation', () => {
    const units: ArmyDetail[] = [{ type: 'cavalry', size: 2, selectedOptions: [] }];
    const encoded = encodeArmy(units, 'Nation B', 'n', testLists);
    // Nation B is index 1 → first char is '1'
    expect(encoded[0]).toBe('1');
  });
});

describe('decodeLegacyArmy', () => {
  it('decodes a base64-encoded SavedArmy JSON string', () => {
    const original: SavedArmy = {
      sp: 'punic',
      sa: 'Carthage',
      an: 'Hannibal',
      ac: [{ type: 'spearmen', size: 8, selectedOptions: [] }],
    };
    const encoded = btoa(JSON.stringify(original));
    expect(decodeLegacyArmy(encoded)).toStrictEqual(original);
  });
});
